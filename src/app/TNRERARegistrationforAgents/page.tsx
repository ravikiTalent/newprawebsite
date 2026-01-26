import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TNRERARegistrationforAgents() {
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
              <h1 className="display-1 text-white mb-3">RERA Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                RERA registration, short for Real Estate Regulatory Authority
                registration, is a legal process that real estate developers and
                agents must go through in many countries, including India.
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
                { id: 3, title: "RERA Registration", url: "" },
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
                      <h5 className="card-title">RERA Registration</h5>
                      <p>
                        RERA registration, short for Real Estate Regulatory
                        Authority registration, is a legal process that real
                        estate developers and agents must go through in many
                        countries, including India.
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

              <h2 className="display-4 mb-3">RERA Registration for Agents</h2>
              <p>
                RERA registration, short for Real Estate Regulatory Authority
                registration, is a legal process that real estate developers and
                agents must go through in many countries, including India. It's
                a way to officially register real estate projects and services
                with the government. This RERA agent registration is designed to
                ensure transparency, Accountability, and fairness in the real
                estate industry, ultimately protecting the interests of property
                buyers and promoting ethical practices. This registration of
                real estate agents must be obtained by the professionals to
                conduct the operations legally.
              </p>
              <p>
                By choosing LegallensIndia, you can navigate the RERA
                registration process easily, ensuring compliance with
                transparency, accountability, and efficiency requirements while
                safeguarding your interests in the real estate market.
              </p>
              <p>
                <strong>
                  <em>
                    Contact us today to streamline your RERA registration!
                  </em>
                </strong>
              </p>
              <h3>RERA Registration</h3>
              <p>
                RERA Registration is a mandatory procedure regulated by the Real
                Estate (Regulation &amp; Development) Act. RERA was established
                to address prevalent issues within the real estate sector. It is
                compulsory to obtain RERA agent registration before engaging in
                advertising, marketing, booking, selling, offering for sale, or
                inviting individuals to invest in any plot or building. The
                primary objectives of this registration of real estate agents
                are as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Ensuring Transparency
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Promoting Accountability
                      to mitigate the risk of fraudulent practices
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Safeguarding the
                      interests of both developers and purchasers
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The enforcement of the RERA Act takes place at the state level,
                with responsible authorities overseeing the following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Registration and
                      necessary approvals for commercial properties and
                      residential flats under RERA
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Regulation of sale and
                      purchase transactions involving real estate properties.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Role and RERA Agent Registration Requirements for Real Estate
                Agents
              </h3>
              <p>
                A "real estate agent" is a person who acts as a representative
                and aids others in real estate transactions while earning fees
                for their services. Real estate agents encompass property
                dealers, brokers, and intermediaries. Their primary
                responsibilities revolve around facilitating connections and
                negotiating agreements to lease or sell land, plots, buildings,
                and apartments. In India, the Real Estate Regulatory Authority
                (RERA) Act stipulates that all real estate agents must obtain
                RERA agent registration.
              </p>
              <h3>RERA Agent Registration Applicability</h3>
              <p>
                The applicability of registration of real estate agents is
                outlined as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Promoters, projects, and
                      real estate agents are subject to RERA registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} RERA encompasses
                      commercial, residential, and plotted developments.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Builders planning to
                      develop commercial or residential properties on land
                      exceeding 500 square meters or with more than eight
                      proposed apartments must obtain RERA registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Agents engaged in
                      selling and purchasing properties are obligated to acquire
                      the RERA registration certificate.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} RERA registration agent
                      is mandatory for real estate projects with a total
                      development area exceeding 500 square meters or having
                      more than eight apartments across all project phases.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Real estate agents
                      selling or transferring plots, apartments, or buildings
                      within RERA-registered projects must obtain RERA
                      registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Individuals or entities
                      involved in advertising, marketing, booking, selling, or
                      inviting individuals to purchase plots, apartments, or
                      buildings covered by the RERA Act must hold RERA
                      registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} The RERA registration
                      certificate remains valid throughout the state.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} The applicability of
                      RERA extends to all parties involved in the transaction,
                      and specific property types and their respective area
                      considerations are included in the checklist.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Advantages of RERA Registration for Real Estate Agents
              </h3>
              <p>
                Securing RERA registration provides numerous benefits for real
                estate agents under the RERA Act. Mandatory for agents dealing
                with RERA-registered real estate projects, here are the
                advantages of being a RERA registration agent:
              </p>
              <h4>Legal Authorization</h4>
              <p>
                RERA registration grants legal authorization for advertising,
                marketing, booking, selling, offering for sale, or inviting
                individuals to purchase plots, apartments, or buildings covered
                under the RERA Act. RERA approved agents has various
                possibilities to conduct their businesses legally.
              </p>
              <h4>Enhanced Credibility</h4>
              <p>
                RERA approved agents gain the credibility, instilling confidence
                and trust among prospective buyers and sellers. It signifies
                compliance with regulatory standards, highlighting the agent's
                professionalism.
              </p>
              <h4>Consumer Protection</h4>
              <p>
                RERA registration ensures consumer protection by fostering
                transparency and Accountability in real estate transactions. It
                establishes a framework for fair practices, curbing fraudulent
                activities, and providing avenues for addressing grievances.
              </p>
              <h4>Access to RERA Projects</h4>
              <p>
                Only RERA certified agents can engage with real estate projects
                registered under RERA. RERA registration broadens agents'
                business opportunities by granting access to a wider range of
                projects.
              </p>
              <h4>Compliance with Regulations</h4>
              <p>
                RERA registration guarantees adherence to the regulations
                outlined in the Act. RERA certified agents remain updated on the
                latest rules and obligations, minimizing non-compliance risks
                and associated penalties.
              </p>
              <h4>Professional Recognition</h4>
              <p>
                RERA registration signifies professionalism and dedication to
                the real estate industry. It sets registered agents apart from
                their unregistered counterparts, bolstering their reputation and
                market standing.
              </p>
              <p>
                RERA registration is crucial for real estate agents, fulfilling
                legal obligations and establishing trust, credibility, and
                professionalism in the industry.
              </p>
              <h3>Validity of RERA Registration</h3>
              <p>
                The registration of a real estate agent remains valid for five
                years unless revoked before the expiry date. During this period,
                registered agents must maintain proper books of accounts,
                records, and financial accounts following regulatory
                requirements, ensuring transparency and Accountability in their
                business operations.
              </p>
              <h3>Renewal of License</h3>
              <p>
                Under the provisions of the RERA Act, a real estate agent's
                registration can be renewed through the submission of an
                application, allowing them to extend their license beyond the
                initial registration period.
              </p>
              <h3>Documents Required for RERA Registration</h3>
              <p>
                The documents required for RERA registration depend on whether
                it is for a promoter or a real estate agent. Here is a list of
                required RERA agent registration documents:
              </p>
              <h4>Documents Required for Promoter Registration</h4>
              <p>
                Here are the RERA agent registration documents for promoters:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Identification and
                      address proof of the promoter.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Photographs
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} PAN Number
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Email id
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Commencement Certificate
                      along with the Sanction Plan
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Layout Plan
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Location details of the
                      project
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Proposed course of
                      action for the project's execution
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Availability of parking
                      spaces within the real estate project
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Legal documentation
                      confirming the promoter's ownership of the project's land
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Details of any previous
                      project experience of the promoter, including project
                      name, status, and instances of completion delays
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                Additional Documents Required for Promoters who are Companies
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Certificate of
                      Incorporation
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} CIN / TAN number
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Memorandum of
                      Association and Articles of Association.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} The audited balance
                      sheet of the preceding three financial years, the audited
                      report, and the director's report.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Particulars of directors
                      or any other authorized personnel.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                Documents Required for Real Estate Agent Registration
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Identification and
                      address proof of the applicant.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Photographs
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Particulars of the real
                      estate agent company, including its name, registered
                      address, bylaws, Memorandum of Association (MOA), Articles
                      of Association (AOA), and type of company
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Please note that these requirements are general, and specific
                state regulations may require additional RERA registration
                documents.
              </p>
              <h3>How to get RERA Registration Certificate for Agent?</h3>
              <p>
                The process to obtain RERA registration involves the following
                steps:
              </p>
              <h4>Filing the RERA Registration Form</h4>
              <p>
                The applicant must complete and submit the prescribed
                registration form to the relevant state government. This form
                should include all the necessary details and accompanying
                documents.
              </p>
              <h4>Submission of Required Documents</h4>
              <p>
                The applicant must submit the duly filled application form and
                the required documents. The applicable fees can be paid through
                a demand draft, a banker's cheque drawn on a scheduled bank, or
                online payment methods specified by the real estate regulatory
                authority.
              </p>
              <h4>Verification by the Authority</h4>
              <p>
                The authority will review the submitted application and
                determine whether to accept or reject it within 30 days of
                receiving the application. If there is no response within this
                timeframe, the authority will consider it an implicit
                acceptance.
              </p>
              <h4>Issuance of Registration Certificate</h4>
              <p>
                Upon acceptance of the application, the regulatory authority
                will issue a registration certificate to the promoter or the
                real estate agent. This certificate serves as a confirmation of
                their registration under RERA.
              </p>
              <p>
                This is the step by step procedure of how to get RERA
                registration certificate for agent.
              </p>
              <h3>What Penalties Are Imposed by the RERA Act?</h3>
              <p>
                Under the RERA Act, the following penalties come into effect:
              </p>
              <h4>Penalties for Agent Defaults</h4>
              <p>
                If a real estate agent fails to adhere to any provision of the
                Act, they may be subject to a fine of Rs 10,000 per day, which
                can extend up to 5% of the total cost of the plot, apartment, or
                building.
              </p>
              <h4>Punishment for Unfair Trade Practices</h4>
              <p>
                If an agent engages in unfair trade practices, they may face
                imprisonment for up to 1 year.
              </p>
              <h3>Exemptions from RERA Registration</h3>
              <p>
                Specific projects are not obliged to be registered under the
                RERA Act. These include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Projects with Land Area
                      and Apartment Limits: Projects with land areas not
                      exceeding 500 square meters or apartments not surpassing
                      eight in number.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Projects Involving
                      Renovation, Repair, or Re-development: Projects are
                      limited explicitly to activities such as renovation,
                      repair, or re-development, provided they do not encompass
                      marketing, advertising, selling, or new allotment of any
                      apartment, plot, or building.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Projects with Completion
                      Certificates: Projects for which the promoter has already
                      obtained a completion certificate before the commencement
                      of the RERA Act.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Please be aware that
                      these exemptions may vary from state to state, as
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Individual states may
                      have distinct rules and regulations governing projects
                      that are exempted from RERA registration.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Streamline the RERA Registration Process with LegallensIndia
              </h3>
              <p>
                LegallensIndia can provide valuable assistance in obtaining RERA
                (Real Estate Regulatory Authority) registration in your chosen
                state. With our expertise and knowledge of the regulatory
                requirements, LegallensIndia can guide real estate promoters and
                agents through the complex process of RERA registration.
              </p>
              <p>
                Our services encompass filling out the necessary forms,
                compiling the required documents, and ensuring compliance with
                the RERA rules and regulations of the respective state's RERA
                authority. By entrusting LegallensIndia with the registration
                process, individuals and entities in the real estate sector can
                streamline the registration procedure, saving time and effort
                while ensuring compliance with the law.
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
