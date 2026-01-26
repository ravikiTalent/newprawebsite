import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ITR3ReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">ITR-3 Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                We're your trusted partner for simplifying the ITR-3 form filing
                process, making it easy, precise, and stress-free
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
                { id: 3, title: "ITR-3 Return Filing", url: "" },
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
                      <h5 className="card-title">ITR-3 Return Filing</h5>
                      <p>
                        We're your trusted partner for simplifying the ITR-3
                        form filing process, making it easy, precise, and
                        stress-free
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

              <h2 className="display-4 mb-3">ITR 3 Form Filing</h2>
              <p>
                At LegallensIndia, we're your trusted partner for simplifying the
                ITR-3 form filing process, making it easy, precise, and
                stress-free. As a leading online platform specializing in tax
                and compliance solutions, we understand that navigating the
                intricacies of income tax returns can be overwhelming. Whether
                you're an individual with income from business or a Hindu
                Undivided Family (HUF) looking to meet your tax obligations, our
                expert team is here to assist you at every step.
              </p>
              <h3>What is ITR 3 Form?</h3>
              <p>
                The ITR 3 Form is crucial for taxpayers earning income from a
                business or a profession. It plays a vital role in the Income
                Tax Department's efforts to collect comprehensive financial
                information, ensuring tax compliance.
              </p>
              <h3>Who Should File ITR-3 Form?</h3>
              <p>
                The ITR Form 3 can be used for filing an income tax return by
                individuals or Hindu Undivided Families (HUFs) who meet the
                following ITR 3 applicability criteria:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Directorship:</strong> The taxpayer is a director
                      of a company or is engaged in a business.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Residential Status:</strong> The taxpayer's
                      residential status can be either resident or non-resident
                      of India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Pension Income:</strong> The taxpayer is receiving
                      income from a pension.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>House Property Income:</strong> The taxpayer is
                      earning income from house property.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Investments in Unlisted Equity Shares:</strong>{" "}
                      The taxpayer has investments in unlisted equity shares.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Income Under 'Profits and Gains of Business or
                        Profession:
                      </strong>{" "}
                      The taxpayer's income is taxable under the category of
                      'profits and gains of business or profession.' This can
                      include income elements such as salary, interest,
                      commission, bonus, or remuneration.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Additionally, taxpayers can use the ITR Form 3 if their total
                income includes the following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Income from a
                      single-house property or multiple-house property.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from activities
                      like lotteries, betting on races, and other legal forms of
                      gambling as per Indian law.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from short-term
                      or long-term capital gains.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income earned from a
                      business or profession conducted under a proprietorship
                      firm owned by the individual or a Hindu Undivided Family
                      (HUF).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income earned from
                      foreign assets.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Meeting these eligibility criteria allows individuals and HUFs
                to use the ITR Form 3 for filing their income tax returns,
                provided that their income falls into the specified categories
                mentioned above.
              </p>
              <h3>Who is Not Eligible to File the ITR 3 Form?</h3>
              <p>
                An individual or Hindu Undivided Family (HUF) earning income as
                a partner of a partnership firm engaged in a business or
                profession is not eligible to file ITR-3. In such cases, they
                should file ITR-2 instead.
              </p>
              <h3>Due Date for Filing Form ITR3</h3>
              <p>
                The due date for filing the ITR Form 3, which is the income tax
                return, varies depending on whether the case is an audit case or
                a non-audit case for different assessment years:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> For Assessment Year
                      2023-24:
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Non-audit Cases: The due
                      date is July 31, 2023
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Audit Cases: The due
                      date is October 31, 2023
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> These dates are subject
                      to change by the income tax authorities, so it's essential
                      to stay updated with any revisions or extensions of the
                      due dates.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Late Filing Penalties for ITR3 Form</h3>
              <p>
                The penalties for late filing of the ITR3 form in India are as
                follows:
              </p>
              <p>
                If you file your return after the due date but before December
                31 of the assessment year:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> A late filing fee of ₹
                      5,000 may be levied.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If you file your return
                      after December 31 of the assessment year:
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A late filing fee of ₹
                      10,000 may be levied.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It's important to note that the late filing fee may vary based
                on the taxpayer's total income and other factors. Additionally,
                if your total income is less than ₹ 5 lakh, the maximum late
                filing fee is capped at ₹ 1,000. Therefore, it's advisable to
                file your ITR form 3 on time to avoid these penalties and any
                potential legal consequences.
              </p>
              <h3>Documents required for ITR 3 Form</h3>
              <p>
                To file your income tax return (ITR) on LegallensIndia for ITR-3,
                the following documents are needed.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> PAN (Permanent Account
                      Number)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Aadhaar Card
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Bank account details
                      (account number and IFSC code)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Form 16, if applicable
                      (for salaried individuals)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Details of your
                      investments
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Books of accounts (if
                      you have a business or professional income)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Having these documents
                      ready will make the ITR filing process smoother and more
                      efficient.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Sections of the ITR 3 Form</h3>
              <p>
                The ITR 3 Form is structured into six sections, each serving a
                distinct purpose:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>General Information:</strong> In this segment, you
                      are required to provide your personal particulars,
                      including your name, address, date of birth, email
                      address, and PAN number. Additionally, you'll specify the
                      assessment year and indicate whether you are filing your
                      return as a self-assessment.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Income Details:</strong> This section necessitates
                      the disclosure of your income from various sources,
                      encompassing salaries, pensions, annuities, family
                      pensions, and other avenues. You will also calculate your
                      total taxable income and the corresponding tax liability.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Deductions and Taxes Paid:</strong> In this
                      category, you have the opportunity to claim deductions
                      permitted under various sections of the Income Tax Act.
                      Additionally, you must report the taxes you have paid
                      during the financial year, such as advance tax and
                      self-assessment tax.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>TDS/TCS Credit:</strong> This division mandates
                      the inclusion of details regarding any Tax Deducted at
                      Source (TDS) or Tax Collected at Source (TCS) credits that
                      are applicable to you.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Verification and Declaration:</strong> In this
                      final section, you are tasked with validating your return
                      through either a digital signature or by dispatching a
                      physical copy of the signed return to the Centralized
                      Processing Center (CPC). Moreover, you must make a
                      declaration affirming that all the information furnished
                      in the return is accurate and true to the best of your
                      knowledge.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Why Choose LegallensIndia for ITR3 Form Filing?</h3>
              <p>
                LegallensIndia is your ideal partner for ITR3 Form filing,
                offering expert guidance, accuracy, timely filing, documentation
                assistance, and a secure platform. We simplify the process,
                ensuring your compliance with tax regulations.
              </p>
              <h3>How LegallensIndia Simplifies Your ITR-3 Filing</h3>
              <p>
                Filing your ITR-3 form accurately and on time is crucial.
                LegallensIndia makes it hassle-free with expert guidance, a
                user-friendly platform, document management, deduction
                optimization, review and verifying ITR 3 applicability, secure
                filing, timely reminders, and post-filing support.
              </p>
              <p>
                Let LegallensIndia assist you in filing your ITR-3 form, allowing
                you to focus on your business and financial well-being. Contact
                us today for expert assistance in meeting your tax obligations
                and ensuring a smooth filing experience.
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
