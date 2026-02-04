"use client";

import { Fragment, memo, ReactElement, useRef, useState } from "react";
import clsx from "clsx";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// LOCAL CUSTOM COMPONENTS
import Info from "../components/Info";
import Search from "../components/search";
import Signin from "../components/signin";
import Signup from "../components/signup";
import MiniCart from "../components/mini-cart";
import HeaderRight from "../components/header-right";
import FancyHeader from "../components/fancy-header";
import { usePathname } from "next/navigation";
import StartupNav from "../components/startup";
import RegistrationsNav from "../components/registrations";
import GstNav from "../components/gst";
import IncomeTaxNav from "../components/income-tax";
import ComplianceNav from "../components/compliance";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "api/firebase";
import { signOut } from "firebase/auth";
// import { useRouter } from "next/router";
import Link from "next/link";
import TrademarkNav from "../components/trademark";
import MCANav from "../components/mca";
import GlobalNav from "../components/global";

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  button,
  cart = false,
  info = false,
  fancy = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  logoAlt = "logo-dark",
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light",
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? "logo-dark" : logoAlt;
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const navbarBg = isHomepage ? "bg-transparent" : "bg-primary";

  // const [user, setUser] = useState(null); // Stores logged-in user data
  
  // const handleLogout = () => {
  //   setUser(null);
  //   // Clear any stored tokens/sessions here
  //   alert('Logged out.');
  // };

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // // Simulated login logic
  // const handleLogin = () => {
  //   console.log("Logging in...");
  //   // You can replace this with actual auth logic (e.g., API call)
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   console.log("Logging out...");
  //   // Clear auth state, tokens, etc.
  //   setIsLoggedIn(false);
  // };

   const [user] = useAuthState(auth);
  //  const router = useRouter();


   const handleLogout = async () => {
     await signOut(auth);
    //  document.getElementById("modal-signin")!.classList.add("show", "d-block");
    //  document.getElementById("modal-signin")!.classList.remove("d-none");
    //  document
    //    .querySelectorAll(".modal-backdrop")
    //    .forEach((el) => el.classList.add("modal-backdrop"));
    //  document
    //    .querySelectorAll(".modal-open")
    //    .forEach((el) => el.classList.remove("overflow-y-auto", "p-0"));
     //  router.push("/");
   };
   

  // all main header contents
  const headerContent = (
    <Fragment>
      <div style={{
        backgroundColor: '#ffffff',
      }}>
        <div className="container d-flex flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100 py-2">
            <NextLink href="/">
              <img
                alt="logo"
                src={`/img/logo.png`}
                width={100}
              />
            </NextLink>
          </div>

          <div
            id="offcanvas-nav"
            data-bs-scroll="true"
            className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
          >
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">Legallens</h3>
              <button
                type="button"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
                className="btn-close btn-close-white ms-auto"
              />
            </div>

            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                {/* ===================== Startup nav item ===================== */}
                    <StartupNav />
                    <RegistrationsNav />
                    <TrademarkNav />
                    <GstNav />
                    <IncomeTaxNav />
                    <MCANav />
                    <ComplianceNav />
                    <GlobalNav />
                    {/* <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Registrations</a></li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Trademark</a></li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Goods & Services Tax</a></li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Income Tax </a></li>            
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Compliance</a></li>                    */}
                    <li className="nav-item"><a className="nav-link" href="AboutUs">About us</a></li>
              </ul>

              {/* ============= show contact info in the small device sidebar ============= */}
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <NextLink
                    className="link-inverse"
                    href="mailto:first.last@email.com"
                  >
                    legallens@gmail.com
                  </NextLink>
                  <br />
                  <NextLink href="tel:0123456789">00 (123) 456 78 90</NextLink>
                  <br />
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          {/* ============= right side header content ============= */}
          {/* <HeaderRight
            cart={cart}
            // info={info}
            // button={button}
            // search={search}
            // social={social}
            language={language}
            navOtherClass={navOtherClass}
            button={
              user   ? (<a href="#" onClick={handleLogout} className="btn btn-sm btn-primary rounded-pill">
                Logout
              </a>) : (
              <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
                Login
              </a>)
            }
          /> */}

          <div className="d-flex align-items-center">
            {!user ? (
              <>
              <li className="nav-item d-none d-md-block">
                <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">                  
                    Login
                </Link>
                </li>
                {/* <Link href="/signup">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Signup
                  </button>
                </Link> */}
              </>
            ) : (
              <>
              <li className="nav-item list-unstyled me-3">
                <a
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-cart"
                  className="nav-link position-relative d-flex flex-row align-items-center">
                  <i className="uil uil-shopping-cart" style={{fontSize: '1.5rem'}} />
                  <span className="badge badge-cart bg-primary">3</span>
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <Link href="#" className="btn btn-sm btn-primary rounded-pill" onClick={handleLogout}>
                    Logout
                </Link>
              </li>              
              {/* <p className="text-gray-600">You are logged in as {user.email}</p> */}
              </>
            )}
            <HeaderRight
              navOtherClass={navOtherClass} />
          </div>          
        </div>
      </div>
    </Fragment>
  );

  const navbarClassName = clsx(
    sticky ? navClassName.replace("navbar-dark", "navbar-light") : navClassName,
    {
      "navbar-clone fixed navbar-stick": sticky,
    }
  );

  return (
    <Fragment>
      {stickyBox && (
        <div
          style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }}
        />
      )}

      <nav ref={navbarRef} className={navbarClassName}>
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className="w-100">{headerContent}</div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info && <Info />}

      {/* ============= show search box ============= */}
      {search && <Search />}

      {/* ============= cart sidebar ============= */}
      {cart && <MiniCart />}
    </Fragment>
  );
}
