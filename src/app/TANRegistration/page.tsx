import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TANRegistration() {
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
              <h1 className="display-1 text-white mb-3">TAN Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In India, it is mandatory for businesses to have a Tax Deduction
                Account Number (TAN).
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
                { id: 2, title: "Income Tax", url: "IncomeTax" },
                { id: 3, title: "TAN Registration", url: "" },
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
                      <h5 className="card-title">TAN Registration</h5>
                      <p>
                        In India, it is mandatory for businesses to have a Tax
                        Deduction Account Number (TAN).
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

              <h2 className="display-4 mb-3">TAN Registration</h2>
              <p>
                In India, it is mandatory for businesses to have a Tax Deduction
                Account Number (TAN). This number is issued by the Income Tax
                Department and is used as a unique identifier for individuals or
                entities responsible for deducting or collecting Tax at source.
                It is compulsory to mention the TAN in all TDS returns and on
                other documents related to income tax procedures. Non-compliance
                may lead to penalties. Understanding what is TAN registration
                number, its purposes, and usage to maintain compliance with
                Income tax department.
              </p>
              <p>
                LegallensIndia can help both individuals and companies with their
                TAN application online and secure their company TAN Number (Tax
                Deduction and Collection Account Number) in a prompt and
                efficient manner. Leveraging our proficiency in tax and
                regulatory affairs, LegallensIndia makes the complex TAN
                Registration process straightforward.
              </p>
              <p>Act now and secure your TAN Number with LegallensIndia!</p>
              <h3>What is TAN Registration Number?</h3>
              <p>
                TAN, or Tax Deduction and Collection Account Number, is a unique
                10-digit alphanumeric identifier issued by the Income Tax
                Department. It's primarily used by individuals or entities
                responsible for deducting or collecting Tax at source (TDS/TCS).
              </p>
              <h3>TAN Number: Definition and Configuration</h3>
              <p>
                The Tax Deduction and Collection Account Number, abbreviated as
                TAN Number, is a ten-character alphanumeric identifier designed
                with a specific structure:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>First Four Characters (Alphabetic):</strong> The
                      TAN's initial three characters represent the jurisdiction
                      where it was issued. The fourth character, meanwhile,
                      signifies the first letter of the name of the entity or
                      individual applying for the TAN.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Middle Five Characters (Numeric):</strong> These
                      central five characters are system-generated unique
                      numbers.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Final Character (Alphabetic):</strong> The
                      concluding character is a system-generated unique letter.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who Should Obtain a TAN?</h3>
              <p>
                <strong>Tax Deducting Entities</strong>: Any individual or
                organization that needs to deduct Tax at source during certain
                transactions, such as salary distributions, contractor payments,
                or rent payments exceeding Rs.1,80,000 annually. Those who fall
                under this criteria must proceed with the TAN application online
                and secure the TAN registration number.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Non-Profit Organizations:</strong> Non-profits
                      that make specific payments surpassing the designated
                      threshold.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Branches:</strong> Branches of companies
                      that execute specified payments exceeding the set
                      threshold limits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Salaried Individuals:</strong> Those earning a
                      salary do not need to obtain a TAN or deduct Tax at the
                      source.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">The Importance of Securing a Company TAN Number</h3>
              <p>
                As outlined in Section 203A of the Income-tax Act, 1961, any
                individual or entity tasked with the responsibility of deducting
                or collecting Tax at source is required to obtain a TAN (Tax
                Deduction and Collection Account Number). Moreover, this section
                stipulates that the TAN Number be incorporated in multiple
                documents.
              </p>
              <p>
                The TAN should be clearly stated in the following documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> TDS (Tax Deducted at
                      Source) or TCS (Tax Collected at Source)
                      statements/returns.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Challans related to TDS
                      or TCS payments.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Issuance or presentation
                      of TDS or TCS certificates.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Various forms and
                      documents associated with income tax procedures and
                      submissions.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">TAN Registration</h3>
              <p>
                TAN Registration is the process through which eligible entities
                apply through TAN application and obtain their TAN. Once
                registered, the entity can legally deduct or collect Tax at
                source and remit that Tax to the government. This Registration
                also mandates that the TAN be mentioned in all TDS/TCS
                transactions, returns, and related compliance documents.
              </p>
              <p>
                Without a valid TAN, entities may face penalties for
                non-compliance when conducting tax-related activities. It
                ensures that the Income Tax Department can efficiently track and
                manage tax collections and deductions, thereby streamlining tax
                administration in the country.
              </p>
              <h3>Features of TAN Registration</h3>
              <p>
                The Tax Deduction and Collection Account Number (TAN) is a
                pivotal for those responsible for deducting or collecting Tax at
                source. Here are the main features of TAN registration number:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Lifetime Validity:</strong> Once obtained, a TAN
                      is valid for a lifetime. This means entities or
                      individuals don't need to renew or reapply for it
                      periodically.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Mandatory for TDS Payments:</strong> When making
                      Tax Deducted at Source (TDS) payments to an authorized
                      bank, the TAN must be quoted. Without a TAN, banks will
                      not accept your TDS deposits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Requirement for Proprietors:</strong> Even
                      individuals running a sole proprietorship business are
                      mandated to obtain TAN if they are liable to deduct Tax at
                      the source. This underscores the importance of TAN not
                      just for larger entities but also for individual business
                      owners.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unique Identifier:</strong> TAN is a distinct
                      10-character alphanumeric code. This unique identifier is
                      issued by the Income Tax Department specifically for those
                      individuals or entities responsible for deducting or
                      collecting Tax at source.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                In essence, the TAN number is crucial for ensuring compliance
                with the tax regulations in India. Hence, the eligible
                individuals and entities must apply through TAN application
                online and obtain a company TAN number.
              </p>
              <h3>Advantages of TAN Registration Number</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ensuring Legal Compliance:</strong> Securing a Tax
                      Deduction and Collection Account Number (TAN) is pivotal
                      for any entity tasked with a tax deduction or collection.
                      Holding a TAN guarantees adherence to tax regulations,
                      shielding you from potential legal repercussions or
                      penalties due to non-compliance.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Streamlined Tax Operations:</strong> Possessing a
                      TAN enhances the efficiency of your tax deduction and
                      collection mechanisms. This paves the way for timely and
                      accurate tax deductions and submissions to the government,
                      mitigating any scope for errors or lags in the cycle.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Effortless Monitoring and Reconciliation:</strong>{" "}
                      A TAN empowers you with a straightforward method to
                      monitor and reconcile your tax transactions. You can
                      swiftly retrieve your TDS/TCS records and certificates,
                      which confirms the accurate deduction and payment of
                      taxes. Such a systematic approach simplifies the oversight
                      of tax transactions and reinforces regulatory compliance.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for TAN Application</h3>
              <p>
                Below, we have given the list of documents required for TAN
                application:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Legal Document
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Passport Size Photograph
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Proof of Address for the
                      Registered Office
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Company's PAN Card
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> TAN Application Form
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">TAN Registration Process in India: A Comprehensive Guide</h3>
              <p>
                In India, the Tax Deduction and Collection Account Number (TAN)
                can be registered through two primary methods: TAN apply online
                and offline. TAN application online has the benefit of instant
                processing and is less time-consuming, while the offline process
                is suitable for people who prefer a paper-based application
                process. Here's a step-by-step breakdown of both procedures:
              </p>
              <h3>Offline TAN Registration Process</h3>
              <p>
                For the manual method, the individual needs to fill out Form 49B
                (the TAN allotment application form) and provide it, with the
                required payment, to any TIN-Facilitation Center (TIN-FC) of
                Protean.
              </p>
              <p>
                Additionally, the individual can retrieve the TAN application
                online from the NSDL site, complete it, and then hand over the
                filled form along with the necessary fees to the TIN-FC.
              </p>
              <h3>Online TAN Registration Process</h3>
              <p>
                Individuals looking to obtain a TAN with the convenient option
                of TAN apply online through the NSDL website. It's essential to
                read the guidelines thoroughly, complete the TAN application
                online form with accuracy, and then submit it electronically for
                processing.
              </p>
              <p>
                <strong>Mandatory PAN:</strong> It's crucial to include your PAN
                (Permanent Account Number) Registration number in the
                application. A PAN serves as an essential identification marker,
                regardless of whether the tax collector or deductor account
                number follows an old format. Consequently, it's beneficial to
                undergo online PAN Registration simultaneously when the TAN
                apply online is on being processed.
              </p>
              <p>
                Remember, irrespective of the method you choose, whether the TAN
                apply online or offline, it's vital to ensure the accuracy of
                the details provided, as TAN is a crucial identifier for
                tax-related transactions and compliance.
              </p>
              <h3>Streamlining TAN Registration with LegallensIndia</h3>
              <p>
                LegallensIndia is a prominent platform; we streamline various
                business and financial processes in India, including TAN apply
                online and registration. With our comprehensive understanding of
                the Indian taxation system, LegallensIndia can guide individuals
                and businesses with the submission of documents required for TAN
                application and obtaining registration. By choosing
                LegallensIndia, applicants benefit from expert assistance,
                ensuring that every step, from filling out Form 49B to the final
                submission, is executed accurately and promptly.
              </p>
              <p>
                Furthermore, our team stays updated with the latest regulations
                and guidelines, ensuring that clients remain compliant with all
                mandates of the Income Tax Department. Hence, for a hassle-free
                and efficient TAN registration, talk to our experts now!
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
