"use client";

import { FormEvent, Fragment, useState } from "react";
import NextLink from "components/reuseable/links/NextLink";


export default function RegisterForm() {
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement registration logic or integrate with your auth provider
    alert("Registration functionality is not implemented.");
  };

  return (
    <Fragment>
      <form onSubmit={handleSignup} className="text-start mb-3">
        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Sign Up
        </button>
      </form>

      <p className="mb-0">
        Already have an account? <NextLink href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="hover">Sign in</NextLink>
      </p>
    </Fragment>
  );
}
