import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function IncomeTaxEFiling() {
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
              <h1 className="display-1 text-white mb-3">Income Tax E-Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Filing ITR (income tax return) is a crucial duty of every
                taxpayer in India, ensuring adherence to the nation's tax
                regulations.
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
                { id: 3, title: "Income Tax E-Filing", url: "" },
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
                      <h5 className="card-title">Income Tax E-Filing</h5>
                      <p>
                        Filing ITR (income tax return) is a crucial duty of
                        every taxpayer in India, ensuring adherence to the
                        nation's tax regulations.
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

              <h2 className="display-4 mb-3">Income Tax e Filing</h2>
              <p>
                Filing ITR (income tax return) is a crucial duty of every
                taxpayer in India, ensuring adherence to the nation's tax
                regulations. Income tax filing involves detailing all sources of
                income, deductions, and tax liabilities for a comprehensive
                report to the Income Tax Department. Early ITR e-filing helps
                avoid errors and last-minute technical glitches, ensuring a
                smoother submission process.&nbsp;&nbsp;
              </p>
              <p>
                LegallensIndia simplifies the entire Income Tax e Filing process,
                making it quick, easy, and hassle-free. Our platform guides you
                step-by-step, from auto-fetching your pre-filled data to
                assisting you in choosing the right tax regime. Whether you're
                an individual or a business owner, our user-friendly ITR efiling
                system ensures your taxes are filed accurately and on time.
              </p>
              <p>
                <strong>
                  <em>
                    Experience a seamless ITR filing process online with
                    LegallensIndia and say goodbye to tax season stress!
                  </em>
                </strong>
              </p>
              <h3>5 Quick Steps to File your ITR Online</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Quick Login/Signup:</strong> Log in or create your
                      account effortlessly.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Pick Income Source: </strong>Salary, business,
                      capital gains &amp; more.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Auto-Filled Data:</strong> Details auto-fetched
                      from IT Dept for ITR filing
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compare Tax Computation: </strong>Select between
                      old &amp; new tax regimes
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>File ITR &amp; Confirm:</strong> File return &amp;
                      receive confirmation from IT Dept
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Income Tax Return (ITR)</h3>
              <p>
                An ITR Income Tax Return is a form that taxpayers use to report
                their income details and tax payments to the Income Tax
                Department. There are seven different ITR forms available for
                ITR e filing: ITR 1 through ITR 7. The appropriate form for a
                taxpayer depends on various factors, including their sources of
                income, the total amount earned, and the type of taxpayer they
                are (such as individuals, Hindu Undivided Families (HUFs),
                companies, etc.). Each taxpayer must accurately complete their
                income tax filing within the specified deadline to comply with
                the Income Tax Law.
              </p>
              <h3>Who Needs to e File an ITR Income Tax Return?</h3>
              <p>
                Income tax filing is not just a legal obligation, but also a
                financial responsibility. It applies to individuals and entities
                across various categories and income levels. Below is a clear
                overview of who must e-file their ITR income tax return in
                India:
              </p>
              <h4>1. Salaried Individuals</h4>
              <p>
                If your total annual income exceeds the basic exemption limit,
                you are required to file IT returns online.
              </p>
              <h4>2. Self-Employed Professionals</h4>
              <p>
                Freelancers, consultants, doctors, lawyers, designers, and other
                independent professionals with income above the exemption
                threshold must e-file. Business-related expenses can also be
                claimed as deductions.
              </p>
              <h4>3. Business Owners (including SMEs &amp; MSMEs)</h4>
              <p>
                All business entities—including sole proprietorships,
                partnerships, LLPs, and private limited companies—must file IT
                returns online annually, irrespective of profit or loss.
              </p>
              <h4>4. Directors and Partners</h4>
              <p>
                Individuals who serve as directors in private limited companies
                or partners in LLPs are mandated to file ITRs reflecting their
                share of income and financial involvement in the entity.
              </p>
              <h4>5. Dividend, Interest, and Capital Gains Earners</h4>
              <p>If you receive income from:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Dividends (mutual funds,
                      equities, etc.)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Interest (from FDs,
                      bonds, etc.)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Capital gains (from
                      stocks, crypto, F&amp;O, mutual funds)…then it’s mandatory
                      to report and pay applicable taxes through ITR.
                    </li>
                  </ul>
                </div>
              </div>
              <h4>6. NRIs and RNORs</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> NRIs (Non-Resident
                      Indians) with income arising in India exceeding the
                      exemption limit must file IT returns online.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> RNORs (Resident Not
                      Ordinarily Residents) with foreign income or assets may
                      also be required to file based on disclosure obligations.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">7. Foreign Asset or Income Holders</h4>
              <p>
                Indian residents holding foreign assets (like overseas bank
                accounts, shares, or property) or earning foreign income are
                required to file ITR, even if their taxable income is below the
                exemption limit.
              </p>
              <h4>8. High-Value Transaction Individuals</h4>
              <p>
                Even if your income is below the basic exemption limit, you must
                file ITR if you have:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Deposited Rs. 1 crore or
                      more in a bank account
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Spent over Rs. 2 lakh on
                      foreign travel
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Paid more than Rs. 1
                      lakh in electricity bills in a year
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">9. Claiming Tax Refunds</h4>
              <p>
                If you've paid excess tax (through TDS, advance tax, etc.), you
                must file an ITR to claim your tax refund.
              </p>
              <h4>10. Charitable and Religious Trusts</h4>
              <p>
                Organisations that manage charity funds, religious institutions,
                or voluntary contributions must file ITRs annually to maintain
                financial transparency and tax compliance.
              </p>
              <h3>Eligibility for Income Tax efiling in India</h3>
              <p>
                In India, the obligation to do ITR online filing arises under
                certain conditions. Primarily, if your gross total income
                exceeds the basic exemption limits, you're required to e-file
                your return - and the limits vary based on your age and the tax
                regime chosen.
              </p>
              <p>
                A tax regime refers to the structure under which your income is
                taxed. As of the latest updates, taxpayers can opt for either
                the Old Tax Regime, which allows various deductions and
                exemptions, or the New Tax Regime, which offers reduced slab
                rates but restricts most deductions.&nbsp;
              </p>
              <h4>Old Tax Regime</h4>
              <p>The following criteria apply to the old tax regime:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Individuals under 60
                      years: Rs 2.5 lakh
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals between 60
                      and 80 years: Rs 3.0 lakh
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals over 80
                      years: Rs 5.0 lakh
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                In the table below, we have provided the income tax slab under
                the old tax regime for income tax filing:
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <p>
                        <strong>Income range</strong>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <strong>Income Tax Slab Rates</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Up to Rs. 2,50,000</p>
                    </td>
                    <td className="border">
                      <p>Nil</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Rs. 2,50,001 to Rs. 5,00,000</p>
                    </td>
                    <td className="border">
                      <p>5%</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Rs. 5,00,001 to Rs. 10,00,000</p>
                    </td>
                    <td className="border">
                      <p>20%</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Above Rs. 10,00,000</p>
                    </td>
                    <td className="border">
                      <p>30</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4>New Tax Regime:</h4>
              <p>
                The Union Budget 2025 introduced significant changes to the
                income tax slabs under the New Tax Regime. Below, we have
                provided the updated income tax slabs for the New Tax Regime for
                income tax filing.
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <p>
                        <strong>Income Range (Rs.)</strong>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <strong>Tax Rate (%)</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Up to 4,00,000</p>
                    </td>
                    <td className="border">
                      <p>NIL</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>4,00,001 - 8,00,000</p>
                    </td>
                    <td className="border">
                      <p>5</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>8,00,001 - 12,00,000</p>
                    </td>
                    <td className="border">
                      <p>10</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>12,00,001 - 16,00,000</p>
                    </td>
                    <td className="border">
                      <p>15</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>16,00,001 - 20,00,000</p>
                    </td>
                    <td className="border">
                      <p>20</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>20,00,001 - 24,00,000</p>
                    </td>
                    <td className="border">
                      <p>25</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Above 24,00,000</p>
                    </td>
                    <td className="border">
                      <p>30</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                However, there are other specific circumstances that require you
                to file ITR, even if your income is below these thresholds:
              </p>
              <h4>
                High-value Transactions: You are required to do Income tax
                filing if you have:
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Deposited Rs 1 crore or
                      more in one or more current bank accounts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Deposited Rs 50 lakh or
                      more in one or more savings bank accounts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Spent over Rs 2 lakh on
                      foreign travel.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Incurred electricity
                      expenses exceeding Rs 1 lakh during the financial year.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Had TDS (Tax Deducted at
                      Source) or TCS (Tax Collected at Source) exceeding Rs
                      25,000 (or Rs 50,000 for senior citizens).
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Business and Professional Income:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Businesses: </strong>Mandatory if your total
                      sales, turnover, or gross receipts exceed Rs 60 lakh
                      during the financial year.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Professionals: </strong>Mandatory if gross
                      receipts exceed Rs 10 lakh during the financial year.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Income Tax Return Forms in India</h3>
              <p>
                In India, the process of ITR e filing is streamlined through
                various Income Tax Return forms, each designed to cater to
                different types of taxpayers. Here's a comprehensive overview of
                these ITR forms required for income tax filing:
              </p>
              <h3>Due Date for ITR e Filing&nbsp;&nbsp;</h3>
              <p>
                It's important for taxpayers to note that merely paying taxes
                does not fulfil all obligations; timely income tax efiling in
                India is also mandatory to avoid penalties. Here's a summary of
                the key Income tax e-filing last dates or due dates for various
                categories of taxpayers for the Financial Year (FY) 2024-25:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <span>
                          ITR Filing for Individuals and Entities Not Liable for
                          Tax Audit:&nbsp;
                        </span>
                        <span>
                          The original last date to e-file ITR was July 31,
                          2025, later extended to September 15, 2025, and has
                          now been further extended to September 16, 2025.
                        </span>
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        ITR Filing for Taxpayers Under Tax Audit (excluding
                        those involved in transfer pricing):{" "}
                      </span>
                      <span>Due by October 31, 2025.</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        ITR Filing for Taxpayers Covered Under Transfer Pricing:{" "}
                      </span>
                      <span>Due by November 30, 2025.</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Income Tax Return filing last date for Revised/Belated
                        Return of Income for FY 2024-25:
                      </span>
                      <span> December 31, 2025.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for Income Tax e Filing</h3>
              <p>
                When preparing for your e Filing of Income Tax Return in India,
                it's important to have all necessary documents handy to ensure a
                smooth and accurate submission process. Here’s a comprehensive
                list of the documents you may require for Income tax e filing:
              </p>
              <h4>General Documents for Income Tax Filing</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong> PAN (Permanent Account Number): </strong>
                      Essential for every kind of financial transaction and
                      tax-related activity.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Aadhaar (Linked to PAN): </strong>Required for
                      verification and linking to your tax records.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Bank Account Details:</strong> We need to process
                      any potential refunds or verify financial details.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Income-Related Documents</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Salary Slips: </strong>To verify your income from
                      employment.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Rent Receipts:</strong> If you are claiming House
                      Rent Allowance (HRA).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form 16: </strong>Issued by your employer,
                      detailing the tax deducted at source on your salary.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form-16A: </strong>For TDS on Income other than
                      salary.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form-16B:</strong> For TDS on the sale of the
                      property.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form-16C: For TDS on rent.</strong>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form 26AS:</strong> Your tax credit statement,
                      which shows all taxes that have been deposited against
                      your PAN.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Deductions and exemptions-related documents</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Interest Certificates:</strong> These are from
                      banks and post offices for savings accounts and fixed
                      deposits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Home Loan Details: </strong>If you're claiming
                      deductions on home loan interest.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proof of Tax-Saving Instruments</strong>: Includes
                      life insurance, health insurance, Public
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Provident Fund (PPF),
                      National Savings Certificates (NSC), ELSS mutual funds,
                      etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Income from Capital Gains: </strong>Documents
                      related to the sale of assets like stocks or property.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Rental Income: </strong>Lease agreements and rent
                      receipts if you have rental property.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Foreign Income and Dividend Income Proofs:
                      </strong>{" "}
                      Documents verifying income from foreign sources and
                      dividends.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Procedure for eFiling of ITR in India</h3>
              <p>
                Income tax e filing in India can be accomplished through two
                primary methods: offline to online and entirely online. Here’s a
                step-by-step guide on income tax filing online and offline to
                online:
              </p>
              <h4>eFiling ITR Offline to Online Method:</h4>
              <p>
                Here is the method of how to file for IT return offline to
                online:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Download the Appropriate ITR Form: </strong>Visit
                      the official Income Tax Department website. Based on your
                      income sources and category, download the correct ITR form
                      using the Excel Utility or Java Utility available on the
                      portal.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fill Out the Form Offline:</strong> After
                      downloading, fill out the form on your computer. This
                      allows you to work through your tax details at your own
                      pace without needing an internet connection.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Save the Form in XML Format:</strong> Once
                      completed, save the form in XML format, as this is the
                      required format for uploading to the e-filing portal.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Upload the XML File to the e-Filing Portal
                      </strong>
                      : Log into your account on the e-filing portal. Navigate
                      to the appropriate section to upload the XML file and
                      submit your ITR.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Income Tax eFiling in India Online</h4>
              <p>
                E-filing your Income Tax Returns (ITR) is a straightforward
                process once you've registered at the Income Tax e filing portal
                and gathered all necessary documents. Follow these steps for
                successfully complete the ITR online filing:
              </p>
              <h4>Step 1: Log in to the Portal</h4>
              <p>
                Visit the official Income Tax Department e-filing website and
                click on “Login” at the top right corner.
              </p>
              <h4>Step 2: Enter Login Credentials</h4>
              <p>
                Input your registered username (usually your PAN) and password
                in the designated fields. Be mindful of case sensitivity in the
                password. Click “Continue” to proceed.
              </p>
              <h4>Step 3: Access E Filing Services</h4>
              <p>
                After logging in, follow this process to access e filing
                services: Navigate to the “e-File” tab on the dashboard and
                select “File Income Tax Return” from the dropdown menu to start
                e file income tax return.
              </p>
              <h4>Step 4: Choose the Assessment Year and Filing Mode</h4>
              <p>
                On the “File Income Tax Return” page, specify the Assessment
                Year (AY) for the return you are filing. For example, AY 2025-26
                corresponds to income earned from April 1st, 2024, to March
                31st, 2025.
              </p>
              <p>
                Select “Online” as the Mode of Filing. An offline option using
                the “Income Tax Utility” is available for certain scenarios.
              </p>
              <h4>Step 5: Select Taxpayer Category</h4>
              <p>
                Indicate whether you are filing as an Individual, Hindu
                Undivided Family (HUF), or other entity types. Click “Continue”
                after making your selection.
              </p>
              <h4>Step 6: Choose the Right ITR Form</h4>
              <p>
                Based on your taxpayer category and income details, the portal
                will suggest appropriate ITR forms. Choose the one that matches
                your income sources.
              </p>
              <h4>Step 7: Reason for ITR Filing</h4>
              <p>
                Select your reason for income tax e filing, which might include
                regular assessment, claiming a refund, or filing a revised
                return.
              </p>
              <h4>Step 8: Review and Edit Pre-Filled Information</h4>
              <p>
                The portal may pre-fill certain sections based on data from
                employers, banks, etc. Verify each entry for accuracy and edit
                any incorrect information before proceeding.
              </p>
              <h4>Step 9: Review and Confirm ITR Return Details</h4>
              <p>
                Review a detailed display of your ITR, including income,
                deductions, and tax liability. Ensure all data is correct before
                moving forward.
              </p>
              <h4>Step 10: Make Tax Payment</h4>
              <p>
                If applicable, settle any tax dues via the e-payment gateway.
                Select your bank and preferred payment method, such as net
                banking or debit/credit card.
              </p>
              <p>
                Once the tax payment is completed (if applicable), your Income
                Tax Return will be successfully submitted to the Income Tax
                Department. Ensure to use this method of how to file for IT
                return properly and accurately.&nbsp;
              </p>
              <h3>Completed Your ITR e-Filing? Here's What to Do Next</h3>
              <h4>e-verify your return</h4>
              <p>
                After you have done your the ITR e filing, the next crucial step
                is to e-verify your return. This is an essential part of the ITR
                e filing process, as it confirms the authenticity of your
                submission to the Income Tax Department. You can e-verify your
                ITR in several ways:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Electronic Verification Code (EVC): </strong>
                      Generated through your bank account, Demat account, or
                      registered mobile number and email.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Aadhar OTP: </strong>A one-time password sent to
                      the mobile number linked to your Aadhaar, used for
                      verification.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Sending a Signed ITR-V:</strong> If electronic
                      verification isn’t possible, you can mail a signed copy of
                      ITR-V (Income Tax Return Verification) form through normal
                      or speed post to the Centralized Processing Center, Income
                      Tax Department in Bengaluru within 120 days from the date
                      of filing.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Steps to Track e-Filing Status</h4>
              <p>
                After completing the income tax filing, it's important to track
                the status to ensure it has been processed successfully. Here’s
                how you can do it:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Step 1: Visit the Income Tax e-Filing Portal:
                      </strong>{" "}
                      Go to the Income Tax Official Portal and click on the
                      ‘Login’ button at the top-right corner.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Step 2: Log in with Your Credentials: </strong>
                      Enter your PAN (as username), password, and the captcha
                      code, then click ‘Continue’.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Step 3: Navigate to ‘e-File’ Section:&nbsp;
                      </strong>{" "}
                      After logging in, click on the ‘e-File’ tab in the
                      dashboard, then select ‘Income Tax Returns’ &gt; ‘View
                      Filed Returns’.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Step 4: View Status: </strong>A list of your filed
                      returns will appear. You can see the status of each return
                      (e.g., "Successfully e-verified", "Processed", "Under
                      Processing", etc.) in the "Status" column.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Revised Return Filings</h3>
              <p>
                If you've already filed your original or belated return under
                Section 139(1) or 139(4) of the Income Tax Act, 1961, and later
                realise there was an error or omission — you’re eligible to file
                a Revised Return. Common reasons include correction of income
                details, missed tax deductions, forgotten disclosures, or
                updates to personal information. Filing a revised return is
                simple: just choose the 'Revised Return' option while e-filing
                your ITR and update the necessary details. The deadline to file
                a revised return is December 31 of the relevant assessment year,
                and the sooner you make the correction, the better, to avoid
                complications or notices from the tax department.
              </p>
              <h3>Belated Return Filings</h3>
              <p>
                If you miss the original deadline of 31st July for filing your
                income tax return, you can still file a Belated Return under
                Section 139(4) of the Income Tax Act. This can be done on or
                before 31st December of the relevant assessment year. While
                belated filing allows you to claim a refund, it may attract
                certain penalties. A late fee under Section 234F applies — Rs.
                5,000 for those with income above Rs. 5 lakhs, and Rs. 1,000 for
                income below Rs. 5 lakhs.{" "}
              </p>
              <p>
                However, if your income is below the basic exemption limit, no
                late fee is charged. Also, if there's any unpaid tax, an
                interest of 1% per month under Section 234A will be levied. To
                receive any refund due, make sure your bank account is
                pre-validated on the income tax e-filing portal.
              </p>
              <h3>Updated Return (ITR-U) Filing</h3>
              <p>
                If you’ve missed both the original and belated return filing
                deadlines, you still have a chance to file your taxes through an
                Updated Return (ITR-U) under Section 139(8A) of the Income Tax
                Act. This allows taxpayers to declare any missed income or
                correct errors within four years (as per Budget 2025) from the
                end of the relevant assessment year. However, additional tax and
                interest may apply, and this option cannot be used to claim
                refunds or reduce tax liability.
              </p>
              <h3></h3>
              <h3>Effortless Income Tax e-Filing with LegallensIndia!</h3>
              <p>
                ITR filing made easy with LegallensIndia! We simplify the entire
                process, ensuring that your income tax return is filed
                accurately and on time. From auto-fetching pre-filled data to
                expert assistance every step of the way, we eliminate the hassle
                and complexities often associated with tax filing. With
                LegallensIndia, you can easily compare tax regimes, select your
                income sources, and file your return in just a few clicks—saving
                you both time and effort. Trust us to handle the paperwork, so
                you can focus on what matters most. Start your ITR filing today
                with LegallensIndia—your trusted partner in tax compliance!
              </p>
              <h4>Prepare to File ITR Yourself?</h4>
              <p>
                Filing your Income Tax Return has never been easier with
                LegallensIndia! Complete your filing in just 4 simple steps,
                taking only a few minutes. Our platform walks you through the
                entire process, ensuring everything is filed accurately and on
                time. Whether you're a salaried individual, freelancer, or
                business owner, LegallensIndia Income tax e filing services makes
                it fast and easy to file your ITR on your own.
              </p>
              <h4>Looking for Expert-Assisted ITR Filing?</h4>
              <p>
                If you'd prefer expert help, LegallensIndia allows you to hire a
                personal CA to handle your ITR filing. Our professional service
                guarantees your tax return is filed quickly and accurately. Our
                experts will guide you through the process, ensuring all details
                are correct and helping you maximize your refund. Let us take
                care of the complexities, so you can focus on what matters most!
              </p>
              <p>
                <strong></strong>
              </p>
              <p>
                <strong>
                  <em>
                    Get Started with Effortless Tax Filing Today! Sign Up Now
                    &amp; File Your Income Tax Return – Fast, Secure, and
                    Accurate!
                  </em>
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
