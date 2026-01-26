import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function PFRegistration() {
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
              <h1 className="display-1 text-white mb-3">PF Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                PF registration is the procedure through which an establishment
                or employer registers with the Employees' Provident Fund
                Organisation (EPFO) to become part of the Provident Fund (PF)
                scheme.
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
                { id: 3, title: "PF Registration", url: "" },
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
                      <h5 className="card-title">PF Registration</h5>
                      <p>
                        PF registration is the procedure through which an
                        establishment or employer registers with the Employees'
                        Provident Fund Organisation (EPFO) to become part of the
                        Provident Fund (PF) scheme.{" "}
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
                PF Registration - EPF Registration Online
              </h2>
              <p>
                PF registration is the procedure through which an establishment
                or employer registers with the Employees' Provident Fund
                Organisation (EPFO) to become part of the Provident Fund (PF)
                scheme. This EPF registration online is a crucial step for
                businesses to ensure that their employees are enrolled in this
                mandatory savings and pension scheme, which provides financial
                security in retirement, during medical emergencies, or other
                unforeseen circumstances.
              </p>
              <p>
                LegallensIndia offers expert assistance to streamline the PF
                registration process for companies. With comprehensive support
                for PF apply online, we ensure that the registration is handled
                efficiently, allowing businesses to comply with regulatory
                requirements without hassle.
              </p>
              <h3>Overview of the EPF Scheme</h3>
              <p>
                The EPF (Employees' Provident Fund) Scheme is a pivotal social
                security initiative established by the government to foster
                savings among employees and ensure they have financial support
                after retirement. This program is integral to helping employees
                build a substantial retirement corpus through regular, mandatory
                contributions from the employee and their employer.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Accessing EPF Funds:</strong> Employees can access
                  their accumulated EPF funds under several circumstances:
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Retirement: </strong>EPF amounts can be withdrawn upon
                  reaching the retirement age of 58.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Unemployment:</strong> Funds can also be accessed if
                  an employee faces unemployment for over two months.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Early Withdrawal: </strong>Early withdrawals are
                  permitted under specific conditions in cases of severe illness
                  or other emergencies.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Death: </strong>In the unfortunate event of an
                  employee's death before retirement age, the accumulated funds
                  become accessible to their nominated beneficiaries.
                </li>
              </ul></div></div>
              <h3 className="mt-4">When to Get Provident Fund Registration?</h3>
              <p>
                Employers in India are required to obtain EPF New registration
                when they meet certain conditions based on the size of their
                workforce and other regulatory criteria. Here are the key
                scenarios when the EPFO registration process becomes necessary:
              </p>
              <h4>Mandatory PF Registration Threshold</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Standard EPFO Registration Requirement:</strong>{" "}
                  Employers must register for PF once they employ 20 or more
                  individuals. This includes all types of employees such as
                  permanent, contractual, and temporary.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Voluntary EPFO Registration:</strong> Employers with
                  fewer than 20 employees can opt to register voluntarily
                  through PF apply online. This is often done to enhance the
                  benefits package offered to employees and improve job
                  satisfaction.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Timeframe for EPF Registration Online</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Within One Month: </strong>The EPF registration online
                  must be completed within one month from the date on which the
                  establishment reaches the threshold of 20 employees to avoid
                  any penalties.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Special Provisions</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  The Central Government has the authority to apply PF
                  provisions to any establishment with fewer than 20 employees
                  by providing not less than two months' notice for mandatory
                  EPF new registration.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  In cases where the employer and a majority of employees agree
                  that the provisions of the PF Act should be made applicable to
                  their establishment, they can apply to the Central PF
                  Commissioner for PF account registration, even if they do not
                  meet the standard employee threshold.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Employee Eligibility and PF Contribution Requirements</h4>
              <p>
                From the beginning of their employment, all employees are
                eligible for the Provident Fund, with the employer responsible
                for managing the deductions and payments. Typically, the PF
                contribution shared equally between employer and employee.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  Employee Contribution: Each employee contributes 12% of their
                  basic pay towards the EPF.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Employer Contribution: Similarly, employers contribute an
                  equivalent of 12% of the employee's basic pay. Of this, 3.67%
                  is directed into the employee's EPF account, while the
                  remaining 8.33% is channelled into the employee's Pension Fund
                  (EPS).
                </li>
              </ul></div></div>
              <h3 className="mt-4">
                Exemptions from the Mandatory EPF Registration Process in India
              </h3>
              <p>
                In India, businesses with fewer than 20 employees are exempt
                from registering under the Employees' Provident Fund (EPF) Act.
                However, these smaller establishments can register voluntarily
                for the EPF program.
              </p>
              <h3>Benefits of EPF Registration</h3>
              <p>
                Securing <strong>EPF registration </strong>offers various
                benefits to the employers, including financial management and
                financial benefits. Here, we have shared the key EPF
                registration benefits:
              </p>
              <h4>Compliance and Financial Management</h4>
              <p>
                Provident Fund registration is essential for employers as it
                meets legal requirements like TDS deduction from employees'
                salaries. Registering allows employers to handle contributions
                efficiently through the EPFO's online portal.
              </p>
              <h4>Risk Protection for Employees</h4>
              <p>
                The Provident Fund provides financial security to employees and
                their families in case of retirement, illness, or death.
              </p>
              <h4>Flexibility and Portability</h4>
              <p>
                A Provident Fund account is consistent and can be easily
                transferred to a new employer, which is particularly beneficial
                for employees changing jobs.
              </p>
              <h4>Retirement Benefits</h4>
              <p>
                EPF automatically enrols employees in the Employee Pension
                Scheme (EPS), which allocates part of the employer's
                contribution to a pension fund. This fund provides a monthly
                pension to employees after retirement.
              </p>
              <h4>Support for Long-term Financial Needs</h4>
              <p>
                The funds accumulated in the PF account are accessible for
                significant expenses like education or marriage, providing
                timely financial support.
              </p>
              <h4>Emergency Financial Support</h4>
              <p>
                The PF also serves as a reserve that can be drawn upon in urgent
                situations such as medical emergencies or family events,
                offering immediate financial relief .
              </p>
              <p>
                By registering for EPF, employers comply with legal mandates and
                enhance their employees' financial well-being and job
                satisfaction.
              </p>
              <h3>Documents Required for EPF Registration</h3>
              <p>
                Here is a list of documents required for Provident Fund
                registration:
              </p>
              <p>
                <strong>Business Registration Certificate:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}Certificate of Incorporation (for companies)</li>
                <li><i className="uil uil-check"></i>{" "}Partnership Deed (for partnerships)</li>
                <li><i className="uil uil-check"></i>{" "}Registration Certificate (for sole proprietorships)</li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Proof of Identity:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}PAN Card of the business entity</li>
                <li><i className="uil uil-check"></i>{" "}PAN Card of the owner/directors/partners</li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Proof of Address:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}Utility bills (electricity, water, etc.)</li>
                <li><i className="uil uil-check"></i>{" "}Rental agreement</li>
                <li><i className="uil uil-check"></i>{" "}Property tax receipt</li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Bank Details:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}Cancelled cheque</li>
                <li><i className="uil uil-check"></i>{" "}Bank statement</li>
                <li><i className="uil uil-check"></i>{" "}
                  Digital Signature Certificate (DSC) of the authorised
                  signatory.
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>&nbsp;Proof of Business Activity:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}GST registration certificate</li>
                <li><i className="uil uil-check"></i>{" "}
                  Any other relevant license or registration specific to the
                  business activity
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Employee Details:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  List of employees with their personal details (name, date of
                  birth, father's name)
                </li>
                <li><i className="uil uil-check"></i>{" "}Employee's Aadhaar card and PAN card</li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Employment Details:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}Joining date of employees</li>
                <li><i className="uil uil-check"></i>{" "}Salary details</li>
                <li><i className="uil uil-check"></i>{" "}
                  Specimen Signature of the Authorized Signatory on company
                  letterhead.
                </li>
                <li><i className="uil uil-check"></i>{" "}Consent Letter from Employees for PF deduction.</li>
                <li><i className="uil uil-check"></i>{" "}
                  Partnership Deed/Memorandum and Articles of Association (MOA
                  &amp; AOA), if applicable.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Power of Attorney (if the PF registration process is being
                  handled by a third party).
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Form 5A: Information regarding the ownership of the business.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Proof of Start Date of the establishment (such as the first
                  invoice or contract).
                </li>
              </ul></div></div>
              <h3 className="mt-4">Required Details for EPF Registration Process</h3>
              <p>
                To ensure a smooth EPF registration process, employers must
                provide comprehensive details. These include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Employee Count:</strong> Total number of employees in
                  the organisation.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Company Information: </strong>Complete name and
                  address of the company.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Office Locations: </strong>Details of the head office
                  and any branches.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Business Type: </strong>Specific type of business
                  activities conducted.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Business Nature: </strong>General nature of the
                  business operations.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Incorporation Date:</strong> Date on which the company
                  was officially registered.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Director/Partner Information: </strong>Names and other
                  details of all directors or partners involved in the company.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Employee Basics:</strong> Basic details such as names
                  and contact information of all employees.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Employee Salaries: </strong>Comprehensive salary
                  details of the employees.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Bank Account Information: </strong>Company's main bank
                  account details.
                </li>
              </ul></div></div>
              <p className="mt-4">
                Providing these details accurately is crucial for the timely and
                successful EPFO registration online for your company.
              </p>
              <h3>How to Apply for PF Registration Online?</h3>
              <p>
                Employers can register for Provident Fund (PF) online through
                the Employees' Provident Fund Organisation (EPFO) portal easily.
                Here’s a step-by-step guide to completing the PF registration
                process:
              </p>
              <p>
                <strong>Step 1 - Visit the EPFO Website</strong>: Begin by
                visiting the EPFO website and selecting the "Establishment
                Registration" option to initiate the registration process.
              </p>
              <p>
                <strong>Step 2 - Download and Review the User Manual:</strong>{" "}
                On the Unified Shram Suvidha Portal (USSP), download the user
                manual to understand the prerequisites and documentation needed
                for registration.
              </p>
              <p>
                <strong>Step 3 - Create an Account on USSP:</strong> Register on
                the USSP by providing your name, mobile number, and email ID to
                generate login credentials.
              </p>
              <p>
                <strong>Step 4 - Access the Registration Form: </strong>Log in
                and locate the "Registration For EPFO-ESIC v1.1" section. Click
                on "Apply for New Registration" to begin filling out the PF
                application.
              </p>
              <p>
                <strong>Step 5 - Fill Out the Application Form:</strong> Enter
                required details such as the establishment’s name, address,
                number of employees, and nature of business activity.
              </p>
              <p>
                <strong>Step 6 - Upload Mandatory Documents:</strong> Attach the
                necessary documents, including the company’s PAN card, proof of
                establishment (like a registration certificate), and a cancelled
                cheque.
              </p>
              <p>
                <strong>
                  Step 7 - Submit Digital Signature Certificate (DSC):{" "}
                </strong>
                Upload the Digital Signature Certificate (DSC) of the authorized
                signatory to authenticate the application.
              </p>
              <p>
                <strong>Step 8 - Submit the Application:</strong> Once all
                fields are filled and documents uploaded, submit the form. The
                EPFO will verify the details and issue a PF Registration Number
                along with a unique Establishment Code.
              </p>
              <p>
                <strong></strong>
              </p>
              <p>
                <strong>Step 9 - Start PF Contributions: </strong>Upon
                successful registration, employers can begin contributing to the
                PF accounts of their employees using the allotted PF code.
              </p>
              <h3>Streamline Your PF Registration with LegallensIndia</h3>
              <p>
                LegallensIndia can help streamline the PF registration process
                with affordable PF registration charges. Our experts provide
                comprehensive support, ensuring your registration is completed
                accurately and efficiently. From preparing for EPFO registration
                online and submitting all necessary documents to obtaining your
                PF code, we manage the entire PF apply online process, allowing
                you to focus on growing your business. With our user-friendly
                platform and dedicated customer service, you can trust
                LegallensIndia to handle your PF registration online with the
                utmost professionalism and reasonable PF registration charges.
              </p>
              <p>
                <strong>
                  <em>
                    Ready to simplify your PF registration? Contact
                    LegallensIndia today and let our experts take care of
                    everything for you!
                  </em>
                </strong>
              </p>
              <p>
                Once PF registration is completed, you must regularly file PF
                returns to report employee contributions and ensure compliance
                with statutory requirements. LegallensIndia experts can assist
                you in managing these filings efficiently, ensuring timely
                compliance and avoiding penalties.
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
