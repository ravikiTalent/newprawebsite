import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ProfessionalTaxRegistration() {
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
                Professional Tax Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Professional tax is a direct tax levied on persons earning an
                income by either practicing a profession, employment, calling,
                or trade.
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
                { id: 2, title: "Registrations", url: "Registrations" },
                { id: 3, title: "Professional Tax Registration", url: "" },
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
                        Professional Tax Registration
                      </h5>
                      <p>
                        Professional tax is a direct tax levied on persons
                        earning an income by either practicing a profession,
                        employment, calling, or trade.
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
                Professional Tax Registration Certificate and Compliance
              </h2>

              <p>
                Professional tax is a direct tax levied on persons earning an
                income by either practicing a profession, employment, calling,
                or trade. Unlike income tax imposed by the Central Government,
                professional tax payment is levied by the government of a state
                or union territory in India. In the case of salaried and wage
                earners, the professional tax is liable to be deducted by the
                Employer from the salary/wages, and the same is to be deposited
                to the state government. In the case of other classes of
                individuals, this tax is liable to be paid by the employee
                himself. The tax calculation and amount collected may vary from
                one State to another, but it has a maximum limit of Rs. 2500/-
                per year. To comply with these rules, the P tax registration
                must be completed by the respective entity without fail.
              </p>
              <p>
                <strong>
                  <em>
                    Get expert help from LegallensIndia for seamless
                    professional tax payment based on your state's rules and
                    regulations!
                  </em>
                </strong>
              </p>
              <h3>Professional Tax Applicability</h3>
              <p>
                This tax is levied on all kinds of professions, trades, and
                employment. Professional tax payment is applicable to the
                following classes of persons:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}An Individual
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}A Hindu Undivided Family
                      (HUF)
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}A
                      Company/Firm/Co-operative Society/Association of persons
                      or a body of individuals, whether incorporated or not
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The professionals earning an income from salary or other
                practices such as a lawyer, teachers, doctors, chartered
                accountants, etc. are required to do P tax registration, obtain
                P tax certificate and pay professional tax.
              </p>
              <h3>Professional Tax Applicable States across India</h3>
              <p>
                Please refer to the following table to know more about the
                states which impose PTRC registration in India:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Applicable States</strong>
                    </th>
                    <th className="border">
                      <strong>Non-Applicable States</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Andhra Pradesh</td>
                    <td className="border">Central</td>
                  </tr>
                  <tr>
                    <td className="border">Assam</td>
                    <td className="border">Andaman and Nicobar Islands</td>
                  </tr>
                  <tr>
                    <td className="border">Bihar</td>
                    <td className="border">Arunachal Pradesh</td>
                  </tr>
                  <tr>
                    <td className="border">Gujarat</td>
                    <td className="border">Chandigarh</td>
                  </tr>
                  <tr>
                    <td className="border">Jharkhand</td>
                    <td className="border">Chhattisgarh</td>
                  </tr>
                  <tr>
                    <td className="border">Karnataka</td>
                    <td className="border">Dadra and Nagar Haveli</td>
                  </tr>
                  <tr>
                    <td className="border">Kerala</td>
                    <td className="border">Daman and Diu</td>
                  </tr>
                  <tr>
                    <td className="border">Madhya Pradesh</td>
                    <td className="border">Delhi</td>
                  </tr>
                  <tr>
                    <td className="border">Maharashtra</td>
                    <td className="border">Goa</td>
                  </tr>
                  <tr>
                    <td className="border">Manipur</td>
                    <td className="border">Haryana</td>
                  </tr>
                  <tr>
                    <td className="border">Meghalaya</td>
                    <td className="border">Himachal Pradesh</td>
                  </tr>
                  <tr>
                    <td className="border">Mizoram</td>
                    <td className="border">Jammu and Kashmir</td>
                  </tr>
                  <tr>
                    <td className="border">Nagaland</td>
                    <td className="border">Ladakh</td>
                  </tr>
                  <tr>
                    <td className="border">Odisha</td>
                    <td className="border">Lakshadweep</td>
                  </tr>
                  <tr>
                    <td className="border">Pondicherry</td>
                    <td className="border">Rajasthan</td>
                  </tr>
                  <tr>
                    <td className="border">Punjab</td>
                    <td className="border">Uttar Pradesh</td>
                  </tr>
                  <tr>
                    <td className="border">Sikkim</td>
                    <td className="border">Uttarakhand</td>
                  </tr>
                  <tr>
                    <td className="border">Tamil Nadu</td>
                    <td className="border"></td>
                  </tr>
                  <tr>
                    <td className="border">Telangana</td>
                    <td className="border"></td>
                  </tr>
                  <tr>
                    <td className="border">Tripura</td>
                    <td className="border"></td>
                  </tr>
                  <tr>
                    <td className="border">West Bengal</td>
                    <td className="border"></td>
                  </tr>
                </tbody>
              </table>
              <p>
                These are the applicable and non-applicable states subjected to
                registration and obtain Professional tax number.
              </p>
              <h3>Professional Tax Rate</h3>
              <p>
                The maximum amount payable per annum towards professional tax is
                INR 2,500. The professional tax is usually a slab amount based
                on the gross income of the professional. It is deducted from his
                income every month.
              </p>
              <p>
                The Commercial Taxes Department of a state/union territory is
                the nodal agency that collects professional tax on the basis of
                predetermined tax slabs which vary for each state and union
                territory. The tax is calculated on the annual taxable income of
                the individual; however, it can be paid either annually or
                monthly.
              </p>
              <h3>Who Pays Profession Tax?</h3>
              <p>
                In the case of Salaried and Wage-earners, the Professional Tax
                is liable to be deducted by the Employer from the Salary/Wages,
                and the Employer is liable to deposit the same with the state
                government.
              </p>
              <p>
                Self-employed persons who carry out their profession or trade on
                their own and fall in the ambit of profession tax are liable to
                pay the tax themselves to the state government. This class of
                people must done the registration and obtain Professional tax
                number.&nbsp;
              </p>
              <h3>Employer’s Responsibility for Professional Tax</h3>
              <p>
                The owner of a business is responsible for deducting
                professional tax from the salaries of his employees and paying
                the amount so collected to the appropriate government
                department. He/she has to furnish a return to the tax department
                in the prescribed form within the specified time. The return
                should include proof of tax payment. In case of not enclosing
                the payment proof, the register will consider the return
                incomplete and invalid. Thus, all the entities with a
                professional tax enrollment certificate must pay the
                professional tax in the specified time.
              </p>
              <h3>Exemptions for Professional Tax Payment</h3>
              <p>
                There are exemptions provided for certain individuals to pay
                Professional Tax under the Professional Tax Rules. The following
                individuals are exempted from paying Professional Tax and PTRC
                registration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}Parents of children with
                      permanent disability or mental disability
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Members of the forces as
                      defined in the Army Act, 1950, the Air Force Act, 1950,
                      and the Navy Act, 1957 including members of auxiliary
                      forces or reservists, serving in the State.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Badli workers in the
                      textile industry
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}An individual suffering
                      from a permanent physical disability (including blindness)
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Women exclusively engaged
                      as agents under the Mahila Pradhan Kshetriya Bachat Yojana
                      or Director of Small Savings.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Parents or guardians of
                      individuals suffering from a mental disability.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Individuals, above 65
                      years of age
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Professional Tax Registration Certificate and Compliance</h3>
              <p>
                P Tax registration for professionals is mandatory within 30 days
                of employing staff in a business or, in the case of
                professionals, 30 days from the start of the practice.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}Application for a P tax
                      certificate should be made to the assessed state tax
                      department within 30 days of employing staff for his
                      business.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}If the assessee has more
                      than one place of work, then the application should be
                      made separately to each authority with respect to the
                      place of work under the jurisdiction of that authority.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Due Dates for Professional Tax Payment</h3>
              <p>
                If an employer has employed more than 20 employees, he is
                required to make the payment within 15 days from the end of the
                month. However, if an employer has less than 20 employees, he is
                required to pay quarterly (i.e. by the 15th of next month from
                the end of the quarter).
              </p>
              <h3>Professional Tax Return</h3>
              <p>
                The Professional Tax Return is to be filed by all the persons
                who are subject to professional tax and the due dates for filing
                of such returns vary from State to State.
              </p>
              <h3>Benefits of Professional Tax Registration</h3>
              <p>
                The benefits of P tax registration for professionals are given
                below.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}It is simple to comply
                      with the Professional Tax Compliance, which results in a
                      smooth P tax registration process with minimum
                      restrictions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}It is compulsory to pay
                      Professional tax and complete PTRC registration as per the
                      law. Hence, the timely payment of Professional tax can
                      help avoid penalties and any punitive action against the
                      Employer or a self-employed person.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Professional Tax
                      Compliance is simple, which can enable a smooth and
                      hassle-free Registration Process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}The Professional Tax acts
                      as a revenue source for the state governments that helps
                      the government to implement schemes for the various
                      welfare and development of the region.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}The Employer or the
                      self-employed person with a professional tax enrollment
                      certificate can claim a deduction on the previously paid
                      professional tax.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents required for Professional Tax Registration</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}Certificate of
                      Incorporation / LLP Agreement
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}MOA and AOA
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}PAN Card of
                      Company/LLP/Proprietor/Owner/Director
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}NOC from the landlord,
                      where the business is situated
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Passport size photos of
                      Proprietor/Owner/Director
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Address and identity
                      proof of Proprietor/Owner/Director
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Details of employees and
                      salaries paid
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}Additional registrations
                      and licenses
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How to Register for Professional Tax?</h3>
              <p>
                <strong>Professional tax registration process:&nbsp;</strong>The
                process for fulfilling professional tax obligations varies by
                state. Additionally, filing deadlines for these taxes also
                differ depending on state regulations. Professionals/Employers
                required to follow the procedures outlined below for how to
                register for professional tax and pay the tax.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}The applicant must file
                      the application form and the requisite documents.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}The applicant needs to
                      submit the Application with the necessary documents to the
                      concerned state government. A copy of the same should also
                      be submitted to the tax department.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}On receipt of an
                      application, the tax authority shall scrutinize the
                      application to ensure that all the information is correct.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Issue of P Tax Certificate:</strong> The authority
                      will issue the P tax certificate after successfully
                      scrutinizing all the documents.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Penalties Related To Professional Tax Registration</h3>
              <p>
                When professional tax policy becomes applicable, all such
                jurisdictions may impose a penalty for failure to register
                Profession Tax. However, the precise amount of the Penalty will
                depend on state regulatory law.
              </p>
              <p>
                There are also penalties for failing to submit the PT return by
                the deadline and withholding payments after they are due. Each
                state’s professional tax regulations determine the actual fine.
                Businesses that fail to register professional tax, pay taxes
                late, or file returns on time may face fines, late fees, or
                imprisonment.
              </p>
              <p>
                Failure to make a payment by the due date and failure to file a
                return by the due date carries additional penalties. For
                example, the following information outlines the penalty amount
                imposed by the Maharashtra Government for late filing or failure
                to pay Professional Tax in Maharashtra.
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Nature of default</strong>
                    </th>
                    <th className="border">
                      <strong>Penalty Leviable</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Not obtaining PT registration</td>
                    <td className="border">Rs.5/- per day</td>
                  </tr>
                  <tr>
                    <td className="border">Late filing of PT return</td>
                    <td className="border">Rs.1,000/-</td>
                  </tr>
                  <tr>
                    <td className="border">Late payment of PT dues</td>
                    <td className="border">Interest @1.25% p.m.Penalty @10%</td>
                  </tr>
                </tbody>
              </table>
              <p>
                For example, professional tax of Rs.1 Lakh is delayed by 12
                months, then the simple interest payable is Rs.1,250/- and a
                Penalty of Rs.10,000. Total= Rs.11,250
              </p>
              <p>
                Maximum Penalty for delay in payment of Rs.1 Lakh for a year and
                return filing also delayed = 12250
              </p>
              <h3>
                Seamless Professional Tax Registration Services with
                LegallensIndia
              </h3>
              <p>
                LegallensIndia can assist you in simplifying the process of
                obtaining a Professional Tax Registration Certificate in India.
                Here's how our services can benefit you:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Guidance:</strong> LegallensIndia provides
                      expert guidance on the Tax Registration process for
                      professionals. Our team is well-versed in the nuances of
                      tax regulations and can ensure that your registration
                      complies with the latest rules.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Application Submission:</strong> LegallensIndia
                      will handle submitting your Tax Registration application
                      to the relevant authorities on your behalf. This ensures
                      accuracy and compliance with all legal requirements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Timely Processing:</strong> With LegallensIndia'
                      professional handling, you can expect timely processing of
                      your application, reducing waiting times and allowing you
                      to obtain your P tax certificate promptly.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Customized Support:</strong> LegallensIndia
                      understands that each business and profession has unique
                      requirements. We offer personalized support tailored to
                      your needs, ensuring your registration aligns perfectly
                      with your professional status.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance Assurance:</strong> Staying updated
                      with ever-changing tax laws and regulations is crucial.
                      LegallensIndia pays attention to the details, ensuring
                      that your registration complies with all necessary tax
                      laws and guidelines.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Customer Support:</strong> Should you have any
                      questions or concerns during the registration process,
                      LegallensIndia' customer support team is readily available
                      to address your queries and provide timely assistance.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                By choosing LegallensIndia to meet your Professional Tax
                obligations, you can confidently simplify the process and
                navigate the complexities of tax regulations.
              </p>
              <p>
                <em>
                  File Your Professional Taxes Efficiently with LegallensIndia!
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
