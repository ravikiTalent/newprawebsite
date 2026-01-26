import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTLUTForm() {
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
              <h1 className="display-1 text-white mb-3">GST LUT Form</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Are you an exporter looking to simplify your business
                operations? The GST LUT Form is an essential document that
                enables you to seamlessly conduct your export transactions
                without paying Integrated Goods and Services Tax (IGST) at the
                time of supply.
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
                { id: 3, title: "GST LUT Form", url: "" },
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
                      <h5 className="card-title">GST LUT Form</h5>
                      <p>
                        Are you an exporter looking to simplify your business
                        operations? The GST LUT Form is an essential document
                        that enables you to seamlessly conduct your export
                        transactions without paying Integrated Goods and
                        Services Tax (IGST) at the time of supply.
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
                Filing of LUT in GST for Exporters
              </h2>
              <p>
                Are you an exporter looking to simplify your business
                operations? The GST LUT Form is an essential document that
                enables you to seamlessly conduct your export transactions
                without paying Integrated Goods and Services Tax (IGST) at the
                time of supply. LegallensIndia is here to assist you in
                efficiently completing the GST LUT filing process, making your
                export journey smoother than ever.
              </p>
              <h3>What is LUT in GST?</h3>
              <p>
                LUT full form is Letter of Undertaking holds significant
                relevance within the context of the Goods and Services Tax (GST)
                framework. This document serves as a powerful tool for
                exporters, allowing them to engage in the export of goods or
                services without the obligation of immediate tax payment.
              </p>
              <h3>GST LUT Form for Exporters</h3>
              <p>
                For all registered taxpayers engaged in the export of goods or
                services, it is mandatory to provide a Letter of Undertaking
                (LUT) using the Form GST RFD-11 form on the GST portal. This
                obligation is essential to facilitate exports without paying
                Integrated Goods and Services Tax (IGST).
              </p>
              <h3>Eligibility Criteria for LUT registration</h3>
              <p>
                The Eligibility criteria to obtain a LUT certificate include the
                following:
              </p>
              <p>
                The Letter of Undertaking (LUT) is open for utilization by any
                registered taxpayer engaged in exporting goods and services.
                However, individuals facing prosecution for tax evasion
                exceeding Rs. 250 lakh or more are ineligible to benefit from
                this option.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Intent to Supply:</strong> The applicant should intend
                  to supply goods or services within India, to foreign
                  countries, or to Special Economic Zones (SEZs).
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GST Registration:</strong> The entity seeking to avail
                  the benefits of an LUT should be registered under the GST
                  framework.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Tax-Free Supply:</strong> The desire to supply goods
                  without the imposition of integrated tax is an essential
                  requirement for LUT application.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Exploring the LUT Bond</h3>
              <p>
                LUT in GST holds a validity of one year, necessitating the
                submission of a fresh LUT for each subsequent financial year.
                Should the terms outlined in the LUT fail to be met within the
                designated timeframe; the privileges associated with it will be
                withdrawn, prompting the need for the exporter to provide bonds.
              </p>
              <p>
                For other assessments, bonds are required when conducting
                exports without Integrated Goods and Services Tax (IGST)
                payment. LUTs and bonds are applicable in the following cases:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Zero-rated supply to SEZ:</strong> Exporting to
                  Special Economic Zones (SEZs) without IGST payment.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Goods Export:</strong> Exporting goods to a country
                  beyond India without IGST payment.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Service Export:</strong> Providing services to clients
                  in foreign countries without IGST payment.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Documents required for LUT under GST</h3>
              <p>
                To apply for a Letter of Undertaking (LUT) under GST, you'll
                need the following documents required for LUT under GST:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>LUT Cover Letter:</strong> A request letter signed by
                  an authorized person.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Eligibility:</strong> Ensure you meet eligibility
                  criteria (no serious tax evasion cases).
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Copy of GST Registration:</strong> Proof of your GST
                  registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>PAN Card of Entity:</strong> Identification using PAN
                  card.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>KYC of Authorized Person:</strong> ID and address
                  proof of authorized person.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GST RFD 11 Form:</strong> Application form for LUT.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Copy of IEC Code:</strong> If involved in exports.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Canceled Cheque:</strong> From your associated bank
                  account.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Authorized Letter:</strong> Granting power to the
                  authorized signatory.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Advantages of Filing LUT for Exporters</h3>
              <p>
                Choosing to file a Letter of Undertaking (LUT) brings a host of
                benefits to exporters, streamlining their export activities and
                optimizing their financial operations:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Tax-Free Export:</strong> Opting for the LUT
                  certificate enables exporters to carry out their export
                  transactions without the burden of immediate tax payment. This
                  contrasts the alternative, where taxes are paid and later
                  claimed as refunds for zero-rated exports.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Simplified Process:</strong> By utilizing the LUT
                  certificate, exporters avoid the complexities of claiming tax
                  refunds or engaging in follow-ups with the tax authorities.
                  This translates to substantial time savings and operational
                  ease.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Unblocked Working Capital:</strong> Funds that would
                  have otherwise been locked as tax payments remain accessible
                  for exporters. This is especially vital for small and
                  medium-sized enterprises (SMEs) grappling with financing and
                  working capital constraints.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Liberated Resources:</strong> Regular exporters find a
                  consistent advantage with the LUT certificate. Once filed, the
                  LUT remains valid for the entire financial year. This
                  longevity minimizes the need for repetitive filings, allowing
                  exporters to focus on their core activities.
                </li>
              </ul></div></div>
              <p className="mt-4">
                By leveraging the benefits of the LUT certificate, exporters can
                navigate the realm of international trade with greater
                efficiency and flexibility.
              </p>
              <h3>Key Reminders about LUT Bond in GST</h3>
              <p>
                Here are some crucial points to keep in mind regarding LUT in
                GST:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Validity Period:</strong> An LUT remains valid for a
                  year, starting from the submission date.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Conditional Acceptance:</strong> The acceptance of an
                  LUT comes with specific terms. Failing to meet these
                  conditions might lead to privilege revocation. In such cases,
                  an entity may need to provide a bond.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Alternative Bonding:</strong> Entities ineligible for
                  LUT registration can still furnish a bond. This bond, usually
                  on non-judicial stamp paper, requires a bank guarantee. The
                  adhesive should cover the anticipated tax liability based on
                  exporter assessment.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Official Letterhead:</strong> LUT submissions must be
                  on the registered entity's letterhead. This letterhead is from
                  the entity planning to supply goods/services without
                  integrated tax payment.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Prescribed Form:</strong> An LUT must be applied
                  through the official GST RFD-11 form. This form can be
                  submitted by authorized personnel like the MD, company
                  secretary, or partners in a firm.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Flexible Filing:</strong> In the case of a company,
                  the form can be submitted by a partner in a partnership firm
                  or the proprietor.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Bank Guarantee Limit:</strong> The accompanying bank
                  guarantee should be at most 15% of the bond amount. The
                  jurisdictional GST Commissioner might waive this requirement.
                </li>
              </ul></div></div>
              <p className="mt-4">
                Staying mindful of these details helps ensure a smooth process
                while dealing with LUT bonds under GST regulations.
              </p>
              <h3>Simplify LUT Form Filing with LegallensIndia</h3>
              <p>
                Navigating the complexities of LUT (Letter of Undertaking)
                filing for exporters has always been challenging. At
                LegallensIndia, we specialize in streamlining the process,
                allowing you to focus on expanding your export operations. Our
                experienced professionals understand the nuances of GST
                regulations and are well-equipped to guide you through the
                seamless submission of the GST RFD-11 form. We offer end-to-end
                support, from document preparation to online submission,
                ensuring accuracy and compliance at every step. With
                LegallensIndia by your side, you can unlock the benefits of
                tax-free exports without the hassle of navigating complex
                procedures. Simplify your filing of LUT in GST today and begin a
                smoother export journey with us.
              </p>
              <p>
                Contact us to experience a hassle-free GST LUT filing process
                that empowers your export ventures like never before.
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
