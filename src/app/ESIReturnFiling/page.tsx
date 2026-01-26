import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ESIReturnFiling() {
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
              <h1 className="display-1 text-white mb-3">ESI Return Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Employee State Insurance (ESI) registration is a critical
                requirement for businesses in India, ensuring their employees
                are covered under the ESI scheme, which provides a range of
                social security benefits.
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
                { id: 3, title: "ESI Return Filing", url: "" },
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
                      <h5 className="card-title">ESI Return Filing</h5>
                      <p>
                        Employee State Insurance (ESI) registration is a
                        critical requirement for businesses in India, ensuring
                        their employees are covered under the ESI scheme, which
                        provides a range of social security benefits.
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
                Expert Guidance on ESI Return Filing
              </h2>
              <p>
                Employee State Insurance (ESI) registration is a critical
                requirement for businesses in India, ensuring their employees
                are covered under the ESI scheme, which provides a range of
                social security benefits. Following registration, employers are
                mandated to file ESI returns quarterly, detailing the
                contributions made towards the scheme for each employee. These
                returns are crucial for maintaining compliance with the ESIC
                regulations and ensuring that employees can avail the benefits
                they are entitled to. At LegallensIndia, we specialize in
                simplifying this process for businesses. Our experts guide you
                through every step of ESI registration and the crucial process
                of how to file ESIC returns, ensuring accuracy, compliance, and
                peace of mind for employers and employees alike.
              </p>
              <h3>Employees' State Insurance (ESI) Scheme</h3>
              <p>
                Employees' State Insurance (ESI) is a comprehensive social
                security program designed to offer financial protection and
                healthcare benefits to employees in the event of unexpected
                circumstances. Funded by contributions from both employers and
                employees, this scheme ensures that insured workers and their
                families have access to medical services, financial support
                during illness or maternity, compensation for workplace-related
                disabilities, and coverage for funeral and confinement expenses.
                Additionally, in the tragic instance of an employee's death
                resulting from a work-related injury or illness, ESI provides
                financial assistance to the bereaved family, reinforcing the
                system's role in safeguarding employees' socio-economic
                well-being.
              </p>
              <p>
                LegallensIndia assists businesses with the process of ESI
                registration.
              </p>
              <h3>Who should Register for the ESI scheme?</h3>
              <p>
                The ESI scheme, overseen by the Employees' State Insurance
                Corporation (ESIC) and regulated by India's Ministry of Labour
                and Employment, requires contributions from both employers and
                employees, totaling 4% of an employee's monthly gross salary to
                the ESI fund. Businesses in India with a workforce of 10 or more
                are expected to proactively enroll with the ESIC within 15 days
                of becoming eligible.
              </p>
              <h3>Filing ESI Returns: An Overview</h3>
              <p>
                ESI Registered employers are required to submit ESI Returns
                every sixth month, providing critical information about the
                employees insured under the scheme, their salaries, and the
                contributions made by both the employer and the employees. These
                returns play a key role in verifying the accuracy of
                contributions to the ESI scheme and ensuring that insured
                employees are accessing the benefits they're entitled to.
                Understanding how to file ESIC returns is essential for
                businesses to ensure compliance with regulatory rules regarding
                employee welfare and healthcare contributions.
              </p>
              <p>
                All employers registered under the ESI scheme must file these
                returns by the prescribed ESIC return due date. Any delay or
                failure to do so can result in penalties and legal action.
              </p>
              <p>
                Filing ESI Returns offers several significant benefits for both
                employers and employees under the Employee State Insurance (ESI)
                scheme:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance: </strong>Timely filing of ESI Returns
                      ensures compliance with the ESI Act, helping employers
                      avoid legal penalties and fines associated with
                      non-compliance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Record Keeping: </strong>It maintains an accurate
                      and official record of all contributions made by and on
                      behalf of the employees, which can be referenced in future
                      audits or clarifications.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Benefit Entitlement: </strong>Filing returns is
                      essential for the validation of employees' entitlement to
                      the various benefits under the ESI scheme, such as
                      medical, maternity, disability, and dependent benefits.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transparency: </strong>Regular filing promotes
                      transparency in the financial and administrative aspects
                      of the ESI contributions, enhancing trust between
                      employers and employees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Dispute Resolution: </strong>In case of any
                      discrepancies or disputes regarding ESI contributions or
                      benefits, filed returns serve as a reliable reference
                      point for resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ease of Benefit Processing: </strong>Accurate and
                      timely filed returns facilitate the smooth processing of
                      claims and benefits for employees, ensuring they receive
                      support when needed without unnecessary delays.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Health: </strong>For businesses, regular
                      compliance with ESI regulations through return filing
                      reflects positively on their financial and operational
                      health, building credibility with stakeholders.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Updates and Adjustments: </strong>Filing returns
                      allows employers to update or correct any discrepancies in
                      employee details or contribution amounts, keeping the ESI
                      records accurate and current.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">ESI Return Filing Deadlines</h3>
              <p>
                <span>ESI Return Filing</span>
                <span>
                  {" "}
                  is a crucial aspect of Employer responsibilities under the
                  Employees' State Insurance (ESI) Act. These returns are
                  submitted to the Employees' State Insurance Corporation (ESIC)
                  to track contributions made by both employers and employees.
                </span>
              </p>
              <h4>
                <span>Monthly Contributions and Due Dates</span>
              </h4>
              <p>
                Employers are responsible for taking a portion of their
                employees' wages as ESI contributions. These contributions must
                be paid to the ESIC by the{" "}
                <strong>15th of the next month</strong>. For example, the filing
                due date for the ESI monthly contribution for September 2024 is
                October 15, 2024. Even if there are no active employees, private
                limited companies and one-person companies should file a "nil
                return". This payment schedule is the same as the Provident Fund
                (PF_ contribution system.
              </p>
              <h4>
                <span>Annual and Half-Yearly Returns</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Annual Return:</strong>
                      </span>
                      <span> This return is filed by </span>
                      <span>January 31st</span>
                      <span>
                        {" "}
                        of each year. It details any changes in the employer's
                        establishment or workforce that occurred during the
                        previous year.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Half-Yearly Contribution Returns:</strong>
                      <strong> </strong>These returns are submitted within 42
                      days of the end of each contribution period.
                    </li>
                    <div className="row gy-3 gx-xl-8">
                      <div className="col-xl-12">
                        <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                          <li>
                            <i className="uil uil-check"></i>{" "}
                            <strong>Contribution Period 1: </strong>It
                            <strong>&nbsp;</strong>ends on September 30th, and
                            the due date to file the returns is November 11th.
                          </li>
                          <li>
                            <i className="uil uil-check"></i>{" "}
                            <strong>Contribution Period 2:</strong>
                            <strong>&nbsp;</strong>It ends on March 31st, and
                            the last date to file the ESI returns is May 12th.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The following table sums up the ESI return filing due
                dates,&nbsp;
              </p>
              <table
                data-sheets-baot="1"
                data-sheets-root="1"
                className="table mb-5 border"
              >
                <tbody>
                  <tr>
                    <td className="border">
                      <strong>
                        <span>Return Type</span>
                      </strong>
                    </td>
                    <td className="border">
                      <strong>
                        <span>Due Date</span>
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <span>Monthly Contribution</span>
                    </td>
                    <td className="border">
                      <span>15th of the following month</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <span>Annual Return</span>
                    </td>
                    <td className="border">
                      <span>31st January of the following year</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <span>Half-yearly Contribution Returns</span>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Within 42 days of the end of each contribution period:
                        </span>
                        <strong>
                          <span>-</span>
                        </strong>
                        <span>
                          {" "}
                          Contribution Period 1 (Ends on 30th September): 11th
                          November
                        </span>
                        <strong>
                          <span>- </span>
                        </strong>
                        <span>
                          Contribution Period 2 (Ends on 31st March): 12th May
                        </span>{" "}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>Essential Documents for Filing ESI Returns</h3>
              <p>
                To ensure a smooth and compliant Employees' State Insurance
                return filing process, businesses must keep the following
                documents up-to-date and readily available:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Attendance register
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Attendance register
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Form 6
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Register of wages
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Accident register
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Cancelled cheque of the
                      company
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Inspection book
                    </li>
                    <li>
                      <i className="uil uil-check"></i> PAN card of the
                      organisation
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Monthly challans and
                      returns for ESI
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Consequences of Non-Payment or Late Payment of Employees’
                Contribution
              </h3>
              <p>
                Failing to deposit the ESI contributions deducted from
                employees' salaries is considered a serious violation, given
                that these amounts are entrusted to employers by their
                employees.The employer is entrusted with the employee's
                contribution deducted from wages, emphasizing a significant
                responsibility to deposit this amount with ESI.
              </p>
              <p>
                Failing to deposit or delaying the deposit of the employee's
                contribution constitutes a 'Criminal Breach of Trust,'
                punishable under IPC Sections 406 and 409, and is also an
                offence under ESI Act sections 85(b-g).
              </p>
              <p>
                Any discrepancies such as non-payment, delayed payments, or
                incorrect reporting under the ESI Act can lead to penalties,
                including imprisonment for up to 2 years and fines up to Rs
                5,000.
              </p>
              <h3>Consequences of Delayed Payment</h3>
              <p>
                If an employer does not make the required contributions within
                the specified timeframe, they will incur a simple interest
                charge of 12% annually for each day the payment is delayed.
              </p>
              <h3>Penalty Structure for Delayed or Unpaid ESI Contributions</h3>
              <p>
                For any non-payment or delays in making contributions, the
                Corporation has the authority to impose and collect damages
                according to the Regulations. These damages are set at rates
                proportionate to the duration of the delay, without exceeding
                the due contribution amount:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Delay under 2 months: </strong>Damages at 5% per
                      annum
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Delay between 2 to 4 months: </strong>Damages at
                      10% per annum
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Delay between 4 to 6 months: </strong>Damages at
                      15% per annum
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Delay over 6 months: </strong>Damages at 25% per
                      annum
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                In cases of non-compliance, the employer may face legal action
                under Section 85(a) initially, with the possibility of harsher
                penalties for subsequent violations. The ESI scheme aims to
                promote workers' welfare, and it is the employer's
                responsibility to fulfill this objective.
              </p>
              <h3>Procedure to File ESI Returns for Employers</h3>
              <p>
                Learning how to file ESIC return involves a series of steps
                employers must follow to ensure compliance with the Employee
                State Insurance Corporation (ESIC) regulations. Here’s a
                simplified guide on how to file an ESI return:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registration on ESIC Portal: </strong>If not
                      already registered, the employer must first register their
                      establishment on the ESIC portal by obtaining an ESIC
                      registration number.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Login to ESIC Portal: </strong>Employers need to
                      log in to the ESIC portal using their 17-digit employer
                      code and password.{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Employee Enrollment: </strong>Before filing
                      returns, ensure all eligible employees are registered on
                      the portal and their details are updated, including family
                      details for medical benefits.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Download the Return Form: </strong>The 'Return of
                      Contributions' form is available for download from the
                      ESIC portal. This form will contain pre-filled information
                      based on the monthly contributions made.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Review Contribution Details: </strong>Employers
                      should carefully review the contribution details in the
                      form for each employee, including the total days worked
                      and the amount of wages paid, to ensure accuracy.{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Correct Discrepancies if Any: </strong>If there
                      are any discrepancies or missing details, correct them
                      before proceeding. Ensure that all employee information
                      and contribution details are accurate and complete.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Submit the Return: </strong>After reviewing and
                      ensuring all data is correct, submit the return on the
                      ESIC portal. This process is entirely online, and no
                      physical documents need to be submitted.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Acknowledgment Receipt: </strong>Upon successful
                      submission, an acknowledgment receipt will be generated.
                      Employers should save and print this receipt for their
                      records and future reference.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Keep Records: </strong>Maintain a copy of the
                      filed returns and acknowledgment receipts for your records
                      and compliance audits.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regular Updates: </strong>Regularly update the
                      ESIC portal with any changes in employee details, salary
                      revisions, or additions and deletions of employees to keep
                      the records up to date for the next return filing.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How LegallensIndia Supports ESI Return Filing</h3>
              <p>
                LegallensIndia offers comprehensive assistance in both obtaining
                ESI registration and managing the ESI return filing process for
                businesses. Here's how we streamline the process:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Collection: </strong>An expert from
                      LegallensIndia specializing in ESI will gather all
                      necessary data and documents required for the ESI return
                      preparation specific to your business needs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Return Preparation: </strong>Utilizing the
                      collected documents and information, our ESI expert will
                      meticulously prepare your ESI return, ensuring accuracy
                      and compliance with regulations, and then submit it to you
                      for review and approval.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Return Filing: </strong>Following your
                      verification and consent, our dedicated ESI professional
                      will proceed to file the ESI return with the ESIC
                      department, completing the process efficiently and
                      securing your compliance.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                With LegallensIndia, you benefit from expert guidance and a
                hassle-free process, ensuring your ESI returns are prepared
                accurately and filed on time, meeting the crucial ESIC return
                due date.
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
