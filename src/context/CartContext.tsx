"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./AuthContext";

export interface CartItem {
  id: string;
  title: string;
  image: string;
  size?: number;
  color?: string;
  quantity: number;
  salePrice: number;
  regularPrice: number;
}

interface CartContextType {
  cartList: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const { user, isAuthenticated } = useAuth();

  // Load cart from localStorage when user changes
  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(`cart_${user.id}`);
      if (savedCart) {
        setCartList(JSON.parse(savedCart));
      } else {
        setCartList([]);
      }
    } else {
      setCartList([]);
    }
  }, [user]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (user && cartList.length >= 0) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartList));
    }
  }, [cartList, user]);

  const addItem = (item: CartItem) => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart");
      return;
    }

    setCartList((prevList) => {
      // Check if item already exists
      const existingItem = prevList.find((cartItem) => cartItem.id === item.id);
      
      if (existingItem) {
        // If exists, increase quantity
        return prevList.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      // Add new item
      return [...prevList, item];
    });
  };

  const removeItem = (itemId: string) => {
    if (!isAuthenticated) {
      alert("Please login to manage cart");
      return;
    }
    setCartList((prevList) => prevList.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartList([]);
    if (user) {
      localStorage.removeItem(`cart_${user.id}`);
    }
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
