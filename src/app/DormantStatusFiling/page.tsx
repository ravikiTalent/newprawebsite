import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DormantStatusFiling() {
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
                Dormant Status Filing
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A dormant company is registered but not engaged in any
                significant business activity or operations.
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
                { id: 3, title: "Dormant Status Filing", url: "" },
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
                      <h5 className="card-title">Dormant Status Filing</h5>
                      <p>
                        A dormant company is registered but not engaged in any
                        significant business activity or operations.
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

              <h2 className="display-4 mb-3">Dormant Company Registration</h2>
              <p>
                As defined under the Companies Act of 2013, a dormant company is
                registered but not engaged in any significant business activity
                or operations. It may have been established for future ventures
                or to hold assets without active trading. Dormant status filing
                allows these companies to minimise compliance requirements and
                maintain their registered status without the full spectrum of
                operational reporting obligations. If your company is in a
                similar state and you're considering transitioning to a dormant
                status to reduce compliance burdens, LegallensIndia is here to
                assist. Our team specialises in navigating the dormant status
                filing process, offering expert guidance to ensure a seamless
                transition. Ready to simplify your company's compliance
                landscape? Contact LegallensIndia today to get started.
              </p>
              <h3>What is a Dormant Company?</h3>
              <p>
                A Dormant Company, also known as a Dormant Entity or Dormant
                Corporation, refers to a registered business entity not
                currently engaged in significant business activities or
                operations. Dormant status typically arises when a company has
                temporarily ceased its operational activities due to strategic
                reasons such as awaiting a future project, not yet commencing
                substantial business operations, or primarily existing to hold
                or manage intellectual property rights without directly engaging
                in revenue-generating activities. Such companies can apply to
                the Registrar to obtain the status of a Dormant company, with
                objectives including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Being incorporated for a
                      future project.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Serving as an asset or
                      intellectual property.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Having no significant
                      transactions in a specific financial year.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Remaining inactive.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It's important to note that while Dormant companies have limited
                activity, they can apply to revert to active status and cannot
                retain Dormant status for more than five consecutive financial
                years.
              </p>
              <h3>
                Overview of Dormant Status Under the Companies Act of 2013
              </h3>
              <p>
                When a company is established under the Companies Act of 2013
                for purposes such as launching a future project, holding assets,
                or managing intellectual property and hasn't carried out any
                significant financial activities, it can be considered inactive.
                Such a company can apply to the Registrar for a change in status
                to become a dormant company, as outlined in the Companies Act.
              </p>
              <h4>Meaning of Inactive Company</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> An "Inactive Company"
                      refers to a company that has not engaged in any business
                      activity or conducted significant accounting transactions
                      during the last two financial years.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> It also includes
                      companies that have not filed their financial statements
                      or annual returns with the Registrar of Companies (ROC)
                      during the preceding two financial years.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Significant Accounting Transactions</h3>
              <p>
                Significant accounting transactions include all company
                financial activities, with the following exceptions:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Payments to the ROC or
                      for fulfilling requirements under the Companies Act or any
                      other applicable laws.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Transactions related to
                      the allotment of shares.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Payments for the
                      maintenance of the company's office or records.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Reasons for Obtaining the Status of a Dormant Company</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Name Reservation: </strong>Business owners may
                      register their company as dormant. At the same time, they
                      prepare to launch their business, serving as a means to
                      reserve the company name.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Restructuring: </strong>In cases where
                      business owners plan to restructure their operations,
                      obtaining dormant status for the company can be
                      beneficial.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Extended Absences: </strong>If business owners
                      anticipate an extended period away from operations due to
                      illness, travel, maternity leave, sabbatical, etc., they
                      may choose to obtain dormant status for the company.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Benefits of Opting for Dormant Company Status</h3>
              <p>
                Exploring the advantages of transitioning an active company to a
                dormant status under the Companies Act, 2013.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Preservation of Company Name: </strong>Ensures the
                      company name is protected during inactivity, preventing
                      others from registering the same or a highly similar name.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reduced Compliance Requirements: </strong>
                      Significantly lowers the regulatory burden and compliance
                      obligations under the Companies Act 2013, making
                      maintaining the company easier and more cost-effective.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Opportunity for Reactivation: </strong>Offers the
                      flexibility to quickly resume business activities when
                      opportunities arise without establishing a new corporate
                      entity.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Limited Applicability of Company Act Provisions:{" "}
                      </strong>
                      Only a select few provisions of the Companies Act apply to
                      dormant companies, simplifying legal compliance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Easier Annual Return Filing: </strong>Streamlines
                      the process of filing annual returns, requiring less
                      detailed information compared to active companies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>No Auditor Rotation: </strong>Exempts the company
                      from the obligation to rotate auditors, which is required
                      for active companies to ensure auditor independence.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Bi-Annual Board Meetings: </strong>Requires only
                      one board meeting every six months, reducing the
                      administrative burden associated with more frequent
                      meetings required for active companies.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Mandatory Requirements for Obtaining Dormant Status</h3>
              <p>
                To qualify for dormant status under Section 455(5) of the
                Companies Act and Rule 6 of the Companies (Miscellaneous) Rules,
                2014, a company must meet the following prerequisites:
              </p>
              <h4>Minimum Number of Directors</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> For a public company: 3
                      Director
                    </li>
                    <li>
                      <i className="uil uil-check"></i> For a private company: 2
                      Director
                    </li>
                    <li>
                      <i className="uil uil-check"></i> For a One Person
                      Company: 1 Director
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Special Resolution or Shareholder Consent</h4>
              <p>
                A special resolution must be passed in a general meeting, or a
                notice must be issued to all shareholders to obtain the consent
                of at least three-fourths of shareholders (in value) to obtain
                dormant status, as per Rule 3 of the Companies (Miscellaneous)
                Rules, 2014.
              </p>
              <h4>Application Conditions</h4>
              <p>
                The following conditions are to be satisfied before applying for
                dormant company status:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> No ongoing inspections,
                      inquiries, or investigations against the company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> No ongoing prosecutions
                      under any law.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> No outstanding public
                      deposits or defaults in payments or interest thereof.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Absence of outstanding
                      secured or unsecured loans.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> No disputes regarding
                      the management or ownership, accompanied by a certificate
                      with the application.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> All statutory taxes,
                      dues, duties, etc., to the Central, State Government, or
                      local authorities are cleared.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The company’s securities
                      must not be listed on any stock exchange within India or
                      internationally.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Note: </strong>If there are outstanding unsecured loans,
                the company can still apply for dormant status after obtaining
                consent from the lender and including this consent with the Form
                MSC-1 application.
              </p>
              <h3>Procedure for Dormant Status Filing</h3>
              <p>
                Converting an active company to a dormant one involves a
                specific procedure under the Companies Act of 2013. Here's a
                simplified overview of the steps involved:
              </p>
              <h4>Step 1: Board Meeting</h4>
              <p>
                The Board of Directors should pass a resolution to apply for the
                company’s status conversion to dormant. One director must be
                authorised to handle the process and notify all shareholders
                about the forthcoming Extraordinary General Meeting (EGM).
              </p>
              <h4>Step 2: EGM Notice</h4>
              <p>
                Send out a detailed notice for the EGM, including an explanatory
                statement. This statement should outline why the Board proposes
                changing the company's status to dormant.
              </p>
              <h4>Step 3: CA Certification of Statement of Affairs</h4>
              <p>
                Before the EGM, the designated director should collaborate with
                the Statutory Auditor or a practising Chartered Accountant. This
                collaboration certifies the company's Statement of Affairs,
                essentially the financials.
              </p>
              <h4>Step 4: Conducting the EGM</h4>
              <p>
                Conduct an Extraordinary General Meeting (EGM) per Section 96,
                100, and Secretarial Standard-2 (SS-2) to pass a special
                resolution for obtaining dormant status. The procedure for
                conducting an EGM should be followed as outlined.
              </p>
              <h4>Step 5: Filing of MGT-14</h4>
              <p>
                File the special resolution passed at the EGM with the Registrar
                of Companies using Form MGT-14. This filing should include a
                certified true copy of the resolution and the EGM notice and
                must be done within 30 days of the EGM.
              </p>
              <h4>Step 6: Application for Dormant Status</h4>
              <p>
                After securing a special resolution or obtaining consent from at
                least three-fourths of the shareholders (by value), submit Form
                MSC-1 to the Registrar. The requisite fee should accompany this
                application as per the Companies (Registration Offices and Fees)
                Rules, 2014 and include the following documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A certified true copy of
                      the board resolution for dormant status.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A certified true copy of
                      the special resolution for dormant status.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Auditor’s certificate.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Statement of affairs
                      verified by a Chartered Accountant or the company's
                      auditors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Approval or No Objection
                      Certificate from any regulatory authority, if applicable.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> If filed with the ROC,
                      the company's latest financial statement and annual
                      return.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Consent from lenders if
                      there are outstanding loans.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Step 7: Issuance of Certificate of Dormant Status</h4>
              <p>
                Upon reviewing the application, the Registrar will issue a
                certificate in Form MSC-2, granting dormant status to the
                company as per Section 455(2) of the Companies Act and Rule 4 of
                the Companies (Miscellaneous) Rules, 2014.
              </p>
              <p>
                Dormant companies must file an annual return in Form MSC-3
                within 30 days of the end of each financial year. This return
                should include a duly audited financial statement and be
                accompanied by the annual fee as prescribed.{" "}
              </p>
              <p>
                Even while dormant, the company must file returns for any
                allotment of securities or changes in directorship as specified
                by the Act in the prescribed manner and timelines.
              </p>
              <p>
                <strong>Note: </strong>The register maintained on the Ministry
                of Corporate Affairs portal is the official register for dormant
                companies, as per Section 455(3) of the Companies Act and Rule 5
                of the Companies (Miscellaneous) Rules, 2014.
              </p>
              <h3>ROC Forms a for Dormant Company Registration</h3>
              <p>
                To obtain Dormant status, the specified forms must be submitted
                as mentioned above:
              </p>
              <div className="table-responsive">
                <table className="table mb-5 border">
                  <thead>
                    <tr>
                      <th className="border">
                        <strong>S.No</strong>
                      </th>
                      <th className="border">
                        <strong>Form Name</strong>
                      </th>
                      <th className="border">
                        <strong>Explanation</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">1</td>
                      <td className="border">e-Form MGT-14</td>
                      <td className="border">
                        This form is submitted to the Registrar of Companies
                        within 30 days of passing a Special Resolution to
                        officially record the resolution as mandated by section
                        117 of the Companies Act.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">2</td>
                      <td className="border">e-Form MSC-1</td>
                      <td className="border">
                        This form is used to apply for the change of company
                        status to Dormant. It must be filed with the ROC within
                        30 days after the special resolution for the status
                        change is passed.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>Annual Compliance for Dormant Company</h3>
              <p>
                There's a common misconception that transitioning to a dormant
                company status absolves businesses from all compliance
                responsibilities. While it's true that dormant companies are
                granted certain relaxations under the Companies Act, this does
                not eliminate the need for annual compliance. The annual
                compliance for a dormant company encompasses four key areas:
                accounting practices, statutory audits, tax return filings, and
                Registrar of Companies (ROC) returns. Let's delve into each
                component:
              </p>
              <h4>Accounting &amp; Financial Statements</h4>
              <p>
                Companies must maintain accurate records and conduct bi-annual
                board meetings despite their dormant status. The company's
                registered address must also be upheld. As a result,
                administrative expenses will still be recorded in the company's
                accounts, necessitating ongoing accounting activities and the
                preparation of financial statements.
              </p>
              <h4>Statutory Audit</h4>
              <p>
                Although dormant companies are exempt from auditor rotation
                requirements, they must still undergo a statutory audit of their
                financial statements. This entails thorough preparation of the
                company's books, complete with supporting documentation for all
                expenses, to facilitate the audit process.
              </p>
              <h4>Tax Returns</h4>
              <p>
                Obligations such as filing TDS and GST returns remain applicable
                to dormant companies. Furthermore, these entities are required
                to file Income Tax Returns in the same manner as active
                companies.
              </p>
              <h4>ROC Filings: Annual Returns</h4>
              <p>
                Dormant companies benefit from a streamlined process for annual
                ROC filings. They must submit a simplified Annual ROC Return
                using Form MSC-3, which presents the company's financial
                position. This return, verified by a practising Chartered
                Accountant, must be filed with the ROC within 30 days following
                the conclusion of each financial year.
              </p>
              <p>The filing should also include:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A certified true copy of
                      the Board resolution authorising the filing.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A duly audited financial
                      position statement by a practising Chartered Accountant.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Any other documents
                      deemed necessary.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                In summary, while dormant company status may offer some
                regulatory leniency, it does not exempt businesses from
                fulfilling essential annual compliance tasks.
              </p>
              <h3>Simplify Dormant Status Filing with LegallensIndia</h3>
              <p>
                At LegallensIndia, our team of experts is dedicated to assisting
                you with Dormant Status filings, ensuring a seamless transition
                for your company. From initiating the application process to
                navigating the necessary documentation, we handle it precisely
                and efficiently. Additionally, we provide comprehensive support
                for all your annual compliance needs, including accounting,
                statutory audits, tax filings, and ROC returns.
              </p>
              <p>
                <strong>
                  <em>
                    Simplify your Dormant Status filing today with LegallensIndia
                    - Get Started now!
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
