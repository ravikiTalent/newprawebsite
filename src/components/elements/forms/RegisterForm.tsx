"use client";

import { Fragment } from "react";
import NextLink from "components/reuseable/links/NextLink";

export default function RegisterForm() {
  return (
    <Fragment>
      <a href="/api/auth/register" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
        Sign Up
      </a>

      <p className="mb-0">
        Already have an account? <NextLink href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="hover">Sign in</NextLink>
      </p>
    </Fragment>
  );
}
