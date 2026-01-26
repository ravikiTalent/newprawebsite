import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function FifteenCA15CBFiling() {
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
              <h1 className="display-1 text-white mb-3">15CA - 15CB Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                You must file Form 15CA and Form 15CB with the tax authorities
                before remitting funds to a foreign entity. Filing these 15 CA
                and CB Forms can be complex, requiring extensive knowledge of
                tax laws and regulations.
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
                { id: 3, title: "15CA - 15CB Filing", url: "" },
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
                      <h5 className="card-title">15CA - 15CB Filing</h5>
                      <p>
                        You must file Form 15CA and Form 15CB with the tax
                        authorities before remitting funds to a foreign entity.
                        Filing these 15 CA and CB Forms can be complex,
                        requiring extensive knowledge of tax laws and
                        regulations.
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
                15CA-15CB Filing - Compliance for Foreign Remittances
              </h2>
              <p>
                Suppose you are an Indian resident making payments to a foreign
                entity or receiving payments from a foreign entity. In that
                case, it is mandatory to comply with the legal provisions of the
                Income Tax Act 1961. According to the Act, you must file Form
                15CA and Form 15CB with the tax authorities before remitting
                funds to a foreign entity. Filing these 15 CA and CB Forms can
                be complex, requiring extensive knowledge of tax laws and
                regulations. LegallensIndia can assist you in navigating the
                process of filing form 15CA and form 15CB with ease; our team of
                experts ensures that your compliance requirements are met
                without any hassle.
              </p>
              <h3>Section 195 of the Income-tax Act, 1961</h3>
              <p>
                As per Section 195 of the Income Tax Act 1961, any individual or
                entity responsible for making payment to a non-resident, which
                includes a foreign company, must deduct income tax at the
                applicable rate prior to the payment being made.
              </p>
              <p>
                The remitter must also submit an undertaking in Form 15 CA,
                which provides details of the payment being made to the
                non-resident. Furthermore, a certificate in Form 15CB, attested
                by a chartered accountant, is required for payments exceeding
                INR 5 lakh. This certificate provides details of the nature of
                the payment, the tax rate applied, and the amount of tax
                deducted.
              </p>
              <h3>Importance of Form 15CA and Form 15CB</h3>
              <p>
                Form 15CA and Form 15CB are necessary forms that must be
                submitted under the Income Tax Act, 1961, for any payments made
                by a resident to a non-resident.
              </p>
              <p>
                Form 15 CA is a declaration made by the person making the
                payment. In contrast, Form 15CB is a certificate issued by a
                Chartered Accountant (CA), ensuring that the provisions of the
                Income Tax Act and the Double Taxation Avoidance Agreement have
                been complied with.
              </p>
              <p>
                Both these 15CA and CB forms are essential for ensuring timely
                and accurate reporting of any payments made to non-residents and
                for ensuring that taxes are collected on time.
              </p>
              <h4>Form 15CA</h4>
              <p>
                Form 15 CA is a declaration of remittance made to a non-resident
                by an individual or a company. It is a mandatory form to be
                submitted online on the income tax department's website before
                remitting a non-resident. The purpose of this form is to enable
                the income tax department to track foreign remittances and
                ensure that the remitter is paying taxes according to the
                provisions of the Income Tax Act.
              </p>
              <h4>Form 15CB</h4>
              <p>
                As mentioned above, Form 15CB is a certificate issued by a CA
                under Section 195(6) of the Income Tax Act, 1961, for making
                payments to non-residents or foreign companies. It is used to
                verify that the payment being made complies with the provisions
                of the Income Tax Act and DTAA, if any, between India and the
                foreign country.
              </p>
              <h3>Applicability of Form 15CA and Form CB</h3>
              <p>
                Form 15 CA and 15CB are applicable for making foreign
                remittances under India's Income Tax Act 1961. The applicability
                of these 15 CA and CB forms depends on the nature and amount of
                the remittance.
              </p>
              <h4>Applicability of Form 15 CA</h4>
              <p>Applicability of Form 15CA is as follows:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Any person intending to
                      make a remittance to a non-resident or foreign company,
                      irrespective of whether the remittance is subject to tax
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The remitter can be a
                      resident, non-resident, domestic company, or foreign
                      company
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The declaration is
                      required when the income accrues, arises, is received, or
                      is deemed to accrue, occur, or received in India, as per
                      Section 5 of the Income Tax Act.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Applicability of Form 15CB</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Form 15CB is required to
                      be filed by the CA when the remittance is made.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> When the remittance to a
                      non-resident or foreign company is taxable
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The payment exceeds INR
                      5,00,000
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> When an order/
                      certificate has not been received from Assessing Officer
                      (AO).
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">When is Form 15CA not required?</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Form 15CA is not
                      required when the remittance is made per the specified
                      payment list in Rule 37BB of Income Tax Rules.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> When the individual
                      making the remittance does not require Reserve Bank of
                      India approval according to Section 5 of the Foreign
                      Exchange Management Act (FEMA), 1999.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Form 15 CA is also not
                      required when the remittance is exempted from tax under
                      the Income Tax Act or a relevant tax treaty.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> When an individual and
                      the aggregate amount make the remittance during the
                      financial year does not exceed five lakh rupees, and the
                      remittance is not for a foreign tour or payment for the
                      purchase of any foreign asset.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> When an individual makes
                      the remittance to pursue education abroad, the amount does
                      not exceed the limit prescribed by the RBI.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">When is Form 15CB not required?</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Form 15CB is not
                      required when the remittance is not taxable in India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If the remittee's
                      country of residence considers the income taxable and the
                      remittance is sent to that country.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Form 15CB is not
                      necessary if the total remittances during the fiscal year
                      do not surpass Rs. 5,00,000.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> When an individual makes
                      the remittance and is not for a foreign tour or payment
                      for the purchase of any foreign asset, the amount does not
                      exceed the limit prescribed by the RBI.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> When an individual makes
                      the remittance to pursue education abroad, the amount does
                      not exceed the limit prescribed by the RBI.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Specified payments where Form 15 CA/15CB is not required</h3>
              <p>
                As per the latest rules and regulations, the payments where Form
                15CA and Form 15CB are not required include the following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Indian investment abroad
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Advance payment against
                      imports
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Intermediary trade
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Imports by diplomatic
                      missions
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Loans extended to
                      Non-Residents
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Imports below
                      Rs.5,00,000
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Construction of projects
                      by Indian companies/firms, including import of goods at
                      the project site
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Freight insurance
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Operating expenses of
                      Indian Airlines Firms
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Travel under basic
                      travel quota (BTQ)/ pilgrimage/ medical treatment/business
                      travel/education
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Payment for operating
                      expenses of Indian shipping firm/companies operating
                      abroad
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Payments for maintenance
                      of offices abroad
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Remittances by foreign
                      embassies in India
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Remittance by
                      non-residents toward family maintenance and savings
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Remittance toward
                      donations and personal gifts
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> nations to charitable
                      and religious institutions abroad can be remitted.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Remittances for
                      donations and grants to charitable institutions of foreign
                      governments and governments themselves are permitted.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Donations or
                      Contributions to international institutions
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Refunds or reduction or
                      rebates in invoice value on account of exports
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Remittance towards
                      payment or refund of taxes
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Payments by residents
                      for international bidding.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">The Contents of Form 15 CA and Form 15CB</h3>
              <p>
                Form 15 CA/15CB is segregated into sections based on various
                situations. The applicant needs to go through the 15 CA and CB
                form and fill in the proper details in the relevant section:
              </p>
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Parts of Form 15 CA</h4>
                      <p>
                        Form 15 CA has four parts based on the amount of
                        remittance and the requirement of other certificates or
                        orders under the Income Tax Act.
                      </p>
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> Part A is for
                              remittances up to Rs 5 Lakhs during the financial
                              year that are taxable.
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Part B is for
                              remittances exceeding Rs 5 Lakhs during the
                              financial year that are chargeable to tax, and an
                              order/certificate under Section 195(2)/197/195(3)
                              of the Income Tax Act has been obtained from the
                              Assessing Officer.
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Part C is for
                              taxable remittances exceeding Rs 5 Lakhs during
                              the fiscal year, and a certificate in Form 15 CB
                              must be obtained from a Chartered Accountant.
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Part D is for
                              remittances that are not chargeable to tax under
                              the provisions of the Income Tax Act.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="card">
                    <div className="card-body">
                      <h4>Various parts of Form 15CB</h4>
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> Part A includes
                              details of the remitter, the beneficiary, and the
                              nature of the remittance.
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Part B: This
                              part requires the Chartered Accountant (CA) to
                              verify whether the provisions of the Income Tax
                              Act and the Double Taxation Avoidance Agreement
                              have been complied with and to provide the details
                              of the relevant sections and articles.
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Part C requires
                              the CA to certify that the information provided in
                              the form is true and correct.
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Annexure: This
                              is an optional annexure to the form, which can be
                              used to provide additional information or details.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-4">Penalty for not filing Form 15 CA-15CB</h3>
              <p>
                The penalty for not filing or late filing of 15 CA and CB form
                is Rs. 10,000 per instance.
              </p>
              <h3>Details required for filing the forms</h3>
              <p>
                To file Form 15 CA and 15CB, the following details are required:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN of the remitter and the beneficiary:</strong>{" "}
                      The Permanent Account Number (PAN) of the remitter and the
                      beneficiary must be provided.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Amount of the remittance:</strong> The remittance
                      amount must be provided in Indian Rupees.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nature and purpose of the remittance:</strong> The
                      nature and purpose of the remittance must be specified,
                      such as payment for services, royalty, or dividends.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Relevant sections and articles of the Income Tax Act and
                        DTAA:
                      </strong>{" "}
                      If applicable, the relevant sections and articles of the
                      Income Tax Act and Double Taxation Avoidance Agreement
                      (DTAA) must be specified.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Bank details:</strong> The bank details of the
                      remitter and the beneficiary, including the bank name,
                      branch, and account number, must be provided.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Certificate from a Chartered Accountant (Form 15CB):
                      </strong>{" "}
                      If a certificate in Form 15CB is required, details such as
                      the name and membership number of the Chartered
                      Accountant, the date of issuance of the certificate, and
                      the details of the remittance must be provided.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Procedure for filing Form 15 CA and 15CB</h3>
              <p>
                The process for filing Form 15 CA and Form 15CB is as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Obtain a valid PAN:</strong> Before filing Form
                      15CA, the Income Tax Department must issue a valid
                      Permanent Account Number (PAN).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Determine whether Form 15CB is required:</strong>{" "}
                      If the remittance exceeds INR 5 lakhs, then Form 15CB must
                      be filed by a Chartered Accountant (CA) certifying that
                      the remittance is taxable in India and the appropriate
                      taxes have been paid.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fill Form 15 CA:</strong> The person making the
                      remittance must fill out Form 15CA online on the income
                      tax department's e-filing website. The form requires the
                      details of the remitter, the remittee, the nature of the
                      remittance, and the remittance amount.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Get CA certification:</strong> If Form 15CB is
                      required, the remitter must obtain a certificate from a CA
                      in Form 15CB.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Submit Form 15CA and 15CB:</strong> Once the Form
                      15 CA and CB forms are filled and certified, the remitter
                      must upload the forms on the income tax department's
                      e-filing website.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Obtain an acknowledgment:</strong> After
                      submitting Form 15 CA, you will receive an acknowledgment
                      with a unique number. You should keep this acknowledgment
                      for future reference.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Note that the procedure for filing Form 15 CA and Form 15CB may
                vary depending on the specific transaction and other factors.
              </p>
              <p>
                LegallensIndia can help you file Form 15 CA-CB, from preparation
                to submission, and ensure that you comply with all the
                applicable regulations.
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
