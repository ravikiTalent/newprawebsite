import React, { createContext, useContext, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name?: string;
  title?: string;
  image: string;
  regularPrice: number;
  salePrice?: number;
  quantity: number;
  color?: string;
  size?: number;
  [key: string]: any;
}

interface CartContextType {
  cartList: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
}

// Default context value for SSR/SSG
const defaultCartValue: CartContextType = {
  cartList: [],
  addItem: () => {},
  removeItem: () => {},
};

const CartContext = createContext<CartContextType>(defaultCartValue);

export function CartProvider({ children }: { children: ReactNode }) {
  const value: CartContextType = {
    cartList: [],
    addItem: () => {},
    removeItem: () => {},
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    return defaultCartValue;
  }
  return context;
}

export default CartContext;
