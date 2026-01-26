import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTRegistrationforForeigners() {
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
              <h1 className="display-1 text-white mb-3">
                GST Registration for Foreigners
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Following the implementation of the GST framework, the
                Government of India mandated that all foreign non resident
                taxpayers obtain GST registration when supplying goods or
                services to residents within the country.
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
                { id: 3, title: "GST Registration for Foreigners", url: "" },
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
                      <h5 className="card-title">
                        GST Registration for Foreigners
                      </h5>
                      <p>
                        Following the implementation of the GST framework, the
                        Government of India mandated that all foreign non
                        resident taxpayers obtain GST registration when
                        supplying goods or services to residents within the
                        country.
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

              <h2 className="display-4 mb-3">
                GST Registration for Foreigners
              </h2>
              <p>
                Following the implementation of the GST framework, the
                Government of India mandated that all foreign non resident
                taxpayers obtain GST registration when supplying goods or
                services to residents within the country. If you're planning to
                supply goods or services to India, securing a GST registration
                is not just a compliance measure but a key step in establishing
                your business presence in one of the world's most vibrant
                markets.
              </p>
              <p>
                Recognizing the importance of this registration, LegallensIndia
                offers specialized services to facilitate the GST registration
                process for foreigners. With expert guidance and streamlined
                procedures, we simplify the complexities of tax compliance,
                making it easier for international businesses to thrive in
                India.
              </p>
              <p>
                Contact our expert team today to easily get your GST
                registration. We'll guide you smoothly through each step for a
                worry-free process.
              </p>
              <h3>Non-Resident Taxable Person</h3>
              <p>
                A "Non Resident Taxable Person" under the Goods and Services Tax
                (GST) framework in India refers to any individual or business
                entity that conducts transactions involving the supply of goods
                or services, or both, within India but does not have a fixed
                place of business or residence in the country. This includes
                entities operating in India occasionally, in any capacity such
                as principal, agent, or any other manner, but with their base of
                operations or residence outside of India. The GST law mandates
                that these non-resident entities register under GST and comply
                with its provisions, regardless of the volume or frequency of
                their transactions in India.
              </p>
              <h3>GST Registration for Foreigners</h3>
              <p>
                GST Registration in India is a compulsory process for foreign
                individuals or entities that supply goods or services in India
                without a permanent establishment or residence in the country.
                This registration category is specifically designed for those
                who may not regularly operate in India but engage in economic
                activities or transactions under the GST regime.
              </p>
              <p>
                The process involves obtaining a unique GSTIN (Goods and
                Services Tax Identification Number), which allows these
                non-resident businesses to comply with GST laws, including
                filing GST tax returns and paying applicable taxes on their
                transactions within India.
              </p>
              <h3>
                GST Registration Requirements for Non- resident Taxable Persons
              </h3>
              <p>
                For non resident taxable persons engaging in taxable
                transactions within India, the GST registration requirements are
                as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Mandatory Registration:</strong> Regardless of
                  transaction volume, registration under GST is compulsory for
                  non-resident taxable persons. There's no minimum threshold for
                  registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Ineligibility for Composition Levy:</strong>{" "}
                  Non-resident taxable persons are not eligible to opt for the
                  composition levy scheme under GST, which allows for a
                  simplified tax payment process and compliance for small
                  taxpayers.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Advance Registration Requirement:</strong>{" "}
                  Registration for GST must be completed at least five days
                  before beginning business operations in India.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Passport Required for Registration:</strong> A valid
                  passport is required for GST registration and serves as the
                  primary documentary evidence.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Documentation for Business Entities:</strong> Business
                  entities based outside India must include their tax
                  identification number (TIN) or a unique identification number
                  recognized by their home country's government in their GST
                  registration application. Alternatively, if available, they
                  can provide their Indian Permanent Account Number (PAN).
                </li>
              </ul></div></div>
              <h3 className="mt-4">Key Documents Needed - GST Registration for foreigners</h3>
              <p>
                For foreigners GST registration, the following documents are
                typically required:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Document&nbsp;Type</strong>
                    </th>
                    <th className="border">
                      <strong>Details</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">
                      <strong>
                        Proof of Appointment of Authorised Signatory
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      Photo of the Authorised Signatory
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Letter of Authorisation</td>
                  </tr>
                  <tr>
                    <td className="border">
                      Copy of Resolution passed by BoD/Managing Committee and
                      Acceptance letter
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <strong>Proof of Principal Place of Business</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Own</td>
                    <td className="border">
                      Property Tax Receipt OR Municipal Khata copy OR
                      Electricity bill copy OR Legal ownership document
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Leased</td>
                    <td className="border">
                      Rent/Lease agreement OR Rent receipt with NOC (In case of
                      no/expired agreement) AND one of the following: Property
                      Tax Receipt, Municipal Khata copy, Electricity bill copy,
                      Legal ownership document
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Rented</td>
                    <td className="border">
                      Rent/Lease agreement OR Rent receipt with NOC (In case of
                      no/expired agreement) AND one of the following: Property
                      Tax Receipt, Municipal Khata copy, Electricity bill copy,
                      Legal ownership document
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Consent</td>
                    <td className="border">
                      Consent letter AND one of the following: Property Tax
                      Receipt, Municipal Khata copy, Electricity bill copy,
                      Legal ownership document
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Shared</td>
                    <td className="border">
                      Consent letter AND one of the following: Property Tax
                      Receipt, Municipal Khata copy, Electricity bill copy,
                      Legal ownership document
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Others</td>
                    <td className="border">Legal ownership document</td>
                  </tr>
                  <tr>
                    <td className="border">
                      <strong>Proof of Details of Bank Accounts</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">The first page of Pass Book</td>
                  </tr>
                  <tr>
                    <td className="border">Cancelled Cheque</td>
                  </tr>
                  <tr>
                    <td className="border">Bank Statement</td>
                  </tr>
                </tbody>
              </table>
              <h3>
                Authorized Signatory and Compliance Details for Non-Resident GST
                Registration
              </h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  For a Non-Resident Taxable Person to register under the GST
                  framework, certain prerequisites must be met to ensure
                  compliance and validation on the GST Portal:
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  The presence of an authorized signatory within India, equipped
                  with complete and valid details, is mandatory.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  This authorized signatory must possess a valid Permanent
                  Account Number (PAN) to ensure legitimacy and traceability.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  The authorized signatory must be reachable via a valid Indian
                  mobile number for direct communications or verifications.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  A valid email address is required for the authorized signatory
                  to facilitate electronic correspondence and official
                  notifications.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  The applicant should hold a valid identification such as a
                  Permanent Account Number (PAN), Passport Number, Tax
                  Identification Number (TIN), or any unique identifier issued
                  by the government of their home country.
                </li>
              </ul></div></div>
              <p className="mt-4">
                All prescribed documents must be furnished, and mandatory fields
                in the registration application must be duly filled to meet the
                registration criteria.
              </p>
              <p>
                Finally, the applicant must have a designated place of business
                within the state for which the registration is sought, covering
                the duration of their registration period.
              </p>
              <h3>Validity of NRI GST Registration</h3>
              <p>
                The NRI GST registration is valid for the period specified in
                the application or ninety days from the effective date of
                registration, whichever is earlier.
              </p>
              <h3>Procedure for GST Registration for NRIs</h3>
              <p>
                The GST registration has two main phases: Provisional
                Registration and Final Registration. Each phase entails specific
                steps to ensure compliance with the GST regulations in India.
              </p>
              <h4>Provisional GST registration for NRI</h4>
              <p>
                Provisional registration under GST for non-resident taxable
                persons is a temporary GST registration granted before obtaining
                the final GST registration. This provisional status allows
                non-resident individuals or business entities to start their
                business activities in India in compliance with the GST laws
                without having to wait for the completion of the full
                registration process.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    GST Registration Application Form for Foreigners:
                  </strong>{" "}
                  NRIs must initiate their GST registration process by filling
                  out Form GST REG-09. This form is specifically designed for
                  non-resident taxable persons and differs from the forms used
                  by resident taxpayers.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Electronic Submission of the Application:</strong> The
                  GST REG-09 form must be submitted online through the official
                  GST portal. A self-attested copy of the NRI's valid passport
                  must also be uploaded as proof of identity and nationality.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Authentication of the Application:</strong> The filled
                  application form must be authenticated by the applicant's
                  signature or an Electronic Verification Code (EVC).
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    Timely Submission Before Business Commencement:
                  </strong>{" "}
                  The application must be submitted at least five days before
                  the planned start of business activities in India. This
                  timeframe allows for the registration to be processed and
                  approved before business operations begin.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Business Entity-Specific Requirements: </strong>
                  Additional documentation is required if the applicant operates
                  through a business entity incorporated outside India. This
                  includes the business entity's tax identification number or a
                  unique identifier recognized by the government of the entity's
                  home country.
                </li>
              </ul></div></div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Alternatively, the entity's Indian Permanent Account Number
                  (PAN) can be provided if it is available.
                </li>
              </ul></div></div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Designation of an Authorized Signatory:</strong> The
                  GST application must be signed by an authorized signatory
                  resident of India with a valid PAN. This individual acts on
                  behalf of the NRI for GST compliance purposes.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Verification and Temporary Reference Number:</strong>{" "}
                  The GST portal will issue a temporary reference number after
                  successfully verifying the provided PAN, mobile number, and
                  email address. This number is crucial for the next step, which
                  involves making an advance tax deposit.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Advance Tax Deposit:</strong> Before the registration
                  certificate is issued, the NRI is required to make an advance
                  tax deposit equivalent to the estimated tax liability for the
                  duration for which registration is sought. This deposit is
                  reflected in the NRI's electronic cash ledger on the GST
                  portal.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Final GST registration for NRI</h4>
              <p>
                Final registration under GST for non-resident taxable persons
                solidifies their tax obligations and compliance status within
                India, transitioning from a provisional to a permanent GST
                registration. This process ensures that non-residents engaging
                in taxable transactions within India are fully integrated into
                the GST system.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Application for Final Registration:</strong> To
                  convert the provisional registration into a final one, the NRI
                  must submit an application electronically using FORM GST
                  REG–26. This step is similar to the procedure followed by
                  resident taxpayers.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Information Furnishing:</strong> Required information
                  must be furnished within three months of applying for final
                  registration. This is critical for validating the provisional
                  registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Verification and Approval:</strong> If the submitted
                  information is accurate and complete, final GST registration
                  is granted, and FORM GST REG-06 is issued to the applicant.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Discrepancies and Show-Cause Notice:</strong> In cases
                  where the information provided is found to be incorrect or
                  incomplete, a show-cause notice using FORM GST REG-27 may be
                  issued. The applicant will then be given a reasonable
                  opportunity to be heard.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Cancellation or Rectification:</strong> If the
                  authorities are not satisfied with the resolution of the
                  discrepancies, the provisional registration may be cancelled
                  using FORM GST REG-28.
                </li>
              </ul></div></div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Conversely, if the applicant's response satisfactorily
                  addresses the concerns, the show-cause notice can be nullified
                  with an order issued via FORM GST REG-20, leading to final
                  registration.
                </li>
              </ul></div></div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Authorized Signatory:</strong> All applications made
                  by NRIs must be signed by an authorized signatory who is a
                  resident of India and possesses a valid PAN. This individual
                  acts on behalf of the NRI for GST compliance purposes.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Commencing Taxable Supplies:</strong> With the
                  registration certificate, the NRI is now authorized to start
                  making taxable supplies in India, adhering to the GST
                  regulations.
                </li>
              </ul></div></div>
              <p className="mt-4">
                LegallensIndia experts can guide you through obtaining GST
                registration for NRIs.
              </p>
              <h3>Extension of GST Registration Validity</h3>
              <p>
                Suppose the NRI wishes to extend the registration beyond the
                initially approved period (up to ninety days or the period
                specified in the application). In that case, they must file an
                extension application using Form GST REG-11 before the current
                registration expires.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  This extension also requires an additional advance tax deposit
                  for the extended period.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  This detailed procedure ensures that NRIs are well-informed
                  and prepared to meet all regulatory requirements for
                  conducting taxable transactions in India under the GST regime.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Input Tax Credit</h3>
              <p>
                A non-resident taxable person is not eligible to claim input tax
                credit for any goods or services received, except for those
                directly imported goods. However, the taxes paid by a
                non-resident taxable person can be utilized as a credit by the
                respective recipients.
              </p>
              <h3>GST Returns Filings for Foreigners</h3>
              <p>
                A non-resident taxable person must electronically submit a GST
                return using FORM GSTR-5. This return, which includes outward
                and inward supply details, must be filed. Any due tax, interest,
                penalty, fees, or other charges under the Act or regulations
                must be paid within thirteen days following the end of a
                calendar month or seven days after the registration validity
                period expires, whichever comes first.
              </p>
              <h3>
                GST Refund for Foreigners in India (Payment of Advance Tax)
              </h3>
              <p>
                The advance tax paid by a non-resident taxable person will be
                eligible for GST refund for foreigners in India only after
                submitting all necessary returns for the duration their
                registration certificate was valid. The application for a refund
                can be made in section 13 of FORM GSTR-5.
              </p>
              <h3>
                LegallensIndia: Expert Assistance for GST Registration for
                Foreigners
              </h3>
              <p>
                LegallensIndia can provide significant support and expertise in
                facilitating GST registration, ensuring a smooth and compliant
                entry into the Indian market. Here’s how we can help:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Expert Guidance:</strong> LegallensIndia offers access
                  to a team of experts knowledgeable in GST regulations,
                  including specific provisions applicable to NRIs. We can
                  provide tailored advice based on your business's unique needs.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Streamlined Application Process:</strong> Our experts
                  have a deep understanding of the GST registration process.
                  They can streamline your application, ensuring all the
                  required documentation is accurate and submitted correctly.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Authorized Signatory Support:</strong> We can assist
                  in fulfilling the requirement for an authorized signatory in
                  India, guiding you through appointing someone and ensuring
                  they have the necessary documentation.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Timely Submissions:</strong> Understanding the
                  importance of deadlines, LegallensIndia can help ensure that
                  your GST registration application is submitted within the
                  stipulated time frames, avoiding unnecessary delays.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Ongoing Support:</strong> Beyond the initial
                  registration, LegallensIndia can provide ongoing support for GST
                  compliance, including filing GST returns, maintaining records,
                  and updating registration details as required.
                </li>
              </ul></div></div>
              <p className="mt-4">
                Recognizing that every business is unique, we offer customized
                solutions that cater to the specific needs of NRIs looking to do
                business in India, ensuring that the advice and support provided
                are as relevant and effective as possible.
              </p>
              <p>
                <strong>
                  Ready to streamline GST registration for foreigners? Connect
                  with LegallensIndia today!
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
