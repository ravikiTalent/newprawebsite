import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function HalalLicenseCertification() {
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
                Halal License & Certification
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Obtain your Halal Certificate with ease to expand into new
                markets and build customer trust. Get end-to-end guidance,
                transparent pricing, and quick turnaround with guaranteed
                compliance.
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
                { id: 2, title: "Registrations", url: "Registrations" },
                { id: 3, title: "Halal License Registration", url: "" }
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
                      <h5 className="card-title">Halal License & Certification</h5>
                      <p>
                        Obtain your Halal Certificate with ease to expand into new
                markets and build customer trust. Get end-to-end guidance,
                transparent pricing, and quick turnaround with guaranteed
                compliance.
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

              <h2 className="display-4 mb-3">Halal Certification in India</h2>
              <p>
                If you're a business looking to market your products and
                services to Muslim consumers, obtaining a Halal Certificate can
                be a crucial step. A Halal Certificate indicates that your
                products and services are permissible under Islamic Law and are
                suitable for consumption by Muslims.
              </p>
              <p>
                At LegallensIndia, we offer a Halal Certificate Service to help
                businesses obtain Halal India Certification for their products
                and services. Our team of experts can guide you through the
                certification process and ensure that your products and services
                meet the requirements for Halal Certification.
              </p>
              <p>
                Obtaining a Halal Certificate in India can help businesses
                expand their reach, build consumer trust and confidence,{" "}
                gain a competitive advantage, and tap into a growing market of
                Muslim consumers.
              </p>
              <h3>What is Halal Certificate?</h3>
              <p>
                Halal Certification is predominantly obtained for food and
                food-related products, and it is essential in Islamic countries.
                The term "Halal" is derived from the Quran, which means
                "permitted" or "lawful." Therefore, according to Islamic law,
                the Shariah, the Certification is used for Food and other
                consumables permissible for consumption. Halal India
                Certification emphasizes cleanliness in all aspects of a
                person's life, and Halal foods ensure that the Food consumed by
                individuals is clean, hygienic, and does not harm their health
                or well-being. The Certification guarantees that the food
                product is safe for consumption. With the increasing awareness
                of Halal foods, more businesses are seeking Halal Certification
                for their products, restaurants, premises, etc.
              </p>
              <h3>What is Halal Certification in India?</h3>
              <p>
                In India, a Halal Certificate is a document issued by a Halal
                certification body or authority confirming that a product or
                service complies with Islamic dietary laws and guidelines and is
                permissible or "Halal" for consumption by Muslims.
              </p>
              <p>
                Halal Certification in India is significant for food and
                beverage products, pharmaceuticals, and personal care products.
                Still, it can also apply to other non-food products or services.
                Businesses seeking Halal Certification in India must comply with
                the relevant standards and guidelines set forth by the
                certification body or authority and undergo a rigorous
                inspection and audit process to ensure compliance.
              </p>
              <h3>Types of Halal Certification</h3>
              <p>
                The type of Halal Certification varies depending on the nature
                of the business. Typically, restaurants, hotels,
                slaughterhouses, and packaging and labeling materials seek Halal
                Certification to ensure they meet the requirements of Muslim
                consumers. However, Halal Certification is not limited to food
                production alone. Other products, such as non-alcoholic
                beverages, raw materials for food processing, pharmaceutical and
                healthcare products, traditional herbal products, cosmetics,
                personal care products, cleaning products, and everyday consumer
                goods, can also obtain Halal Certification.
              </p>
              <p>
                Halal Certification Bodies offer Certification under various
                schemes, including the Food, and Catering Scheme, Restaurant
                Scheme, Industrial Scheme, Abattoir Scheme, Warehouse or Storage
                Scheme, and Product Endorsement Scheme.
              </p>
              <h3>Advantages of expanding your business, the Halal way</h3>
              <p>
                The benefits of obtaining a Halal Certificate in India are
                numerous. Here are some of the key benefits:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Access to a growing market:</strong> By obtaining a
                  Halal Certificate, businesses can tap into this growing market
                  and reach a wider audience.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Increased consumer trust and confidence:</strong> By
                  obtaining a Halal Certificate, businesses can demonstrate to
                  Muslim consumers that their products or services meet these
                  standards, which can help build trust and confidence in the
                  brand.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Compliance with regulatory requirements:</strong> Some
                  states in India, such as Kerala and Tamil Nadu, require Halal
                  Certification for specific products or services to be sold in
                  their markets. By obtaining a Halal Certificate, businesses
                  can ensure that their products or services meet regulatory
                  requirements and avoid legal or regulatory issues.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Global recognition:</strong> Halal Certification in
                  India is recognized worldwide, and obtaining this
                  Certification can help businesses expand into international
                  markets where Halal products and services are in high demand.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Competitive advantage:</strong> A Halal Certificate
                  can give businesses a competitive edge over other companies
                  that do not have this Certification. Businesses having this
                  Certification can make a business more appealing to them.
                </li>
              </ul></div></div>
              <h3 className="mt-3">Validity of Halal Certificate</h3>
              <p>
                The validity of a Halal Certificate typically lasts for one
                year. Still, it is subject to certain conditions and may be
                revoked if the product or process no longer meets the Halal
                Certification requirements.
              </p>
              <h3>Requirements of Halal Certificate</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Ingredients:</strong> All ingredients used in the
                  product must be Halal. This means that the ingredients must
                  not come from non-Halal animals or contain any non-Halal
                  additives or preservatives.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Manufacturing Process:</strong> The manufacturing
                  process used to produce the product must also be Halal. This
                  includes the use of equipment and utensils that are free from
                  non-Halal substances and the use of Halal-certified cleaning
                  products.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Packaging:</strong> The packaging material used for
                  the product must also be Halal. This means it must not contain
                  any non-Halal substances or come into contact with non-Halal
                  substances during manufacturing.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Storage and Transportation:</strong> The product must
                  be stored and transported to ensure it remains Halal. This
                  includes using dedicated storage areas and vehicles free from
                  non-Halal substances.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Certification:</strong> The business must obtain a
                  Halal Certificate from a recognized Halal Certification Body
                  that verifies that the product and manufacturing process meet
                  Halal standards. In India, Halal certification bodies must be
                  registered with the Halal Board of India.
                </li>
                <li>
                      <i className="uil uil-check"></i>{" "}
                  <strong>Compliance:</strong> The business must comply with all
                  relevant laws and regulations related to Halal Certification
                  in India, such as the Halal Certification Regulations of
                  India.
                </li>
              </ul></div></div>
              <p>
                To obtain a Halal Certificate in India, businesses must ensure
                that their products and manufacturing processes meet Halal
                requirements, obtain Certification from a recognized
                certification body registered with the Halal Board of India, and
                comply with all relevant laws and regulations related to Halal
                Certification.
              </p>
              <h3>Halal Certification Procedure</h3>
              <p>
                The procedure to obtain Halal Certification in India is as
                follows:
              </p>
              <h4>
                <strong>Step 1:</strong> Application
              </h4>
              <p>
                The business wishing to obtain Halgettification must apply to
                one of the Certification Bodies. At LegallensIndia, we help
                businesses understand the requirements for obtaining Halal
                Certification and provide guidance on the application process.
              </p>
              <h4>
                <strong>Step 2:</strong> Conducting the Audit
              </h4>
              <p>
                After the business has submitted its application, a team of
                auditors (typically one Shariah Auditor and one Technical
                Auditor) will conduct an on-site inspection of the business's
                operations. The auditors will review and assess the following
                areas to ensure that they meet the requirements for Halal
                Certification:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                      <i className="uil uil-check"></i>{" "}Documentation</li>
                <li>
                      <i className="uil uil-check"></i>{" "}Processing, handling, and distribution of products</li>
                <li>
                      <i className="uil uil-check"></i>{" "}Storage, display, and serving of products</li>
                <li>
                      <i className="uil uil-check"></i>{" "}Cleanliness, sanitation, and food safety</li>
                <li>
                      <i className="uil uil-check"></i>{" "}Overall condition of the premises</li>
                <li>
                      <i className="uil uil-check"></i>{" "}Tools, equipment, and machinery</li>
                <li>
                      <i className="uil uil-check"></i>{" "}Packaging and labeling</li>
              </ul></div></div>
              <p>
                During the audit, the business may need to provide criteria for
                accepting raw materials, a certificate of analysis, and a Halal
                certificate for individual components. Once the audit is
                completed, the audit report is to be signed.
              </p>
              <h4>
                <strong>Step 3:</strong> Certification
              </h4>
              <p>
                After the audit, the Halal Certification Body's Technical
                Committee will review the audit report and other relevant
                documents the business provides. If the auditors' report is
                satisfactory, and the company and its products meet the Halal
                certification criteria, the Halal Certification Body will issue
                the Halal Certificate. The certificate will include detail such
                as the name and address of the business, the scope of the
                Certification, and the validity period.
              </p>
              <p>
                LegallensIndia can provide comprehensive services to businesses
                seeking Halal Certification, from consultation to document
                preparation, audit assistance, and certification support.
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
