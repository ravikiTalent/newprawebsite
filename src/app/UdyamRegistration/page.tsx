import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function UdyamRegistration() {
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
              <h1 className="display-1 text-white mb-3">UDYAM Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In today's competitive business landscape, it is crucial for small and medium-sized enterprises (SMEs) to leverage government initiatives that streamline operations, offer benefits, and provide formal recognition
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
                { id: 1, title: "Home", url: "#" },{ id: 2, title: "Registrations", url: "Registrations" },
                { id: 3, title: "UDYAM Registration", url: "" },
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
                      <h5 className="card-title">UDYAM Registration</h5>
                      <p>In today's competitive business landscape, it is crucial for small and medium-sized enterprises (SMEs) to leverage government initiatives that streamline operations, offer benefits, and provide formal recognition
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

              <h2 className="display-4 mb-3">Udyam Registration</h2>
              <p>
                In today's competitive business landscape, it is crucial for
                small and medium-sized enterprises (SMEs) to leverage government
                initiatives that streamline operations, offer benefits, and
                provide formal recognition. One such initiative by the
                Government of India is Udyog Aadhar registration, now known as
                Udyam registration. This initiative is designed to support the
                growth and development of micro, small, and medium enterprises
                (MSMEs) nationwide. Udyam Registration also referred to as MSME
                Registration, is the updated process for registering MSMEs
                introduced by the Ministry of Micro, Small &amp; Medium
                Enterprises on July 1, 2020. Alongside this new registration
                process, the Ministry also updated the MSME classification
                criteria.
              </p>
              <p>
                LegallensIndia is your trusted partner when it comes to
                simplifying the Udyam Aadhaar registration process. Our
                dedicated team of experts is well-versed in the intricacies of
                the Udyam Aadhar registration online process and can help your
                business secure its Udyam Certificate and Registration Number
                swiftly and seamlessly.&nbsp;
              </p>
              <h3>What is Udyam Registration?</h3>
              <p>
                Udyam Registration is an official process initiated by the
                Ministry of Micro, Small, and Medium Enterprises (MSMEs),
                Government of India, for the formal registration of micro,
                small, and medium enterprises (MSMEs). Introduced on July 1,
                2020, it replaced the earlier Udyog Aadhar Memorandum (UAM)
                system. The Udyog Aadhar/Udyam registration is designed to
                classify enterprises based on their investment and turnover. As
                per the new classification metrics, all Micro, Small, and Medium
                Enterprises (MSMEs) in India are collectively known as MSME.
                Entrepreneurs can apply for MSME Registration online, and upon
                successful completion, the enterprise is assigned a permanent
                Udyam Registration Number and receives an e-certificate known as
                the Udyam Registration Certificate. This online,
                self-declaration-based Udyam Aadhar registration process aims to
                streamline access to government benefits.
              </p>
              <h3>MSME Registration Online Benefits</h3>
              <p>
                Benefits of having a Udyam Registration Number for your business
                include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Special Preference in Government Tenders:{" "}
                      </strong>
                      Registered Udyam enterprises receive preferential
                      treatment in government procurement processes, enhancing
                      their chances of securing contracts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>
                          Access to Collateral-Free Bank Loans:&nbsp;
                        </strong>
                        Udyam Registration, along with the Udyam registration
                        certificate, facilitates access to bank loans without
                        the need for collateral or mortgage, making it easier
                        for MSMEs to secure financing.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Interest Rate Exemption: </strong> Udyam Aadhaar
                      Registered businesses are eligible for a 1% interest rate
                      exemption on bank overdrafts (OD), reducing their
                      borrowing costs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Eligibility for Tax Rebates: </strong>
                      Udyam Aadhar registered enterprises can benefit from
                      various tax rebates, providing significant tax savings.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Priority in Licensing and Certification: </strong>{" "}
                      Udyam Aadhaar Registration offers priority consideration
                      for obtaining government licenses and certifications,
                      streamlining business operations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tariff and Capital Subsidies: </strong>Registered
                      MSMEs with MSME Udyam certificate are eligible for tariff
                      subsidies as well as tax and capital subsidies, lowering
                      their operational costs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Electricity Bill Discounts: </strong>Udyam
                      enterprises receive discounts on electricity bills,
                      reducing their utility expenses.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Protection Against Delayed Payments:&nbsp;
                      </strong>
                      Udyam Aadhar Registration offers protection against
                      delayed payments from buyers, ensuring better cash flow
                      management.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Trademark and Patent Discounts: </strong>
                      Registered businesses can avail of a 50% discount on
                      government fees for filing trademarks and patents, making
                      intellectual property protection more affordable.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expedited Dispute Resolution: </strong>Udyam
                      enterprises benefit from faster resolution of disputes,
                      minimizing business interruptions and legal costs.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who can Apply for Udyam Registration?</h3>
              <p>
                Any individual who intends to establish a micro, small, or
                medium enterprise can file for Udyog Aadhar/Udyam Registration
                online through the Udyam Registration portal. Eligible
                applicants for MSME registration online include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Proprietorships
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Hindu Undivided Family
                      (HUF)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Partnership Firm
                    </li>
                    <li>
                      <i className="uil uil-check"></i> One Person Company (OPC)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Private Limited Company
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Public Limited Company
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Producer Company
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Limited Liability
                      Partnership (LLP)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Any Association of
                      Persons
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Co-operative Societies
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                No enterprise is permitted to file more than one Udyam
                Registration and MSME/Udyam Certificate. However, a single Udyam
                Registration can encompass multiple activities, including
                manufacturing, services, or both, ensuring comprehensive
                coverage under one registration.
              </p>
              <h3>Eligibility Criteria for Udyam Registration</h3>
              <p>
                To be eligible for&nbsp;Udyam registration and get a Udyam
                registration certificate, your business must fall under the
                category of a Micro, Small, or Medium Enterprise based on
                specific investment and turnover thresholds as outlined below:
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <strong>Enterprise Type</strong>
                    </td>
                    <td className="border">
                      <strong>Investment Criteria</strong>
                    </td>
                    <td className="border">
                      <strong>Annual Turnover Criteria</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Micro Enterprise</td>
                    <td className="border">Up to Rs. 1 crore</td>
                    <td className="border">Not exceeding Rs. 5 crore</td>
                  </tr>
                  <tr>
                    <td className="border">Small Enterprise</td>
                    <td className="border">Up to Rs. 10 crore</td>
                    <td className="border">Not exceeding Rs. 50 crore</td>
                  </tr>
                  <tr>
                    <td className="border">Medium Enterprise</td>
                    <td className="border">Up to Rs. 50 crore</td>
                    <td className="border">Not exceeding Rs. 250 crore</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Businesses meeting these criteria can apply for Udyam
                Registration to avail of various benefits provided under the
                MSME schemes.
              </p>
              <h3>Revised Classification Criteria for MSMEs</h3>
              <p>
                In the Union Budget 2025, the government announced a significant
                revision in the classification criteria for Micro, Small, and
                Medium Enterprises (MSMEs). It is stated that the investment
                limit for MSME classification has been increased by 2.5 times,
                while turnover limits have been doubled. This decision is
                expected to enhance the confidence of MSMEs, fostering growth
                and generating employment opportunities.&nbsp;
              </p>
              <p>
                In the table below, we have provided the revised classification
                criteria made in Union Budget 2025,
              </p>
              <p>
                <strong></strong>
              </p>
              <strong>
                <table className="table mb-5 border">
                  <tbody>
                    <tr>
                      <td className="border">
                        <p>Enterprise Category</p>
                      </td>
                      <td className="border">
                        <p>Revised Investment Limit</p>
                      </td>
                      <td className="border">
                        <p>Revised Turnover Limit</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <p>Micro Enterprise</p>
                      </td>
                      <td className="border">
                        <p>
                          <span>Rs. 2.5 crore</span>
                        </p>
                      </td>
                      <td className="border">
                        <p>
                          <span>Rs. 10 crore</span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <p>Small Enterprise</p>
                      </td>
                      <td className="border">
                        <p>
                          <span>Rs. 25 crore</span>
                        </p>
                      </td>
                      <td className="border">
                        <p>
                          <span>Rs. 100 crore</span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <p>Medium Enterprise</p>
                      </td>
                      <td className="border">
                        <p>
                          <span>Rs. 125 crore</span>
                        </p>
                      </td>
                      <td className="border">
                        <p>
                          <span>Rs. 500 crore</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </strong>
              <h3>When to Opt for Udyam Aadhar Registration?</h3>
              <p>
                While applying for Udyam Registration is voluntary and not
                compulsory for entrepreneurs, it is highly recommended for most
                businesses to register shortly after their establishment. This
                early MSME registration online allows businesses to take full
                advantage of the various government benefits available to MSMEs.
              </p>
              <h3>Documents Required for Udyam Registration</h3>
              <p>
                When it comes to the documents required for the Online Udyam
                Aadhar Registration process, it is worth noting that the
                application is primarily based on self-declaration. As such,
                uploading any additional documents during the MSME registration
                online procedure is unnecessary. Applicants must only provide
                their 12-digit Aadhaar Number, PAN (Permanent Account Number),
                and Bank Account details of the business to complete the
                registration process efficiently.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN Card Number:</strong> The Permanent Account
                      Number (PAN) of the business or the proprietor.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Aadhaar Number:</strong> The Aadhaar card number
                      is required as follows:
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>
                              <i className="uil uil-check"></i> Proprietorship
                              Firms: Aadhaar card of the proprietor.
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Partnership
                              Firms: Aadhaar card of the managing partner.
                            </li>
                            <li>
                              <i className="uil uil-check"></i> LLPs, Companies,
                              Cooperative Societies, or Trusts: Aadhaar card of
                              the authorized signatory.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>GST Number (if applicable):</strong> The GST
                      number is mandatory only for enterprises that require GST
                      registration.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Ensure you have the listed documents before proceeding to the
                registration and Udyam certificate download process. Get
                LegallensIndia expert support to streamline the registration
                process with reasonable MSME registration charges.&nbsp;
              </p>
              <h3>How to Get Udyam Registration Online?</h3>
              <p>
                Micro, Small, and Medium Enterprises (MSMEs) can easily obtain
                Udyam Registration online by following a specific process on the
                official Udyam registration portal. Here's a step-by-step
                process of Udyam registration online:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Step 1: </strong>Visit the official Udyam
                      Registration Portal.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Step 2: </strong>Click on the option "For New
                      Entrepreneurs who are not registered yet as MSME or those
                      with EM-II" available on the homepage.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <strong>Step 3:</strong>{" "}
                      Enter the Aadhaar Number and Name of the Entrepreneur in
                      the specified boxes, then click on "Validate &amp;
                      Generate OTP."
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Step 4: </strong>An OTP will be sent to your
                      mobile number linked with the Aadhaar. Enter the OTP and
                      click "Validate."
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Step 5: </strong>After Aadhaar validation, you'll
                      be redirected to the PAN verification page. Enter your
                      Type of Organisation and PAN Number, and click
                      "Validate."Also, specify whether you've filed the previous
                      year's ITR and if you have a GSTIN.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <strong>Step 6:</strong>{" "}
                      Fill in the Udyam Registration application form, including
                      details like:
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>
                              <i className="uil uil-check"></i> Entrepreneur’s
                              name and mobile number
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Enterprise name
                              and address
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Plant/unit
                              location
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Enterprise
                              status
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Bank details
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Type of activity
                              and NIC code
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Number of
                              persons employed
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <strong>Step 7</strong>:
                      Provide details regarding:
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>
                              <i className="uil uil-check"></i> Investment in
                              plant and machinery/equipment
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Annual turnover
                              details
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Then, select the
                              declaration and click Submit to receive the final
                              OTP.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <strong>Step 8</strong>:
                      Enter the final OTP to complete the registration. The
                      Udyam e-registration certificate will be sent to your
                      registered email.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                <strong></strong>
              </p>
              <p>
                By completing these steps, MSMEs can efficiently register under
                Udyam and avail various benefits, schemes, and incentives
                offered to registered enterprises under the MSME framework.
              </p>
              <h3>Validity of Udyam Certificate</h3>
              <p>
                The Udyam Registration Certificate is valid for a lifetime and
                does not require renewal, provided the enterprise continues to
                meet the classification criteria for MSMEs. Get the certificate
                by proceeding with the process of the Udyam registration
                certificate download and keep it securely. It is important to be
                up-to-date with information regarding Udyam Aadhar
                registration.&nbsp;
              </p>
              <h3>Simplify Udyam Registration with LegallensIndia!</h3>
              <p>
                To obtain Udyam Registration through LegallensIndia, simply follow
                our streamlined process designed to make MSME registration quick
                and hassle-free. Begin by providing your basic business details,
                and we will take care of the rest, including validating
                necessary information, submitting the application on your
                behalf, and helping you obtain a Udyam certificate. Our experts
                will handle the complexities, ensuring that your business is
                accurately registered without any of the typical confusion with
                MSME registration charges. Upon completion, you'll receive your
                Udyam certificate, granting you access to various government
                benefits and support for your MSME.
              </p>
              <p>
                <strong>
                  Streamline your Udyam Registration with LegallensIndia today!
                </strong>
              </p>
              <p>&nbsp;</p>
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
