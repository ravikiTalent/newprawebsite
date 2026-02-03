import Image from "next/image";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import NextLink from "components/reuseable/links/NextLink";
// IMAGES
import notFoundImage from "../../public/img/illustrations/404.png";

export default function NotFound() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink href="#" className="btn btn-sm btn-primary rounded-pill">Contact</NextLink>}
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-9 col-xl-8 mx-auto">
                <figure className="mb-10">
                  <Image src={notFoundImage} alt="not found" />
                </figure>
              </div>

              <div className="col-lg-8 col-xl-8 col-xxl-8 mx-auto text-center">
                <h1 className="mb-3">Oops! Page Not Found.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  The page you are looking for is not available or has been moved. Try a different page or go to
                  homepage with the button below.
                </p>

                <NextLink href="/" className="btn btn-primary rounded-pill">Go to Homepage</NextLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
