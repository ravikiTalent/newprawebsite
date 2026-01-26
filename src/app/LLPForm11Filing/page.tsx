import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function LLPForm11Filing() {
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
              <h1 className="display-1 text-white mb-3">LLP Form 11 Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                File LLP Form 11 with Accountant support. LLP Form 11 must be
                filed by all Limited Liability Partnerships (LLP) before 30th
                May each financial year.
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
                { id: 3, title: "LLP Form 11 Filing", url: "" },
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
                      <h5 className="card-title">LLP Form 11 Filing</h5>
                      <p>
                        File LLP Form 11 with Accountant support. LLP Form 11
                        must be filed by all Limited Liability Partnerships
                        (LLP) before 30th May each financial year.
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
                LLP Annual Return - LLP Form 11 Filing
              </h2>
              <p>
                <span>
                  Limited Liability Partnership (LLP)&nbsp;is a
                  popular&nbsp;business structure&nbsp;in India that combines
                  the benefits of a partnership and a company. It provides
                  partners with limited liability while allowing them to
                  participate in business management actively. Annual Return
                  Filing is a vital regulatory obligation imposed on Limited
                  Liability Partnerships (LLPs) registered in India. As per the
                  LLP Act of 2008, LLPs are required to submit their Annual
                  Return annually. Annual Return filing is of paramount
                  importance for LLPs.&nbsp;
                </span>
              </p>
              <p>
                <span>
                  <span>
                    LegallensIndia experts can help you file your LLP annual
                    return using Form 11 efficiently and accurately.{" "}
                  </span>
                  <span>
                    Get started today to ensure timely and hassle-free LLP
                    compliance!
                  </span>
                </span>
                <span></span>
              </p>
              <h3>
                <span>LLP Annual Return</span>
              </h3>
              <p>
                <span>
                  The&nbsp;Limited Liability Partnership&nbsp;annual return is a
                  crucial filing requirement that must be fulfilled yearly to
                  maintain compliance and avoid penalties. The&nbsp;LLP Annual
                  Return&nbsp;needs to be electronically filed and recorded with
                  the Ministry of Corporate Affairs. Ensuring the accuracy of
                  all the information provided in the form is imperative, as
                  there is no provision for resubmission.
                </span>
              </p>
              <p>
                <span>
                  Regardless of business activity or management changes, LLPs
                  must submit their Annual Returns and Financial Statements to
                  the Ministry of Corporate Affairs (MCA).
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        LLP Form 11, known as the LLP Annual Return, summarizes
                        any changes made in the management (Designated Partners)
                        during the financial Year.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Filing a NIL return is mandatory under the Limited
                        Liability&nbsp;Partnership&nbsp;Act, even if the LLP has
                        conducted no changes or business activities.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        This requirement ensures compliance with the law and
                        provides updated and accurate information to the MCA,
                        even for LLPs without business activities.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Submitting the LLP Form 11 Annual Return is a legal
                        obligation for LLPs in India, irrespective of their
                        business status or management changes.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  It is essential to note that the filing of LLP annual return
                  will not be permitted if there are any pending eForm four
                  submissions (Notice of appointment, cessation, and change in
                  designation of a designated partner or partner) with unpaid
                  fees or if any eForm four is currently being processed by the
                  MCA. Therefore, filing any necessary eForm four well before
                  the LLP Annual Return's due date is advisable.
                </span>
              </p>
              <h3>
                <span>Importance of Annual Return Filing</span>
              </h3>
              <p>
                <span>Annual Return filing for LLPs is essential because:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        It ensures compliance with regulations and legal
                        obligations
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        It promotes transparency by providing accurate
                        information to stakeholders
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        It holds the LLP accountable for its actions and
                        financial details
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        It builds trust and confidence among investors,
                        partners, and clients
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Non-compliance can lead to penalties and legal
                        consequences
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        It helps maintain organized records for future reference
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        It ensures business continuity and avoids disruptions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Overall, Annual Return filing is crucial for LLPs to meet
                  legal requirements, maintain transparency, and instill trust
                  in their stakeholders.
                </span>
              </p>
              <h3>
                <span>Forms for LLP Annual Filing</span>
              </h3>
              <p>
                <span>
                  Every LLP (Limited Liability Partnership) needs to prepare and
                  submit its Annual ROC Forms to the Registrar of Companies.
                  Every Year, an LLP is required to file two ROC Forms, namely:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Form LLP 11: Form LLP 11 is an Annual Return of an LLP
                        that needs to be filed within 60 days from the end of a
                        Financial Year.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Form LLP 8:&nbsp;</span>
                        <span>LLP Form 8</span>
                      <span>
                        &nbsp;is a Statement of Account &amp; Solvency within 30
                        days, counting from the end of six months of the closing
                        of a financial year.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <table className="table mb-5 border mt-4">
                <tbody>
                  <tr>
                    <td className="border">
                      <span>Sl. No.</span>
                    </td>
                    <td className="border">
                      <span>Document</span>
                    </td>
                    <td className="border">
                      <span>e-Form</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <span>1.</span>
                    </td>
                    <td className="border">
                      <span>Statement of Account &amp; Solvency</span>
                    </td>
                    <td className="border">
                      <span>Form 8</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <span>2.</span>
                    </td>
                    <td className="border">
                      <span>Annual Return</span>
                    </td>
                    <td className="border">
                      <span>Form 11</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <span>
                  For every Limited Liability Partnership, it is essential to
                  comply with the statutory requirements such as Annual
                  Return,&nbsp;Income Tax Return,&nbsp;Profit and Loss Account,
                  and&nbsp;Balance Sheet&nbsp;every Year, even if it does not do
                  any business. Like&nbsp;Companies, Limited Liability
                  Partnerships (LLPs) must maintain their financial Year from
                  April 1 to March 31.
                </span>
              </p>
              <h3>
                <span>
                  Information &amp; Documents Required to File LLP Form 11
                </span>
              </h3>
              <p>
                <span>
                  To successfully file LLP Form 11 Annual Return, the following
                  information and documents are required:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>LLP Identification Number</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Name of the LLP</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Registered office address of the LLP</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Business Classification&nbsp;of the LLP (Business,
                        Profession, Service, Occupation, Others)
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Particulars of compounding offences, if any</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Details of Partners of the LLP</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Total obligation of the contribution of partners of the
                        LLP
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Total contribution received by all&nbsp;</span>
                        <span>partners of the LLP</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Summary of Designated Partners and Partners</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Principal business activities of the LLP</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Particulars of penalties imposed on the LLP</span>
              </h3>
              <p>
                <span>
                  Details of LLP and company in which Partner or Designated
                  Partner are a Director/Partner (mandatory to attach if any
                  Partner or Designated Partner is a partner in any LLP and/or
                  Director in any company)
                </span>
              </p>
              <p>
                <span>
                  It is crucial to ensure the accuracy of the information
                  provided in the LLP Form 11 Annual Return, as it cannot be
                  resubmitted once filed. Additionally, the total contribution
                  received by all partners of the LLP mentioned in the Annual
                  Return must match the information in the LLP Form 8 Statement
                  of Accounts &amp; Solvency, which needs to be filed before
                  October 30.
                </span>
              </p>
              <h3>
                <span>LLP Annual Return Form 11 Due Date</span>
              </h3>
              <p>
                <span>
                  The due date for filing LLP Form 11, the Annual Return of a
                  Limited Liability Partnership (LLP), is within 60 days of the
                  financial year-end.
                </span>
              </p>
              <p>
                <span>
                  As the Financial Year for all LLPs in India closes on March
                  31, the LLP Annual Return Form 11 is due on May 30th of each
                  Year.
                </span>
              </p>
              <h3>
                <span>LLP Form 11 Late Filing Penalty</span>
              </h3>
              <p>
                <span>
                  If the LLP Form 11 Annual Return is not filed by May 30, a
                  penalty of Rs.100 per day will be levied until the
                  non-compliance is rectified. It is important to note that
                  there is no cap on the penalty amount, meaning that it will
                  continue to increase for each day of delay.
                </span>
              </p>
              <h3>
                <span>Pre-filling Requirements for MCA LLP Form 11</span>
              </h3>
              <p>
                <span>
                  The following requirements must be met to facilitate the
                  pre-filling of MCA LLP Form 11:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        <span>
                          LLPIN (Limited Liability Partnership Identification
                          number):{" "}
                        </span>
                      </strong>
                      <span>
                        The LLPIN assigned to the LLP must pre-fill the
                        essential data in the form.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        <span>Declaration of Contribution:</span>
                      </strong>
                      <span>
                        {" "}
                        It is essential to provide the declaration of the
                        contribution or sums obtained by all the partners of the
                        LLP. This information will be used for pre-filling
                        purposes.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        <span>Completion of e-Form 4 Requirements:</span>
                      </strong>
                      <span>
                        {" "}
                        If applicable, ensure that the payment of fees related
                        to e-Form 4 (Notice of appointment, cessation, and
                        revision in the designation of a designated partner or
                        partner) has been made and the processing of e-Form four
                        has been completed.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                          <span>Digital Signature Certificate (DSC)</span>
                        <span>&nbsp;of Designated Partner</span>
                      </strong>
                      <span>
                        : You should have the DSC of your Designated Partner
                        ready when you submit the form.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  By meeting these requirements, you can streamline the
                  pre-filling process for MCA LLP Form 11 and ensure accurate
                  and efficient filing.
                </span>
              </p>
              <h3>
                <span>Procedure for Filing LLP eForm 11</span>
              </h3>
              <p>
                <span>
                  The Designated partner (DP) can upload the e-Forms on the LLP
                  portal (after registering as a portal user).
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Fill in the details in the downloaded eForm. The
                        information in the form should be as of March 31 of the
                        Year for which the statement is being filed.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Enter the Limited Liability Partnership identification
                        number (LLPIN) of the LLP and click on the Pre-Fill
                        button.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        The system will automatically display the name, address
                        of the registered office, email ID, and other addresses
                        if declared under section 13(2). Enter the new valid
                        email ID if there is any change in the email ID.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Select the business classification of the LLP from the
                        drop-down list. The system will automatically display
                        the principal business activities based on LLPIN.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        The system will also display the total number of
                        designated partners, partners, and total obligation of
                        the contribution of partners of the LLP.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Enter the amount of contribution received by all
                        partners of LLP. This amount should be the same as the
                        contribution entered in eForm 8 (Statement of account
                        and solvency) regarding the corresponding financial
                        Year.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Provide the total number of designated partners (DP) and
                        partners as of March 31 of the Financial Year for which
                        the return is being filed.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Once the details are updated on the LLP portal, the
                        system shall generate a service request number (SRN),
                        which shall have to be mentioned when filing this form.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Please provide details of penalties imposed on the LLP
                        and its partners and designated partners.{" "}
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Provide the details of offenses compounded by the
                        LLP.&nbsp;
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Click the Attach button to upload the document. If you
                        wish to attach any other document, click the Optional
                        Attachment button.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>The signing of LLP Form 11</span>
              </h4>
              <p>
                <span>
                  As mentioned above, The LLP Form 11 must be signed with the
                  Digital Signatures of two designated partners. In case the
                  total obligation of the contribution of partners of the LLP
                  exceeds Rs. Fifty lakhs or turnover of LLP exceeds Rs. 5
                  Crores, then LLP Form 11 needs to be certified by a Company
                  Secretary in whole-time practice.
                </span>
              </p>
              <p>
                <span>
                  In case the total obligation of the contribution of partners
                  of the LLP does not exceed Rs. Fifty lakhs and the turnover of
                  the LLP does not exceed Rs. 5 Crores, then LLP Form 11 must be
                  certified by the designated partner of the LLP.
                </span>
              </p>
              <h4>
                <span>Certification</span>
              </h4>
              <p>
                <span>In case the total obligation of the </span>
                <span>
                  contribution of partners of the LLP exceeds Rs. Fifty lakhs or
                  turnover of LLP exceeds Rs. 5 Crores; then the eForm needs to
                  be certified by a Company Secretary in whole-time practice.
                  Enter the certificate of practice number and select whether
                  he/ she is an associate or a fellow.
                </span>
              </p>
              <p>
                <span>
                  In case the total obligation of the contribution of partners
                  of the LLP does not exceed Rs. Fifty lakhs and the turnover of
                  LLP does not exceed Rs. 5 Crores; then, the eForm needs to be
                  certified by the designated partner of the LLP. Enter the DPIN
                  of the DP.
                </span>
              </p>
              <h4>
                <span>Pre-scrutiny of the eForm</span>
              </h4>
              <p>
                <span>
                  After the check eForm is successful and the required documents
                  have been attached, pre-scrutinize the eForm.
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Digitally sign and submit the Form.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Once the form is pre-scrutinized, filled, and signed, it
                        is ready for uploading on the LLP portal. Login to the
                        LLP portal with your user ID and password for uploading
                        the eForm.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>
                  Easily File Your LLP Annual Return with LegallensIndia
                </span>
              </h3>
              <p>
                <span>
                  Filing your LLP Annual Return is now more straightforward than
                  ever with LegallensIndia. Our team of seasoned professionals is
                  dedicated to providing you with expert assistance, ensuring
                  that your filing process is efficient and error-free. Choose
                  LegallensIndia for a hassle-free, accurate, and swift LLP Annual
                  Return filing experience.
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <span>Expert Assistance:</span>
                        <span>
                          {" "}
                          LegallensIndia has a team of experts well-versed in LLP
                          compliance requirements, ensuring your filing is
                          accurate and compliant with regulations.
                        </span>
                      </span>
                      <span></span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <span>Simplified Process: </span>
                        <span>
                          Our platform is designed to make the filing process
                          straightforward and user-friendly, reducing the
                          complexity and time involved.
                        </span>
                      </span>
                      <span></span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <span>Timely Filing: </span>
                        <span>
                          With LegallensIndia, you can be confident that your Form
                          11 will be filed on time, helping you avoid penalties
                          and compliance issues.
                        </span>
                      </span>
                      <span></span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <span>Document Verification:</span>
                        <span>
                          {" "}
                          LegallensIndia verifies all the details provided,
                          ensuring no errors or omissions could lead to problems
                          with your filing.
                        </span>
                      </span>
                      <span></span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <span>Comprehensive Support:</span>
                        <span>
                          {" "}
                          From document preparation to e-filing on the MCA
                          portal, LegallensIndia provides end-to-end support.
                        </span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <span>Compliance Monitoring: </span>
                        <span>
                          LegallensIndia also helps you track other compliance
                          requirements, ensuring your LLP remains compliant
                          throughout the year.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  By choosing LegallensIndia, you benefit from professional,
                  reliable, and efficient service for your LLP Form 11 filing
                  needs.
                </span>
                <span></span>
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
