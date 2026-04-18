"use client";

import { Fragment } from "react";
import NextLink from "components/reuseable/links/NextLink";

export default function LoginForm() {
  const handleLogin = () => {
    window.location.assign("/api/auth/login");
  };

  return (
    <Fragment>
      <h2 className="mb-3 text-start">Welcome</h2>
      <p className="lead mb-6 text-start">Sign in with Kinde.</p>

      <button type="button" onClick={handleLogin} className="btn btn-primary rounded-pill btn-login w-100 mb-2">
        Sign In with Kinde
      </button>

      <p className="mb-0">
        Don&apos;t have an account?{" "}
        <NextLink href="#" data-bs-toggle="modal" data-bs-target="#modal-signup" className="hover">
          Sign up
        </NextLink>
      </p>
    </Fragment>
  );
}
