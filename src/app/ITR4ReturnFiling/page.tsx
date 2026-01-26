import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ITR4ReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">ITR-4 Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                The ITR-4 Form, commonly referred to as the Sugam form, is
                specifically designed for taxpayers who have opted for the
                presumptive income scheme outlined in Section 44AD, Section
                44ADA, and Section 44AE of the Income Tax Act.
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
                { id: 3, title: "ITR-4 Return Filing", url: "" },
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
                      <h5 className="card-title">ITR-4 Return Filing</h5>
                      <p>
                        The ITR-4 Form, commonly referred to as the Sugam form,
                        is specifically designed for taxpayers who have opted
                        for the presumptive income scheme outlined in Section
                        44AD, Section 44ADA, and Section 44AE of the Income Tax
                        Act.
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

              <h2 className="display-4 mb-3">ITR-4 Return Filing</h2>
              <p>
                The ITR-4 Form, commonly referred to as the Sugam form, is
                specifically designed for taxpayers who have opted for the
                presumptive income scheme outlined in Section 44AD, Section
                44ADA, and Section 44AE of the Income Tax Act. It is mandatory
                for eligible taxpayers to complete and submit this form.
              </p>
              <p>
                However, for businesses with an annual turnover exceeding Rs. 2
                Crores, ITR-3 should be used. Additionally, depending on
                individual circumstances, ITR-5 may also be required.
                LegallensIndia offers expert assistance for the ITR 4 income tax
                filing. Contact our experts today to ensure a smooth and
                accurate filing process.
              </p>
              <h3>Who is Eligible to file Form ITR 4 Form?</h3>
              <p>
                ITR 4 Form is the Income Tax Return form designed for
                individuals, Hindu Undivided Families (HUFs), and firms
                (excluding Limited Liability Partnerships or LLPs) who choose to
                utilize the presumptive income scheme as per Sections 44AD,
                44ADA, and 44AE of the Income Tax Act.
              </p>
              <h3>What is a Presumptive Taxation Scheme?</h3>
              <p>
                The presumptive taxation scheme is designed to simplify tax
                compliance for certain individuals and businesses.
              </p>
              <p>
                Under Section 44AA of the Income Tax Act, individuals and
                businesses engaged in specific activities are typically required
                to maintain detailed accounting records. However, Sections 44AD,
                44ADA, and 44AE offer relief to small taxpayers by allowing them
                to estimate their Income at prescribed rates, reducing the
                burden of maintaining extensive financial records. Here's a
                breakdown of these schemes for users of ITR4:
              </p>
              <h3>Section 44AD</h3>
              <p>
                This scheme allows Resident Individuals, Resident Hindu
                Undivided Families (HUFs), and Resident Partnership Firms
                (excluding Limited Liability Partnerships) engaged in certain
                businesses to calculate their Income on an estimated basis,
                provided they meet specific conditions.
              </p>
              <h3> Section 44ADA</h3>
              <p>
                Resident individuals in India who are professionals in fields
                specified under Section 44AA(1) can use this scheme to estimate
                their professional Income, subject to certain conditions.
              </p>
              <h3>Section 44AE</h3>
              <p>
                This scheme is applicable to individuals, HUFs, Firms (excluding
                Limited Liability Partnerships), and other residents or
                non-residents engaged in the business of plying, leasing, or
                hiring goods carriages. They can estimate their Income under
                this scheme, provided they own not more than ten goods carriages
                during the previous year.
              </p>
              <p>Eligibility Criteria for Filing SUGAM (ITR-4) Form</p>
              <p>
                To qualify for using the ITR-4 SUGAM form, the taxpayer must
                meet the following criteria for the assessment year:
              </p>
              <p>
                <strong>Total Income:</strong> The total Income should not
                exceed Rs. 50 lakh.
              </p>
              <p>
                The Income should be derived from any of the following sources:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Income from Salary or
                      Income from Pension.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from One House
                      Property.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Interest income and/or
                      Income from family pension taxable under Other Sources.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from a business,
                      which is computed on a presumptive basis (Gross Turnover
                      up to Rs. 2 crores).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from a business,
                      computed on a presumptive basis (Income from goods
                      carriage up to ten vehicles).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from a
                      profession, computed on a presumptive basis under Section
                      44ADA (Gross receipt up to Rs. 50 lakh).
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Important Notes:</h3>
              <p>
                When Income is computed on a presumptive basis under sections
                44AD, 44AE, or 44ADA, it is presumed to have been calculated
                after accounting for all allowances, depreciation, losses, or
                deductions as per the Income-tax Act. However, individuals
                incurring losses after applying the proviso to sub-section 3 of
                Section 44AE are required to file ITR-5.
              </p>
              <p>
                If the taxpayer needs to combine the Income of another person,
                such as a spouse or minor child, with their own Income, the
                SUGAM form can only be used if the additional Income falls
                within the specified income categories mentioned above.
              </p>
              <h3>Non-Applicability of ITR- 4 SUGAM Form</h3>
              <p>
                The following categories of taxpayers do not fall under the ITR
                4 applicability criteria:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Directors of a company
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals who have
                      held unlisted equity shares at any point during the
                      previous year.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Taxpayers with assets,
                      including financial interests, in any entity situated
                      outside India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Individuals who have
                      signing authority in any account located outside the
                      country.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Persons with Income from
                      sources outside India.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Furthermore, the SUGAM form cannot be used by individuals who
                have Income of the following types during the previous year:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Profits and gains from
                      business and professions that are not required to be
                      computed under Section 44AD, 44ADA, or 44AE of the
                      Income-tax Act. This includes Income from agency business,
                      speculative business, commission, or brokerage income.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income from more than
                      one house property.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Capital gains.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income derived from
                      winning a lottery.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Engagement in the
                      activity of owning and maintaining racehorses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income is subject to
                      taxation at special rates under Section 115BBDA or Section
                      115BBE of the Income Tax Act.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Income that needs to be
                      apportioned according to the provisions of Section 5A.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Agricultural Income
                      exceeding Rs. 5,000.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Additionally, this
                      return form is not suitable for individuals who have any
                      claims related to loss, deductions, relief, or tax credits
                      of the following nature:
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Losses incurred in the past or losses intended to be carried
                forward under the category of "Income from house property.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Claims for relief under
                      Section 9A, Section 90, or Section 91 of the Income Tax
                      Act.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Loss under the Income
                      from other sources.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Claims for deductions
                      under Section 57, except for deductions related to family
                      pension.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Claims for the credit of
                      tax deducted at source in the hands of any other person.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Structure of the ITR 4 Form</h3>
              <p>
                The ITR 4 Form is structured into four parts for easy reporting
                of your Income and tax-related information:
              </p>
              <h3>Part A: General Information</h3>
              <p>
                This section of ITR 4 form includes your personal details such
                as name, gender, PAN number, date of birth, income tax ward,
                address, email address, and mobile number.
              </p>
              <h3>Part B: Gross Total Income from the 5 Heads of Income</h3>
              <p>
                In this part, you report your Income from various sources
                categorized into five heads: Income from business, Income from
                salary or pension, Income from house property, and Income from
                other sources. By adding all these incomes together, you
                calculate your gross total Income.
              </p>
              <h3>Part C: Deductions and Total Taxable Income</h3>
              <p>
                Here, you list the deductions allowed under various sections of
                the Income Tax Act, such as 80C, 80D, 80E, and others. These
                deductions are subtracted from your gross total Income to arrive
                at your total taxable Income.
              </p>
              <h3>Part D: Tax Computation and Tax Status</h3>
              <p>
                This section involves detailed calculations related to your tax
                liability. It includes factors like surcharge, relief under
                section 89, interest under section 234B and 234C, advance tax
                paid, TCS collected, refund, rebate under section 87A, cess on
                tax payable, and more. It computes your total tax payable, and
                if the total tax and interest exceed the taxes paid, it
                calculates the balance tax due.
              </p>
              <p>
                For individuals reporting Income from business and opting for
                the presumptive income scheme under Section 44AD or 44AE,
                additional information needs to be provided:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Schedule IT:</strong> Statement of advance tax and
                      self-assessment tax payment.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Schedule TCS:</strong> Statement of taxes
                      collected at source (TCS).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Schedule TDS1:</strong> Statement of tax deducted
                      at source on salary.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Schedules TDS2:</strong> Statement of tax deducted
                      on Income other than salary.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Depending on your tax
                      situation, you may also need to fill out supplementary
                      schedules like TDS1, TDS2, IT, and TCS as required.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                After completing all the necessary sections and schedules, you
                must verify and sign the return before submitting it. This
                ensures the accuracy and legitimacy of the information provided.
              </p>
              <h3>Annexure-less Return Form</h3>
              <p>
                When using the SUGAM return form, taxpayers are not required to
                upload any additional documents, including TDS certificates.
              </p>
              <h3>Why Choose LegallensIndia for ITR4?</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Guidance:</strong> Benefit from the
                      expertise of our professionals, who will guide you through
                      the ITR 4 income tax filing process, ensuring accuracy,
                      verifying ITR 4 applicability, and complying with tax
                      regulations.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Convenience:</strong> Enjoy the ease and
                      convenience of our online platform, allowing you to file
                      your ITR4 from the comfort of your home or office. Say
                      goodbye to time-consuming queues and paperwork.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Accuracy:</strong> Our rigorous review process
                      guarantees that your ITR4 is free from errors, reducing
                      the risk of potential tax-related issues in the future.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Timely Filing:</strong> We understand the
                      significance of filing your taxes on time. With
                      LegallensIndia, you can be confident that your ITR 4 income
                      tax form will be filed promptly, helping you avoid
                      penalties and meet tax deadlines.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Contact LegallensIndia today, and our dedicated team will assist
                you at every stage of the process.
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
