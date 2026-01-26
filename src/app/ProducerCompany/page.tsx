import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ProducerCompany() {
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
              <h1 className="display-1 text-white mb-3">Producer Company</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A Producer Company is an officially established group of farmers
                or agriculturists to enhance their quality of life, financial
                support, and income.
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
                { id: 2, title: "Business Registration", url: "StartUp" },
                { id: 3, title: "Producer Company", url: "" },
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
                      <h5 className="card-title">Producer Company</h5>
                      <p>
                        Easily register a Producer company registration through
                        LegallensIndia including Incorporation kit and share
                        certificates.
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

              <h2 className="display-4 mb-3">Producer Company</h2>

              <p>
                A Producer Company is an officially established group of farmers
                or agriculturists to enhance their quality of life, financial
                support, and income. This kind of company combines elements of
                both private limited companies and cooperatives. Its primary
                goal is to encourage cooperative businesses to form as companies
                and to allow current cooperatives to transition into company
                structures.
                <br />
                Complete your Producer Company registration with LegallensIndia'
                expert guidance. Our team simplifies the registration process of
                farmer producer organisations, ensuring legal compliance under
                the Companies Act 2013. Contact LegallensIndia today and take the
                first step towards empowering your agricultural venture.
              </p>
              <h3>Producer Company</h3>
              <p>
                A Producer Company also referred to as a Farmer Producer
                Company, is an officially acknowledged farmer producer
                organisations organisation composed of farmers or
                agriculturists. Its primary goal is to improve the livelihoods
                of its members and ensure the long-term viability of their
                resources, incomes, and profitability. Operating as a hybrid
                between private limited companies and cooperative societies, a
                producer company incorporation is registered under the Companies
                Act 2013. Farmer producer organisations functions with
                democratic governance principles, ensuring that each member or
                producer has an equal say in decision-making, regardless of the
                number of shares they hold.
              </p>
              <h3>Legal Framework of Farmer Producer Organisations</h3>
              <p>
                A Producer Company, as defined, is a legal entity established
                under the amended Companies Act of 1956.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Governed by the
                      provisions outlined in Section 465 of the Companies Act,
                      2013, it is subjected to the regulations outlined in Part
                      IX A of the Companies Act, 1956, with necessary
                      modifications.
                    </li>
                    <li className="mt-3">
                      <i className="uil uil-check"></i> The objectives of a
                      Producer Company incorporation must align with the
                      activities specified in Section 581B of the Companies Act
                      1956.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Objective of Producer Company</h3>
              <p>
                A Producer Company's objective is to advance its members'
                interests by facilitating activities related to the production,
                marketing, sale, and export of their primary products.
                <br />
                Additionally, the producer company incorporation is empowered to
                import goods or services essential for the welfare of its
                members.
              </p>
              <h3>Activities of Producer Company</h3>
              <p>
                Farmer Producer Organisations are established with diverse
                objectives aimed at enhancing their members' welfare and
                economic status.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Agricultural Advancements:</strong>Initiating and
                      supporting activities related to the production,
                      harvesting, procurement, grading, pooling, handling,
                      marketing, selling, and exporting of members' primary
                      produce. Additionally, it includes importing goods or
                      services beneficial to the members.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Processing and Preservation:</strong>Engaging in
                      processing activities such as preservation, drying,
                      distilling, brewing, venting, canning, and packaging of
                      the members' produce to add value and extend its
                      marketability.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Equipment and Consumables Supply:</strong>
                      Manufacturing, marketing, or supplying machinery,
                      equipment, and consumables, primarily catering to the
                      needs of its members.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Educational Initiatives:</strong>Offering
                      education and training based on the principles of mutual
                      assistance to its members and the broader community.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Technical and Consultancy Services:</strong>{" "}
                      Providing a spectrum of services, including technical
                      assistance, consultancy, training, research and
                      development, aimed at promoting the interests and
                      enhancing the capabilities of its members.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Energy and Resource Management:</strong>Involving
                      in power generation, transmission, distribution and
                      revitalisation and sustainable management of land and
                      water resources.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Insurance Services:</strong>Offering insurance
                      products tailored to protect producers or their primary
                      produce.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Mutual Cooperation:</strong>Promoting techniques
                      and practices of mutuality and mutual assistance among
                      members.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Member Welfare:</strong> Implementing welfare
                      measures or facilities decided by the Board for the
                      benefit of members.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ancillary Activities:</strong>Engaging in any
                      other activity that is ancillary or incidental to the
                      primary objectives or that may promote the principles of
                      mutuality and mutual assistance among members in different
                      manners.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Support:</strong>Financing the
                      procurement, processing, marketing, and other specified
                      activities, which includes extending credit facilities or
                      other financial services to its members.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Advantages of a Producer Company </h3>
              <p>
                The benefits of starting a Producer Company and farmer Producer
                company registration process are listed as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Hybrid Structure:</strong>A Producer Company
                      incorporation combines the professional management of a
                      Private Limited Company with the mutual benefits of a
                      Cooperative Society.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ownership by Primary Producers:</strong>Ownership
                      and membership are held exclusively by "primary producers"
                      or "Producer Institutions," ensuring that the organisation
                      remains focused on benefiting those involved in primary
                      production. Member equity cannot be traded, safeguarding
                      against takeovers or exploitation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Professional Framework:</strong>While adhering to
                      the clauses of a Private Limited Company, a Producer
                      Company operates under specific clauses outlined in the
                      Producer Company Act (referenced from 581-A to 581-ZL),
                      providing a professional framework tailored to the needs
                      of primary producers.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limited Liability:</strong>In a Producer Company,
                      members' financial responsibility is capped at their share
                      contribution. This implies that members' assets are
                      safeguarded against the company's debts or financial
                      setbacks, limiting their liability strictly to the amount
                      they've invested in shares.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimal Capital Requirement:</strong>With a
                      minimum paid-up capital of Rs. 1 Lakh and minimum
                      authorised capital of Rs. 5 lakh, it is easier to mobilise
                      small capital for a Producer Company.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Flexibility in Membership:</strong>A minimum of 10
                      producers is required to form a Producer Company, with no
                      limit on the maximum number of members. This flexibility
                      allows even small groups of 10 individuals to establish a
                      Producer Company, promoting accessibility.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>No Government or Private Equity Stake:</strong>
                      Producer Companies cannot have government or private
                      equity stakes, preventing them from becoming public or
                      deemed public limited companies. This ensures autonomy and
                      professional functioning without external threats.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>National Scope:</strong>Producer Companies can
                      operate nationwide, providing flexibility to expand and
                      conduct business freely and professionally.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Membership Structure of Producer Company</h3>
              <p>
                A producer company's membership excludes primary producers or
                producer organisations.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Membership is attained
                      through the purchase of shares in the company.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The actions of a
                      Producer Company are solely executed through its members.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Members are pivotal in
                      establishing the company and hold the authority to
                      initiate its dissolution.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Decisions within the
                      company are made collectively through general meetings
                      convened by the members.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Governance Structure of a Producer Company</h3>
              <p>
                You can legally authorise your producer company with producer
                company registration. The following emphasizes the governance
                structure of a producer company:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> A Board of Directors
                      oversees the management of a Producer Company.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Members of the company
                      elect the Board during a general meeting.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The Board must consist
                      of a minimum of 5 directors.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Directors serve a term
                      of five years.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Directors can be
                      re-elected for up to two consecutive terms.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Minimum Share Capital Requirements</h3>
              <p>
                Minimum Share Capital Requirements for a Producer Company are
                listed as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> The minimum Authorized
                      Capital for a Producer Company is Rs. 5 lakh.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> However, the Authorized
                      Capital can exceed Rs. 5 lakh as specified in the
                      Memorandum of Association.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The Authorized Share
                      Capital must adequately fulfil the objectives outlined in
                      the memorandum.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The Authorized Share
                      Capital needs to be realistic.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Furthermore, the minimum
                      paid-up capital for a Producer Company is Rs. 1 lakh.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How to Register Farmer Producer Company?</h3>
              <p>
                Registering a Producer Company involves a structured procedure
                resembling incorporating a Private Limited Company in India. The
                steps are methodically designed to ensure legal compliance and
                the proper establishment of such a company. Here's a detailed
                breakdown on how to register farmer producer company:
              </p>
              <h4>Step 1: Obtain a Digital Signature Certificate (DSC)</h4>
              <p>
                The initial step is to acquire a Digital Signature Certificate
                (DSC) for all the proposed directors of the company. The DSC is
                an electronic signature used to submit e-forms online securely.
                The documents required for obtaining a DSC include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> PAN Card of the Director
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Aadhaar Card a Director
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Recent Photograph
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Email ID
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Contact Number
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Step 2: Obtain Director Identification Number (DIN)</h4>
              <p>
                Subsequent to the acquisition of DSC, the next step involves
                obtaining the Director Identification Number (DIN) for each
                director. The DIN is a unique identifier for a director and is
                required for a director to be appointed in any company. This can
                be obtained by filing the DIR-3 form or through the SPICe+ form,
                accompanied by:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Self-attested identity
                      proof (like PAN card)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Address proof
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Recent photograph
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Step 3: Name Reservation</h4>
              <p>
                The name of the Producer Company must be unique and end with the
                words Ã¢??Producer Company.Ã¢?Â For name reservation, Form
                SPICe+ is filed with the Registrar of Companies (ROC), proposing
                two names in order of preference and the significance behind
                those names. The ROC will then approve one of the proposed names
                based on availability and compliance with naming standards.
              </p>
              <h4>Step 4: Preparation of Essential Documents</h4>
              <p>
                Once the name is approved, the following vital documents need to
                be prepared for incorporation:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Memorandum of Association (MoA):</strong>This
                      document outlines the primary, ancillary/subsidiary, and
                      other objects of the company.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Articles of Association (AoA):</strong>This
                      document lays down the by-laws on which the company will
                      operate.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Form INC-22 for the
                      Registered Office
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Form DIR-12 for
                      Directors Appointment
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Affidavit:</strong>File Affidavits (if necessary):
                      If any of the subscribers to the Memorandum of Association
                      have signed in Hindi, file Form INC-7 containing
                      affidavits as required. All subscribers to the proposed
                      company must sign an affidavit declaring their legal
                      competency to act as subscribers.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Execute Power of Attorney:</strong>Execute a Power
                      of Attorney in favour of a consultant or authorised
                      person, empowering them to make necessary changes in the
                      MoA and AoA as required by the RoC.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registered Office Proof:</strong> If the
                      registered office location is owned by one of the
                      directors, a utility bill and a No Objection Certificate
                      (NOC) from the owner is required. A lease agreement and a
                      NOC from the landlord must be attached if the premises are
                      rented.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Step 5: Filing of Incorporation Application</h4>
              <p>
                All the prepared documents and the application for incorporation
                are to be filed in Form SPICe+ with the ROC. The application
                must meticulously detail the companyÃ¢??s proposed structure,
                directors, and registered office.
              </p>
              <h4>Step 6: ROC Verification and Certificate of Incorporation</h4>
              <p>
                The ROC will scrutinise the application and the attached
                documents for compliance with legal requirements. Upon
                satisfaction, the ROC will issue the Certificate of
                Incorporation, proving that the company has been legally
                constituted. The company can then commence its business
                operations.
              </p>
              <h4>Post-Incorporation Steps</h4>
              <p>
                After incorporation, the company may need to undertake
                additional steps such as applying for a PAN, TAN, and opening a
                bank account in the name of the Producer Company.
                <br />
                The experts at LegallensIndia are ready to assist you at every
                step of the registration process.
              </p>
              <h3>Compliance for Producer Companies</h3>
              <p>
                Critical Aspects of Producer Company Operations are listed as
                follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Audit and Reporting:</strong>Producer Companies must ensure rigorous financial management, including annual audits and presenting audited financials and reports at the AGM, with mandatory filings to the Registrar of Companies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Conversion:</strong>Existing cooperative societies in primary production can transition into Producer Companies under the Companies Act 2013.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "} <strong>Taxation:</strong> Producer Companies are subject to standard corporate taxation but may qualify for agricultural activity-related tax benefits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "} <strong>Share Capital Requirements:</strong> A minimum of Rs. 5 lakhs authorised and Rs. 1 lakh paid-up share capital is required, with options to raise further capital per the Companies Act provisions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Operational Objective:</strong>The company's objectives must emphasise the production, handling, and marketing of members' primary produce, including import for member benefits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Leadership and Decision-making:</strong>Managed by a member-elected board, ensuring decisions align with company and member interests.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Profit Sharing:</strong> Dividends can be distributed, capped at 20% of annual profits, in line with shareholdings.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Operational Restrictions:</strong> Speculative activities unrelated to primary production are prohibited.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Structural Flexibility:</strong> Conversion to a regular company is possible under specific conditions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Dissolution/Winding-Up Procedures:</strong> Voluntary or NCLT-ordered winding up follows standard company procedures.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Voting Limitations:</strong> Voting by proxy is disallowed, focusing only on production-related resolutions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regular Meetings: </strong> At least four board meetings yearly, adhering to quorum requirements.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Prudence: </strong> A statutory reserve from net profits is mandated until it matches the paid-up share capital designated for specified uses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expertise Utilization: </strong> Option to hire professional managers with board and member approval.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>NABARD Registration: </strong> Registration with NABARD enables access to financial and technical support for agricultural advancements.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Operational Expansion: </strong> Branches for primary activities are permitted under central management and Companies Act compliance.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Annual Return: </strong> An annual return detailing company operations, membership, and financial health must be filed with the Registrar of Companies.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Seamless Producer Company Registration with LegallensIndia</h3>              
              <p>LegallensIndia offers comprehensive assistance in starting a Producer Company, providing expert support throughout the process. With a dedicated team of professionals, LegallensIndia ensures seamless end-to-end support for Farmer producer company registration process, guiding you through every step, from initial paperwork to final approval. Beyond the registration phase, LegallensIndia offers a range of post-incorporation services designed to help your Producer Company thrive and comply with regulatory requirements, making it a one-stop solution for all your incorporation needs.</p>
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
