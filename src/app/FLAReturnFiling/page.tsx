import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function FLAReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">FLA Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                The FLA Return is a mandatory annual filing for Indian
                companies, LLPs, and other entities engaged in receiving or
                making foreign direct investments.
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
                { id: 2, title: "Compliance", url: "" },
                { id: 3, title: "FLA Return Filing", url: "" },
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
                      <h5 className="card-title">FLA Return Filing</h5>
                      <p>
                        The FLA Return is a mandatory annual filing for Indian
                        companies, LLPs, and other entities engaged in receiving
                        or making foreign direct investments.
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

              <h2 className="display-4 mb-3">FLA Return Filing</h2>
              <p>
                <span>
                  The FLA Return is a mandatory annual filing for Indian
                  companies, LLPs, and other entities engaged in receiving or
                  making foreign direct investments. This includes entities
                  involved in Foreign Direct Investment (FDI) within India or
                  Overseas Direct Investment (ODI). Under the regulations of the
                  Reserve Bank of India (RBI) and the Foreign Exchange
                  Management Act, 1999 (FEMA), the FLA Return is designed to
                  gather information on foreign liabilities and assets that are
                  reflected in the financial statements of these entities.
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>
                      At LegallensIndia, we provide expert services to help
                      Indian Companies and LLPs efficiently handle their FLA
                      Return filings.
                    </em>
                  </strong>
                </span>
              </p>
              <h3>
                <span>Introduction to FLA Return</span>
              </h3>
              <p>
                <span>
                  The Foreign Liabilities and Asset (FLA) Return is a mandatory
                  annual report for Indian organisations that have received
                  foreign direct investment (FDI) or have invested in FDI
                  overseas. This report, submitted to the Reserve Bank of India
                  (RBI), collects detailed information on the foreign
                  liabilities and assets listed on these entities' balance
                  sheets. Governed by the Foreign Exchange Management Act, 1999
                  (FEMA), the FLA Return thoroughly regulates India's foreign
                  exchange and international financial transactions.
                </span>
              </p>
              <h3>
                <span>Applicability of FLA Return</span>
              </h3>
              <p>
                <span>
                  The FLA Return must be filed by a range of entities,
                  including:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Companies established under the </span>
                      <span>Companies Act, 2013</span>
                      <span>.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Limited Liability Partnerships (LLPs) were formed under
                        the Limited Liability Partnership Act 2008.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Various other organisations, such as SEBI-registered
                        Alternative Investment Funds (AIFs), Partnership Firms,
                        and Public-Private Partnerships (PPPs), are engaged in
                        foreign direct investment activities within India or
                        abroad.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Non-Applicability of FLA Return</span>
              </h3>
              <p>
                <span>
                  The requirement to submit the FLA Return does not apply to
                  entities in the following situations:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        If the entity has neither received Foreign Direct
                        Investment (FDI) nor made any overseas investments in
                        the current or previous years.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        If the entity’s foreign investment is limited to sharing
                        application money without any outstanding FDI or
                        overseas direct investment by the end of March of the
                        reporting year,
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Suppose non-resident shareholders have sold their shares
                        to residents within the reporting period, and the entity
                        has only issued shares to non-residents. In that case,
                        the invested capital cannot be converted back into
                        foreign currency and taken out of the country.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Due Date for Filing FLA Return</span>
              </h3>
              <p>
                <strong>
                  The due date for filing the FLA Return is July 15th every year
                </strong>
                . If the accounts are not audited by this date, entities should
                file the FLA Return using unaudited or provisional figures. If
                the accounts are audited later, a revised FLA Return must be
                submitted by September 30th of the same year.
              </p>
              <h3></h3>
              <h3>
                <span>Penalty For Late Filing </span>
                <span>o</span>
                <span>f </span>
                <span>FLA</span>
                <span>&nbsp;Return</span>
              </h3>
              <p>
                <span>
                  Filing the FLA Return late or failing to file can result in
                  penalties under the Foreign Exchange Management Act (FEMA).
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Late Submission Fee (LSF): </strong>
                      </span>
                      <span>
                        If the FLA Return is not filed by the due date of July
                        15th, a Late Submission Fee of INR 7,500 may be imposed.
                        This fee applies if the return is filed late but before
                        any enforcement action is taken.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Penalties for Violations: </strong>
                      </span>
                      <span>
                        If an entity fails to file the FLA Return or files false
                        information, penalties under FEMA can be severe,
                        including:
                      </span>
                    </li>
                    <div className="row gy-3 gx-xl-8">
                      <div className="col-xl-12">
                        <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                          <li>
                            <i className="uil uil-check"></i>{" "}
                            <span>
                              <strong>Monetary Penalty: </strong>
                            </span>
                            <span>
                              Up to 300% of the amount involved in the violation
                              or a minimum of Rs. 2 Lakh if the violation amount
                              cannot be quantified.
                            </span>
                          </li>
                          <li>
                            <i className="uil uil-check"></i> <strong>C</strong>
                            <strong>ontinued Non-compliance: </strong>If the
                            violation continues beyond the initial detection, a
                            daily penalty of Rs. 5,000 may be imposed for each
                            day the violation persists after the first day.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Information Required for Filing FLA Return&nbsp;</span>
              </h3>
              <p>
                <span>
                  The Reserve Bank of India (RBI) has structured the FLA Return
                  into five distinct sections for a comprehensive capture of
                  foreign liabilities and assets by Indian entities:
                </span>
              </p>
              <h4>
                <span>Section I – Identification particulars</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Prefilled Information: </strong>
                      </span>
                      <span>
                        Company name, PAN, CIN, and head of the institution’s
                        email are auto-filled post successful user creation.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Contact Details:</strong>
                      </span>
                      <span>
                        {" "}
                        Provide details of the contact person, including name,
                        phone number, mobile number, email, designation,
                        website, and account closing date.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>NIC Code: </strong>
                      </span>
                      <span>
                        Use National Industrial Classification (NIC) -2008 codes
                        for industry specification. If multiple activities are
                        conducted, select the primary revenue-generating
                        activity.&nbsp;&nbsp;
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Company Specifics: </strong>
                      </span>
                      <span>
                        Indicate if the company is listed as an Asset Management
                        Company, has technical foreign collaborations, or has
                        conducted any business activity in the last financial
                        year. Also, specify the nature of FDI involvement.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Section II – Financial details</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Capital:</strong>
                      </span>
                      <span>
                        Disclose the total paid-up capital, differentiating
                        between participating and non-participating share
                        capital.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Profit and Loss Account:</strong>
                      </span>
                      <span>
                        Detail the profit/loss before and after tax, dividends
                        issued, and any tax on dividends from the April-March
                        period.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reserves &amp; Surplus:</strong> Report reserves
                      and surplus figures separately from accumulated
                      profit/loss balances.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Sales and Purchases:</strong>
                      Include domestic and foreign sales and purchases,
                      including goods and services, based on the profit and loss
                      account.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Employee Information: </strong>State the number of
                      employees on the payroll of the Indian reporting company.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Section III – Foreign Liabilities</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        FDI in India (10% or more equity participation):
                      </strong>{" "}
                      Provide details on the number of foreign direct investors,
                      initial FDI receipt date, investor details, equity holding
                      percentages, and liabilities to direct investors,
                      including disinvestments.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        FDI in India (less than 10% equity holding):
                      </strong>
                      Similar details as above for entities with less than 10%
                      equity holding by foreign investors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Portfolio Investment in India: </strong>Specify
                      equity and debt securities held by non-resident investors,
                      excluding FDI.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Other Liabilities: </strong>Report financial
                      liabilities with foreign unrelated parties, excluding
                      domestic liabilities even if in foreign currency.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Section IV – Foreign assets</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Overseas Direct Investment (ODI) 10% or more:
                      </strong>{" "}
                      Detail the number of Direct Investment Enterprises (DIE)
                      abroad, investment specifics, equity holdings, sales,
                      purchases, employee numbers, and claims on DIE, including
                      disinvestments.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>ODI (less than 10% equity holding):</strong>{" "}
                      Provide similar information for investments where the
                      Indian company holds less than 10% equity in the DIE.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Debt Securities and Portfolio Investment Abroad:{" "}
                      </strong>
                      Include investments in money market instruments and bonds
                      by the reporting company under portfolio investment
                      abroad.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Other Assets: </strong>Report financial assets
                      with foreign unrelated parties, excluding domestic assets.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Section V – Variation Report</span>
              </h4>
              <p>
                <span>
                  This section auto-generates a report comparing the current
                  year’s data with the previous year, highlighting variations.
                  This section is not editable by the company.
                </span>
              </p>
              <h3>
                <span>Procedure for FLA Return Filings</span>
              </h3>
              <p>
                <span>
                  Since June 2019, the process for submitting the annual FLA
                  return has transitioned from format and email-based reporting
                  to a web-based system. Here’s how entities can navigate this
                  system on the FLAIR portal:
                </span>
              </p>
              <h4>
                <span>Setting Up a Business User in&nbsp;</span>FLAIR portal
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Access the FLAIR Portal: Access the official website of
                        the FLAIR portal.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Register as a New Entity User: Click on the
                        “Registration Form for New Entity User” to begin
                        registering.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Fill in the Entity Details</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Provide comprehensive details about your entity,
                        including the{" "}
                      </span>
                      <span>Corporate Identification Number (CIN)</span>
                      <span>
                        /Registration Number, Company Name, PAN Number,
                        registered address with PIN, and contact details.
                        Confirm any changes to the CIN/Registration Number or
                        company name during the last financial year ending in
                        March.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Authorised Person’s Information</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Input details of the authorised person, including name,{" "}
                      </span>
                      <span>PAN</span>
                      <span>number, and contact information.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Upload Documents: Attach a verification letter, an
                        authority letter, and copies of the PAN cards for the
                        entity and the authorised person.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Preparing and Submitting the FLA Return</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Create and Verify Business User: Once you have
                        successfully registered and received your password from
                        the RBI via email, log in to prepare the FLA return. The
                        return is structured into five sections for
                        comprehensive reporting.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Review and Submit: After completing the FLA return,
                        download it, review it for accuracy, and submit it
                        online through the FLAIR portal.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>After Submission</span>
              </h4>
              <p>
                <span>
                  Acknowledgement: Upon successful submission, the FLAIR portal
                  will generate an acknowledgement stating that the FLA return
                  has been processed successfully for the year.
                </span>
              </p>
              <p>
                <span>
                  <em>
                    LegallensIndia experts can assist you with every step of the
                    FLA Return filing process.
                  </em>
                </span>
                <span></span>
              </p>
              <p>
                <span>
                  <strong>Important Notes:</strong>
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        The registered email ID is crucial as it will receive
                        the password and OTP for each login attempt; ensure it’s
                        entered correctly.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Should there be any changes in the entity’s email ID or
                        name during the reporting period, deactivate the current
                        account and create a new one for the current year’s FLA
                        return filing.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        If the CIN/registration number remains unchanged,
                        previously entered data will populate in the new
                        account, facilitating the update process.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Before final submission to the RBI, the company can
                        download a draft of the FLA return for review and
                        verification. This step ensures that all information is
                        accurate and complete.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>File Your FLA Return Easily via LegallensIndia!</span>
              </h3>
              <p>
                <span>
                  Begin your FLA Return filing process with LegallensIndia and
                  benefit from our expert guidance at every step. Our
                  experienced professionals ensure that your submission is
                  accurate and timely, helping you navigate the complexities of
                  regulatory compliance with ease.
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>
                      Get started with LegallensIndia today and file your FLA
                      Return easily!
                    </em>
                  </strong>
                </span>
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
