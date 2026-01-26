import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ProprietorshipCompliance() {
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
                Proprietorship Compliance
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Running a Sole Proprietorship in India comes with a set of
                crucial financial and legal responsibilities.
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
                { id: 2, title: "Compliance", url: "" },
                { id: 3, title: "Proprietorship Compliance", url: "" },
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
                      <h5 className="card-title">Proprietorship Compliance</h5>
                      <p>
                        Running a Sole Proprietorship in India comes with a set
                        of crucial financial and legal responsibilities.
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

              <h2 className="display-4 mb-3">Proprietorship Compliance</h2>
              <p>
                Filing tax returns as per sole proprietorship tax rate is an
                essential obligation for businesses operating as sole
                proprietorships in India. At LegallensIndia, we understand the
                significance of Compliance with Indian tax laws and the
                potential benefits that come with it. Our comprehensive services
                are designed to assist business owners in navigating the
                intricate Compliance. To navigate these compliance obligations
                seamlessly, LegallensIndia offers expert assistance and a
                user-friendly platform, making the process efficient and
                hassle-free for Sole Proprietors.
              </p>
              <p>
                By partnering with LegallensIndia, you can fulfill your tax
                obligations and explore opportunities to optimize your tax
                benefits, allowing your business to succeed while following tax
                rules.
              </p>
              <h3>Proprietorship</h3>
              <p>
                A sole proprietorship in India is the most basic business setup,
                where a single individual owns and runs the business.
              </p>
              <h3>Income Tax Return filing for Proprietorship</h3>
              <p>
                In India, when it comes to taxes, proprietorships have the same
                responsibilities as their owners. A proprietorship is an
                extension of the owner, meaning the tax process is quite similar
                to what individuals go through. The rules of income tax for sole
                proprietorship that apply to individual proprietors also apply
                to proprietorships.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Proprietorships, much
                      like partnerships and companies, are required to pay
                      income tax for sole proprietorships based on their
                      earnings and the applicable sole proprietorship tax rate.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> For tax purposes,
                      proprietors and their businesses are viewed as single
                      entities. The income tax filing process for
                      proprietorships aligns with the tax returns of the
                      Proprietor.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Since a proprietorship
                      isn't considered a distinct legal entity, it has no unique
                      tax identification number. Instead, the Proprietor's
                      Permanent Account Number is used for filing returns on
                      behalf of the proprietorship.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Is it necessary for Proprietorship to File ITR?</h3>
              <p>
                Yes, under the Income Tax Act in India, proprietorship firms
                must file income tax returns based on the age, applicable sole
                proprietorship tax rate and income of the Proprietor:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Below 60 Years:</strong> Proprietors below 60
                      years of age must file an income tax return if their total
                      income exceeds Rs. 3 Lakhs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Between 60 and 80 Years:</strong> Proprietors aged
                      between 60 and 80 must file an income tax return if their
                      total income exceeds Rs. 3 Lakhs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Above 80 Years:</strong> Proprietors aged 80 years
                      and above must file an income tax return if their income
                      exceeds Rs. 5 Lakhs.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Filing ITR before the deadline is crucial because it allows
                business losses to be carried forward for future use.
                Additionally, certain deductions under sections like 10A, 10B,
                80-IA, 80-IAB, 80-IB, and 80-IC can only be claimed if the
                proprietorship's ITR has been filed on or before the due date.
              </p>
              <h3>Income Tax Slab for Proprietorship Firms</h3>
              <p>
                The income tax landscape for proprietorship firms has witnessed
                significant changes in the 2023-2024 budgets. The revised income
                tax regime has introduced an enhanced tax rebate threshold of
                Rs. 3 lakh for both salaried individuals and taxpayers.
                Moreover, the tax rebates for individual and salaried taxpayers
                have been elevated from Rs. 5 lakh to Rs. 7 lakh under this
                updated income tax framework. In the below table, we have
                outlines income tax slab for proprietorship firm:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Proprietor's Age</strong>
                    </th>
                    <th className="border">
                      <strong>Net Income Range</strong>
                    </th>
                    <th className="border">
                      <strong>Rate of Income Tax (%)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border">Below 60 Years</th>
                    <td className="border">Up to Rs. 2,50,000</td>
                    <td className="border">-</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 2,50,001 to Rs. 5,00,000</td>
                    <td className="border">5</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 5,00,001 to Rs. 10,00,000</td>
                    <td className="border">20</td>
                  </tr>
                  <tr>
                    <td className="border">Above Rs. 10,00,000</td>
                    <td className="border">30</td>
                  </tr>
                  <tr>
                    <th className="border">60-80 Years</th>
                    <td className="border">Up to Rs. 3,00,000</td>
                    <td className="border">-</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 3,00,001 to Rs. 5,00,000</td>
                    <td className="border">5</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 5,00,001 to Rs. 10,00,000</td>
                    <td className="border">20</td>
                  </tr>
                  <tr>
                    <td className="border">Above Rs. 10,00,000</td>
                    <td className="border">30</td>
                  </tr>
                  <tr>
                    <th className="border">Above 80 Years</th>
                    <td className="border">Up to Rs. 5,00,000</td>
                    <td className="border">-</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 5,00,001 to Rs. 10,00,000</td>
                    <td className="border">20</td>
                  </tr>
                  <tr>
                    <td className="border">Above Rs. 10,00,000</td>
                    <td className="border">30</td>
                  </tr>
                </tbody>
              </table>
              <h4>
                Tax rates for Proprietors opting for an Alternate Tax Regime
                under Section 115BAC
              </h4>
              <p>
                An alternative tax regime for proprietors was introduced by
                Finance Act 2020 as Section 115BAC. Assesses must give up
                specified exemptions and deductions to take advantage of this
                tax regime.
              </p>
              <p>
                The Income tax rate for a Proprietor who opts for the alternate
                tax regime:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Net Income Range</strong>
                    </th>
                    <th className="border">
                      <strong>Rate of income-tax (%) (FY 2022-23)</strong>
                    </th>
                    <th className="border">
                      <strong>Rate of income-tax (%) (FY 2023-24)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Up to Rs. 2,50,000</td>
                    <td className="border">-</td>
                    <td className="border">-</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 2,50,001 to Rs. 3,00,000</td>
                    <td className="border">5</td>
                    <td className="border">-</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 3,00,001 to Rs. 5,00,000</td>
                    <td className="border">5</td>
                    <td className="border">5</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 5,00,001 to Rs. 6,00,000</td>
                    <td className="border">10</td>
                    <td className="border">5</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 6,00,001 to Rs. 7,50,000</td>
                    <td className="border">10</td>
                    <td className="border">10</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 7,50,001 to Rs. 9,00,000</td>
                    <td className="border">15</td>
                    <td className="border">10</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 9,00,001 to Rs. 10,00,000</td>
                    <td className="border">15</td>
                    <td className="border">15</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 10,00,001 to Rs. 12,00,000</td>
                    <td className="border">20</td>
                    <td className="border">15</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 12,00,001 to Rs. 12,50,000</td>
                    <td className="border">20</td>
                    <td className="border">20</td>
                  </tr>
                  <tr>
                    <td className="border">Rs. 12,50,001 to Rs. 15,00,000</td>
                    <td className="border">25</td>
                    <td className="border">20</td>
                  </tr>
                  <tr>
                    <td className="border">Above Rs. 15,00,000</td>
                    <td className="border">30</td>
                    <td className="border">30</td>
                  </tr>
                </tbody>
              </table>
              <h3>Rates of surcharge under the Normal Tax Regime</h3>
              <p>
                In addition to the Income Tax amount calculated, individuals
                must pay Surcharge and Cess based on the above-mentioned tax
                slabs.
              </p>
              <p>
                In respect of a Proprietor, the rate of surcharge for the
                Assessment Year 2024-25 is tabulated here:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Nature of Income</strong>
                    </th>
                    <th className="border">
                      <strong>Range of Total Income</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border"> </td>
                    <td className="border">Up to Rs. 50 lakhs (%)</td>
                    <td className="border">Rs. 50 lakhs to Rs. 1 crore (%)</td>
                    <td className="border">Rs. 1 crore to Rs. 2 crores (%)</td>
                    <td className="border">
                      Rs. 2 crores to Rs. 5 crores ((%)
                    </td>
                    <td className="border">More than Rs. 5 crores</td>
                  </tr>
                  <tr>
                    <td className="border">
                      Short-term capital gain as per under Section 111A or
                      Section 115AD
                    </td>
                    <td className="border">Nil</td>
                    <td className="border">10</td>
                    <td className="border">15</td>
                    <td className="border">15</td>
                    <td className="border">15</td>
                  </tr>
                  <tr>
                    <td className="border">
                      Long-term capital gain is covered under Section 112A or
                      Section 115AD, or Section 112
                    </td>
                    <td className="border">Nil</td>
                    <td className="border">10</td>
                    <td className="border">15</td>
                    <td className="border">15</td>
                    <td className="border">15</td>
                  </tr>
                  <tr>
                    <td className="border">
                      Dividend income not being dividend income chargeable to
                      tax at the special rate under sections 115A, section
                      115AB, section 115AC, section 115ACA
                    </td>
                    <td className="border">Nil</td>
                    <td className="border">10</td>
                    <td className="border">15</td>
                    <td className="border">15</td>
                    <td className="border">15</td>
                  </tr>
                  <tr>
                    <td className="border">
                      Unexplained income chargeable to tax under Section 115BBE
                    </td>
                    <td className="border">25</td>
                    <td className="border">25</td>
                    <td className="border">25</td>
                    <td className="border">25</td>
                    <td className="border">25</td>
                  </tr>
                  <tr>
                    <td className="border">Any other income</td>
                    <td className="border">Nil</td>
                    <td className="border">10</td>
                    <td className="border">15</td>
                    <td className="border">25</td>
                    <td className="border">37</td>
                  </tr>
                </tbody>
              </table>
              <h4>Rates of surcharge under alternate tax regime</h4>
              <p>
                For the Assessment Year 2024-25, if a Proprietor chooses the
                alternate tax regime as per Section 115BAC, the surcharge rate
                will be 25%, contrasting with the previous rate of 37%.
              </p>
              <h4>Presumptive Taxation Scheme for proprietorship</h4>
              <p>
                The Presumptive Taxation Scheme for proprietorship is a
                provision in the Income Tax Act designed to ease the tax burden
                on small taxpayers in India. This form of taxation for sole
                proprietorship in India is to enable small businesses to operate
                without the heavy compliance obligations. Businesses that opt
                for this scheme can calculate their income based on an estimated
                basis using Section 44AD. This scheme allows taxpayers to pay
                taxes at a minimum rate and eliminates the requirement to
                maintain detailed accounting records.
              </p>
              <h4>Deadline for Proprietorship Tax Return Filing</h4>
              <p>
                The deadline for filing an income tax return for a
                proprietorship in India varies depending on certain factors
                outlined in the taxation for sole proprietorship in India,
                Income Tax Act of 1961:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>No Audit Required:</strong> If your proprietorship
                      does not need an audit, the income tax return must be
                      filed by July 31st.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Audit Required:</strong> If your proprietorship
                      requires an audit, the deadline for filing the income tax
                      return is September 30th.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        International Transactions or Specific Entities:
                      </strong>{" "}
                      The deadline for filing the income tax return is November
                      30th for proprietorships engaged in international
                      transactions or specific domestic entities.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Required Documents for Proprietorship Income Tax Return Filing
              </h3>
              <p>
                If you're a sole proprietor looking to file an Income Tax Return
                (ITR) for your Proprietorship Firm, make sure you have the
                following essential documents ready:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> PAN Card
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Bank Account Details
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhar Card
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Advance Tax Payment
                      Challan
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Form 16, 16A, and 26AS
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These documents must be kept for the payment and filing of
                income tax for sole proprietorship.&nbsp;
              </p>
              <h3>Filing an Income Tax Return for a Proprietorship</h3>
              <p>
                When it comes to filing ITR for proprietorships, it's important
                to note that these businesses are typically required to file
                annually unless exempted. The income tax of a proprietorship is
                treated as the owner's personal income.{" "}
              </p>
              <p>
                Depending on the nature of your proprietorship, you will use one
                of two forms:
              </p>
              <h4>Form ITR-3</h4>
              <p>
                ITR-3 form is used to file income tax for proprietorships run by
                a Hindu Undivided Family (HUF) or any other proprietor.
              </p>
              <h4>Form ITR-4 Sugam</h4>
              <p>
                Specifically designed for proprietorships under presumptive tax
                schemes, Form ITR-4 aims to reduce the compliance burden on
                small businesses.
              </p>
              <p>
                It's important to note that the income tax of a proprietorship
                is considered the same as that of the Proprietor. This means
                that the business income is added to the Proprietor's personal
                income, making the business taxes equivalent to those of the
                Proprietor. The Proprietor remains eligible for all tax
                deductions applicable to individuals or Hindu Undivided Families
                (HUF), as relevant.
              </p>
              <h3>TDS Return Filing</h3>
              <p>
                TDS returns are mandatory for proprietors with a valid TAN. The
                type of TDS return to be filed depends on the purpose of
                deduction, including Form 24Q for TDS on Salary, Form 27Q for
                TDS involving non-resident foreign companies, Form 26QB for TDS
                on property transfers, and Form 26Q for TDS in other cases.
              </p>
              <h3>GST Return Filing</h3>
              <p>
                Proprietors must register their sole proprietorship for GST if
                their business turnover exceeds Rs. 20 lakhs. Under GST, they
                must file GSTR-1 and GSTR-3B returns, which detail outward and
                inward supplies of taxable goods and services, along with tax
                payments. The chosen GST scheme determines the frequency of
                filing.
              </p>
              <h3>EPF Return Filing</h3>
              <p>
                EPF (Employees' Provident Fund) registration is required for
                proprietors employing more than 20 individuals. This mandates
                the filing of EPF returns.
              </p>
              <h3>Accounting and Bookkeeping</h3>
              <p>
                Sole proprietors must maintain proper books of accounts if their
                sales/turnover/gross receipts exceed Rs. 25,00,000 or if their
                business income exceeds Rs. 2,50,000 in any of the preceding
                three years.
              </p>
              <h3>Proprietorship Firm Audit</h3>
              <p>
                The audit of a proprietorship depends on its annual turnover and
                specific circumstances. Here are three scenarios that require an
                audit:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Turnover Exceeds Rs 5 Crore:</strong> If a
                      proprietorship's annual turnover crosses Rs.5 crore during
                      the assessment year, it must be audited. This rule applies
                      to businesses involved in trade or commerce.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Professional Proprietorship with Receipts Over Rs 50
                        Lakh:
                      </strong>{" "}
                      An audit is necessary for professional proprietorships
                      like consultancies or service-based businesses if their
                      total receipts go beyond Rs 50 lakh.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Proprietorship under Presumptive Tax Scheme:
                      </strong>{" "}
                      Regardless of the annual turnover, it requires an audit if
                      a proprietorship falls under any presumptive tax scheme.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The regulations for auditing a proprietorship are outlined in
                the Income Tax Act of 1961, stating that a certified Chartered
                Accountant (CA) must conduct the audit. This audit ensures that
                the financial information of the proprietorship is accurate and
                complies with the law.
              </p>
              <h3>Streamline Proprietorship Compliance with LegallensIndia</h3>
              <p>
                LegallensIndia is your reliable partner in fulfilling the
                compliance needs of your Sole Proprietorship. We simplifies the
                filing of Income Tax Returns, ensuring you meet the deadlines
                and adhere to tax regulations.
              </p>
              <p>
                We also support TDS Return filing, helping you accurately report
                deductions. For businesses registered under GST, our services
                include hassle-free GST Return filing, covering both GSTR-1 and
                GSTR-3B.
              </p>
              <p>
                LegallensIndia can assist in EPF Return filing, ensuring
                Compliance with employee provident fund regulations. With
                LegallensIndia, you can focus on growing your Sole
                Proprietorship while we care for your compliance needs, ensuring
                your business's financial health and legal standing.
              </p>
              <p>
                Ready to file your Proprietorship Income Tax Return with ease?
                Get started now!
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
