import type { PropsWithChildren } from "react";
import "animate.css";
import "assets/scss/style.scss";

export const metadata = {
  title: "Authentication - Legallens India",
  description: "Login and signup for Legallens India",
};

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="wrapper">
        {children}
      </main>
    </>
  );
}
