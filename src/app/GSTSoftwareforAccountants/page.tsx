import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTSoftwareforAccountants() {
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
                Partner with LegallensIndia
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Are you a professional looking to increase your service
                offerings and expand your reach
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
                { id: 3, title: "Partner with LegallensIndia", url: "" },
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
                      <h5 className="card-title">Partner with LegallensIndia</h5>
                      <p>
                        Are you a professional looking to increase your service
                        offerings and expand your reach
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

              <h2 className="display-4 mb-3">Partner with LegallensIndia</h2>
              <p>
                Are you a professional looking to increase your service
                offerings and expand your reach? At LegallensIndia, we offer
                LEDGERS PRO—a revolutionary platform designed to empower
                professionals with tools, opportunities, and solutions to grow
                their businesses, streamline operations, and achieve success in
                the competitive RegTech landscape. Partner with LegallensIndia
                through LEDGERS PRO, your gateway to unlocking unparalleled
                success in RegTech and compliance services.&nbsp;
              </p>
              <p>
                Whether you want to diversify your services, reach a broader
                audience, or enhance operational efficiency, LEDGERS PRO
                provides the perfect ecosystem to achieve your goals.
              </p>
              <h3>What is LEDGERS PRO?</h3>
              <p>
                At its core, LEDGERS PRO is a dynamic marketplace connecting
                professionals and businesses nationwide. It offers a trusted
                platform to showcase services, collaborate with other
                professionals, and access cutting-edge tools to enhance service
                delivery. With LEDGERS PRO, professionals can diversify their
                offerings, expand their client base, and establish themselves as
                leaders in their industries.
              </p>
              <p>Key Features of LEDGERS PRO</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Dynamic Marketplace:</strong> Seamlessly connect with
                  businesses and professionals across the country.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Comprehensive Service Offerings: </strong>Offer a wide
                  range of RegTech services to meet diverse client needs.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Trusted Ecosystem:</strong> Build credibility and
                  trust with a platform backed by LegallensIndia.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Enhanced Efficiency: </strong>Leverage advanced tools
                  and technology to deliver exceptional services.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Who Can Benefit from LEDGERS PRO?</h3>
              <p>
                LEDGERS PRO is designed for a wide range of professionals and
                businesses seeking to elevate their operations, diversify their
                services, and achieve sustainable growth. Specifically, it
                caters to:
              </p>
              <h4>Professionals in RegTech and Compliance</h4>
              <p>
                Chartered accountants, tax consultants, and legal professionals
                are aiming to expand their service offerings in GST filings,
                trademark registrations, compliance tracking, and more.
              </p>
              <h4>Business Service Providers</h4>
              <p>
                Professionals offering niche business solutions who want to
                showcase their unique services and connect with a broader client
                base.
              </p>
              <h4>Entrepreneurs and Startups</h4>
              <p>
                Small business owners and startups looking to simplify their
                operations with advanced tools for invoicing, inventory
                management, and compliance.
              </p>
              <h4>Resellers and Freelancers</h4>
              <p>
                Individuals or businesses are interested in reselling LEDGERS
                PRO solutions to their network for competitive commissions.
              </p>
              <h4>Organisations Seeking Automation</h4>
              <p>
                Businesses aim to streamline manual processes, reduce errors,
                and improve operational efficiency with expert-driven
                automation.
              </p>
              <h4>Growth-Oriented Professionals</h4>
              <p>
                Individuals who want to join a trusted network, cross-sell
                RegTech services, and leverage a nationwide platform to grow
                their business.
              </p>
              <p>
                If you belong to any of these categories, LEDGERS PRO provides
                the perfect ecosystem to help you achieve your goals efficiently
                and effectively.
              </p>
              <h3>Why Partner with LEDGERS PRO?</h3>
              <p>
                Partnering with LEDGERS PRO opens the door to countless
                opportunities for growth, collaboration, and service excellence.
                Here's why it stands out as a preferred choice for
                professionals:
              </p>
              <h4>1. Become a Service Delivery Partner</h4>
              <p>
                Collaborate with LEDGERS PRO to fulfil select LegallensIndia
                offerings. By partnering with a leader in RegTech services, you
                gain access to a platform that ensures credibility and trust.
                Focus on service fulfilment while we provide the tools and
                support you need to succeed.
              </p>
              <h4>2. List &amp; Offer Your Own Services</h4>
              <p>
                Are you an expert in niche services not currently offered by
                LEDGERS PRO? This is your opportunity to showcase your unique
                offerings. Our extensive client base ensures you receive direct
                service requests, helping you grow your business and establish
                your expertise.
              </p>
              <h4>3. Cross-Sell Services</h4>
              <p>
                Expand your portfolio by cross-selling over 200+ RegTech
                services, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}GST filings</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Trademark registrations</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Compliance support</li>
              </ul></div></div>
              <p className="mt-4">
                By offering a diverse range of services, you position yourself
                as a one-stop solution provider for businesses, meeting all
                their compliance and regulatory needs.
              </p>
              <h4>4. Be a Reseller</h4>
              <p>
                As a reseller, you can market LEDGERS PRO solutions to your
                network and earn competitive commissions. Our program includes
                comprehensive training, marketing materials, and dedicated
                support to help you succeed.
              </p>
              <h3>Why Choose LEDGERS PRO?</h3>
              <p>
                LEDGERS PRO is the ultimate platform for professionals and
                businesses looking to elevate their operations, expand their
                service offerings, and achieve sustainable growth. Here's what
                makes LEDGERS PRO the ideal choice:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Streamlined Business Operations:</strong> LEDGERS PRO
                  simplifies business processes with intuitive tools that reduce
                  manual effort and enhance decision-making. Whether it’s
                  invoicing, inventory management, or compliance tracking, our
                  tools are designed to make your operations seamless and
                  efficient.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Expert-Driven Automation: </strong>Our solutions,
                  crafted by industry experts, automate time-consuming tasks
                  like compliance, invoicing, and inventory management. This
                  ensures accuracy, saves time, and allows you to focus on
                  delivering exceptional services to your clients.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Integrated Tools &amp; Insights: </strong>With LEDGERS
                  PRO, you gain access to advanced software for:
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>E-Invoicing and Billing: </strong>Streamline your
                  invoicing process with customisable templates and efficient
                  workflows.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Inventory Management:</strong> Stay on top of your
                  stock levels and streamline order fulfilment.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Compliance Tracking:</strong> Automate GST filing and
                  other compliance requirements to ensure timely and accurate
                  submissions.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Analytics and Reporting: </strong>Leverage data-driven
                  insights to make informed decisions and optimise your
                  services.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Comprehensive Benefits for Professionals</h3>
              <p>
                Discover the unparalleled advantages that LEDGERS PRO offers to
                professionals, enabling growth, efficiency, and success.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Credibility and Trust: </strong>As part of the
                  LegallensIndia network, LEDGERS PRO provides a platform built on
                  reliability and trust. Clients recognise and value the quality
                  and consistency of services offered through LEDGERS PRO.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Diverse Income Streams: </strong>From cross-selling
                  services to reselling licenses, LEDGERS PRO offers multiple
                  ways to generate revenue and grow your business.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Advanced Technology: </strong>Access tools designed to
                  streamline operations, reduce errors, and improve efficiency.
                  Our technology ensures you stay ahead in a competitive market.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Nationwide Network:</strong> With LEDGERS PRO, you
                  join a trusted network serving over 1,80,000 businesses across
                  India. This extensive reach gives you unparalleled access to
                  potential clients and partners.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Dedicated Support: </strong>Our team is committed to
                  your success. From onboarding to ongoing assistance, we
                  provide the training, resources, and support you need to
                  thrive.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Partner Onboarding Fee</h3>
              <p>
                To get started with LEDGERS PRO, you need to provide a simple
                nominal Partner Onboarding Fee. This investment unlocks advanced
                tools, resources, and opportunities to grow your business.
              </p>
              <p>Top Features Included:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}E-Invoicing &amp; Billing&nbsp;</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Inventory Management&nbsp;</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}GST Filing Integration&nbsp;</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Customisable Templates &amp; Reports</li>
              </ul></div></div>
              <h3 className="mt-4">
                How to Become a Partner with LegallensIndia through LEDGERS PRO?
              </h3>
              <p>
                Becoming a partner with LegallensIndia via LEDGERS PRO is a
                straightforward process designed to get you started quickly and
                efficiently. Follow these steps to join and start leveraging the
                platform for growth:
              </p>
              <h4>Step 1: Onboard</h4>
              <p>
                Begin your journey by paying the nominal onboarding fee. This
                investment gives you access to the full suite of LEDGERS PRO
                tools and opportunities.
              </p>
              <h4>
                Step 2: List Your Services or Become a Fulfillment Partner
              </h4>
              <p>
                Choose to list your unique services or collaborate with LEDGERS
                PRO to fulfill select LegallensIndia offerings. This flexibility
                allows you to tailor your approach to your expertise and
                business goals.
              </p>
              <h4>Step 3: Use or Sell LEDGERS Licenses</h4>
              <p>
                Use the included licenses to enhance your own business
                operations or sell them to your network, generating additional
                revenue.
              </p>
              <h4>Step 4: Expand Your Reach</h4>
              <p>
                Leverage LEDGERS PRO’s extensive tools and resources to grow
                your client base, diversify your services, and achieve
                sustainable business growth.
              </p>
              <h3>Join LEDGERS PRO Today!</h3>
              <p>
                Becoming a part of LEDGERS PRO means joining a network that has
                already transformed the way over 1,80,000 businesses operate.
                With our trusted platform, advanced tools, and diverse
                opportunities, you can:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}Build credibility and trust with clients.</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Diversify your services and income streams.</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Leverage technology to streamline your operations.</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Unlock new opportunities for growth and leadership in your
                  industry.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Ready to Transform Your Business?</h3>
              <p>
                Take the first step toward growth and success. Contact us today
                to join LEDGERS PRO and unlock your potential. With LEDGERS PRO,
                the possibilities are limitless, and your success is our
                priority.
              </p>
              <p>
                <strong>
                  <em>&nbsp;Get Started today!</em>
                </strong>
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
