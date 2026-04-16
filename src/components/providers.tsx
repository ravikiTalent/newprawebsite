"use client";

import ThemeProvider from "theme/ThemeProvider";
import { CartProvider } from "context/CartContext";
import { AuthProvider } from "context/AuthContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}
