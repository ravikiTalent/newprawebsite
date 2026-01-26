import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ITR5ReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">ITR-5 Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                An assessee should choose the appropriate ITR form as per the
                source of income. One such Income Tax Return (ITR) is the ITR 5
                Form.
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
                { id: 3, title: "ITR-5 Return Filing", url: "" },
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
                      <h5 className="card-title">ITR-5 Return Filing</h5>
                      <p>
                        An assessee should choose the appropriate ITR form as
                        per the source of income. One such Income Tax Return
                        (ITR) is the ITR 5 Form.
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

              <h2 className="display-4 mb-3">ITR-5 Return Filing</h2>
              <p>
                The Income Tax Department has introduced various forms for
                different taxpayers. An assessee should choose the appropriate
                ITR form as per the source of income. One such Income Tax Return
                (ITR) is the ITR 5 Form. It is primarily designed for firms,
                Association of Persons (AOP), and Body of Individuals (BOI) who
                are not required to file their income tax returns as companies.
                In other words, it is meant for entities that do not have a
                corporate structure but still need to report their income and
                taxes to the Indian Income Tax Department.
              </p>
              <p>
                LegallensIndia is your trusted partner for hassle-free and
                efficient Income Tax Return (ITR) filing services in India. Our
                ITR-5 service is designed to cater to the specific needs of
                firms, the Association of Persons (AOP), and the Body of
                Individuals (BOI) looking to file their income tax returns
                seamlessly. With our user-friendly platform, expert assistance,
                and competitive pricing, ITR 5 income tax filing has always been
                a challenge.
              </p>
              <h3>Who is eligible to file the ITR 5 Form?</h3>
              <p>The following entities can use the ITR 5 Form:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Firm
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Limited Liability
                      Partnership (LLP)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Body of Individuals
                      (BOI)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Association of Persons
                      (AOP)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Estate of deceased
                      individuals
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Artificial Juridical
                      Person referred to in section 2(31)(vii)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Business trusts and
                      investment funds
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Estate of insolvent
                      individuals
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Cooperative society
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Local authority
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                However, it's important to note that a person who is required to
                file the return of income under sections 139(4A),
                139(4C),139(4B), or 139(4D) shall not use this form.
              </p>
              <h3>Due Date for Filing ITR5 Form</h3>
              <p>
                The ITR 5 due date depends on whether the taxpayer's accounts
                need to be audited under the Income-Tax Act and whether they
                must furnish a report in Form No. 3CEB. Here are the different
                ITR 5 due dates:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> When accounts are to be
                      audited under the Income-Tax Act: The due date for filing
                      ITR-5, in this case, is 31st October of the assessment
                      year.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> When a report in Form
                      No. 3CEB is to be furnished: If the taxpayer is needed to
                      furnish a report in Form No. 3CEB, the due date for filing
                      ITR5 is 30th November of the assessment year.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> In other cases (where
                      accounts need not be audited): For taxpayers where
                      accounts do not need to be audited under the Income-Tax
                      Act, the ITR 5 due dates is 31st July of the assessment
                      year.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who Cannot File the ITR 5 form?</h3>
              <p>
                The ITR 5 form is not meant for the following categories of
                taxpayers:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Individual assesses:</strong> Individuals should
                      use the appropriate ITR form based on their sources of
                      income. For example, most individual taxpayers use ITR-1,
                      ITR-2, or other forms as applicable.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Hindu Undivided Family (HUF):</strong> HUFs must
                      also use the relevant ITR form based on their income
                      sources. Typically, they use ITR-2 or other applicable
                      forms.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company:</strong> Companies have their own set of
                      ITR forms, such as ITR-6, for companies other than those
                      claiming exemption under section 11.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Taxpayers who using Form ITR-7:</strong>{" "}
                      Individuals or entities falling under Sections 139(4A),
                      139(4B), 139(4C), 139(4D), 139(4E), or 139(4F) are
                      required to use Form ITR-7 for filing their income tax
                      returns. These sections cover charitable trusts, political
                      parties, educational institutions, etc.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">No Documents Required</h3>
              <p>
                It's important to note that there is no requirement to attach
                documents with the ITR 5 income tax form.
              </p>
              <h3>Structure of the ITR5 Form</h3>
              <p>
                The ITR5 Form is structured into several parts and schedules to
                facilitate the comprehensive reporting of income, deductions,
                and tax liability. Below is an overview of the structure of the
                ITR5 Form:
              </p>
              <h4>Part A: General Information</h4>
              <p>
                This section gathers essential information about the taxpayer,
                such as name, PAN (Permanent Account Number), address, and
                contact details.
              </p>
              <h4>Part A-BS: Balance Sheet</h4>
              <p>
                This part is dedicated to reporting the entity's financial
                position with a balance sheet as of the specified date.
              </p>
              <h4>Part A-Manufacturing Account </h4>
              <p>
                Here, details related to the manufacturing account for the
                fiscal year are recorded.
              </p>
              <h4>Part A-Trading Account</h4>
              <p>
                This section captures information regarding the trading account
                for the fiscal year.
              </p>
              <h4>Part A and L: Profit and Loss Account</h4>
              <p>
                Here, you report the profit and loss account for the financial
                year.
              </p>
              <h4>Part A-OI: Other information</h4>
              <p>
                This section covers additional financial information relevant to
                the taxpayer's income.
              </p>
              <h4>Part A-QD: Quantitative details</h4>
              <p>
                Quantitative details related to various aspects of income are
                provided here.
              </p>
              <h4>Part B</h4>
              <p>
                Part B is a pivotal section where taxpayers calculate and report
                their total income and tax liability.
              </p>
              <h4>Schedules</h4>
              <p>
                The ITR 5 income tax form in India includes 31 schedules,
                sections, or categories within the form. These schedules capture
                details and computations related to the taxpayer's income and
                tax obligations. They cover various aspects, such as income from
                different sources, deductions, depreciation calculations,
                capital gains, and foreign income. Taxpayers must fill out these
                schedules as applicable to their financial situation to provide
                a comprehensive picture of their income and tax liability when
                filing their income tax returns. Each schedule serves a unique
                purpose in organizing and reporting financial information to the
                Indian Income Tax Department.
              </p>
              <h4>Part B – TI: Computation of Total Income</h4>
              <p>
                In this section, the taxpayer calculates their total income
                based on the information provided in the schedules.
              </p>
              <h4>
                Part B – TTI: Computation of Tax Liability on Total Income
              </h4>
              <p>
                This part focuses on determining the tax liability based on the
                computed total income.
              </p>
              <h4>Tax Payments:</h4>
              <p>
                This section includes details of payments made towards advance
                tax and self-assessment tax.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> It also includes details
                      of tax deducted at source on income other than salary
                      (16A, 16B, 16C).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Additionally, it
                      captures details of tax collected at the source.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Sequence for Filling Out
                      Parts and Schedules:
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The Income Tax Department recommends taxpayers follow the
                following sequence while filling out the income tax return:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Part A
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Schedules
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Part B
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Verification
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Why Choose LegallensIndia for ITR-5 Form Filing?</h3>
              <p>
                LegallensIndia is your preferred choice for ITR 5 income tax
                filing, offering a range of benefits that make the process easy,
                accurate, and hassle-free. Here's why you should choose
                LegallensIndia for your ITR-5 filing needs:
              </p>
              <h4>Expert Guidance</h4>
              <p>
                Our expert team of experienced tax professionals provides expert
                guidance throughout the filing process. We ensure that your
                ITR-5 is filed accurately and complies with tax regulations.
              </p>
              <h4>Deduction Optimization</h4>
              <p>
                Our experts help you optimize deductions, ensuring you take
                advantage of all available tax benefits, ultimately reducing
                your tax liability.
              </p>
              <h4>Review and Verification</h4>
              <p>
                Our team reviews your ITR-5 form for accuracy and completeness
                before filing. This step ensures that your return is error-free
                and ready for submission.
              </p>
              <h4>Secure Filing</h4>
              <p>
                We prioritize the security of your financial data. We use the
                latest encryption technology to keep your information safe
                during filing.
              </p>
              <h4>Timely Reminders</h4>
              <p>
                LegallensIndia provides timely reminders for important tax
                deadlines, ensuring you never miss a filing date.
              </p>
              <h4>Post-Filing Support</h4>
              <p>
                Our support team is available to address any queries or concerns
                you may have during or after the filing process.
              </p>
              <p>
                Let LegallensIndia assist you in ITR 5 income tax filing, allowing
                you to focus on your business and financial well-being. Contact
                us today for expert assistance in meeting your tax obligations
                and ensuring a smooth filing experience. With LegallensIndia, you
                can be confident that your ITR-5 is filed accurately and on
                time, providing peace of mind and ensuring compliance with tax
                regulations.
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
