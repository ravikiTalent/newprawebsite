import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DPT3Filing() {
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
              <h1 className="display-1 text-white mb-3">DPT-3 Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                DPT -3 Filing must be completed by all companies having loans.
                If your company has loan, file DPT-3 through LegallensIndia.
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
                { id: 3, title: "DPT-3 Filing", url: "" },
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
                      <h5 className="card-title">DPT-3 Filing</h5>
                      <p>
                        DPT -3 Filing must be completed by all companies having
                        loans. If your company has loan, file DPT-3 through
                        LegallensIndia.
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

              <h2 className="display-4 mb-3">Form DPT-3 Return Filing</h2>
              <p>
                Every company, excluding government companies, must file a
                return of deposits in Form DPT-3 with the Ministry of Corporate
                Affairs (MCA) by June 30th each year. This return should include
                details of deposits, outstanding loans, and any amounts received
                that do not qualify as deposits as of March 31st of that year.
                DPT-3 return is audited by the company's auditor to ensure
                accuracy and compliance.
              </p>
              <em>
                <strong>
                  {" "}
                  LegallensIndia experts can assist you in filing your DPT-3 form
                  accurately and efficiently. Get started today and simplify
                  your compliance process!
                </strong>
              </em>
              <h3>Introduction to DPT-3 Filing</h3>
              <p>
                To safeguard the interests of creditors and depositors, the
                Central Government, in consultation with the Reserve Bank of
                India, introduced an amendment to the Companies (Acceptance of
                Deposits) Rules 2014 through the Companies (Acceptance of
                Deposits) Amendment Rules 2019.
              </p>
              <p>
                In line with this, MCA, vide its notification dated 22nd January
                2019, notified that every company other than a government
                company must file a one-time return in DPT 3. It is also
                required to be filed annually. Accordingly, a sub-rule (3) was
                inserted after sub-rule (2) in Rule 16A of the Companies
                (Acceptance of Deposits) Rules, 2014, which reads as
                follows:&nbsp;
              </p>
              <p>
                <em>
                  Every company other than Government company shall file a
                  onetime return of outstanding receipt of money or loan by a
                  company but not considered as deposits, in terms of clause (c)
                  of sub-rule 1 of rule 2 from the 01st April, 2014 to 31st
                  March, 2019, as specified in Form DPT-3 within ninety days
                  from 31st March, 2019 along with a fee as provided in the
                  Companies (Registration Offices and Fees) Rules, 2014.
                </em>
              </p>
              <h3>Eligible Companies for Form DPT-3 Return Filing</h3>
              <p>
                Form DPT-3, filing the return of deposits, applies to several
                types of companies in India. The following categories of
                companies are eligible to file Form DPT-3:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Private Limited
                      Companies
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Public Limited Companies
                    </li>
                    <li>
                      <i className="uil uil-check"></i> One Person Companies
                      (OPC)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Small and Non-Small
                      Companies
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It is important to note that even if a company has received a
                loan from specific entities, it must file Form DPT-3. These
                entities include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Holding Company:</strong> If a company has
                      obtained a loan from its holding company, which has a
                      controlling stake, Form DPT-3 filing is mandatory.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Subsidiary Company:</strong> In the case of a loan
                      from a subsidiary company controlled by the borrowing
                      company, filing Form DPT-3 is necessary.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Associate Company:</strong> When a company has
                      received a loan from an associate company with a
                      significant influence on the borrowing entity, filing Form
                      DPT-3 is obligatory.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It is important to note that government companies are exempted
                from filing Form DPT-3.
              </p>
              <h3>Exempted Companies from Filing Form DPT-3</h3>
              <p>
                Under the Acceptance of Deposits Rules of 2014, certain
                companies are exempted from filing the DPT-3 form as per the
                Companies Act. The exemptions primarily relate to the filing of
                loan returns. The following types of companies are exempt from
                filing Form DPT-3:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Government Companies:</strong> Companies wholly
                      owned and controlled by the Central or State Government
                      are exempt from filing DPT-3.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Specified Financial Institutions:</strong> Certain
                      financial institutions are exempt due to their existing
                      regulatory framework. This includes:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Banking Companies:</strong> Banks regulated by the
                      Reserve Bank of India (RBI) are not required to file
                      DPT-3.
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>
                              <i className="uil uil-check"></i> Non-Banking
                              Financial Companies (NBFCs): NBFCs registered with
                              the RBI are exempt.
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Housing Finance
                              Companies: Companies registered as housing finance
                              companies under the National Housing Bank (NHB) do
                              not need to file DPT-3.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Other Notified Companies:</strong> In rare cases,
                      the Ministry of Corporate Affairs (MCA) might notify
                      specific companies under a special provision (proviso to
                      subsection (1) of section 73 of the Act) for exemption
                      from DPT-3 filing.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Form DPT-3 Applicability</h3>
              <p>
                All companies, except those mentioned under exemptions, are
                required to file the DPT-3 return if they have received the
                following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Deposits from members or
                      directors
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Loans from third parties
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Advances for goods or
                      services (secured or unsecured)
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The filing of Form DPT-3 applies to a wide range of monetary
                transactions and debts. Here are the types of money or debts to
                which Form DPT-3 is applicable:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Secured Debts:</strong> These are loans or
                      obligations backed by collateral or security the borrowing
                      company provides.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unsecured Debts:</strong> These are loans or debts
                      without collateral or security attached.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>External Borrowings:</strong> Form DPT-3 also
                      encompasses debts or borrowings from external sources,
                      such as financial institutions or banks.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Commercial Borrowings:</strong> Loans or debts
                      obtained by companies for commercial purposes are covered
                      by Form DPT-3.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Transactions Not Considered as Deposits for DPT-3 Filing</h3>
              <p>
                &nbsp;Form DPT-3 focuses on reporting deposits a company
                receives. Here is what doesn't count as a deposit:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Share Capital:</strong> Money received from
                      shareholders for shares.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Debentures Issued: </strong>Loans from investors,
                      treated separately.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Advances on Orders: </strong>Payments are received
                      upfront for confirmed orders.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Government Receipts:</strong> Money from
                      government or foreign sources.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Loans from Banks</strong>: Money borrowed from
                      banks or financial institutions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inter-Company Loans: </strong>Loans from other
                      companies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Subscription Advances:</strong> Money paid in
                      advance for upcoming securities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Employee Deposits:</strong> Security deposits from
                      employees up to their annual salary.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Form DPT 3 Due Date</h3>
              <p>
                <strong>
                  The due date for filing Form DPT 3 is June 30th of every year.
                </strong>{" "}
                This deadline applies to all companies required to report their
                deposits or outstanding receipts of loans or money not
                considered deposits for the financial year ending on March 31st.
              </p>
              <p>Here's a breakdown for clarity:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Year:</strong> The financial year in
                      India typically runs from April 1st to March 31st of the
                      following year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>DPT-3 Reporting:</strong> Companies must report
                      all deposits and outstanding receipts that occurred during
                      this financial year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Due Date: </strong>The deadline to file DPT-3 for
                      the previous financial year falls on June 30th.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Example:{" "}
                <strong>
                  For the financial year 2023-24 (April 1, 2023, to March 31,
                  2024), the DPT-3 filing deadline would be June 30, 2024.
                </strong>
              </p>
              <h3>Documents Required for Filing Form DPT-3:</h3>
              <p>
                To complete the filing of Form DPT-3, the following documents
                are typically required:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Auditor's Certificate: </strong>An auditor's
                      certificate verifying the information provided in the
                      DPT-3 form regarding the company's deposits and
                      outstanding receipts is mandatory.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Optional Documents (depending on your specific situation):</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proof of Trust Deed:&nbsp;</strong> If your
                      company has created a trust to hold deposits received, a
                      copy of the trust deed needs to be attached.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Instrument Creating Charge (if any):&nbsp;{" "}
                      </strong>
                      In case your company has created a charge (security
                      interest) on any assets to secure deposits, a copy of the
                      instrument creating that charge must be uploaded.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Details of Liquid Assets:&nbsp;</strong>The DPT-3
                      filing may require information on the company's liquid
                      assets, which are assets that can be easily converted into
                      cash. Documents supporting these details may be required.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>List of Depositors (in some cases):</strong>&nbsp;
                      Depending on the specific type and value of deposits
                      received, the MCA might require a list of depositors with
                      their details.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Fees for Filing Form DPT-3</h3>
              <p>
                The fees for filing Form DPT-3 are determined as per the
                Companies (Registration Offices and Fees) Rules.
              </p>
              <h3>
                Consequences of Non-compliance with the DPT-3 filing&nbsp;
              </h3>
              <p>
                Non-compliance with the DPT-3 filing requirement pursuant to
                Rules 16 and 16A of the Companies (Acceptance of Deposits)
                Rules, 2014. can lead to penalties and other legal consequences.
                Therefore, it is in the best interest of companies to diligently
                complete and submit the form to the MCA within the stipulated
                timeframe. By doing so, companies can maintain good standing
                with regulatory authorities and ensure that their financial
                activities are in accordance with the applicable laws and
                regulations.
              </p>
              <h3>DPT-3 Penalty</h3>
              <p>
                According to the Companies Act 2013, if a company or any of its
                officers fail to comply with the filing requirement of Form
                DPT-3 or commit any default related to the filing, they can be
                subjected to penalties-
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fine for the Company:</strong> The company itself
                      can be fined an amount that may extend up to five thousand
                      rupees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fine for Officers in Default:</strong> The
                      officers of the company who are responsible for the
                      default can also be fined an amount that may extend up to
                      five thousand rupees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Additional Fine for Continuing Contravention:
                      </strong>{" "}
                      If the contravention or default is a continuing one, i.e.,
                      it persists beyond the first day, then a further fine may
                      be imposed. This additional fine can be up to five hundred
                      rupees for each day after the first day, during which the
                      contravention continues.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These penalties are intended to ensure compliance with the
                filing requirements and regulations under the Companies Act
                2013. For companies and their officers to fulfil their
                obligations, including the timely and accurate filing of Form
                DPT-3, to avoid such penalties and maintain compliance with the
                law.
              </p>
              <h3>How to File DPT-3?</h3>
              <p>
                Form DPT-3 is a web-based form that must be filed online through
                the Ministry of Corporate Affairs (MCA) website. The process
                involves several steps, which are outlined below to give you a
                comprehensive understanding of the DPT 3 filing procedure. If
                you encounter any issues or need professional assistance, our
                experts are always available to help.
              </p>
              <h4>Visit the MCA Portal &amp; Login:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Go to the MCA website.
                      This is the official portal for all e-filing and services
                      provided by the Ministry of Corporate Affairs, including
                      the filing of Form DPT-3.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Log into your account.
                      If you do not have an account, you can create one by
                      registering as a Business User.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Access the DPT-3 Webform:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Navigate to the Form:
                      Once logged in, go to the main menu, and under the
                      &nbsp;MCA Services section, click on &nbsp;e-filing
                      services.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Select Deposit Filings:
                      From the dropdown menu, select &nbsp;Deposit Related
                      Filings and then access the DPT-3 Webform. The entire
                      process is conducted online from start to finish.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Fill Out &amp; Submit the Form Online:</h4>
              <p>
                Here is the information to be furnished when filing Form DPT-3:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>CIN of the Company:</strong> The Corporate
                      Identification Number (CIN) assigned to the company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Email ID:</strong> The official email address of
                      the company for communication purposes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Objects of the Company:</strong> A description of
                      the primary business activities or purposes for which the
                      company was established.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Net Worth of the Company:</strong> The net worth
                      of the company as of the most recent financial year-end,
                      typically calculated as total assets minus total
                      liabilities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Particulars of Charge (if any):</strong> Details
                      of any charges or encumbrances on the company's assets.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Total Amount Outstanding as of 31st March 2020:
                      </strong>{" "}
                      The total outstanding amount of deposits, loans, or other
                      funds as of March 31st, 2020.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Particulars of Credit Rating:</strong> Information
                      on the credit rating of the company, if applicable,
                      including the name of the credit rating agency and the
                      rating assigned.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Attachments:</strong> Attach the necessary
                      documents in digital format to support the details
                      provided in the form. A comprehensive list of required
                      documents is provided in the section above.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Submit the Form to Generate SRN:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form Submission:</strong> After filling out the
                      form and attaching the required documents, submit the form
                      online. A Service Request Number (SRN) will be generated,
                      which you can use to track the status of your form until
                      all formalities are completed.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Affix the DSC &amp; Pay the Required Fee:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Digital Signature:</strong> Authenticate the form
                      with the applicant's Digital Signature Certificate (DSC).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fee Payment:</strong> Pay the required fee for the
                      DPT-3 filing. The fee varies based on the company's
                      nominal or paid-up capital and increases accordingly.
                      Detailed fee structures are provided in the further
                      sections.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Receive the acknowledgement mail:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Acknowledgement:</strong> You will receive an
                      acknowledgement of your filing on your registered email
                      address, confirming that the Registrar of Companies has
                      received the return of deposits for the financial year.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Completing the DPT-3 filing process is essential for regulatory
                compliance and avoiding penalties. Contact our experts to ensure
                a smooth and efficient filing experience if you need further
                guidance or support.
              </p>
              <h3>File Form DPT-3 with Ease through LegallensIndia!</h3>
              <p>
                LegallensIndia offers a convenient and reliable solution for
                filing Form DPT-3. Our expert team assists companies with
                compliance requirements, ensuring a smooth and hassle-free
                filing process. Contact our team today to benefit from our
                professional services and fulfil your legal and compliance
                obligations.
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
