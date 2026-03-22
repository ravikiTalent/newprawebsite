"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { AuthProvider } from "context/AuthContext";
import { CartProvider } from "context/CartContext";
import ThemeProvider from "theme/ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <KindeProvider
      clientId={process.env.NEXT_PUBLIC_KINDE_CLIENT_ID || ""}
      domain={process.env.NEXT_PUBLIC_KINDE_ISSUER_URL || ""}
      redirectUri={process.env.NEXT_PUBLIC_KINDE_POST_LOGIN_REDIRECT_URL || ""}
      logoutUri={process.env.NEXT_PUBLIC_KINDE_POST_LOGOUT_REDIRECT_URL || ""}
    >
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </KindeProvider>
  );
}