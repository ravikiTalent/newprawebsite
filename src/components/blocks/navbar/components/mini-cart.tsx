"use client";
import Link from "next/link";
import Image from "next/image";
import NextLink from "components/reuseable/links/NextLink";
import currency from "utils/currency";

interface CartItem {
  id: string;
  name: string;
  image: string;
  regularPrice: number;
  salePrice?: number;
  quantity: number;
}

export default function MiniCart() {
  // Placeholder implementation
  return (
    <div className="cart-dropdown">
      <div className="cart-header">
        <h6>Shopping Cart</h6>
      </div>
      <div className="cart-body">
        <p className="text-muted">Your cart is empty</p>
      </div>
    </div>
  );
}
