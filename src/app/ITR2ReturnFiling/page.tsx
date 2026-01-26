import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ITR2ReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">ITR-2 Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                The Income Tax Act of 1961 outlines all the ITR forms and
                procedures. Among these forms, the ITR2 form is designated for
                individuals and Hindu Undivided Families who do not generate
                Income from professional or business activities.
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
                { id: 3, title: "ITR-2 Return Filing", url: "" },
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
                      <h5 className="card-title">ITR-2 Return Filing</h5>
                      <p>
                        The Income Tax Act of 1961 outlines all the ITR forms
                        and procedures. Among these forms, the ITR2 form is
                        designated for individuals and Hindu Undivided Families
                        who do not generate Income from professional or business
                        activities.
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

              <h2 className="display-4 mb-3">ITR 2 Form Filing</h2>
              <p>
                ITR, or Income Tax Return, is a crucial document in which
                taxpayers report their Income and applicable taxes to the income
                tax department. The Income Tax Act of 1961 outlines all the ITR
                forms and procedures. Among these forms, the ITR2 form is
                designated for individuals and Hindu Undivided Families who do
                not generate Income from professional or business activities.
                Understanding what ITR2 is is crucial for individuals having
                income from sources such as salary, house property, capital
                gains, or other sources apart from business or profession.
              </p>
              <p>
                LegallensIndia offers a seamless and efficient solution for filing
                Income Tax Returns using the ITR2 form in India. Our team of
                experts guides you through the entire process of how to file ITR
                2, ensuring that you meet your tax compliance obligations
                effortlessly. With LegallensIndia' ITR 2 Filing Services, you can
                easily navigate the complexities of tax submission, allowing you
                to focus on what matters most while we handle your tax return
                needs. Get started today!
              </p>
              <h3>What is ITR2?</h3>
              <p>
                In India, taxpayers are categorized based on Income, and
                specific Income Tax Return (ITR) forms are assigned to
                individuals according to their income sources. Among these
                forms, ITR2 form is designated for individuals and Hindu
                Undivided Families who do not generate Income from professional
                or business activities. This is what is ITR2 all about
                briefly.&nbsp;
              </p>
              <h3>Eligibility for ITR 2 Form</h3>
              <p>
                The ITR2 form is tailored for individuals and Hindu Undivided
                Families (HUFs) whose Income is derived from sources other than
                'Profits and Gains from Business or Profession.' If your Income
                originates from any of the following avenues, you are required
                for ITR 2 filing form:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Income from Salary or
                      Pension.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income derived from
                      house property, which may involve multiple properties.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from Capital
                      Gains or losses incurred from the sale of investments or
                      property, including both long-term and short-term
                      gains/losses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from Other
                      Sources encompasses winnings from lotteries, bets on
                      racehorses, and other legally recognized forms of
                      gambling.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Receipts exceeding Rs
                      5,000 from agricultural activities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Foreign Income or
                      ownership of Foreign Assets.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Status as a Resident Not
                      Ordinarily Resident (RNOR) or a Non-Resident.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Holding the position of
                      a Director in both listed and unlisted companies.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                This list precisely answers the question of who can file ITR 2.
              </p>
              <h3>Who Shouldn't Eligible for ITR 2 filing?</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Individuals or Hindu
                      Undivided Families (HUFs) with Income stemming from
                      business or professional activities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals are eligible
                      to complete the ITR-1 form (Sahaj).
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Structure of the ITR2 Form</h3>
              <p>
                After understanding who can file ITR 2, you need to know the
                structure of the ITR2 form. The ITR2 comprises two primary
                sections, each containing specific segments and schedules:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part A:</strong>{" "}
                      This section encompasses general information, including
                      your Name, Address, Date of Birth (DOB), PAN, Aadhar card,
                      Contact Number, and Email Address.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part B:</strong>{" "}
                      This section calculates your total Income and the
                      corresponding tax liability on your earnings.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Additionally, the form incorporates various schedules that
                provide detailed information on different income sources and
                deductions.
              </p>
              <h3>Part B-TI – Computation of Total Income:</h3>
              <p>
                In this section, your Gross Total Income is computed,
                considering earnings from salary, house property, and other
                sources. Total deductions for tax savings are then subtracted
                from your Gross Total Income to arrive at your Total Income.
              </p>
              <h3>Part B-TTI – Computation of Tax Liability:</h3>
              <p>
                Using your Total Income as the basis, your tax liability is
                calculated.
              </p>
              <h3>Documents Needed for ITR 2 Filing Form</h3>
              <p>
                ITR2 Form is an annexure-less form, so you don't need to attach
                any documents during submission. But, Before you begin the ITR 2
                filing process, make sure you have the following documents and
                information on hand for hassle-free filing:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form 16/16A:</strong> These documents contain
                      information about your salary and tax deductions (TDS).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form 26AS/AIS/TIS:</strong> This statement
                      provides crucial details regarding tax credits, TDS (Tax
                      Deducted at Source), and other relevant tax-related data.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Bank Statements:</strong> Collect bank statements
                      that reflect Income from interest, dividends, or other
                      financial transactions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Capital Gains Details:</strong> Gather the
                      necessary transaction documents if you have sold assets
                      like property or stocks.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Details of Foreign Assets and Income (if applicable):
                      </strong>{" "}
                      Collect the relevant documents if you have foreign assets
                      or earned Income abroad.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Aadhaar Card, PAN Card, and Other Identification and
                        Contact Information:
                      </strong>{" "}
                      Ensure you have these identification documents readily
                      available for reference during the filing process.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Instructions for Completing the ITR2 Form</h3>
              <p>
                If you are a person who can file ITR 2, you must know the ITR 2
                filing process. During ITR 2 filing Form, it's important to
                follow these instructions and guidelines:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Complete the form in the following order:</strong>{" "}
                      Part A, all schedules, Part B-TI, Part B-TTI, and then the
                      verification section.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If any schedules do not
                      apply to you, strike them out and mark 'NA' (Not
                      Applicable).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Use 'NA' against any
                      item that doesn't pertain to your financial situation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Round off all figures to
                      the nearest rupee, except for total income/loss and tax
                      payable, which should be rounded off to the nearest ten
                      rupees.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Select 'Government' as
                      your employer category if you are a government employee.
                      If you work for a public sector company of the
                      Central/State Government, choose 'PSU.'
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If you claim double
                      taxation relief under section 90/90A/91, the ITR2 Form
                      cannot be used.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>
                  <span>
                    If you're wondering, can I file ITR for last 2 years now,
                    you should know that filing is possible with certain
                    conditions.
                  </span>
                </strong>
              </p>
              <h3>Modes of Submission for ITR2:</h3>
              <p>
                There are two main methods for how to file ITR 2 process:
                offline and online.
              </p>
              <h4>ITR 2 Filing Offline:</h4>
              <p>
                If you are 80 years of age or older, you have the option to file
                ITR-2 offline. In this case, submit a physical paper return or
                use a bar-coded form. You will receive an acknowledgment from
                the Income Tax Department upon submission.
              </p>
              <h4>ITR 2 Filing Online:</h4>
              <p>
                For online ITR 2 filing, you can transmit all the necessary
                information electronically, either with or without a digital
                signature.
              </p>
              <p>
                After completing the online filing, verify the return through
                Return Form ITR-V.
              </p>
              <p>
                You will receive the acknowledgment on your registered email if
                you submit ITR-2 electronically with a digital signature.
              </p>
              <h3>Why Choose LegallensIndia for ITR-2?</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Guidance:</strong> Our experienced
                      professionals have complete understanding on what is ITR2
                      and will provide expert guidance throughout the how to
                      file ITR 2 process, ensuring accuracy and compliance.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Convenience:</strong> We offer a convenient online
                      platform that allows you to file your returns from the
                      comfort of your home or office. Say goodbye to long queues
                      and paperwork!
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Accuracy:</strong> Our thorough review process
                      guarantees that your ITR2 form filing is error-free,
                      minimizing the risk of tax-related issues in the future.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Timely Filing:</strong> We understand the
                      importance of filing your taxes on time. With
                      LegallensIndia, you can rest assured that your returns will
                      be filed promptly to avoid penalties.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Contact LegallensIndia today, and our team will assist you every
                step of the way. Enjoy peace of mind knowing that your taxes are
                in expert hands.
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
