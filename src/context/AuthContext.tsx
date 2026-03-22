"use client";
import { createContext, useContext, ReactNode } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export interface User {
  id: string;
  name: string;
  email: string | undefined;
  phone?: string;
  given_name?: string;
  family_name?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  register: () => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user: kindeUser, isAuthenticated, login, register, logout, isLoading } = useKindeAuth();

  // Transform Kinde user to our User interface
  const user: User | null = kindeUser ? {
    id: kindeUser.id,
    name: (kindeUser.givenName || "") + " " + (kindeUser.familyName || ""),
    email: kindeUser.email,
    phone: "", // Kinde doesn't provide phone by default
    given_name: kindeUser.givenName,
    family_name: kindeUser.familyName,
  } : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

