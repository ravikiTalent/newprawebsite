import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function FDIFilingwithRBI() {
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
              <h1 className="display-1 text-white mb-3">FDI filing with RBI</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                When a business entity in India receives Foreign Direct
                Investment (FDI) and issues shares to a foreign investor, it
                must adhere to the RBI's FDI filing requirements.
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
                { id: 2, title: "Compliance", url: "" },
                { id: 3, title: "FDI filing with RBI", url: "" },
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
                      <h5 className="card-title">FDI filing with RBI</h5>
                      <p>
                        When a business entity in India receives Foreign Direct
                        Investment (FDI) and issues shares to a foreign
                        investor, it must adhere to the RBI's FDI filing
                        requirements.
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

              <h2 className="display-4 mb-3">FDI Filing with RBI</h2>
              <p>
                <span>
                  When a business entity in India receives Foreign Direct
                  Investment (FDI) and issues shares to a foreign investor, it
                  must adhere to the RBI's FDI filing requirements. This
                  involves submitting the Form FCGPR through the online Foreign
                  Investment Reporting and Management System (FIRMS) portal.
                </span>
              </p>
              <p>
                <span>
                  LegallensIndia can assist you in efficiently navigating the
                  FDI filing with the RBI. Our expertise ensures that your
                  business complies seamlessly with all regulatory requirements.
                </span>
              </p>
              <p>
                <span>
                  Reach out to us today for professional support in managing
                  your FDI Filings.
                </span>
              </p>
              <h3>
                <span>FDI filing with RBI&nbsp;</span>
              </h3>
              <p>
                <span>
                  Foreign Direct Investment (FDI) filing refers to reporting the
                  inflow of foreign investment in an Indian company to the the
                  Reserve Bank of India (RBI). This reporting is mandatory for
                  Indian companies that receive foreign investments in equity
                  shares, compulsorily convertible preference shares or
                  debentures, and warrants or partly-paid shares. The reporting
                  process involves submitting the Foreign Currency and General
                  Permission Route (FCGPR) form and a Company Secretary (CS)
                  certificate.
                </span>
              </p>
              <h3>
                <span>Purpose of FDI Reporting with RBI</span>
              </h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        FDI reporting with RBI aims to ensure compliance with
                        the FDI policy and provide a transparent and efficient
                        regulatory framework for foreign investments in India.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        This helps the government and the RBI to monitor and
                        regulate foreign investments in the country and to make
                        sure that they comply with the FDI policy and
                        regulations.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Applicable Regulation on FDI filing with RBI</span>
              </h3>
              <p>
                <span>
                  The regulations applicable to Foreign Direct Investment (FDI)
                  filing with the Reserve Bank of India (RBI) are primarily
                  governed by the Foreign Exchange Management Act, 1999 (FEMA)
                  and its regulations.
                </span>
              </p>
              <h3>
                <span>
                  Conditions Required for Foreign Direct Investment (FDI)
                </span>
              </h3>
              <p>
                <span>
                  Foreign Direct Investment (FDI) involves a foreign company or
                  individual investing in an Indian company. To ensure legal
                  compliance, the investment must adhere to the FDI policy
                  outlined by the Indian government. Additionally, the
                  securities issued must be regulated under the Foreign Exchange
                  Management Act (FEMA).
                </span>
              </p>
              <p>
                <span>
                  FDI is permitted fewer than two routes in various sectors:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Automatic Route: Under this route, non-resident or
                        Indian companies can invest in a company without prior
                        approval from RBI or the Government of India.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Government Route: Under this route, prior approval from
                        the Government of India is required before investing in
                        a company.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>FCGPR Form for FDI Filing</span>
              </h3>
              <p>
                <span>
                  To ensure that foreign investments are in compliance with the
                  FDI policy and regulations, the Reserve Bank of India (RBI)
                  has mandated that all FDI inflows in India must be reported to
                  the RBI through the Foreign Currency and General Permission
                  Route (FCGPR) form.
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        The FCGPR form is used to report the receipt of foreign
                        investments in the form of equity shares, warrants, or
                        partly-paid shares and compulsorily convertible
                        preference shares or debentures.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        The FCGPR form must be filed electronically on the RBI's
                        online reporting portal (FIRMS) within 30 days of the
                        receipt of the FDI.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        The FIRM's portal can be accessed through the RBI's
                        website, and businesses are required to create an Entity
                        Master and register themselves on the portal before
                        filing the FCGPR form electronically.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>When Is the FC-GPR Form Required To Be Filed?</span>
              </h3>
              <p>
                <span>
                  The FC-GPR form needs to be filed in the following situations:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Incorporation with Non-Resident Shareholders:</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        After the company's incorporation, a bank account must
                        be opened.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Once the subscription money is received in the bank
                        account, the company must report to RBI using the FC-GPR
                        form.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Under FEMA, there is no specific timeline for bringing in the
                  subscription money for newly incorporated companies. However,
                  under the Companies Act 2013, subscribers must bring in the
                  subscription amount within 180 days from the date of
                  incorporation.
                </span>
              </p>
              <h4>
                <span>Further Issue of Shares:</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Only equity shares, convertible preference shares, and
                        convertible debentures are considered under Foreign
                        Direct Investment (FDI).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        If share application money is received, shares must be
                        allotted within 60 days from the receipt of the
                        application money.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Once shares are allotted, the company must report to RBI
                        using the FC-GPR form within 30 days of the allotment.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Investment in any other instrument will be treated as
                        borrowings and must meet ECB (External Commercial
                        Borrowing) requirements.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Due Date for Filing Form FCGPR</span>
              </h3>
              <p>
                <span>
                  Form FCGPR must be filed within 30 days of the allotment of
                  shares, Compulsorily Convertible Preference Shares (CCPS), or
                  Compulsorily Convertible Debentures (CCD).
                </span>
              </p>
              <h3>
                <span>Documents Required</span>
              </h3>
              <p>
                <span>
                  The following documents are required for filing the FCGPR
                  form:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Copy of KYC report of the remitter</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Declaration by an authorized representative of the
                        Indian Company
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        CS Certificate stating that all requirements have been
                        complied with SMF- user manual
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        A valuation report by a chartered accountant/merchant
                        banker indicates the manner in which the price of the
                        capital instruments issued to a person outside India is
                        arrived at.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Copy of FIPB approval (if required)</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Letter of Debit Authorization</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Declaration for conversion of CCPS</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Pricing guidelines declaration</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Board Resolution for the allotment of securities along
                        with the List of Allottees
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Reason for any delay in submission, if required
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Any other documents that may be asked for by RBI or AD
                        Bank.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Once all the required documents are received, the FCGPR
                        form can be filed.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Penalty for Non-Filing of Form FCGPR with RBI</span>
              </h3>
              <p>
                <span>
                  If a company fails to file the FCGPR form within the
                  prescribed timeline, it will face penalties.
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        The penalty for delayed reporting is 1% of the total
                        investment amount, with a minimum of INR 5,000 and a
                        maximum of INR 5 lakhs per month or part thereof for the
                        first six months of delay.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        After six months, the penalty rate doubles to 2% per
                        month until the non-compliance is rectified.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        The penalty must be paid online into a designated
                        account with the RBI. Therefore, it is crucial for
                        companies to file the FCGPR form within the stipulated
                        time to avoid any penalties.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Process for Filing FCGPR</span>
              </h3>
              <p>
                <span>
                  Filing Foreign Direct Investment (FDI) with the Reserve Bank
                  of India (RBI) using Form FCGPR involves several steps.
                </span>
              </p>
              <h4>
                <span>Obtain Authorized Dealer (AD) Code</span>
              </h4>
              <p>
                <span>
                  The first step is to obtain an Authorized Dealer (AD) Code
                  from a bank authorised by the RBI. The AD bank acts as an
                  intermediary between the company and the RBI and verifies the
                  information provided in the FCGPR form.
                </span>
              </p>
              <h4>
                <span>Registration of Entity User on Firms Portal</span>
              </h4>
              <p>
                <span>
                  The Indian company must register as an Entity User on the
                  RBI's online reporting portal (Firms Portal). The company must
                  provide its details and obtain a User ID and Password.
                </span>
              </p>
              <h4>
                <span>Creation of Entity Master</span>
              </h4>
              <p>
                <span>
                  Once registered on the Firms Portal, the company must create
                  an Entity Master by providing details such as name, address,
                  PAN, TAN, and other relevant information.
                </span>
              </p>
              <h4>
                <span>Registration for Business Users on Firms Portal</span>
              </h4>
              <p>
                <span>
                  After creating the Entity Master, the company must register
                  the Business Users authorised to access the Firms Portal and
                  submit the FCGPR form. The Business Users must provide their
                  details and obtain a User ID and Password.
                </span>
              </p>
              <h4>
                <span>Preparation of Form FCGPR</span>
              </h4>
              <p>
                <span>
                  After obtaining the AD Code, the company must prepare the
                  FCGPR form in the required format. The form can be accessed on
                  the RBI's online reporting portal.
                </span>
              </p>
              <h4>
                <span>Provide Relevant Information</span>
              </h4>
              <p>
                <span>
                  The company must provide relevant information in the FCGPR
                  form, including the details of the foreign investor, the
                  amount and type of investment, and the percentage of equity
                  held by the foreign investor. The company must also provide
                  information on the sector where the investment is made and any
                  other relevant details per the guidelines.
                </span>
              </p>
              <h4>
                <span>Signing and Certification</span>
              </h4>
              <p>
                <span>
                  The FCGPR form must be signed and certified by the company's
                  authorized signatory and the AD bank's authorized signatory.
                  The certification must confirm the accuracy and completeness
                  of the form's information.
                </span>
              </p>
              <h4>
                <span>Reporting of FDI Received</span>
              </h4>
              <p>
                <span>
                  The Indian company must report the receipt of FDI within 30
                  days of receipt using Form FC-GPR on the Firms Portal. The
                  FCGPR form must be duly filled, signed, and certified by the
                  company's and AD bank's authorised signatory. The company must
                  also upload the required documents, such as the Foreign Inward
                  Remittance Certificate (FIRC) and the KYC documents of the
                  foreign investor.
                </span>
              </p>
              <h4>
                <span>Submission of Form</span>
              </h4>
              <p>
                <span>
                  Once the FCGPR form is duly completed and certified, it must
                  be submitted to the AD bank electronically on the RBI's online
                  reporting portal within 30 days of receiving the FDI.
                </span>
              </p>
              <h4>
                <span>Acknowledgement Receipt</span>
              </h4>
              <p>
                <span>
                  After submission of the FCGPR form, the Firms Portal generates
                  an acknowledgment receipt. The company must download and save
                  the acknowledgement receipt for future reference.
                </span>
              </p>
              <h4>
                <span>Follow-up</span>
              </h4>
              <p>
                <span>
                  The Company must follow up with the AD bank to ensure that the
                  RBI has accepted the FCGPR form. The company must promptly
                  address any discrepancies or clarifications if the RBI seeks
                  any differences or clarifications.
                </span>
              </p>
              <h3>
                <span>Simplify Your FDI Filing with LegallensIndia</span>
              </h3>
              <p>
                <span>
                  Choose LegallensIndia for your FDI filing with the RBI to
                  ensure a smooth and hassle-free process. Our team of experts
                  provides comprehensive support, from document preparation to
                  timely submission, ensuring full compliance with RBI
                  regulations. With our in-depth knowledge and experience, we
                  help you navigate the complexities of FDI filings, saving you
                  time and preventing costly penalties.&nbsp;&nbsp;
                </span>
              </p>
              <p>
                <span>
                  In addition to FDI Filings,&nbsp; We can also help businesses
                  with various other regulatory filings and<span> </span>
                </span>
                <span>compliance requirements.</span>
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
