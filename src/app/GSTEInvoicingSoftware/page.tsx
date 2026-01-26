import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTEInvoicingSoftware() {
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
                GST E-Invoicing Software
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                E-invoicing under GST refers to the electronic generation of
                invoices as mandated by GST regulations.
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
                { id: 3, title: "GST E-Invoicing Software", url: "" },
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
                      <h5 className="card-title">GST E-Invoicing Software</h5>
                      <p>
                        E-invoicing under GST refers to the electronic
                        generation of invoices as mandated by GST regulations.
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

              <h2 className="display-4 mb-3">GST E Invoicing Software</h2>
              <p>
                <span>
                  E-invoicing under GST refers to the electronic generation of
                  invoices as mandated by GST regulations. Similar to the
                  requirement for GST-registered businesses to issue e-way bills
                  when transporting goods, specific GST-registered businesses
                  are also required to generate electronic invoices for
                  Business-to-Business (B2B) transactions.
                </span>
              </p>
              <p>
                <span>
                  As of the latest updates, starting from August 1, 2023, e
                  invoicing becomes mandatory for all GST-registered individuals
                  whose aggregate turnover (as per their PAN) in any preceding
                  fiscal year from 2017-18 onwards exceeds five crores.
                </span>
              </p>
              <p>
                <span>
                  To facilitate a smooth transition to e-invoicing, LegallensIndia
                  introduces the LEDGERS GST e Invoicing software, which is
                  designed to simplify and streamline the e-invoicing process
                  for businesses.
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>Try LEDGERS today!&nbsp;</em>
                  </strong>
                </span>
              </p>
              <h3>
                <span>e Invoicing under GST</span>
              </h3>
              <p>
                <span>&nbsp;</span>
                <span>
                  The e-Invoice system is a digital verification mechanism under
                  India's GST framework, where B2B invoices are authenticated
                  electronically by the GST Network (GSTN). This system
                  facilitates the issuance of a unique identification number for
                  every invoice via the Invoice Registration Portal (IRP),
                  managed by GSTN.
                </span>
              </p>
              <p>
                <span>
                  Upon generation, all invoice details are instantaneously
                  transmitted from the invoice portal to the GST and e-way bill
                  portals. This synchronisation eliminates the need for manual
                  data entry during the GSTR-1 return filing and the generation
                  of part A of the e-way bills, streamlining these processes.
                </span>
              </p>
              <h3>
                <span>Benefits of the&nbsp;</span>
                <span data-ui-name="Link.Text">e invoicing system</span>
              </h3>
              <p>
                <span>The&nbsp;</span>
                <span>e invoicing system</span>&nbsp;was implemented primarily
                to streamline GST return filing and improve reconciliation
                accuracy. Here’s a combined overview of its key benefits:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Streamlined Reporting and Efficient Record-Keeping
                      </strong>
                      <strong>: </strong>E-Invoicing facilitates one-time
                      reporting of B2B invoices at the point of generation,
                      eliminating the need to report in multiple formats. This
                      simplification extends to maintaining sales and purchase
                      registers, which can be effortlessly generated from
                      e-invoice data, aiding in efficiently preparing GST
                      returns under the new system.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Automated Tax Filing and E-Way Bill Generation
                      </strong>
                      <strong>: </strong>The integration of e-invoice data with
                      the GST portal simplifies the tax filing process by
                      auto-populating return forms and reducing manual efforts.
                      Additionally, e-way bills can be seamlessly generated
                      using this data, enhancing the logistics and
                      transportation process.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Enhanced Reconciliation and Real-Time Tracking
                      </strong>
                      <strong>:&nbsp; </strong>e invoice in&nbsp;GST minimises
                      the need for reconciliation between financial records and
                      GST filings, thereby saving time and reducing errors.
                      Real-time tracking of invoices also speeds up the
                      validation of input tax credits and reduces verification
                      issues, leading to quicker financial turnovers.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Fraud Prevention and Elimination of Fake Invoices
                      </strong>
                      <strong>: </strong>With real-time data access, tax
                      authorities are better equipped to detect and prevent
                      fraudulent activities. Moreover, the e invoicing
                      system&nbsp;helps eliminate the generation of fake GST
                      invoices, preserving the tax system's integrity and
                      ensuring compliance.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Reduced Audits and Enhanced Financial Management
                      </strong>
                      <strong>:</strong> The detailed, transaction-level
                      information provided by e invoicing GST minimises the
                      likelihood of audits and surveys by tax authorities,
                      decreasing the administrative burden associated with tax
                      compliance. This transparency builds trust and facilitates
                      better financial management and cash flow for businesses.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  E-invoicing offers several advantages, notably its
                  effectiveness in reducing tax evasion. Since eInvoices are
                  generated before transactions are completed, the opportunity
                  for altering invoices is significantly reduced.
                </span>
              </p>
              <h3>
                <span>Businesses Eligible for GST e invoice</span>
              </h3>
              <p>
                <span>
                  e invoice GST will apply to all businesses registered under
                  the Goods and Services Tax (GST) system and issue
                  Business-to-Business (B2B) invoices.
                </span>
              </p>
              <h3>
                <span>GST&nbsp;</span>einvoice Applicability
              </h3>
              <p>
                <span>
                  As mentioned, The Indian government has steadily reduced the
                  GST eInvoice limit for mandatory e-invoicing. As per the
                  latest amendment, any business with a total turnover exceeding
                  Rs. 5 crore in the previous financial year must generate
                  e-invoices for all covered transactions. This revision came
                  into effect on August 1st, 2023.
                </span>
              </p>
              <h4>
                <span>
                  Transactions and Documents Requiring GST e-invoicing
                </span>
              </h4>
              <p>
                <span>
                  If your business falls under the current threshold and deals
                  with any of the following transactions, you must generate
                  e-invoices through the GST portal:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Documents:&nbsp;</strong>
                      </span>
                    </li>
                    <div className="row gy-3 gx-xl-8">
                      <div className="col-xl-12">
                        <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                          <li className="">
                            <i className="uil uil-check"></i>{" "}
                            <span>
                              Tax invoices, credit notes, and debit notes are
                              defined under Section 34 of the CGST Act.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Transactions:</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Taxable Business-to-Business (B2B) sales of goods or
                        services
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Business-to-Government (B2G) sales of goods or services
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Exports and deemed exports</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Supplies to Special Economic Zones (SEZs) with or
                        without tax payment
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Stock transfers or supplies of services to distinct
                        persons within a SEZ
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Transactions with SEZ developers</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Supplies made under the reverse charge mechanism
                        (Section 9(3) of the CGST Act)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Who is exempted from generating e Invoice GST?</span>
              </h3>
              <p>
                <span>
                  While e invoicing GST is becoming increasingly mandatory,
                  certain categories of registered persons are exempted from
                  these provisions. Here's a breakdown of who can skip e
                  invoicing for now:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Financial Institutions: </strong>
                      </span>
                      <span>
                        This exemption covers a broad range of entities within
                        the financial sector, including:
                      </span>
                    </li>
                    <div className="row gy-3 gx-xl-8">
                      <div className="col-xl-12">
                        <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                          <li className="">
                            <i className="uil uil-check"></i>{" "}
                            <span>Insurers</span>
                          </li>
                          <li className="">
                            <i className="uil uil-check"></i>{" "}
                            <span>Banking companies</span>
                          </li>
                          <li className="">
                            <i className="uil uil-check"></i>{" "}
                            <span>Financial institutions</span>
                          </li>
                          <li className="">
                            <i className="uil uil-check"></i>{" "}
                            <span>Non-banking financial companies (NBFCs)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Goods Transport Agencies (GTAs):</strong>
                      </span>
                      <span>
                        {" "}
                        If your business provides services related to the
                        transportation of goods by road (in a goods carriage),
                        you're exempt from eInvoice.&nbsp;
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Passenger Transport Service Suppliers:</strong>
                      </span>
                      <span>
                        {" "}
                        This exemption applies to businesses offering passenger
                        transportation services.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Multiplex Cinemas:</strong>
                      </span>
                      <span>
                        {" "}
                        Registered individuals providing services through
                        admission to exhibition of cinematograph films on
                        multiplex screens are not required to generate
                        e-invoices.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>SEZ Units:</strong>
                      </span>
                      <span>
                        {" "}
                        Businesses operating within Special Economic Zones
                        (SEZs) are exempt from e invoicing. It's important to
                        note that this exemption applies only to SEZ units and
                        not SEZ developers.&nbsp;
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>GST invoice Format</span>
                <span>&nbsp;</span>
              </h3>
              <p>
                <span>
                  The e-invoice format, as specified in GST rules, is designated
                  as Form GST INV-1. In simpler terms, the structure or schema
                  for e invoicing is outlined through Form GSTR INV-1. This form
                  serves as a standardised template for electronically recording
                  invoice details. To report these details to the Invoice
                  Registration Portal (IRP), they must be presented in JSON
                  format.
                </span>
              </p>
              <p>
                <span>&nbsp;</span>
                <span>
                  The e-invoice format encompasses eight main categories, under
                  which various details will be provided. These categories are
                  as follows:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Basic Details</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Invoice Period</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Preceding Document / Contract Reference</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Receipt / Contract References</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Supplier Information</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Buyer Information</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Payee Information</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Delivery Information</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Specific information, such as invoice item details, document
                  totals, and additional data like port codes and batch details,
                  must be included within these broad categories.
                </span>
              </p>
              <p>
                <span>
                  It's important to note that per the e-invoice format, specific
                  details are mandatory when submitting invoice information to
                  the IRP. However, including some details may be optional
                  depending on the nature of the business and specific
                  transactions. This structured approach ensures consistency and
                  accuracy in the electronic reporting of invoices.
                </span>
              </p>
              <h3>
                <span>Mandatory Information for e Invoicing</span>
              </h3>
              <p>
                <span>
                  When preparing eInvoices, specific details are mandatory to
                  ensure compliance and accurate reporting. These essential
                  details include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Code for Supply Type: </strong>Indicating the
                      supply type, such as B2B for business to business, EXPWP
                      for export with payment, or SEZWP for SEZ with payment.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Code for Document Type: </strong>Identifying the
                      document type, such as INV for Invoice, CRN for Credit
                      Note, or DBN for Debit Note.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Number: </strong>The invoice number
                      follows GST rules and regulations.&nbsp;
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Date: </strong>The date on which the
                      invoice was issued.&nbsp;
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Supplier Legal Name:</strong> The legal name of
                      the supplier, consistent with their GST
                      registration.&nbsp;
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>GSTIN of Supplier: </strong>The GST Identification
                      Number of the supplier.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Supplier Address: </strong>The complete address of
                      the supplier, including specific details like flat number
                      and building number.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Supplier Place, State Code, and PIN Code:{" "}
                      </strong>
                      The location details of the supplier, including the place,
                      state code, and six-digit PIN code.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Buyer's Name and GSTIN: </strong>The buyer's legal
                      name, along with their GST Identification Number.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Place of Supply (State Code):</strong> Indicating
                      the state code for the place of supply.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>List of Items: </strong>Providing comprehensive
                      information about the goods and services invoiced,
                      including item descriptions, HSN codes, prices, and
                      more.&nbsp;
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Total Details: </strong>Provide details
                      of the document total, including taxes, discounts, and
                      other relevant calculations.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ship-To Details (if applicable): </strong>
                      Furnishing details regarding the shipping location if
                      different from the buyer's address.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  &nbsp;These mandatory details ensure e invoices conform to
                  regulatory requirements and facilitate accurate and efficient
                  record-keeping and reporting.&nbsp;
                </span>
              </p>
              <h3>
                <span>Types of Documents Reported to the IRP</span>
              </h3>
              <p>
                <span>The&nbsp;</span>e invoicing system&nbsp;
                <span>encompasses the following types of documents:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Invoices by the Supplier</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Credit Notes by the Supplier</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Debit Notes by the Recipient</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Any other document required by law must be reported by the
                  document creator.
                </span>
              </p>
              <h3>
                <span>Time Limit to Generate GST-invoices</span>
              </h3>
              <p>
                <span>
                  The rules surrounding the timeframe for generating GST
                  e-invoices have undergone recent changes. Here's a breakdown
                  of the current situation:
                </span>
              </p>
              <p>
                <span>
                  A strict deadline exists for taxpayers with Aggregate Annual
                  Turnover (AATO) exceeding Rs. 100 crore (as of May 1st, 2023).
                  You must generate e-invoices for tax invoices and credit/debit
                  notes (CDNs) within seven days of the invoice date. Please
                  comply with this deadline to avoid your invoices and CDNs
                  being considered non-compliant.
                </span>
              </p>
              <p>
                <span>
                  No specific time limit is mandated by law for taxpayers with
                  AATO to generate e-invoices below Rs. 100 crore
                </span>
              </p>
              <h3>
                <span>Documents Required for E Invoicing</span>
              </h3>
              <p>
                <span>
                  For e invoicing under the GST framework, the following
                  documents are necessary:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Tax Invoices, Credit Notes, and Debit Notes
                      </strong>
                      <strong>: </strong>These should be issued in accordance
                      with Section 34 of the CGST Act.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>
                  <span>Applicable Transactions</span>
                  <span>:</span>
                </strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Taxable Business-to-Business (B2B) Transactions
                      </strong>
                      <strong>: </strong>Includes the sale of goods or services
                      to other businesses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business-to-Government (B2G) Sales</strong>
                      <strong>:</strong> Involves transactions where the
                      government is the recipient of goods or services.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Exports and Deemed Exports</strong>
                      <strong>: </strong>Transactions that involve sending goods
                      or services out of the country or those treated as exports
                      under GST laws.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Supplies to Special Economic Zones (SEZs)</strong>
                      <strong>: </strong>This can be with or without tax payment
                      and includes supplies made to SEZ developers.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Stock Transfers or Services to Distinct Persons
                      </strong>
                      <strong>: </strong>Transactions within the same company
                      but across different states or jurisdictions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Supplies Under Reverse Charge</strong>
                      <strong>:</strong> As specified under Section 9(3) of the
                      CGST Act, where the recipient is liable to pay GST.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>
                  Procedure for Generating &amp; Uploading the eInvoice
                </span>
              </h3>
              <p>
                <span>
                  &nbsp;The GST einvoice system follows a standardised format
                  for generating and transmitting invoices. Here is a
                  step-by-step process of how it works:&nbsp;
                </span>
              </p>
              <h4>
                <span>Step 1: Generation of E-Invoice&nbsp;</span>
              </h4>
              <p>
                <span>
                  Taxpayers will generate invoices as usual but must also report
                  these invoices electronically following the e-invoice schema,
                  which includes mandatory fields. Key details required include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Invoice Basics</strong>
                      <strong>: </strong>Type, number, date
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Supplier Information</strong>
                      <strong>:</strong> Name, GSTIN, address
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Buyer Information</strong>
                      <strong>: </strong>Name, GSTIN, address, payment details
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transaction Details</strong>
                      <strong>: </strong>Dispatch and item details, tax amount,
                      payment status
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Goods Details</strong>
                      <strong>:</strong> Serial number, quantity, rate, GST
                      rate, total value
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  The invoice data must be converted into JSON format using one
                  of the following:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>An updated accounting/billing system</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        A utility or tool integrating with the system, ERP, or
                        via an offline tool
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 2: Generation of Unique IRN&nbsp;</span>
              </h4>
              <p>
                <span>
                  Suppliers may generate a preliminary 'hash' (a unique code)
                  using details like GSTIN, invoice number, and financial year.
                  This is done using the SHA256 algorithm. If the hash is
                  validated, it becomes the Invoice Reference Number (IRN).
                </span>
              </p>
              <h4>
                <span>Step 3: Uploading the JSON&nbsp;</span>
              </h4>
              <p>
                <span>
                  The JSON file of the invoice can be uploaded through various
                  means:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Directly on the Invoice Registration Portal (IRP)
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Via a GST Suvidha Provider (GSP)</span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>Through third-party apps, including APIs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  If the supplier generates a hash, it can be uploaded along
                  with the JSON. Once the invoice is successfully uploaded, the
                  seller must electronically capture and include the QR code and
                  the Invoice Reference Number (IRN) on the physical invoice
                  issued to the recipient.
                </span>
              </p>
              <h4>
                <span>Step 4: IRP Validation of Invoice Information</span>
              </h4>
              <p>
                <span>
                  The IRP checks the uploaded JSON for accuracy and generates an
                  IRN while ensuring there is no duplication in the Central
                  Registry of GST. The generated IRN uniquely identifies the
                  e-invoice throughout the financial year.
                </span>
              </p>
              <h4>
                <span>Step 5: QR Code and Digital Signature</span>
              </h4>
              <p>
                <span>
                  Once the IRN is generated, digitally sign the e-invoice and
                  the accompanying QR code. The QR code includes critical
                  details such as supplier and recipient GSTINs, invoice number,
                  date, invoice value, number of line items, and the HSN codes
                  of main items.
                </span>
              </p>
              <h4>
                <span>
                  Step 6: Data Transmission to E-way Bill Portal and GST System
                </span>
              </h4>
              <p>
                <span>
                  The information from the IRP is shared with the GST system and
                  the e-way bill portal, facilitating the auto-population of GST
                  annexures.&nbsp;
                </span>
              </p>
              <h4>
                <span>Step 7: E-Invoice Receipt Sent to Supplier’s ERP</span>
              </h4>
              <p>
                <span>
                  Finally, the IRP sends the JSON file, IRN, and QR code back to
                  the seller’s ERP system. The invoice is then forwarded to the
                  buyer via email.
                </span>
              </p>
              <p>
                Here’s the video explaining the generation of an “e-invoice GST”
                using <strong>LEDGERS GST e Invoicing Software </strong>to avoid
                non-compliance,
              </p>
              <h3>
                <span>Integration of e invoicing with GST Returns</span>
                <span>&nbsp;</span>
              </h3>
              <p>
                <span>
                  The integration of e invoicing with GST Returns involves a
                  systematic process:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Validation and Registration: </strong>
                      </span>
                      <span>
                        A GST eInvoice is eligible for inclusion in the
                        corresponding GST return only after it has undergone
                        validation and registration by the invoice registration
                        system. This ensures compliance with established
                        requirements.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Recipient Access:</strong> After successful
                      validation, the e invoice becomes visible to the recipient
                      within the new return system, allowing for viewing and
                      necessary actions.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  The primary objective of this integration is to facilitate the
                  pre-population of GST returns, effectively addressing
                  reconciliation challenges. With e Invoicing, invoice data can
                  seamlessly populate the relevant sections of tax returns,
                  eliminating the need for manual data entry.
                </span>
              </p>
              <p>
                <span>
                  Integrating e invoicing with GST Returns aims to enhance
                  efficiency, accuracy, and compliance in the tax reporting
                  process while reducing reconciliation-related issues.
                </span>
              </p>
              <h3>
                <span>Cancellation of eInvoices</span>
              </h3>
              <p>
                <span>
                  When it comes to amending or cancelling e-invoices, there are
                  specific rules and limitations:&nbsp;
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Partial vs. Full Cancellation: </strong>
                      </span>
                      <span>
                        An e-invoice cannot be partially cancelled; it must be
                        completely cancelled.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Reporting Within 24 Hours:</strong>
                      </span>
                      <span>
                        {" "}
                        If you decide to cancel an e-invoice, it must be
                        reported to the Invoice Reference Number (IRN) within 24
                        hours of uploading.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>No Post-24-Hour Cancellation on IRN:</strong>
                      </span>
                      <span>
                        {" "}
                        It's important to note that no cancellations are allowed
                        after the initial 24-hour window has passed. In such
                        cases, Cancellation must be made manually on the GST
                        portal before filing returns.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Amendments to an eInvoice</span>
              </h3>
              <p>
                <span>
                  Any amendments to an e invoice GST can only be performed
                  through the GST Portal. If changes or corrections are required
                  for an e-invoice, taxpayers must access the GST Portal and
                  follow the designated procedure for making amendments.
                </span>
              </p>
              <p>
                <span>
                  Amending e-invoices through the GST Portal ensures accuracy
                  and compliance with the GST system's regulations, allowing
                  businesses to maintain accurate records and fulfil their tax
                  obligations effectively.
                </span>
              </p>
              <h3>
                <span>
                  Generate your GST eInvoices quickly with LegallensIndia’ LEDGERS
                  Software.
                </span>
              </h3>
              <p>
                <span>
                  Ready to simplify your GST e invoicing process? Look no
                  further! LegallensIndia offers LEDGERS&nbsp;
                </span>
                &nbsp;GST e Invoicing software, that makes creating GST invoices
                a breeze. Don't waste any more time struggling with complicated
                invoicing systems.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Automatic e-Invoice Generation:</strong>
                      </span>
                      <span>
                        {" "}
                        Create GST e-invoices with QR codes directly from your
                        web browser, mobile app, or API.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Multiple Generation Options:</strong>
                      </span>
                      <span>
                        {" "}
                        Choose your preferred method - web, mobile app, API, or
                        Excel import.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Seamless e-Way Bill Management:</strong>
                      <strong> </strong>Generate and share e-way bills for goods
                      transportation within LEDGERS.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Simplified Tax Filing:</strong> Standardized
                      formats and real-time data make filing GST returns
                      effortless.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reduced Workload:</strong>
                      <strong> </strong>Save time and resources with automatic
                      e-invoice generation and reduced manual data entry.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Contact our experts today and let us assist you in getting
                  started with efficient GST e invoicing for your business.
                </span>
              </p>
              <p>
                <span>
                  <em>
                    <strong>
                      Say goodbye to the hassle and hello to streamlined
                      invoicing with LEDGERS!&nbsp;&nbsp;
                    </strong>
                  </em>
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
