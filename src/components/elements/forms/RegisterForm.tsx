"use client";

import { FormEvent, Fragment, useState } from "react";
import NextLink from "components/reuseable/links/NextLink";
import { useAuth } from "context/AuthContext";

export default function RegisterForm() {
  const { register } = useAuth();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(); // Kinde handles the registration flow
  };

  return (
    <Fragment>
      <form onSubmit={handleSignup} className="text-start mb-3">
        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Sign Up with Kinde
        </button>
      </form>

      <p className="mb-0">
        Already have an account? <NextLink href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="hover">Sign in</NextLink>
      </p>
    </Fragment>
  );
}
