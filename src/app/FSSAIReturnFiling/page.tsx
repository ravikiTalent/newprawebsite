import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function FSSAIReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">FSSAI Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                LegallensIndia is your trusted partner for a seamless,
                stress-free experience helps you to file Food Business Annual
                Returns before the FSSAI annual return due date.
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
                { id: 3, title: "FSSAI Return Filing", url: "" },
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
                      <h5 className="card-title">FSSAI Return Filing</h5>
                      <p>
                        LegallensIndia is your trusted partner for a seamless,
                        stress-free experience helps you to file Food Business
                        Annual Returns before the FSSAI annual return due date.
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

              <h2 className="display-4 mb-3">FSSAI Annual Return Filing</h2>
              <p>
                LegallensIndia is your trusted partner for a seamless,
                stress-free experience helps you to file Food Business Annual
                Returns before the FSSAI annual return due date. We understand
                the critical importance of compliance in the food industry, and
                our dedicated team of experts is committed to helping you
                swiftly fulfill your regulatory obligations. Our comprehensive
                services are designed to ensure that your food business operates
                in full compliance with the regulations of the Food Safety and
                Standards Authority of India (FSSAI), thereby safeguarding both
                your business and the well-being of your consumers. With
                LegallensIndia by your side, navigating the complexities of
                Annual Return FSSAI filings becomes effortless, enabling you to
                concentrate on your core mission – providing safe and delectable
                food to your valued customers.
              </p>
              <h3>FSSAI Return Filing</h3>
              <p>
                Following the regulations set forth by the Food Safety and
                Standards Authority of India (FSSAI), every food business
                holding an FSSAI license is obligated to submit an annual return
                individually. This requirement applies to each license held,
                regardless of whether the same Food Business Operator possesses
                multiple licenses.
              </p>
              <h3>Purpose of the Annual Food Business Return</h3>
              <p>
                The Annual Food Business Return ensures that food businesses
                adhere to FSSAI regulations and maintain transparency in their
                operations.
              </p>
              <p>
                By submitting the annual return, businesses provide essential
                information to the FSSAI concerning their operations,
                encompassing food products' production, handling, storage, and
                distribution. Food business operators should acknowledge the
                importance of this annual return and ensure its timely
                submission. Failure to adhere to this requirement may result in
                penalties or, in more severe cases, the suspension of the FSSAI
                license, posing a risk to the business's ongoing operations.
              </p>
              <h4>
                Food Business Operators (FBOs) Eligible for Annual Return
                Submission
              </h4>
              <p>
                The annual return in Form D1 FSSAI must be filed online with the
                Food Licensing Authority by the following categories of Food
                Business Operators (FBOs) for the type of food products they
                manufactured or sold in the preceding financial year:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Food manufacturers
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Labelers
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Importers
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Packers
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Every FBO, including those engaged in the distribution of milk
                and milk products, must adhere to the FSSAI annual return format
                and file it before the given FSSAI return due date.
              </p>
              <h3>Eligibility Criteria for FSSAI returns</h3>
              <p>
                The requirement to file FSSAI returns applies to specific
                categories of Food Business Operators (FBOs) in India, as
                outlined below:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Turnover:</strong> FBOs with a business
                      turnover exceeding Rs.12 lakhs must file FSSAI returns.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Involvement in Food Activities:</strong> FBOs
                      engaged in various food-related activities such as
                      importing, selling, manufacturing, exporting, storing,
                      distributing, handling, or transporting any food product
                      must file FSSAI returns.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Milk Manufacturing and Distribution:</strong> FBOs
                      involved in manufacturing and distributing milk are also
                      required to file FSSAI returns.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Exempted Entities from Filing Returns</h3>
              <p>
                It's important to note that the FSSAI has issued a notification
                specifying certain entities that are exempt from filing the
                annual return FSSAI. These exempted entities include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fast-food joints:</strong> Establishments
                      primarily focused on fast-food preparation and service.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Restaurants:</strong> Dining establishments that
                      provide prepared meals and beverages for on-site
                      consumption.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Grocery stores:</strong> Retail stores primarily
                      sell a variety of food and household products.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Canteens:</strong> Facilities that serve food to a
                      specific group of individuals, such as employees in a
                      workplace or students in an educational institution.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These exempted entities are relieved from the obligation of
                filing the FSSAI annual return, as per the notification issued
                by the FSSAI.
              </p>
              <h3>Deadline for Food Business Annual Return</h3>
              <p>
                Following Clause 2.1.13(1) of the Food Safety and Standards
                (Licensing and Registration of Food Businesses) Regulation,
                2011, all licensed Manufacturers and Importers are required to
                submit their Annual Return using Form D1 FSSAI no later than May
                31st each year. This return should cover the activities
                conducted during the previous Financial Year. Ensure to file
                this return before the FSSAI annual return due date to avoid
                penalty.
              </p>
              <h3>FSSAI Annual Return Penalty for Late or Non-Submission</h3>
              <p>
                It's essential to adhere to the submission deadline to avoid the
                FSSAI annual return penalty. Any delay in filing the Food
                Business Annual Return beyond May 31 each year shall attract a
                penalty of Rs. 100 per day for delay until the date of filing of
                the return. The maximum penalty levied shall be at most five
                times the annual license fees. So, applicable individuals and
                organizations must file the return before the FSSAI annual
                return last date.
              </p>
              <h3>Information Needed for Filing the FSSAI Annual Return</h3>
              <p>
                When completing the FSSAI Annual Return, the Food Business
                Operator (FBO) is required to furnish the following details:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Name of the product
                      manufactured or imported.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Size of the container,
                      packaging (e.g., P.P.), or bulk packaging.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Quantity measured in
                      Metric Tons.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Selling price of the
                      food products per kilogram or per unit of packaging.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Value of the Food
                      Product.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Quantity of imported
                      goods measured in kilograms.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A comprehensive list of
                      the countries or ports from which the food products are
                      imported.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Rate per unit per
                      kilogram for packaging cost, insurance, and freight
                      (C.I.F.) Free on Board (F.O.B.).
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Ensure compliance and transparency in your food business
                operations with LegallensIndia' Food Business Annual Return
                services. We are here to assist you every step of the way.
              </p>
              <h3>Online Submission of Annual Returns for Food Businesses</h3>
              <p>
                On December 18, 2020, the Food Safety and Standards Authority of
                India (FSSAI) released a notification outlining the updated
                guidelines for filing annual returns in the food business
                sector. As per this notification, FSSAI now requires food
                businesses engaged in the manufacturing and importing of food
                products to submit their annual returns online, starting from
                the financial year 2020-2021. LegallensIndia is ready to assist
                you with the online filing your food business returns. Connect
                with our experts today for guidance and support.
              </p>
              <h3>
                How LegallensIndia Can Assist with FSSAI Annual Return Filings
              </h3>
              <p>
                At LegallensIndia, we understand the importance of timely and
                accurate FSSAI Annual Return filings for Food Business Operators
                (FBOs). We prepare the proper FSSAI annual return format and
                file it before the FSSAI return due date. Here's how we can
                assist you in the process:
              </p>
              <h4>Compliance Expertise:</h4>
              <p>
                Our experts provide clear guidance on the FSSAI Annual Return
                filing process, ensuring you understand your obligations.
              </p>
              <h4>Document Collection and Verification:</h4>
              <p>
                We assist in collecting and organizing the required information
                and documents needed for the FSSAI Annual Return. Our
                professionals review and verify the accuracy of the data and
                documentation to minimize errors.
              </p>
              <h4>Form D1 Preparation:</h4>
              <p>
                We prepare the FSSAI Annual Return in the prescribed Form D1,
                ensuring all relevant details are correctly filled out.
              </p>
              <h4>Timely Submission:</h4>
              <p>
                We inform you about the FSSAI annual return last date to ensure
                you file your FSSAI Annual Return on time, avoiding penalties.
              </p>
              <h4>Penalty Avoidance:</h4>
              <p>
                We help you understand the penalties associated with late or
                non-submission, motivating you to meet the deadlines.
              </p>
              <h4>Compliance Updates:</h4>
              <p>
                We keep you updated on any changes in FSSAI regulations that may
                impact your Annual Return filing. With our support, you can have
                peace of mind knowing that your FSSAI Annual Return will be
                filed accurately and on time.
              </p>
              <p>
                LegallensIndia is committed to making the FSSAI Annual Return
                filing process smooth and hassle-free for FBOs. Our experienced
                professionals ensure that your food business complies with all
                regulatory requirements, allowing you to focus on running your
                business effectively while maintaining food safety standards.
              </p>
              <p>
                Contact Us Now to File Your FSSAI Annual Return and Ensure Food
                Safety Compliance for Your Business.
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
