import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTRevocation() {
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
              <h1 className="display-1 text-white mb-3">GST Revocation</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                GST revocation refers to cancelling the cancellation of Goods
                and Services Tax (GST) registration.
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
                { id: 3, title: "GST Revocation", url: "" },
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
                      <h5 className="card-title">GST Revocation</h5>
                      <p>
                        GST revocation refers to cancelling the cancellation of
                        Goods and Services Tax (GST) registration.
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

              <h2 className="display-4 mb-3">Apply for GST Revocation</h2>
              <p>
                GST revocation refers to cancelling the cancellation of Goods
                and Services Tax (GST) registration. When a taxpayer's GST
                registration is cancelled voluntarily, or by the tax
                authorities, they can apply for revocation to reinstate their
                GST registration. The purpose of GST revocation is to provide an
                opportunity for taxpayers to rectify any issues or circumstances
                that led to the cancellation of their GST registration. It
                allows them to reverse the cancellation and continue their
                business activities in compliance with GST regulations.&nbsp;
              </p>
              <p>
                <em>
                  At LegallensIndia, we simplify revoking your Goods and Services
                  Tax (GST) registration process. Our expert team is here to
                  assist you in smoothly navigating through the revocation
                  procedure, ensuring compliance with all relevant
                  regulations.&nbsp;
                </em>
              </p>
              <h3>Revocation of GST Registration</h3>
              <p>
                GST revocation is the process of reinstating a previously
                cancelled Goods and Services Tax (GST) registration. This allows
                businesses whose GSTIN (GST Identification Number) has been
                deactivated—whether voluntarily by the taxpayer or involuntarily
                by tax authorities—to resume their standard business operations
                under GST regulations. The revocation process is critical for
                businesses seeking to correct compliance issues or address the
                circumstances that led to the cancellation of their GST
                registration. By successfully completing GST revocation,
                businesses can once again legally issue GST-compliant invoices,
                collect GST, and claim Input Tax Credit (ITC) on purchases,
                ensuring they remain in good standing with tax regulations and
                continue their commercial activities without disruption.
              </p>
              <h3>
                Rule 23 - Revocation of cancellation of registration&nbsp;
              </h3>
              <p>
                Rule 23 of the Central Goods and Services Tax Rules, 2017, deals
                with the revocation or cancellation of registration under
                India's Goods and Services Tax (GST) regime. This rule outlines
                the procedure and conditions for revoking the cancellation of
                GST registration. Under this rule, you can file an application
                for revocation of cancellation of GST registration.&nbsp;
              </p>
              <h3>Reasons for GST Cancellation&nbsp;</h3>
              <p>
                GST cancellation refers to the termination of a taxpayer's Goods
                and Services Tax (GST) registration, which deactivates the GST
                Identification Number (GSTIN). This cancellation prevents the
                business from legally collecting GST, issuing GST-compliant
                invoices, or claiming Input Tax Credit (ITC) on purchases.
                Cancellation can be initiated by either the taxpayer for various
                reasons or by GST authorities due to non-compliance or other
                issues.
              </p>
              <p>
                <strong>Cancellation Initiated by the Taxpayer:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Discontinuation or Closure of Business:</strong> If
                  business operations are permanently shut down or discontinued,
                  the taxpayer can apply for cancellation.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Business Transfer or Merger:</strong> If the business
                  is transferred, merged, sold, leased, or otherwise disposed
                  of, the existing GST registration may need to be cancelled.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Change in Business Structure:</strong> Changes in
                  business structure, such as converting a partnership firm into
                  a company, require the cancellation of the old GST
                  registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Turnover Below GST Threshold:</strong> If annual
                  turnover falls below the threshold (?40 lakh for goods or ?20
                  lakh for services), GST registration may no longer be
                  necessary.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Voluntary Cancellation:</strong> Taxpayers may
                  voluntarily cancel their GST registration for various personal
                  or business reasons, even if maintaining registration isn't
                  mandatory.
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Cancellation Enforced by GST Authorities:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Non-Compliance with GST Laws:</strong> Authorities may
                  cancel a registration if a regular taxpayer fails to file
                  returns for six consecutive months or a composition taxpayer
                  fails to file for three consecutive months.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Fraudulent GST Registration:</strong> If registration
                  was obtained through fraud, misstatement, or suppression of
                  facts, it can be revoked.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Violation of GST Rules or Act:</strong> Significant or
                  repeated non-compliance with GST laws may lead to
                  cancellation.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Engaging in Unauthorized Activities:</strong>{" "}
                  Conducting unauthorized or fraudulent activities, such as
                  issuing fake invoices, may trigger cancellation.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Non-Commencement of Business:</strong> If a taxpayer
                  fails to commence business within a specified timeframe
                  post-registration, the GST authorities may cancel the
                  registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Wrongful Claim of ITC:</strong> Authorities may also
                  cancel registration if a taxpayer wrongfully avails or
                  utilizes ITC without receiving the goods or services.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Reapply for GST After Voluntary Cancellation</h3>
              <p>
                Once a business voluntarily cancels its GST registration, the
                cancellation is definitive, and there is no option to revoke or
                reactivate the previous registration. Should the business
                require GST registration in the future, it will need to apply
                for a new GST registration.
              </p>
              <h3>Why GST Revocation is Crucial for Your Business</h3>
              <p>
                If your GST registration remains cancelled, it can lead to
                several significant operational and financial setbacks for your
                business. Here’s a look at the key impacts:
              </p>
              <p>
                <strong>Inability to Issue GST-Compliant Invoices</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Legal Restrictions:</strong> Once GST registration is
                  cancelled, your business cannot legally collect GST on sales.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Customer Loss:</strong> Without GST-compliant
                  invoices, you may lose customers who need proper documentation
                  to claim an input tax credit (ITC).
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Loss of Input Tax Credit (ITC)</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Increased Expenses:</strong> With a cancelled GST
                  registration, you are ineligible to claim ITC on purchases,
                  which can significantly increase business costs.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Reduced Competitiveness:</strong> Bearing the full
                  cost of taxes can make your pricing less competitive in the
                  market.
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Penalties for Unauthorized GST Collection</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Legal Violations:</strong> Continuing to collect GST
                  without a valid registration is an offence under GST laws.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Severe Penalties:</strong> Authorities may impose
                  hefty fines equivalent to the amount of GST collected, along
                  with possible additional legal repercussions.
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Business Disruptions and Loss of Credibility</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Relationship Risks:</strong> A lack of valid GST
                  registration can deter customers and suppliers, potentially
                  harming business relationships.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Reputation Damage:</strong> An inactive GST
                  registration might suggest non-compliance, negatively
                  affecting your business's credibility in the market.
                </li>
              </ul></div></div>
              <p className="mt-4">
                Revoking a GST cancellation and restoring your GST registration
                can help mitigate these risks, ensuring your business operates
                legally and maintains its competitive edge.
              </p>
              <h3>
                Important Considerations Before the Revocation of GST
                Registration
              </h3>
              <p>
                Before proceeding with the revocation process, here are a few
                key points to consider:&nbsp;
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Outstanding dues:</strong> Ensure that all outstanding
                  tax liabilities, interest, penalties, and fees have been paid
                  before initiating the revocation process. Failure to do so may
                  result in complications and legal consequences.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Pending returns: </strong>File all the pending GST
                  returns up to the revocation date. It is essential to fulfil
                  your tax obligations and provide accurate financial
                  information before closing your GST registration.&nbsp;
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Input tax credit: </strong>Make sure you have reversed
                  or paid back any unutilized input tax credit on your inventory
                  or capital goods to the government, per the applicable
                  regulations.&nbsp;
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Compliance requirements: </strong>Application for
                  revocation of cancellation of registration does not exempt you
                  from any legal obligations and compliances for the period
                  during which your registration was active. Maintain all
                  necessary records and documents for future reference and
                  audits.&nbsp;
                </li>
              </ul></div></div>
              <h3 className="mt-4">Time Limit for Revocation of GST Registration</h3>
              <p>
                Starting October 1, 2023, taxpayers now have up to 90 days from
                the date the cancellation order is served to apply for the
                revocation of a cancelled GST registration. This extension from
                the previous 30-day window allows businesses additional time to
                meet compliance requirements, settle any pending returns, and
                prepare the necessary documentation to reinstate their GST
                registration effectively.
              </p>
              <h3>Documentation Required for Reactivating GST Registration</h3>
              <p>
                Reactivating a cancelled GST registration, especially after an
                extended period such as three years, requires thorough
                preparation and submission of several essential documents.
                Having these documents ready will facilitate a smooth
                reactivation process and help avoid any delays.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTIN and Login Credentials:</strong> You'll need your
                  GST Identification Number (GSTIN) and login credentials to
                  access the GST portal and begin the revocation process. If you
                  have forgotten your login details, you can recover them on the
                  portal using the "Forgot Password" option.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>PAN Card of the Business or Proprietor:</strong> The
                  Permanent Account Number (PAN) of the business or proprietor
                  is crucial for verifying identity. It must match the records
                  that were submitted during the original GST registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Proof of Address:</strong> Valid proof of the
                  business's registered address is required. Acceptable
                  documents include:
                  <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}Electricity bill</li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}Rental or lease agreement</li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}Municipal tax receipt</li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}Property ownership documents</li>
                  </ul></div></div>
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Bank Account Details:</strong> Provide a bank account
                  statement, a cancelled cheque, or a copy of the bank passbook
                  to verify your business’s financial account. The account
                  should be in the name of the business or proprietor.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Filed GST Returns:</strong> It is essential to file
                  all pending GST returns for the period during which your
                  registration was inactive. Maintain copies of these filed
                  returns as part of your documentation to prove compliance.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Application for Revocation (Form GST REG-21):</strong>{" "}
                  You will need to complete Form GST REG-21, the official
                  application for revocation of a cancelled GST registration.
                  Fill out this form with the necessary details and upload it to
                  the GST portal along with other supporting documents. This
                  comprehensive approach ensures that the reactivation of your
                  GST registration is completed without any complications.
                </li>
              </ul></div></div>
              <h3 className="mt-4">
                Get Started with LegallensIndia' GST Revocation Service&nbsp;
              </h3>
              <p>
                Get started with LegallensIndia' GST Revocation Service and
                streamline the process of reinstating your cancelled GST
                registration. Our expert team is equipped to guide you through
                every step, ensuring that your application is handled
                efficiently and compliantly. From gathering the necessary
                documents to submitting your application on the GST portal,
                LegallensIndia makes the revocation process straightforward and
                hassle-free. Let us help you restore your GST registration so
                you can continue your business operations without any legal
                interruptions.
              </p>
              <h4>Our GST Revocation Service Process</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Consultation: </strong>Our team will conduct an
                  initial consultation to understand your requirements and
                  assess your eligibility for GST revocation. We will explain
                  the process in detail and address any queries.&nbsp;
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Document Collection: </strong>Our experts will guide
                  you in gathering the necessary documents, such as the GST
                  registration certificate, financial statements, tax returns,
                  and any other supporting documents required for the revocation
                  application.&nbsp;
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Application Preparation: </strong>We will prepare your
                  revocation application accurately and thoroughly based on the
                  information provided. Our team will ensure that all the
                  required details are included, minimising the chances of
                  rejection or delay.&nbsp;
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Application Filing:</strong> We will file the
                  revocation application on your behalf through the official GST
                  portal. Our experts will meticulously complete the online
                  form, attach the supporting documents, and apply
                  electronically.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Application Tracking:</strong> Throughout the
                  revocation process, our experts will keep you updated on the
                  progress of the application. We will provide regular status
                  updates and notify you of any additional information or
                  documentation requested by the tax authorities.&nbsp;
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Revocation Order: </strong>Once the tax authorities
                  review and approve your application, they will issue a
                  revocation order. Our team will notify you promptly and
                  provide the necessary documents for your records.&nbsp;
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>
                  <em>
                    Ready to restore your GST registration? Contact LegallensIndia
                    today for expert assistance with your GST revocation.&nbsp;
                  </em>
                </strong>
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
