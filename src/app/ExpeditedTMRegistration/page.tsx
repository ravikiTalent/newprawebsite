import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ExpeditedTMRegistration() {
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
                Expedited Trademark Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In the dynamic business realm, trademarks serve as invaluable
                assets, enabling enterprises to distinguish their offerings and
                establish uniqueness in the market.
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
                { id: 3, title: "Expedited Trademark Registration", url: "" },
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
                        Expedited Trademark Registration
                      </h5>
                      <p>
                        In the dynamic business realm, trademarks serve as
                        invaluable assets, enabling enterprises to distinguish
                        their offerings and establish uniqueness in the market.
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
                Best Practices for Expedited Trademark Registration
              </h2>
              <p>
                In the dynamic business realm, trademarks serve as invaluable
                assets, enabling enterprises to distinguish their offerings and
                establish uniqueness in the market. But sometimes, getting a
                trademark registration can take a long time, even years. But
                businesses sometimes need a shortcut to get their trademark
                faster. Addressing this need, the Indian government came in with
                a faster way to register trademarks, called the trademark
                expedited examination system. With this system, expedited
                trademark applications are checked and processed in three
                months, which is way quicker than the usual 18 to 24 months.
              </p>
              <p>
                Remember, using the fast track trademark registration India is a
                smart choice to keep your brand safe and get your trademark
                faster. And if you need help, LegallensIndia is here to guide you
                through the Expedited Trademark Registration process. Just
                contact us, and we will make the expedited trademark application
                process easy for you!
              </p>
              <h3>Expedited Trademark Registration</h3>
              <p>
                Introduced in 2018 as part of the government's initiative to
                streamline trademark registration, the trademark expedited
                examination procedure for trademarks in India is commonly called
                the "Fast Track Examination" process. This innovative approach
                enables businesses to secure fast trademark registration than
                the standard route.
              </p>
              <p>
                The regular examination process traditionally entails 18-24
                months for the Trademark Registry to scrutinize a trademark
                application. In contrast, in the fast track trademark
                registration India,&nbsp; the examination process dramatically
                accelerates this timeline, with expedited trademark applications
                undergoing examination within 3-4 months of filing. This
                expedited procedure empowers businesses to obtain fast trademark
                registration swiftly, providing enhanced safeguards for their
                brand identity and preempting unauthorized trademark use.
              </p>
              <h3>Eligibility Criteria for Expedited Trademark Registration</h3>
              <p>
                Anyone who has filed a trademark application in India can
                request an expedited examination. This will drive
                the&nbsp;expedited process of an application for the
                registration. To get the benefit of the expedited trademark
                application process, the applicant needs to meet specific
                eligibility criteria, as outlined below:
              </p>
              <h4>Eligible Applicants for Expedited Trademark Application</h4>
              <p>
                The examination process of&nbsp; expedited trademark
                registration&nbsp; is available to the following categories of
                applicants:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Individuals
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Start-ups
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Small Enterprises
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Women Entrepreneurs
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> MSMEs (Micro, Small and
                      Medium Enterprises)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Educational Institutions
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Government Departments
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Online Filing</h4>
              <p>
                Applicants must file their fast track trademark application
                using the online filing facility provided by the Trademark
                Registry. This digital submission ensures efficient trademark
                expedited process and tracking of expedited trademark
                applications.
              </p>
              <h4>Expedited Examination Fee</h4>
              <p>
                To opt for expedited examination, the applicant must pay an
                expedited examination fee. This fee is higher than the standard
                examination fee and is essential to expediting.
              </p>
              <h3>Valid reasons for filing Expedited Trademark Registration</h3>
              <p>
                The following are the good reasons for filing an expedited
                examination request for a trademark application in India and
                getting the fastest trademark registration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Potential trademark
                      infringement or misrepresentation
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Ongoing legal disputes
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Necessity for
                      registration to secure funding or investments
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Requirement for
                      registration to engage in trade fairs or exhibitions
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Essential for licensing
                      or franchising purposes
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Expedited Trademark Registration Timeline
              </h3>
              <p>
                As mentioned above, it can take a long time, sometimes even
                years, to get a trademark registered. However, the trademark
                expedited process of an application for the registration can
                significantly cut the wait time. In India, using this fast track
                - Expedited Trademark Registration, the whole process can be
                finished in just 3-4 months from when you apply.
              </p>
              <h3>Benefits of expedited trademark registration</h3>
              <p>
                The expedited trademark registration process offers businesses a
                quicker and more efficient way to secure legal protection for
                their brand identity.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Faster Brand Protection:</strong> The trademark
                      expedited process allows businesses to obtain trademark
                      registration faster than the standard procedure.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Support for Smaller Entities:</strong> Start-ups
                      and small businesses often have limited resources and need
                      swift brand protection to establish themselves in the
                      market.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Resource Allocation:</strong> The expedited
                      process is precious for entities with constrained budgets.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Educational and Government Entities:</strong>{" "}
                      Educational institutions can leverage this process to
                      shield their brand identity related to various programs
                      and initiatives.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Validity of Expedited Trademark Registration
              </h3>
              <p>
                A trademark registration obtained via expedited examination in
                India holds the same duration as a regular examination – 10
                years from the registration date. It can be perpetually renewed
                upon payment of the designated fee.
              </p>
              <h3>Procedure for Expedited Trademark Registration in India</h3>
              <p>
                The process of expedited trademark registration begins with
                submitting a trademark application. Here's an overview of the
                steps involved:
              </p>
              <h4>Trademark Application Submission:</h4>
              <p>
                The process commences with submitting a trademark application to
                the relevant authority, such as the Trademark Registry in India.
              </p>
              <p>
                The application should include all necessary details about the
                trademark, its owner, and the goods or services it will be
                associated with.
              </p>
              <h4>Objection and Response:</h4>
              <p>
                After the application is filed, it goes through an examination
                process by a trademark examiner.
              </p>
              <p>
                If objections or issues are raised during the examination, the
                applicant will receive an examination report outlining these
                concerns.
              </p>
              <h4>Request for Expedited Examination:</h4>
              <p>
                If the applicant wishes to expedite the process due to specific
                circumstances, such as potentially irreparable harm, they can
                request expedited examination and the prescribed fee.
              </p>
              <h4>Examination Report and Response:</h4>
              <p>
                Once the request for expedited examination is filed, the
                examination report is typically issued within a month.
              </p>
              <p>
                The applicant must then respond to the examination report within
                a month, addressing any objections raised.
              </p>
              <h4>Advertisement and Acceptance:</h4>
              <p>
                If the trademark is found acceptable after reviewing the
                response, it will be advertised in the trademark journal.
              </p>
              <p>
                The advertisement allows third parties to raise objections, if
                any.
              </p>
              <p>
                If no objections are raised or successfully resolved, the
                trademark can proceed to acceptance.
              </p>
              <h4>Hearing (If Necessary):</h4>
              <p>
                A hearing may be required during the expedited examination
                process in some instances.
              </p>
              <p>
                The applicant must attend the hearing and present their case
                before the trademark examiner.
              </p>
              <h4>Final Decision and Registration:</h4>
              <p>
                Following the hearing (if applicable) and considering all
                evidence presented, the trademark examiner issues a final
                decision.
              </p>
              <p>
                If the decision favors the applicant, the trademark is accepted
                for registration, and the registration certificate is issued.
              </p>
              <p>
                The decision to opt for expedited examination depends on the
                applicant's specific circumstances and the need for swift
                trademark protection. Once, the decision is finalized, there is
                the completion of trademark registration expedited
                process.&nbsp;
              </p>
              <h3>Ready to Expedite Your Trademark Registration?</h3>
              <p>
                If you run a business in India and want to keep your brand safe,
                consider using the fast trademark check process. This way, you
                make sure your brand is safe and set for success in the
                challenging Indian market. If you're eager to secure your brand
                identity with the benefit of trademark registration expedited,
                LegallensIndia will seamlessly guide you through the process with
                affordable expedited trademark application fees. Our experienced
                team ensures efficient filing, proactive legal support, and
                timely progress tracking, allowing you to protect your brand
                identity confidently.
              </p>
              <h4>Expedited Trademark Registration with LegallensIndia</h4>
              <p>
                LegallensIndia offers invaluable assistance in streamlining the
                Trademark Registration Expedited process, ensuring efficient and
                effective brand protection. Here's how they can guide you:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Trademark Search Expertise:</strong> LegallensIndia
                      conducts thorough trademark searches to identify potential
                      conflicts before filing, ensuring a smooth expedited
                      trademark application process.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proactive Legal Guidance:</strong> Our legal
                      experts provide step-by-step guidance, clarifying the
                      complexities of expedited registration and ensuring you
                      comprehend each stage.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Preparation:</strong> LegallensIndia
                      assists in meticulously preparing and filing all required
                      documents, adhering to the Trademark Registry's standards.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Application Submission:</strong> We manage the
                      online submission of your trademark expedited examination
                      request and expedited trademark application, guaranteeing
                      accurate and comprehensive filings.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Timely Progress Tracking:</strong> LegallensIndia
                      monitors your application's progress, promptly addressing
                      any required actions during the examination phase.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Effective Representation:</strong> In cases of
                      objections or hearings, our legal team offers advice and
                      representation, ensuring your rights are upheld.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Supporting Documentation:</strong> If additional
                      evidence is needed during the examination, LegallensIndia
                      aids in compiling and presenting the necessary
                      documentation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Renewal Guidance:</strong> Post successful
                      registration, we guide you through the renewal process,
                      extending your brand's protection beyond the initial
                      period.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cost-Effective Efficiency:</strong> Leveraging
                      LegallensIndia' expertise optimizes your time and resources,
                      making expedited trademark registration hassle-free with
                      reasonable expedited trademark application fees.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                With LegallensIndia as your partner, expedited trademark
                registration becomes a seamless process, allowing you to
                safeguard your brand identity confidently.
              </p>
              <p>
                Don't wait - reach out to us now and experience hassle-free
                trademark registration!
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
