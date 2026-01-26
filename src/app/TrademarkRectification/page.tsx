import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkRectification() {
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
                Trademark Rectification
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A trademark is a distinct symbol or emblem that sets one product
                apart, akin to an individual's unique birthmark.
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
                { id: 3, title: "Trademark Rectification", url: "" },
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
                      <h5 className="card-title">Trademark Rectification</h5>
                      <p>
                        A trademark is a distinct symbol or emblem that sets one
                        product apart, akin to an individual's unique birthmark.
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

              <h2 className="display-4 mb-3">Trademark Rectification</h2>
              <p>
                A trademark is a distinct symbol or emblem that sets one product
                apart, akin to an individual's unique birthmark. To establish
                the trademark's uniqueness and exclusivity, it must be
                registered by the regulations outlined in the Trademark Act and
                Rules. When applying for a trademark or even after its
                registration, if the applicant discovers minor errors or deems
                alterations necessary, they can initiate a rectification of
                trademark process with the Registrar to address these issues. At
                LegallensIndia, we offer comprehensive Trademark Rectification
                services to guide clients through this vital aspect of trademark
                management.
              </p>
              <p>
                Take control of your trademark's accuracy and exclusivity today.
                Contact us for expert Trademark Rectification services.
              </p>
              <h3>Trademark Rectification</h3>
              <p>
                Trademark Rectification involves correcting errors or omissions
                in the trademark register that occur after the initial
                registration of trademarks. This process addresses situations
                where a trademark may have been erroneously registered or
                remains in the register even after expiration. Such cases
                necessitate rectification, and the Indian Trademark Act contains
                provisions for this purpose. Chapter 7 of the Trademark Act of
                1999 outlines these rectification provisions.
              </p>
              <p>
                According to Section 57 of the Act, any individual associated
                with trademark registration or adversely affected has the right
                to seek rectification. It's important to note that not all
                situations are eligible for rectification, and in some cases,
                rectification can result in the cancellation of the trademark
                registration. Therefore, this process should be approached with
                caution.
              </p>
              <h3>Reasons for trademark rectification</h3>
              <p>
                The reasons for rectification of trademark can be categorized as
                follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Errors in the Application Form:</strong> This
                      includes instances of inaccuracies in the application form
                      submitted for trademark registration, such as providing
                      the wrong address or contact information.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Incorrect Information on Trademark Details:
                      </strong>{" "}
                      Rectification may be necessary when there are errors or
                      inaccuracies in the information related to the trademark's
                      class, description, classification, or design.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inaccurate Information at Registration:</strong>{" "}
                      Situations may arise where the information provided during
                      the initial registration of the trademark was incorrect,
                      requiring rectification.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Updates to Application Information:</strong>{" "}
                      Changes in application details, such as alterations to the
                      applicant's information or address, can also necessitate
                      rectification.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Non-Use After Five Years and Three Months:
                      </strong>{" "}
                      Trademarks that have not been used for five years and
                      three months may become eligible for removal from the
                      trademark register.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registrar-Approved Grounds:</strong> Any
                      additional grounds for rectification that the Registrar
                      has approved and prescribed as valid reasons for
                      rectification.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Aggrieved Party's Application:</strong> In cases
                      where an aggrieved party applies for rectification or
                      removal of a trademark, the Registrar may issue an order
                      for rectification based on the application's merits.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These various reasons highlight the need for trademark
                rectification, which aims to ensure the accuracy and integrity
                of trademark information by legal requirements and to address
                errors or discrepancies that may arise during the trademark
                registration process.
              </p>
              <h3>Who can File a Trademark Rectification Application?</h3>
              <p>
                The following individuals or entities can file an application
                for Trademark Rectification as per the Trademark Act:
              </p>
              <h4>Person Aggrieved</h4>
              <p>
                Any individual who feels aggrieved by factors such as the
                similarity of the mark or the registration of a mark for
                malicious purposes is eligible to initiate the process of
                rectification filed in trademark. This can be done at any office
                with the appropriate jurisdiction.
              </p>
              <h4>Trademark Holder</h4>
              <p>
                When the trademark holder identifies mistakes or omissions
                related to their own trademark, they have the right to address
                these issues and file for rectification. It's important to note
                that an aggrieved person is not the only one permitted to file
                for rectification under trademark law.
              </p>
              <h4>Third Party</h4>
              <p>
                Any third-party individual or entity, distinct from the
                trademark holder or the aggrieved person, can also initiate the
                process of Trademark Rectification. This is applicable in cases
                where there has been a misunderstanding or where the use of a
                trademark infringes upon societal interests or a part of
                society. It's essential to understand that entities can pursue
                rectification beyond just those who are directly affected or
                hold the trademark. A third party has the option to apply for
                rectification.
              </p>
              <h3>Forms for Rectification of Trademark</h3>
              <p>
                You can request rectification through three distinct application
                processes, depending on your circumstances:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Correction or Cancellation Requested by the Trademark
                        Proprietor:
                      </strong>{" "}
                      If the trademark proprietor wishes to initiate
                      rectification, they should submit the "TM-16" form,
                      accompanied by the necessary payments and fees.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Rectification or Cancellation Initiated by the
                        Registrar:
                      </strong>{" "}
                      When the registrar initiates rectification, the
                      appropriate form to use is "TM-M," along with the relevant
                      fees as prescribed.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Rectification or Cancellation Initiated by Any Aggrieved
                        Party:
                      </strong>{" "}
                      If an aggrieved party seeks rectification or cancellation
                      of a trademark, they should complete the "TM-26" form and
                      submit it along with the required fees.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These distinct application processes of rectification filed in
                trademark ensure that individuals or entities with different
                roles and interests in rectification of trademark can initiate
                the necessary procedures as per their specific circumstances and
                requirements.
              </p>
              <h3>
                Jurisdiction for Trademark Rectification Applications in India
              </h3>
              <p>
                The applicant can submit a Trademark Rectification application
                to the appropriate authority, which may include the Trademark
                Registry with jurisdiction, the Appellate Board, or the
                Tribunal, depending on the circumstances and where an order
                related to rectification may be issued. Jurisdiction is a
                critical factor in both Trademark Registration and Trademark
                Rectification processes.
              </p>
              <p>
                Typically, a Trademark Rectification application is filed at the
                trademark office where the original registration application was
                initially submitted. The key offices associated with Trademark
                Jurisdiction include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Mumbai
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Chennai
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Kolkata
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Delhi
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Ahmedabad
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These offices are essential locations for handling matters
                related to Trademark Jurisdiction and are where applicants can
                file their Trademark Rectification applications as needed.
              </p>
              <h3>The Trademark Rectification Process</h3>
              <p>
                Whether initiated by the proprietor or the registrar, the
                process for rectification of trademark remains consistent and
                involves the following steps:
              </p>
              <h4>Drafting of the Application</h4>
              <p>
                The applicant begins by carefully drafting the rectification
                application, ensuring all necessary information is included.
                Precision in this step is crucial, as any errors can result in
                application rejection.
              </p>
              <h4>Form Filing</h4>
              <p>
                After drafting the application, it is essential to do the
                rectification filed in trademark using the requisite form with
                the Trademark Registrar, accompanied by the prescribed fees.
                This step is mandatory for initiating the rectification process.
              </p>
              <h4>Documents Submission</h4>
              <p>
                Following form submission, the applicant must provide the
                necessary documents for rectification, ensuring proper
                formatting and including proof, such as identity documents,
                address proof, or PAN details, where alterations are required.
              </p>
              <h4>Documents Verification</h4>
              <p>
                Once the documents are submitted, they undergo verification by
                the concerned authorities. If the verification is successful and
                satisfies the authorities, the process proceeds. However, if the
                verification is satisfactory, the application may be accepted.
              </p>
              <h4>Final Order</h4>
              <p>
                After hearing both parties and reviewing evidence, the Registrar
                or the Appellate Court issues an order following the
                verification process. This order can involve rectification,
                addition, variation, or substitution in the trademark register,
                as deemed appropriate.
              </p>
              <h3>
                Process for Rectification Initiated by an Aggrieved Person
              </h3>
              <p>
                When an aggrieved person initiates rectification, the process
                involves the following steps:
              </p>
              <h4>Filing for Rectification</h4>
              <p>
                The aggrieved individual files for rectification using Form
                TM–26, including reasons for rectification, and submits it to
                the Registrar along with the prescribed fees.
              </p>
              <h4>Notice to Trademark Holder</h4>
              <p>
                The Registrar sends a notice to the trademark holder, prompting
                them to file a counter statement in response to the
                rectification initiated by the aggrieved party.
              </p>
              <h4>Affidavits and Evidence</h4>
              <p>
                Both parties are required to submit affidavits along with
                relevant evidence.
              </p>
              <h4>Verification and Decision</h4>
              <p>
                The Registrar or the Appellate Board reviews the documents and
                hears both parties. The final decision may involve
                rectification, addition, removal, or cancellation of the
                trademark, based on their discretion.
              </p>
              <h3>Consequences of Trademark Rectification</h3>
              <p>
                Trademark rectification can result in removing a registered
                trademark, but this decision is reached through a thorough
                process that considers relevant evidence. A trademark that
                remains unused for five years or lacks genuine market
                utilization for three years or more becomes liable for removal
                from the Trademark Register. It is essential for a registered
                trademark to maintain its presence and reputation in the market.
                Please do so to avoid trademark cancellation or temporary
                removal.
              </p>
              <h3>Why Choose LegallensIndia for Trademark Rectification?</h3>
              <p>
                LegallensIndia offers several compelling reasons for choosing our
                services:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Comprehensive Legal and Financial Support:
                      </strong>{" "}
                      LegallensIndia is a platform that caters to all your legal
                      and financial needs and connects you with experienced
                      professionals.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Simplified Legal Requirements:</strong> The
                      platform focuses on streamlining legal requirements for
                      clients, making the process hassle-free.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Guidance:</strong> LegallensIndia' dedicated
                      team of experts is readily available to answer your
                      questions and guide you through the Trademark
                      Rectification process.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reliability and Trust:</strong> Clients can rely
                      on LegallensIndia for trustworthy, high-quality services.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Client-Centric Approach:</strong> LegallensIndia
                      aims to create a user-friendly and efficient system for
                      its clients.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transparent Progress Tracking:</strong> Clients
                      can track the progress of their cases on the platform.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Trademark Rectification is a critical process to correct errors
                or inaccuracies in trademark registration. LegallensIndia provides
                a valuable resource for navigating this process efficiently and
                effectively. Whether you require assistance with trademark
                registration, rectification, renewal, or objection filing,
                LegallensIndia' team of professionals is here to assist you. Feel
                free to reach out to LegallensIndia for any trademark-related
                queries or guidance.
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
