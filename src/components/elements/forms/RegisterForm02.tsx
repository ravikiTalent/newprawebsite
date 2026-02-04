"use client";

import { FormEvent, Fragment, useState } from "react";
import NextLink from "components/reuseable/links/NextLink";
import Signin from "components/blocks/navbar/components/signin";

export default function RegisterForm02() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setMobile] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="text-start mb-3">
        <div className="form-floating mb-4">
          <input
            id="Rname"
            type="text"
            value={name}
            placeholder="Name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="Rname">Name</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="email"
            value={email}
            id="REmail"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="REmail">Email</label>
        </div>

        <div className="form-floating password-field mb-4">
          <input
            value={password}
            id="phoneNumber"
            placeholder="Phone Number"
            className="form-control"
            type="mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>

        {/* <div className="form-floating password-field mb-4">
          <input
            id="password-confirm"
            value={confirmPassword}
            className="form-control"
            placeholder="Confirm Password"
            type={visiblePassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <i className={`uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`} />
          </span>

          <label htmlFor="password-confirm">Confirm Password</label>
        </div> */}

        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Get Started
        </button>
      </form>

      <p className="mb-0">
        Already have an account? <NextLink href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="hover">Sign in</NextLink>
      </p>
    </Fragment>
  );
  return (
    <Fragment>
  {/* ============= signin modal ============= */}
        <Signin />
        </Fragment>
  );
}
