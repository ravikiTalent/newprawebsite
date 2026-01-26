import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function LLPCompliance() {
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
              <h1 className="display-1 text-white mb-3">LLP Compliance</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Limited Liability Partnership (LLP), regular filing of returns
                is essential to uphold LLP compliance standards and steer clear
                of substantial penalties for non-compliance.
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
                { id: 3, title: "LLP Compliance", url: "" },
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
                      <h5 className="card-title">LLP Compliance</h5>
                      <p>
                        Limited Liability Partnership (LLP), regular filing of
                        returns is essential to uphold LLP compliance standards
                        and steer clear of substantial penalties for
                        non-compliance.
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
                Annual Compliance of Limited Liability Partnership (LLP)
              </h2>
              <p>
                For a Limited Liability Partnership (LLP), regular filing of
                returns is essential to uphold LLP compliance standards and
                steer clear of substantial penalties for non-compliance. LLPs
                benefit from a relatively lighter annual compliance burden
                compared to private limited companies. Nevertheless, the
                potential fines for non-compliance can be significant. While a
                Private Limited company might face penalties of INR 1 lakh for
                non-compliance, LLPs could incur penalties of up to INR 5 lakh.
                At LegallensIndia, we understand the critical importance of
                adhering to these annual compliances of LLP requirements, and
                our services are tailored to assist LLPs in meeting their
                obligations efficiently and effectively.
              </p>
              <p>
                Get started today to ensure your LLP compliance and avoid
                penalties.
              </p>
              <h3>
                Limited Liability Partnerships (LLPs) Compliance Requirements
              </h3>
              <p>
                Limited Liability Partnerships (LLPs) are recognized as separate
                legal entities, and therefore, they are bound by specific
                compliance obligations. The responsibility for ensuring
                compliance rests with the Designated Partners of the LLP. The
                key LLP compliance requirements for LLPs include the following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Maintenance of Proper
                      Book of Accounts
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of Annual Return
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of Statement of
                      Accounts
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of Income Tax
                      Return (
                        ITR - 5
                      )
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Filing of Tax Audit (If
                      Applicable)
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Ensuring annual compliances of LLP with these obligations not
                only maintains the legal status of the LLP but also helps in
                building transparency, credibility, and financial
                accountability.
              </p>
              <h3>Maintenance of Proper Book of Accounts</h3>
              <p>
                In LLP annual filing, one must diligently maintain accurate and
                up-to-date financial records. These records should encompass
                details of the LLP's financial transactions, profits, expenses,
                assets, and liabilities. Proper bookkeeping is crucial to assess
                the financial health and performance of the LLP.
              </p>
              <h3>Filing of Annual Return - LLP Form 11</h3>
              <p>
                LLPs are required to file an annual return with the Ministry of
                Corporate Affairs for each financial year. This annual return is
                submitted using Form 11, and it provides essential information.
                This form gathers essential details about the LLP, including the
                total number of designated partners, comprehensive partner
                information, contributions received by partners, and a summary
                of all partners involved.
              </p>
              <h4>Filing Deadline</h4>
              <p>
                All LLPs are required to submit Form 11 within 60 days after the
                conclusion of the financial year. This means that Form 11 should
                be filed by May 30th each year.
              </p>
              <h4>Importance of Timely Filing</h4>
              <p>
                It's crucial for LLPs to adhere to this deadline, as failure to
                do so can have consequences. One significant implication is that
                an LLP will not be permitted to close or wind up its operations
                until it has filed all its annual returns, including Form 11.
              </p>
              <h4>Penalty for Late Filing</h4>
              <p>
                In the event that an LLP neglects to submit its LLP annual
                filing forms within the stipulated timeframe, it will incur a
                penalty of Rs.100 for each day of delay performed.
              </p>
              <h4>Duration of Penalty</h4>
              <p>
                The penalty will be applicable from the due date of filing the
                return and will continue until the actual return is filed.
              </p>
              <h3>Filing of Statement of Accounts – LLP Form 8</h3>
              <p>
                LLPs must submit a Statement of Accounts &amp; Solvency
                annually, which details the financial position of the LLP,
                including its assets and liabilities. This statement is filed
                using Form 8.
              </p>
              <h4>Due Date</h4>
              <p>
                LLPs are required to file Form 8 within 30 days from the
                conclusion of six months after the financial year ends. This
                means that Form 8 should be filed within this timeframe to
                maintain LLP compliance.
              </p>
              <h4>Signing and Certification</h4>
              <p>
                Form 8 can be digitally signed by two designated partners of the
                LLP. Additionally, it must be certified by a company secretary,
                chartered accountant, or cost accountant.
              </p>
              <h4>Form Components: Form 8 consists of two main parts:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Part A - The Solvency
                      Statement: This section provides a statement of the LLP's
                      solvency, offering insights into its financial health and
                      stability.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Part B - Statement of
                      Expenditure &amp; Income, Statement of Accounts: Part B
                      contains detailed information about the LLP's income and
                      expenses, along with a comprehensive statement of its
                      accounts.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Penalty for Late Filing</h4>
              <p>
                It's essential for LLPs to adhere to the filing timeline for
                Form 8. Failure to file this form on time can result in
                penalties, specifically a daily fine of Rs.100.
              </p>
              <p>
                Ensuring LLP annual Compliance with the filing requirements
                outlined in Form 8 is vital to maintain good standing and avoid
                financial penalties.
              </p>
              <h3>Audit and Tax Filing Requirements for LLPs</h3>
              <p>
                Limited Liability Partnerships (LLPs) are subject to specific
                audit and tax filing obligations as per the provisions of the
                Limited Liability Partnership Act 2008, and the Income Tax Act,
                1961. Here are the key requirements:
              </p>
              <h4>Tax Audit</h4>
              <p>
                Audit Requirement: LLPs with an annual turnover exceeding Rs. 40
                lakhs or a contribution surpassing Rs. 25 lakhs are obligated to
                have their books of account audited by practicing Chartered
                Accountants. The deadline for filing the tax return for such
                LLPs is September 30th.
              </p>
              <p>
                <strong>Note:</strong> From Assessment Year 2021-22 (Financial
                Year 2020-21) onwards, the threshold limit for a tax audit has
                been raised to Rs. 5 crore under certain conditions. This
                applies if the taxpayer's cash receipts constitute less than 5%
                of the gross receipts or turnover and if cash payments are
                limited to 5% of the aggregate payments as per the Income Tax
                Act 1961.
              </p>
              <h3>Tax Filing Deadline (Without Tax Audit)</h3>
              <p>
                For LLPs not required to undergo a tax audit, the due date for
                tax filing is July 31st.
              </p>
              <h4>International Transactions - Form 3CEB</h4>
              <p>
                LLPs that have engaged in international transactions with
                associated enterprises or have undertaken Specified Domestic
                Transactions must to file Form 3CEB. This form should be
                certified by a practicing Chartered Accountant. The deadline for
                LLPs obliged to file Form 3CEB is November 30th.
              </p>
              <p>
                Compliance with these audit and tax filing requirements is
                essential for LLPs to fulfill their legal obligations and avoid
                penalties.
              </p>
              <h3>Income Tax Return (ITR - 5)</h3>
              <p>
                LLPs are also required to file their income tax return using
                Form ITR-5. The due date for ITR filing is July 31st unless the
                LLP is subject to a tax audit, in which case the deadline is
                extended to September 30th. The income tax return provides
                details of the LLP's income, expenses, and tax liability.
              </p>
              <p>
                LLP Annual Filing Compliance Calendar is given here for your
                quick reference:
              </p>
              <div className="table-responsive m-b-10">
                <table className="table mb-5 border">
                  <thead>
                    <tr>
                      <th className="border">
                        <strong>Form Type</strong>
                      </th>
                      <th className="border">
                        <strong>Description</strong>
                      </th>
                      <th className="border">
                        <strong>Due Date</strong>
                      </th>
                      <th className="border">
                        <strong>To be filed with</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">Form-8</td>
                      <td className="border">
                        Filing of Statement of Accounts
                      </td>
                      <td className="border">30th October</td>
                      <td className="border">Registrar of Companies</td>
                    </tr>
                    <tr>
                      <td className="border">Form-11</td>
                      <td className="border">Filing of Annual Returns</td>
                      <td className="border">30th May</td>
                      <td className="border">Registrar of Companies</td>
                    </tr>
                    <tr>
                      <td className="border">ITR - 5</td>
                      <td className="border">Income Tax Return</td>
                      <td className="border">
                        31st July (or 30th September, if tax audit is mandatory)
                      </td>
                      <td className="border">Income Tax Department</td>
                    </tr>
                    <tr>
                      <td className="border">ITR - 5</td>
                      <td className="border">Income Tax Return</td>
                      <td className="border">
                        31st July (or 30th September, if tax audit is mandatory)
                      </td>
                      <td className="border">Income Tax Department</td>
                    </tr>
                    <tr>
                      <td className="border">Audit</td>
                      <td className="border">Tax Audit (only if applicable)</td>
                      <td className="border">30th September</td>
                      <td className="border">Income Tax Department</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>Benefits of LLP annual filing</h3>
              <p>
                The benefits of LLP annual compliance are listed as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Higher Credibility:</strong> Meeting the annual
                      compliances of LLP enhances the organization's
                      credibility, aiding in loan approvals and helping with
                      various requirements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Record of Financial Worth:</strong> These filings
                      create a financial track record for LLPs, attracting
                      potential investors and partners.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Stays Active and Penalty-Free:</strong> Consistent
                      compliance keeps LLPs from being declared defunct,
                      preventing penalties and additional fees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Conversion and Closure:</strong> Regular filings
                      simplify the process of converting LLPs into other
                      business structures and expedite partnership dissolution.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Why LegallensIndia?</h3>
              <p>
                LegallensIndia simplifies the LLP annual filing process by
                providing expert guidance and handling essential tasks. Our
                experts assist in preparing accurate documents, obtaining
                necessary digital signatures, and ensuring certification by
                qualified professionals. We emphasize timely filings to avoid
                penalties and maintain LLP annual compliance with regulations.
                Our streamlined approach allows you to focus on your business
                while we handle the paperwork, reducing the risk of
                non-compliance penalties. In a nutshell, LegallensIndia makes the
                LLP annual filing straightforward and ensures your adherence to
                legal requirements with ease.
              </p>
              <p>Get started now to streamline your LLP annual filings.</p>
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
