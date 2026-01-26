import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ITR1ReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">ITR-1 Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                ITR, or Income Tax Return, is a crucial document in which
                taxpayers report their income and applicable taxes to the income
                tax department.
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
                { id: 3, title: "ITR-1 Return Filing", url: "" },
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
                      <h5 className="card-title">ITR-1 Return Filing</h5>
                      <p>
                        ITR, or Income Tax Return, is a crucial document in
                        which taxpayers report their income and applicable taxes
                        to the income tax department.
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

              <h2 className="display-4 mb-3">ITR-1 Filing</h2>
              <p>
                ITR, or Income Tax Return, is a crucial document in which
                taxpayers report their income and applicable taxes to the income
                tax department. The Income Tax Act of 1961 outlines all the ITR
                forms and their procedures. Among these forms, ITR-1, often
                referred to as Sahaj, holds particular significance. ITR1
                (Sahaj) is designed for individuals with an income of up to
                Rs.50 lakhs, making it applicable to most salaried individuals.
              </p>
              <p>
                LegallensIndia offers a seamless and efficient solution for filing
                Income Tax Returns using the ITR1 form in India. Our team of
                experts guides you through the entire process, ensuring that you
                meet your tax compliance obligations effortlessly. With
                LegallensIndia' ITR 1 filing Services, you can navigate the
                complexities of tax submission with ease, allowing you to focus
                on what matters most while we handle your tax return needs. Get
                started today!
              </p>
              <h3>What is ITR?</h3>
              <p>
                An Income Tax Return (ITR) is a document used by taxpayers to
                report details about their income earned and the corresponding
                tax liability to the income tax department. It serves as a
                formal declaration of an individual or entity's financial
                information, ensuring transparency and compliance with tax
                regulations.
              </p>
              <p>
                The ITR landscape includes seven different forms: ITR-1, ITR-2,
                ITR-3, ITR-4, ITR-5, ITR-6, and ITR-7. Each taxpayer is required
                to file their ITR on or before the specified due date. The
                choice of ITR form depends on factors such as the sources of
                income, the amount of income earned, and the taxpayer's
                category, which can include individuals, HUFs (Hindu Undivided
                Families), companies, and more.
              </p>
              <h3>What is ITR 1 Sahaj Form?</h3>
              <p>
                The ITR-1 Sahaj Form, as its name implies, serves as a
                simplified means for individual taxpayers to file their income
                tax returns. This form is specifically tailored for resident
                individuals in India whose total income falls below the Rs. 50
                Lakhs threshold and originates from the following sources:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Income from Salary or
                      Pension
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from a Single
                      House Property
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from Other
                      Sources
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The ITR-1 Form simplifies the procedure for eligible individuals
                to disclose their income tax information, offering a convenient
                and effective approach to fulfilling their tax obligations.
              </p>
              <h3>Who Can File ITR1</h3>
              <p>
                ITR1 is applicable to Resident Individuals who meet the
                following criteria:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Income Threshold:</strong> The individual's total
                      income for the financial year must not exceed Rs. 50 lakh.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Permissible Income Sources:</strong> ITR-1 is
                      suitable for individuals whose income comes from the
                      following sources:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Salary
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from a
                      single-house property
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Family pension income
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Agricultural income (up
                      to Rs. 5,000)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Other sources include:
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Interest from Savings
                      Accounts
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Interest from Deposits
                      (Bank / Post Office / Cooperative Society)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Interest from Income Tax
                      Refund
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Interest received on
                      Enhanced Compensation
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Any other Interest
                      Income
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Family Pension
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Clubbing of Income:</strong> Combining income with
                      a spouse's or a minor's income is allowed only if the
                      source of income falls within the specified limits
                      mentioned above.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Note: </strong>Filing your Income Tax Return (ITR) is
                mandatory if your Total Income exceeds the basic exemption
                limit, before claiming deductions under Sections 80C to 80U, as
                per Section 139 of the Income Tax Act. You must be filed even
                the total income below the exemption limit, if you meet specific
                criteria like high deposits, significant expenditures, or
                substantial business/professional income. Ensure to file before{" "}
                <strong>31st December 2024</strong> to avoid penalties and
                notices from the Income Tax Department.&nbsp;&nbsp;
              </p>
              <h3>Who Cannot File ITR1</h3>
              <p>
                The following categories of individuals are not eligible to file
                ITR1:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Resident Not Ordinarily
                      Resident (RNOR) and Non-Resident Indian (NRI) individuals
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Those with a total
                      income exceeding ? 50 lakh
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals with
                      agricultural income surpassing ? 5,000
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals with income
                      derived from activities like lottery, racehorses, legal
                      gambling, etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Those with taxable
                      capital gains, both short-term and long-term
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals who have
                      invested in unlisted equity shares
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals with income
                      sourced from business or profession
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals serving as
                      Directors in a company
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals availing tax
                      deduction under section 194N of the Income Tax Act
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals with
                      deferred income tax on Employee Stock Ownership Plan
                      (ESOP) received from an eligible start-up employer
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals who own and
                      generate income from more than one house property
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals who do not
                      meet the eligibility criteria outlined for ITR-1 filing.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">ITR-1 Due Date</h3>
              <p>
                The due date for ITR 1 filing typically falls on July 31st of
                each assessment year. It's crucial to meet this deadline to
                ensure that your income tax return is filed on time and in
                compliance with tax regulations.
              </p>
              <h3>Structure of ITR Form 1: A Comprehensive Overview</h3>
              <p>
                While ITR Form 1 may seem straightforward, it requires careful
                attention during the filling process. ITR Sahaj is organized
                into five distinct parts and two schedules to ensure clarity.
                These segments include:
              </p>
              <h4>Part A: General Information</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Personal details such as
                      name, PAN number, age, gender, and date of birth.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Ward and assessing
                      officer details (if known).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Communication address,
                      contact number, city, and state.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Filing date and Aadhaar
                      details.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Part B: Gross Total Income</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Information on gross
                      total income, including earnings from salary, property,
                      and other sources.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Part C: Deductions and Total Taxable Income</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Details related to
                      deductions under sections 80C, 80D, 80U, and 80G.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Part D: Computation of Tax Payable</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Rows covering tax
                      computation, status, rebates, post-rebate taxes, TDS
                      claims, etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> D20 for bank account
                      details, including account number, bank name, IFSC code,
                      and account type, with an option to specify the account
                      for refund, if applicable.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Part E: Other Information</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Various additional
                      details as required by the tax authorities.
                    </li>
                  </ul>
                </div>
              </div>
              <p>Additionally, the form comprises two schedules:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Schedule IT
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Schedule TDS &amp; TCS
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The final step in the
                      process involves the verification of the information
                      provided.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for Filing ITR 1</h3>
              <p>
                ITR Sahaj Forms are attachment-less forms. This means that
                taxpayers are not required to attach any documents.
              </p>
              <p>
                However, taxpayers should retain the following documents for
                their records and be prepared to produce them before tax
                authorities if requested, particularly in situations like
                assessments or inquiries.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form 16:</strong> Provided by all your employers
                      for the relevant financial year.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form 26AS:</strong> Ensure that the TDS details in
                      Form 16 match those in Part A of Form 26AS.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Receipts:</strong> Retain receipts for exemptions
                      or deductions (e.g., HRA allowance or Section 80C/80D
                      deductions) not submitted to your employer on time to
                      claim them directly on your income tax return.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN Card:</strong> Your Permanent Account Number
                      (PAN) card is essential for identification.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Bank Investment Certificates:</strong> Details of
                      interest earned from bank accounts, such as bank passbooks
                      or fixed deposit certificates.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Required Details in ITR1 Form</h3>
              <p>
                The ITR1 form comprises several sections, each requiring
                specific information for accurate completion.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part A:</strong>{" "}
                      This section captures personal information, including PAN
                      number, age, gender, address, and communication details.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part B:</strong>{" "}
                      Information on gross total income, including earnings from
                      salary, property, and other sources.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part C:</strong>{" "}
                      Details related to deductions under sections 80C, 80D,
                      80U, and 80G.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part D:</strong>{" "}
                      Tax computation, status, rebates, post-rebate taxes, TDS
                      claims, and bank account details.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Types of Income Excluded from ITR-1 Form</h3>
              <p>
                The ITR-1 form excludes certain categories of income, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Profits and Gains from
                      Business or Profession
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from More than
                      One House Property
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Capital Gains
                      (Short-term or Long-term)
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Specific Other Sources of Income:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Income from owning and
                      maintaining racehorses
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Winnings from lotteries
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income subject to
                      special rates under Section 115BBDA or Section 115BBE
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income is meant to be
                      distributed as per the regulations of section 5A
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Penalty for late ITR 1 Filing</h3>
              <p>
                Late filing of income tax returns can result in various
                penalties, depending on your total income.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Individuals with a total
                      income exceeding Rs 5 lakh may face a penalty of Rs 5,000,
                      while those with income below this threshold may incur a
                      reduced penalty of Rs 1,000.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Additionally, if you owe
                      taxes and fail to file the return by the due date, you
                      will be liable for additional interest at a rate of 1% per
                      month until you submit the return.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> In more severe cases,
                      penalties can be imposed for underreporting or
                      misreporting of income. Underreporting may lead to
                      penalties of up to 50% of the tax underreported, while
                      misreporting can result in penalties of up to 200% of the
                      misreported tax amount.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Furthermore, repeated
                      failure to file tax returns despite reminders from tax
                      authorities may lead to prosecution procedures. This could
                      result in imprisonment ranging from three months to seven
                      years, depending on the outstanding tax liabilities.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It is crucial to file your ITR1 promptly and accurately to avoid
                these legal and financial consequences.
              </p>
              <h3>How can LegallensIndia help in ITR-1 (Sahaj)?</h3>
              <p>
                LegallensIndia provides valuable assistance in filing your ITR-1
                (Sahaj) income tax return. We start by helping you select the
                appropriate form based on your income sources, ensuring accuracy
                in filing.
              </p>
              <p>
                We meticulously calculate your tax liability, perform error
                checks, and prioritize timely filing to reduce the risk of
                penalties or tax notices. If eligible, we assist in processing
                your income tax refund efficiently.
              </p>
              <p>
                Our team of tax experts is available to address your queries and
                provide guidance throughout the process. LegallensIndia also keeps
                you updated on tax law changes and deadlines, ensuring your
                compliance with the latest regulations. With our secure
                platform, you can trust us to safeguard your financial data
                while simplifying your ITR-1 filing experience.
              </p>
              <p>
                <strong>
                  <em>Get started now and make tax filing easier than ever!</em>
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
