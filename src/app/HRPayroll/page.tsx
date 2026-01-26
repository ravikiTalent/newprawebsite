import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function HRPayroll() {
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
                HR and Payroll Service
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Managing HR and payroll efficiently is crucial for any business,
                and LegallensIndia simplifies this process with LEDGERS HR
                Software—an all-in-one.
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
                { id: 3, title: "HR and Payroll Service", url: "" },
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
                      <h5 className="card-title">HR and Payroll Service</h5>
                      <p>
                        Managing HR and payroll efficiently is crucial for any
                        business, and LegallensIndia simplifies this process
                        with LEDGERS HR Software—an all-in-one.
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
                HR &amp; Payroll Services – Get the Best Software for Your
                Business!
              </h2>
              <p>
                Managing HR and payroll efficiently is crucial for any business,
                and LegallensIndia simplifies this process with LEDGERS HR
                Software—an all-in-one, cloud-based payroll software designed to
                streamline employee management systems, payroll processing
                software, PF and ESI compliance, and automated salary tax
                calculation. Whether you're a startup seeking affordable payroll
                software for startups or an enterprise requiring advanced HR
                management software features, LEDGERS HR Software ensures
                accuracy, efficiency, and full compliance with Indian labour
                laws, making payroll seamless and hassle-free.
              </p>
              <p>
                <strong>
                  <em>
                    Get started with LEDGERS HR Software today! Simplify your
                    payroll, automate compliance, and focus on growing your
                    business—Sign up now!
                  </em>
                </strong>
              </p>
              <h3>What Are HR and Payroll Services?</h3>
              <p>
                HR and payroll services refer to the comprehensive management of
                employee-related processes, including salary processing, tax
                compliance, workforce management, and employee benefits. These
                services help businesses efficiently handle recruitment,
                attendance tracking, statutory compliance, leave management, and
                salary disbursement. A reliable HR and payroll system ensures
                smooth operations, eliminates errors, and improves overall
                business productivity.
              </p>
              <h3>Why HR and Payroll Services are Essential for Businesses?</h3>
              <p>
                HR software and payroll solutions are crucial for businesses of
                all sizes. Whether you are a startup, small business, or large
                enterprise, managing payroll and compliance effectively can
                impact employee satisfaction and business growth. Below are some
                key reasons why businesses need professional HR and payroll
                services:
              </p>
              <h4>Ensuring Compliance with Labor Laws</h4>
              <p>
                Every business must comply with government regulations related
                to employee wages, taxes, and benefits. Payroll compliance
                includes:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Provident Fund (PF)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Employee State Insurance
                      (ESI)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Professional Tax (PT)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Income Tax (TDS on
                      Salary)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Minimum Wages and Bonus
                      Act
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Labor Laws and Gratuity
                      Regulations
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Failing to comply with these laws can lead to penalties and
                legal issues.
              </p>
              <h4>Reducing Administrative Workload</h4>
              <p>
                Managing HR and payroll manually can be time-consuming.
                Automating these processes using human resources software allows
                businesses to:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Focus on core business
                      functions
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Reduce paperwork and
                      manual errors
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Improve efficiency and
                      accuracy
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Enhancing Employee Satisfaction</h4>
              <p>
                Employees expect timely and accurate salary payments. Delayed
                salaries, incorrect tax deductions, or unprocessed benefits can
                impact employee morale. A reliable employee payroll system
                ensures:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> On-time salary
                      disbursements
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Automated salary TDS
                      calculation
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Access to payslips and
                      tax reports
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Cost-Effective HR Management</h4>
              <p>
                Hiring an in-house HR management software team can be expensive.
                Outsourcing payroll services to LegallensIndia offers a
                cost-effective solution while ensuring compliance and
                efficiency.
              </p>
              <h3>Common Challenges in HR and Payroll Management</h3>
              <p>
                Businesses that manage HR and payroll manually often face
                several challenges, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Risk of errors</strong> – Manual calculations can
                      lead to payroll discrepancies, impacting employee
                      satisfaction.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Time-consuming compliance processes</strong> –
                      Keeping up with tax regulations and labour laws requires
                      constant attention.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Difficulty in tracking attendance and leaves
                      </strong>{" "}
                      – Without an automated system, businesses struggle to
                      maintain accurate records.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Data security concerns</strong> – Storing payroll
                      information manually can lead to data breaches or loss.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Scaling issues</strong> – Growing businesses find
                      it hard to manage payroll as their workforce expands.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Implementing automated HR and payroll software helps overcome
                these challenges and ensures seamless payroll operations. This
                is where LEDGERS HR Software comes in, offering a comprehensive
                platform to streamline payroll, ensure compliance, and enhance
                workforce management.
              </p>
              <h3>Why Choose LEDGERS HR Software?</h3>
              <p>
                LEDGERS HR Software is a comprehensive human resources software
                that simplifies payroll processing software, time and attendance
                management, tax calculations, and compliance management. It
                eliminates manual errors, reduces administrative burden, and
                ensures that businesses remain legally compliant with PF and ESI
                regulations.
              </p>
              <p>With LEDGERS HR Software, businesses can:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Automate payroll
                      processing software to calculate salaries, deductions, and
                      taxes.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Ensure statutory
                      compliance, including automated salary tax calculation and
                      automated salary TDS calculation.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Manage employee payroll
                      system effortlessly with direct salary disbursement.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Track employee
                      attendance with time and attendance management
                      tools.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Leverage affordable
                      payroll software for startups to manage workforce finances
                      efficiently.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Securely store and
                      manage employee records in a cloud HR software
                      environment.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Access insightful HR
                      reports and MIS for decision-making.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Features of LEDGERS HR Software</h3>
              <p>
                Explore the powerful features of LEDGERS HR Software, designed
                to automate payroll processing, compliance management, employee
                attendance tracking, and more:
              </p>
              <h4>Payroll Processing &amp; Salary Calculation</h4>
              <p>
                Handling payroll manually can be time-consuming and error-prone.
                With LEDGERS HR Software, businesses can automate payroll
                processing software, deductions, bonuses, reimbursements, and
                tax filings. The payroll solutions provided ensure precision and
                compliance with government regulations.
              </p>
              <h4>Tax &amp; Compliance Management</h4>
              <p>
                Compliance with Indian tax regulations, including automated
                salary TDS calculation, Provident Fund (PF) filing, and
                Employees’ State Insurance (ESI) returns, is simplified with our
                platform. With assisted payroll services, businesses can avoid
                penalties and legal issues.
              </p>
              <h4>Time and Attendance Management</h4>
              <p>
                Tracking employee attendance is easier than ever with LEDGERS HR
                Software. Employers can integrate biometric attendance, track
                leaves, and generate reports automatically, ensuring smooth
                operations.
              </p>
              <h4>Cloud-Based HR and Payroll Software</h4>
              <p>
                As a cloud-based payroll software, LEDGERS allows businesses to
                manage payroll from anywhere. It offers secure access to data
                and integrates with accounting systems, ensuring seamless
                financial management.
              </p>
              <h4>Employee Self-Service Portal</h4>
              <p>
                Empower your employees with an employee management system that
                provides access to pay slips, tax forms, leave applications, and
                more. Employees can update personal details and download
                essential documents, reducing HR workload.
              </p>
              <h4>Workforce Management &amp; HR Reports</h4>
              <p>
                With workforce management software, businesses can efficiently
                manage employee lifecycles, from onboarding to retirement.
                Advanced reporting tools help in analysing salary trends,
                attendance patterns, and statutory filings.
              </p>
              <h3>Payroll Outsourcing – Hassle-Free Payroll Management</h3>
              <p>
                Managing payroll in-house can be complex and time-consuming,
                especially for businesses that need to focus on growth and
                operations. Payroll outsourcing is a cost-effective and
                efficient solution that allows businesses to delegate payroll
                processing, tax compliance, and salary disbursement to experts.
              </p>
              <p>
                At LegallensIndia, we offer assisted payroll services that
                handle everything from salary calculations to statutory
                compliance, ensuring businesses remain legally compliant without
                any hassles. With the integration of LEDGERS HR Software,
                businesses gain access to advanced, cloud-based payroll software
                that automates payroll calculations, tax filings, and compliance
                tracking—minimising manual errors and administrative burdens.
              </p>
              <h4>Why Outsource Payroll?</h4>
              <p>Outsourcing payroll offers several advantages, including:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Time Savings </strong>– Eliminates the need for
                      businesses to spend hours on payroll calculations, tax
                      deductions, and compliance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Error-Free Payroll Processing</strong> – Reduces
                      risks of miscalculations, incorrect tax deductions, and
                      compliance issues.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cost-Effective </strong>– Avoids the expenses of
                      hiring an in-house payroll team, software, and
                      administrative resources.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Compliance Handling </strong>– Ensures
                      accurate filing of TDS, PF, ESI, PT, and other
                      payroll-related compliances.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Data Security &amp; Confidentiality</strong> –
                      Protects sensitive payroll data from breaches and
                      unauthorised access.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Scalability </strong>– Easily accommodates
                      workforce growth without additional payroll management
                      complexities.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How LEDGERS HR Software Enhances Payroll Outsourcing</h3>
              <p>
                LegallensIndia’ payroll outsourcing services are powered by
                LEDGERS HR Software, a cutting-edge solution designed to
                simplify and automate payroll management:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>End-to-End Payroll Processing</strong> – Automates
                      salary computation, allowances, deductions, and
                      reimbursements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Automated Tax Calculations &amp; Filings </strong>
                      – Ensures accurate computation of TDS on salary, PF
                      contributions, ESI deductions, and professional tax
                      compliance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Seamless Salary Disbursement</strong> –
                      Facilitates direct bank transfers for employees with
                      secure processing.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Employee Benefits &amp; Compliance</strong> –
                      Manages gratuity, bonuses, leave encashment, and other
                      statutory benefits.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Comprehensive Payroll Reports</strong> – Provides
                      access to salary registers, tax deductions, and financial
                      reports.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cloud-Based Accessibility</strong> – Enables
                      businesses to manage payroll from anywhere with secure,
                      cloud-based payroll software.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                By choosing LegallensIndia Payroll Outsourcing Services with
                LEDGERS HR Software, businesses can streamline payroll
                operations, reduce compliance risks, and focus on growth—all
                while ensuring employees are paid accurately and on time.
              </p>
              <h3>
                Who Can Benefit from LegallensIndia HR &amp; Payroll Services?
              </h3>
              <p>
                Find out which businesses can leverage LegallensIndia HR &amp;
                Payroll Services to simplify HR processes and manage payroll
                efficiently:
              </p>
              <h4>Startups &amp; Small Businesses</h4>
              <p>
                Startups and SMEs can benefit from our affordable payroll
                software for startups, eliminating the need for a full-time HR
                team.
              </p>
              <h4>Medium &amp; Large Enterprises</h4>
              <p>
                Larger organisations can optimise workforce management software,
                automate payroll, and ensure compliance with labour laws.
              </p>
              <h4>E-Commerce &amp; IT Companies</h4>
              <p>
                E-commerce and IT businesses with remote teams can manage
                employee payroll systems and tax deductions seamlessly through
                our cloud HR software.
              </p>
              <h4>Manufacturing &amp; Retail Businesses</h4>
              <p>
                Payroll outsourcing and compliance services help businesses in
                these industries streamline salary processing and payroll
                solutions.
              </p>
              <p>
                Our services are not limited to these industries—any business
                looking to streamline HR and payroll management can rely on
                LegallensIndia for expert assistance and seamless compliance
                solutions.
              </p>
              <h3>Why Choose LegallensIndia?</h3>
              <p>
                LegallensIndia is India’s trusted partner for HR software,
                payroll solutions, and compliance services. Here’s why thousands
                of businesses rely on us:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Guidance </strong>– Our professionals
                      ensure smooth payroll processing &amp; compliance.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fast &amp; Hassle-Free </strong>– Avoid long
                      paperwork and delays with our cloud-based payroll
                      software.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>100% Legal Compliance</strong> – Stay protected
                      from penalties with our HR statutory compliance
                      services.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>User-Friendly Platform </strong>– Our cloud HR
                      software is intuitive &amp; easy to use.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Affordable Pricing </strong>– Affordable payroll
                      software for startups and enterprises tailored for
                      cost-effective HR solutions.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Security and Data Protection&nbsp;</h4>
              <p>
                As businesses shift towards automated payroll solutions,
                protecting sensitive employee data becomes a top priority. With
                increasing cybersecurity threats, ensuring data security in
                payroll management is essential. Here's how LEDGERS HR Software
                safeguards your business against risks:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> End-to-end encryption to
                      protect employee and payroll data.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Role-based access
                      controls to ensure only authorised personnel access
                      critical information.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Regular backups and
                      cloud security to prevent data loss.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Compliance with industry
                      regulations to maintain legal standards and ensure data
                      privacy.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                With robust security features, businesses can confidently manage
                payroll without worrying about data breaches or compliance
                risks.
              </p>
              <h3>Get Started with LEDGERS HR Software Today!</h3>
              <p>
                At LegallensIndia, we aim to simplify business operations with
                technology-driven HR software and payroll processing software.
                Whether you need cloud HR software, payroll outsourcing, or
                full-fledged HR statutory compliance services, LEDGERS HR
                Software is your ultimate solution.
              </p>
              <p>
                Stay compliant, eliminate payroll headaches, and ensure smooth
                human resources software operations with LEDGERS HR Software by
                LegallensIndia.
              </p>
              <p>
                <strong>
                  <em>
                    Contact us today to streamline your HR and payroll
                    processes!
                  </em>
                </strong>
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
