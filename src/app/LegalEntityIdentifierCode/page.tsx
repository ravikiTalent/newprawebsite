import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function LegalEntityIdentifierCode() {
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
                Legal Entity Identifier Code
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Register your Legal Entity Identifier (LEI) quickly and securely
                to ensure compliance with global financial standards. LEIs
                enhance transparency, risk management, and regulatory oversight.
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
                { id: 3, title: "Legal Entity Identifier Code", url: "" },
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
                        Legal Entity Identifier Code
                      </h5>
                      <p>
                        Register your Legal Entity Identifier (LEI) quickly and
                        securely to ensure compliance with global financial
                        standards. LEIs enhance transparency, risk management,
                        and regulatory oversight.
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

              <h2 className="display-4 mb-3">LEI CODE</h2>
              <p>
                <span>
                  An LEI (Legal Entity Identifier) code is a 20-digit
                  alphanumeric identifier used globally to identify legal
                  entities involved in financial transactions uniquely. LEI
                  register helps improve transparency and reduces the risk of
                  financial fraud by ensuring that each entity's details are
                  easily accessible and consistently recorded in financial
                  markets worldwide. Each LEI registration Code provides key
                  reference information that enables clear and unique
                  identification of legal entities participating in financial
                  transactions, such as their name, location, and information
                  concerning the company structure.
                </span>
              </p>
              <p>
                <span>
                  <em>
                    <strong>
                      Secure your LEI code effortlessly, obtain LEI certificate
                      with LegallensIndia, and stay compliant in the global
                      market. Our experts are here to guide you through the
                      process, ensuring compliance and operational ease!
                    </strong>
                  </em>
                </span>
              </p>
              <h3>
                <span>LEI Code Meaning&nbsp;</span>
              </h3>
              <p>
                <span>
                  LEI Code full form stands for "Legal Entitiy Identifier". As
                  mentioned, A LEI Code meaning refers to a distinct 20-digit
                  alphanumeric code assigned to registered legal entities
                  globally. This code enhances market transparency by
                  facilitating the straightforward identification of entities
                  involved in financial transactions. It is important to note
                  that the LEI registration code differs from local registration
                  numbers or CINs provided by regional regulatory bodies.
                </span>
              </p>
              <p>
                <span>
                  LEI adheres to a standardised universal format recognised
                  worldwide.&nbsp; This code adheres to the ISO 17442 standard
                  developed by the International Organization for
                  Standardization (ISO).&nbsp;&nbsp;
                </span>
              </p>
              <p>
                <span>
                  An LEI code can be obtained from any of the Local Operating
                  Units (LOUs) accredited by the Global Legal Entity Identifier
                  Foundation (GLEIF), which oversees the implementation and use
                  of LEIs worldwide. In India, the Legal Entity Identifier India
                  Ltd. (LEIL) serves as an official issuer recognised by the
                  Reserve Bank of India (RBI) and plays an important role in
                  issuing LEI Certificates.
                </span>
              </p>
              <h3>
                <span>Structure of an LEI Code</span>
              </h3>
              <p>
                <span>
                  <span>The structure of a </span>
                  <span>Legal Entity Identifier Code</span>
                  <span>
                    , which is standardised under ISO 17442, comprises a
                    20-character alphanumeric sequence. Here is a LEI code
                    example:
                  </span>
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Characters 1-4</span>
                      <span>
                        : These always represent the identifier of the Local
                        Operating Unit (LOU) that issued the LEI.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Characters 5-6</span>
                      <span>: These are always set to '00'.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Characters 7-18</span>
                      <span>
                        : These characters are unique to each entity and differ
                        from one LEI to another.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>&nbsp;Characters 19-20</span>
                      <span>
                        : These are check digits used for LEI verification
                        purposes.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Purpose of LEI Registration Code</span>
              </h3>
              <p>
                <span>
                  The primary purpose of an LEI - Legal Entity Identifier code
                  is to enhance transparency and improve risk management in the
                  global financial system. By providing a unique identifier for
                  each legal entity that engages in financial transactions, the
                  LEI Code helps to ensure that entities can be easily and
                  distinctly identified worldwide, facilitating more accurate
                  and efficient tracking of financial transactions. This,
                  registering and obtaining the LEI certificate registration,
                  helps the entities for a quicker identification globally.
                </span>
              </p>
              <h3>
                <span>Applicability of&nbsp;</span>
                <span>LEI Register Code&nbsp;</span>
              </h3>
              <p>
                <span>
                  Here's a breakdown of the LEI applicability for the companies
                  or entities:
                </span>
              </p>
              <p>
                <span>
                  The LEI registration applicability spans a wide spectrum of
                  entities involved in significant financial transactions.
                  Here's a detailed overview of&nbsp;
                </span>
                &nbsp;who needs an LEI number in india&nbsp;&nbsp;<span>:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Institutions:</strong>
                      <strong> </strong>Banks, insurance companies, and
                      non-banking financial companies must have an LEI to
                      facilitate the monitoring and regulation of financial
                      transactions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Stock Market Participants:</strong>
                      </span>
                      <span>
                        {" "}
                        Entities listed on stock exchanges or those
                        participating in the depository system are subjected to
                        LEI applicability, as mandated by the Securities and
                        Exchange Board of India (SEBI).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Derivatives and Forex Markets:</strong>
                      <strong> </strong>Participants in over-the-counter
                      derivatives and foreign exchange markets are required to
                      possess an LEI to help track transactions and manage
                      counterparty risk.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>High-Value Transaction Entities: </strong>
                      </span>
                      <span>
                        Any legal entity involved in transactions
                        exceeding&nbsp; Rs.50 crore through systems like the
                        Real Time Gross Settlement (RTGS) are subjected to LEI
                        registration applicability.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Large Borrowers:</strong> Entities with fund-based
                      or non-fund-based exposures of Rs.5 crore or more, as well
                      as corporations with financial exposures of Rs.50 crore or
                      more sourced from banks, UCBs, NBFCs, and AIFIs,
                      necessitates the LEI Code Applicability.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Public Securities Transactions:</strong>
                      </span>
                      <span>
                        {" "}
                        Issuers, guarantors, borrowers, or security providers
                        dealing with securities issued to the public, listed on
                        a stock exchange, or included in the depository system
                        must secure an LEI.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Importance of LEI Code</span>
              </h3>
              <p>
                <span>
                  The importance of a Legal Entity Identifier (LEI) code lies in
                  its ability to enhance transparency and security within the
                  global financial system. Here are the key reasons why LEI
                  register codes are crucial:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Improved Transparency</strong>
                      <strong>: </strong>LEI registration code clearly identify
                      legal entities engaged in financial transactions
                      worldwide, reducing the ambiguity that can arise from
                      similar names or different business units within the same
                      company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Risk Management</strong>
                      <strong>: </strong>By providing precise and accessible
                      data about entities, LEIs help financial institutions and
                      regulators manage counterparty and credit risks more
                      effectively.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regulatory Compliance</strong>
                      <strong>:</strong> Many regulatory frameworks require LEIs
                      and LEI Certificate registration for reporting and
                      compliance purposes. Entities without an LEI may face
                      restrictions or be unable to participate in certain
                      financial transactions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Operational Efficiency</strong>
                      <strong>:</strong> LEI registration code simplifies
                      various operational processes by providing each entity
                      with a standardised, universal identifier. This can
                      streamline transactions, reporting, and record-keeping.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fraud Prevention</strong>
                      <strong>: </strong>With LEIs, the financial sector can
                      more easily trace transactions back to the entities
                      involved, helping to detect and prevent fraudulent
                      activities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Market Integrity</strong>
                      <strong>:</strong> LEIs contribute to the integrity of
                      financial markets by ensuring that all participants are
                      clearly and consistently identified, making it easier to
                      assess and control systemic risk.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Overall, LEIs are foundational in making global financial
                  markets more stable, transparent, and efficient.
                </span>
              </p>
              <h3>
                <span>Validity of LEI Code</span>
              </h3>
              <p>
                <span>
                  LEI codes are valid for one year from the date of issuance and
                  require annual renewal to ensure the information they contain
                  remains current and accurate. For example, an LEI issued on
                  February 1, 2023, must be renewed by February 1, 2024.
                </span>
              </p>
              <h3>
                <span>Renewal of LEI Registration Process</span>
              </h3>
              <p>
                <span>
                  As mentioned, An LEI code requires annual renewal to remain
                  active.&nbsp; Failure to renew by the deadline results in the
                  LEI becoming inactive. Regular renewals are essential to
                  maintain the accuracy and relevance of the data within the
                  Global LEI Pool.
                </span>
              </p>
              <p>
                <span>
                  The renewal of LEI registration process includes the following
                  timelines and options. LEI Register provides options for
                  renewing LEIs for 1, 3, or 5 years. Regardless of the selected
                  duration, you will receive a reminder 59 days before your
                  current registration expires, ensuring you have ample time to
                  renew your LEI. For multiyear renewals, the LEI Register will
                  also update your information using official company registries
                  to keep all data current.
                </span>
              </p>
              <h3>
                <span>Documents Required for LEI Code</span>
              </h3>
              <p>
                <span>
                  &nbsp;Here are the documents listed for the LEI requirements,
                  as specified by LEIL:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Audited Financial Statements</strong>
                      <strong>: </strong>These are mandatory and provide a
                      detailed account of the financial health and transactions
                      of the entity.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Letter of Authority</strong>
                      <strong>:</strong> This LEI certificate requirement must
                      be in the format specified by LEIL or a General Board
                      Resolution authorising the LEI application.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Documents for Holding and Ultimate Parent Companies
                      </strong>
                      <strong>:</strong> For entities that are holding companies
                      or ultimate parents, audited financial statements are
                      needed. Alternatively, an Auditor’s Certificate in the
                      format specified by LEIL can be submitted to demonstrate
                      compliance and financial integrity.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>What information is Identifiable with an LEI code?</span>
              </h3>
              <p>
                <span>
                  An LEI (Legal Entity Identifier) code provides publicly
                  accessible data that enhances transparency in the global
                  marketplace by offering detailed information about legal
                  entities. The code includes:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Level 1 Data</strong>
                      <strong>: </strong>This covers basic entity information,
                      such as the legal name, the registry where the entity is
                      registered, the registration number, legal jurisdiction,
                      legal form, entity status, and contact details, including
                      the legal and headquarters addresses. This data helps
                      clarify the identity of the entity involved in a
                      transaction.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Level 2 Data</strong>
                      <strong>:</strong> This pertains to the entity's ownership
                      structure, providing insights into who owns the legal
                      entity and which entities it owns. This data is essential
                      for understanding corporate relationships and ownership
                      hierarchies.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  According to the Global Legal Entity Identifier Foundation
                  (GLEIF), an LEI is designed to answer three pivotal questions
                  in corporate financial transactions clearly:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> <span>Who is who?</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Who owns whom?</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Who owns what?</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>How to Get LEI Code?&nbsp;</span>
              </h3>
              <p>
                <span>
                  LEI Code Registration involves a series of structured steps
                  through the Legal Entity Identifier India Limited (LEIL).
                  Ensure you have all the LEI registration requirements before
                  initiating the process. Here is a brief guide on how to get
                  your LEI code:
                </span>
              </p>
              <h4>
                <span>Step 1: Prepare Required Documents</span>
              </h4>
              <p>
                <span>
                  Begin by downloading the necessary document list and formats
                  for your legal entity type from the LEIL website, specifically
                  from the "Downloads -&gt; Legal Docs Download" tab. This will
                  ensure that you gather all documents necessary for LEI
                  registration requirements before starting the LEI application
                  process.
                </span>
              </p>
              <h4>
                <span>Step 2: Self-Registration on the Online Portal</span>
              </h4>
              <p>
                <span>
                  Visit LEIL's website and create an account using your official
                  email address. Only authorised officials, defined as those
                  empowered through a Letter of Authority or General Board
                  Resolution, can submit applications. During registration,
                  you'll fill out forms that include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>&nbsp;Company Information</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        &nbsp;Direct Parent Information (if applicable)
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        &nbsp;Ultimate Parent Information (if applicable)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 3: Payment and Document Submission</span>
              </h4>
              <p>
                <span>
                  After entering all necessary details, proceed to the payment
                  page. You can choose between net banking, credit/debit card,
                  or demand draft. Upon payment, you'll receive a reference
                  number via email and SMS, which will be used for further
                  communications and document submissions. Ensure all submitted
                  documents mention this reference number, including the demand
                  draft (if used). This proper document submission is necessary
                  for the LEI Code verification process
                </span>
              </p>
              <h4 className="mt-4">
                <span>Step 4: LEI Verification Process</span>
              </h4>
              <p>
                <span>
                  LEI will verify the submitted documents and payment. If
                  additional documents are needed or adjustments to the online
                  forms are required for LEI Code Verification, LEIL will notify
                  you. You can make any necessary changes by logging back into
                  the portal and editing your details.
                </span>
              </p>
              <h4 className="mt-4">
                <span>Step 5: LEI Code Registration &amp; Issuance</span>
              </h4>
              <p>
                <span>
                  Once LEI verification is successfully completed, LEIL will
                  issue the LEI number. This number, along with a digitally
                  signed invoice, will be emailed to you. The LEI number should
                  be shared with all your banks and financial institutions where
                  necessary.
                </span>
              </p>
              <h3>
                <span>LEI Code Search</span>
              </h3>
              <p>
                <span>
                  To conduct an LEI Code search, the most reliable method is to
                  use the resources provided by the Local Operating Unit (LOU)
                  responsible for issuing LEI codes in your specific region or
                  country. For example:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> <span>In India</span>
                      <span>
                        , you can find an entity's LEI number by using the
                        'Search' feature on the Legal Entity Identifier India
                        Limited (LEIL) website. This platform allows easy access
                        to LEI numbers of entities registered in India and also
                        offers the option to LEI Code search search for entities
                        registered in other countries.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <span>Globally</span>
                      <span>
                        : The best resource for LEI Code search search for
                        entities worldwide is the 'Global LEI Index' hosted by
                        the Global Legal Entity Identifier Foundation (GLEIF).
                        This central repository contains data from all LOUs
                        around the world. You can search by the LEI itself, the
                        registered name of the company, or the company's
                        address. The search results will provide detailed
                        information, including the LEI status, registration
                        status, country of registration, and details about the
                        LOU that issued the LEI.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Obtain Your LEI Code Seamlessly with LegallensIndia!</span>
              </h3>
              <p>
                <span>
                  Secure your LEI Code effortlessly through LegallensIndia, your
                  trusted partner in business compliance. Through this service,
                  we help companies subjected to LEI number applicability to
                  obtain the Legal Entity Identifier Code. At LegallensIndia, we
                  streamline the process of collecting the LEI requirements and
                  obtaining your Legal Entity Identifier, ensuring that it is
                  both straightforward and compliant with global
                  standards.&nbsp;
                </span>
              </p>
              <p>
                <span>
                  Our dedicated team assists you from start to finish—helping
                  you gather the documents specified for the LEI certificate
                  requirements, fill out the application, and manage the
                  submission process. With LegallensIndia, you benefit from a
                  seamless experience that meets regulatory requirements and
                  enhances your business's credibility in the financial
                  marketplace.&nbsp;
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>
                      Secure your LEI code effortlessly with LegallensIndia and
                      ensure your business meets global financial compliance
                      standards!
                    </em>
                  </strong>
                </span>
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
