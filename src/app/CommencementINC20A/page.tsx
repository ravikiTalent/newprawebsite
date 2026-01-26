import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function CommencementINC20A() {
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
                Commencement of Business
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Is your company incorporated and having share capital? One
                crucial compliance that must be completed before starting
                business operations is the declaration of the Commencement of
                Business.
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
                { id: 2, title: "MCA Services", url: "MCAServices" },
                { id: 3, title: "Commencement of Business", url: "" },
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
                      <h5 className="card-title">Commencement of Business</h5>
                      <p>
                        Is your company incorporated and having share capital?
                        One crucial compliance that must be completed before
                        starting business operations is the declaration of the
                        Commencement of Business.
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
                Certificate of Commencement of Business
              </h2>
              <p>
                Is your company incorporated and having share capital? One
                crucial compliance that must be completed before starting
                business operations is the declaration of the Commencement of
                Business. Yes, obtaining the Certificate of Commencement of
                Business (COB) is mandatory for companies incorporated with
                share capital after November 2, 2018.
              </p>
              <p>
                At LegallensIndia, we not only assist with company registration
                but also specialise in guiding businesses through various
                compliance requirements with ease and precision. From initial
                company registration to securing the COB Certificate and
                managing ongoing compliances, we provide a comprehensive range
                of services to ensure your business adheres to all statutory
                norms and regulations.
              </p>
              <h3>What is Commencement of Business?</h3>
              <p>
                The Commencement of Business is a formal declaration made by the
                directors of a company within 180 days of its incorporation.
                This declaration confirms that the subscribers to the Memorandum
                of Association (MOA) have paid the agreed value of shares, and
                it includes verification of the company’s registered office
                address. The declaration, along with proof of the subscription
                money received, must be filed using Form 20A with the Registrar
                of Companies (RoC) . Compliance with this requirement is
                essential for companies to legally commence their business
                operations.&nbsp; All this critical information constitutes the
                commencement of business meaning.&nbsp;
              </p>
              <p>
                Verification of&nbsp; Form 20A is conducted by authorised
                professionals such as Chartered Accountants (CA), Company
                Secretaries (CS), or Cost Accountants (CWA). Errors or
                discrepancies in the submitted commencement of business form can
                lead to accountability for these professionals, resulting in
                penalties under the Companies Act 2013.
              </p>
              <h3>
                Who needs to file a declaration for the Commencement of
                Business?
              </h3>
              <p>
                Under the Companies Act 2013,{" "}
                <strong>companies with a share capital structure</strong> must
                obtain the Commencement of Business (COB) Certificate before
                commencing business operations. This requirement is applicable
                to:
              </p>
              <p>
                <strong>Companies Incorporated After November 2, 2018</strong>:
                All companies registered after this date must obtain the COB
                Certificate within 180 days of their incorporation.
              </p>
              <p>
                <strong>Companies with Share Capita</strong>l: Every company
                operating with a share capital structure, irrespective of
                business type, must apply for the COB Certificate.
              </p>
              <p>
                <strong>Includes:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Private Limited
                      Companies
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Public Limited Companies
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Section 8 Companies
                      (with share capital structure)&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Significance of the Certificate of Commencement of Business
              </h3>
              <p>
                The Commencement of Business Certificate holds considerable
                significance as it officially indicates a company’s readiness to
                begin operations.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Operational Readiness Confirmation: </strong>This
                      commencement of buinesscertificate serves as proof that
                      the company has met all the legal prerequisites and is
                      fully prepared to engage in business activities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legitimacy Assurance: </strong>It assures
                      stakeholders, investors, and regulatory authorities that
                      the company is operating in accordance with established
                      regulations, thereby reinforcing its legitimacy and
                      accountability.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Due Date for Obtaining the Certificate of Commencement of
                Business (COB)
              </h3>
              <p>
                All companies with a share capital structure must obtain the
                Commencement of Business Certificate within{" "}
                <strong>180 days of their incorporation</strong>. Adhering to
                this deadline is essential to avoid penalties and potential
                disqualification.&nbsp;&nbsp;
              </p>
              <h3>Commencement of business Form 20A Filing Exemptions</h3>
              <p>
                Specific categories of companies are exempt from filing Form
                20A, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Companies Incorporated Before November 2, 2018:{" "}
                      </strong>
                      All companies formed prior to this date are exempt from
                      filing the form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Companies Without Share Capital: </strong>
                      Businesses that operate without a share capital structure
                      do not need to submit Form 20A.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Consequences of Non-Compliance with Commencement of Business
                (COB)
              </h3>
              <p>
                Failure to file the Commencement of Business Certificate (COB)
                within the prescribed 180-day period can have severe
                repercussions:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Prohibition on Business Operations: </strong>The
                      company will be prohibited from commencing its business
                      activities or accessing any borrowing facilities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Penalties on the Company: </strong>The company
                      will incur a penalty of Rs. 50,000.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Penalties on Directors: </strong>Each defaulting
                      director will face a penalty of Rs. 1,000 per day, up to a
                      maximum of Rs. 1,00,000.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Potential Strike-Off:</strong> If no declaration
                      is filed, and the Registrar of Companies (RoC) has
                      reasonable grounds to believe the company is not
                      conducting business or operations, the RoC may initiate
                      action to remove the company’s name from its register,
                      resulting in a company strike-off.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for Filing Form 20A</h3>
              <p>
                To successfully file the Commencement of Business Form 20A, the
                following documents are required:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proof of Payment for Share Subscription:</strong>{" "}
                      Bank statement showing receipt of subscription money from
                      the subscribers.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registered Office Address Verification:</strong>{" "}
                      Evidence of the company’s registered office address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Certificate of Registration from RBI (if applicable):{" "}
                      </strong>
                      Mandatory for Non-Banking Financial Companies (NBFCs) or
                      entities regulated by other financial authorities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Directors’ Declaration and Board Resolution:{" "}
                      </strong>
                      Declaration by the directors affirming that the
                      subscribers have paid the share value, along with a
                      supporting board resolution.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Procedure for Obtaining the Certificate of Commencement of
                Business&nbsp;
              </h3>
              <p>
                Follow these steps to obtain the&nbsp;certificate of
                commencement of business mca
                <span>&nbsp;by filing Form 20A:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Access the MCA Portal: </strong>Log in to the
                      Ministry of Corporate Affairs (MCA) portal with your
                      credentials.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Download Form 20A: </strong>Go to “MCA Services”
                      and select “Company Forms Download.” Choose Form 20A
                      (Declaration of Commencement of Business).&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Complete the Form:</strong> Enter the necessary
                      company details such as the Corporate Identification
                      Number (CIN) and other information.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Attach Required Documents:</strong> Attach the
                      proof of payment for the shared subscription, the
                      registered office address verification, and any applicable
                      documents like the RBI registration certificate.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Affix the Digital Signature Certificate (DSC):
                      </strong>{" "}
                      Ensure the form is signed using the Digital Signature
                      Certificate (DSC) of an authorised director.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Professional Certification: </strong>The
                      commencement of business form must be verified and
                      certified by a Chartered Accountant (CA), Company
                      Secretary (CS), or Cost Accountant (CWA).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Submit the Form and Pay Fees: </strong>Submit Form
                      20A along with the required attachments through the MCA
                      portal. Pay the applicable fees based on the company’s
                      share capital.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Verification and Acknowledgment: </strong>Once
                      submitted, a Service Request Number (SRN) will be
                      generated. Upon verification, an acknowledgement email
                      will be sent confirming the successful filing of Form 20A.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Why Choose LegallensIndia for Your Commencement of Business
                Certificate?
              </h3>
              <p>
                LegallensIndia is your trusted partner for ensuring smooth and
                hassle-free compliance with the Ministry of Corporate Affairs
                (MCA). Our expertise in company registration and ongoing
                compliance processes makes us the ideal choice for obtaining
                your Certificate of Commencement of Business (COB). Here’s why
                you should choose LegallensIndia:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Guidance:</strong> Our team of
                      professionals is well-versed with the latest MCA
                      regulations and requirements, providing you with accurate
                      advice and assistance throughout the COB Certificate
                      filing process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>End-to-End Support: </strong>We handle every step,
                      from document preparation and form submission to
                      professional certification and payment of fees, ensuring
                      that the entire procedure is completed seamlessly.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Timely Compliance: </strong>We prioritize prompt
                      filing and submission to help your company meet deadlines
                      and avoid any penalties or compliance issues.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transparent Process: </strong>Our clear and
                      straightforward approach ensures that you stay informed at
                      every stage, giving you peace of mind and confidence in
                      the process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Comprehensive Compliance Solutions: </strong>
                      Beyond the COB Certificate, we offer a wide range of
                      services, including annual filings, GST compliance, and
                      other MCA-related services, making us a one-stop solution
                      for all your business needs.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                With LegallensIndia, you can focus on growing your business while
                we take care of all your compliance requirements. Contact us
                today to get started on obtaining your Commencement of Business
                Certificate!
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
