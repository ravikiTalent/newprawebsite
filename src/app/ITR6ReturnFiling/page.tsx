import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ITR6ReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">ITR-6 Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                ITR-6 filing is a key annual compliance requirement for
                companies in India.
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
                { id: 3, title: "ITR-6 Return Filing", url: "" },
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
                      <h5 className="card-title">ITR-6 Return Filing</h5>
                      <p>
                        ITR-6 filing is a key annual compliance requirement for
                        companies in India.
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
                ITR 6 - Company Income Tax Filing
              </h2>
              <p>
                <span>
                  Establishing a business comes with its own set of challenges,
                  and navigating the complexities of filing returns is a vital
                  aspect of successful operations. ITR-6 filing is a key annual
                  compliance requirement for companies in India. Accurately
                  filing ITR-6 on time is crucial for ensuring compliance with
                  the Income Tax Act 1961, helping businesses avoid penalties
                  and potential legal complications.
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>
                      Ready to complete your company's ITR 6? LegallensIndia
                      experts are here to guide you through every step—let's
                      begin your ITR-6 filing today!
                    </em>
                  </strong>
                </span>
              </p>
              <h3>
                <span>ITR 6 Applicability</span>
              </h3>
              <p>
                <span>
                  ITR 6 applies to all companies except those claiming an
                  exemption under Section 11 of the Income Tax Act. Section 11
                  applies to income derived from property held under a trust or
                  legal obligation for charitable or religious purposes.
                  Therefore, companies with income used for charitable or
                  religious purposes are not eligible to file ITR 6.
                </span>
              </p>
              <h4>
                <span>Applicable Entities</span>
              </h4>
              <p>
                <span>
                  Companies registered under the Companies Act of 2013 or the
                  Companies Act of 1956 are required to file the ITR 6 Form.
                  This includes:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Private Limited Company</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>One Person Company</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Public Limited Company</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Who is Not Eligible to File the ITR 6 Form?</span>
              </h3>
              <p>
                <span>
                  The following entities are not eligible to file the ITR 6
                  Form:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> <span>Individuals</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Hindu Undivided Family (HUF)</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <span>Firms</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Associations of Persons (AOP)</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Bodies of Individuals (BOI)</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Local Authorities</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Artificial Judicial Persons</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Companies that seek exemption under section 11 of the
                        Income Tax Act.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>ITR 6 Due Date</span>
              </h3>
              <p>
                <span>
                  Every company is required to file its Income Tax Return under
                  Section 139 of the Income Tax Act by October 31st of the
                  assessment year. If transfer pricing is involved, such a
                  company is required to file its Income Tax Return by November
                  30th of the assessment year.
                </span>
              </p>
              <h3>
                <span>The Importance of Timely ITR Filing for Companies</span>
              </h3>
              <p>
                <span>
                  Filing ITR 6 on or before the due date not only ensures
                  compliance with tax laws but also offers several financial and
                  operational advantages for your business.
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Carry Forward of Losses:</strong>
                      </span>
                      <span>
                        {" "}
                        Filing on time allows a company to carry forward its
                        losses for adjustment against future profits. According
                        to Section 72 of the Income Tax Act, companies can carry
                        forward business losses up to 8 subsequent assessment
                        years. Failure to file on time results in losing this
                        right, negatively impacting the company’s financial
                        position.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Avoiding Penalties and Interest: </strong>
                      </span>
                      <span>
                        Late filing incurs a fee under Section 234F of the
                        Income Tax Act. Additionally, timely filing helps avoid
                        interest charges on any outstanding tax liabilities
                        under Sections 234A, 234B, and 234C.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reduced Risk of Scrutiny:</strong>
                      <strong> </strong>Timely filing minimizes the risk of
                      scrutiny by tax authorities. Late submissions can raise
                      red flags, potentially leading to notices and further
                      examinations by the tax department.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Quicker Refund Processing:</strong>
                      <strong> </strong>Filing your income tax return on time
                      facilitates faster processing of tax refunds from the
                      income tax department.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Enhanced Credit Opportunities:</strong>
                      </span>
                      <span>
                        {" "}
                        Timely filed tax returns are often required by banks and
                        financial institutions as part of loan and credit
                        facility applications. Demonstrating compliance and
                        financial stability can improve the chances of securing
                        credit.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Smoother Winding-Up Process:</strong>
                      <strong> </strong>If a company decides to cease
                      operations, having all Income Tax returns filed on time is
                      essential for a smoother and quicker winding-up process.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Get started today with LegallensIndia to complete your ITR 6
                  filing seamlessly and ensure your business remains compliant
                  with tax regulations!
                </span>
              </p>
              <h3>
                <span>Structure of ITR 6 Form</span>
              </h3>
              <p>
                <span>
                  ITR 6 is divided into Part A and Part B ( along with the
                  subsections) with multiple schedules that include information
                  relevant to the income and tax of the taxpayer. Let us have a
                  detailed look at this.
                </span>
              </p>
              <h4>
                <span>Part A (and its subsections)</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>General information:</strong>
                      <strong> </strong>This Subsection should be filled out
                      with the basic details of the entity, such as the name,
                      PAN number, address, CIN, incorporation date, etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Trading Account:</strong>
                      <strong> </strong>This subsection requires details that
                      are relevant to the company's income and expenditures.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Balance sheet:</strong> This subsection should
                      consist of the company's details, such as liabilities,
                      current liabilities, share capital, and more.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Manufacturing account:</strong>
                      <strong> </strong>This Subsection requires the figures for
                      manufacturing the accounts relating to the inventory, such
                      as opening stock, closing stock, and cost of the goods
                      that are produced.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Profit and Loss Account:</strong>
                      </span>
                      <span>
                        {" "}
                        This subsection should be filled with the details of the
                        company's profit or the loss that is incurred during the
                        relevant financial year.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Part B (and its subsections)</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Part B-TI:</strong> Computation of Total Income
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Part B-TTI: </strong>Computation of tax liability
                      for the total income.
                    </li>
                  </ul>
                </div>
              </div>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <h4>
                        <span>Schedules</span>
                      </h4>
                    </td>
                    <td className="border">
                      <h4>
                        <span>Purpose</span>
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –HP</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          For computing incomes under the head Income from House
                          Property
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –BP</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          For computing incomes under the head “profit and gains
                          from business and profession
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –DPM</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          For calculating depreciation on plant &amp; machinery
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –DOA</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>For a summary of depreciation on all assets</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –DCG</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          For calculating the deemed capital gain on the sale of
                          depreciable assets
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –ESR</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Deductions u/s 35, i.e. expenditure on scientific
                          research
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –CG</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          For calculating income under the head “Capital gains.”
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –OS</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>For calculating income from other sources</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –CYLA</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Calculating the income after setting off the current
                          year's loss
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –BFLA</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Calculation of income after setting off the unabsorbed
                          loss of the previous year
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –CFL</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Statement of loss for carrying forward to a further
                          year
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –UD</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Statements of unabsorbed depreciation and allowance
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –ICDS</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Income computation disclosure standards on profit
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –10AA</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Deductions u/s 10AA</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –80G</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details of deduction u/s 80G relating to donations
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –80 GGA</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Statement of donations for scientific research and
                          rural development
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –VIA</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Statement of deductions from total income under
                          Chapter VI-A
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –SI</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details of income chargeable at special tax rates
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –PTI</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details relating to passing through income from
                          business trust or investment fund
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –EI</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Statement of exempted incomes</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –MAT</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details of tax payable u/s 115JB (Minimum Alternate
                          Tax)
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –DDT</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          statement of tax paid on dividend, i.e. “dividend
                          distribution tax”
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –BBS</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details of tax distributed income on buyback of shares
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –ESI</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Statement of foreign incomes and tax relief to it
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –IT</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details on advance-tax paid and self-assessment tax
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –TDS</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details of TDS on incomes other than salaries
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –TCS</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Statement of TCS (Tax collected at source)</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –FSI</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Statement of income accruing outside India</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –TR</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details of tax relief claimed for foreign tax paid
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –FA</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Complete details of foreign assets and foreign income
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –SH1</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details of shareholding of an unlisted company
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –SH2</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Details of shareholding of start-ups</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –AL1</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Statement of assets and liabilities at the end of the
                          year
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –GST</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Statement of turnover reported for GST</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Schedule –FD</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Details of payment/receipt made in foreign currency
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <span>Procedure for Filing ITR Form 6</span>
              </h3>
              <p>
                <span>
                  After logging into the Income Tax Portal, navigate to the
                  "e-Filing" section, select "Income Tax Returns," and choose
                  ITR Form 6 for filing. To ensure a smooth and accurate filing
                  of ITR Form 6, the Income Tax Department recommends that
                  taxpayers follow these steps in the correct sequence:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part A</strong>
                      <strong>: </strong>Begin by filling out the taxpayer's
                      basic details, including personal information and income
                      sources.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Schedules</strong>
                      <strong>: </strong>Complete the relevant schedules that
                      apply to your company's income, deductions, and tax
                      details. This includes details of profits and gains, tax
                      payments, and any applicable exemptions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part B</strong>
                      <strong>:</strong> Fill in the total income, tax
                      computation, and any carry-forward losses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Verification</strong>
                      <strong>: </strong>Review all the information provided and
                      complete the verification section to validate the accuracy
                      of your return.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Submit the ITR</strong>
                      <strong>: </strong>Once all sections are filled out and
                      verified, submit the ITR Form 6 electronically.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Acknowledgement</strong>
                      <strong>: </strong>After successful submission, download
                      the acknowledgement receipt (ITR-V) for your records. If
                      you opt for e-verification, you will receive an
                      acknowledgement via email.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  <em>
                    <strong>
                      LegallensIndia experts are here to guide you through every
                      step—get in touch today to ensure a seamless filing
                      experience for your ITR!
                    </strong>
                  </em>
                </span>
              </p>
              <h3>
                <span>Documents Required for Filing ITR-6</span>
              </h3>
              <p>
                <span>
                  When filing the ITR-6 return form, no annexures or documents,
                  including TDS certificates, need to be attached. Taxpayers are
                  advised to reconcile the taxes that have been deducted,
                  collected, or paid on their behalf by comparing these amounts
                  with their Tax Credit Statement (Form 26AS).
                </span>
              </p>
              <h3>
                <span>Streamline Your ITR 6 Filing with LegallensIndia!</span>
              </h3>
              <p>
                <span>
                  LegallensIndia offers comprehensive support for ITR 6 filing,
                  ensuring a smooth and hassle-free experience for companies.
                  With expert guidance from our team of professionals, we assist
                  in understanding the specific requirements and deadlines
                  associated with ITR 6. Our services include accurate
                  preparation and filing of the return, ensuring compliance with
                  the Income Tax Act. We also provide support in reconciling tax
                  deductions with Form 26AS, helping companies avoid
                  discrepancies. By choosing LegallensIndia, businesses can
                  streamline their ITR 6 filing process and focus on their core
                  operations while we handle the complexities of tax compliance.
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>
                      Ready to simplify your ITR 6 filing process? Contact
                      LegallensIndia now for expert assistance and ensure your
                      compliance with ease.&nbsp;
                    </em>
                  </strong>
                </span>
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
