"use client";

import { FormEvent, Fragment, useState } from "react";
import NextLink from "components/reuseable/links/NextLink";
import { auth } from "api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Signin from "components/blocks/navbar/components/signin";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState("");

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(email, password);

  //   if (password !== confirmPassword) {
  //     setError('Passwords do not match.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('../../../api/register.js', { // API endpoint for signup
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       // Handle successful signup (e.g., redirect to login, show success message)
  //       console.log('Signup successful:', data.message);
  //       // router.push('/login'); // Example redirect if using Next.js router
  //     } else {
  //       setError(data.message || 'Signup failed.');
  //     }
  //   } catch (err) {
  //     setError('An error occurred during signup.');
  //     console.error('Signup error:', err);
  //   }
  // };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSignup} className="text-start mb-3">
        <div className="form-floating mb-4">
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="email"
            value={email}
            id="registerEmail"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="registerEmail">Email</label>
        </div>

        <div className="form-floating password-field mb-4">
          <input
            value={password}
            id="registerPassword"
            placeholder="Password"
            className="form-control"
            type={visiblePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <i className={`uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`} />
          </span>

          <label htmlFor="registerPassword">Password</label>
        </div>

        <div className="form-floating password-field mb-4">
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
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Sign Up
        </button>
      </form>

      <p className="mb-0">
        Already have an account? <NextLink title="Sign in" href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="hover" />
      </p>

      {/* <div className="divider-icon my-4">or</div>
      <nav className="nav social justify-content-center text-center">
        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-google">
          <i className="uil uil-google" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-facebook-f">
          <i className="uil uil-facebook-f" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-twitter">
          <i className="uil uil-twitter" />
        </a>
      </nav> */}
    </Fragment>
  );

  return (
      <Fragment>
        {/* ============= signup modal ============= */}
              <Signin />
      </Fragment>
    );
}
