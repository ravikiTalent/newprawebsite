import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTRegistration() {
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
              <h1 className="display-1 text-white mb-3">GST Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                GST registration is an essential compliance for any business or
                professional in India.
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
                { id: 3, title: "GST Registration", url: "" },
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
                      <h5 className="card-title">GST Registration</h5>
                      <p>
                        GST registration is an essential compliance for any
                        business or professional in India.
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

              <h2 className="display-4 mb-3">GST Registration</h2>
              <p>
                GST registration is an essential compliance for any business or
                professional in India. It is the process of obtaining a unique
                15-digit Goods and Services Tax Identification Number (GSTIN),
                making your business liable to pay GST and enabling authorities
                to monitor transactions effectively. Whether you meet the set
                criteria, are applying for a new GST registration, or wish to
                voluntarily obtain GST registration, LegallensIndia can help you
                seamlessly complete the process and stay compliant under the GST
                framework.
              </p>
              <p>
                <em>
                  Contact our experts today to streamline your GST registration
                  process!
                </em>
              </p>
              <h3>Overview GST Registration India Online</h3>
              <p>
                Since its introduction on 1 July 2017, the Goods &amp; Services
                Tax (GST) has been mandatory for all service providers, traders,
                manufacturers, and even freelancers in India. The GST system was
                implemented to replace Central and state-level taxes such as
                Service Tax, Excise Duty, CST, Entertainment Tax, Luxury Tax,
                and VAT, making the tax process more streamlined. The GST
                registration process charges vary depending on the type of
                business and turnover.
              </p>
              <p>
                For those taxpayers whose annual turnover is less than 1.5
                crore, the GST framework provides an option for a composition
                scheme. This scheme allows them to undergo simplified GST
                procedures and pay taxes at a predetermined rate according to
                their turnover.
              </p>
              <p>
                The GST mechanism operates throughout various stages of the
                supply chain. This includes acquiring raw materials, production,
                wholesale, retail, and the eventual sale to the end consumer.
                Notably, GST is imposed at every one of these steps. For
                example, when a product is produced in West Bengal and then used
                in Uttar Pradesh, the GST revenue generated is allocated
                entirely to Uttar Pradesh, emphasizing the consumption-based
                nature of GST.
              </p>
              <h3>Key Components of GST&nbsp;</h3>
              <p>
                The Goods and Services Tax (GST) in India is structured around
                three primary components:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Central Goods and Services Tax (CGST):</strong>{" "}
                      This tax is levied by the Central Government on the supply
                      of goods and services within a particular state. CGST
                      applies to transactions carried out entirely within the
                      boundaries of one state.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>State Goods and Services Tax (SGST):</strong> SGST
                      is charged by the State Government on the supply of goods
                      and services within its jurisdiction. Similar to CGST,
                      SGST is also limited to transactions happening within a
                      specific state.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Integrated Goods and Services Tax (IGST):</strong>{" "}
                      This tax is imposed by the Central Government on the
                      supply of goods and services that occur between different
                      states or between a state and a Union Territory. IGST is
                      relevant for transactions where goods or services cross
                      state or Union Territory boundaries.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who is required to register for GST?</h3>
              <p>
                GST registration process is essential for the following persons:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Entities:</strong> Any enterprise with an
                      aggregate annual turnover exceeding Rs. 40 lakhs. For
                      special category states under GST, the threshold is Rs. 20
                      lakhs. If the businesses meeting the threshold, the GST
                      certificate apply process must be undertaken.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Service Providers:</strong> Those with an
                      aggregate annual turnover surpassing Rs. 20 lakhs. For
                      special category states, this limit is Rs. 10 lakhs.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Exemptions:</strong> It's important to note that
                      entities dealing exclusively in GST-exempted goods or
                      services are not bound by these thresholds.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Previously Registered Entities:</strong> Entities
                      that were registered under older tax frameworks (like
                      Excise, VAT, Service Tax, etc.) need to migrate and
                      register under the GST regime.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inter-State Suppliers:</strong> Any entity or
                      individual involved in the supply of goods across state
                      boundaries.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Casual Taxable Entities:</strong> Those who
                      undertake taxable supply occasionally.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Entities under Reverse Charge Mechanism:</strong>{" "}
                      Businesses obligated to pay tax under the reverse charge.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Input Service Distributors &amp; Agents:</strong>{" "}
                      Distributors of input services, including their
                      representatives.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>E-Commerce Platforms:</strong> Operators or
                      aggregators of e-commerce platforms
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Non-Resident Taxable Entities:</strong>{" "}
                      Individuals or entities that are non-resident but engage
                      in taxable supply within India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Supplier's Agents:</strong> Representatives who
                      supply on behalf of a principal supplier.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>E-Commerce Suppliers:</strong> Individuals or
                      entities that offer goods or services through an
                      e-commerce aggregator.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Online Service Providers:</strong> Entities
                      delivering online information, database access, or
                      retrieval services from outside India to an individual in
                      India, excluding those already registered under GST.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">GST Registration Turnover Limit</h3>
              <p>
                GST registration can be obtained voluntarily by any person or
                entity, irrespective of turnover. GST registration becomes
                mandatory if a person or entity sells goods or services beyond a
                certain turnover. For businesses that need to register, GST
                apply online allows for a quick and convenient process.
              </p>
              <p>
                <strong>Service Providers:</strong> Any person or entity who
                provides service of more than Rs.20 lakhs in aggregate turnover
                in a year is required to obtain GST number registration. In
                special category states, the GST turnover limit for service
                providers has been fixed at Rs.10 lakhs.
              </p>
              <p>
                <strong>Goods Suppliers:</strong> As per notification No.10/2019
                any person who is engaged in the exclusive supply of goods whose
                aggregate turnover crosses Rs.40 lakhs in a year is required to
                obtain GST registration India. To be eligible for the Rs.40
                lakhs turnover limit, the supplier must satisfy the following
                conditions:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Should not be providing
                      any services.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The supplier should not
                      be engaged in making intra-state (supplying goods within
                      the same state) supplies in the States of Arunachal
                      Pradesh, Manipur, Meghalaya, Mizoram, Nagaland,
                      Puducherry, Sikkim, Telangana, Tripur and Uttarakhand.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Should not be involved
                      in the supply of ice cream, pan masala or tobacco.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                If the above conditions are not met, the supplier of goods would
                be required to obtain GST number registration when the turnover
                crosses Rs.20 lakhs and Rs.10 lakhs in special category states.
              </p>
              <p>
                <strong>Special Category States:</strong> Under GST, the
                following are listed as special category states - Arunachal
                Pradesh, Assam, Jammu and Kashmir, Manipur, Meghalaya, Mizoram,
                Nagaland, Sikkim, Tripura, Himachal Pradesh and Uttarakhand.
              </p>
              <p>
                <strong>Aggregate Turnover:</strong> Aggregate turnover =
                (Taxable supplies + Exempt Supplies + Exports + Inter-State
                Supplies)*(Taxes + Value of Inward Supplies + Value of Supplies
                Taxable under Reverse Charge + Value of Non-Taxable Supplies).
              </p>
              <p>
                Aggregate turnover is calculated based on the PAN. Hence, even
                if one person has multiple places of business, it must be summed
                to arrive at the aggregate turnover. If the business turnover
                meets this criterion, then proceeding to the GST certificate
                apply process is essential.
              </p>
              <p>
                <strong>
                  <em>
                    Meeting the criteria? Planning to apply for a new GST
                    registration? LegallensIndia helps you to streamline the
                    registration process with expert guidance!
                  </em>
                </strong>
              </p>
              <p> </p>
              <h3>Advantages of GST Registration for Businesses</h3>
              <p>
                Registering for GST offers a range of benefits to businesses:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Compliance:</strong> Ensures that businesses
                      remain compliant with tax regulations, thus avoiding any
                      potential penalties.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Input Tax Credit:</strong> Businesses can claim
                      credits for the GST they've paid on purchases, which can
                      then be set off against the GST charged on sales, leading
                      to a reduction in tax liability.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inter-State Trade Ease:</strong>&nbsp;GST Portal
                      Registration encourages businesses to transact across
                      state boundaries without facing tax-related challenges.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Elimination of Cascading Effect:</strong> By
                      removing the effect of tax being levied on an already
                      taxed amount, the overall cost of products or services is
                      reduced.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Competitive Edge:</strong> Being GST compliant can
                      instil trust in potential customers, opening up more
                      business opportunities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Access to Larger Markets:</strong> Major
                      corporations often prefer collaborating with
                      GST-registered vendors.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Optimized Cash Flow:</strong> Efficient management
                      and lower tax liability can enhance the cash flow within a
                      business.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enhanced Credit Rating:</strong> Maintaining a
                      consistent and positive GST compliance record can boost a
                      business's credit profile.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Safeguard:</strong> A GST registration
                      protects businesses and ensures their rights are upheld.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Simplified Compliance:</strong> The GST process is
                      streamlined, enabling businesses to file returns and make
                      payments online easily.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transparent Operations:</strong> Ensures
                      businesses maintain accurate records, promoting a sense of
                      trustworthiness and professionalism.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">GST Certificate</h3>
              <p>
                The GST Certificate stands as an authoritative document provided
                by the Indian government to entities that are registered under
                the Goods and Services Tax (GST) framework. This certificate
                confirms a business's legitimate Registration under GST and
                prominently displays key details such as the GST identification
                number, the business name, and the official address. Ensure to
                initiate the GST registration online apply process and obtain it
                to be compliant.
              </p>
              <p>
                Possessing an authentic GST Certificate online is pivotal for
                enterprises because:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tax Collection Authority: </strong>It empowers
                      businesses to impose and gather GST from their clientele.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tax Credit Claims:</strong> With this certificate,
                      businesses can rightfully claim credits on the GST they've
                      disbursed on their procurements and operational costs.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Furthermore, beyond its
                      tax-related functions, the GST Certificate holds
                      significance in several other domains:
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Loan Applications:</strong> When seeking financial
                      aid or loans, businesses might be asked to present their
                      GST certificates to validate their authenticity.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Government Tenders:</strong> To be eligible and
                      participate in official government tenders, the GST
                      Certificate must often be produced as evidence of tax
                      compliance.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Market Reputation:</strong> The GST certificate
                      online enhances a business's stature in the market,
                      reflecting its commitment to national tax regulations.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">GSTIN</h3>
              <p>
                GSTIN, which stands for Goods and Services Tax Identification
                Number, is a distinctive 15-digit alphanumeric code allocated to
                every taxpayer who is registered under the GST framework in
                India. This number acts as the primary identifier for both
                businesses and individuals in the context of GST-related
                transactions and compliance.{" "}
              </p>
              <p>
                You will receive GSTIN after successfully completing the process
                of GST number apply through the GST Apply online portal.
              </p>
              <h3>Voluntary GST Registration for Businesses</h3>
              <p>
                Businesses generating a turnover of less than Rs.20 lakhs can
                process the GST apply online voluntarily. By doing so, they can
                benefit from advantages such as availing input tax credits,
                unrestricted inter-state sales, eligibility to list on
                e-commerce sites, and establishing a competitive stance against
                businesses that aren't GST-registered. While this type of GST
                Portal Registration isn't a mandate, it paves the way for
                enhanced growth prospects and the potential for increased
                profitability. So, the GST registration online apply process is
                optional for those not meeting the mandatory registration
                threshold.
              </p>
              <h3>GST Registration Documents Requirements</h3>
              <p>
                Below, we have given the GST registration documents to use as a
                checklist. These are all important to proceed with the GST
                number apply online,&nbsp;
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <strong>Sole proprietor / Individual</strong>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> PAN card of the
                              owner
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Aadhar card of
                              the owner
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Photograph of
                              the owner (in JPEG format, maximum size&nbsp; 100
                              KB)
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Bank account
                              details*
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Address proof**
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <strong>LLP and Partnership Firms</strong>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> PAN card of all
                              partners (including managing partner and
                              authorized signatory)
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Copy of
                              partnership deed
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Photograph of
                              all partners and authorised signatories (in JPEG
                              format, maximum size 100 KB)
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Address proof of
                              partners (Passport, driving license, Voters
                              identity card, Aadhar card etc.)
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Aadhar card of
                              authorised signatory
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Proof of
                              appointment of authorized signatory
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> In the case of
                              LLP, registration certificate / Board resolution
                              of LLP
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Bank account
                              details*
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Address proof of
                              principal place of business
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <strong>HUF</strong>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> PAN card of HUF
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> PAN card and
                              Aadhar card of Karta
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Photograph of
                              the owner (in JPEG format, maximum size 100 KB)
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Bank account
                              details
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Address proof of
                              principal place of business
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <strong>
                        Company (Public and Private) (Indian and foreign)
                      </strong>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> PAN card of the
                              Company
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Certificate of
                              incorporation given by Ministry of Corporate
                              Affairs
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Memorandum of
                              Association / Articles of Association
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> PAN card and
                              Aadhar card of authorized signatory. The
                              authorised signatory must be an Indian, even in
                              case of foreign companies/branch registration
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> PAN card and
                              address proof of all directors of the Company
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Photograph of
                              all directors and authorised signatory (in JPEG
                              format, maximum size 100 KB)
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Board resolution
                              appointing authorised signatory / Any other proof
                              of appointment of authorised signatory (in JPEG
                              format / PDF format, maximum size 100 KB)
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Bank account
                              details
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Address proof of
                              principal place of business
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>Penalty for Not Obtaining GST Number Registration</h3>
              <p>
                Here are the penalties for not obtaining the GST registration
                and not paying or underpaying the requisite GST amount:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>For Non-Payment or Underpayments:</strong> If a
                      taxpayer either neglects to pay the requisite tax or
                      mistakenly underpays, an acceptable equivalent of 10% of
                      the outstanding tax amount is levied. It's important to
                      note that while there are no GST registration fees,
                      penalties for non-compliance can be significant.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Intentional Tax Evasion: </strong>If an individual
                      or business willfully avoids paying the due taxes, the
                      penalty equals 100% of the evaded tax amount.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                <strong>
                  <em>
                    Get help from our expert GST registration services! We help
                    with GST registration and filing returns before the deadline
                    to keep you stay compliant and avoid penalties!
                  </em>
                </strong>
              </p>
              <h3>Get GST Registration Online quickly through LegallensIndia</h3>
              <p>
                You can obtain your GST registration online through LegallensIndia
                with a reasonable GST registration cost. Enter your name, phone
                number and email to begin the GST number apply process.&nbsp;
              </p>
              <p>
                When we receive your request, a GST expert will reach out to you
                to understand your business activity and the state where the
                business is operating and answer any questions you may have
                regarding GST portal registration.
              </p>
              <p>
                The GST expert will also collect and verify the GST registration
                documents to ensure a smooth registration process. Once the
                payment is initiated, we start with the GST registration online
                process, and we upload all your applications into the GST
                Portal.
              </p>
              <p>
                You obtain the GST registration within 3 to 7 working days
                through our GST registration services. Everything is completely
                online you don't need to be physically present at the office for
                the same. Along with the GST registration, access is provided to
                the LEDGERS Platform for you to do GST invoicing and GST return
                filing.
              </p>
              <h3>GST Return Filing</h3>
              <p>
                GST return filing&nbsp;is a formal process in which a taxpayer
                provides the government with information regarding their sales,
                purchases, and taxes collected and disbursed. In India, every
                GST-registered taxpayer must submit these returns consistently,
                even if there were no sales or purchases during a particular
                period. LegallensIndia helps you with GST registration and stay
                compliant with affordable GST registration costs.&nbsp;
              </p>
              <p>
                <em>
                  If you need assistance, our team of GST experts is at your
                  service to guide you through the GST return filing process.
                </em>
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
