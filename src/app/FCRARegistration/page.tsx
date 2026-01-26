import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function FCRARegistration() {
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
              <h1 className="display-1 text-white mb-3">FCRA Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                FCRA registration is essential for organizations receiving foreign donations. Get yours easily with expert assistance from LegallensIndia.
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
                { id: 1, title: "Home", url: "#" },{ id: 2, title: "Registrations", url: "Registrations" },
                { id: 3, title: "FCRA Registration", url: "" },
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
                      <h5 className="card-title">FCRA Registration</h5>
                      <p>FCRA registration is essential for organizations receiving foreign donations. Get yours easily with expert assistance from LegallensIndia.
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

              <h2 className="display-4 mb-3">FCRA Registration</h2>
              <p>
                Before receiving any foreign contribution or donation from
                foreign sources, any individual, association, or company in
                India must obtain registration from the Central Government under
                Section 11 of the Foreign Contribution (Regulation) Act, 2010
                (FCRA). If registration is not secured, the person or entity can
                still accept foreign contributions, but only with prior
                permission from the Central Government. The FCRA registration
                process is managed by the Ministry of Home Affairs, Government
                of India.
              </p>
              <p>
                LegallensIndia FCRA online services help you obtain FCRA online
                registration quickly and seamlessly. Let our experts guide you
                through the process to ensure compliance and hassle-free
                approval and get your FCRA certificate.
              </p>
              <p>
                <strong>
                  Get started with your FCRA registration today with
                  LegallensIndia!
                </strong>
              </p>
              <h3>What is FCRA?</h3>
              <p>
                FCRA full form stands for the Foreign Contributions Regulation
                Act. This legislation oversees the acceptance of foreign funds
                by organisations in India. Under FCRA, any Indian entity must
                register with the appropriate state department before receiving
                financial contributions from abroad. Established in 1976, the
                Foreign Contributions Regulation Act was enacted to regulate the
                inflow of foreign donations to NGOs and charitable
                organisations, ensuring that such funds are used appropriately
                and transparently within the country.
              </p>
              <h3>What is FCRA registration?</h3>
              <p>
                Foreign Contribution Regulation Act (FCRA Act) registration is a
                legal requirement for individuals, associations, or companies in
                India that wish to receive foreign donations or
                contributions.&nbsp;
              </p>
              <h4>Normal Registration</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> This applies to
                      organisations that have been operational for at least
                      three years and have a proven track record of societal
                      contributions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The organisation must
                      have spent at least Rs. 10 lakhs over the past three
                      years, excluding administrative costs. It should be
                      registered under an Indian statute, such as the Societies
                      Registration Act of 1860 or the Indian Trusts Act of 1882.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Prior Permission for FCRA New Registration</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Designed for newly
                      established organisations that may not meet the three-year
                      operational requirement.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The organisation must
                      have a specific project and a commitment from a foreign
                      donor regarding the purpose and amount of the donation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Prior permission is
                      granted on a case-by-case basis, depending on the nature
                      of the project and donor commitment.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Benefits of Registering under the FCRA Act</h3>
              <p>Advantages of acquiring FCRA registration include:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ability to Receive Foreign Donations:</strong>{" "}
                      FCRA registration enables organisations to receive foreign
                      donations for specific cultural, economic, educational,
                      religious, or social programs without government
                      restrictions.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ensures Transparency: </strong>FCRA act
                      registration and obtaining an FCRA license promotes
                      greater transparency by ensuring that NGOs and other
                      trusts involved in social causes properly disclose how
                      foreign funds are raised and spent. Since it is easier to
                      conduct an FCRA registration number search among the
                      people, obtaining an FCRA registration is crucial.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Protection and Tax Benefits: </strong>
                      Organizations registered under FCRA receive government
                      support, including tax exemptions on income, capital
                      gains, and donations, providing significant legal and
                      financial protection.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Support for Social Workers: </strong>FCRA status
                      of registration aids social workers by allowing them to
                      identify and analyse the sources of foreign funds received
                      by their clients, offering more freedom for organisations
                      working towards societal welfare.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Prevention of Fund Misuse:</strong> The FCRA
                      registration system helps the government prevent the
                      misuse of foreign donations, ensuring that funds are used
                      for their intended purposes and in compliance with
                      regulations.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Eligibility Criteria for FCRA Registration</h3>
              <p>
                To be eligible for FCRA Act registration, an association must
                meet the following requirements:
              </p>
              <p>
                <strong>Legal Registration:</strong> The association should be
                registered under an existing statute such as:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Societies Registration
                      Act, 1860
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Indian Trusts Act, 1882
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Section 8 of the
                      Companies Act, 2013 (previously Section 25 of the
                      Companies Act, 1956).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimum Operational History:</strong> The
                      organization must have been in operation for at least
                      three years and engaged in activities benefiting society.
                      The total expenditure in these three years should amount
                      to at least Rs. 10 lakhs, excluding administrative costs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Capital Assets Usage:</strong> If the organisation
                      has invested in capital assets (like land, buildings, or
                      vehicles), the Chief Functionary must provide an
                      undertaking stating that these assets will only be used
                      for FCRA-related activities.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These are the eligibility criteria for securing FCRA
                registration and an FCRA license.
              </p>
              <h3>Eligibility for FCRA Prior Permission</h3>
              <p>
                For newly formed organisations seeking prior permission to
                receive foreign contributions, the following conditions apply:
              </p>
              <p>
                <strong>Legal Registration:</strong> The association should be
                registered under an existing statute, such as:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Societies Registration
                      Act, 1860
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Indian Trusts Act, 1882
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Section 8 of the
                      Companies Act, 2013.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Donor Commitment:</strong> A letter from the donor
                specifying the amount and purpose of the foreign contribution
                must be submitted.
              </p>
              <p>
                <strong>Common Members Between Donor and Recipient:</strong> If
                there are common members between the Indian recipient and the
                foreign donor organisation:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The Chief Functionary of
                      the recipient organisation cannot be part of the donor
                      organisation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> At least 75% of the
                      office-bearers of the Indian organisation must not be
                      members or employees of the foreign donor organisation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> For individual donors,
                      the same conditions apply to ensure the separation of
                      roles and avoid conflicts of interest.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">What Constitutes Foreign Contribution?</h3>
              <p>Foreign contributions include:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Any article (except
                      personal gifts below Rs. 25,000).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Any currency, whether
                      Indian or foreign.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Foreign securities are
                      defined by the Securities Contracts (Regulation) Act,
                      1956, or the Foreign Exchange Management Act, 1999.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Interest accrued on foreign contributions or income derived from
                foreign contributions also counts as foreign contributions.
              </p>
              <h3>Who is Considered a Foreign Source?</h3>
              <p>A foreign source includes:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Any foreign government
                      or its agency.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Any international agency
                      (excluding the UN, World Bank, IMF, etc.).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Foreign companies and
                      multinational corporations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Foreign citizens,
                      trusts, foundations, and associations.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Conditions for Registration or Prior Permission:</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The organisation or
                      individual applying must not be fictitious or benami.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> They should not have
                      been involved in forced religious conversions, communal
                      disharmony, or misuse of funds.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The applicant should not
                      advocate violent methods or engage in sedition.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The foreign contribution
                      must not jeopardise India’s sovereignty, integrity,
                      security, public interest, or elections.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The contribution should
                      not incite an offence or endanger anyone's safety.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Additionally, applicants should have a reasonable track record
                of contributing to society and must have prepared a
                well-structured project if applying for prior permission.
              </p>
              <h3>Mandatory Requirements for NGO FCRA Registration</h3>
              <p>
                To successfully apply for NGO FCRA registration, an organisation
                must meet the following mandatory requirements:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Registration:</strong> The NGO must be
                      registered under an applicable statute such as the
                      Societies Registration Act, 1860, Indian Trusts Act, 1882,
                      or Section 8 of the Companies Act, 2013.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>NGO Darpan ID:</strong> The NGO must be registered
                      on the NITI Aayog portal and obtain an NGO Darpan ID,
                      which is required to complete the FCRA registration forms.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>FCRA Bank Account:</strong> The organisation must
                      open a dedicated FCRA bank account. This account is
                      exclusively for receiving foreign contributions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Aadhaar for Key Officials:</strong> The Aadhaar
                      number of all key office bearers must be submitted with
                      the application. For foreign members managing the NGO in
                      India, a passport or OCI card is required.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">FCRA Registration Documents Required</h3>
              <p>
                To register your NGO under the Foreign Contribution Regulation
                Act (FCRA Act), different sets of documents are required
                depending on whether you are applying for Normal FCRA
                Registration or Prior Permission FCRA Registration.
              </p>
              <h4>Normal FCRA Registration</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Registration Certificate
                      of Association
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proof of your NGO's
                      registration under applicable acts (Societies Registration
                      Act, Trust Act, etc.).&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Memorandum of
                      Association/Trust Deed
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Legal documents
                      outlining the objectives, rules, and structure of the NGO.
                      Audited Financial Statements for the Last 3 Years
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Financial reports
                      certified by a qualified Chartered Accountant to show the
                      organization's financial health and accountability.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Activity Report for the
                      Last 3 Years
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A summary of the NGO's
                      activities and achievements in the past three years.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> NGO Darpan ID from NITI
                      Aayog Portal
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The NGO must be
                      registered on the NITI Aayog portal and obtain a Darpan
                      ID.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhaar Card of All
                      Office Bearers
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhaar numbers of the
                      key officials in the organization.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Prior Permission FCRA Registration</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Registration Certificate
                      of Association
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Required proof of the
                      NGO's registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Memorandum of
                      Association/Trust Deed
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A formal document
                      outlining the objectives and structure of the NGO.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> NGO Darpan ID from NITI
                      Aayog Portal
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Mandatory registration
                      and ID from the NITI Aayog portal.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhaar Card of All
                      Office Bearers
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhaar numbers of key
                      officials involved in the organization.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Commitment Letter from
                      Donor Organization and Agreement
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A letter specifying the
                      donor's commitment to funding the project, along with the
                      agreement details.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Project Report
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Detailed report of the
                      project for which foreign contributions (FC) will be
                      received.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Once you have gathered all the required documents, you can begin
                to undertake the FCRA registration process, which involves
                creating the FCRA online login, submitting the relevant
                documents, and obtaining the FCRA registration certificate.
              </p>
              <h3>Renewal of FCRA Registration</h3>
              <p>
                FCRA registration is valid for five years, and organizations
                must apply for FCRA renewal before its expiry to continue
                receiving foreign contributions. The FCRA renewal process is
                overseen by the Ministry of Home Affairs (MHA), and it ensures
                that the organization remains compliant with FCRA Act
                regulations. Ensure that the FCRA renewal status is tracked to
                determine whether the validity is extended or not.
              </p>
              <h3>FCRA Online Registration Process: Step-by-Step Guide</h3>
              <p>
                The FCRA registration process can be complex, but by following
                the steps carefully, you can successfully register your NGO to
                receive foreign contributions. Ensure to conduct the FCRA
                registration number search to get an overall sense. Here is a
                detailed step-by-step guide for the FCRA online registration
                process:&nbsp;
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Visit the FCRA Portal:</strong> Go to the FCRA
                      online portal provided by the Ministry of Home Affairs
                      (MHA). The official FCRA website is where all registration
                      procedures are initiated.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Create an FCRA Login ID:</strong> On the portal,
                      click on "Sign Up" to create an FCRA login ID and
                      password. Once your account is created, a confirmation
                      message will appear. Log in to the FCRA portal using your
                      newly created FCRA login ID and password.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>FCRA online application for registration:</strong>{" "}
                      After logging in using the FCRA online login ID, choose
                      the relevant registration option from the dropdown list
                      under "I am applying for." Select from:
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>FC-3A for FCRA Registration.</li>
                            <li>FC-3B for Prior Permission Registration.</li>
                            <li>FC-3C for FCRA Renewal.</li>
                            <li>FC-4 for FCRA Annual Return Filing.</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fill Out the FC-3 Form: </strong>Based on your
                      selected type of registration (FC-3A, FC-3B, FC-3C), fill
                      out the corresponding FC-3 form. Provide the necessary
                      information, including association details, Darpan ID (if
                      available), registration number, and nature of the
                      association.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Enter Association and Executive Committee Details:
                      </strong>{" "}
                      Fill in details about the association, such as:
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>Association Address</li>
                            <li>Registration Number</li>
                            <li>Registration Date</li>
                            <li>Main Object and Nature of the Association</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Next, enter details of the Executive Committee, including key
                functionaries. You can add, delete, or edit these details
                through the “Add details of Key Functionary” option.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Provide Bank Details: </strong>Enter the required
                      FCRA bank account details, including:
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>Bank Name</li>
                            <li>Account Number</li>
                            <li>IFSC Code</li>
                            <li>Bank Address</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The FCRA account must be opened for receiving foreign donations.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Upload Required Documents: </strong>Upload all the
                      necessary documents in PDF format as per the size and
                      format guidelines provided on the MHA portal.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Finalise the Application:</strong> Enter the place
                      and date in the designated fields. Review the details
                      carefully and click the Final Submission button to submit
                      your application.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Make Payment: </strong>After submission, complete
                      the registration by making the required online payment.
                      The government fees will vary depending on the type of
                      FCRA online registration (normal, prior permission, or
                      renewal). Once the payment is made, no further changes can
                      be made to the form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Confirmation and Registration:</strong> Once the
                      payment is processed, your application is considered
                      submitted. You will receive a confirmation, and the FCRA
                      Act registration process is complete. You can now track
                      the FCRA application status on the portal. You can figure
                      out the processing level of your registration process
                      through FCRA application status. You can track the FCRA
                      renewal status as well if you are undergoing the FCRA
                      renewal process.&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>
                  <em>
                    Our LegallensIndia FCRA online services helps you streamline
                    the FCRA registration process with expert guidance!
                  </em>
                </strong>
              </p>
              <h3>
                FCRA Annual Return and Quarterly Return Filing for NGOs
                Receiving Foreign Donations
              </h3>
              <p>
                If your NGO or trust is registered and receives foreign
                donations, you are required to file an FCRA annual return with
                the Ministry of Home Affairs. Additionally, if your total
                foreign receipts exceed Rs. 1 crore in a financial year, you
                must also file a quarterly return. The annual return must cover
                the fiscal year (April 1st - March 31st) and be submitted within
                nine months after the fiscal year ends, by December 31st at the
                latest. The return must include a certified balance sheet and
                statement of receipts and payments from a Chartered Accountant.
                All returns must be filed using Form FC-4. The FCRA online
                portal provides a convenient way to submit these returns.
              </p>
              <h3>FCRA Bank Account</h3>
              <p>
                An FCRA Bank Account is a dedicated account required for all
                foreign contributions received by organizations under the
                Foreign Contribution Regulation Act (FCRA).&nbsp; It is
                functioning based on the FCRA account RBI guidelines. The
                process of opening an FCRA account typically takes seven days
                from the application date.
              </p>
              <p>
                Existing FCRA-registered organizations are prohibited from
                receiving foreign donations in any account other than the
                designated FCRA account. New applicants, however, are required
                to open their FCRA account after receiving their FCRA
                certificate from the Ministry of Home Affairs.
              </p>
              <p>
                This FCRA account can only be used to receive foreign
                contributions. No domestic funds or other non-foreign
                transactions are allowed in this account.
              </p>
              <h3>Simplify FCRA Registration with LegallensIndia!</h3>
              <p>
                Registering under FCRA can be a complex process, but
                LegallensIndia makes it simple and hassle-free. Our expert team
                guides you through each step, ensuring all required
                documentation is accurately prepared and submitted and tracking
                registration and FCRA renewal status. Whether you're applying
                for normal FCRA registration or prior permission, our FCRA
                online services help you handle the entire process from start to
                finish, helping you meet all legal requirements and receive
                foreign contributions without delay. We make the FCRA
                registration process easier, track the FCRA application status
                and get you the certificate. Choose LegallensIndia for a seamless
                FCRA registration experience and confidently focus on your
                organization's mission.
              </p>
              <h3>
                <strong></strong>
              </h3>
              <p>
                <strong>
                  <em>Start your FCRA registration with LegallensIndia now!</em>
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
