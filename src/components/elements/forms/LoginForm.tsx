"use client";

import { FormEvent, Fragment, useState } from "react";
import NextLink from "components/reuseable/links/NextLink";
import Signup from "components/blocks/navbar/components/signup";

import Forgotpassword from "components/blocks/navbar/components/forgotpassword";

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(email, password);
  //   // In a real application, you would send these credentials to a backend API
  //   // for authentication. For this example, we'll simulate a successful login.
  //   if (email === 'test@example.com' && password === 'password123') {
  //     onLogin({ email }); // Pass user data to the parent component
  //   } else {
  //     setError('Invalid email or password.');
  //   }
  // };

  function handleCloseModal(){            
    document.getElementById("modal-signin")!.classList.remove("show", "d-block");
    document.getElementById("modal-signin")!.classList.add("d-none");
    document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
    document.querySelectorAll(".modal-open").forEach(el => el.classList.add("overflow-y-auto", "p-0"));
}


  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement login logic or integrate with your auth provider
    setError("Login functionality is not implemented.");
  };

  // Remove Google login and forgot password logic for local-only auth

  return (
    <Fragment>
      <h2 className="mb-3 text-start">Welcome</h2>
      <p className="lead mb-6 text-start">Sign in with Kinde.</p>

      <form onSubmit={handleLogin} className="text-start mb-3">
        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Sign In with Kinde
        </button>
      </form>

      <p className="mb-0">
        Don&apos;t have an account?{" "}
        <NextLink href="#" data-bs-toggle="modal" data-bs-target="#modal-signup" className="hover">
          Sign up
        </NextLink>
      </p>
    </Fragment>
  );
}
