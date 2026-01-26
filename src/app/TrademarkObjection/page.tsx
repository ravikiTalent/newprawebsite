import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkObjection() {
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
              <h1 className="display-1 text-white mb-3">Trademark Objection</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In India, the trademark objection step is significant during the
                process of registering a trademark.
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
                        In India, the trademark objection step is significant
                        during the process of registering a trademark.
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
                Trademark Objection Process in India
              </h2>
              <p>
                In India, the trademark objection step is significant during the
                process of registering a trademark. At this point, the officer
                carefully checks your chosen brand name to ensure it meets all
                the rules. If there are any problems or issues, they will let
                you know. It's essential to fix these issues to ensure your
                brand name gets registered without problems. This ensures your
                brand name follows the trademark law and isn't too similar to
                other brand names. With help from LegallensIndia, dealing with
                these issues is easier, helping you get your trademark
                registered smoothly.
              </p>
              <h3>What's a Trademark?</h3>
              <p>
                Before diving into trademark objections, let's understand what a
                trademark is. In India, a trademark can be a unique sign,
                picture, or name that shows people who made a product or offered
                a service. It is a business's special ID showing its brand and
                quality. Registering your trademark means you get special rights
                to use it, and others can't use it without your approval.
              </p>
              <p>Trademark Registration undergoes the following steps:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Trademark search
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Filing of trademark
                      application
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Formality inspection
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Publication in the
                      journal
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Grant of trademark
                      registration
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                A registered trademark cannot be used by any third person
                without authority, thus protecting it from any infringement.
              </p>
              <h3>Trademark Objection</h3>
              <p>
                As mentioned above, Upon submitting a trademark application to
                the Indian Trademark Office, it undergoes a rigorous
                examination. If the officer identifies inconsistencies or
                potential overlaps with existing trademarks during this
                scrutiny, they will issue an objection. In the business context,
                it's essential to understand that an objection isn't a denial
                but a request for clarification or adjustment. Addressing this
                promptly and adequately is vital for ensuring smooth trademark
                registration.
              </p>
              <p>
                If the mark contains offensive or obscene images or words, it
                might face objection.
              </p>
              <h3>Reasons for Trademark Objections</h3>
              <p>
                The Indian Trademark Office might object to a trademark
                application based on specific grounds detailed in Section 9 and
                Section 11 of the Indian Trademarks Act. The primary reasons are
                when the submitted trademarks lack uniqueness, are too
                descriptive and generic, or clash with previously registered or
                pending trademarks.
              </p>
              <h4>Objections Under Section 11:</h4>
              <p>
                This section concerns objections related to the similarity
                between the proposed trademark and existing trademarks.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identical Marks:</strong> For instance, applying
                      for "Sunshine" as a beverage trademark when "Sunshine"
                      already exists in the same category would invite an
                      objection due to the same names.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Similar Sound:</strong> An application for
                      "CandyLand" for candy products might be objected to if
                      "KandyLand" is already registered in the same sector
                      because of the similarity in sound.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Similar Concept:</strong> Applying for
                      "TechSolutions" for a tech company might clash with an
                      existing "TechPro" mark since both suggest similar
                      concepts.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Objections Under Section 9:</h4>
              <p>
                This section focuses on trademarks that might be too obvious,
                lack a unique character, or could be misleading.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Descriptive Terms:</strong> A trademark like
                      "FreshJuice" for juice products could face objection
                      because it directly describes the product.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Lack of Distinctiveness:</strong> If you were to
                      register a simple geometric design like a square for
                      furniture, it might be objected to for lacking a unique
                      identity.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Deceptive or Misleading:</strong> Brands that
                      might falsely represent their products, such as
                      "OrganicGarden" for a skincare range with non-organic
                      ingredients, could face objection due to potential
                      consumer deception.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Responding to Trademark Objections Online
              </h3>
              <p>
                The reviewing officer must confirm that the trademark
                application meets all necessary standards and regulations. If it
                doesn't, the applicant will receive a notification, prompting a
                response within 30 days. The application may be denied if the
                response does not meet the expected standards. However, the
                applicant can appeal to the Intellectual Property Appellate
                Board if rejected.
              </p>
              <h3>Trademark Objection vs Trademark Opposition</h3>
              <p>
                It's essential to distinguish between "objection" and
                "opposition." Though often used interchangeably, they have
                distinct meanings. While an "objection" pertains to concerns
                raised by the reviewing officer about the registration process's
                adherence, an "trademark opposition" is a challenge posed by a
                third party questioning the trademark's validity.
              </p>
              <h3>When to Submit the Trademark Objection Reply &nbsp;</h3>
              <p>
                Upon receiving the examination report, filing a trademark reply
                within 30 days is essential. This trademark reply should be
                comprehensive and must address the queries raised in the
                examination report.
              </p>
              <h3>Documents required for Trademark Objection Reply Note</h3>
              <p>
                To address the objections effectively, the following documents
                should be submitted in the trademark reply note:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Invoices and bills
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Affidavits
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Business cards and
                      letterheads
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Any relevant government
                      documents, such as MSME or FSSCI certificates
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Screenshots of social
                      media pages or copies of advertisements
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Trademark Objection Reply Fees</h3>
              <p>
                When responding to a trademark objection, it's important to
                consider the associated fees. The trademark objection reply fees
                can vary depending on several factors, including the complexity
                of the objection, the need for legal assistance, and the
                jurisdiction in which the trademark application is filed.
              </p>
              <p>
                <strong>
                  LegallensIndia offers exclusive pricing for trademark
                  applications filed through us!
                </strong>
              </p>
              <h3>How to File a Trademark Objection Reply?</h3>
              <p>
                Upon receiving the examination report, it's critical to promptly
                submit a detailed written reply. Failing to do so may result in
                the application's rejection. The response should be thorough,
                presenting justifications, supporting evidence, and facts,
                asserting that the mark meets all requirements for valid
                registration. If the applicant's response convinces the
                reviewing officer, the trademark will be listed in the public
                journal. The public has four months to review and raise any
                opposition.
              </p>
              <p>
                When crafting a reply, certain aspects require careful
                consideration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Analysis:</strong> It's vital to comprehensively
                      understand and assess the objection. Any vagueness could
                      lead to an inadequate response.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Drafting:</strong> The response must adhere to the
                      specified format to prevent potential rejection. It should
                      effectively address the objection, referencing applicable
                      laws, prior rulings, and differences between the contested
                      marks. Any supplementary evidence or documents that
                      reinforce the response should be included.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Affidavit:</strong> If the trademark is set to
                      appear on digital platforms like websites, social media,
                      or e-commerce sites, an accompanying affidavit confirming
                      this must be included with the reply.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                LegallensIndia: Expert Assistance for Trademark Objections
              </h3>
              <p>
                Expansions can arise during the trademark registration process,
                demanding swift and effective management. If you are seeking
                adept guidance in addressing these objections and for end-to-end
                trademark registration services, LegallensIndia is your ideal
                choice. Our expert team excels in handling the nuances of
                trademark objections, ensuring your responses to examination
                reports are comprehensive. With our expert advice, you boost
                your chances of bypassing these obstacles and confidently
                obtaining your trademark.
              </p>
              <p>
                For tailored trademark registration servces, connect with our
                trademark experts now!
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
