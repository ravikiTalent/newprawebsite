import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function RemoveDirector() {
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
              <h1 className="display-1 text-white mb-3">Remove Director</h1>
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
                { id: 3, title: "Remove Director", url: "" },
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
                      <h5 className="card-title">Remove Director</h5>
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

              <h2 className="display-4 mb-3">
                Removal of Director from a Company
              </h2>
              <p>
                Company Directors oversees the management and operations of a
                business, while shareholders own the company. Situations may
                arise where shareholders opt to remove a director due to
                inadequate performance or other concerns, or a director may
                choose to resign. Removing a director is a significant corporate
                action that requires careful deliberation and strict compliance
                with the legal framework provided by the Companies Act 2013 or
                applicable local laws. Whether initiated by an ordinary
                resolution, board resolution, or judicial order, the process
                must be conducted fairly, transparently, and in the company's
                best interest.
              </p>
              <p>
                LegallensIndia specialises in navigating the intricacies of the
                director removal or resignation process, ensuring full
                compliance with legal standards and meticulous attention to
                detail. Let our experts assist you in navigating this critical
                corporate transition smoothly and effectively. Contact us today
                to get started.
              </p>
              <h3>Reasons for Director Removal</h3>
              <p>
                Under The Companies Act 2013, it's mandatory for a private
                limited company to appoint at least two directors to commence
                its operations.
              </p>
              <p>
                Shareholders have the authority to dismiss a director during the
                General Meeting, barring instances of government-appointed
                directors. A director may be subject to removal under several
                conditions, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Being disqualified as
                      per the criteria set out in the Companies Act.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Not attending board
                      meetings for more than a year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Violating the terms of
                      Section 184 of the Companies Act by engaging in prohibited
                      transactions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Being prohibited from
                      participating due to a court or Tribunal order.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Conviction by a court
                      for a criminal offence with a sentence of at least six
                      months.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Non-compliance with the
                      regulations and requirements of the Companies Act, 2013.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Choosing to resign
                      voluntarily from the board.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Methods for Director Removal from a Company</h3>
              <p>
                There are three primary methods to remove a director from a
                company:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Resignation by Directors:</strong> This method
                      involves directors resigning voluntarily from their
                      positions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Director Absence from Board Meetings:</strong>{" "}
                      This approach is used when a director fails to attend
                      board meetings for 12 months, triggering their removal.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Shareholder-initiated Removal:</strong> This
                      method is employed when the shareholders of a company vote
                      to remove a director from their position.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Law Governing the Director Removal</h3>
              <p>
                Removing a director is governed by the Companies Act, 2013,
                under Section 169.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 169:</strong> This part explains how a
                      company can legally remove a director, detailing the steps
                      and rules that need to be followed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 115:</strong> While this section mainly
                      talks about how to add new directors, knowing it helps to
                      fully understand the rules about directors, including how
                      they might be removed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 163:</strong> This section deals with
                      choosing directors so everyone gets a fair representation.
                      It's essential for removing directors because it affects
                      how decisions are made in the company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Rule 23 of the Companies (Management and Administration)
                        Rules, 2014:
                      </strong>{" "}
                      This rule gives specific guidelines on how a company
                      should be run, including how to remove directors properly.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Essential Requirements for Director Removal</h3>
              <p>
                To lawfully remove a director, specific critical steps must be
                followed:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Issuance of Special Notice:</strong> According to
                      Section 115 of the Companies Act 2013, a special notice
                      must be issued to initiate the removal process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice Period to Director:</strong> This special
                      notice must be sent to the director in question at least
                      14 days before the resolution for their removal is voted
                      on, ensuring they have adequate time to prepare a
                      response.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Right to be Heard:</strong> The director facing
                      removal must be allowed to present their side of the
                      story. They should be allowed to make a written
                      representation, which could be circulated to members or
                      read at the meeting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Restriction on Reappointment:</strong> Once
                      removed, the director in question is not eligible for
                      reappointment to the board.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Filing of Form DIR-12</h3>
              <p>
                Form DIR-12, mandated by the Companies Act 2013, must be filled
                out and submitted to document the official removal of a
                director. This form is a crucial part of the legal procedure for
                removing a director from their office.
              </p>
              <h3>Procedure for Director Removal</h3>
              <p>
                The procedure for removing a director from a company involves
                several steps, which are outlined below:
              </p>
              <h4>Director's Voluntary Resignation</h4>
              <h4>Essential Obligations:</h4>
              <p>
                A director's resignation becomes effective on the date the
                company receives the notice or on a later date specified by the
                director in the notice, whichever comes later.
              </p>
              <p>
                Even after stepping down, a resigned director remains
                accountable for any offences committed during their term.
              </p>
              <p>
                A director can step down from their position by submitting a
                written resignation to the company. Upon receiving this
                resignation, the Board is required to acknowledge it formally.
                The company must notify the Registrar of Companies about the
                resignation and include this information in the directors'
                report presented at the next General Meeting, as stipulated by
                Section 168 of the Companies Act, 2013.
              </p>
              <h4>Mandatory Requirements</h4>
              <p>
                The effective date of a director's resignation is either the
                date the company receives the notice or a later date specified
                by the director within that notice, depending on which comes
                last. Additionally, a director who resigns remains responsible
                for any legal infractions during their time in office.
              </p>
              <p>The following Procedure is to be followed.</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Schedule a Board of Directors Meeting:</strong>{" "}
                      Following Section 173 and Secretarial Standard-1 (SS-1), a
                      board meeting should be arranged.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notification of Board Meeting:</strong> After
                      receiving a resignation letter, the company must send out
                      a board meeting notice to all directors at their
                      registered addresses no later than 7 days before the
                      meeting. In urgent situations, a shorter notice period is
                      permissible.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Preparation of Meeting Documents:</strong> The
                      meeting notice should accompany the agenda, explanatory
                      notes, and a draft resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Conduct the Board Meeting:</strong> The board
                      should convene to acknowledge the resignation letter
                      submitted by the director.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Delegation for ROC Filings:</strong> Assign the
                      Company Secretary, CFO, or director to submit the
                      necessary forms and documentation to the Registrar of
                      Companies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Disclosure Requirements for Listed Companies:
                      </strong>{" "}
                      Public companies must report the resignation to the stock
                      exchange promptly, adhering to specific timelines based on
                      the nature and origin of the event or information, as
                      mandated by Regulation 30 &amp; 46(3) of the SEBI (Listing
                      Obligations and Disclosure Requirements) Regulations,
                      2015.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Distribution of Draft Minutes:</strong> Within 15
                      days following the board meeting, draft minutes should be
                      sent to all directors via hand delivery, speed post,
                      registered post, courier, or email for their review, per
                      the established procedures for minute preparation and
                      approval.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                Submission of Form DIR-12 to the Registrar of Companies (ROC):
              </h4>
              <p>
                Within 30 days following the receipt of the director's
                resignation notice, the company must inform the ROC by
                submitting Form DIR-12, accompanied by the following documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A certified true copy of
                      the Board Resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The resignation notice
                      from the director.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proof of the director's
                      cessation from the board.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Submission of Form DIR-11 by the Resigning Director:</h4>
              <p>
                The director who has resigned can send a copy of their
                resignation to the Registrar of Companies (ROC) using Form
                DIR-11 within 30 days from the date of their resignation. This
                submission should include:
              </p>
              <p>The resignation notice that was submitted to the company.</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Evidence of the notice
                      being dispatched.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> An acknowledgement from
                      the company confirming receipt of the resignation.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Updating the Register of Directors:</h4>
              <p>
                The company must update the Register of Directors and Key
                Managerial Personnel to reflect the resignation and any other
                necessary changes.
              </p>
              <h4>Director Absence from Board Meetings for 12 Months</h4>
              <p>
                When a director fails to attend any board meetings for twelve
                months, even without formally requesting a leave of absence,
                they are considered to have vacated their position according to
                Section 167. The following steps outline the procedure for such
                situations:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Acknowledgement of Vacancy:</strong> Recognize
                      that the director's position is deemed vacated under the
                      applicable corporate governance laws, such as Section 167,
                      which addresses the automatic vacation of a director's
                      office due to non-attendance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Filing of Form DIR-12:</strong> The company must
                      then file Form DIR-12 with the Registrar of Companies
                      (ROC). This form serves as a notification of the
                      director's resignation or removal, including cases where
                      the position is vacated due to absence from meetings.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Update on MCA Database:</strong> After the
                      necessary formalities are completed, including the filing
                      of Form DIR-12, the director's name will be officially
                      removed from the Ministry of Corporate Affairs (MCA)
                      database, reflecting the vacancy of their position.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It's essential for companies to adhere to these steps to ensure
                compliance with corporate governance requirements and maintain
                accurate records with the MCA.
              </p>
              <h4>Director Removal by Shareholders</h4>
              <p>
                To remove a director through shareholder resolution, typically
                an Ordinary Resolution unless specified otherwise in the
                company's articles or applicable laws, the company should follow
                these steps:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board Meeting Notice:</strong> Begin by scheduling
                      a Board Meeting, providing a minimum of seven days' notice
                      to all directors. This notice should include the agenda
                      item for the proposed removal of the director.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Resolution to Convene an EGM:</strong> At the
                      Board Meeting, pass a resolution to hold an Extraordinary
                      General Meeting (EGM). Also, propose a resolution for
                      removing the director, subject to shareholder approval at
                      the EGM.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Issuing EGM Notice:</strong> Send out notices for
                      the EGM to all shareholders, ensuring a precise notice
                      period of 21 days, which excludes the day the notice is
                      sent and the day of the meeting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Voting at EGM:</strong> During the EGM, present
                      the resolution for the director's removal to the
                      shareholders for a vote. If the majority supports the
                      resolution, it is passed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Director's Right to be Heard:</strong> Before the
                      resolution is passed, the director should present their
                      case or explanation to the meeting attendees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Filing Forms DIR-11 and DIR-12:</strong> After the
                      resolution is passed, complete and submit Form DIR-11 (by
                      the outgoing director, if applicable) and Form DIR-12 (by
                      the company) to the Registrar of Companies (ROC), along
                      with the necessary attachments including the resolutions
                      passed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Update with MCA:</strong> Once the forms are
                      successfully submitted and all procedural formalities are
                      completed, the removed director's details will be
                      officially removed from the Ministry of Corporate Affairs
                      (MCA) database.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Adhering to these steps carefully and ensuring legal compliance,
                as mandated by the Companies Act, is essential when removing a
                director via an Ordinary Resolution.
              </p>
              <p>
                LegallensIndia experts can assist in this process to ensure a
                smooth and compliant director removal.
              </p>
              <h3>Penalties for Delayed Submission of Form DIR-12</h3>
              <p>
                If a company fails to file Form DIR-12 within the stipulated
                30-day period following a director's resignation, it faces
                escalating penalties based on the extent of the delay:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>30 to 60 days delay:</strong> The penalty incurred
                      will be double the standard government fees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>60 to 90 days delay:</strong> The penalty
                      increases to four times the government fees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Beyond 90 days delay:</strong> A significant
                      penalty of ten times the government fees is applied.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Exceeding 180 days delay:</strong> The penalty
                      reaches twelve times the government fees, and the company
                      might also face legal actions for compounding offences.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It's crucial for companies to adhere to the filing deadlines to
                avoid these penalties and ensure compliance with regulatory
                requirements.
              </p>
              <h3>Impacts and Considerations of Director Removal</h3>
              <p>
                The removal of a director from a company carries several
                consequential impacts for both the individual director and the
                organisation:{" "}
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>End of Directorial Responsibilities:</strong> The
                      immediate effect of a director's removal is the cessation
                      of involvement in the company's management and
                      decision-making processes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Revocation of Authority:</strong> With their
                      removal, the director forfeits any power to act in the
                      company's name or represent its interests in any capacity.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Potential Legal Ramifications:</strong> Failure to
                      adhere to the prescribed legal protocols during removal
                      can lead to legal challenges and possible claims directed
                      at the company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Impact on Company Reputation:</strong> Removing a
                      director can adversely affect the company's public image,
                      particularly if the circumstances surrounding the removal
                      become widely known. The company must manage the process
                      discreetly and with due consideration for all parties
                      involved.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Filing Amendments under Various Acts:</h3>
              <p>
                Following the director's resignation, the company may need to
                file amendment applications under several acts to update the
                official records. These acts may include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Goods and Services Tax
                      Act
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Shops and Establishment
                      Act
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Factories Act
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Foreign Exchange
                      Management Act
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Inter-State Migrant
                      Workmen Act
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Private Security
                      Agencies Act
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Employee Provident Fund
                      (EPF)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Employee's State
                      Insurance (ESI)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Other relevant labour
                      laws
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Industry-specific
                      regulations
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These updates ensure compliance with regulatory requirements and
                reflect the company's current governance structure.
              </p>
              <h3>Why choose LegallensIndia for Director removal?</h3>
              <p>
                Choosing LegallensIndia for director removal offers several
                advantages:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expertise and Experience:</strong> LegallensIndia
                      has a team of professionals who are well-versed in
                      corporate law and the specific procedures outlined in the
                      Companies Act 2013 for director removal.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance Assurance:</strong> With a deep
                      understanding of legal requirements, LegallensIndia experts
                      ensure that every step of the director removal process
                      complies with statutory regulations, thereby minimizing
                      the risk of legal complications.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>End-to-End Support:</strong> From the initial
                      consultation to the final submission of necessary forms
                      like DIR-12, LegallensIndia provides comprehensive support,
                      guiding companies through each process phase.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Customized Solutions:</strong> Understanding that
                      each company's situation is unique, LegallensIndia offers
                      tailored advice and solutions that best fit the specific
                      circumstances and objectives of the company.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                By choosing LegallensIndia, companies can ensure that the director
                removal process is conducted smoothly, compliantly, and with a
                professional touch that respects the interests of all parties
                involved.
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
