import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

import { Process7 } from "components/blocks/process";
import { Hero15 } from "components/blocks/hero";
import { Team3 } from "components/blocks/team";
import { About6 } from "components/blocks/about";
import { Facts5 } from "components/blocks/facts";
import { Contact7 } from "components/blocks/contact";
import { CTA5 } from "components/blocks/call-to-action";
import { Testimonial5 } from "components/blocks/testimonial";
import { Services1 } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";


export default function Demo15() {
  return (
    <Fragment>
      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero sections ========== */}
        <Hero15 />

        <Services1 />

        <section className="pt-12 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <div className="card">
                  <div className="card-body p-0">
                    <h2 className="card-title p-5 m-0">Updates and Alerts</h2>
                    <div className="card-text">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td>
                              <NextLink title="Link example" href="#" className="hover me-4 mb-5" />
                              <span className="mb-0 d-block">Published On: <strong>01012025</strong></span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <NextLink title="Link example" href="#" className="hover me-4 mb-5" />
                              <span className="mb-0 d-block">Published On: <strong>01012025</strong></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="card">
                  <div className="card-body p-0">
                    <h2 className="card-title p-5 m-0">Due Dates</h2>
                    <div className="card-text">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td>
                              <p className="m-0">GSTR 1 (Monthly) for Aug 2025</p>
                              <span className="mb-0 d-block">Due Date: <strong>01012025</strong></span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="m-0">GSTR 1 (Monthly) for Aug 2025</p>
                              <span className="mb-0 d-block">Due Date: <strong>01012025</strong></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="wrapper bg-light angled lower-end">
          <div className="container py-14 py-md-16"> */}
            {/* ========== about section ========== */}
            {/* <About6 /> */}

            {/* ========== process section ========== */}
            {/* <Process7 /> */}
          {/* </div>
        </section> */}

        {/* ========== testimonial section ========== */}
        {/* <Testimonial5 /> */}

        {/* ========== team section ========== */}
        {/* <Team3 /> */}

        {/* ========== facts section ========== */}
        {/* <Facts5 /> */}

        {/* ========== contact section ========== */}
        {/* <Contact7 /> */}

        {/* ========== call to action section ========== */}
        {/* <CTA5 /> */}
      </main>

      {/* ========== footer section ========== */}
    </Fragment>
  );
}
