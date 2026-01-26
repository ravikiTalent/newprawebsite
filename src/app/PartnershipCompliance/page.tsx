import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function PartnershipCompliance() {
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
                Partnership Compliance
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                File your business tax returns and maintain compliance
                seamlessly through LegallensIndia.com.
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
                { id: 3, title: "Partnership Compliance", url: "" },
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
                      <h5 className="card-title">Partnership Compliance</h5>
                      <p>
                        File your business tax returns and maintain compliance
                        seamlessly through LegallensIndia.com.
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

              <h2 className="display-4 mb-3">Partnership Tax Return Filing</h2>
              <p>
                Partnership firms must understand the income tax rate for
                partnership firm and ensure to file the returns on or before the
                specified deadline.
              </p>
              <p>
                The submission of tax returns as per partnership firm tax rate
                is a fundamental responsibility for Partnership Firms in India.
                At LegallensIndia, we recognize the importance of complying with
                Indian taxation of partnership firm and the potential advantages
                associated with it. Our comprehensive services are meticulously
                crafted to aid business proprietors in navigating the intricate
                landscape of compliance. To simplify these compliance duties,
                LegallensIndia offers expert guidance, streamlining the process
                and eliminating hassles for business owners.
              </p>
              <p>
                By partnering with us, you can ensure compliance with income tax
                on partnership firms and explore opportunities to optimize your
                tax benefits as per income tax rate for partnership firm,
                enabling your business to thrive while adhering to tax
                regulations.
              </p>
              <h3>Partnership Firm</h3>
              <p>
                A partnership firm is a business entity formed by two or more
                individuals working together under a single enterprise. There
                are two main categories of partnership firms:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registered Partnership Firm:</strong> A registered
                      partnership firm is one that has undergone formal
                      registration with the RoC and has received a registration
                      certificate as evidence of its legal existence.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unregistered Partnership Firm:</strong> Any
                      partnership that lacks a registration certificate from the
                      Registrar of Firms is referred to as an unregistered
                      partnership.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Partnership, in essence, is an agreement entered into by two or
                more persons who have mutually consented to share the profits or
                losses arising from a jointly conducted business. The
                individuals involved in a partnership arrangement are
                individually known as partners and collectively referred to as a
                firm. Partners need to be aware of the partnership firm tax rate
                and how it affects the distribution of profits. Partners are
                responsible for maximizing firm advantage, fair dealings, and
                maintaining accurate records with full transparency for all
                partners' benefit.
              </p>
              <h3>Income Tax Return filing for Partnership Firm</h3>
              <p>
                Every partnership firm in India is obligated to file income tax
                returns annually as per partnership tax rate, regardless of
                whether the firm has generated income or incurred losses during
                the financial year. Understanding the partnership firm tax rate
                (30%) is crucial for making informed financial decisions within
                the business. Even if there was no business activity and the
                partnership firm's income is zero (NIL), filing an NIL income
                tax return within the stipulated income tax return for
                partnership firm due date is still mandatory.
              </p>
              <h4>Partnership Firm Income Tax slabs / LLP for AY 2023-24</h4>
              <p>
                Under the provisions of the Income Tax Act 1961, a partnership
                firm in India is subject to the following partnership firm
                income tax slab percentages:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Partnership firm tax rate:</strong> Partnership
                      firms are liable to pay income tax at a partnership firm
                      tax rate of 30% on their taxable income.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Surcharge on Partnership firm:</strong> If the
                      taxable income of the partnership firm exceeds one crore
                      rupees, a surcharge on partnership firm is 12% is
                      applicable in addition to the income tax.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Interest on Capital:</strong> Partnership firms
                      can claim a deduction of up to 12% on the interest paid on
                      capital.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Health and Education Cess:</strong> A 4% Health
                      and Education Cess is levied on the total tax amount,
                      including surcharges.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Marginal Relief :</strong> In case Net Income
                      exceeds 1 crore, the amount payable as income tax and
                      Surcharge shall not exceed the total amount payable as
                      income tax on Total Income of Rs.1 crore by more than the
                      amount of income that exceeds Rs.1 crore.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Minimum Alternate Tax for Partnership Firms</h4>
              <p>
                Similar to income tax applicable for a company, partnership
                firms are subject to minimum alternate Tax under the taxation of
                partnership firm. A minimum alternate tax of 18.5% of adjusted
                total income is applicable. Hence, income tax payable by a
                partnership firm's profits cannot be less than 18.5 percent
                (increased by income tax surcharge, education cess, and
                secondary and higher education cess).
              </p>
              <h4>Deductions Allowed</h4>
              <p>
                When computing the liability of income tax on partnership firm
                as usual based on partnership tax rate, deductions are permitted
                for the following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Remunerations or
                      interest paid to partners that do not conform to the terms
                      of the partnership agreement.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Salaries, bonuses,
                      remunerations, and commissions are paid to non-working
                      partners of the firm.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> If remuneration paid to
                      partners complies with the partnership deed but relates to
                      transactions that pre-date the partnership deed.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">ITR Forms for a Partnership Firm</h4>
              <p>
                Partnership Firms can file their ITR for income tax on
                partnership firms through Form ITR-4 or ITR-5.
              </p>
              <h4>ITR-4</h4>
              <p>
                ITR-4 is to be filed by those partnership firms which are a
                Total Income of up to 50 lakh and have income from Business and
                Profession, which is computed under presumptive basis.
              </p>
              <h4>ITR-5</h4>
              <p>
                ITR-5 is to be filed by those partnership firms who are required
                to get their account audited.
              </p>
              <h4>Income Tax Return for Partnership Firm Due Date</h4>
              <p>
                The deadline for filing ITR for a partnership firm depends on
                whether an audit is required:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> If the firm is not
                      subject to an audit, returns must be filed by 31st July.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> If an audit is
                      necessary, the firm must file its returns by 31st October.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Filing of GST Returns</h3>
              <p>
                Every GST-registered person is required to file GST Returns, and
                every partnership firm is required to be under GST if its
                aggregate annual turnover exceeds Rs. 20 lacs. Usually, the
                GST-registered partnership firms have to file GSTR-1, GSTR-3B,
                and GSTR-9 returns. If the firm has opted for a composition
                scheme, then GSTR-4 is to be filed.
              </p>
              <h3>TDS Return</h3>
              <p>
                The TDS Return is to be filed where the partnership firm has a
                valid TAN, and the type of return to be filed depends upon the
                purpose of deduction. The types of TDS Return are:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Form 24Q – TDS on Salary
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Form 27Q – TDS where the
                      deductee is a non-resident, foreign company
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Form 26QB – TDS on
                      payment for transfer of immovable property
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Form 26Q – TDS in any
                      other case
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">EPF Return filing</h3>
              <p>
                The partnership firm is required to get EPF registration if it
                employs more than ten persons, and accordingly, filing of EPF
                return becomes mandatory.
              </p>
              <h3>Accounting and bookkeeping</h3>
              <p>
                Books of account are required to be maintained if the
                partnership firm's sale/turnover/gross receipts from the
                business is more than Rs. 25,00,000 or the income from the
                business is more than Rs. 2,50,000 in any of the three preceding
                years.
              </p>
              <h3>Tax Audit</h3>
              <p>
                A partnership firm is required to have a tax audit carried out
                if the sales, turnover, or gross receipts of business exceed the
                partnership firm audit limit of Rs. 1 crore in the financial
                year. However, it may be required to get its account audited in
                certain other circumstances.
              </p>
              <h3>
                Streamline Partnership Firm Compliance with LegallensIndia
              </h3>
              <p>
                Streamline your partnership firm's compliance effortlessly with
                LegallensIndia. We are your trusted partner in meeting all your
                compliance requirements, simplifying the process, and ensuring
                you meet deadlines while adhering to tax regulations.
              </p>
              <p>Our comprehensive services cover various aspects:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Income Tax Return Filing:</strong> We make filing
                      your income tax returns a breeze, ensuring accuracy and
                      timeliness.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>TDS Return Filing:</strong> Our support extends to
                      TDS return filing, helping you accurately report
                      deductions and meet your obligations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>GST Return Filing:</strong> For GST-registered
                      businesses, we offer a hassle-free solution for filing
                      both GSTR-1 and GSTR-3B returns, ensuring you stay
                      compliant with GST regulations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>EPF Return Filing:</strong> We assist in EPF
                      return filing, ensuring compliance with employee provident
                      fund regulations.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                With LegallensIndia by your side, you can concentrate on growing
                your partnership firm while we take care of your compliance
                needs. This ensures your business maintains a strong financial
                footing and legal standing. We understand the intricacies of
                income tax on partnership firms, including tax slabs,
                deductions, and filing deadlines. Our team will guide you
                through the process efficiently and accurately.
              </p>
              <p>
                Are you ready to file your partnership firm's income tax return
                with ease? Get started now to experience the convenience and
                peace of mind that comes with our expert assistance.
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
