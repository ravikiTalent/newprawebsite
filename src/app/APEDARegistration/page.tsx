import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function APEDARegistration() {
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
              <h1 className="display-1 text-white mb-3">APEDA Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                APEDA Registration is an essential certificate for Indian importers and exporters seeking to access international markets in the agricultural and processed food sectors.
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
                { id: 3, title: "APEDA Registration", url: "" },
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
                      <h5 className="card-title">APEDA Registration</h5>
                      <p>APEDA Registration is an essential certificate for Indian importers and exporters seeking to access international markets in the agricultural and processed food sectors.
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

              <h2 className="display-4 mb-3">APEDA Registration</h2>

              <p>
                <span>APEDA Registration</span>
                <span>
                  {" "}
                  is an essential certificate for Indian importers and exporters
                  seeking to access international markets in the agricultural
                  and processed food sectors. APEDA, which stands for the{" "}
                </span>
                <span>
                  Agricultural and Processed Food Products Export Development
                  Authority
                </span>
                <span>
                  , signifies regulatory compliance and provides access to an
                  array of incentives and opportunities designed to propel
                  exports and catalyse growth. In a world increasingly valuing
                  organic, authentic, and diverse food products,{" "}
                </span>
                <span>APEDA Registration</span>
                <span>
                  {" "}
                  has become an indispensable asset for Indian exporters.&nbsp;
                </span>
              </p>
              <p>
                <span>LegallensIndia</span>
                <span> can help you obtain your </span>
                <span>APEDA Registration</span>
                <span>
                  {" "}
                  smoothly and efficiently, ensuring you meet all requirements
                  with ease.
                </span>
              </p>
              <p>
                <span>
                  <em>
                    Ready to Expand Your Export Business? Get Your APEDA
                    Registration with LegallensIndia Today!
                  </em>
                </span>
              </p>
              <h3>
                <span>What is APEDA?</span>
              </h3>
              <p>
                <span>APEDA</span>
                <span>, established under the </span>
                <span>APEDA Act of 1985</span>
                <span>
                  , is a government authority tasked with regulating and
                  promoting the export of agricultural and processed food
                  products from India.{" "}
                </span>
                <span>APEDA Registration</span>
                <span>, also known as </span>
                <span>APEDA RCMC Registration</span>
                <span>
                  , is a mandatory requirement for exporters dealing with
                  scheduled products. This certification ensures that exporters
                  comply with export regulations and provides access to various
                  benefits, including financial assistance, training programs,
                  and quality improvement guidelines.
                </span>
              </p>
              <h3>
                <span>What is APEDA Registration?</span>
              </h3>
              <p>
                <span>
                  APEDA Registration, also referred to as APEDA RCMC
                  Registration (Registration-Cum-Membership Certificate (RCMC)),
                  is issued by the APEDA authorities to exporters of scheduled
                  food products under the APEDA Act of 1985. This registration
                  is a compulsory requirement for any exporter intending to
                  engage in the export of listed agricultural and processed food
                  products. Without an RCMC membership, exporters cannot legally
                  commence their business activities related to these products
                  as per regulatory guidelines. The APEDA RCMC registration form
                  must be accurately filled out and submitted as part of the
                  APEDA online registration procedure. Ensure to get an RCMC
                  APEDA certificate.
                </span>
              </p>
              <h3>
                <span>Eligibility for APEDA Registration</span>
              </h3>
              <p>
                <span>
                  Any individual or food business operator exporting one or more
                  food products listed under the{" "}
                </span>
                <span>First Schedule</span>
                <span> and </span>
                <span>Second Schedule</span>
                <span> of the APEDA Act is eligible for </span>
                <span>APEDA Registration</span>
                <span>
                  . According to the guidelines specified in sub-section (1) of
                  Section 12 of the APEDA Act, such businesses and individuals
                  are required to obtain an{" "}
                </span>
                <span>APEDA Registration Certificate</span>
                <span>
                  {" "}
                  within one month of the incorporation of their business.
                </span>
              </p>
              <h4>
                <span>Scheduled Food Products Under the APEDA Act</span>
              </h4>
              <p>
                <strong>First Schedule</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Fruits, Vegetables, and their Products</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Meat and Meat Products</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Poultry and Poultry Products</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Dairy Products</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Chocolates, Cocoa, and its Products</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Cereals and Cereal Products</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Groundnuts, Peanuts, and Walnuts</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Pickles, Chutneys, and Papads</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>De-oiled Rice Bran</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Alcoholic and Non-Alcoholic Beverages</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Green Pepper in Brine</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <span>Guar Gum</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Floriculture and Floriculture Products</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Herbal and Medicinal Plants</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Confectionery, Biscuits, and Bakery Products</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Honey, Jaggery, and Sugar Products</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Second Schedule</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Basmati Rice</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>By obtaining </span>
                <span>APEDA Registration</span>
                <span>
                  , exporters of these scheduled products can ensure compliance
                  with export regulations and gain access to various benefits
                  offered by APEDA.
                </span>
              </p>
              <h3>
                <span>Why APEDA Registration is Required?</span>
              </h3>
              <p>
                <span>
                  Below are the essential reasons why APEDA Registration is
                  required for your business :
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Legal Compliance: </strong>
                      </span>
                      <span>
                        Ensures adherence to government regulations for
                        exporting scheduled products.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Market Access:</strong>
                      <strong> </strong>Acts as a gateway to international
                      markets, allowing legal export of products.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Financial Assistance: </strong>
                        <span>
                          Eligibility for APEDA’s financial schemes to reduce
                          costs related to packaging, branding, marketing, and
                          infrastructure development.
                        </span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Quality Assurance: </strong>
                        <span>
                          Access to guidelines and training programs to enhance
                          product quality and competitiveness.
                        </span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Market Development Support: </strong>
                        <span>
                          Assistance in promoting products globally through
                          trade fairs, buyer-seller meets, and other promotional
                          activities.
                        </span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Information Access: </strong>
                        <span>
                          Updates on international trade policies, market
                          intelligence, and emerging opportunities.
                        </span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>C</strong>
                      </span>
                      <span>
                        <strong>ertification and Accreditation: </strong>
                        <span>
                          Prerequisite for obtaining other necessary
                          certifications for specific markets.
                        </span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Export Facilitation:</strong>{" "}
                      <span>
                        Streamlines export procedures by providing necessary
                        support and guidance.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Regulatory Benefits: </strong>
                        <span>
                          Access to government initiatives aimed at boosting
                          exports, including tax exemptions and subsidies.
                        </span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Dispute Resolution: </strong>
                        <span>
                          Acts as an intermediary in resolving disputes between
                          exporters and importers.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Timeframe for Obtaining APEDA Registration</span>
              </h3>
              <p>
                <span>Exporters are expected to acquire </span>
                <span>APEDA Registration</span>
                <span> within </span>
                <span>one month</span>
                <span>
                  {" "}
                  of the incorporation of their business. Timely registration
                  ensures uninterrupted access to APEDA benefits and compliance
                  with export regulations.
                </span>
              </p>
              <h3>
                <span>APEDA Registration Documents</span>
              </h3>
              <p>
                <span>
                  Exporters must submit the following documents when applying
                  for APEDA license Registration:
                </span>
              </p>
              <h3>
                <span>For All Exporters</span>
              </h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Import-Export Code (IEC) issued by the Directorate
                        General of Foreign Trade (DGFT)
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Bank Certificate for APEDA registration&nbsp; or
                        Cancelled Cheque
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Bank Account Statement for the last two months
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>GST Registration Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Duly Signed APEDA RCMC Registration Form</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Additional Documents for Manufacturer Exporters</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Central FSSAI Registration (Food Safety and Standards
                        Authority of India)
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        DIS/SIA Certificate issued by the Department of
                        Horticulture for food products listed under the APEDA
                        Act
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Certificate of Incorporation of the firm (including
                        partnership deed if applicable)
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        No Objection Certificate (NOC) from the Pollution
                        Control Board
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <span>&nbsp;</span>
                      <span>MSME Certificate (if applicable)</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <span>&nbsp;</span>
                      <span>Halal Certificate (if required)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Validity and APEDA Registration Renewal Online</span>
              </h3>
              <p>
                <span>The </span>
                <span>Registration-Cum-Membership Certificate (RCMC)</span>
                <span> issued by APEDA is valid for a period of </span>
                <span>five years</span>
                <span>
                  {" "}
                  from the date of issuance. After this duration, the{" "}
                </span>
                <span>RCMC APEDA license</span>
                <span> is </span>
                <span>auto-renewed</span>
                <span>
                  {" "}
                  every five years upon the submission of the required renewal
                  fee. Exporters are not required to submit any additional
                  documents or undergo further formalities for the APEDA renewal
                  process once the fee is paid. This{" "}
                </span>
                <span>APEDA online registration procedure</span>
                <span>
                  {" "}
                  ensures a seamless renewal experience, allowing exporters to
                  maintain their registration without administrative delays.
                </span>
              </p>
              <h3>
                <span>Penalties for Non-Compliance with the APEDA Act</span>
              </h3>
              <p>
                <span>
                  Non-compliance with the APEDA Act can result in severe
                  penalties:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Imprisonment:</strong>
                        <strong> </strong>Up to six months for violating or
                        attempting to breach provisions.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <strong>Fines:</strong>
                      <span>
                        {" "}
                        Rs.1,000 for initial offences and an additional Rs.50
                        per day for repeat offences from the date of the first
                        infringement until conviction.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Corporate Liability: </strong>
                        <span>
                          If a company commits an offence, every person in
                          charge at the time shall be deemed guilty along with
                          the company and punished accordingly.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Cancellation of APEDA (RCMC) Registration</span>
              </h3>
              <p>
                <span>APEDA License Registration</span>
                <span>
                  {" "}
                  can be cancelled under the following conditions as specified
                  in{" "}
                </span>
                <span>Section 11</span>
                <span> of the APEDA Act:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Non-Activity:</strong>
                        <strong> </strong>Failure to conduct the export business
                        of scheduled food products for 12 consecutive months.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Incorrect Information:</strong>
                        <strong> </strong>Providing false or misleading
                        information during the registration process.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Regulatory Violations:</strong>
                        <strong> </strong>Non-compliance with APEDA rules and
                        regulations.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Maintaining active business operations and adhering to
                  regulatory guidelines are crucial to retaining your{" "}
                </span>
                <span>APEDA Registration</span>
                <span> and its associated benefits.</span>
              </p>
              <h3>
                <span>APEDA Registration Online Procedure</span>
              </h3>
              <p>
                <span>
                  The issuance of the APEDA Registration Certificate is now
                  fully online, requiring exporters to fill out an application
                  form and submit their documents via the APEDA portal. Below is
                  the step-by-step procedure for APEDA registration online
                  procedure:
                </span>
              </p>
              <h4>
                <span>Step 1: Online Application</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Visit the APEDA portal and click on the "Register as
                        Member" tab to apply for an RCMC APEDA certificate.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Fill in all mandatory details such as the Import-Export
                        Code (IEC), email address, and mobile number.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        An OTP (One-Time Password) will be sent to your
                        registered mobile number and email for verification
                        purposes.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 2: Documentation</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        After OTP verification, complete the mandatory
                        application form by providing all the requested details.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Upload all the required documents for APEDA
                        Registration.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Applicants can save and edit their application APEDA
                        online registration form multiple times before
                        submitting the APEDA registration fees.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 3: Submission of Fee</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Submit the registration fee after completing the
                        application
                      </span>
                      <span> </span>
                      <span>APEDA gov in the registration form.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Upon successful payment, an application number will be
                        generated.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Use this application number to track the status of your
                        RCMC application until it is issued.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 4: Issuance of APEDA Certificate</span>
              </h4>
              <p>
                <span>
                  The APEDA registration certificate will be issued within 10-15
                  days after successful submission on the APEDA portal.
                </span>
              </p>
              <p>
                <span>
                  Applicants can download their APEDA certificate using the
                  login ID and password provided by APEDA to their registered
                  mobile number and email. This is the brief process on how to
                  apply APEDA online.
                </span>
              </p>
              <p>
                <span>
                  The APEDA registration process is multi-step and requires
                  proper legal knowledge. Seeking help from experts is advised
                  to simplify and expedite the APEDA application process.
                </span>
              </p>
              <p>
                <span>
                  <em>
                    LegallensIndia experts can guide you through each step,
                    ensuring that all requirements are met for a successful
                    registration.
                  </em>
                </span>
              </p>
              <h3>
                <span>APEDA Registration Number</span>
              </h3>
              <p>
                <span>
                  Each APEDA Registration Certificate issued by the Agricultural
                  and Processed Food Products Export Development Authority
                  (APEDA) contains a unique APEDA Registration Number. This
                  number is a critical identifier for your export business,
                  distinguishing it from other registered exporters.
                </span>
              </p>
              <p>
                <span>Importance of the APEDA Registration Number:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Unique Identification:</strong>
                        <strong> </strong>It uniquely identifies your business
                        within the APEDA system, ensuring that your export
                        activities are accurately monitored and recorded.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Official Documentation: </strong>
                        <span>
                          Must be referenced in all export-related documents to
                          ensure compliance and facilitate smooth processing
                          through customs and other regulatory bodies.
                        </span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Verification and Tracking:</strong>{" "}
                      <span>
                        Allows authorities and trading partners to verify your
                        registration status and track your export transactions
                        efficiently.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Access to Benefits:</strong>
                        <strong> </strong>Essential for availing of various
                        APEDA schemes and benefits, including financial
                        assistance and market development support.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Renewal and Updates:</strong>
                        <span>
                          {" "}
                          Required when renewing your registration or updating
                          your business information with APEDA.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>
                  Streamline Your APEDA Certificate Registration with
                  LegallensIndia
                </span>
              </h3>
              <p>
                <span>
                  Navigating the complexities of APEDA Registration can be
                  challenging, but with LegallensIndia, the process becomes
                  straightforward and efficient. Here's why you should choose
                  LegallensIndia for your APEDA registration needs:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Expertise and Experience: </strong>
                      </span>
                      <span>
                        LegallensIndia has a team of professionals who specialize
                        in APEDA Registration and understand the complexities
                        involved. Their expertise ensures that your application
                        is accurate and complete, minimising the chances of
                        rejection.&nbsp;
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>End-to-End Support:</strong>
                      </span>
                      <span>
                        {" "}
                        From documentation to application submission and
                        follow-up, LegallensIndia provides comprehensive support
                        at every step.&nbsp;&nbsp;
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Time and Cost Efficiency:</strong>
                        <strong> </strong>By handling all the procedural
                        requirements efficiently, LegallensIndia saves you
                        valuable time and resources.&nbsp;
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Simplified Process:</strong>{" "}
                      <span>
                        The team at LegallensIndia breaks down the multi-step
                        registration process into manageable tasks, guiding you
                        through each one.&nbsp;&nbsp;
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>APEDA Registration Fee:</strong>
                        <strong> </strong>Understanding the APEDA registration
                        fees and associated APEDA registration cost is crucial
                        for budgeting your export operations. LegallensIndia
                        provides detailed insights into the APEDA registration
                        charges, helping you navigate the financial aspects with
                        ease. Our transparent pricing model ensures that you are
                        aware of all costs upfront, allowing you to plan
                        effectively without unexpected expenses.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Dedicated Customer Support:</strong>{" "}
                      <span>
                        We offer prompt and responsive customer service to
                        address any queries or concerns you may have during the
                        registration process.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  By opting for LegallensIndia, you gain a trusted partner who can
                  make the APEDA Registration process seamless and hassle-free,
                  enabling you to expand your business into international
                  markets with confidence.
                </span>
              </p>
              <p>
                <span>
                  <em>
                    Ready to simplify your APEDA Registration process? Contact
                    LegallensIndia now to leverage expert guidance and support.
                  </em>
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
