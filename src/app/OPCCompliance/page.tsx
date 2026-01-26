import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function OPCCompliance() {
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
              <h1 className="display-1 text-white mb-3">OPC Compliance</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                One Person Company (OPC) is a unique business structure
                introduced under the Companies Act, 2013, allowing a single
                individual to incorporate and manage a private limited company.
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
                { id: 3, title: "OPC Compliance", url: "" },
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
                      <h5 className="card-title">OPC Compliance</h5>
                      <p>
                        One Person Company (OPC) is a unique business structure
                        introduced under the Companies Act, 2013, allowing a
                        single individual to incorporate and manage a private
                        limited company.
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

              <h2 className="display-4 mb-3">OPC Compliance</h2>
              <p>
                A One Person Company (OPC) is a unique business structure
                introduced under the Companies Act, 2013, allowing a single
                individual to incorporate and manage a private limited company.
                Defined under Section 2(62), an OPC has only one member and
                shareholder. Though it offers the flexibility of sole ownership,
                an OPC is subject to similar compliance requirements as a
                private limited company.
              </p>
              <p>
                To maintain its legal standing and avoid penalties, an OPC must
                adhere to specific annual compliance obligations prescribed by
                the Ministry of Corporate Affairs (MCA) and other applicable
                authorities.
              </p>
              <p>
                Stay ahead on compliance-let our experts manage it for you.
                Partner with LegallensIndia for timely, accurate, and hassle-free
                OPC annual compliance services.
              </p>
              <h3>Compliance Requirements for OPC</h3>
              <p>
                A One Person Company (OPC), though owned and managed by a single
                individual, is treated as a separate legal entity under the
                Companies Act, 2013 and is required to meet certain annual
                compliance obligations. These include the filing of audited
                financial statements (Form AOC-4) and the annual return (Form
                MGT-7A) with the Ministry of Corporate Affairs (MCA),
                irrespective of turnover. Additionally, the OPC must ensure
                timely income tax return filing and, if registered under GST,
                comply with relevant GST return filings. Non-compliance may lead
                to penalties, disqualification of the director, and even
                strike-off of the company.
              </p>
              <h3>Importance of OPC Annual Compliance</h3>
              <p>
                Running a One-Person Company is not a simple task, as many
                individuals starting a company may not be aware of the mandatory
                compliance for OPC that need to be fulfilled. Failing to comply
                with these regulations can lead to hefty penalties and may
                result in the company and its directors facing scrutiny and
                further investigation.
              </p>
              <p>
                It is worth noting that One-Person Companies are required to
                perform annual OPC compliance requirements from the time of
                their incorporation, and non-compliance can create various
                hindrances for the company in the form of penalties and fines.
                Therefore, it is essential to be aware of and comply with the
                applicable OPC annual compliance regulations to avoid such
                situations. Additionally, One-Person Companies must provide
                accurate financial information to shareholders and investors.
              </p>
              <h3>Benefits of OPC MCA Compliances</h3>
              <p>
                One-Person Company (OPC) compliance has several benefits that
                include limited liability protection, increased opportunities to
                get funds from financial sponsors, and continuous existence.
              </p>
              <p>
                The following are some of the advantages of performing annual
                compliance for OPCs:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Easy to raise funds from financial investors:&nbsp;</b>
                      Proper OPC annual compliances, including for OPCs, enhance
                      the confidence of financial investors and makes it easy to
                      raise funds from them.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Maintains active status</b>: Timely and proper OPC
                      Compliance helps maintain the company's active status.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Accurate data collection</b>: Annual compliance for
                      OPCs ensures that the data collected for the OPC annual
                      compliances are accurate and true.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Avoids hefty penalties:</b> Non-compliance often
                      results in hefty penalties and fines. Proper annual OPC
                      compliance requirements help in avoiding these penalties.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                OPC Compliance Checklist- Statutory &amp; Other Regulatory
                Requirements&nbsp;
              </h3>
              <p>
                One Person Company (OPC) must comply with various statutory and
                regulatory requirements to remain in good legal standing.
              </p>
              <h4>Board Meeting Requirement for OPC</h4>
              <p>
                As per Section 173(5) of the Companies Act, 2013, a One Person
                Company (OPC) with more than one director must hold at least one
                Board Meeting in each half of the calendar year, with a minimum
                gap of 90 days between the two meetings.
              </p>
              <p>
                However, if the OPC has only one director, the provisions
                related to Board Meetings under Sections 173 and 174, including
                quorum requirements, do not apply. In such cases, no Board
                Meeting is required.
              </p>
              <p>
                This exemption simplifies compliance for single-director OPCs,
                but if additional directors are appointed, the regular Board
                Meeting provisions must be followed.
              </p>
              <h4>Appointment of Auditor for OPC</h4>
              <p>
                As per Section 139 of the Companies Act, 2013, every One Person
                Company (OPC) is required to appoint a Statutory Auditor, who
                must be a qualified Chartered Accountant (individual or firm).
                The auditor is responsible for conducting an audit of the OPC’s
                financial statements and issuing an audit report annually.
              </p>
              <p>
                This audit is mandatory, regardless of the company’s turnover.
                Additionally, the provisions related to the rotation of auditors
                under Section 139(2) do not apply to OPCs.
              </p>
              <h4>
                Disclosure of Interest and Declaration of Non-Disqualification
              </h4>
              <p>
                As per Section 184(1) of the Companies Act, 2013, every director
                of a One Person Company (OPC) is required to disclose their
                interest in other entities in the first Board Meeting of the
                financial year, using Form MBP-1. This disclosure includes
                shareholding, directorships, or any other interest in other
                companies, LLPs, or firms.
              </p>
              <p>
                In addition, under Section 164(2), every director must also file
                Form DIR-8, declaring that they are not disqualified from acting
                as a director. This declaration is required to be submitted
                annually.
              </p>
              <h4>ROC Filing for OPC</h4>
              <p>
                Every One Person Company (OPC) is required to file the following
                annual forms with the Registrar of Companies (RoC):
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Form AOC-4 (Financial Statements): </b>Must be filed
                      within 180 days from the end of the financial year
                      (generally by 27th September, if the financial year ends
                      on 31st March).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Form MGT-7A (Annual Return): </b>A simplified form for
                      OPCs, this must be filed within 60 days from the date of
                      signing the financial statements.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">KYC of Director (DIR-3 KYC Filing)</h4>
              <p>
                Every director who holds a Director Identification Number (DIN)
                as on 31st March of a financial year is required to complete DIN
                KYC for that year by filing Form DIR-3 KYC (for first-time
                filers) or DIR-3 KYC-WEB (for those who have already filed
                previously).
              </p>
              <p>
                Due Date: On or before 30th September of the immediately
                following financial year.
              </p>
              <h3>
                <span>Post-Incorporation Compliance for OPC</span>
              </h3>
              <p>
                Once an OPC (One Person Company) is incorporated, it must
                complete the following initial compliance requirements to
                commence business operations:
              </p>
              <h4>Opening a Bank Account</h4>
              <p>
                An OPC must open a current bank account in the name of the
                company to conduct all financial transactions
              </p>
              <h4>
                Deposit of Share Capital &amp; Filing of Form INC-20A
                (Commencement of Business)
              </h4>
              <p>
                As per Section 10A of the Companies Act, 2013, every company,
                including a One Person Company (OPC) having a share capital, is
                required to:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Deposit the subscription
                      money as stated in the Memorandum of Association into the
                      company's bank account within 180 days from the date of
                      incorporation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> File Form INC-20A
                      (Declaration of Commencement of Business) with the
                      Registrar of Companies (RoC) within the same 180-day
                      period.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                This declaration must be digitally signed by a director and
                certified by a practising professional (CA, CS, or CMA). The
                company cannot commence any business or borrow funds until Form
                INC-20A is filed and approved.
              </p>
              <h4>Registered Office and Filing of Form INC-22</h4>
              <p>
                As per the Companies Act, 2013, every One Person Company (OPC)
                must have a registered office capable of receiving official
                communications and notices.
              </p>
              <p>
                If the details of the registered office are not provided at the
                time of incorporation, the OPC must file Form INC-22 with the
                Registrar of Companies within 30 days from the date of
                incorporation, along with the prescribed fee and required
                documents (e.g., utility bill, NOC from owner, rent agreement,
                etc.).
              </p>
              <p>
                However, if the registered office address and relevant documents
                were already submitted during incorporation via SPICe+, then
                filing Form INC-22 is not required separately.
              </p>
              <h4>
                Display of Company Name and Details (Name Affixing Requirement)
              </h4>
              <p>
                As per Section 12 of the Companies Act, 2013, every One Person
                Company (OPC) must display the following details at its
                registered office and at every place where it carries on
                business:
              </p>
              <p>
                Full name of the company, with “(OPC) Private Limited” clearly
                mentioned.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Registered office
                      address
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Corporate Identification
                      Number (CIN)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Telephone number, email
                      ID, and website address (if any)
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These details must be painted or affixed in a conspicuous
                position and in legible letters in English or the local
                language.
              </p>
              <p>
                Additionally, in all official documents, letters, invoices, and
                publications, the company must write its name with the
                suffix:&nbsp;
                <span>
                  “(OPC) Private Limited” – clearly identifying it as a One
                  Person Company.
                </span>
              </p>
              <h4>Appointment of Statutory Auditor (Form ADT-1)</h4>
              <p>
                As per Section 139 of the Companies Act, 2013, every OPC is
                required to appoint a Statutory Auditor within 30 days from the
                date of incorporation, since it is exempt from holding an
                AGM.&nbsp;
              </p>
              <p>
                The appointment must be made by the Board of Directors and filed
                with the Registrar using Form ADT-1 within 15 days of the
                appointment.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The auditor can be
                      appointed for a term of up to five years.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The provisions of
                      auditor rotation do not apply to OPCs.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Disclosure of Director’s Interest (Form MBP-1)</h4>
              <p>
                As per Section 184(1) of the Companies Act, 2013, every director
                of a One Person Company (OPC) is required to:
              </p>
              <p>
                Disclose their interest in other companies, LLPs, firms, or any
                entities where they hold directorships, partnerships, or
                shareholdings.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> This disclosure must be
                      made using Form MBP-1 at the first Board Meeting of the
                      financial year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Any changes in such
                      interests must also be disclosed at the first Board
                      Meeting held after the change.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Maintenance of Statutory Registers and Minutes Book</h4>
              <p>
                Every One Person Company (OPC) is required to maintain the
                following statutory registers and records as prescribed under
                the Companies Act, 2013 and relevant rules:
              </p>
              <p>Mandatory Statutory Registers include:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Register of Members
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Register of Directors
                      and Key Managerial Personnel (KMP)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Register of Shares and
                      Share Certificates (if applicable)
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Additionally, the OPC must maintain:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A Minutes Book for
                      recording the proceedings of Board Meetings (even if only
                      one director exists).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Resolutions passed by
                      the sole member (as per Section 122 of the Act) must also
                      be recorded and signed by the member/director.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">E-Form MSME-I (Half-Yearly Return for Outstanding Dues)</h4>
              <p>
                As per the provisions of the MSME Development Act, 2006 and the
                corresponding MCA notification, every One Person Company (OPC)
                that has outstanding payments due to Micro or Small Enterprises
                (registered under UDYAM) exceeding 45 days from the date of
                acceptance or deemed acceptance of goods/services must file:
              </p>
              <p>Form MSME-I on a half-yearly basis:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> April to September: File
                      by 31st October
                    </li>
                    <li>
                      <i className="uil uil-check"></i> October to March: File
                      by 30th April
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The form must disclose details of all such delayed payments,
                along with reasons for the delay.
              </p>
              <p>
                <b>Important: </b>Filing is mandatory even if there is only one
                default in the reporting period.&nbsp;&nbsp;
              </p>
              <h4>
                E-Form DPT-3 (Return of Deposits / Outstanding Loan Details)
              </h4>
              <p>
                As per Rule 16 of the Companies (Acceptance of Deposits) Rules,
                2014, every One Person Company (OPC) is required to file Form
                DPT-3 if it has any outstanding loans or borrowings (secured or
                unsecured) as on 31st March of the financial year, regardless of
                whether they qualify as deposits or not.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Must be filed annually,
                      by 30th June of the following financial year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Applies even if the loan
                      is from directors, shareholders, or related parties.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing is mandatory even
                      if the amount is not treated as a deposit under the Act
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Other Compliance (Tax &amp; Operational Requirements)</h3>
              <p>
                In addition to statutory filings under the Companies Act, a One
                Person Company (OPC) must comply with various tax and
                operational requirements to ensure full regulatory
                adherence.&nbsp;
              </p>
              <h4>Filing of Income Tax Return (ITR)</h4>
              <p>
                Every One Person Company (OPC) is required to file its Income
                Tax Return (ITR) annually under the provisions of the Income Tax
                Act, 1961, regardless of the amount of turnover or profit.
              </p>
              <h4>GST Compliance for OPC</h4>
              <p>
                An OPC registered under GST must file regular GST returns either
                monthly or quarterly, depending on its annual turnover. If the
                turnover is up to ?5 crores, returns can be filed quarterly
                under the QRMP scheme; otherwise, monthly filing is mandatory.
                Additionally, if the turnover exceeds ?2 crores, the OPC may be
                required to file an annual GST return. Maintaining accurate
                records and filing returns on time is essential to avoid
                penalties and ensure smooth compliance.
              </p>
              <h3>OPC Compliance Calendar &amp; Checklist&nbsp;</h3>
              <p>
                For your quick reference on OPC compliance, we have attached the
                table below:
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <p>
                        <b>S. No.</b>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <b>Compliance Item</b>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <b>Applicable Form / Action</b>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <b>Due Date / Timeline</b>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <b>Remarks / Applicability</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>1</p>
                    </td>
                    <td className="border">
                      <p>Board Meetings</p>
                    </td>
                    <td className="border">
                      <p>-</p>
                    </td>
                    <td className="border">
                      <p>1 per half year (if &gt;1 director)</p>
                    </td>
                    <td className="border">
                      <p>Not applicable if only 1 director. Min 90-day gap.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>2</p>
                    </td>
                    <td className="border">
                      <p>Appointment of Auditor</p>
                    </td>
                    <td className="border">
                      <p>Form ADT-1</p>
                    </td>
                    <td className="border">
                      <p>Within 15 days of appointment</p>
                    </td>
                    <td className="border">
                      <p>
                        Auditor to be appointed within 30 days of incorporation.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>3</p>
                    </td>
                    <td className="border">
                      <p>Disclosure of Interest</p>
                    </td>
                    <td className="border">
                      <p>Form MBP-1</p>
                    </td>
                    <td className="border">
                      <p>1st BM of each FY or upon change</p>
                    </td>
                    <td className="border">
                      <p>Disclose interest in other entities.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>4</p>
                    </td>
                    <td className="border">
                      <p>Director Disqualification Declaration</p>
                    </td>
                    <td className="border">
                      <p>Form DIR-8</p>
                    </td>
                    <td className="border">
                      <p>Annually</p>
                    </td>
                    <td className="border">
                      <p>Declaring non-disqualification under Sec 164.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>5</p>
                    </td>
                    <td className="border">
                      <p>Financial Statement Filing</p>
                    </td>
                    <td className="border">
                      <p>Form AOC-4</p>
                    </td>
                    <td className="border">
                      <p>Within 180 days of FY end</p>
                    </td>
                    <td className="border">
                      <p>Typically due by 27th Sept if FY ends 31st Mar.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>6</p>
                    </td>
                    <td className="border">
                      <p>Annual Return Filing</p>
                    </td>
                    <td className="border">
                      <p>Form MGT-7A</p>
                    </td>
                    <td className="border">
                      <p>Within 60 days from signing of FS</p>
                    </td>
                    <td className="border">
                      <p>Simplified return for OPCs. No AGM needed.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>7</p>
                    </td>
                    <td className="border">
                      <p>DIN KYC</p>
                    </td>
                    <td className="border">
                      <p>Form DIR-3 KYC / KYC-WEB</p>
                    </td>
                    <td className="border">
                      <p>By 30th September</p>
                    </td>
                    <td className="border">
                      <p>For all directors holding DIN on 31st March.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>8</p>
                    </td>
                    <td className="border">
                      <p>Income Tax Return (ITR)</p>
                    </td>
                    <td className="border">
                      <p>ITR-6 (usually)</p>
                    </td>
                    <td className="border">
                      <p>By 31st October (unless audited)</p>
                    </td>
                    <td className="border">
                      <p>ITR filing mandatory, even with NIL turnover.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>9</p>
                    </td>
                    <td className="border">
                      <p>Form MSME-I</p>
                    </td>
                    <td className="border">
                      <p>MSME Form I</p>
                    </td>
                    <td className="border">
                      <p>30th Apr &amp; 31st Oct (Half-yearly)</p>
                    </td>
                    <td className="border">
                      <p>
                        If dues &gt;45 days to MSMEs. Mandatory if applicable.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>10</p>
                    </td>
                    <td className="border">
                      <p>Form DPT-3</p>
                    </td>
                    <td className="border">
                      <p>DPT-3</p>
                    </td>
                    <td className="border">
                      <p>By 30th June</p>
                    </td>
                    <td className="border">
                      <p>For all outstanding loans (even if not deposits).</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>11</p>
                    </td>
                    <td className="border">
                      <p>Commencement of Business</p>
                    </td>
                    <td className="border">
                      <p>Form INC-20A</p>
                    </td>
                    <td className="border">
                      <p>Within 180 days of incorporation</p>
                    </td>
                    <td className="border">
                      <p>Mandatory for all companies having share capital.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>12</p>
                    </td>
                    <td className="border">
                      <p>Registered Office Intimation</p>
                    </td>
                    <td className="border">
                      <p>Form INC-22</p>
                    </td>
                    <td className="border">
                      <p>Within 30 days (if not filed in SPICe+)</p>
                    </td>
                    <td className="border">
                      <p>Required if address not submitted at incorporation.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>13</p>
                    </td>
                    <td className="border">
                      <p>Display of Name and Details</p>
                    </td>
                    <td className="border">
                      <p>Paint / Affix at office</p>
                    </td>
                    <td className="border">
                      <p>Ongoing</p>
                    </td>
                    <td className="border">
                      <p>CIN, address, email, etc. must be displayed.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>14</p>
                    </td>
                    <td className="border">
                      <p>Statutory Registers</p>
                    </td>
                    <td className="border">
                      <p>Maintain in physical or digital format</p>
                    </td>
                    <td className="border">
                      <p>Ongoing</p>
                    </td>
                    <td className="border">
                      <p>Members, Directors, Shares, Minutes Book, etc.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>15</p>
                    </td>
                    <td className="border">
                      <p>Financial Audit</p>
                    </td>
                    <td className="border">
                      <p>Audit Report by CA</p>
                    </td>
                    <td className="border">
                      <p>Annual</p>
                    </td>
                    <td className="border">
                      <p>Mandatory for all OPCs, irrespective of turnover.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Note: Non-compliance with any of the above requirements may lead
                to financial penalties, disqualification of directors, and even
                strike-off of the company.&nbsp;
              </p>
              <h3>Exemptions to OPC from Mandatory Compliance</h3>
              <p>
                Although OPCs must comply with several provisions under the
                Companies Act, 2013, they enjoy certain relaxations and
                exemptions not available to other private companies. These
                exemptions are designed to ease the regulatory burden for small
                businesses with a single promoter.
              </p>
              <h4>Minimum Number of Directors</h4>
              <p>
                An OPC can be incorporated with only one director, unlike
                private companies which require a minimum of two directors.
              </p>
              <p>
                As per Section 122(4), where there is only one director, any
                resolution required at a Board meeting is valid if it is entered
                in the Minutes Book, signed, and dated by the director. The date
                of signing is deemed the date of the meeting.
              </p>
              <h4>Exemption from Holding Annual General Meeting (AGM)</h4>
              <p>
                As per Section 96(1), OPCs are not required to hold an AGM.
                Since there is only one member, the concept of an AGM is not
                applicable.
              </p>
              <h4>Relaxation in Holding Board Meetings</h4>
              <p>As per Section 173(5):</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> An OPC must conduct one
                      Board Meeting in each half of the calendar year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The minimum gap between
                      the two meetings must be 90 days.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                If there is only one director, the provisions of Sections 173
                and 174 (Quorum) do not apply. Resolutions can be passed and
                recorded without convening a formal meeting.
              </p>
              <h4>Signing of Annual Return</h4>
              <p>
                OPCs are allowed to have the Annual Return signed by the
                Director alone if there is no Company Secretary appointed. (As
                per Section 92 of the Companies Act, 2013)
              </p>
              <h4>Signing of Financial Statements and Board’s Report</h4>
              <p>
                The financial statements and Board’s Report of an OPC can be
                signed by a single director.
              </p>
              <h4>Exemption from Cash Flow Statement</h4>
              <p>
                OPCs are not required to prepare a Cash Flow Statement, unlike
                other private companies. (As per Schedule III of the Companies
                Act, 2013)
              </p>
              <h4>Internal Financial Controls Reporting</h4>
              <p>
                OPCs are exempt from reporting on internal financial controls
                and their operational effectiveness in the Audit Report. The
                Companies (Auditor’s Report) Order (CARO), 2016 is not
                applicable to OPCs.
              </p>
              <h4>Rotation of Auditors</h4>
              <p>
                The provisions under Section 139(2) regarding auditor rotation
                (every 5 years for individual auditors and 10 years for audit
                firms) do not apply to OPCs.
              </p>
              <h4>Exemption from Secretarial Standards (SS-1 and SS-2)</h4>
              <p>
                Since OPCs have only one director, Secretarial Standards on
                Board Meetings (SS-1) and General Meetings (SS-2) do not apply.
                If there is more than one director, SS-1 becomes applicable.
              </p>
              <h4>Simplified Board’s Report</h4>
              <p>
                Rule 8 of the Companies (Accounts) Rules, 2014, which mandates
                detailed disclosures in the Board’s Report, is not applicable to
                OPCs. OPCs can submit a simplified Board’s Report.
              </p>
              <h4>No Applicability of CARO</h4>
              <p>
                OPCs are exempt from the applicability of the Companies
                Auditor’s Report Order (CARO), 2016 (and its updated
                versions).
              </p>
              <h3>Documents Required for Annual Compliance of OPC</h3>
              <p>
                To fulfill the annual compliance requirements under the
                Companies Act, 2013 and other applicable laws, an OPC must
                maintain and submit key financial and statutory records.
                Essential Documents for OPC Annual Compliance:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Sales and Purchase Invoices: </b>Copies of all invoices
                      for sales and purchases made during the financial year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Expense Invoices: </b>Supporting bills for operational
                      and administrative expenses incurred.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <b>Bank Statements: </b>
                      Complete bank statements for all company accounts from
                      April 1 to March 31.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>GST Return Details (if applicable):</b> Summary of GST
                      returns (GSTR-1, GSTR-3B, GSTR-9) filed during the year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>TDS Returns and Challans (if applicable):</b> Proof of
                      TDS deduction, deposited challans, and filed returns (Form
                      26Q, 24Q, etc.).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Audited Financial Statements:</b> Balance Sheet, Profit
                      &amp; Loss Account, and Cash Flow Statement (if
                      applicable).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Director’s Report: </b>A report signed by the director,
                      outlining key business highlights, compliance
                      declarations, and performance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Details of Director(s): </b>PAN, DIN, Aadhaar, and
                      contact information of the director(s).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Details of Member/Shareholder:</b> KYC and shareholding
                      details of the sole member of the OPC.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Why Choose LegallensIndia for OPC Compliance?</h3>
              <p>
                At LegallensIndia, we have a dedicated team of Chartered
                Accountants, Company Secretaries, and Compliance Experts who
                specialize in assisting OPCs with their statutory filings and
                regulatory needs.
              </p>
              <h4>Here’s how we help:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>End-to-End Support:</b> From collecting documents to
                      filing AOC-4, MGT-7A, ITR-6, DIR-3 KYC, and other forms,
                      we handle the full process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Timely Compliance:</b> Avoid penalties with proactive
                      reminders and deadline tracking.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Expert Consultation: </b>Get clarity on specific
                      compliance obligations applicable to your OPC.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Transparent Pricing:</b> Fixed packages with no hidden
                      charges.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Whether your OPC is in its first year or scaling operations, our
                compliance team ensures peace of mind through timely and
                professional service delivery.
              </p>
              <h4>
                LegallensIndia Ledgers Platform for OPC – Simplified Compliance
                and Accounting
              </h4>
              <p>
                The LegallensIndia Ledgers Platform is a cloud-based accounting
                and compliance solution tailored specifically for One Person
                Companies. It allows you to:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Record daily financial
                      transactions (sales, purchases, expenses)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Generate financial
                      reports such as trial balance, ledgers, and profit &amp;
                      loss
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Reconcile GST filings
                      and TDS entries
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Track statutory
                      compliance deadlines
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Collaborate with your CA
                      or accountant in real-time
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Accessible from anywhere, anytime, the platform is secure,
                user-friendly, and fully integrated with India's compliance
                systems.
              </p>
              <p>
                Timely and accurate compliance is crucial for maintaining your
                OPC’s legal standing, avoiding penalties, and building business
                credibility. By choosing LegallensIndia and utilising the Ledgers
                Platform, you gain a trusted partner to manage your regulatory
                responsibilities efficiently and cost-effectively.
              </p>
              <p>
                <i>
                  &nbsp;Contact us today to get started with your OPC’s annual
                  compliance plan!
                </i>
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
