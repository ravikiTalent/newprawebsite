import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function SingaporeCompany() {
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
                Singapore Company Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Set-up Business in Singapore with 1 Year virtual office address
                service and Nominee director.
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
                { id: 2, title: "Singapore Company Registration", url: "" },
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
                        Singapore Company Registration
                      </h5>
                      <p>
                        Set-up Business in Singapore with 1 Year virtual office
                        address service and Nominee director.
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

              <h2 className="display-4 mb-3">Singapore Company Registration</h2>
              <p>
                Singapore is a popular destination for Indian entrepreneurs
                looking to expand their businesses globally. The country is
                renowned for its business-friendly environment, excellent
                infrastructure, and supportive government policies. Singapore is
                also a hub for global trade and has a well-developed financial
                and legal system. So, it is a better idea to set up and register
                a business in Singapore to get all the benefits it entails.
                LegallensIndia experts help you navigate all the legal
                regulations and streamline Singapore company registration with
                expert guidance.
              </p>
              <h3>Types of Companies in Singapore</h3>
              <p>
                Before we delve into the Singapore company registration process,
                it is essential to understand the types of companies that can be
                registered in Singapore. The two most common types of companies
                are Private Limited Companies (PLCs) and Limited Liability
                Partnerships (LLPs).
              </p>
              <p>
                A Private Limited Company is the most common business structure
                in Singapore. It is a separate legal entity from its owners and
                shareholders and provides limited liability protection. An LLP,
                on the other hand, is a partnership where each partner has
                limited liability protection. It is a popular option for
                professional services firms when it comes to business
                registration Singapore.
              </p>
              <h3>Criteria for Singapore Company Registration</h3>
              <p>
                If you are considering setting up a company in Singapore, it is
                crucial to understand the criteria for business incorporation
                Singapore.
              </p>
              <h4>1. Company Name</h4>
              <p>
                The first step in registering a company in Singapore is to
                choose a name for your company. The name must be unique and not
                already in use by another company. The name must also not be
                offensive or infringe on trademark or copyright laws. You can
                check the availability of a company name through the Accounting
                and Corporate Regulatory Authority (ACRA) website.
              </p>
              <h4>2. Directors</h4>
              <p>
                A company in Singapore must have at least one director who is a
                Singaporean citizen, permanent resident, or Employment Pass
                holder. The director must be at least 18 years old and not
                bankrupt or convicted of criminal offenses. A foreigner wishing
                to be a director of a Singaporean company must obtain an
                Employment Pass.
              </p>
              <h4>3. Shareholders</h4>
              <p>
                A company in Singapore must have at least one shareholder, and
                there is no limit to the maximum number of shareholders. A
                company can have up to 50 shareholders, who may or may not be
                directors. The shareholder can be an individual or a corporate
                entity. The shareholder is not required to be a resident of
                Singapore.
              </p>
              <h4>4. Company Secretary</h4>
              <p>
                Every company in Singapore must appoint a company secretary
                within six months of the company incorporation Singapore. The
                company secretary must be a resident of Singapore and cannot be
                a director or shareholder.
              </p>
              <h4>5. Registered Address</h4>
              <p>
                A company in Singapore must have a registered address, which
                must be a physical address and not a PO Box. The registered
                address must be a place where official correspondence can be
                sent and where company records and registers are kept.
              </p>
              <h4>6. Paid-up Capital</h4>
              <p>
                A company in Singapore must have a minimum paid-up capital of
                S$1. The paid-up capital can be increased at any time after
                company incorporation Singapore.
              </p>
              <h4>7.Incorporation Documents</h4>
              <p>
                To register a company in Singapore, you will need to prepare and
                submit the following documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Directors' and
                      Shareholders' Particulars{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Company Name Approval
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Company Registration
                      Form
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Memorandum and Articles
                      of Association
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Company Secretary's
                      Particulars
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Business Licenses and
                      Permits
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Bank Account Details
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                After submitting the prescribed documents and all the necessary
                legal processes, business registration Singapore will be
                completed.
              </p>
              <h3>Documents Required for Business Registration Singapore</h3>
              <p>
                These are the necessary documents required to register a
                business in Singapore.
              </p>
              <h4>1. Directors' and Shareholders' Identification Documents:</h4>
              <p>
                One of the primary requirements for company registration in
                Singapore is submitting identification documents for all
                directors and shareholders. For Indian nationals, this includes
                a copy of their passport, proof of address, and any other
                identification documents issued by the Indian government. The
                documents must be certified by a notary public, advocate,
                attorney, or certified public accountant.
              </p>
              <h4>2. Company Name Approval</h4>
              <p>
                Business owners must choose a unique company name that is not
                already in use. Entrepreneurs should ensure that the company
                name is not offensive, prohibited, or similar to any existing
                business name. The registration documents should also include a
                brief description of the company's intended activities.
              </p>
              <h4>3.Company Registration Form:</h4>
              <p>
                The Singapore Registrar of Companies (Accounting and Corporate
                Regulatory Authority (ACRA)) issues a Certificate of
                Incorporation when a new company is registered. The certificate
                acknowledges that the business was established or incorporated
                on the specified date. Additionally, it demonstrates that all
                legal conditions to register a business in Singapore have been
                met.
              </p>
              <h4>4. Memorandum and Articles of Association:</h4>
              <p>
                The Memorandum and Articles of Association (M&amp;AA) are legal
                documents that outline the company's objectives, rules, and
                regulations. They also define the company's structure, share
                capital, and management structure. Entrepreneurs should ensure
                that the M&amp;AA is in compliance with Singapore's Company Law
                and that all the shareholders sign it. The M&amp;A must be filed
                with ACRA during the company registration process.
              </p>
              <h4>5.Appointment of Company Secretary:</h4>
              <p>
                Singapore law requires that every company must appoint a company
                secretary within six months of incorporation. The secretary
                should be a resident of Singapore and must have the necessary
                knowledge and experience to fulfill their duties regarding
                company incorporation Singapore. Entrepreneurs can engage a
                professional company secretary to fulfill this requirement.
              </p>
              <h4>6.Business Licenses and Permits:</h4>
              <p>
                Certain business activities require specific licenses and
                permits before they can be legally carried out in Singapore.
                Entrepreneurs should research the applicable licenses and
                permits for their business activities and ensure they obtain
                them before commencing operations.
              </p>
              <h4>7.Bank Account Details:</h4>
              <p>
                Finally, entrepreneurs should provide the company's bank account
                details as part of the registration process. The bank account
                should be opened with a local Singapore bank and in the
                company's name.
              </p>
              <p>
                Ensure to have these documents before proceeding to the business
                incorporation Singapore.
              </p>
              <h3>Benefits of Registering a Company in Singapore</h3>
              <p>
                Here are the several benefits can be attained as a result of
                business incorporation Singapore.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Strategic Location:</strong> Singapore is
                      strategically located in the heart of Southeast Asia and
                      is a hub for global trade. It has excellent connectivity
                      with the rest of the world. It is an ideal location for
                      businesses looking to expand globally.{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business-Friendly Environment:</strong> Singapore
                      has a business-friendly environment and is ranked as one
                      of the most accessible places to conduct business
                      globally. The country has a low tax rate, streamlined
                      regulations, and supportive government policies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Protection of Intellectual Property:</strong>{" "}
                      Singapore has a robust legal system that protects
                      intellectual property. The country has strict laws against
                      piracy, counterfeiting, and trademark infringement.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Skilled Workforce:</strong> Singapore has a highly
                      skilled and educated workforce. The country has a strong
                      emphasis on education and training. It has a large pool of
                      experienced professionals in various fields.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Registering a company in Singapore can be straightforward if you
                follow the necessary steps and requirements. Singapore offers
                many benefits for businesses looking to expand globally,
                including a strategic location, a business-friendly environment,
                intellectual property protection, and a skilled workforce. As an
                Indian entrepreneur, registering a company in Singapore can be
                an excellent way to expand your business and tap into the
                country's many opportunities. LegallensIndia can help you start
                your business in Singapore quickly and securely.
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
