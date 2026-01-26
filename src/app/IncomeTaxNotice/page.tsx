import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function IncomeTaxNotice() {
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
                Income Tax Notice Response
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Even after filing your Income Tax Return (ITR) on time, you may
                still receive notices from the Income Tax Department (ITD).
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
                { id: 2, title: "Income Tax", url: "IncomeTax" },
                { id: 3, title: "Income Tax Notice Response", url: "" },
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
                      <h5 className="card-title">Income Tax Notice Response</h5>
                      <p>
                        Even after filing your Income Tax Return (ITR) on time,
                        you may still receive notices from the Income Tax
                        Department (ITD).
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
                Income Tax Notice: Check &amp; Authenticate ITR Notices Online
              </h2>
              <p>
                Even after filing your Income Tax Return (ITR) on time, you may
                still receive notices from the Income Tax Department (ITD).
                While this can be concerning, it is often a routine part of the
                tax process. Some notices request additional information or
                clarifications that require timely responses, while others are
                simply for your information. It is important to carefully verify
                the authenticity of any notice before taking further action to
                ensure proper compliance and avoid unnecessary penalties.
              </p>
              <p>
                <em>
                  LegallensIndia helps you handle income tax notices quickly and
                  easily. We assist in verifying notices and preparing the right
                  responses. Get expert support to stay compliant and avoid
                  penalties.
                </em>
              </p>
              <h3>What is an Income Tax Notice?</h3>
              <p>
                An income tax notice is an official letter sent by the Income
                Tax Department to a taxpayer. It informs the taxpayer about an
                issue or query related to their tax return or tax payments. The
                notice could be about missing information, discrepancies in the
                filed return, tax assessments, or a request for additional
                documents. When a taxpayer receives such a notice, they are
                required to respond within the given time to resolve the matter
                with the tax authorities.
              </p>
              <h3>Types of Income Tax Notices</h3>
              <p>
                The Income Tax Department issues various types of notices
                depending on the reason for communication. Some common types
                include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice under Section 142(1): </strong>Requests
                      additional information or documents related to your filed
                      return, or asks you to file a return if not filed.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice under Section 139(9): </strong>Issued when
                      a return filed is found to be defective or incomplete.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice under Section 148:</strong> Issued when the
                      department believes income has escaped assessment or the
                      return was not filed.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice under Section 156:</strong> Issued when
                      there is a demand for tax, penalty, or other dues to be
                      paid.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Intimation under Section 143(1):</strong> A
                      computerised intimation after processing your return,
                      showing any tax due or refund.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice under Section 143(2):</strong> Indicates
                      your return has been selected for detailed scrutiny.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice under Section 131: </strong>Issued when the
                      officer suspects concealment of income.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice under Section 245:</strong> Relates to
                      adjustment of refunds against outstanding tax demands.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Each notice serves a specific purpose and requires a timely
                response to avoid penalties.
              </p>
              <h3>IT Notice Under Section 133(6)</h3>
              <p>
                Under the E-Verification Scheme 2021, the Income Tax Department
                may issue a notice under Section 133(6) if discrepancies are
                found between the data reported in your Income Tax Return (ITR)
                and the information available in the Annual Information
                Statement (AIS).
              </p>
              <p>
                <strong>Common Reasons for Receiving Notice u/s 133(6):</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> ITR not filed even
                      though income exceeds the basic exemption limit as per AIS
                      data.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income such as salary,
                      interest, or capital gains is reflected in the AIS, but
                      not correctly reported in the ITR.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Significant expenses
                      (e.g., purchase of property, foreign travel, mutual
                      fund/stocks investments) are reported in AIS but are
                      inconsistent with the income declared in the ITR.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Steps to Respond to Notice u/s 133(6):</strong>
              </p>
              <p>
                Review the notice carefully and compare the AIS data with your
                ITR to identify if the mismatch is due to an error on your part
                or by the department.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Log in to the Income Tax Portal:</strong> Navigate
                      to: Login &gt; Pending Actions &gt; Compliance Portal &gt;
                      E-Verification&nbsp;
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Submit Your Response:</strong> Fill in the
                      questionnaire provided under the e-verification section
                      and upload the necessary supporting documents.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">If the Mistake Is Yours</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> You may file an Updated
                      Return under Section 139(8A).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Pay any additional tax
                      liability and applicable penalties voluntarily.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Submit your response
                      accordingly through the portal.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If the Error Is on the
                      Department’s Side
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Provide a clear
                      explanation through the Insights Portal.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Attach supporting
                      documents to prove your case.&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Income Tax&nbsp; Notice u/s 133(6) Sample</h4>
              <h3>Notice Under Section 142(1)</h3>
              <p>
                A notice under Section 142(1) of the Income Tax Act is issued by
                the Assessing Officer (AO) in the following two situations:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> If you have filed your
                      Income Tax Return, but the AO requires additional
                      information, documents, or clarification to complete the
                      assessment.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If you have not filed
                      your return, the AO directs you to file it within the
                      prescribed time.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                This notice is aimed at gathering the necessary details to
                ensure a fair and complete assessment of your income.
              </p>
              <p>Consequences of Not Responding to Notice u/s 142(1):</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> A penalty of ?10,000 for
                      each instance of non-compliance.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Prosecution, which may
                      lead to imprisonment for up to 1 year.In some cases, both
                      penalty and prosecution may apply.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Copy of Section 142(1) Notice&nbsp;</h4>
              <h3>Intimation Under Section 143(1)</h3>
              <p>
                Once you file your Income Tax Return (ITR), it is electronically
                processed by the Central Processing Centre (CPC). During
                processing, the income is recalculated after making certain
                automatic adjustments, such as:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Correction of any
                      arithmetical errors
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Disallowance of
                      incorrect claims is clearly evident from the return
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Rejection of losses or
                      expenses wrongly claimed
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Addition of income not
                      reported in the return
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                &nbsp;After processing, the CPC issues an Intimation under
                Section 143(1) in any of the following three cases:&nbsp;
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Tax is payable by the
                      taxpayer
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Refund is due to the
                      taxpayer
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> No tax or refund, but
                      there is a change in the amount of loss carried forward
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The intimation must be sent within 9 months from the end of the
                financial year in which the return was filed.
              </p>
              <p>
                <strong>Example: </strong>If your return for AY 2024–25 was
                filed on 27 July 2024, the intimation can be issued up to 31
                December 2025.
              </p>
              <p>
                <strong>Note: </strong>Processing under Section 143(1) has been
                mandatory since Assessment Year 2017–18.
              </p>
              <p>
                <strong>How to Analyse an Intimation u/s 143(1)?</strong>
              </p>
              <p>
                Review the comparison between the figures filed in your ITR and
                the ones recalculated by the CPC.
              </p>
              <p>Identify any mismatches in:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Income
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Deductions
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> TDS or prepaid taxes
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                If the mismatch or demand is due to an error, you can file a
                rectification request under Section 154 within 4 years from the
                end of the relevant assessment year.
              </p>
              <p>
                If the tax demand is correct, pay the amount using the payment
                link provided in the intimation.
              </p>
              <h3>Notice Under Section 143(2)</h3>
              <p>
                A notice under Section 143(2) is issued when your income tax
                return is selected for scrutiny. This means the Assessing
                Officer (AO) wants to examine your return in detail to ensure
                that:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> You have not understated
                      your income
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> You have not claimed
                      excessive losses
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> You have not paid less
                      tax than required
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                This notice is usually followed by a questionnaire and a request
                for supporting documents. The AO must issue this notice within 3
                months after the end of the relevant assessment year.
              </p>
              <p>
                <strong>Example:</strong> If Mohan filed his return on 19 June
                2024 for AY 2024–25, then the last date for issuing notice under
                Section 143(2) would be 31 August 2025.
              </p>
              <p>
                <strong>How to Respond to Notice u/s 143(2):</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Review the Notice
                      Thoroughly
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Read the notice and its
                      annexure carefully to understand the reason for scrutiny.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Prepare Your Response
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Draft a cover letter
                      with a clear explanation addressing all queries honestly.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Attach all supporting
                      documents requested.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Submit the Response
                      Online
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Log in to the Income Tax
                      e-filing portal.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Go to e-Proceedings,
                      upload your cover letter and documents, and submit your
                      response.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Sample IT Notice Under Section 143(1)</h4>
              <h3>Notice Under Section 245</h3>
              <p>
                A notice under Section 245 is issued when the Assessing Officer
                (AO) finds that you have an outstanding tax demand from previous
                years, and they intend to adjust it against your current year's
                refund.
              </p>
              <p>However, such an adjustment can only be made after:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Issuing a proper notice,
                      and
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Giving you an
                      opportunity to respond
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Response Timeline: You must respond within 30 days from the date
                you receive the notice. If you do not respond within this
                period, the AO may assume that you agree to the adjustment and
                go ahead with the process.
              </p>
              <p>
                Important Tip: It’s highly recommended to respond promptly and
                verify the accuracy of the tax demand before the refund is
                adjusted.
              </p>
              <h3>Notice Under Section 245</h3>
              <p>
                A notice under Section 245 is issued when the Assessing Officer
                (AO) finds that you have an outstanding tax demand from previous
                years, and they intend to adjust it against your current year's
                refund.
              </p>
              <p>However, such an adjustment can only be made after:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Issuing a proper notice,
                      and
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Giving you an
                      opportunity to respond
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Response Timeline: You must respond within 30 days of the date
                you receive the notice. If you do not respond within this
                period, the AO may assume that you agree to the adjustment and
                go ahead with the process.
              </p>
              <p>
                Important Tip: It’s highly recommended to respond promptly and
                verify the accuracy of the tax demand before the refund is
                adjusted.
              </p>
              <h3>Most Common Reasons for Receiving an Income Tax Notice</h3>
              <p>
                You may receive a notice from the Income Tax Department for
                several reasons. Some of the most common causes include:
              </p>
              <h4>1. Mismatch in Income or Tax Details</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Discrepancy between the
                      income reported in your ITR and Form 26AS or AIS.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Mismatch in Tax Deducted
                      at Source (TDS) amounts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Errors or
                      inconsistencies in the details furnished in your return.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">2. Non-Filing or Delayed Filing of ITR</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Failure to file your
                      income tax return on time.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Completely missing the
                      filing deadline without a valid reason.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">3. Use of Incorrect ITR Form</h4>
              <p>
                Filing your return using the wrong ITR form based on your income
                type or source.
              </p>
              <h4>4. High-Value Transactions</h4>
              <p>
                Large cash deposits, property purchases/sales, or credit card
                payments that are not reflected or properly reported in your
                ITR.
              </p>
              <h4>5. Investments in Spouse’s Name</h4>
              <p>
                Making investments in your spouse’s name but failing to disclose
                them as required under the clubbing of income provisions.
              </p>
              <h4>6. Inaccurate Reporting of Capital Gains</h4>
              <p>
                Failing to report or misreporting long-term capital gains,
                especially from equity shares or mutual funds.
              </p>
              <h4>7. Incomplete Documentation</h4>
              <p>
                Not submitting required supporting documents when requested or
                filing incomplete information.
              </p>
              <h4>8. Random Scrutiny</h4>
              <p>
                Your return is picked up for random scrutiny by the Assessing
                Officer for further verification.
              </p>
              <h4>9. Omission of Income</h4>
              <p>
                Not disclosing income from other sources such as interest,
                freelance work, foreign income, or rental income.
              </p>
              <h4>10. Outstanding Tax Liability or Refund Adjustment</h4>
              <p>
                If you have a pending tax liability from earlier years and a
                refund is due, the department may adjust your refund against
                that liability and issue a notice under Section 245.
              </p>
              <h4>11. Non-Payment of Self-Assessment Tax</h4>
              <p>
                Submitting your return without paying the self-assessment tax
                due, which results in an incomplete filing.
              </p>
              <h4>12. Suspected Tax Evasion</h4>
              <p>
                If the department believes that you have deliberately evaded tax
                in past financial years.
              </p>
              <h3>What to Do After Receiving an Income Tax Notice</h3>
              <p>
                If you receive a notice from the Income Tax Department under any
                of the applicable sections, it’s important to act promptly and
                correctly. Here are the steps you should follow:
              </p>
              <h4>Read the Notice Carefully</h4>
              <p>
                Understand the purpose of the notice—whether it’s for a
                mismatch, non-filing, scrutiny, demand, or any other reason.
                This will help you determine the right course of action.
              </p>
              <h4>Verify the Details</h4>
              <p>
                Ensure the notice is actually meant for you by checking the
                following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Your full name
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> PAN (Permanent Account
                      Number)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Address
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Assessment Year
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These details must match your records to confirm the notice is
                genuine.
              </p>
              <h4>Identify the Issue or Discrepancy</h4>
              <p>Try to find out what triggered the notice. This could be:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> A mismatch in reported
                      income or tax credits
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Failure to file a return
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Incorrect form selection
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Unreported high-value transactions, etc.</p>
              <h4>Check Online on the e-Filing Portal</h4>
              <p>Log in to your Income Tax e-filing account and:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Confirm that the notice
                      appears in your account under "e-Proceedings" or "View
                      Notices/Orders".
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Check for any specific
                      instructions or deadlines.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Respond Within the Time Limit</h4>
              <p>
                It is critical to respond to the notice within the specified
                time frame mentioned. Delays may lead to penalties, interest, or
                even prosecution, depending on the nature of the notice.{" "}
              </p>
              <h4>Support Your Response with Proper Documentation</h4>
              <p>When replying:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Include relevant
                      documents and evidence (e.g., Form 16, bank statements,
                      investment proofs).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Make sure your
                      explanation is clear and accurate.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Legal Consequences of Ignoring an Income Tax Notice</h3>
              <p>
                Ignoring an income tax notice can lead to serious consequences.
                You may face penalties, interest on unpaid taxes, or your return
                may be treated as invalid. This can result in loss of
                exemptions, disallowance of losses, and additional tax
                liability. In some cases, legal action or prosecution may also
                follow. Ignoring such notices can damage your financial
                credibility, so it’s important to respond promptly and
                correctly.
              </p>
              <h3>Essential Documents to Respond to an Income Tax Notice</h3>
              <p>
                Here is a list of commonly required documents when replying to
                an income tax notice:
              </p>
              <p>
                Copy of the Income Tax Notice: The original notice received from
                the Income Tax Department.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Proof of Income
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Salary slips
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Form 16 (Part B)
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                &nbsp;Income from business or profession statements (if
                applicable)
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> TDS Certificates
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Form 16 (Part A)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Form 16A for non-salary
                      TDS
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Investment Proofs (if deductions or exemptions are claimed)</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> &nbsp;LIC premium
                      receipts
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> &nbsp;PPF passbook
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> &nbsp;ELSS mutual fund
                      statements
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> &nbsp;Tuition fee
                      receipts, etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Bank Statements
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">&nbsp;To verify transactions or income entries</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Form 26AS / AIS (Annual
                      Information Statement)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> To match TDS and income
                      reported by third parties
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">ITR Acknowledgement / Computation Sheet</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> &nbsp;For the relevant
                      assessment year
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> &nbsp;Any Other
                      Supporting Documents
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Documents specific to the issue raised in the notice (e.g.,
                capital gains reports, rent agreements, loan statements)
              </p>
              <h3>
                How to Verify a Notice or Order Issued by the Income Tax
                Department (ITD)
              </h3>
              <p>
                Before responding to any communication received in the name of
                the Income Tax Department, it’s essential to ensure the notice
                or order is genuine and officially issued by the ITD.
              </p>
              <p>
                You can verify the authenticity of any notice, order, or letter
                through the income tax e-filing portal. Here’s how:
              </p>
              <p>
                Step 1: Go to the Income Tax e-Filing Portal. On the homepage,
                find ‘Quick Links’ and click on ‘Authenticate Notice/Order
                Issued by ITD’.
              </p>
              <p>
                Step 2: You can verify the document using one of the following
                two methods:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Method 1: PAN, document
                      type, assessment year, issue date, and mobile number
                      (Applicable for notices from AY 2011–12 onward
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Method 2: Document
                      Identification Number (DIN) and mobile number (Valid for
                      all assessment years)&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Step 3 (Method 1): If you choose to authenticate using PAN and
                other details: Select this option. Enter your PAN, select the
                document type, input the assessment year, date of issue, and
                your mobile number.
              </p>
              <p>
                Step 4: Once you enter the details, an OTP will be sent to your
                mobile number. Enter the OTP to proceed. If the notice is valid,
                the system will show the Document Identification Number (DIN)
                along with the date it was issued. If the document is not found
                in the system, it will display the message: "No record found for
                the given criteria."
              </p>
              <p className="mt-4">
                Step 5 (Method 2): Alternatively, you can verify using only the
                DIN and mobile number.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Enter the DIN and your
                      mobile number.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Proceed and enter the
                      OTP sent to your mobile.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Step 6: After OTP validation:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> If the document is
                      authentic, the portal will display a success message
                      confirming its validity.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If it is not a genuine
                      document, it will show: "No record found for the given
                      Document Number."
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How Can LegallensIndia Assist with Your Income Tax Notice?</h3>
              <p>
                LegallensIndia can assist in responding to Income Tax notices
                through:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Consultation:</strong> Providing
                      personalised guidance from experienced Tax Experts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice Analysis: </strong>Help understand the
                      specifics and requirements of your Income Tax notice.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Identification:</strong> Assist in
                      identifying and compiling the necessary documentation for
                      your response.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Response Preparation: </strong>Crafting precise
                      and timely responses to address the Income Tax
                      Department's concerns.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance Assurance:</strong> Ensuring your
                      response complies with tax laws to minimise further
                      queries or penalties.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Get Expert Help from LegallensIndia to File Your Income Tax Notice
                Reply Now!
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
