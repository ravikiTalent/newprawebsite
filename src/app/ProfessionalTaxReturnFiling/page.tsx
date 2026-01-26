import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ProfessionalTaxReturnFiling() {
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
                Professional Tax Return Filing
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Professional Tax Return Filing is mandatory for individuals and
                businesses registered under the Professional Tax Act.
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
                { id: 3, title: "Professional Tax Return Filing", url: "" },
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
                      <h5 className="card-title">
                        Professional Tax Return Filing
                      </h5>
                      <p>
                        Professional Tax Return Filing is mandatory for
                        individuals and businesses registered under the
                        Professional Tax Act.
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

              <h2 className="display-4 mb-3">Professional Tax Return Filing</h2>
              <p>
                Professional Tax Return Filing is mandatory for individuals and
                businesses liable to pay Professional Tax. Professional Tax is a
                tax levied by the State Government on salaried individuals,
                professionals, or persons engaged in any trade, calling, or
                employment. In contrast, Professional Tax Return is a document
                filed with the state government containing details of the Tax
                paid by the individual or business.
              </p>
              <p>
                Filing Professional Tax Returns can be a complex and
                time-consuming process. LegallensIndia provides Professional Tax
                Return Filing services to assist clients in fulfilling their tax
                obligations. Our team of experts at LegallensIndia ensures that
                the entire process of PT return filing is completed promptly and
                hassle-free. We provide end-to-end assistance for PT annual
                return, from the collection of documents to the submission of
                the tax return and payment of Professional Tax. Contact us today
                to avail of our PT return filing service and ensure compliance
                with the rules and regulations of the state government.
              </p>
              <h3>Professional Tax</h3>
              <p>
                Professional Tax is a form of direct taxation imposed on
                individuals who earn an income through employment, profession,
                calling, or trade, unlike the income tax that the Central
                Government levies, Professional Tax is imposed by the government
                of a particular state or union territory in India.
              </p>
              <p>
                For salaried and wage-earning individuals, the employer is
                responsible for deducting the professional Tax from the salary
                or wages and depositing it with the state government. However,
                in the case of other individuals, they must to pay the
                professional Tax themselves. The calculation of Tax and the
                amount collected may differ from one state to another, but there
                is a maximum limit of Rs. 2500 per year.
              </p>
              <h3>Professional Tax Return</h3>
              <p>
                A professional Tax Return is a document that must be filed by
                individuals or businesses liable to pay Professional Tax. It is
                a form that contains details of the Income earned by the
                individual or business and the Tax paid during the financial
                year, applicable for PT annual return. The Professional Tax
                Return filing is filed with the relevant state government
                department.
              </p>
              <h3>Professional Tax Return Applicability</h3>
              <p>
                PT return filing is mandatory for all individuals and businesses
                liable to pay Professional Tax as per the rules and regulations
                of the state government. The tax liability and filing frequency
                may vary from state to state.
              </p>
              <p>
                For salaried and wage-earning individuals, the employer is
                responsible for deducting the Professional Tax from the salary
                or wages and depositing it with the state government. However,
                in the case of other individuals, they must to pay the
                Professional Tax themselves and file the return accordingly.
              </p>
              <h3>Professional Tax/Return Applicable States across India</h3>
              <p>
                Professional Tax is a state-level tax, and it is applicable in
                various states across India. The following is a list of states
                where Professional Tax is applicable:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Andhra Pradesh
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Assam
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Bihar
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Chhattisgarh
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Gujarat
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Karnataka
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Kerala
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Madhya Pradesh
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Maharashtra
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Manipur
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Meghalaya
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Mizoram
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Nagaland
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Odisha
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Punjab
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Rajasthan
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Tamil Nadu
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Telangana
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Tripura
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Uttar Pradesh
                    </li>
                    <li>
                      <i className="uil uil-check"></i> West Bengal
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The list of states where Professional Tax is applicable also
                applies to Professional Tax return filing. Taxpayers in these
                states must file their Professional Tax return within the
                specified time to avoid penalties and legal consequences.
              </p>
              <h3>Professional Tax slab rate</h3>
              <p>
                The Professional Tax slab rate varies from state to state in
                India. Each state has its slab and rate for Professional Tax
                based on the taxpayer's Income. Generally, the Professional Tax
                slab rate is divided into different categories, such as:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Monthly Income less than
                      Rs. 15,000
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Monthly Income between
                      Rs. 15,001 to Rs. 25,000
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Monthly Income above Rs.
                      25,000
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It is important to note that Professional Tax is a state-level
                tax, and hence, the slab rate may vary from state to state.
                Taxpayers must comply with their respective states' applicable
                regulations while doing Professional tax return filing.
              </p>
              <h3>Who Files Profession Tax Returns?</h3>
              <p>
                The responsibility of Professional tax return filing varies
                based on the type of taxpayer.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> For salaried and wage
                      earners, the employer deducts the Professional Tax from
                      their salaries or wages and deposits it with the state
                      government. Therefore, it is the employer's responsibility
                      to file the Professional Tax Return.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> In the case of
                      self-employed individuals, they must pay the Professional
                      Tax themselves, and it is their responsibility to file the
                      Professional Tax Return.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> In some states,
                      employers are also required to file a return for
                      self-employed individuals under their employment.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">PTRC Return Filing: Employer’s Obligations</h3>
              <p>
                As per the regulations, it is the responsibility of the business
                owner to deduct professional Tax from their employees' salaries
                and remit the collected amount to the relevant government
                department. Additionally, the employer must file a Professional
                Tax Return in the prescribed format within the stipulated time
                frame, providing proof of tax payment. Failure to enclose the
                payment proof with the return will render the filing incomplete
                and invalid, and the relevant authorities will take appropriate
                action.
              </p>
              <h3>Exemption for Filings Professional Tax</h3>
              <p>
                In addition to the general exemptions from paying Professional
                Tax, there are exemptions for certain individuals from filing
                Professional Tax Returns under the Professional Tax Rules. The
                following individuals are exempted from filing Professional Tax
                Returns:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Individuals with
                      professional tax liability below the prescribed limit.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Parents of children with
                      mental or permanent disabilities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Individuals with
                      permanent physical disabilities (including blindness).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Members of the armed
                      forces as defined in the Army Act of 1950, Air Force Act
                      of 1950, and Navy Act of 1957, including auxiliary or
                      reservist members serving in the state.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Badli workers in the
                      textile industry.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Parents or guardians of
                      individuals with mental disabilities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Women exclusively
                      engaged as agents under the Mahila Pradhan Kshetriya
                      Bachat Yojana or Director of Small Savings.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Individuals above 65
                      years of age.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">PT Return Due Date</h3>
              <p>
                The Professional Tax Return need to be filed by all persons with
                Professional Tax Registration, and the PT return due date might
                vary from State to State.
              </p>
              <h3>Benefits of PT Return Filing</h3>
              <p>
                PTRC Return Filing (Professional Tax Registration Certificate)
                has several benefits for taxpayers and the government. Some of
                these benefits are:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Avoidance of Penalties and Legal Consequences:
                      </strong>{" "}
                      Filing the Professional Tax Return on time and paying the
                      tax liability on time can help taxpayers avoid penalties
                      and legal consequences. We file your returns before the
                      professional tax return due date.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance with Applicable Laws:</strong> Filing
                      the Professional Tax Return helps ensure compliance with
                      the applicable laws and regulations, which can prevent
                      legal issues and consequences.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Improved Creditworthiness:</strong> Filing the
                      Professional Tax Return on time and maintaining a clean
                      tax record can improve the taxpayer's creditworthiness and
                      help them access credit facilities from banks and
                      financial institutions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Access Social Security Benefits:</strong> Filing
                      the Professional Tax Return can help individuals access
                      social security benefits such as medical insurance,
                      pension, and other government welfare schemes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Easy and Convenient:</strong> Filing the
                      Professional Tax Return or PT annual return is a simple
                      and convenient process, and with the advent of online
                      filing, it has become even more accessible and easy.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Increased Revenue for the Government:</strong>{" "}
                      Filing for professional tax returns helps the government
                      track the tax liability of individuals and entities and
                      ensures that they pay the correct amount of Tax, which in
                      turn helps increase the revenue for the government.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents required for Professional Tax Return filing</h3>
              <p>
                The documents required for PT Return filing may vary from state
                to state. However, some of the common documents that are
                required for filing professional tax returns are:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> PAN Card
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhaar Card
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Voter ID or Passport
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Bank account details
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Salary details or income
                      proof
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Registration Certificate
                      or Shop and Establishment Certificate
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Challans or payment
                      receipts for Professional Tax payment
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Details of the Tax
                      deducted at source (TDS) from the salary
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Any other document required by the state government.</p>
              <h3>Procedure for Professional Tax Return Filing</h3>
              <p>
                The procedure for PTRC Return filing may vary slightly depending
                on the state regulations, but the general steps are as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Obtain the Professional Tax Registration Certificate:
                      </strong>{" "}
                      Before filing the return, it is essential to have a
                      Professional Tax Registration Certificate from the
                      relevant state authority.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Determine the applicable slab and rate:</strong>{" "}
                      The rate and slab for Professional Tax may vary from state
                      to state. It is important to determine the applicable slab
                      and rate based on the Income earned and the profession.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Collect the necessary documents:</strong> Collect
                      all the necessary documents, such as salary/wage slips,
                      proof of tax payment, and any other relevant documents
                      required for the return.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Prepare the return:</strong> Prepare the return in
                      the prescribed format provided by the state authority.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Submit the return:</strong> Submit the return
                      along with the required documents to the designated office
                      of the state authority.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Pay the Tax:</strong> Pay the Professional Tax
                      due, if any, along with the return.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Obtain acknowledgment:</strong> Obtain
                      acknowledgment of the return filing and tax payment made.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It is important to file the return and pay the Tax within the
                specified due dates to avoid penalties and legal consequences.
              </p>
              <h3>Penalties for failing to File Professional Tax Return</h3>
              <p>
                Penalties for failing to submit a Professional Tax (PT) return
                on time or withholding payments after the due date can vary
                based on each state's professional tax regulations.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Businesses that do not
                      register for PT pay taxes late or miss the PT return due
                      date can face penalties, late fees, or even imprisonment.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> In addition, there are
                      penalties for late payment or failure to file a return by
                      the due date.
                    </li>
                  </ul>
                </div>
              </div>
              <p>For example, Maharashtra Government imposes a penalty of</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Rs. 5/- per day for not
                      obtaining PT registration
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Rs. 1,000/- for late
                      filing of Professional tax return
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Interest at the rate of
                      1.25% per month and a penalty of 10% for late payment of
                      PT dues.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                To illustrate, if the professional Tax of Rs. 1 Lakh is delayed
                by 12 months, then the simple interest payable would be Rs.
                1,250/-, and the penalty would be Rs. 10,000/-. The total
                penalty in this case would be Rs. 11,250/-. The maximum penalty
                for a delay in payment of Rs. 1 Lakh for a year, along with
                delayed return filing, is Rs. 12,250/-.
              </p>
              <h3>
                Why Choose LegallensIndia for Professional Tax Return Filing
                Service?
              </h3>
              <p>
                Our team of experts provides end-to-end assistance for
                Professional Tax Return Filing, ensuring compliance with the
                rules and regulations of the state government. We file
                Professional Tax Returns promptly, helping clients avoid
                penalties and legal consequences.
              </p>
              <p>
                Our Professional Tax Return Filing service is hassle-free,
                allowing clients to focus on business operations. We provide
                affordable professional Tax Return Filing services and ensuring
                that our clients get value for their money.
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
