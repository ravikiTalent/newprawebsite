"use client";
import { ReactNode, useState } from "react";
import CartListItem02 from "./CartListItem02";
import { cartList as initialCartList } from "data/cart-page";

interface CartWrapperProps {
  children?: ReactNode;
}

export default function CartWrapper({ children }: CartWrapperProps) {
  const [cartList, setCartList] = useState(initialCartList);

  const handleDeleteItem = (itemId: string) => {
    setCartList(cartList.filter(item => item.id !== itemId));
  };

  return (
    <>
      <table className="table text-center shopping-cart">
        <tbody>
          {cartList.map((item) => (
            <CartListItem02 
              key={item.id} 
              {...item} 
              onDelete={handleDeleteItem}
            />
          ))}
        </tbody>
      </table>
      {children}
    </>
  );
}
