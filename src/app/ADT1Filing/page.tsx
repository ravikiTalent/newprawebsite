import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ADT1Filing() {
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
              <h1 className="display-1 text-white mb-3">ADT-1 Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Auditor appointment services include help with discovering,
                engaging and appointing of Auditor for newly incorporated
                Private Limited Company.
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
                { id: 3, title: "ADT-1 Filing", url: "" },
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
                      <h5 className="card-title">ADT-1 Filing</h5>
                      <p>
                        Auditor appointment services include help with
                        discovering, engaging and appointing of Auditor for
                        newly incorporated Private Limited Company (Audit fee
                        will be extra based on the nature and volume of
                        transaction).
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
                Form ADT-1 Filing for Auditor Appointment
              </h2>
              <p>
                Appointing an auditor is a mandatory compliance step for every
                company, and filing Form ADT-1 with the Registrar of Companies
                (ROC) is a legal requirement under the Companies Act, 2013.
                Whether you're appointing your first auditor after incorporation
                or reappointing one at your Annual General Meeting (AGM), timely
                and accurate filing is essential to avoid penalties.&nbsp;
              </p>
              <p>
                At LegallensIndia, we simplify the entire process—from document
                preparation to final submission, ensuring that your company
                stays fully compliant with the latest MCA regulations.
              </p>
              <h3>What is the ADT 1 Form?</h3>
              <p>
                Form ADT 1 is a statutory return filed by companies with the
                Registrar of Companies (ROC) to report the appointment of an
                auditor, as required under Section 139 of the Companies Act,
                2013. It is used to formally notify the ROC when a company
                appoints its first auditor after incorporation or
                appoints/reappoints an auditor at the Annual General Meeting
                (AGM).&nbsp;
              </p>
              <p>
                As per the latest Companies (Audit and Auditors) Amendment
                Rules, 2025, effective from July 14, 2025, filing Form ADT-1 is
                mandatory for all first auditor appointments, including those
                made by the Board of Directors—a significant change from the
                previous exemption. The form must be filed within 15 days of the
                auditor’s appointment and includes details such as the auditor’s
                name, address, PAN, membership number, and term of appointment.
              </p>
              <h3>
                Requirements for Filing ADT 1&nbsp;<span>Form&nbsp;</span>
              </h3>
              <p>
                Filing ADT 1 Form is mandatory for all companies, including
                public, private, listed, unlisted, and one-person companies
                (OPCs), upon the appointment of an auditor, whether for the
                first time or at a subsequent Annual General Meeting (AGM). The
                form must be submitted to the Registrar of Companies (ROC)
                within 15 days from the date of the auditor’s appointment.
              </p>
              <p>
                To proceed with filing, the following conditions must be met:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The auditor must be
                      appointed in compliance with the applicable provisions of
                      the Companies Act, 2013.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The appointed auditor
                      must provide written consent to act as the company’s
                      auditor.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The auditor must also submit a certificate under Section 141 of
                the Act, confirming that:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> They meet the
                      eligibility criteria to be appointed as an auditor,
                    </li>
                    <li>
                      <i className="uil uil-check"></i> They are not
                      disqualified or ineligible under the Companies Act,
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The appointment is
                      within the permitted audit limits as prescribed by law.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who Needs to File Form ADT 1?</h3>
              <p>
                The responsibility for filing ADT-1&nbsp; Form rests entirely
                with the company, not the auditor. Every company that appoints
                or reappoints an auditor must ensure that Form ADT-1 is filed
                with the Registrar of Companies (ROC) within the prescribed
                timeline.
              </p>
              <p>Entities Required to File ADT-1 Include:</p>
              <h4>All Types of Companies:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Listed Companies
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Unlisted Companies
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Public Limited Companies
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Private Limited
                      Companies
                    </li>
                    <li>
                      <i className="uil uil-check"></i> One Person Companies
                      (OPCs) and other registered entities
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Newly Incorporated Companies:</h4>
              <p>
                Companies that have recently been incorporated are required to
                file Form ADT-1 after appointing their first auditor, regardless
                of whether the appointment is made by the Board of Directors or
                by the members.
              </p>
              <h4>Companies Filling a Casual Vacancy:</h4>
              <p>
                If an auditor is appointed to fill a casual vacancy (arising due
                to resignation, death, disqualification, etc.), the company must
                file Form ADT-1 to report the new appointment.
              </p>
              <h4>Companies Appointing or Reappointing Auditors at AGM:</h4>
              <p>
                Any company that appoints or reappoints an auditor at its Annual
                General Meeting (AGM) must file Form ADT-1 within 15 days of the
                appointment resolution being passed.
              </p>
              <p>
                Note: Filing Form ADT-1 is mandatory in all of the above
                scenarios, including appointments made to fill casual vacancies.
              </p>
              <h3>ADT 1 Due Date</h3>
              <p>
                Filing Form ADT-1 within the prescribed timeline is mandatory to
                ensure statutory compliance under the Companies Act, 2013. The
                ADT 1 due date varies based on the type of appointment and the
                stage of the company (newly incorporated or existing).
              </p>
              <h4>1. For Newly Incorporated Companies:</h4>
              <p>
                ADT 1 Form must be filed within 15 days from the date of the
                first Board Meeting, in which the first auditor is appointed.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The first Board Meeting
                      must be held within 30 days of incorporation, and the
                      appointment of the auditor should be made during this
                      meeting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Therefore, the effective
                      due date for filing ADT-1 is within 45 days of
                      incorporation (30 days for the Board Meeting + 15 days for
                      filing).
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <b>Example: </b>If a company is incorporated on 1st July 2025,
                the Board must appoint the first auditor by 31st July 2025, and
                the ADT-1 must be filed by 15th August 2025.
              </p>
              <h4>2. For Existing Companies:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> ADT 1 Form must be filed
                      within 15 days from the date of the Annual General Meeting
                      (AGM) in which the auditor is appointed or reappointed.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <b>Example:</b> If the AGM is held on 30th September 2025, then
                the ADT-1 form must be filed by 15th October 2025.
              </p>
              <p>
                Important: Delayed filing of Form ADT-1 may attract additional
                fees and penalties as per the Companies (Registration Offices
                and Fees) Rules, 2014.
              </p>
              <h3>Details of Auditor to be Submitted in Form ADT 1</h3>
              <p>
                When filing ADT-1 Form , companies are required to furnish
                specific details about the auditor being appointed. These
                details ensure proper identification, qualification validation,
                and compliance with the Companies Act, 2013. The following
                information must be included:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Category of the Auditor:</b> Whether the auditor is an
                      individual Chartered Accountant or a firm of Chartered
                      Accountants.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Membership Number: </b>The Institute of Chartered
                      Accountants of India (ICAI) membership number of the
                      individual or partner signing the audit report.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Firm Registration Number (FRN):</b> In case the auditor
                      is a firm, include the FRN as allotted by ICAI.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Permanent Account Number (PAN)</b>: PAN of the
                      individual or firm appointed as auditor.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>
                        &nbsp;Professional Address and Contact Information:{" "}
                      </b>
                      Full address, valid email ID, and phone number of the
                      auditor or audit firm.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Period of Appointment: </b>Clearly specify the tenure
                      for which the auditor is being appointed (e.g., 5 years or
                      until the conclusion of the next AGM).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Details of Previous Auditor (if applicable): </b>
                      Membership number of the outgoing/vacated auditor. Reason
                      and date of casual vacancy, if the appointment is due to
                      resignation, disqualification, or death.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Date of Appointment: </b>For first auditors, the Board
                      resolution date. For regular/reappointed auditors, the
                      date of AGM in which the appointment was approved.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents to be Attached with Form ADT-1</h3>
              <p>
                When filing ADT 1 Form, the following documents must be attached
                to ensure proper compliance with the provisions of the Companies
                Act, 2013 and the latest regulatory updates:
              </p>
              <h4>Copy of the Board Resolution / AGM Resolution&nbsp;</h4>
              <p>
                A certified true copy of the resolution passed by the Board of
                Directors (in case of first auditor appointment) or by the
                shareholders in the AGM (for appointment/reappointment)
                authorizing the appointment of the auditor.
              </p>
              <h4>Written Consent from the Auditor</h4>
              <p>
                A formal consent letter from the auditor confirming their
                willingness to accept the appointment as per the provisions of
                the Act.
              </p>
              <h4>Auditor’s Certificate under Section 141</h4>
              <p>
                A declaration and certificate from the auditor stating that they
                are not disqualified or ineligible to be appointed as an auditor
                under Section 141 of the Companies Act, 2013.&nbsp;
              </p>
              <h4>Copy of Intimation Sent by the Company to the Auditor</h4>
              <p>
                A copy of the intimation letter/email sent by the company to the
                auditor informing them of their appointment.
              </p>
              <h3>ADT 1 Late Fees</h3>
              <p>
                Failure to file ADT-1&nbsp; Form within the prescribed due date
                will lead to additional fees calculated as a multiple of the
                normal filing fee, depending on the period of delay:
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <p>
                        <b>Sl. No.</b>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <b>Delay in Filing (Number of Days)</b>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <b>Penalty</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>1</p>
                    </td>
                    <td className="border">
                      <p>Up to 30 days</p>
                    </td>
                    <td className="border">
                      <p>2 times the normal fee</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>2</p>
                    </td>
                    <td className="border">
                      <p>More than 30 days and up to 60 days</p>
                    </td>
                    <td className="border">
                      <p>4 times the normal fee</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>3</p>
                    </td>
                    <td className="border">
                      <p>More than 60 days and up to 90 days</p>
                    </td>
                    <td className="border">
                      <p>6 times the normal fee</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>4</p>
                    </td>
                    <td className="border">
                      <p>More than 90 days and up to 180 days</p>
                    </td>
                    <td className="border">
                      <p>10 times the normal fee</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>5</p>
                    </td>
                    <td className="border">
                      <p>More than 180 days</p>
                    </td>
                    <td className="border">
                      <p>12 times the normal fee</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Important: The penalty amount increases with the length of the
                delay. To avoid unnecessary costs and potential legal
                non-compliance, companies must ensure the timely filing of Form
                ADT-1.
              </p>
              <h3>How to File Form ADT 1 (E-Filing Process)</h3>
              <p>
                Filing Form ADT-1 is a mandatory compliance requirement for
                companies and must be completed electronically through the
                Ministry of Corporate Affairs (MCA) portal. The process is
                streamlined and auto-approved if all details are correctly
                provided. Below are the step-by-step instructions:
              </p>
              <h4>1. Download the E-Form ADT 1</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Visit the official MCA
                      website.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Navigate to ‘MCA
                      Services’ &gt; ‘E-Filing’ &gt; ‘Company Forms Download’.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Download the latest
                      version of Form ADT-1 available for the applicable
                      financial year.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">2. Fill in the Required Details</h4>
              <p>
                Complete the form with accurate and up-to-date information,
                including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Company details (CIN,
                      name, address, etc.)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Details of the appointed
                      auditor (name, membership number, firm registration
                      number, PAN, address, contact details)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Type of appointment
                      (first auditor, reappointment, or appointment due to
                      casual vacancy)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Date of AGM or Board
                      Meeting (as applicable)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Period of
                      appointment&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">3. Attach Supporting Documents</h4>
              <p>Upload the required attachments such as:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Board/AGM Resolution
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Auditor’s Consent Letter
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Auditor’s Eligibility
                      Certificate (under Section 141)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Intimation letter to the
                      auditor
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">4. Verify and Submit the Form</h4>
              <p>
                Affix the Digital Signature Certificate (DSC) of the Director
                and a practising professional (CA/CS/CMA), as required.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Upload the form via the
                      MCA21 portal.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Pay the prescribed
                      filing fee based on the company’s nominal share capital.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">5. Auto-Approval and Acknowledgement</h4>
              <p>
                Once successfully filed, Form ADT-1 is auto-approved by the MCA
                system if no discrepancies are found.
              </p>
              <p>
                An acknowledgement email is sent to the company’s registered
                email ID, confirming the successful submission and SRN (Service
                Request Number).
              </p>
              <h3>Important Points to Consider Regarding Form ADT 1</h3>
              <p>
                When dealing with the filing of Form ADT-1, companies should
                keep in mind the following key considerations to ensure smooth
                compliance:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Applicability to All Companies: </b>Filing of Form
                      ADT-1 is mandatory for all types of companies — whether
                      listed or unlisted, public or private, large or small, and
                      regardless of their capital structure, in accordance with
                      Section 139(1) of the Companies Act, 2013.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Responsibility Lies with the Company: </b>The
                      obligation to file Form ADT-1 rests solely with the
                      company and not with the auditor. It is the company's duty
                      to ensure timely and correct filing with the Registrar of
                      Companies (ROC).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Filing Required for Casual Vacancies: </b>If an auditor
                      is appointed to fill a casual vacancy due to resignation,
                      disqualification, death, or any other reason, Form ADT-1
                      must still be filed to intimate the ROC.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Filing for First Auditor Now Mandatory:</b> While
                      earlier Rule 4(2) of the Companies (Audit and Auditors)
                      Rules, 2014 did not mandate filing for first auditor
                      appointments under Section 139(6), the updated 2025
                      regulatory framework now requires Form ADT-1 to be filed
                      even for first-time auditor appointments by the Board of
                      Directors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Timely Filing is Critical:</b> Form ADT-1 must be filed
                      within 15 days of the auditor’s appointment (whether at
                      the Board meeting or AGM). Late filing leads to penalties,
                      which scale with the number of days of delay.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Ensure Complete Documentation: </b>All required
                      documents, such as board/AGM resolutions, auditor consent,
                      declarations, and appointment intimation, should be
                      accurately prepared and attached to avoid rejection or
                      compliance issues.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How LegallensIndia Can Assist with Filing Form ADT-1</h3>
              <p>
                LegallensIndia offers comprehensive support to companies in
                ensuring seamless and compliant filing of Form ADT 1 with the
                Registrar of Companies (ROC).&nbsp;
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Document Preparation: </b>We help prepare all the
                      necessary documents required for Form ADT-1, including
                      board resolutions, auditor consents, and declarations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> <b>Expert Review: </b>
                      Our professionals thoroughly review your documentation to
                      ensure accuracy, completeness, and adherence to statutory
                      requirements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>End-to-End Filing Support:</b> LegallensIndia handles the
                      complete filing process on your behalf, ensuring timely
                      and error-free submission of Form ADT-1 through the MCA
                      portal.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Compliance Verification: </b>We conduct a full
                      compliance check to ensure that your company meets all
                      legal obligations under the Companies Act, 2013 related to
                      auditor appointments.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Real-Time Updates: </b>Our team provides timely
                      notifications on regulatory changes or status updates
                      related to your ADT-1 filing.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <i>
                  Get in touch with us today to streamline your auditor
                  appointment process and stay 100% compliant with the latest
                  MCA regulations.
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
