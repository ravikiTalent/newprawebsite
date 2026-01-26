import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ITR7ReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">ITR-7 Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                ITR-7 is a specialized income tax return form designed for
                specific entities like firms, companies, local authorities,
                associations of persons (AOPs), and artificial judicial persons
                claiming exemptions under various sections of the Income Tax
                Act.
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
                { id: 3, title: "ITR-7 Return Filing", url: "" },
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
                      <h5 className="card-title">ITR-7 Return Filing</h5>
                      <p>
                        ITR-7 is a specialized income tax return form designed
                        for specific entities like firms, companies, local
                        authorities, associations of persons (AOPs), and
                        artificial judicial persons claiming exemptions under
                        various sections of the Income Tax Act.
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

              <h2 className="display-4 mb-3">ITR-7 Return Filing</h2>
              <p>
                ITR-7 is a specialized income tax return form designed for
                specific entities like firms, companies, local authorities,
                associations of persons (AOPs), and artificial judicial persons
                claiming exemptions under various sections of the Income Tax
                Act. Filing ITR-7 can be a complex process, but with
                LegallensIndia, you can navigate it effortlessly. Our expert team
                streamlines the ITR-7 filing process, ensuring compliance and
                accuracy.
              </p>
              <p>
                Get Started with LegallensIndia and file your ITR-7 with ease.
              </p>
              <h3>What is the ITR 7 Form?</h3>
              <p>
                ITR-7 Form is specifically designed for firms, companies, local
                authorities, associations of persons (AOPs), and artificial
                judicial persons who wish to file their Income Tax Returns. It
                applies to those claiming exemptions in the following
                categories:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Under Section 139(4A):</strong> Charitable or
                      Religious Trusts
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Under Section 139(4B):</strong> Political Parties
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Under Section 139(4C):</strong> Scientific
                      Research Institutions
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Under Section 139(4D):</strong> Universities,
                      Colleges, Institutions, or Khadi and Village Industries
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who Cannot File the ITR 7 Form Online?</h3>
              <p>
                Individuals not seeking exemptions under Section 139(4A),
                Section 139(4B), Section 139(4C), or Section 139(4D) are not
                required to file the ITR-7 Form for Income Tax Returns.
              </p>
              <h3>Who is Eligible to File the ITR-7 Form?</h3>
              <p>
                The ITR-7 Form applies to individuals receiving income from
                various sources:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 139(4A):</strong> Those with income from
                      property held under trust or legal obligations for
                      charitable or religious purposes.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 139(4B):</strong> Political parties with
                      income exceeding the non-taxable limit.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 139(4C):</strong> Organizations such as
                      scientific research associations, hospitals, educational
                      institutions, universities, and news agencies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 139(4D):</strong> Colleges and
                      universities are not mandated to file returns otherwise.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 139(4E) and Section 139(4F):</strong>{" "}
                      Business trusts and investment funds with no obligation to
                      file under other provisions.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Any taxpayer who falls under the categories of Trust, Company,
                Firm, Local Authority, Association of Persons (AOP), or
                Artificial Judicial Person and claims exemptions as per Section
                139(4A), Section 139(4B), Section 139(4C), or Section 139(4D)
                can utilize the ITR-7 Form for filing Income Tax Returns.
              </p>
              <h3>What is the Deadline for Filing ITR 7 Form?</h3>
              <p>
                The due date for filing the ITR7 Form varies depending on
                whether the accounts require auditing. Individuals not subject
                to audit can file by July 31, 2023, for AY 2023-24, while audit
                cases have a deadline of October 31, 2023.
              </p>
              <p>
                <strong>Note:</strong> The filing date for Form ITR7 for the
                Assessment Year 2023-24 for assesses is detailed in clause (a)
                of Explanation 2 to sub-section (1). The original deadline of
                Section 139 of the Act, which was October 31, 2023, has been
                extended until November 30, 2023.
              </p>
              <h3>Structure of ITR 7 income tax form </h3>
              <p>
                The ITR 7 income tax form has been divided into two parts and
                nineteen schedules.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part A </strong>
                      General information
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part B </strong>
                      Outline of the total income and tax computation concerning
                      income chargeable to tax.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="table-responsive m-t-10 m-b-10">
                <table className="table mb-5 border">
                  <tbody>
                    <tr>
                      <td className="border">
                        <strong>Schedule-I</strong>
                      </td>
                      <td className="border">
                        Details of amounts accumulated/ set apart within the
                        meaning of section 11(2) in last year’s viz., previous
                        years relevant to the current assessment year.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-J</strong>
                      </td>
                      <td className="border">
                        Statement showing the investment of all funds of the
                        Trust or Institution as on the last day of the previous
                        year.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-K</strong>
                      </td>
                      <td className="border">
                        Statement of particulars regarding the Author(s)/
                        Founder(s)/ Trustee(s)/ Manager(s), etc., of the Trust
                        or Institution.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-LA</strong>
                      </td>
                      <td className="border">
                        Details in case of a political party.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-ET</strong>
                      </td>
                      <td className="border">
                        Details in case of an Electoral Trust
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-HP</strong>
                      </td>
                      <td className="border">
                        Computation of income under the head Income from House
                        Property.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-CG</strong>
                      </td>
                      <td className="border">
                        Computation of income under the head ITR.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-OS</strong>
                      </td>
                      <td className="border">
                        Computation of income under the head Income from other
                        sources.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-VC</strong>
                      </td>
                      <td className="border">
                        Details of Voluntary Contributions received
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-OA</strong>
                      </td>
                      <td className="border">
                        General information about business and profession
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-BP</strong>
                      </td>
                      <td className="border">
                        Computation of income under the head “profit and gains
                        from business or profession
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-CYLA</strong>
                      </td>
                      <td className="border">
                        Statement of income after set off of current year’s
                        losses
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-MAT</strong>
                      </td>
                      <td className="border">
                        Computation of Minimum Alternate Tax payable under
                        section 115JB (n)
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-MATC</strong>
                      </td>
                      <td className="border">
                        Computation of tax credit under section 115JAA
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule AMT</strong>
                      </td>
                      <td className="border">
                        Computation of Alternate Minimum Tax payable under
                        section 115JC (p)
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule AMTC</strong>
                      </td>
                      <td className="border">
                        Computation of tax credit under section 115JD
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-SI</strong>
                      </td>
                      <td className="border">
                        Statement of income which is chargeable to tax at
                        special rates
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-IT</strong>
                      </td>
                      <td className="border">
                        Statement of payment of advance-tax and tax on
                        self-assessment.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-TDS</strong>
                      </td>
                      <td className="border">
                        Statement of tax deducted at source on income other than
                        salary.
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule-TCS</strong>
                      </td>
                      <td className="border">
                        Statement of tax collected at source
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule FSI</strong>
                      </td>
                      <td className="border">
                        Details of income accruing or arising outside India
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule TR</strong>
                      </td>
                      <td className="border">
                        Details of Taxes paid outside India
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <strong>Schedule FA</strong>
                      </td>
                      <td className="border">Details of Foreign Assets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>Sequence for filing ITR 7 income tax form</h3>
              <h4>What is the sequence for filing ITR 7 income tax form?</h4>
              <p>
                The Income Tax Department has advised the assessees to follow
                the sequence that is mentioned below while filing the Income Tax
                return.{" "}
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Part A{" "}
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Part B{" "}
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Schedules{" "}
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Verification.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Enter the information required in the verification document and
                strike out the which is not applicable and this verification
                must be digitally signed before furnishing the final return.
              </p>
              <p>
                It is necessary for the person signing to mention his
                designation in the entity on behalf of whom the return is being
                filed.
              </p>
              <h3>The Procedure to file ITR 7 returns</h3>
              <p>
                ITR 7 income tax filing can be done with the Income tax
                department in the following ways:{" "}
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> By furnishing the
                      returns in the electronic manner using the digital
                      signature certificate{" "}
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> By transmitting the data
                      in the return and thereafter submitting the verification
                      of the return in the ITR V Return Form
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                After filing the return the assessee is required to print the
                copies of the ITR V Form. A copy of the ITR V which is duly
                signed by the assessee has to be sent by the ordinary post to
              </p>
              <p>
                Bag No.1, Electronic City Office, Bengaluru - 560100 (
                Karnataka)
              </p>
              <p>
                The other copy can be retained by the assessee for his record.
              </p>
              <h4>How to fill the verification document?</h4>
              <p>
                The required information is to be filled in the verification
                document. Strikeout whatever is not applicable. Pleasure ensures
                that the verification has been signed before the returns are
                furnished. Choose the designation/ capacity of the person
                signing the return.
              </p>
              <p>
                It is to be noted that any person who is making a false
                statement in return or accompanying the schedules should be
                liable to be prosecuted under the section which can lead to
                imprisonment and also a fine.
              </p>
              <h4>E filing audit reports </h4>
              <p>
                If the assessee is liable for auditing u/s 44AB and the accounts
                have been audited by the accountant then the details of such
                audit reports along with the furnishing date are to be sent to
                the income tax department. It is to be under the head "Audit
                Information"{" "}
              </p>
              <h4>No annexures required</h4>
              <p>
                No documents are to be attached with this return while filing
                ITR 7 Form.{" "}
              </p>
              <p>
                The Taxpayers should match the taxes that are deducted/
                collected paid by or on behalf of them with their Tax Credit
                statement form 26AS.{" "}
              </p>
              <h3>Instructions to be followed while filing ITR 7 Form</h3>
              <p>
                The Income-tax department has outlined several methods through
                which the taxpayers can file ITR-7:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> All the details must be
                      filed properly as indicated or else the return will be
                      defective or invalid.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The figures relating to
                      tax and incomes must be rounded off to the nearest
                      multiples of ten rupees.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Other figures must be
                      rounded off to the nearest one rupee.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Negative figures or the
                      loss figures shall be written as "-" before such a number
                      unless provided otherwise.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> “Nil” to be written for
                      Figures with zero or nil value.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If any item doesn’t
                      apply to the assessee write “NA” against it.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Effortless ITR7 Filing with LegallensIndia</h3>
              <p>
                LegallensIndia simplifies the process of filing ITR7 and ensures a
                hassle-free experience for taxpayers. Our expert team is
                well-versed in the nuances of ITR7 filings, ensuring all
                regulatory requirements are met accurately and on time. We offer
                comprehensive support, from document preparation to submission,
                and guide you through the process. With LegallensIndia, you can
                rest assured that your ITR-7 filings will be seamless,
                compliant, and stress-free, allowing you to focus on your core
                activities confidently.
              </p>
              <p>
                Get Started with LegallensIndia and file your ITR-7 with ease.
                Experience hassle-free tax compliance today!
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
