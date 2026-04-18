"use client";

import { Fragment } from "react";
import NextLink from "components/reuseable/links/NextLink";

export default function RegisterForm() {
  const handleSignup = () => {
    window.location.assign("/api/auth/register");
  };

  return (
    <Fragment>
      <button type="button" onClick={handleSignup} className="btn btn-primary rounded-pill btn-login w-100 mb-2">
        Sign Up
      </button>

      <p className="mb-0">
        Already have an account? <NextLink href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="hover">Sign in</NextLink>
      </p>
    </Fragment>
  );
}
