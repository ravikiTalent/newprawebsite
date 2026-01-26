import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkRenewal() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section
        className="wrapper text-white image-wrapper bg-image bg-overlay"
        style={{ backgroundImage: "url(/img/photos/bg1.jpg)" }}
      >
        <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
              <h1 className="display-1 text-white mb-3">Trademark Renewal</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In the dynamic business world, having a trademark sets your
                brand apart and ensures its distinct identity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light angled upper-end lower-end">
        <div className="container py-14 py-md-8">
          <div className="row">
            <Breadcrumb
              data={[
                { id: 1, title: "Home", url: "#" },
                { id: 2, title: "Trademark", url: "Trademark" },
                { id: 3, title: "Trademark Renewal", url: "" },
              ]}
            />
          </div>
          <div className="row gy-10 mb-14 mb-md-8 align-items-stretch">
            <div className="col-lg-8 position-relative">
              <div className="card shadow-lg h-100">
                <div className="card-body p-4">
                  <div className="row gx-lg-8 gx-xl-12 gy-10">
                    <div className="col-lg-4 position-relative">
                      <Fragment>
                        {/* <div
                                      className="shape bg-dot primary rellax w-16 h-20"
                                      style={{ top: "3rem", left: "5.5rem" }}
                                    /> */}

                        <div className="overlap-grid overlap-grid-2">
                          <div className="item w-100 m-0">
                            <figure className="rounded shadow">
                              <img
                                src={`/img/photos//a1.jpg`}
                                srcSet={`/img/photos/a1.jpg`}
                                alt="Hi"
                              />
                            </figure>
                          </div>
                        </div>
                      </Fragment>
                    </div>

                    <div className="col-lg-8 ps-0">
                      <h5 className="card-title">Trademark Renewal</h5>
                      <p>
                        In the dynamic business world, having a trademark sets
                        your brand apart and ensures its distinct identity.
                      </p>
                      <div className="form-select-wrapper mb-4">
                        <select
                          id="GSTSelction"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option
                            defaultValue={"GST Software & Registration"}
                            value="1"
                          >
                            GST Software & Registration
                          </option>
                          <option value="2">
                            GST Filing & Registration - 6 Months
                          </option>
                          <option value="3">
                            GST Filing & Registration - 12 Months
                          </option>
                        </select>
                      </div>
                      <Pricing1 roundShape />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 position-relative">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <div className="py-4">
                    <table className="table text-center shopping-cart">
                      <tbody>
                        {cartList.map((item) => (
                          <CartListItem02 key={item.id} {...item} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h5 className="card-title">Proprietorship</h5>
                  <RegisterForm02 />
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-8">
            <div className="col-lg-5 position-relative order-lg-2">
              <Fragment>
                <div
                  className="shape bg-dot primary rellax w-16 h-20"
                  style={{ top: "3rem", left: "5.5rem" }}
                />

                <div className="overlap-grid overlap-grid-2">
                  <div className="item">
                    <figure className="rounded shadow">
                      <img
                        src={`/img/photos//about3@2x.jpg`}
                        srcSet={`/img/photos/about3@2x.jpg`}
                        alt="Hi"
                      />
                    </figure>
                  </div>
                </div>
              </Fragment>
            </div>

            <div className="col-lg-7">
              {/* <Megaphone className="icon-svg-md mb-4" /> */}

              <h2 className="display-4 mb-3">Trademark Renewal</h2>
              <p>
                In the dynamic business world, having a trademark sets your
                brand apart and ensures its distinct identity. Once your
                trademark is officially registered, it's pivotal to remain
                vigilant about its ongoing validity and protection. This is
                where the importance of trademark renewal comes in. By updating
                your trademark within the designated time frames, you preserve
                your brand's exclusivity, uphold its legal status, and reinforce
                its place in the market. Initiating the trademark renewal
                process at the right time will continue the validity of the
                trademark.
              </p>
              <p>
                Whether you are a seasoned entrepreneur or a new business owner,
                understanding the significance of trademark renewal online is
                fundamental to preserving the reputation and endurance of your
                brand in the market.
              </p>
              <h3>What's a Trademark?</h3>
              <p>
                A trademark is a unique emblem, logo, word, phrase, design, or a
                mix of these elements that visually signifies and points to the
                origin of goods or services from a specific company or
                individual. Trademarks are important assets that allow consumers
                to recognize and connect products or services with a certain
                brand.
              </p>
              <h3>Trademark Renewal</h3>
              <p>
                Trademark owners have the privilege to extend their trademark's
                validity every decade. Before the end of these ten years, the
                Registrar offers a six-month grace period, during which the
                trademark holder can begin the trademark renewal process and
                retain its advantages. If the renewal doesn't occur, the
                Registrar will announce the trademark's removal in the Trademark
                Journal.
              </p>
              <h3>Trademark Renewal Provision (Section 25)</h3>
              <p>
                According to the Trade Marks Act of 1999, a registered trademark
                can be renewed for an additional decade following the end date
                of its initial registration or its most recent renewal. To
                commence the renewal procedure, the trademark's owner must
                formally apply to the Registrar of Trademarks, ensuring it's
                done within the stipulated time frame and following the set
                guidelines. Once the application is submitted along with the
                mandatory fee, the Registrar will extend the trademark's
                registration for another ten years.
              </p>
              <h3>
                Deletion of Registered Trademark Due to Non-Renewal (Section 25)
              </h3>
              <p>
                Before a trademark's registration expiration, the Registrar must
                notify the trademark owner about the impending expiry and the
                terms for its renewal. If these renewal terms aren't met within
                the designated time frame, the Registrar possesses the right to
                strike the trademark off the register.
              </p>
              <p>
                However, the Act does allow a grace period of six months post
                the expiration date. During this window, the trademark owner can
                still renew their mark by settling a surcharge in addition to
                the regular renewal fee.
              </p>
              <p>
                Moreover, in cases where a trademark has been delisted due to
                the non-settlement of the renewal charge, the trademark holder
                can request a reinstatement within a year from the last
                registration's end date. Upon receiving this application and the
                stipulated fee, the Registrar can reinstate and renew the
                trademark, potentially with specific conditions or limitations
                attached.
              </p>
              <h3>Benefits of Renewing a Trademark</h3>
              <p>
                Renewing a trademark offers an array of advantages for its
                holder:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> It offers legal
                      protection and rights that are upheld by the law.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Renewal aids in guarding
                      against trademark breaches and serves as a foundation for
                      seeking damages in instances of such violations.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Renewed trademarks allow
                      the holder to transfer the trademark to another party,
                      whether an individual or a business.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A validly registered
                      trademark can be licensed, thus enhancing its financial
                      worth.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Renewing ensures the
                      holder retains exclusive rights, upholding the brand's
                      unique identity and prestige.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Methods of Trademark Renewal&nbsp;</h3>
              <p>There are two primary methods to renew a trademark:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Renew with alterations:</strong> This option lets
                      you update specific signs or words in the current
                      trademark during renewal.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Renew without alterations:</strong> This option
                      allows for the trademark's extension without any
                      modifications to its existing design or text.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Restoring Your Trademark</h3>
              <p>
                Should a trademark lapse after ten years, the holder isn't out
                of options. They can opt for trademark restoration. This process
                mirrors the renewal procedure but with an added catch: the
                holder needs to pay an extra penalty for surpassing the
                expiration date.
              </p>
              <h3>Trademark Renewal Filing Deadline</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> The renewal application
                      for a trademark should be lodged before the mark's
                      expiration. While it's possible to initiate the renewal
                      application up to a year before its expiration, the
                      precise deadline is six months before the trademark's
                      expiration date.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Suppose a trademark's
                      registration has elapsed due to non-renewal before its due
                      date. In that case, renewal is still attainable within six
                      months post-expiration, but this comes with an additional
                      surcharge on the standard government renewal fee.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Should the trademark not
                      be renewed before its expiration or within the subsequent
                      six months (with the added fee), the trademark
                      registration will be revoked.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                However, if a trademark gets canceled, there's a possibility for
                restoration. An application for reinstatement must be submitted
                within six months following the cancellation.
              </p>
              <h3>Documentation Needed for Trademark Renewal</h3>
              <p>
                For trademark renewal online, the following documents must
                accompany the TM-12 renewal form when submitted to the Registrar
                of Trademarks (RoT):
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> A certified copy of the
                      original trademark registration certificate.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A certified copy of the
                      TM-A form used during the initial trademark registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Identification proof of
                      the applicant.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Residence proof of the
                      applicant.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A Power of Attorney is
                      required if the applicant is representing the trademark
                      owner.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Trademark Renewal Online Procedure in India
              </h3>
              <p>
                The trademark renewal process in India is comprehensive,
                ensuring enduring protection for your trademark. Here's a
                concise overview of the steps involved and the accompanying
                documentation:
              </p>
              <h4>
                <strong>Step 1:</strong> Submitting the Application
              </h4>
              <p>
                Fill out and submit Form TM-R to the Trademark Registry. Include
                details such as:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Trademark registration
                      number
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Current trademark status
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Applicant's contact
                      details{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <strong>Step 2:</strong> Scrutiny and Review
              </h4>
              <p>
                Renewal eligibility is determined based on the trademark's
                remaining validity and adherence to renewal prerequisites.
              </p>
              <p>
                If discrepancies arise, the Registry will voice its concerns,
                prompting the applicant to respond within a set timeframe.
              </p>
              <h4>
                <strong>Step 3:</strong> Announcement in the Trademark Journal
              </h4>
              <p>
                Once any concerns are addressed, details concerning the renewed
                trademark are publicized in the Trademark Journal for 4 months.
                This period allows third parties to express any objections.
              </p>
              <p>
                Should objections surface, the applicant must provide a timely
                response. A hearing may be organized to clarify and settle the
                matter if not addressed.
              </p>
              <h4>
                <strong>Step 4:</strong> Granting the Renewal Certificate
              </h4>
              <p>
                After the designated publication duration and the amicable
                resolution of potential disputes, the Registry presents the
                Trademark Renewal Certificate. This document affirms the renewed
                status of your trademark, valid for another decade.
              </p>
              <p>
                <strong>
                  <em>
                    Our LegallensIndia expert-driven trademark renewal service
                    helps you to renew your trademark on time effortlessly!
                  </em>
                </strong>
              </p>
              <h3>Streamline Trademark Renewal with LegallensIndia</h3>
              <p>
                LegallensIndia provides an all-encompassing trademark renewal
                service, ensuring a smooth and hassle-free experience for
                trademark owners.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Our seasoned experts
                      gather all requisite details and kick-start the renewal
                      process on your behalf.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> We diligently craft the
                      renewal application, upholding precision and adherence to
                      pertinent rules.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Our team then
                      scrutinizes the application, tweaking it to optimize its
                      efficacy.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Once the application
                      meets our rigorous standards, we manage the submission
                      process with the Registrar of Trademarks, guaranteeing
                      timely and accurate document delivery.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                With LegallensIndia' expert-assisted trademark renewal service,
                entrust us to effortlessly guide you through the intricate
                renewal steps and ensure unwavering protection for your
                invaluable trademarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== testimonial section ========== */}
      {/* <Testimonial5 /> */}

      {/* ========== contact section ========== */}
      {/* <Contact7 /> */}
    </Fragment>
  );
}
