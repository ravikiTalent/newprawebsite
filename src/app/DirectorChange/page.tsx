import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DirectorChange() {
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
              <h1 className="display-1 text-white mb-3">Director Change</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Resignation of a Director from the Board of Directors of a
                Company with resigning Directors' consent.
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
                { id: 2, title: "MCA Services", url: "MCAServices" },
                { id: 3, title: "Director Change", url: "" },
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
                      <h5 className="card-title">Director Change</h5>
                      <p>
                        Resignation of a Director from the Board of Directors of
                        a Company with resigning Directors' consent.
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

              <h2 className="display-4 mb-3">Addition of New Directors</h2>
              <p>
                In a Private Limited Company, directors are pivotal to the
                business's seamless operation and strategic direction, managing
                daily activities and making crucial decisions that affect the
                company's future, particularly concerning shareholder
                investments. As businesses evolve and expand, a need may arise
                to appoint additional directors to meet the growing demands of
                the company or to satisfy shareholder expectations. This process
                must be carried out strictly to the regulations outlined in the
                Companies Act of 2013 to ensure the company remains compliant
                and maintains proper governance.
              </p>
              <p>
                LegallensIndia provides expert assistance in navigating the
                complexities of director appointments, ensuring that your
                company meets its strategic needs and remains compliant with all
                legal requirements. Our professional guidance is invaluable for
                companies looking to expand their board of directors with the
                process of appointment of director while ensuring adherence to
                the statutory framework
              </p>
              <h3>Who Is a Director in a Company?</h3>
              <p>
                A director in a company serves as a key figure appointed by
                shareholders to oversee the company's operations, in alignment
                with the guidelines set out in the Memorandum of Association
                (MOA) and Articles of Association (AOA). Since a company is a
                legal entity and cannot act independently, it operates through
                natural persons, namely the directors. These directors form the
                Board of Directors, entrusted with the company's overall
                management.
              </p>
              <p>
                Directors are particularly crucial in a Private Limited Company,
                where they are responsible for daily decision-making and
                managing the company's affairs. Shareholders entrust directors
                with the significant task of managing their investments
                efficiently, and the shareholders' needs and demands often drive
                the process of appointment of director.
              </p>
              <h3>Types of Directors of a Company</h3>
              <p>
                Directors within a company are differentiated into several
                categories, reflecting their distinct functions and duties. The
                principal types are:
              </p>
              <h4>Executive Directors</h4>
              <p>
                {" "}
                These individuals are deeply engaged in the company's routine
                operations and management. They typically occupy specific
                executive positions like Chief Executive Officer (CEO), Chief
                Financial Officer (CFO), or Chief Operating Officer (COO),
                playing a pivotal role in the strategic and operational
                decisions of the company.
              </p>
              <h4>Non-Executive Directors</h4>
              <p>
                In contrast to executive directors, non-executive directors do
                not partake in the company's day-to-day management. Their role
                is more about providing objective oversight, contributing to the
                board's decision-making processes, and bringing in external
                perspectives and expertise.
              </p>
              <h4>Independent Directors</h4>
              <p>
                Falling under the broader category of non-executive directors,
                independent directors are distinguished by their lack of
                material or pecuniary relationships with the company or its
                management, ensuring their ability to make unbiased judgments.
                Their fundamental duty is to protect the interests of the
                shareholders, ensuring transparency and fairness in the
                company's governance practices.
              </p>
              <h3>Appointing Directors in a Private Limited Company</h3>
              <p>
                In a Private Limited Company, the law mandates a minimum of two
                directors and permits up to fifteen. Should the company require
                more than this cap, it can appoint extra directors by passing a
                special resolution, which requires the approval of more than 75%
                of voting shareholders. Sometimes, a company may need to augment
                its board of directors to cater to evolving business
                requirements or to address shareholder expectations.
                Nonetheless, every appointment of a director must be conducted
                following the stipulations of the Companies Act 2013 to maintain
                legal compliance.
              </p>
              <h3>
                Key Sections of the Companies Act, 2013 for Director Appointment
              </h3>
              <p>
                {" "}
                The Companies Act of 2013 encompasses essential regulations
                concerning appointing, supplementing, and modifying a company's
                directors. Notable sections include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 149:</strong> Outlines the Board of
                      Directors' composition requirements, such as the minimum
                      and maximum number of directors, the necessity of having
                      at least one female director, and the inclusion of a
                      resident director.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 152:</strong> Governs the appointment
                      procedure for directors, which is usually carried out
                      during the company's general meeting, and emphasises the
                      need for a Director Identification Number (DIN).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 161:</strong> Offers directives on the
                      appointment of additional, alternate, and nominee
                      directors by the Board.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 164:</strong> Enumerates the conditions
                      that disqualify an individual from serving as a director.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Reasons for Adding or Changing Directors in a Company</h3>
              <p>
                Companies may find several compelling reasons to modify their
                board composition or introduce new directors:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Incorporating Fresh Expertise:</strong> With
                      growth, a company may need to infuse new skills and
                      perspectives into its board to navigate the challenges and
                      opportunities accompanying expansion.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Maintaining Strategic Control:</strong> By adding
                      more directors, shareholders can distribute operational
                      tasks more broadly, enabling them to focus on strategic
                      oversight without diluting their ownership stakes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Revitalizing Board Performance:</strong> When
                      current directors cannot perform optimally due to personal
                      circumstances such as health issues or retirement,
                      introducing new directors can help sustain the board's
                      effectiveness.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Compliance:</strong> To adhere to the
                      mandates of the Companies Act 2013, companies must ensure
                      they have the requisite number of directors. Due to
                      unforeseen circumstances, new appointment of director
                      become necessary to meet these statutory obligations if
                      the board's size falls below the mandated minimum.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Qualifications for Director in a Company</h3>
              <p>
                {" "}
                For an individual to qualify as a director in a company, they
                must fulfil certain conditions:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Age Requirement:</strong> The candidate must be 18
                      or older since minors are legally excluded from serving as
                      directors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance with the Companies Act:</strong> The
                      individual must not be disqualified by any of the
                      conditions outlined in the Companies Act 2013.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Consensual Agreement:</strong> The appointment
                      must be a collective decision, receiving approval from the
                      Board of Directors, the shareholders, and the individual
                      being proposed for the directorial role.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for Director Appointment</h3>
              <p>
                The appointment of a director necessitates the submission of
                specific documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN Card:</strong> The director's Permanent
                      Account Number card is mandatory.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proof of Identity:</strong> Acceptable
                      identification includes Voter ID, Driving License, Aadhaar
                      Card, and similar documents.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Residential Proof:</strong> Documentation
                      confirming the director's residence, like utility bills or
                      rental agreements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Recent Passport-Sized Photo:</strong> A current
                      passport-sized photograph of the prospective director.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Digital Signature Certificate (DSC):</strong>{" "}
                      Required for the electronic signing of documents.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Procedure for Director Appointment or Addition in a Company
              </h3>
              <p>
                The procedure for appointing or adding a director to a company
                involves several steps:
              </p>
              <h4>Step 1: Reviewing the Articles of Association (AOA)</h4>
              <p>
                Start by examining the company's AOA to verify if a clause
                allows for the appointment or addition of directors. If such a
                clause is missing, the AOA must be amended to include it.
              </p>
              <h4>Step 2: Resolution at a General Meeting</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Annual General Meeting (AGM):</strong> Typically,
                      director appointments are made during the AGM. If an
                      appointment is needed at another time, it necessitates an
                      Extraordinary General Meeting (EGM).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Convening an EGM:</strong> To call an EGM, the
                      board first needs to meet and pass a resolution for the
                      EGM. At the EGM, another resolution is passed to appoint
                      the new director. This resolution must be filed with the
                      Registrar of Companies on Form MGT-14 within 30 days of
                      passing.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Step 3: Application for DIN and DSC</h4>
              <p>
                The individual chosen for directorship must obtain a Digital
                Signature Certificate (DSC) and a Director Identification Number
                (DIN) if they don't already have them. The nominee must then
                furnish the DIN to the company along with a declaration stating
                they are not disqualified from being a director under the
                Companies Act, 2013.
              </p>
              <h4>Step 4: Obtaining Director's Consent (Form DIR-2)</h4>
              <p>
                The proposed director must officially agree to their appointment
                by providing their consent through Form DIR-2. This form serves
                as a formal acknowledgement of their willingness to take on
                directorial responsibilities.
              </p>
              <h4>Step 5: Issuing the Letter of Appointment</h4>
              <p>
                Upon completing all regulatory requirements, the company issues
                a formal Letter of Appointment to the new director. This
                document outlines the director's responsibilities, role, and
                terms of compensation, among other relevant details.
              </p>
              <h4>Step 6: Regulatory Filings with the ROC</h4>
              <p>
                Post the director's appointment, the company must file the
                director's consent (Form DIR-2) and the particulars of the
                appointment (Form DIR-12) with the Registrar of Companies (ROC).
                This filing should occur within 30 days of the director's
                appointment to ensure regulatory compliance.
              </p>
              <h4>Step 7: Updating the Register of Directors</h4>
              <p>
                The company needs to update its Register of Directors and Key
                Managerial Personnel with the new director's details, keeping an
                accurate and current record of its board members.
              </p>
              <h4>Step 8: Updating Regulatory and Tax Records</h4>
              <p>
                The final step involves updating the director's details with the
                GST Network and other relevant tax authorities. This step is
                crucial for maintaining compliance with tax regulations and
                ensuring that all company records are accurate and up-to-date.
              </p>
              <p>
                Each of these steps requires careful attention to detail and
                adherence to the legal requirements set forth by the Companies
                Act 2013 to ensure that the appointment of a director is valid
                and compliant with all regulatory obligations.
              </p>
              <h3>
                Simplify Director Appointments for Businesses with LegallensIndia
              </h3>
              <p>
                LegallensIndia provides end-to-end support, starting from
                reviewing the Articles of Association (AOA) to ensure they
                permit the addition of directors to guide companies through the
                process of holding general meetings, whether it's an Annual
                General Meeting (AGM) or an Extraordinary General Meeting (EGM),
                for the process of appointment of directors. LegallensIndia also
                assists in the application process for obtaining a Director
                Identification Number (DIN) and a Digital Signature Certificate
                (DSC) for the appointee, submitting the necessary consent forms,
                and filing the required documents with the Registrar of
                Companies (ROC). Our expertise ensures that the entire process
                complies with the Companies Act of 2013, making the appointment
                of directors seamless and legally sound for businesses in India.
              </p>
              <p>
                <em>
                  Ready to streamline your director appointment process? Connect
                  with LegallensIndia experts today and ensure seamless, legally
                  compliant board expansions for your business.
                </em>
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
