import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function CompanyCompliance() {
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
              <h1 className="display-1 text-white mb-3">Company Compliance</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                We provide expert guidance and comprehensive solutions tailored
                to your company's needs, simplifying the compliance process from
                registration to ongoing obligations.
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
                { id: 3, title: "Company Compliance", url: "" },
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
                      <h5 className="card-title">Company Compliance</h5>
                      <p>
                        We provide expert guidance and comprehensive solutions
                        tailored to your company's needs, simplifying the
                        compliance process from registration to ongoing
                        obligations.
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
                Expert Guidance on Compliance for Private Limited Companies
              </h2>
              <p>
                Navigating compliance can be a complex challenge for private
                limited companies in India. Adhering to the comprehensive
                requirements of the Companies Act 2013, including director
                appointments, shareholder meetings, and other regulatory
                obligations, is crucial but can often seem overwhelming.
              </p>
              <p>
                That's where LegallensIndia steps in. We provide expert guidance
                and comprehensive solutions tailored to your company's needs,
                simplifying the compliance process from registration to ongoing
                obligations. Our team of specialists is equipped with in-depth
                knowledge of Indian business laws and regulations, ensuring your
                company meets company compliance requirements. Whether you are a
                startup or an established enterprise, LegallensIndia is your
                partner in simplifying compliance.
              </p>
              <p>
                <strong>
                  <em>
                    Let's make Company compliance hassle-free together! Get
                    Started now!
                  </em>
                </strong>
              </p>
              <h3>Compliance for Private Limited Company</h3>
              <p>
                Compliance refers to adhering to orders, rules, or requests. For
                a private limited company incorporated in India, Compliance with
                the Companies Act 2013, which includes obligations to the
                Registrar of Companies (RoC), is essential for private limited
                companies in India. This legislation governs various aspects,
                including the appointment, qualification, remuneration, and
                retirement of directors and the conduct of board and shareholder
                meetings. Compliance with Registrar of Companies (RoC)
                regulations is mandatory for every private limited company,
                regardless of turnover or capital amount.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Compliance Related to
                      the Registrar - ROC Complaince
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Compliance Beyond the
                      Registrar's Purview - Non-Registrar compliance
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">ROC Compliance for Private Limited Company</h3>
              <p>
                As mentioned above, These are obligations that a company must
                fulfil in accordance with the regulations set by the Registrar
                of Companies (ROC) or equivalent authority. They typically
                involve statutory filings and adherence to the Companies Act
                provisions.
              </p>
              <p>
                Ensuring adherence to ROC compliance is pivotal for companies
                operating in India. ROC Compliance for Private limited company
                can be broadly classified into:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Annual Compliance:</strong> These are the regular,
                      yearly filings and disclosures companies must make,
                      including submitting annual returns and financial
                      statements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Event-Based Compliance:</strong> These are
                      specific compliances that need to be addressed as and when
                      certain events occur within the company, such as changes
                      in the company's management, share capital, or registered
                      office.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Other Compliances:</strong> This category includes
                      a range of other regulatory obligations that might not
                      fall strictly under annual or event-based categories but
                      are essential for maintaining the company's legal status,
                      such as director KYC updates and maintenance of statutory
                      registers.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Annual Compliances for Private Limited Company</h3>
              <p>
                Annual compliances are a critical aspect of corporate governance
                for companies registered in India. Key annual compliances
                include:
              </p>
              <h4>INC-20A: Declaration for Commencement of Business</h4>
              <p>
                For companies registered in India post-November 2019 with a
                share capital, securing a Commencement of Business Certificate
                is a prerequisite before initiating any business activities or
                exercising borrowing powers. This certificate must be acquired
                within 180 days of incorporation by filing Form INC-20A.
              </p>
              <p>
                Failure to obtain this certificate results in penalties, with
                the company facing a fine of Rs. 50,000 and directors being
                charged Rs. 1,000 per day for each non-compliance, underscoring
                the importance of promptly adhering to this regulatory
                requirement.
              </p>
              <h4>Appointment of Auditor and Filing E-form ADT-1</h4>
              <p>
                The first auditor must be appointed within 30 days of
                incorporation and ratified by the shareholders during the first
                Annual General Meeting (AGM). Following the AGM, Form ADT-1
                confirming the auditor's appointment must be filed with the
                Registrar of Companies (ROC) within 15 days.
              </p>
              <h4>Board Meetings</h4>
              <p>
                The first board meeting should be held within 30 days of
                incorporation. Subsequently, companies must hold at least four
                board meetings every year, ensuring that the interval between
                two meetings is at most 120 days.
              </p>
              <p>
                Further, the discussion in the meeting needs to be drafted and
                recorded in the minutes and maintained at the company's
                registered office.
              </p>
              <p>
                A notice should be given seven days in advance about the
                meeting's date and purpose.
              </p>
              <h4>Annual General Meeting (AGM)</h4>
              <p>
                The first AGM should be conducted within nine months from the
                closure of the first financial year. For subsequent years, the
                AGM must be held every year within six months from the end of
                the financial year, ensuring that the gap between two AGMs is at
                most 15 months.
              </p>
              <p>
                AGMs are held for approval of financial statements, declaration
                of dividends, appointment or re-appointment of auditors,
                commission, remuneration of directors, etc.
              </p>
              <p>
                The meeting is held during business hours on a day that is not a
                public holiday. It shall occur at the company's registration or
                the city, village, or town in which the registered office is
                situated.
              </p>
              <h4>Annual ROC Filings</h4>
              <p>
                Private Limited Companies must file annual accounts and returns
                to the companies' registrar, disclosing the details of their
                shareholders, directors, etc.
              </p>
              <p>
                As a part of the annual compliance for private limited company,
                the following forms are to be filed with the ROC:
              </p>
              <h4>AOC-4: Filing of Financial Statements</h4>
              <p>
                This form is for filing the company's financial statements and
                must be submitted within 30 days following the Annual General
                Meeting (AGM).
              </p>
              <h4>MGT-7 - Annual Returns</h4>
              <p>
                Form MGT-7 (Annual returns) must be filed within 60 days of the
                annual general meeting{" "}
              </p>
              <h4>DIR-12: Appointment/Resignation of Directors</h4>
              <p>
                This form pertains to changes in the company's directorship,
                including appointments and resignations, and must be filed
                within 30 days of such changes.
              </p>
              <h4>DIR-3 KYC: Director KYC Submission</h4>
              <p>
                Directors are required to submit their KYC details through Form
                DIR-3 by September 30th each year, provided their Director
                Identification Number (DIN) was allotted by March 31st of that
                year and the status is 'Approved'. Failure to file DIN eKYC
                results in a penalty of Rs. 5000.
              </p>
              <h4>DPT-3: Return of Deposits</h4>
              <p>
                Companies must use this form to report details of deposits and
                other non-deposit receipts annually by June 30th.
              </p>
              <h4>Directors’ Report</h4>
              <p>
                An abridged version covering all required information for small
                companies under Section 134 must be prepared. It should be
                authorized by the Chairperson or at least two directors.
              </p>
              <h4>Maintenance of Statutory Registers and Books of Accounts</h4>
              <p>
                Companies must maintain and regularly update various statutory
                registers and records, including minutes of board meetings and
                AGMs, books of accounts, financial statements, and files with
                the ROC.
              </p>
              <h3>
                Circulation of Financial Statements and Other Relevant Documents
              </h3>
              <p>
                Companies must send approved financial statements, along with
                the Directors' and Auditors' reports, to all members at least 21
                clear days before the AGM.
              </p>
              <p>
                For ready reference, below is a table summarizing the annual
                compliances for private limited company and their respective due
                dates:
              </p>
              <div className="table-responsive">
                <table className="table mb-5 border">
                  <thead>
                    <tr className="text-center lnk">
                      <th className="border">
                        <strong>
                          Annual compliances for Private Limited Company
                        </strong>
                      </th>
                      <th className="border">
                        <strong>Due Date</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">
                        Commencement of Business Certificate (COB)
                      </td>
                      <td className="border">
                        Within 180 days of incorporation
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        Appointment of Auditor and Filing E-form ADT-1
                      </td>
                      <td className="border">Within 15 days of the AGM</td>
                    </tr>
                    <tr>
                      <td className="border">Holding Board Meetings</td>
                      <td className="border">
                        As per the schedule of board meetings
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        Conducting the Annual General Meeting (AGM)
                      </td>
                      <td className="border">
                        Within 9 months from financial year-end
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        INC-20A: Declaration for Commencement of Business
                      </td>
                      <td className="border">
                        Within 180 days of incorporation
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        AOC-4: Filing of Financial Statements
                      </td>
                      <td className="border">Within 30 days of the AGM</td>
                    </tr>
                    <tr>
                      <td className="border">
                        MGT-7A: Annual Returns for Small Companies/OPCs
                      </td>
                      <td className="border">Within 60 days of the AGM</td>
                    </tr>
                    <tr>
                      <td className="border">
                        DIR-12: Appointment/Resignation of Directors
                      </td>
                      <td className="border">
                        Within 30 days of appointment/resignation
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        DIR-3 KYC: Director KYC Submission
                      </td>
                      <td className="border">By September 30th each year</td>
                    </tr>
                    <tr>
                      <td className="border">
                        MGT-14: Filing of Board Resolutions
                      </td>
                      <td className="border">
                        Within 30 days of passing the resolution
                      </td>
                    </tr>
                    <tr>
                      <td className="border">DPT-3: Return of Deposits</td>
                      <td className="border">By June 30th each year</td>
                    </tr>
                    <tr>
                      <td className="border">Directors’ Report</td>
                      <td className="border">
                        At least 21 days before the AGM
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        Maintenance of Statutory Registers and Books of Accounts
                      </td>
                      <td className="border">Throughout the financial year</td>
                    </tr>
                    <tr>
                      <td className="border">
                        Circulation of Financial Statements and Other Relevant
                        Documents
                      </td>
                      <td className="border">
                        At least 21 days before the AGM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>Event-Based Compliances for Private Limited Company</h3>
              <p>
                Besides the annual filings, there are various other compliances
                that need to be compiled with on occurrence of any event in the
                company.
              </p>
              <p>Here are specific instances of such events:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Change in the authorized
                      capital or the paid-up capital of the company.{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Allotment of new shares
                      or transfer new shares{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> giving loans to other
                      companies{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> giving loans to
                      directors{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Appointment of managing
                      or whole-time Director and their payment{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> when a bank account is
                      opened or closed, or there is a change in the signatories
                      of a bank account.{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> if there is an
                      appointment or change of the statutory auditors of the
                      company
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It is necessary to file different forms with the registrar for
                all such events within a specific period. In case of missing out
                on this, additional fees or penalties might be levied. Hence, it
                is necessary to meet such compliances on time.
              </p>
              <h3>Non-Registrar compliance</h3>
              <p>
                These regulatory obligations do not directly involve the ROC but
                are essential for lawful business operations. They may be
                governed by various other regulatory bodies and laws, depending
                on the nature of the business, its size, and the industry it
                operates in. These include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Payment of Periodic Tax Due:</strong> Regular
                      payment of Goods and Services Tax (GST) liability, Tax
                      Deducted at Source (TDS), Tax Collected at Source (TCS),
                      Advance Tax, and Professional Tax (PTax).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Filing of Periodic Returns:</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Monthly/Quarterly/Annual
                      GST Returns
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Quarterly TDS Returns
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of Income Tax
                      Returns
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of Tax Audit
                      Report
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of half-yearly
                      Employees' State Insurance Corporation (ESIC) returns
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of Provident Fund
                      (PF) returns
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of professional
                      tax (PTax) returns
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regulatory Assessment and Reporting:</strong>{" "}
                      Compliance with various regulatory assessments and
                      reporting requirements under different acts of law, such
                      as the Environment Protection Act, Competition Act, and
                      Factory Act.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Non-compliance Penalty</h3>
              <p>
                Non-compliance with the rules and regulations of the Companies
                Act in India can result in penalties for the company and its
                defaulting members. Penalties typically involve fines imposed
                for the duration of the non-compliance. Additionally, delays in
                annual filings may incur additional fees. Therefore, companies
                should fulfil their compliance obligations promptly to avoid
                penalties and financial repercussions.
              </p>
              <h3>Streamline Company Compliance with LegallensIndia</h3>
              <p>
                With LegallensIndia, entrepreneurs can seamlessly complete their
                company compliance requirements. Here's how we can help:
              </p>
              <h4>LEDGERS Compliance Platform</h4>
              <p>
                We offer access to the LEDGERS compliance platform, which is
                designed to streamline compliance tasks. Entrepreneurs can use
                this platform to manage their compliance obligations
                efficiently, track deadlines, generate reports, etc.
              </p>
              <h4>Dedicated Advisor</h4>
              <p>
                Your company will be assigned a dedicated Compliance Manager who
                will be a single point of contact to help you maintain the
                compliance for your company. You can get in touch with your
                Compliance Manager at anytime and get assistance on matters
                related to your Company’s compliance.
              </p>
              <h4>Accounting</h4>
              <p>
                All companies are required to maintain accounts and prepare
                financial statements at the end of each financial year. Our
                Compliance Manager will help your company maintain accounts and
                will prepare the financial statement for your business at the
                end of financial year.
              </p>
              <h4>Secretarial Services</h4>
              <p>
                Companies are required to conduct a minimum of four board
                meetings, an annual general meeting, Directors Report and Annual
                Report each financial year. Our Compliance Manager will help you
                prepare minutes of board meetings and create all secretarial
                reports.
              </p>
              <h4>MCA Annual Return Filing</h4>
              <p>
                Annual General Meeting should be held by a company within 6
                months from the end of that financial year. And MCA annual
                return must be filed on or before September 30th. Our Compliance
                Manager will prepare all the documents and file your company’s
                MCA annual return.
              </p>
              <h4>Income Tax Return Filing</h4>
              <p>
                Income tax return of a company must be filed irrespective of
                income, profit or loss. Hence, even dormant companies with no
                transactions are required to file income tax return each year.
                Our Compliance Manager will prepare all the documents and file
                your company’s income tax return.
              </p>
              <p>
                <em>
                  Ready to streamline compliance effortlessly? Let LegallensIndia
                  be your trusted partner.{" "}
                  <strong>
                    Get started today and experience hassle-free compliance
                    management.
                  </strong>
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
