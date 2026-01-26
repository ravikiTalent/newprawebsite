import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTR10() {
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
              <h1 className="display-1 text-white mb-3">GSTR - 10</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Every registered taxpayer is required to file GST returns
                depending upon their type of registration, turnover, and other
                criteria.
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
                { id: 2, title: "GST", url: "GST" },
                { id: 3, title: "GSTR - 10", url: "" },
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
                      <h5 className="card-title">GSTR - 10</h5>
                      <p>
                        Every registered taxpayer is required to file GST
                        returns depending upon their type of registration,
                        turnover, and other criteria.
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

              <h2 className="display-4 mb-3">GSTR-10 Return Filing</h2>
              <p>
                Every registered taxpayer is required to file GST returns
                depending upon their type of registration, turnover, and other
                criteria. GSTR-10 is one such document used by businesses to
                file their final GST return. It is used to declare the closure
                or cancellation of registration of a GSTIN. This document helps
                inform the tax authorities about the cancellation of
                registration of the GSTIN and the deregistration of the
                taxpayer.
              </p>
              <p>
                GSTR-10 must be filed by all taxpayers who have applied for GST
                registration but have not been granted the same. All registered
                taxpayers must also file GSTR-10 if they have cancelled their
                registration or have been cancelled by the tax authorities.
              </p>
              <p>
                GSTR-10 is an essential document for businesses as it helps them
                to declare the closure or cancellation of registration of GSTIN.
                It is also important for the tax authorities to keep track of
                the taxpayers who have cancelled or deregistered their GSTIN.
              </p>
              <h3>What is GSTR 10?</h3>
              <p>
                GSTR-10 is a return required to be filed by taxpayers who have
                surrendered or cancelled their GST registration. It is also
                known as the Final Return. GSTR-10 needs to be filed within
                three months from the date of cancellation or surrender of GST
                registration.
              </p>
              <p>
                GSTR-10 is a one-page document that contains the following
                details:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}GSTIN of the taxpayer</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Date of cancellation or date of registration</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Reason for cancellation or deregistration</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Signature and name of the authorized signatory</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Contact details of the authorized signatory</li>
              </ul></div></div>
              <h3 className="mt-4">Who needs to file GSTR 10 return?</h3>
              <p>
                Every taxpayer who has cancelled or surrendered their GST
                registration must file GSTR-10. Even if the taxpayer has yet to
                conduct any business activities during the period between the
                date of cancellation and the date of filing GSTR-10, they are
                required to file the GSTR 10 return.
              </p>
              <h3>Which documents are required to file GSTR-10?</h3>
              <p>
                Filing of GSTR-10 requires the following documents and details
                to be furnished:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Basic details:</strong> The taxpayer must provide
                  their name, address, and GSTIN (Goods and Services Tax
                  Identification Number).
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Input Tax Credit (ITC) details:</strong> The taxpayer
                  must provide details of ITC availed on goods and services that
                  are in their possession on the date of cancellation or
                  surrender of GST registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    ARN of GST registration surrender application:
                  </strong>{" "}
                  The application reference number (ARN) is produced
                  automatically on the official GST Portal upon the submission
                  of the GST Registration Application.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    Effective Date of GST registration surrender/cancellation:
                  </strong>{" "}
                  The taxpayer must mention the effective date of cancellation
                  or surrender of GST registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Unique ID of cancellation order:</strong> When a
                  cancellation order is passed, the authorities will assign the
                  taxpayer with a unique ID.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Letter of GST registration cancellation:</strong> A
                  copy of the GST registration cancellation letter issued by the
                  GST department.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    Details of Inputs, Semi-Finished Goods, and Finished Goods:
                  </strong>{" "}
                  Details of any inputs, semi-finished goods, and finished goods
                  held by the taxpayer on the date of cancellation of
                  registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    Details of tax paid on Inputs, Semi-Finished Goods, and
                    Finished Goods:
                  </strong>{" "}
                  Details of tax paid on any inputs, semi-finished goods, and
                  finished goods held by the taxpayer on the date of
                  cancellation of registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Details of stock in possession:</strong> Details of
                  any stock in possession of the taxpayer on the date of
                  cancellation of registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GST liability:</strong> The amount of GST liability on
                  the stock held by the taxpayer on the date of cancellation of
                  registration. The taxpayer is required to mention the details
                  of any outstanding tax liability, if any, that needs to be
                  paid.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GST payment challans:</strong> Copies of GST payment
                  challans, if any, related to the payment of GST liability.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Bank account details:</strong> The taxpayer must
                  provide their bank account details for any refund that needs
                  to be claimed.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Other supporting documents:</strong> The taxpayer must
                  provide any other supporting documents as required by the GST
                  department.
                </li>
              </ul></div></div>
              <h3 className="mt-4">What is the time frame for filing GSTR 10 return?</h3>
              <p>
                GSTR-10 must be filed within three months (90 days) of the date
                of cancellation or deregistration. If it is not filed within
                this timeframe, the taxpayer may be liable to pay the penalty.
                It is important to note that this GSTR 10 return cannot be filed
                if the registration has been cancelled due to the order of the
                tax authorities. In such cases, the taxpayer must file a
                different return known as GSTR-11.
              </p>
              <h3>
                What is the GSTR 10 late fees for not filing the form on time?
              </h3>
              <p>
                If the taxpayer fails to file GSTR-10 within the due date, they
                are liable to pay GSTR 10 late fees of Rs.100 CGST and Rs.100
                SGST per day, subject to a maximum of 0.25% of the taxpayer's
                turnover.
              </p>
              <h3>What advantages come with filing GSTR-10?</h3>
              <p>
                GSTR-10 is a return that needs to be filed by a taxpayer whose
                GST registration has been cancelled or surrendered. Filing
                GSTR-10 gives taxpayers access to several advantages.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Compliance:</strong> Filing GSTR-10 is a compliance
                  requirement under GST law. Failing to file the return on time
                  can result in paying a GSTR 10 late fees and facing legal
                  consequences.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Avoid interest and penalties:</strong> Filing GSTR-10
                  within the due date helps avoid interest and penalties. If the
                  return is not filed within the due date, a penalty of Rs.100
                  per day or maximum up to 0.25% of the turnover will be levied.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Closure of registration:</strong> Filing GSTR-10 helps
                  in the closure of the registration and avoids any future
                  liabilities. It ensures that all the liabilities are settled
                  before the cancellation or surrender of GST registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Input Tax Credit:</strong> Filing GSTR-10 helps the
                  taxpayer to claim any input tax credit that has not been
                  claimed or reversed earlier. It is mandatory to claim the
                  credit before filing GSTR-10.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Compliance rating:</strong> Filing GSTR-10 on time
                  helps maintain a sound compliance rating, which is vital for
                  businesses in the long run.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Benefits of filing GSTR-10 through LegallensIndia:</h3>
              <p>
                LegallensIndia is the country's top online platform for business
                tax filing and one of the most trusted online filing services
                for GST returns. Filing GSTR-10 through LegallensIndia offers
                several advantages, making us a preferred choice for taxpayers.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Convenience:</strong> Filing GSTR-10 through
                  LegallensIndia is a hassle-free process. Our user-friendly
                  platform is simple to use, ensuring that the procedure is
                  carried out efficiently and correctly.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Accuracy:</strong> LegallensIndia ensures accuracy by
                  validating the data entered in the GST return forms to avoid
                  mistakes when filing the return.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Time-Saving:</strong> LegallensIndia helps to save time
                  by allowing taxpayers to file their GSTR-10 return with just a
                  few clicks. We send out timely reminders to taxpayers to
                  ensure the return is filed before the due date. Additionally,
                  we ensure the on-time delivery of filing-related
                  documentation.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Professional Assistance:</strong> LegallensIndia offers
                  round-the-clock support from experienced professionals who are
                  available to assist with any queries or issues related to
                  filing GSTR-10 returns.
                </li>
              </ul></div></div>
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
