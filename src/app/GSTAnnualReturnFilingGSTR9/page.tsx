import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTAnnualReturnFilingGSTR9() {
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
                GST Annual Return Filing (GSTR - 9)
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                GSTR-9 is an essential annual filing obligation for all
                taxpayers registered under the Goods and Services Tax (GST)
                system.
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
                { id: 2, title: "GST", url: "GST" },
                {
                  id: 3,
                  title: "GST Annual Return Filing (GSTR - 9)",
                  url: "",
                },
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
                      <h5 className="card-title">
                        GST Annual Return Filing (GSTR - 9)
                      </h5>
                      <p>
                        GSTR-9 is an essential annual filing obligation for all
                        taxpayers registered under the Goods and Services Tax
                        (GST) system.
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
                GST Annual Return Filing - GSTR 9 Filing
              </h2>
              <p>
                GSTR-9 is an essential annual filing obligation for all
                taxpayers registered under the Goods and Services Tax (GST)
                system. GSTR 9 encapsulates comprehensive information concerning
                outward and inward supplies, encompassing transactions made or
                received during the relevant financial year. This includes
                supplies governed by Central GST (CGST), State GST (SGST), and
                Integrated GST (IGST) regulations. The return is a consolidated
                record of all monthly or quarterly returns submitted within the
                corresponding year.
              </p>
              <p>
                At LegallensIndia, we specialize in simplifying the GSTR 9 filing
                process and ensure filing it before GSTR 9 due date. Recognizing
                that dealing with taxes can often be confusing, we aim to
                streamline the procedure and guide you through each step.
                Leveraging our expertise and user-friendly approach, you can
                confidently handle your GSTR 9 filings with accuracy.
              </p>
              <p>
                <strong>
                  <em>
                    Make LegallensIndia your partner in GSTR-9 filings. Get
                    started today and experience a stress-free way to fulfill
                    your tax responsibilities.
                  </em>
                </strong>
              </p>
              <h3>What is GSTR 9?</h3>
              <p>
                GSTR-9 is a yearly report that registered taxpayers need to
                submit. This report contains everything they bought and sold
                throughout the year, including different taxes (like CGST, SGST,
                and IGST). It also covers their total sales and purchases and
                audit details for the year. In short, GSTR-9 summarizes a whole
                year's business transactions and tax details. The GST annual
                return limit for businesses is Rs. 2 crore, but filing is
                optional for those with a turnover up to Rs. 2 crore.
              </p>
              <h3>GSTR 9 Applicability</h3>
              <p>
                The requirement to file Form GSTR-9 extends to various
                categories of taxpayers based on their registration status, GST
                annual return limit, and activities during the financial year.
                The following entities are subject to GSTR 9 Applicability and
                obligated to submit this annual return:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Normal Taxpayers:</strong> Individuals or entities
                  registered as regular taxpayers fall under the purview of Form
                  GSTR 9 filing. This encompasses businesses operating under
                  standard tax provisions.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>SEZ Units and SEZ Developers:</strong> Special
                  Economic Zone (SEZ) units and SEZ developers must also submit
                  Form GSTR-9. This ensures comprehensive reporting of their
                  financial activities within the fiscal year.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Transition from Composition Scheme:</strong> Taxpayers
                  who have transitioned from the composition scheme to normal
                  taxpayer status during the financial year are mandated to file
                  Form GSTR 9. This captures their shift from a simplified tax
                  regime to a regular tax framework.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Exclusions from Form GSTR 9 Filing</h3>
              <p>
                Composition Taxpayers: Taxpayers operating under the composition
                scheme have a distinct annual return form, i.e., Form GSTR-9A,
                designed to cater to their specific requirements. As such, they
                are not required to file Form GSTR-9.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Casual Taxpayers:</strong> Those taxpayers who engage
                  in sporadic or occasional business activities, everyday
                  taxpayers, are exempt from filing the Annual Return in Form
                  GSTR-9.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Non-Resident Taxpayers:</strong> Taxpayers who are not
                  residents of the country and engage in taxable transactions
                  within India, non-resident taxpayers, are not obligated to
                  file Form GSTR-9.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    Input Service Distributors (ISD) and OIDAR Service
                    Providers:
                  </strong>{" "}
                  Entities functioning as Input Service Distributors or
                  providing Online Information and Database Access or Retrieval
                  services are also excluded from the requirement to file Form
                  GSTR-9.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Types of GST Annual Returns</h3>
              <p>
                GSTR 9 Entities exceeding a turnover of 2 crores are mandated to
                file the GST annual return using form GSTR-9. This return
                compiles comprehensive financial information.
              </p>
              <h4>GSTR-9A</h4>
              <p>
                Registered taxpayers who opted for the GST Composition scheme
                must submit GSTR-9A. This tailored return addresses the specific
                needs of composition scheme participants.
              </p>
              <h4>GSTR-9C</h4>
              <p>
                Form GSTR-9C reconciles the taxpayer's annual returns in GSTR-9
                with the figures found in their audited financial statements for
                the given financial year. This reconciliation statement is
                essential for entities requiring an annual account audit.
              </p>
              <p>
                GST Audit Requirement GSTR-9C applies to taxpayers with an
                annual aggregate turnover exceeding two crores, necessitating an
                annual audit of their accounts. The preparation and
                certification of GSTR-9C are entrusted to Chartered Accountants
                or Cost Accountants.
              </p>
              <h3>Filing GSTR 9A: Composition Scheme Participants</h3>
              <p>
                GST-registered taxpayers who have chosen to operate under the
                composition scheme as per the GST Act are obligated to file
                GSTR-9A. This return encompasses all the taxpayer previously
                submitted information in their quarterly returns throughout the
                specific fiscal year.
              </p>
              <p>
                Eligibility Criteria Every taxpayer registered under the
                composition levy scheme in GST must fulfill the GSTR-9A filing
                requirement. However, the subsequent individuals are exempt from
                filing GSTR-9A:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}Input Service Distributors</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Non-resident taxable individuals</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Individuals are subject to Tax Deducted at Source under
                  Section 51 of the Income Tax Act.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  E-commerce operators are subject to Tax Collected at Source
                  under Section 52 of the Income Tax Act.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Casual Taxable Individuals</li>
              </ul></div></div>
              <h3 className="mt-4">Filing GSTR 9C: Reconciliation Statement</h3>
              <p>
                Role and Requirement of GSTR-9C Form GSTR-9C serves the purpose
                of filing the reconciliation statement by taxpayers for a
                specific financial year. This form constitutes a reconciliation
                between the Annual Returns submitted in GSTR-9 and the figures
                outlined in the taxpayer's Audited Financial Statements. The
                submission of this Chartered Accountant-certified form aligns
                with the filing of both the Annual Returns in GSTR-9 and the
                Audited Financial Statements. Taxpayers can fulfil this
                obligation through the GST portal or a designated Facilitation
                Centre.
              </p>
              <h4>Eligibility Criteria</h4>
              <p>
                GSTR-9C applies to taxpayers who are mandated to undergo an
                annual GST audit of their accounts. The form must be
                meticulously prepared and certified by a qualified Chartered or
                Cost Accountant.
              </p>
              <h3>What is the GSTR 9 Turnover Limit?</h3>
              <p>
                <strong></strong>
              </p>
              <p>
                GSTR-9, the Annual Return, is a mandatory filing requirement for
                all registered regular taxpayers whose{" "}
                <strong>annual turnover exceeds INR 2 crores</strong>. This GSTR
                9 turnover limit or threshold ensures that businesses with
                significant economic activity accurately report their
                transactions and tax liabilities. For businesses with a turnover
                up to Rs. 2 crore, filing GSTR 9 is optional. Each year, the GST
                department notifies the threshold turnover limit above which
                GSTR-9 must be filed.
              </p>
              <h3>GSTR 9 Due Date for Filing</h3>
              <p>
                The <strong>GSTR 9 due date </strong>for a particular financial
                year is 31st December of the subsequent financial year or as
                extended by the Government through notification from time to
                time.
              </p>
              <h3>GSTR 9 Format - Comprehensive Structure</h3>
              <p>
                The GSTR 9 format is divided into six parts, each capturing
                vital details of supplies made or received from July '17 to
                March '18. The key aspect to remember is that the information
                required in all six parts is consolidated.
              </p>
              <h4>Part-1: Basic Registration Details</h4>
              <p>
                Here, you'll provide basic registration information. This
                includes the fiscal year, GSTIN, legal name, and trade name.
                These details will be automatically filled out when GSTR-9 is
                available on the GST portal.
              </p>
              <h4>Part 2: Details of Outward Supplies</h4>
              <p>
                In this part, you'll consolidate details of outward supplies
                declared in your returns for the financial year. It's further
                split into two sections:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Supplies on which tax is payable (4A to 4L):</strong>
                  &nbsp;This covers taxable supplies, exports, supplies to SEZ,
                  reverse charge, and advances received.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    Supplies on which tax is not payable (5A to 5K):
                  </strong>
                  &nbsp;This includes exports, exempt supplies, nil-rated
                  supplies, and non-GST supplies.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Part 3: Input Tax Credit (ITC)</h4>
              <p>This part has three sections:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    ITC availed as declared in returns filed (6A to 6O):
                  </strong>
                  &nbsp;Breakdown of ITC availed on various inward supplies.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>ITC reversed and ineligible ITC (7A to 7H):</strong>
                  &nbsp;Details of ITC reversed and ineligible ITC.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Other ITC-related information (8A to 8J):</strong>
                  &nbsp;Information related to ITC as per GSTR-2A, reclaimed
                  ITC, and more.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Part-4: Tax Paid</h4>
              <p>
                Here, you'll capture the tax paid as declared in the previous
                year's returns. Breakup of tax payable, paid in cash, and paid
                through ITC is required.
              </p>
              <h4>Part-5: Transactions of Previous Financial Year</h4>
              <p>
                This part covers transactions from the previous financial year
                but is declared in the returns of April to September of the
                current financial year.
              </p>
              <h4>Part-6: Miscellaneous Details</h4>
              <p>
                In this part, you'll provide details about demands, refunds,
                supplies from composition dealers, an HSN-wise summary of
                supplies, and late fee information.
              </p>
              <p>
                Understanding and correctly filling these parts is crucial for
                accurate GSTR-9 filing. If this seems overwhelming, don't worry!
                At LegallensIndia, we're here to simplify the process and guide
                you step by step. With our support, you can confidently navigate
                the GSTR-9 form and ensure accurate compliance with GST
                regulations.
              </p>
              <h3>Documents Required to File GSTR-9</h3>
              <p>
                To file Form GSTR-9, you will typically need the following
                documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    Monthly GST Returns (GSTR-1, GSTR-2A, GSTR-3B):{" "}
                  </strong>
                  These documents show your monthly sales, purchases, and tax
                  calculations. They are essential to compile accurate data for
                  the annual return filing.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Annual Financial Statements: </strong>Your yearly
                  profit and loss statement and balance sheet provide an
                  overview of your financial health and are required to match
                  your GST returns.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Reconciliation Statement (GSTR-9C): </strong>This
                  document helps reconcile your financial data with your GST
                  returns, ensuring accuracy and compliance.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Prerequisites for Filing GSTR-9</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Taxpayer Registration: </strong>The taxpayer must be
                  registered as a regular GST taxpayer for at least one day
                  during the financial year in question.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Filing of GSTR-1 and GSTR-3B:</strong> Before filing
                  the annual return (GSTR-9), the taxpayer must have filed
                  GSTR-1 and GSTR-3B for the entire financial year. These
                  returns provide the data required to complete GSTR-9.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Auto-Filled Tables</strong>: Some tables in GSTR 9 are
                  auto-filled with data based on information provided in GSTR-3B
                  and GSTR-2A:
                  <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      Table 6A is auto-filled with data from GSTR-3B and is not
                      editable.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      Table 8A is auto-filled based on details from GSTR-2A and
                      is also not editable.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      Table 9, which contains details of tax paid as declared in
                      returns filed during the financial year, will be
                      auto-filled based on the information provided by the
                      taxpayer in Form GSTR 3B for the relevant fiscal year.
                    </li>
                  </ul></div></div>
                </li>
              </ul></div></div>
              <h3 className="mt-4">How to File GSTR 9?</h3>
              <p>Here is the step-by-step procedure on how to file GSTR-9,</p>
              <h4>Step 1: Login and Navigate to GSTR-9</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Access the official GST website and log in using your
                  credentials.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Go to the 'Returns Dashboard' and click on the 'Annual Return'
                  option.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Step 2: Select the Financial Year</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Choose the relevant financial year (2023-2024) from the 'File
                  Annual Returns' page.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Click 'Prepare Online' after a message appears with
                  instructions for filing GSTR 9 either online or offline.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Step 3: Nil Return</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Decide whether you want to file a Nil return by selecting
                  'Yes' or 'No.'
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  If you select 'Yes,' ensure all specific criteria are met (no
                  outward supply, no receipt of goods or services, no credit
                  claimed, no refund claimed, no other liability, no demand
                  order, and no late fees required).
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  If these conditions are met, proceed to calculate liabilities
                  and file a Nil GSTR-9.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  If you select 'No' for a Nil return, move on to the next step.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Step 4: Filling in Details</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  On the 'GSTR-9 Annual Return for normal taxpayers' page,
                  various sections will appear requiring specific information.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Click on all three tabs to download summary details that will
                  assist in completing different parts of GSTR-9:
                  <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}GSTR-9 System Computed Summary</li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}GSTR-1 Summary</li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}GSTR-3B Summary</li>
                  </ul></div></div>
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Enter the necessary details in the respective tables. The
                  system will auto-populate data based on GSTR-1 and GSTR-3B
                  information. If there is a +/- 20% variance in the
                  auto-populated details, the cells will be highlighted, and a
                  confirmation message will prompt further processing. Click
                  'Yes' to accept the details.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Step 5: Save the Data</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Go back to the 'GSTR-9 Dashboard' and fill in all required
                  information.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Save the data</li>
              </ul></div></div>
              <h4 className="mt-4">Step 6: Preview the Draft GSTR 9</h4>
              <p>
                Preview the form in PDF or Excel format by clicking 'Preview
                GSTR-9 (PDF)' on the GSTR-9 dashboard.
              </p>
              <h4>Step 7: Computation of Liabilities and GSTR 9 Late Fees</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Click 'Compute Liabilities,' and the GST portal will process
                  the details provided in various tables, including calculating
                  any GSTR 9 late fees if applicable.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Make the payment from the electronic cash ledger. If there are
                  insufficient funds, an additional payment can be made via net
                  banking, over the counter, or through NEFT/RTGS by creating an
                  additional payment challan.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Step 8: Final Submission</h4>
              <p>
                <strong></strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}Select the declaration check box.</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Choose the authorized signatory.</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  A page will display two options for filing:
                  <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>File with DSC:</strong> Browse and select the
                      digital signature certificate, sign, and submit.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>File with EVC: </strong>An OTP will be sent to the
                      registered email and mobile number. Upon successful
                      validation of the OTP, the return status changes to
                      'Filed.'
                    </li>
                  </ul></div></div>
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>
                  <em>
                    Need Help Simplifying This Process? LegallensIndia Can Help!
                  </em>
                </strong>
              </p>
              <p>
                <em>
                  Filing GSTR-9 can be complex, but with LegallensIndia, you can
                  streamline the entire process. Our experts are here to assist
                  you every step of the way, ensuring accuracy and compliance.
                  Connect with us today to simplify GSTR-9 filing for your
                  business!
                </em>
              </p>
              <h3>
                <span>GSTR 9&nbsp;</span>Penalty for Late Filing
              </h3>
              <p>
                Every taxpayer needs to submit the GSTR 9 form within the GST
                annual return due date. If this GSTR 9 due date is missed,
                there's a significant penalty to be aware of. The fine amounts
                to 200 INR per day. This GSTR 9 late fee is divided into 100 INR
                for CGST and 100 INR for SGST, with no late fee applicable for
                IGST. Significantly, the penalty amount will not exceed the
                taxpayer's quarterly turnover.
              </p>
              <p>
                It's crucial to meet the GSTR 9 due date to avoid these
                penalties and ensure smooth compliance with tax regulations.
                Call us now!
              </p>
              <h3>How Can LegallensIndia Assist with GSTR-9 Form Filing?</h3>
              <p>
                Navigating the intricacies of tax filings can be overwhelming,
                but LegallensIndia is here to simplify the process. We provide
                comprehensive support to make GSTR-9 form filing a breeze:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Expert Guidance:</strong> Our team of tax experts is
                  well-versed in GST regulations. We guide you step by step
                  through the GSTR-9 form, ensure filing before GSTR 9 last date
                  with accuracy.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Data Verification:</strong> We ensure the accuracy of
                  your data before submission. This reduces the chances of
                  errors that could lead to penalties.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Timely Reminders:</strong> Our system sends you timely
                  reminders so you don't miss important deadlines. You'll stay
                  informed and avoid late filing penalties.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Support at Every Step:</strong> Have questions? Our
                  customer support team is here to help. Whether you're unsure
                  about a field or need clarification on a concept, we've got
                  you covered.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Comprehensive Services:</strong> We go beyond just
                  form-filling. We assist with data compilation, calculations,
                  and ensuring all necessary information is included.
                </li>
              </ul></div></div>
              <p className="mt-4">
                With LegallensIndia by your side, you can file your annual return
                form before GSTR 9 last date with confidence, knowing that you
                have a reliable partner guiding you through the process.
              </p>
              <p>
                <strong>
                  <em>
                    Ready to simplify your GSTR-9 filing? Let LegallensIndia be
                    your trusted partner in tax compliance. Get started today
                    and experience a stress-free way to fulfill your
                    obligations.
                  </em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>Take the hassle out of GSTR-9 filing. Contact us now!</em>
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
