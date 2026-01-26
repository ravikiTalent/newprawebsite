import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTReturnFilingbyAccountant() {
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
                GST Return Filing by Accountant
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In India, Every Organizations registered under GST must file
                their GST returns with a frequency that aligns with their
                business operations - monthly GST filing, quarterly, or yearly.
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
                { id: 3, title: "GST Return Filing by Accountant", url: "" },
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
                        GST Return Filing by Accountant
                      </h5>
                      <p>
                        In India, Every Organizations registered under GST must
                        file their GST returns with a frequency that aligns with
                        their business operations - monthly GST filing,
                        quarterly, or yearly.
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

              <h2 className="display-4 mb-3">GST Return Filing</h2>
              <p>
                In India, Every Organizations registered under GST must file
                their GST returns with a frequency that aligns with their
                business operations - monthly GST filing, quarterly, or yearly.
                This requirement might seem daunting, but with the online
                assistance of GST professionals from LegallensIndia, navigating
                through the necessary processes can be straightforward.
                Taxpayers must adhere to the designated deadlines for their GST
                filing online, as these returns are crucial for the Indian
                government to ascertain the nation's tax obligations.
              </p>
              <p>
                Streamline your GST Return filing online process and maintain
                compliance effortlessly with LegallensIndia. Benefit from the
                convenience of LEDGERS GST platform, where you can access your
                business financials in real-time from any location. Plus,
                LEDGERS integrates smoothly with the apps you already use,
                ensuring a seamless workflow.{" "}
              </p>
              <p>
                <strong>
                  <em>
                    File GST returns with LegallensIndia now and keep your
                    business ahead with ease!
                  </em>
                </strong>
              </p>
              <h3>What is GST Return?</h3>
              <p>
                A GST Return is a detailed statement that captures all the
                financial transactions of a person registered under GST,
                reflecting revenues and expenditures. GST filing online is a
                mandatory submission for every holder of GSTIN to the tax
                authorities, allowing them to determine the net tax liability
                with precision.
              </p>
              <p>
                The GST return filing online encompasses several critical
                elements:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Purchases:</strong> It records in detail the purchases
                  the taxpayer has made.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Sales:</strong> It provides a comprehensive log of the
                  taxpayer's sales activities.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Output GST (On Sales):</strong> It notes the GST
                  charged on the taxpayer's sales.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Input Tax Credit (GST Paid on Purchases):</strong> It
                  lists the GST paid on purchases, which is eligible to be
                  deducted from the GST owed on sales.
                </li>
              </ul></div></div>
              <p className="mt-4">
                For those seeking guidance on GST return filing online or
                support with managing their GST compliance, LegallensIndia offers
                GST software designed to streamline the process.
              </p>
              <h3>Who Should File GST Returns?</h3>
              <p>
                GST returns must be filed by any business or individual
                registered under the GST regime. This obligation applies to
                entities whose annual aggregate turnover surpasses the specified
                threshold, which is set by the tax authorities and may differ
                for various classifications of taxpayers, such as standard
                taxpayers and those opting for the composition scheme. All those
                applicable entities must file GST returns before the due date to
                avoid late GST filing charges.
              </p>
              <h3>How Many Returns are there under GST?</h3>
              <p>
                Within the Goods and Services Tax (GST) system, 13 returns cater
                to different facets of a taxpayer's financial dealings. It's
                important to recognize that not all taxpayers must file every
                type of return; the specific returns that need to be filed
                depend on the taxpayer's category and the particulars of their
                GST registration.
              </p>
              <p>Below is a snapshot of the 13 GST returns:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-1:</strong> Filed for disclosing details of
                  outward supplies, essentially the sales.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-3B:</strong> A summarised return that outlines
                  both sales and purchases, inclusive of tax payments.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-4:</strong> Applicable to those under the
                  Composition Scheme, summarizing turnover and corresponding
                  tax.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-5:</strong> For non-resident taxpayers conducting
                  taxable transactions in India.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-5A:</strong> For providers of online information
                  and database access or retrieval services.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-6:</strong> Used by Input Service Distributors
                  for detailing input tax credit distribution.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-7:</strong> For entities required to deduct TDS
                  under GST.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-8:</strong> To be filed by e-commerce operators
                  reporting transactions on their platform.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-9:</strong> An annual comprehensive return
                  summarizing all periodical filings over the fiscal year.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-10:</strong> The final return upon cancellation
                  or surrender of GST registration.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-11:</strong> For those with a Unique Identity
                  Number, claiming refunds on their purchases.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>CMP-08:</strong> A quarterly statement for Composition
                  Scheme taxpayers detailing tax liability.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>ITC-04:</strong> For manufacturers to declare details
                  about goods dispatched to and received from a job worker.
                </li>
              </ul></div></div>
              <p className="mt-4">
                Additionally, there are return-related statements for input tax
                credits:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-2A (dynamic):</strong> Offers a real-time
                  perspective of inward supplies as suppliers report.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>GSTR-2B (static):</strong> Provides a fixed snapshot
                  of inward supplies based on the suppliers' filings.
                </li>
              </ul></div></div>
              <p className="mt-4">
                For small taxpayers enrolled in the Quarterly Return Monthly
                Payment (QRMP) scheme, the Invoice Furnishing Facility (IFF)
                permits the declaration of B2B sales during the first two months
                of a quarter. Nonetheless, these taxpayers are obligated to
                remit taxes monthly using Form PMT-06.
              </p>
              <h3>GSTR-1 (Return for Outward Supplies)</h3>
              <p>
                GSTR-1 is the mandatory return for businesses to detail their
                outward supplies of goods and services. This encompasses all
                sales-related invoices and adjustment notes for the given tax
                period. Every regular taxpayer under GST, including those
                classified as casual taxable persons, is obligated to file
                GSTR-1.
              </p>
              <h4>Submission Deadlines</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Monthly GST filing:</strong> Due on the 11th of the
                  subsequent month for businesses whose yearly turnover exceeds
                  Rs. 5 crore or for those not enrolled in the QRMP scheme.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Quarterly GST filing:</strong> Due on the 13th of the
                  month after the quarter's end for businesses participating in
                  the QRMP scheme.
                </li>
              </ul></div></div>
              <h3 className="mt-4">GSTR-2A (Dynamic Read-Only Return)</h3>
              <p>
                GSTR-2A is a dynamic, read-only return for the recipients or
                purchasers of goods and services, capturing details of all
                incoming supplies from registered GST vendors within a tax
                period. The information in GSTR-2A is filled automatically from
                the GSTR-1 returns of suppliers and the Invoice Furnishing
                Facility (IFF) data for those in the QRMP scheme.
              </p>
              <h3>GSTR-2B (Static Read-Only Return)</h3>
              <p>
                Introduced in August 2020, GSTR-2B is a static read-only return
                that provides consistent ITC information sourced from the
                previous month's GSTR-1 filings. It supports purchasers in
                matching their ITC claims for each tax period, advising on
                necessary actions for each listed invoice, including any need
                for reversals, ineligibility, or application of the reverse
                charge.
              </p>
              <h3>GSTR-2 (Deferred Return)</h3>
              <p>
                GSTR-2, an editable return, is presently deferred and was meant
                for registered purchasers to declare their inward supply of
                goods and services for a tax period. Initially planned to be
                auto-filled from GSTR-2A, this GST filing online has been on
                hold since September 2017.
              </p>
              <h3>GSTR-3 (Deferred Return)</h3>
              <p>
                GSTR-3, a suspended monthly summary return for regular
                taxpayers, compiled concise figures of both outward and inward
                supplies, input tax credits, tax liabilities, and tax payments.
                It was automatically generated from GSTR-1 and GSTR-2 filings
                but has been deferred since September 2017.
              </p>
              <h3>GSTR-3B (Consolidated Return)</h3>
              <p>
                GSTR-3B, a monthly summary declaration for normal taxpayers,
                summarizes outward supplies, input tax credits, and tax dues.
                Before submitting GSTR-3B, it is critical to reconcile sales and
                ITC details with GSTR-1 and GSTR-2B records.
              </p>
              <h3>Submission Deadlines</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Monthly:</strong> Due by the 20th of the month
                  following the reporting month for taxpayers with an annual
                  turnover above Rs. 5 crore.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Quarterly:</strong> Due by the 22nd of the month
                  following the quarter for 'X' category states and by the 24th
                  for 'Y' category states for taxpayers with a turnover of up to
                  Rs. 5 crore in the QRMP scheme.
                </li>
              </ul></div></div>
              <h3 className="mt-4">GSTR-4 (Return for Composition Scheme Taxpayers)</h3>
              <p>
                GSTR-4 is the yearly return for those under the Composition
                Scheme, due by April 30th of the subsequent financial year.
                GSTR-4 has replaced the prior quarterly submissions, with
                taxpayers now submitting a simplified challan via Form CMP-08 by
                the 18th following each quarter's end
              </p>
              <p>
                Under the Composition Scheme, businesses with goods turnover up
                to Rs. 1.5 crores may pay tax at a predetermined rate on their
                turnover. Service providers with a turnover of up to Rs. 50 lakh
                can opt for a similar benefit
              </p>
              <h3>GSTR-5 (Return for Non-Resident Foreign Taxpayers)</h3>
              <p>
                GSTR-5, required by non-resident foreign taxpayers engaged in
                business in India, details their outward and inward
                transactions, adjustments, tax liabilities, and payments, with
                submissions due by the 20th of each month
              </p>
              <h3>GSTR-5A (Return for OIDAR Service Providers)</h3>
              <p>
                GSTR-5A is the monthly summary for providers of Online
                Information and Database Access or Retrieval Services, due by
                the 20th of every month.
              </p>
              <h3>GSTR-6 (Return for Input Service Distributors)</h3>
              <p>
                Input Service Distributors must file GSTR-6 monthly, reporting
                the ITC received and allocated, including detailed documentation
                related to the distribution of credits, by the 13th of each
                month.
              </p>
              <h3>GSTR-7 (TDS Return)</h3>
              <p>
                Entities must deduct TDS under GST file GSTR-7 monthly,
                documenting TDS deducted, due and paid amounts, and any TDS
                refunds, with filings due by the 10th of the subsequent month.
              </p>
              <h3>GSTR-8 (Return for E-commerce Operators)</h3>
              <p>
                E-commerce operators under GST must submit GSTR-8 monthly,
                recording the supplies made and tax collected at source, due by
                the 10th of the following month.
              </p>
              <h3>GSTR-9 (Annual Return)</h3>
              <p>
                All GST-registered taxpayers must file GSTR-9 annually,
                summarizing their outward and inward supply details, taxes due,
                and paid. The due date is December 31st of the year after the
              </p>
              <h3>Due dates for various types of GST returns</h3>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>GST Return</strong>
                    </th>
                    <th className="border">
                      <strong>Type of Taxpayer</strong>
                    </th>
                    <th className="border">
                      <strong>Due Date</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">GSTR-1</td>
                    <td className="border">Regular Taxpayer</td>
                    <td className="border">
                      Monthly: 11th of the following month Quarterly: 13th of
                      the month following the quarter
                    </td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-2A (Auto-generated)</td>
                    <td className="border">All Taxpayers</td>
                    <td className="border">
                      Auto-generated, utilized for reconciliation purposes
                    </td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-3B</td>
                    <td className="border">Regular Taxpayer</td>
                    <td className="border">
                      Monthly: 20th of the following month
                    </td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-4</td>
                    <td className="border">Composition Scheme Dealer</td>
                    <td className="border">
                      Annually: 30th of April following the end of the financial
                      year
                    </td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-5</td>
                    <td className="border">Non-Resident Foreign Taxpayer</td>
                    <td className="border">20th of the following month</td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-6</td>
                    <td className="border">Input Service Distributor</td>
                    <td className="border">13th of the following month</td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-7</td>
                    <td className="border">Tax Deducted at Source (TDS)</td>
                    <td className="border">10th of the following month</td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-8</td>
                    <td className="border">E-commerce Operator</td>
                    <td className="border">10th of the following month</td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-9</td>
                    <td className="border">Regular Taxpayer (Annual)</td>
                    <td className="border">
                      31st December of the following financial year
                    </td>
                  </tr>
                  <tr>
                    <td className="border">GSTR-9C</td>
                    <td className="border">Regular Taxpayer (Annual)</td>
                    <td className="border">
                      Filed along with GSTR-9, by 31st December of the following
                      financial year
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>Penalty for Late Filing GST Returns</h3>
              <p>
                If you submit GST returns late, you could face penalties and
                additional GST filing charges. Businesses should submit on time
                to avoid these costs. Here's what you need to know about late
                GST returns:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Filing Returns is Required:</strong> Every registered
                  taxpayer has to file GST returns regularly, even if there's no
                  business activity.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Delays Lead to More Delays:</strong> If you miss a
                  filing deadline, you can't file for the next period until
                  you've filed for the previous one. This can lead to a pile-up
                  of late returns.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Penalties for Late Filing:</strong> If you file GSTR-1
                  late, for example, you'll get a penalty that shows up when you
                  file GSTR-3B. You are required to pay GST filing charges for
                  delayed filing.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Interest on Late Tax Payments:</strong> If you owe
                  taxes and pay late, you'll be charged 18% interest per year on
                  the amount you owe, starting from the day after the due date
                  until you pay
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Late GST return filing fees:</strong> The law sets the
                  late GST return filing fees at Rs. 100 per day for each CGST
                  and SGST, with a maximum of Rs. 5,000.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Annual Return Late Fees:</strong> For yearly returns
                  like GSTR-9 and GSTR-9C, the late fee is capped at 0.25% of
                  your turnover in your state or UT unless the government
                  provides relief or changes the fees.
                </li>
              </ul></div></div>
              <h3 className="mt-4">How do you file the GST returns?</h3>
              <p>
                LegallensIndia is a leading business service platform in India; we
                offer end-to-end GST filing services. We have helped thousands
                of business owners to get GST registration, as well as file GST
                returns.
              </p>
              <h3>Outsource GST Compliance to LegallensIndia</h3>
              <p>
                Outsource your GST compliance to LegallensIndia to ease your
                compliance burden and focus your efforts on growing your
                business. With LegallensIndia, your GST compliance will be
                maintained on the LEDGERS GST platform, providing you access to
                live business data - anywhere, anytime. LEDGERS can also
                seamlessly sync and work with other online and offline
                applications you regularly use
              </p>
              <p>
                When GST return filing online is outsourced to LegallensIndia, a
                dedicated GST advisor is assigned to the business with a
                reasonable GST filing cost.
              </p>
              <p>
                This dedicated advisor would reach out to you every month and
                collect the necessary information, prepare the GST returns, and
                help in filing the GST returns.
              </p>
              <h3>
                Benefits of choosing LegallensIndia GST Return Filing Services
              </h3>
              <h4>Dedicated GST Advisor</h4>
              <p>
                A relationship manager with experience in the sector that you
                operate in will guide you through the process of GST
                registration and filing. They will help with specific tasks such
                as uploading invoices and also ensure that your filing is taken
                care of on time.
              </p>
              <h4>Reminder to file GST returns</h4>
              <p>
                Our platform ensures that you get timely reminders well in
                advance of the deadline beyond which penalty will be applicable.
                In addition to this, your GST advisor will remind you
                periodically so that no deadlines are missed and prevent the
                penalty of GST filing charges.
              </p>
              <h4>Monthly GST Status reports</h4>
              <p>
                Monthly reports detailing the status of GST return filing,
                including GSTR- 3B and the way forward, will be shared with the
                clients by the GST advisors.
              </p>
              <h4>GST returns by LEDGERS</h4>
              <p>
                GST returns are prepared by LEDGERS- the GST software so that it
                is error-free and filed on time without hassles. This affordable
                GST filing cost software help you to easily file the GST
                returns.
              </p>
              <h4>Standard accounting and cloud records</h4>
              <p>
                All of your financial transactions and invoices will be recorded
                in LEDGERS by accountants so that the GST filing online of all
                your returns, including ITR, TDS, and GST, is seamless and
                cost-effective.
              </p>
              <h3>LEDGERS GST Software</h3>
              <p>
                In addition to the GST advisor support, LEDGERS GST Software
                will be provided to the client for GST invoicing, payments, GST
                return filing services, and accounting.
              </p>
              <p>Some of the features of LEDGERS are:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}Customer management</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Supplier management</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}GST Invoicing</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Estimate issuance &amp; tracking</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Accounts receivables tracking</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Purchase register</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Payments tracking</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Payables management</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Automated GST return filing (GSTR-1, GSTR-3B)</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Automatic Input Tax credit reconciliation</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}GST E-way bill generation &amp; management</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}ICICI bank integration</li>
              </ul></div></div>
              <p className="mt-4">
                Ensure your business stays compliant and avoids penalties by
                filing your GST returns on time with LegallensIndia GST filing
                services. Talk to our experts today to start and experience
                hassle-free filing with expert assistance every step of the way.
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
