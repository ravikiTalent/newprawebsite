import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DesignObjection() {
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
              <h1 className="display-1 text-white mb-3">Design Objection</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                During the Design registration process in India, facing a design
                objection is a critical stage where the examiner assesses your
                submitted design against specific criteria to ensure its
                originality and conformity to the Designs Act.
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
                { id: 3, title: "Trademark Objection", url: "" },
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
                      <h5 className="card-title">Trademark Objection</h5>
                      <p>
                        During the Design registration process in India, facing
                        a design objection is a critical stage where the
                        examiner assesses your submitted design against specific
                        criteria to ensure its originality and conformity to the
                        Designs Act.
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

              <h2 className="display-4 mb-3">Design Objection</h2>
              <p>
                During the Design registration process in India, facing a design
                objection is a critical stage where the examiner assesses your
                submitted design against specific criteria to ensure its
                originality and conformity to the Designs Act. If any issues
                arise, such as similarities to existing designs or
                non-compliance with the legal definitions of a design, these
                objections must be addressed promptly and effectively. Resolving
                these objections is essential for successfully registering your
                design, ensuring it is protected under intellectual property
                laws.
              </p>
              <p>
                With the support of LegallensIndia experts, navigating through and
                resolving design objections becomes more manageable,
                facilitating a smoother path towards securing your Design
                Registration.
              </p>
              <h3>What is Design?</h3>
              <p>
                Before diving into Design objections, let's understand what a
                design is. According to Section 2(d) of the Designs Act 2001, a
                'design' encompasses the visual aspects of shape, pattern,
                configuration, composition, or ornamentation applied to any
                two-dimensional or three-dimensional article through industrial
                or manual processes. This includes any combination of lines or
                colours that, once used, are appreciated visually in the final
                product. However, it excludes the functional aspects of
                construction or purely mechanical elements.
              </p>
              <h3>Design Registration Process in India</h3>
              <p>
                Every design registration application in India is meticulously
                examined to meet the required standards. The design will be
                approved if the application is free from objections or any
                raised concerns are adequately addressed. Subsequently, the
                applicant will receive confirmation of approval, a design
                registration certificate will be issued, and the design details
                will be published in the Patent Office's journal.
              </p>
              <p>
                The rightful design owner is granted intellectual property
                protection for 15 years. Initially, the design is registered for
                ten years. However, applying for renewal can extend this
                protection for an additional five years.
              </p>
              <h3>Design Objection</h3>
              <p>
                A design objection refers to any concerns or issues raised by
                the examining authority during the review process of a design
                application. These objections may relate to various aspects of
                the design, such as its originality, clarity of documentation,
                or compliance with prescribed standards and formats. The purpose
                of design objections is to ensure that the design meets the
                necessary criteria for registration and protection under
                intellectual property laws. Applicants are typically required to
                address these objections by providing clarifications,
                amendments, or additional information to resolve the concerns
                raised by the examining authority.
              </p>
              <p>
                Successfully overcoming these objections is crucial for the
                progression and eventual approval of the design application,
                ensuring the design is duly registered and protected under the
                law.
              </p>
              <h3>Grounds for Design Application Objections</h3>
              <p>
                Objections to a design application by the examination officer
                can arise from various grounds, primarily focusing on ensuring
                the design's uniqueness and adherence to procedural
                requirements. Some common reasons for objections include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Lack of Novelty: </strong>The design may be deemed
                      not new or original, meaning it may closely resemble
                      existing designs already in the public domain, thus
                      lacking the uniqueness required for protection.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Improper Documentation: </strong>The submitted
                      documents and representations might not meet the standards
                      or formats required by the Patent Office, leading to
                      objections regarding their acceptability.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unclear Visuals: </strong>The photos or sketches
                      attached to the application might be unclear, improperly
                      presented, or fail to adequately represent the design,
                      making it difficult for the examination officer to assess
                      its distinctiveness and originality.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Non-Submission of Power of Attorney: </strong>If
                      the application is filed by an agent or a representative
                      on behalf of the designer, the failure to submit a Power
                      of Attorney can lead to objections, as this document
                      authorises the representative to act on behalf of the
                      applicant.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Addressing these objections is crucial for the continuation and
                successful registration of the design application.
              </p>
              <h3>When to Reply to Design Objection?</h3>
              <p>
                The applicant has a six-month window from receiving the
                objection notice to address and rectify these concerns. This
                period can be extended by an additional three months upon
                request submission with the required fee before the initial
                six-month deadline expires.
              </p>
              <p>
                Failure to do so could result in the abandonment of your design
                application.
              </p>
              <h4>How to File a Reply to Design Objection</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Review the Objection Notice: </strong>Carefully
                      read through the objection notice issued by the Patent
                      Office, ensuring a clear understanding of the raised
                      concerns.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Assess the Objections: </strong>Evaluate each
                      objection mentioned in the notice, noting specific points
                      that must be addressed in your response.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Gather Supporting Documents: </strong>Collect all
                      relevant documents, evidence, and information that support
                      your response to each objection.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Draft Your Response: </strong>Prepare a detailed
                      and comprehensive reply addressing each objection
                      individually. Clearly articulate how you intend to rectify
                      or counter each objection, providing explanations and
                      evidence where necessary.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Submit Your Reply: </strong>Submit your response
                      to the Patent Office within the specified timeframe
                      mentioned in the objection notice.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                At LegallensIndia, our experts specialise in assisting you with
                filing effective replies to design objections, ensuring a smooth
                process for your design registration.
              </p>
              <h3>Procedure After Filing a Reply to Design Objection</h3>
              <p>
                After submitting a reply to a design objection, the subsequent
                procedure entails the following steps:
              </p>
              <h4>Review of Response</h4>
              <p>
                The Patent Office carefully examines the applicant's response to
                the objection notice to assess its adequacy in addressing raised
                concerns.
              </p>
              <h4>Assessment of Response</h4>
              <p>
                Each point of objection is evaluated against the provided
                response to determine if the concerns have been satisfactorily
                resolved.
              </p>
              <p>
                The response is scrutinised for clarity, completeness, and
                compliance with regulatory requirements.
              </p>
              <h4>Registration and Publication</h4>
              <p>
                Once all issues highlighted in the Examination Report are
                addressed and the Controller is satisfied that the design is
                indeed new and/or original, they will instruct the registration
                and subsequent publication of the design details. This includes
                a representation of the article that best showcases the design.
                Following acceptance, the Patent Office issues a registration
                certificate and announces the registration in its journal.
              </p>
              <h4>Hearing and Public Inspection</h4>
              <p>
                If the objections are not adequately resolved, the applicant is
                granted a personal hearing to discuss the application further.
                Post-hearing, the Controller decides on whether the application
                should proceed. Registered designs become available for public
                inspection after publication in the official gazette, which can
                be accessed upon payment of a specified fee and submission of a
                formal request.
              </p>
              <h4>Term of Protection</h4>
              <p>
                In India, design registration is protected for ten years from
                the design's registration date. This initial term can be
                extended for an additional five years, subject to the submission
                of an extension application along with the requisite fee,
                ensuring continued protection of the design under Indian
                intellectual property laws.
              </p>
              <h3>LegallensIndia: Expert Assistance for Design Objections</h3>
              <p>
                Challenges may arise during the design registration process,
                requiring prompt and efficient handling. If you need skilled
                guidance to address these objections and navigate through the
                entire design registration procedure seamlessly, LegallensIndia is
                your ultimate solution. Our expert team specialises in managing
                the intricacies of design objections, ensuring that your
                responses to examination reports are thorough and effective.
                With our expert guidance, you can confidently enhance your
                prospects of overcoming these hurdles and securing your design.
              </p>
              <p>
                For personalised design registration services, reach out to our
                design experts today!
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
