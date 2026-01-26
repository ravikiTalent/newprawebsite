import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTInvoicingFilingSoftware() {
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
                GST Invoicing & Filing Software
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                LEDGERS accounting software is designed to help businesses
                easily maintain their accounts, GST compliance, TDS compliance,
                payroll and income tax filing.
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
                { id: 3, title: "GST Invoicing & Filing Software", url: "" },
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
                        GST Invoicing & Filing Software
                      </h5>
                      <p>
                        LEDGERS accounting software is designed to help
                        businesses easily maintain their accounts, GST
                        compliance, TDS compliance, payroll and income tax
                        filing.
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

              <h2 className="display-4 mb-3">LEDGERS - Accounting Software</h2>
              <p>
                LEDGERS accounting software is designed to help businesses
                easily maintain their accounts, GST compliance, TDS compliance,
                payroll and income tax filing. Accounting using LEDGERS software
                is simple and intuitive - no prior accounting knowledge or
                experience is required. LEDGERS is available as a webapp and on
                Google Playstore. LEDGERS accounting software is integrated with
                the GSTN, TRACES Portal, Banks and various other platforms in
                India to help businesses maintain error-free compliances and
                avoid penalties.
              </p>
              <p>
                LEDGERS is built on the AWS Platform and conforms to the best
                practices for data privacy, security and backup. With LEDGERS
                accounting software being a paid product, the user/customer has
                complete confidentiality, privacy and control over the data
                inside their LEDGERS.
              </p>
              <h4>GST Invoicing &amp; Billing</h4>
              <p>
                {" "}
                LEDGERS accounting software can help you quickly generate GST
                invoices or bills without GST from your mobile phone or
                computer. With inbuilt catalog and contacts, this LEDGERS
                software can create error-free invoices in seconds with the
                correct GST rate and GST computation. The platform supports
                billing in multiple-currencies from multiple-branches and
                multiple-users simultaneously.
              </p>
              <p>
                Invoices and bills created on LEDGERS can be quickly shared with
                customers through SMS, Whatsapp, email and other modes.
              </p>
              <h4>Receipts &amp; Payment Gateway Integration</h4>
              <p>
                Issue receipts to your customers and reconcile multiple payments
                against invoices. LEDGERS accounting software can also be
                quickly integrated with any type of payment gateway to automate
                invoicing and receipt generation. LEDGERS works with CCAvenue,
                RazorPay, EBS and ICICI Bank payment gateways. Need a payment
                gateway with very low TDR rates and next day settlement of
                funds? We can help you easily obtain a payment gateway.
              </p>
              <h4>Accounts Statement</h4>
              <p>
                Generate and share accounts statements with your clients
                instantly. View customer-wise accounts receivables, overdue
                invoices and send payment reminders with payment links.
              </p>
              <p>
                Create supplier accounts statements with details of all
                purchases, payments made and payables. Easily track input tax
                credit receivable from vendors and send reminders for input tax
                credit not received.
              </p>
              <h4>Purchase &amp; Payments</h4>
              <p>
                Easily record purchase invoices, payments and business expenses.
                Track payables and payments made against a purchase invoice in
                parts. Easily view upcoming payment dues, overdue payments and
                generate supplier accounts statements.
              </p>
              <p>
                Upload and store copies of your purchase invoices and bills on
                the cloud with facility to quickly search and find documents.
              </p>
              <h4>GST Return Filing &amp; ITC Reconciliation</h4>
              <p>
                File error-free GSTR-3B and GSTR-1 invoices directly from
                LEDGERS through API integration. GST returns are auto-prepared
                based on invoice, payments and credit note data. To file GST
                returns using LEDGERS, no prior accounting knowledge or
                experience is required.
              </p>
              <p>
                Match purchases against input tax credit received on the GST
                portal. Find suppliers not providing input tax credit and
                followup to avoid ITC leakage. Save money and time by quickly
                reconciling your purchases against ITC received.
              </p>
              <h3>What can LEDGERS do?</h3>
              <p>
                Here's how LEDGERS software can help you better operate your
                business.
              </p>
              <h4>Invoicing</h4>
              <p>
                Create, track and send professional GST invoice, quotes or bill
                of supply through Whatsapp, SMS and email. Automated GST rate
                and GST applicability calculator to ensure error-free invoices.
              </p>
              <h4>Purchasing</h4>
              <p>
                On-board vendors, create and send purchase orders. Track vendor
                payments, purchase invoices and reconcile input tax credit
                directly from LEDGERS with GSTN API connect.
              </p>
              <h4>Connected Banking</h4>
              <p>
                Send NEFT, RTGS and IMPS payments directly from LEDGERS using
                your ICICI Bank Current Account. Sync bank statement and
                reconcile bank transactions seamlessly.
              </p>
              <h4>Bank Reconciliation</h4>
              <p>
                Check account balance and sync bank statement of 100+ Indian
                Banks on LEDGERS. LEDGERS supports fetching bank statement from
                SBI, HDFC, Axis Bank, Indian Bank and more.
              </p>
              <h4>Input Tax Credit</h4>
              <p>
                Automatically reconcile input tax credit receivable and send
                reminder emails to vendors for ITC not received or ITC mismatch.
                Reconcile thousands of purchases in minutes using automation.
              </p>
              <h4>GST eWay Bill</h4>
              <p>
                Directly generate GST eWay bill from LEDGERS and track status.
                Generate eWay bill in seconds from existing invoices, bill of
                supply, purchase invoices or delivery challans.
              </p>
              <h4>Customer Management</h4>
              <p>
                On-board customers, track payments and receivables from
                customers and easily send reminders for payment. Create
                estimates and automatically schedule reminders.
              </p>
              <h4>Vendor Management</h4>
              <p>
                On-board vendors, track payments and payables to vendors and
                easily send reminders for input tax credit. Create purchase
                orders and convert to purchases invoices in a single-click.
              </p>
              <h3>LEDGERS: The One-Line Solution to Your GST Software Needs</h3>
              <p>
                As mentioned above, LEDGERS GST Software emerges as a
                cutting-edge solution designed to simplify and streamline the
                intricacies of GST compliance for businesses of all sizes.
                LEDGERS GST Software stands out for its:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Real-Time GSTN Integration:</strong> Ensures accurate
                  and timely GST return filings through seamless data exchange
                  with the GST Network.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Automated ITC Reconciliation:</strong> Simplifies the
                  reconciliation of Input Tax Credit with purchases, optimizing
                  tax credits and compliance.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Multi-Currency and Multi-Branch Invoicing:</strong>{" "}
                  Supports diverse business operations with capabilities for
                  handling transactions across various locations and currencies.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Customizable Financial Reports:</strong> Provides
                  detailed insights into financial health, aiding in strategic
                  decision-making.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Integrated Payment Gateways:</strong> Facilitates
                  smooth financial transactions with built-in integrations for
                  leading payment solutions.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Advanced Invoicing Features:</strong> This feature
                  caters to a range of invoicing needs, including reverse
                  charges, exports, and e-invoicing compliance.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Cloud-Based Accessibility:</strong> Offers the
                  flexibility to manage finances and GST obligations from any
                  location, enhancing operational efficiency.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>User-Friendly Interface:</strong> Designed for ease of
                  use, making GST compliance accessible for users with varying
                  levels of accounting expertise.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Compliance Notifications:</strong> Keeps businesses
                  informed about due dates and regulatory changes, ensuring
                  ongoing compliance with GST laws.
                </li>
              </ul></div></div>
              <p className="mt-4">
                Streamline your GST management and financial workflows with
                LEDGERS, the ultimate GST software solution for businesses like
                yours. Experience the ease of seamless GST filings, automated
                ITC reconciliation, and much more. Don't let GST compliance slow
                you down. Join many satisfied users who have transformed their
                accounting processes with LEDGERS.
              </p>
              <p>
                <strong>
                  <em>
                    Ready to Simplify Your GST Compliance? Try LEDGERS Today!
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
