import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkTransfer() {
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
              <h1 className="display-1 text-white mb-3">Trademark Transfer</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Trademark Transfer, also known as Trademark Assignment, is a
                legal procedure encompassing the transfer of trademark rights
                from one entity to another.
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
                { id: 3, title: "Trademark Transfer", url: "" },
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
                      <h5 className="card-title">Trademark Transfer</h5>
                      <p>
                        Trademark Transfer, also known as Trademark Assignment,
                        is a legal procedure encompassing the transfer of
                        trademark rights from one entity to another.
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

              <h2 className="display-4 mb-3">Trademark Transfer</h2>
              <p>
                Trademark Transfer, also known as Trademark Assignment, is a
                legal procedure encompassing the transfer of trademark rights
                from one entity to another. It is a pivotal component of
                intellectual property administration, enabling businesses to
                utilize their trademarks or facilitate the seamless transfer of
                trademark ownership.
              </p>
              <p>
                At LegallensIndia, we understand the importance of safeguarding
                and managing your intellectual property, particularly regarding
                trademarks. Whether you are an individual or a business entity
                looking for a transfer of trademark rights to another party, we
                are here to streamline the process for you. Our expert team is
                well-versed in the complexities of trademark transfers in India,
                ensuring that your rights are protected and the transfer is
                executed seamlessly. With LegallensIndia, you can confidently
                embark on your trademark transfer process, knowing that your
                brand is in capable hands.
              </p>
              <h3>Trade Mark</h3>
              <p>
                A trademark, whether a unique symbol, word, or phrase, serves as
                the identifier that sets a company's products or services apart
                from those of others in the market. Trademarks are the
                cornerstone of establishing brand recognition, fostering
                consumer confidence, and enhancing competitiveness within the
                marketplace. Nevertheless, situations can arise where businesses
                or individuals need to transfer their trademark rights to
                another entity, and during these moments, the process of
                Trademark Assignment becomes pivotal.
              </p>
              <h3>Understanding the Concept of Trademark Assignment</h3>
              <p>
                The term "trademark assignment" is formally defined in Section
                37 of the Trademark Act 1999. It entails transferring the
                proprietor's rights, interests, and title to a trademark and
                brand mark.
              </p>
              <p>
                To put it simply, trademark assignment refers to the transfer of
                trademark's rights and ownership to another individual or
                entity.
              </p>
              <h3>
                Exploring Typical Scenarios for Transfer Trademark Ownership
              </h3>
              <p>
                Transfer of trademark ownership can occur in various situations,
                each driven by specific circumstances. Here are common instances
                that causes transfer trademark ownership:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Succession Planning:</strong> The Death of a
                      Trademark Owner
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> When a trademark owner
                      passes away, the trademark may need to be transferred to
                      heirs or designated beneficiaries.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Transitions:</strong> Sale of Business
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Transferring the
                      associated trademark rights is often part of the
                      transaction in selling an entire business.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Standalone Trademark Sales:</strong> Sale of
                      Trademark Alone
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Sometimes, a trademark
                      is sold independently without the sale of the entire
                      business, allowing others to use the mark for specific
                      products or services.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Corporate Restructuring:</strong> Division of
                      Business and Subsequent Activity
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> During corporate
                      restructuring or division of a business, trademark
                      ownership can change hands, aligning with the new business
                      entities created.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Name Changes:</strong> Change of Name of Owner
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> When an individual or
                      entity undergoes a name change, trademark ownership must
                      be updated to reflect the new legal identity.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Structural Modifications:</strong> Change in Form
                      of Business
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Altering the legal
                      structure of a business, such as transitioning from a sole
                      proprietorship to a corporation, may necessitate a
                      transfer of trademark ownership.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Mandates:</strong> To Comply with a Court
                      Order in a Trademark Title Dispute
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> In cases where trademark
                      disputes are settled in court, the assignment of trademark
                      rights may be mandated as part of the resolution.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Acquisition:</strong> Purchase of an
                      Existing Business with Goodwill
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Acquiring an existing
                      business often involves taking over its trademark rights,
                      including the associated goodwill, contributing to the
                      brand's value. To get the brand value associated with the
                      business, transfer trademark ownership will be performed.
                    </li>
                  </ul>
                </div>
              </div>
              <h3>Benefits of Trademark Assignment</h3>
              <p>Trademark assignment offers several advantages:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Monetizing Brand Value:</strong>&nbsp;Transfer of
                      Trademark enables the trademark owner to realize the value
                      of their brand.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Established Brand Rights:</strong> The assignee
                      gains rights to an established brand through the
                      assignment.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Expansion:</strong> Both the assignor and
                      assignee can expand their respective businesses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Protection:</strong> In disputes, the
                      trademark assignment agreement establishes legal rights
                      for both parties.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Types of Trademark Assignment</h3>
              <p>There are four primary types of trademark assignments:</p>
              <h4>Partial Assignment</h4>
              <p>
                In a partial assignment, the assignor transfers limited
                ownership rights about specific products or services.
              </p>
              <h4>Complete Assignment</h4>
              <p>
                A complete assignment involves the assignor transferring all
                rights related to the registered trademark to the assignee.
              </p>
              <h4>Assignment with Goodwill</h4>
              <p>
                In an assignment with goodwill, the assignor transfers the
                trademark rights and conveys the intrinsic value and reputation
                associated with the trademark to the assignee.
              </p>
              <h4>Gross Assignment or Assignment without Goodwill</h4>
              <p>
                In this trademark assignment, the assignor restricts the buyer's
                usage rights. Specifically, the assignor prevents the buyer from
                using a product brand already used by the assignor. In essence,
                the goodwill linked to the brand is not transferred to the
                assignee.
              </p>
              <h3>Prerequisites for Trademark Assignment</h3>
              <p>
                Several prerequisites must be met when considering the transfer
                of trademark:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Written Agreement:</strong> The trademark
                      assignment should be documented in writing.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identifiable Parties:</strong> It must involve two
                      distinct parties: the assignor (the trademark owner) and
                      the assignee (the trademark buyer).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Intent and Consent:</strong> The assignor should
                      intend to transfer the trademark and provide consent for
                      the assignment.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Consideration:</strong> The trademark assignment
                      should be executed for an appropriate and sufficient
                      consideration (monetary value).
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Trademark Assignment Agreement</h3>
              <p>
                In most cases, a trademark owner assigns it to the assignee
                through a formally executed trademark assignment agreement. This
                agreement should be crafted with careful consideration of the
                following aspects:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Preservation of Trademark Rights:</strong> The
                      terms and obligations within the agreement should not
                      negatively impact the rights associated with the
                      trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Explicit Goodwill Stipulation:</strong> It should
                      explicitly state whether the assignment includes or
                      excludes the business's goodwill.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Clarity of Purpose:</strong> The agreement should
                      clearly articulate the transaction/assignment's purpose.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Geographical Scope:</strong> Specify the
                      geographical area where the assignee will possess rights
                      to the trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Rights to Collect Damages:</strong> Outline the
                      transfer of the right to collect and pursue damages for
                      past and future infringements.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Formalities:</strong> Ensure the agreement
                      is executed correctly, stamped, and notarized following
                      the Stamp Act.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Signatories and Witnesses:</strong> Include
                      details of the parties' signatures and witnesses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Date and Location:</strong> Specify the date and
                      location of agreement execution.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Binding on Legal Heirs:</strong> Indicate whether
                      the agreement will bind the legal heirs of the assignor
                      and assignee.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Restrictions on Trademark Assignment</h3>
              <p>
                The Trademarks Act of 1999 imposes certain restrictions on
                trademark assignment:
              </p>
              <h4>Parallel Use Restriction</h4>
              <p>
                Assignment is prohibited if it results in multiple exclusive
                rights by different individuals for the same or similar products
                or services, confusing.
              </p>
              <h4>Multiple Territorial Use Restriction</h4>
              <p>
                Assignment is not allowed if it leads to exclusive rights in
                different parts of India or for products/services sold outside
                India.
              </p>
              <h3>Documents Required for Trademark Assignment</h3>
              <p>
                The following documents should be submitted to the Registrar of
                Trademarks along with Form TM-P:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Trademark Assignment
                      Agreement
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Trademark Certificate
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> No Objection Certificate
                      (NOC) from the assignor
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Identification documents
                      of both the assignor and assignee
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Process of Trademark Transfer /Assignment
              </h3>
              <p>
                The trademark transfer process in India involves the following
                steps:
              </p>
              <h4>Trademark Assignment Agreement</h4>
              <p>
                The assignor (owner of the trademark) assigns their rights in
                the trademark to the assignee through a trademark assignment
                agreement.
              </p>
              <h4>Application Submission</h4>
              <p>
                The assignor, assignee, or both can jointly apply to register
                the assignment by submitting a trademark application in Form
                TM-24 or Form TM-23 to the Registrar of Trademarks.
              </p>
              <h4>Form TM- P</h4>
              <p>
                To submit your transfer of trademark application to the
                Registrar, you must fulfill the requirements outlined in Form
                TM-P and make the necessary payment.
              </p>
              <p>
                Form TM-P must be filed within six months from the date of the
                assignment. While filing after six months is possible, the fees
                may vary accordingly.
              </p>
              <h4>Advertisement</h4>
              <p>
                The assignment must be advertised as directed by the Registrar
                of Trademarks within the specified timeframe.
              </p>
              <h4>Registrar's Office</h4>
              <p>
                Provide a copy of the advertisement and the Registrar's
                directions to the Registrar of Trademarks.
              </p>
              <h4>Registration</h4>
              <p>
                Upon receipt of the trademark assignment application (Form TM-P)
                and the necessary documents, the Registrar of Trademarks will
                register the assignee as the new owner of the trademark and
                record the assignment details in the register.
              </p>
              <h3>
                LegallensIndia: Your Partner in Seamless Transfer of Trademark!
              </h3>
              <p>
                LegallensIndia can provide invaluable assistance when it comes to
                filing a Trademark Assignment. Our expert team is well-versed in
                the intricate processes and legalities involved in trademark
                transfer process in India. We ensure that all documentation is
                prepared meticulously, adhering to legal requirements and
                guidelines. From drafting the Trademark Assignment Agreement to
                navigating the paperwork required for registration with the
                Registrar of Trademarks, LegallensIndia simplifies the entire
                process, ensuring a hassle-free and efficient experience for
                both assignors and assignees.
              </p>
              <p>
                With our expertise and commitment to client satisfaction,
                LegallensIndia is your trusted partner in completing trademark
                transfers, whether they involve the transfer of registered or
                unregistered trademarks, with or without goodwill. Contact our
                experts today to Get Started!
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
