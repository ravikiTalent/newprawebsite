import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function BusinessTaxFiling() {
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
              <h1 className="display-1 text-white mb-3">Business Tax Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A business tax filing is an income tax return filing applicable
                to companies.
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
                { id: 3, title: "Business Tax Filing", url: "" },
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
                      <h5 className="card-title">Business Tax Filing</h5>
                      <p>
                        A business tax filing is an income tax return filing
                        applicable to companies.
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
                Business Income Tax Return (ITR) Filing
              </h2>
              <p>
                Setting up a business and understanding the complexities of
                filing returns is essential to running a business. A business
                tax filing is an income tax return filing applicable to
                companies. It serves as a comprehensive record of the business's
                earnings and expenses.
              </p>
              <p>
                Business Income Tax return filings in India just got more
                straightforward with LegallensIndia. We are here to help
                businesses easily file their tax returns and offer LEDGERS small
                business tax filing software. Our expert team makes the process
                less stressful, so you don't miss business tax return filing
                deadlines or break any rules. It doesn't matter if your business
                is starting or already big – we are here to help.
              </p>
              <p>
                Ready to simplify your business taxes? Reach out to us today and
                discover smoother and stress-free Business Tax return Filings!
              </p>
              <h3>What is a business tax return?</h3>
              <p>
                A business tax return refers to an income tax return for
                businesses. A business income tax return is a comprehensive
                report that outlines a business's income, expenses, and
                pertinent tax details, all presented in a designated form. It
                entails the submission of income tax returns for businesses,
                with the added requirement of reporting Tax Deducted at Source
                (TDS). This process must be carried out annually.
              </p>
              <p>
                This return serves as a financial statement detailing earnings.
                It outlays and is a documentation of additional financial
                components like fixed assets, loans obtained, loans extended,
                debtors, and creditors within the business. It is important to
                meet the income tax return filing last date for business.
              </p>
              <h3>Income Tax Return Filing in India</h3>
              <p>
                Both Indian citizens and companies are required to file income
                tax returns if their Gross Total Income (GTI) exceeds Rs. 3
                lakhs (amounts below three lakhs are exempted). These ITR for
                business income must be submitted annually within the specified
                business tax return filing deadline. Various business income ITR
                forms are available, tailored to different criteria applicable
                to multiple groups of individuals and businesses. It is
                essential to identify the appropriate arrangements and submit
                them to the Income Tax Department of India for processing before
                income tax return filing last date for business. Ensure to
                follow the right process on how to file taxes for small business
                owners.
              </p>
              <p>
                Filing ITR for business income offers several advantages, some
                of which are outlined below:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Refund Claims:</strong> Accurate and timely
                      business tax return filing can lead to potential refunds,
                      which can be beneficial for improving cash flow within the
                      business.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Carry-forward of Losses:</strong> Losses incurred
                      in one financial year can be carried forward and adjusted
                      against future profits, reducing tax liabilities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Loan Applications:</strong> Having proper and
                      up-to-date income tax returns can serve as evidence of
                      financial stability, increasing the chances of obtaining
                      loans or credit from financial institutions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Evidence for Transactions:</strong> Filed ITR for
                      business income can provide solid proof of the business's
                      financial transactions and activities, which can be
                      helpful for legal or contractual purposes.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance with Law:</strong> Business tax filing
                      ensures compliance with tax regulations, helping
                      businesses avoid penalties or legal issues.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transparency:</strong> Transparent financial
                      records through tax returns can enhance the business's
                      credibility, fostering trust among customers, partners,
                      and stakeholders.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Audit Preparedness:</strong> Filed ITR for
                      business income provide a basis for accurate financial
                      statements, preparing the business for potential tax
                      audits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Growth:</strong> Accurate financial
                      reporting through tax returns can assist in making
                      informed business decisions, aiding in growth and
                      expansion strategies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Avoiding Notices:</strong> Timely and accurate
                      filing reduces the likelihood of receiving notices or
                      queries from tax authorities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Availing Tax Benefits:</strong> Filing returns on
                      or before&nbsp;
                      <span>
                        income tax return filing last date for business
                      </span>
                      &nbsp;enables businesses to avail themselves of various
                      tax benefits and deductions legally, optimizing their tax
                      liabilities.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who should file a Business Income Tax Return?</h3>
              <p>
                Filing a business income tax return is mandatory for all
                eligible businesses operating within the framework of Indian tax
                regulations. The need to do a business tax return filing is
                contingent upon the structure of the business:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Sole Proprietorship
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Partnership Firm
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Limited Liability
                      Partnership (LLP)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Companies – Private
                      Limited Company, One Person Company
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Types of Business Income Tax Return Filing</h3>
              <p>
                The different categories for filing business income tax returns
                are determined based on the types of business entities allowed
                to submit them. These categories correspond to other business
                structures and their respective designations. Ensure to follow
                the guidelines designed for how to file taxes for small business
                owners.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Partnership Firm Tax
                      Return Filing
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Proprietorship Tax
                      Return Filing
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Limited Liability
                      Partnership Tax Return Filing
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Company Tax Return
                      Filing
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Proprietorship Tax Return Filing</h3>
              <p>
                Any individual with business income is said to be operating a
                proprietorship firm. Proprietorships operating in India are
                required to file income tax returns each year. Since
                proprietorships are considered the same as proprietors, a
                proprietorship's income tax return filing procedure is similar
                to individual income tax return filing.
              </p>
              <h4>Requirement for Filing Proprietorship Tax Return</h4>
              <p>
                All proprietors below 60 years are required to file income tax
                returns if total income exceeds Rs. 2.5 lakhs. For proprietors
                over 60 years but below 80 years, income tax filing is mandatory
                if total income exceeds Rs.3 lakhs. Proprietors over 80 years
                and above must file income tax returns if the total income
                exceeds Rs.5 lakhs.
              </p>
              <h4>Income Tax Rate for Proprietorship</h4>
              <p>
                The income tax rate for proprietorship is the same as the income
                tax rate for individuals. Unlike the income tax rate for LLP or
                Company, which are flat rates, proprietorships are taxed on slab
                rates. The following is the income tax rate applicable for
                proprietorships for the assessment year 2023-24, wherein the
                Proprietor's age is less than 60.
              </p>
              <h3>
                Proprietorship Tax Rate AY 2024-25| FY 2023-24 under Normal Tax
                Regime
              </h3>
              <p>
                Proprietorship Tax Rate AY 2023-24| FY 2022-23– Proprietor's age
                is less than 60 years
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Net Income Range</strong>
                    </th>
                    <th className="border">
                      <strong>Rate of income-tax (%)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Up to Rs.2,50,000</td>
                    <td className="border">-</td>
                  </tr>
                  <tr>
                    <td className="border">Rs.2,50,001 to Rs. 5,00,000</td>
                    <td className="border">5</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 5,00,001 to Rs. 10,00,000</td>
                    <td className="border">20</td>
                  </tr>
                  <tr>
                    <td className="border">Above Rs. 10,00,000</td>
                    <td className="border">30</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Proprietorship Tax Rate AY 2023-24| FY 2022-23–The Proprietor's
                age is between 60 and 80 years
              </p>
              <p>
                The following tax rate applies to a Proprietor who turns 60
                during the previous year but is younger than 80 on the last day
                of the previous year:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Net Income Range</strong>
                    </th>
                    <th className="border">
                      <strong>Rate of income-tax (%)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Up to Rs. 3,00,000</td>
                    <td className="border">-</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 3,00,001 to Rs. 5,00,000</td>
                    <td className="border">5</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 5,00,001 to Rs. 10,00,000</td>
                    <td className="border">20</td>
                  </tr>
                  <tr>
                    <td className="border">Above Rs. 10,00,000</td>
                    <td className="border">30</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Proprietorship Tax Rate AY 2023-24| FY 2022-23–Proprietor's age
                is above 80 years
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Net Income Range</strong>
                    </th>
                    <th className="border">
                      <strong>Rate of income-tax (%)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">up to Rs. 5,00,000</td>
                    <td className="border">-</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 5,00,001 to Rs. 10,00,000</td>
                    <td className="border">20</td>
                  </tr>
                  <tr>
                    <td className="border">Above Rs. 10,00,000</td>
                    <td className="border">30</td>
                  </tr>
                </tbody>
              </table>
              <h3>Rates of surcharge</h3>
              <p>
                In respect of a Proprietor, the rate of surcharge for the
                Assessment Year 2023-24 is tabulated here:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Range of Income</strong>
                    </th>
                    <th className="border">
                      <strong>Surcharge Rate</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Rs. 50 Lakhs to Rs. 1 Crore</td>
                    <td className="border">10%</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 1 Crore to Rs. 2 Crores</td>
                    <td className="border">15%</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 2 Crores to Rs. 5 Crores</td>
                    <td className="border">25%</td>
                  </tr>
                  <tr>
                    <td className="border">Above Rs. 5 Crore</td>
                    <td className="border">37%</td>
                  </tr>
                </tbody>
              </table>
              <h3>
                Rates of surcharge – For Assessment Year 2023-24 under alternate
                tax regime
              </h3>
              <p>
                The rate of surcharge in case of the Proprietor opting for an
                alternate tax regime as per section 115BAC will be 25% instead
                of 37% for AY 2023-24
              </p>
              <h4>Tax Audit for Proprietorship</h4>
              <p>
                A proprietorship firm would require an audit if the total sales
                turnover is over Rs.1 crore during the financial year. In the
                case of a professional, an audit would be required if total
                gross receipts are more than Rs.50 lakhs during the financial
                year under assessment.
              </p>
              <h4>Due Date for Filing Proprietorship Tax Return</h4>
              <p>
                The income tax return of a proprietorship that doesn't require
                audit is due on July 31. If the return needs to be audited as
                per the Income Tax Act, it is due on September 30. Ideally, it
                is important to file on or before income tax return filing last
                date for business.
              </p>
              <h4>ITR Form for Proprietorships Return Filings</h4>
              <p>
                Proprietorship firms would be required to file Form ITR-3 or
                Form ITR-4-Sugam. Form ITR-3 can be filed by a proprietor or a
                Hindu Undivided Family carrying out a proprietary business or
                profession. Form ITR-4-Sugam can be filed by a proprietor who
                wants to pay income tax under the presumptive taxation scheme.
              </p>
              <h3>Partnership Firm Tax Return Filing</h3>
              <p>
                All partnership firms must file ITR for business income,
                regardless of income or loss. Partnership firms are taxed as a
                separate legal entity under the Income Tax Act. Hence, the
                income tax rate applicable for partnership firms is similar to
                that of LLPs and companies registered in India.
              </p>
              <h4>Requirement for Filing Partnership Firm Tax Return</h4>
              <p>
                All partnership firms are required to file income tax returns
                each year, irrespective of income or loss. If there was no
                business activity, a NIL income tax return must be filed before
                the due date for a partnership firm.
              </p>
              <h4>Income Tax Rate for Partnership Firms</h4>
              <p>
                Partnership firms must pay income tax at 30% of total income. In
                addition to the income tax, a partnership firm is liable to pay
                an income tax surcharge on the amount of income tax at the rate
                of 12% when total income exceeds Rs.1 crores. In addition to the
                income tax and taxation, a partnership firm must pay a Health
                and education cess. Health &amp; Education Cess is applicable on
                the amount of income tax and the appropriate surcharge at 4%.
              </p>
              <h4>Minimum Alternate Tax for Partnership Firms</h4>
              <p>
                Similar to income tax applicable for a company, partnership
                firms are subject to minimum alternate Tax. A minimum alternate
                tax of 18.5% of adjusted total income is applicable. Hence,
                income tax payable by a partnership firm's profits cannot be
                less than 18.5 percent (increased by income tax surcharge,
                education cess, and secondary and higher education cess).
              </p>
              <h4>Tax Audit for Partnership Firm</h4>
              <p>
                Partnership firms carrying on business with total sales of over
                Rs.1 crore are required to obtain tax audits. Similarly,
                partnership firms carrying on a profession wherein gross
                receipts exceed Rs.50 lakhs in the previous year are required to
                obtain tax audits. In addition, other applicable conditions
                could make an audit mandatory for a partnership firm.
              </p>
              <h4>Due Date for Filing Partnership Firm Tax Return</h4>
              <p>
                Most partnership firms' income tax return due date is July 31 of
                the assessment year. Partnership firms required to get their
                accounts audited under the Income Tax Act must file the income
                tax return before the September 30 business tax return filing
                deadline.
              </p>
              <h4>
                Business Income ITR Form For Partnership Firm Return Filing
              </h4>
              <p>
                Partnership firms are required to file income tax returns in
                form ITR 5. Like all other income tax forms, ITR 5 is an
                attachment-less form, and there is no requirement for submitting
                any documents or statements along with a partnership firm tax
                return. However, the taxpayer must save all records about the
                business and produce the same before tax authorities when
                requested.
              </p>
              <h3>LLP Tax Return Filing</h3>
              <p>
                All LLPs are required to file an income tax return, irrespective
                of the amount of income or loss. LLPs are a separate legal
                entity and are taxed separately from the Partners of the LLP.
                The income tax rate applicable for LLPs is similar to companies
                registered in India.
              </p>
              <h3>Requirement for Filing LLP Tax Return</h3>
              <p>
                All LLPs are required to file income tax returns each year,
                irrespective of income or loss. If there was no business
                activity, then a NIL income tax return must be filed before the
                due date.
              </p>
              <h4>Income Tax Rate for LLPs</h4>
              <p>
                The income tax rate applicable for LLP registered in India is
                30% of the total income. In addition to the income tax, a
                surcharge is levied on the income tax payable at 12% when the
                total income exceeds Rs.1 crore. In addition to the income tax
                surcharge, a Health and education cess at 4% applies to the
                income tax and surcharge of an LLP.
              </p>
              <h4>Minimum Alternate Tax for LLP</h4>
              <p>
                Similar to income tax applicable for a company, LLP is also
                subject to minimum alternate Tax. A minimum alternate tax of
                18.5% of adjusted total income is applicable for LLP. Hence,
                income tax payable by LLP cannot be less than 18.5 percent
                (increased by income tax surcharge, education cess, and
                secondary and higher education cess).
              </p>
              <h4>Tax Audit for LLP</h4>
              <p>
                LLP whose turnover exceeded Rs. 40 Lakh or whose contribution
                exceeded Rs. 25 Lakh are required to get their accounts audited
                by a practicing Chartered Accountant. In addition, LLPs that
                entered into an international transaction with associated
                enterprises or undertook certain Specified Domestic Transactions
                must file Form 3CEB. Form 3CEB must be certified by a Chartered
                Accountant. LLPs required to file Business income ITR Form 3CEB
                have November 30 as the deadline for LLP tax filing.
              </p>
              <h4>Due Date for Filing LLP Tax Return</h4>
              <p>
                The deadline for LLP tax filing in India is July 31. LLPs
                required to obtain a tax audit have September 30 as the business
                tax return filing deadline.
              </p>
              <h4>ITR Form for LLP Return Filing</h4>
              <p>
                LLPs must file income tax returns using Form ITR 5. Form ITR 5
                must be filed online using the digital signature of one of the
                designated partners of the LLP.
              </p>
              <h3>Company Tax Return Filing</h3>
              <p>
                All companies registered in India are required to file income
                tax returns each year. Under the Income Tax Act, company tax
                return filing falls under two categories, namely domestic
                company or foreign company. Companies registered with the
                Ministry of Corporate Affairs, like Private Limited, Personal,
                or Limited Companies, are classified as domestic companies.
              </p>
              <h4>Requirement for Filing Company Tax Return</h4>
              <p>
                All companies registered in India must do business tax&nbsp;
                return filing yearly, irrespective of income, profit, or loss.
                Hence, even dormant companies with no transactions are required
                to file income tax returns each year.
              </p>
              <h4>Income Tax Rate for Company</h4>
              <p>
                For Assessment Year 2024-25, the Income tax rate of 25% of total
                income is applicable for domestic companies with a total
                turnover of less than Rs.400 crores in 2020-21. For companies
                with a turnover of more than Rs.400 crores in the year 2020-21,
                an income tax rate of 30% is applicable. In addition to the
                income tax, companies must pay a surcharge and Health and
                Education Cess at 7% income tax and surcharge.
              </p>
              <h4>Minimum Alternate Tax for Company</h4>
              <p>
                All companies are required to pay a minimum alternate tax at the
                rate of 15% of book profit plus surcharge and education cess if
                the company's tax liability is less than 15% of book profit.
              </p>
              <h4>Tax Audit for Company</h4>
              <p>
                A company's accounts must be audited each year by a Chartered
                Accountant, irrespective of turnover or profit/loss.
              </p>
              <h4>Due Date for Filing Company Tax Return</h4>
              <p>
                All companies registered in India are required to file income
                tax returns on or before September 30. Companies incorporated
                between January - March can file MCA annual returns after 18
                months in the first year. However, the same type of exemption is
                not available under the Income Tax Act. Hence, even companies
                registered from January - to March must file income tax returns
                on or before September 30 of the same calendar year.
              </p>
              <h4>Business Income ITR Form For Company Tax Filings</h4>
              <p>
                Companies registered in India and operating a business for
                profit must file Form ITR 6. Hence, private limited companies,
                limited companies, and one-person companies would be required to
                file Form ITR6.
              </p>
              <h3>Key Points to Consider for Business Tax Filing </h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Total Income Assessment:</strong> Every business
                      must compute its total income regardless of profit or
                      loss. If the total income surpasses the basic taxable
                      threshold before deductions, filing an income tax return
                      is mandatory.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Gross Total Income Criteria:</strong> Gross Total
                      Income exceeding Rs. 2.5 lakhs signifies surpassing the
                      basic taxable threshold. For business tax return filing,
                      income before deductions exceeding Rs. 3 lakhs is
                      considered.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Uniform Taxation for LLPs, Companies, and Firms:
                      </strong>{" "}
                      LLPs, companies, and firms are all subject to a tax rate
                      of 30%, obligating them to file tax returns regardless of
                      financial outcomes or undertaken operations.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                How LegallensIndia Can Assist with Business Tax Return Filings
              </h3>
              <p>
                Navigating the intricate world of business tax filing is made
                effortless with LegallensIndia. Our dedicated services offer
                comprehensive support to ensure your tax obligations are met
                seamlessly. Our platform provides a user-friendly interface that
                guides you on how to file taxes for small business owners and
                file on or before income tax return filing last date for
                business. Our experienced professionals are well-versed in the
                nuances of tax regulations, ensuring accurate and timely
                submissions. We're here to help businesses of all types
                effortlessly file their tax returns. Our LEDGERS small business
                tax filing software helps to satisfy your ITR and accounting
                needs.&nbsp;
              </p>
              <p>
                With our user-friendly platform and seasoned team, the process
                becomes less daunting, ensuring business tax return filing
                deadlines and rules are followed. We will keep you well-informed
                about crucial deadlines, assist in selecting the appropriate
                business income ITR form, and guide you through a meticulous,
                error-free filing process. With LegallensIndia, you can
                confidently handle your business tax filing, saving time and
                minimizing the complexities involved.
              </p>
              <p>
                Ready to simplify your business tax returns? Reach out to us
                today for seamless and stress-free filing.
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
