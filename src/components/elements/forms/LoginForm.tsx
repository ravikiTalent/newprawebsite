"use client";

import { FormEvent, Fragment, useState } from "react";
import NextLink from "components/reuseable/links/NextLink";
import Signup from "components/blocks/navbar/components/signup";
import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "api/firebase";
import Forgotpassword from "components/blocks/navbar/components/forgotpassword";

export default function LoginForm() {  //{ onLogin }
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

  const handleLogin = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // alert("Logged in successfully!");
      // handleCloseModal();
      // onLogin();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // alert("Logged in with Google 🎉");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your EmailId.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your Email 📩");
      //setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <Fragment>
      <h2 className="mb-3 text-start">Welcome</h2>
      <p className="lead mb-6 text-start">Fill your email and password to sign in.</p>

      <form onSubmit={handleLogin} className="text-start mb-3">
        {/* {error && <p className="text-red-500">{error}</p>} */}
        <div className="form-floating mb-4">
          <input
            type="email"
            value={email}
            id="loginEmail"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="loginEmail">Email</label>
        </div>

        <div className="form-floating password-field mb-4">
          <input
            value={password}
            id="loginPassword"
            placeholder="Password"
            className="form-control"
            type={visiblePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <i className={`uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`} />
          </span>

          <label htmlFor="loginPassword">Password</label>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2" data-bs-dismiss="modal">
          Sign In
        </button>
      </form>

      <p className="mb-1">
        <NextLink title="Forgot Password?" href="#" className="hover" onClick={handleForgotPassword} /> 
      </p>{/* onClick={handleForgotPassword} */}
      {/* data-bs-toggle="modal" data-bs-target="#modal-forgotpassword" */}

      <p className="mb-0">
        Don&apos;t have an account? <NextLink title="Sign up" href="#" data-bs-toggle="modal" data-bs-target="#modal-signup" className="hover" />
      </p>

      <div className="divider-icon my-4">or</div>

      <nav className="nav social justify-content-center text-center">
        <a href="#" className="btn btn-circle btn-sm btn-google" onClick={handleGoogleLogin} data-bs-dismiss="modal">
          <i className="uil uil-google" />
        </a>

        {/* <a href="#" target="__blank" className="btn btn-circle btn-sm btn-facebook-f">
          <i className="uil uil-facebook-f" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-twitter">
          <i className="uil uil-twitter" />
        </a> */}
      </nav>
      
    </Fragment>
  );

  return (
    <Fragment>
      {/* ============= signup modal ============= */}
            <Signup />
            <Forgotpassword />
    </Fragment>
  );
}
