import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function FSSAIRenewal() {
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
              <h1 className="display-1 text-white mb-3">FSSAI Renewal</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                For food businesses, obtaining and renewing FSSAI
                licenses/registrations is essential for legal compliance and
                adherence to safety standards.
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
                { id: 2, title: "Compliance", url: "" },
                { id: 3, title: "FSSAI Renewal", url: "" },
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
                      <h5 className="card-title">FSSAI Renewal</h5>
                      <p>
                        For food businesses, obtaining and renewing FSSAI
                        licenses/registrations is essential for legal compliance
                        and adherence to safety standards.
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
                FSSAI Renewal - FSSAI Registration and License Renewal
              </h2>
              <p>
                For food businesses, obtaining and renewing FSSAI
                licenses/registrations is essential for legal compliance and
                adherence to safety standards. The renewal of FSSAI licenses,
                governed by the Food Safety and Standards Authority of India, is
                vital for any entity in the food sector to ensure ongoing
                compliance with safety regulations and quality benchmarks. With
                licenses usually valid for 1 to 5 years, timely renewal is key
                to uninterrupted business operations.
              </p>
              <p>
                LegallensIndia offers comprehensive assistance in renewing your
                FSSAI license/registration, simplifying the process and ensuring
                your food business fully complies with the necessary safety and
                quality regulations.
              </p>
              <h3>FSSAI License and Registration for Indian Food Businesses</h3>
              <p>
                For businesses involved in manufacturing, storing, transporting,
                or distributing food within India, securing an FSSAI License or
                Registration is a crucial legal requirement. The specific type
                of FSSAI license needed depends on the scale and scope of the
                operation.
              </p>
              <p>
                The FSSAI Registration process assigns a unique 14-digit number
                to the Food Business Operator (FBO), which must be displayed on
                all food packaging. This license ensures compliance with
                national food safety standards and provides legal benefits to
                the food enterprise.
              </p>
              <h3>FSSAI Registration</h3>
              <p>
                FSSAI Registration is a mandatory requirement for small-scale
                food manufacturers or Food Business Operators (FBOs) with an
                annual turnover of less than ?12 lakhs, except those FBOs are
                required to obtain compulsory licensing. This registration is a
                basic step towards ensuring food safety and standards
                compliance, allowing small food businesses to operate legally
                within India.
              </p>
              <h3>FSSAI License</h3>
              <p>
                The FSSAI License becomes essential for food enterprises whose
                turnover exceeds ?12 lakhs. It is particularly crucial for FBOs
                engaged in food processing and manufacturing. The license is
                differentiated into two primary categories based on the scale
                and nature of the business:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>State License: </strong>Suited for medium-sized
                      food businesses operating within a particular state, with
                      a turnover range typically between ?12 lakhs and ?20
                      crores.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Central License: </strong>Required for larger food
                      businesses, especially those with a turnover exceeding ?20
                      crores or those involved in import/export activities
                      operating across multiple states.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Validity of FSSAI Registration and License</h3>
              <p>
                FSSAI licenses and registrations are not issued with lifetime
                validity; they have a specific duration and must be renewed
                periodically to ensure continuous compliance with food safety
                standards.
              </p>
              <p>
                Previously, FBOs had the flexibility to choose the validity
                period of their FSSAI licenses and registrations, ranging from 1
                to 5 years, depending on the fees paid. However, a significant
                change has been implemented based on an FSSAI order dated 11th
                January 2023, effective from 12th January 2023.
              </p>
              <p>
                According to this new order, the validity periods for FSSAI
                licenses and registrations have been standardised as follows:
              </p>
              <div className="table-responsive">
                <table className="table mb-5 border">
                  <thead>
                    <tr>
                      <th className="border">
                        <strong>S.No.</strong>
                      </th>
                      <th className="border">
                        <strong>License / Registration</strong>
                      </th>
                      <th className="border">
                        <strong>Duration of Validity</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">1.</td>
                      <td className="border">FSSAI Registration</td>
                      <td className="border">
                        1 to 5 Years (as per applicant’s choice)
                      </td>
                    </tr>
                    <tr>
                      <td className="border">2.</td>
                      <td className="border">FSSAI State License</td>
                      <td className="border">1 year</td>
                    </tr>
                    <tr>
                      <td className="border">3.</td>
                      <td className="border">FSSAI Central License</td>
                      <td className="border">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                FBOs must ensure the timely renewal of their credentials to
                avoid disruptions in their food business operations.
              </p>
              <h3>Renewal of FSSAI license</h3>
              <p>
                Renewal of the FSSAI license is a crucial step that needs to be
                undertaken before the current license expires. The renewal
                process is vital to ensure that your food business remains
                compliant with the latest food safety regulations and standards,
                avoiding potential legal issues or disruptions in business
                operations. It's recommended to start the renewal process well
                before the license's expiry date to ensure a smooth continuation
                of your business activities without any hindrances.
              </p>
              <h3>Benefits of Renewing FSSAI License/Registration</h3>
              <p>
                Renewing your FSSAI license or Registration brings several
                benefits that are crucial for the smooth operation and growth of
                your food business:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Continuous Legal Compliance: </strong>Renewal
                      ensures your food business remains aligned with current
                      food safety laws and regulations, avoiding legal
                      violations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Uninterrupted Business Operations: </strong>It
                      allows for seamless business activities without the risk
                      of being shut down due to an expired license.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Consumer Confidence: </strong>A valid FSSAI
                      license reassures customers about the safety and quality
                      of your food products, enhancing trust and loyalty.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Avoidance of Penalties: </strong>Timely renewal
                      helps avoid fines and penalties associated with operating
                      under an expired or invalid license.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Quality Improvement: </strong>The renewal process
                      emphasises the importance of upholding and enhancing food
                      safety and quality standards within your business.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Market Expansion: </strong>A current FSSAI license
                      can be essential for entering new markets and expanding
                      your business, as it's often a prerequisite for trade and
                      partnerships.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Brand Credibility: </strong>An up-to-date FSSAI
                      license enhances your brand's reputation, demonstrating a
                      commitment to food safety and quality.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regulatory Updates: </strong>Renewing your license
                      keeps you informed about new regulations and standards in
                      the food industry, ensuring your business remains
                      compliant.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Risk Management: </strong>It minimises the risk of
                      food safety incidents and legal issues, protecting your
                      business reputation and financial stability.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Operational Efficiency: </strong>The renewal
                      process encourages businesses to review and optimise their
                      food safety practices and procedures, improving
                      operational efficiency.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">FSSAI Renewal Timeline</h3>
              <p>
                According to the Food Safety Standard (Licensing and
                Registration of Food Businesses) Regulations, FBOs are given a
                clear timeline for renewing their FSSAI license or registration.
                The process should begin 30 days before the permit's expiration
                date. However, to accommodate thorough preparation and ensure
                timely submission, FBOs can start the renewal process as early
                as 180 days (approximately 6 months) before the license or
                registration expiry.
              </p>
              <h3>Late Fee for Delayed FSSAI License Renewal</h3>
              <p>
                If the FSSAI license renewal is not initiated at least 30 days
                before the permit's expiration date, Food Business Operators
                (FBOs) are subject to a late fee penalty. This late fee and the
                standard renewal fee amount to Rs. 100 per day. It is crucial to
                understand that this late fee penalty exclusively pertains to
                the renewal of licenses and is not applicable in the case of
                FSSAI registration.
              </p>
              <p>
                The imposition of a late fee incentivises FBOs to prioritise the
                timely renewal of their licenses, reducing the risk of incurring
                additional costs associated with delays in the renewal process.
                Complying with these renewal timelines helps maintain a seamless
                and cost-effective operation of food businesses.
              </p>
              <h3>Renewal of FSSAI License after Expiry Date</h3>
              <p>
                When FSSAI license renewal isn't initiated at least 30 days
                before the expiry date, Food Business Operators (FBOs) must pay
                a late fee of Rs. 100 per day, in addition to the standard
                renewal fee. This late fee is specific to licenses, not
                registrations, and encourages timely renewal to avoid extra
                costs.
              </p>
              <p>
                For renewals after the expiry date, FBOs can keep the same
                license number but face penalties:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Up to 90 days late: </strong>Three times the
                      regular annual fee.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>91 to 180 days late: </strong>An additional twice
                      the regular annual fee, totalling five times.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Needed for FSSAI License Renewal</h3>
              <p>
                When renewing an FSSAI license, the following documents are
                typically required:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>FSMS Certificate: </strong>A certificate
                      demonstrating compliance with the Food Safety Management
                      System.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nominee Details Update: </strong>Information about
                      the nominee associated with the FSSAI license.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>License Modifications: </strong>Details regarding
                      any necessary modifications to the license.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Supporting Documents for Modifications on Letterhead:{" "}
                      </strong>
                      Documents supporting any required modifications are
                      provided on official letterhead.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Additional Licensing Authority Requirements:{" "}
                      </strong>
                      Any documents requested by the licensing authority to
                      ensure food safety compliance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Additional Documents: </strong>Any other documents
                      deemed necessary by the licensing authority for the
                      renewal process.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Simplify FSSAI Renewal with LegallensIndia</h3>
              <p>
                LegallensIndia is your all-in-one solution for all your FSSAI
                needs. Whether you are starting a new food business and require
                FSSAI registration, looking to obtain an FSSAI license to expand
                your operations or need a seamless renewal process to keep your
                certification up to date, we've got you covered. Our expert team
                simplifies the entire process, ensuring you meet all the
                requirements and comply with food safety regulations
                effortlessly. With LegallensIndia as your partner, you can focus
                on growing your food business while we take care of the
                intricate details of FSSAI compliance, making it a hassle-free
                experience.
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
