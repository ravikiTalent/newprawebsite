import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ESIRegistration() {
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
              <h1 className="display-1 text-white mb-3">ESI Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                ESI Registration is the process by which every employer/factory
                and its every employee employed for wages, is identified for the
                purpose of the Scheme, and their individual records are set up
                for them.
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
                { id: 3, title: "ESI Registration", url: "" },
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
                      <h5 className="card-title">ESI Registration</h5>
                      <p>
                        ESI Registration is the process by which every
                        employer/factory and its every employee employed for
                        wages, is identified for the purpose of the Scheme, and
                        their individual records are set up for them.
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
                Expert Assistance for ESI Registration
              </h2>
              <p>
                Employee State Insurance (ESI) registration is a mandatory
                compliance requirement for businesses in India, governed by the
                Employee State Insurance Corporation (ESIC). This scheme
                provides social security and health insurance benefits to Indian
                workers earning a specified monthly wage, typically extending to
                their dependents. Depending on the business type and location,
                it applies to companies with 10 or more employees.
              </p>
              <p>
                At LegallensIndia, our team of experts is dedicated to assisting
                businesses in navigating the complexities of ESI and PF
                registration. With our comprehensive understanding of regulatory
                requirements and a client-centric approach, we ensure a seamless
                and hassle-free ESI EPF registration online process for your
                establishment, securing the wide-ranging benefits of the ESI
                scheme for your employees.
              </p>
              <h3>ESI Scheme</h3>
              <p>
                ESI (Employee State Insurance) operates following the ESI Act of
                1948. It is a government scheme designed to provide social
                security benefits to workers. The administration of this scheme
                falls under the purview of the Employee State Insurance
                Corporation (ESIC). Employers must formally register their
                establishments with ESIC and furnish worker details for
                inclusion in the program.
              </p>
              <p>
                Complying with the intricate regulations stipulated by the
                government can pose a significant challenge for employers.
                LegallensIndia' ESI experts are available to assist you with
                these matters.
              </p>
              <h3>Definition and Scope of Establishments Under the ESI Act</h3>
              <p>
                The Employee State Insurance (ESI) Act categorises an
                establishment as any organised entity involving men or women,
                regardless of its physical location. This includes retail
                outlets and commercial shops, which are mandated to enroll in
                the ESI scheme if they employ 10 workers or 20 in certain
                states, provided these employees earn up to Rs. 21,000 per
                month, or Rs. 25,000 for individuals with disabilities.
              </p>
              <h3>Who is eligible for ESI Registration?</h3>
              <p>
                According to the official notice, the following state
                government-affiliated entities fall under the scope of the ESI
                Act according to Section 1(5):
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Retail outlets
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Dining establishments or
                      hotels solely involved in sales
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Movie theatres,
                      including preview facilities
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Establishments related
                      to road transportation
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Newspaper organisations
                      (exempt from the Factory Act)
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Private healthcare
                      facilities
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Private educational
                      institutions
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Casual workers employed
                      by Municipal Corporations or Bodies
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                These entities are required to register with the ESIC if they
                have a workforce of 10 or more individuals.
              </p>
              <p>
                Furthermore, the Central Government has expanded the ESI Act's
                Section 1(5) coverage to include the following central
                government-related entities:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Retail outlets
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Hotels and dining
                      establishments
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Establishments related
                      to road transportation
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Cinemas, including
                      preview theatres
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Newspaper organisations
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Businesses involved in:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Insurance
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Non-Banking Financial
                      Companies (NBFCs)
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Port trusts
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Airport authorities
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Warehousing
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                For these central government-associated entities, mandatory PF
                ESI registration is required when employing 20 or more
                individuals.
              </p>
              <h3>Eligibility criteria for ESI registration</h3>
              <p>
                The eligibility criteria for ESI registration are as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Employees in
                      establishments, factories, or shops with more than 10
                      employees are eligible for ESI benefits under Section
                      2(12) of the ESI Act, 1948.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} All workers and their
                      dependents across various industries and sectors can
                      receive ESI medical benefits from ESIC-run hospitals and
                      dispensaries.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Women employees earning less than Rs. 21,000 per month and
                individuals with disabilities earning less than Rs. 25,000 per
                month are eligible for maternity benefits under the ESI Act.
                This includes medical and cash benefits, as well as paid leave
                for various conditions such as pregnancy (pre and
                post-delivery), medical termination, miscarriage, and adoption.
                ESI EPF registration is required for the employees to obtain the
                financial benefits.
              </p>
              <h3>Advantages of ESIC Registration</h3>
              <p>
                ESI and PF registration offers employees a comprehensive suite
                of benefits, safeguarding their health, income, and family. Key
                benefits include for the ESI registration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Sickness Benefit: </strong>Employees are entitled
                      to receive 70% of their wages for up to 91 days a year
                      during certified sickness periods.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Extended Sickness Benefit: </strong>Employees can
                      receive an extended benefit at 80% of their wages for up
                      to two years for certain long-term and severe diseases.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Enhanced Sickness Benefit: </strong>Full wage
                      compensation is provided for employees undergoing
                      sterilisation, with 7 days for Vasectomy and 14 days for
                      Tubectomy.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Medical Benefits: </strong>Comprehensive medical
                      care is available to employees and their families,
                      ensuring their well-being.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Retired Medical Benefits: </strong>Retired
                      employees and their spouses are eligible for continued
                      medical benefits upon paying an annual premium of Rs. 120.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Maternity Benefit: </strong>Pregnant women are
                      entitled to total wages as maternity benefit for 26 weeks,
                      extendable by a month, ensuring financial stability during
                      childbirth.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Dependents' Benefit: </strong>In the unfortunate
                      event of an employee's death due to employment injury, 90%
                      of the employee's wages are provided to their dependents
                      as a monthly payment.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Temporary Disablement Benefit: </strong>Employees
                      suffering from an employment injury receive 90% of their
                      wages as a benefit until the disability lasts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Permanent Disablement Benefit: </strong>In cases
                      of permanent disability, employees are entitled to a
                      monthly payment of 90% of their wages based on the loss of
                      earning capacity as assessed by a Medical Board.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Funeral Expenses: </strong>A fixed sum of Rs.
                      15,000 is provided to the dependents or the individual
                      conducting the last rites, assisting with funeral
                      expenses.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                These are the major benefits for ESI registration. It is
                important to open up the various benefits through the PF ESI
                registration.
              </p>
              <h3>Documents Required for ESI Registration</h3>
              <p>
                For the ESIC registration online process, businesses are not
                required to submit physical documents. The necessary documents
                to be uploaded during the online registration include
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Business Registration
                      Proof: One of the following based on the business type:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Factories Act
                      Registration Certificate.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Shops and Establishment
                      Act Registration Certificate.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Establishment
                      Incorporation Certificate, applicable as per the entity
                      type:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Company Registration
                      Certificate for companies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Partnership deed for
                      partnership firms.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Goods and Services Tax
                      (GST) Registration Certificate of the establishment.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Company's Founding
                      Documents:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Memorandum of
                      Association (MoA).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Articles of Association
                      (AoA).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Establishment's Address
                      Proof: One of the following can be provided:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Recent utility bill
                      (electricity, gas, or telephone not older than three
                      months).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Rental agreement for the
                      establishment's premises.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Property tax receipt for
                      the establishment's location.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Employee Details: A
                      comprehensive list of all employees at the establishment.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} PAN Cards: PAN details
                      of the business and all employed individuals.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Employee Compensation
                      Details: Information on the salary/wages of all employees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Banking Information: A
                      cancelled cheque from the company's bank account.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Company Leadership
                      Details:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} List of the company's
                      directors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} List of the company's
                      shareholders.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Employee Attendance
                      Register: Maintaining a record of employee attendance.
                    </li>
                  </ul>
                </div>
              </div>
              <h3>Compliances After ESIC Registration</h3>
              <p>
                After ESI (Employee's State Insurance) registration, an
                establishment must adhere to specific compliances and file
                requisite These obligations are crucial for ensuring seamless
                operation and adherence to regulatory standards. The mandatory
                compliances include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Attendance Register Maintenance: </strong>The
                      establishment must diligently maintain an attendance
                      register to record the attendance of all employees. This
                      serves as a fundamental document for compliance and
                      internal record-keeping.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Register of Wages: </strong>A comprehensive
                      register of wages for workers should be meticulously
                      maintained. This register is vital for transparent
                      documentation of salary details and ensures compliance
                      with ESIC regulations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Inspection Book: </strong>An inspection book must
                      be kept to record any inspection on the premises. This
                      facilitates transparency and regulatory compliance during
                      official inspections.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Monthly Return and Challan Submission: </strong>
                      The establishment must submit monthly returns and challans
                      within the first 15 days of the succeeding month. This
                      includes providing details of employees, their attendance,
                      and the corresponding contributions to the ESIC.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Accident Register: </strong>A register documenting
                      accidents on the premises is mandatory. Accurate recording
                      of accidents is essential for compliance. It facilitates a
                      proactive approach towards workplace safety.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                These are crucial obligations that must be met. Other compliance
                regulations for EPF and ESIC registration have to be followed
                which you can ask those to our LegallensIndia experts.
              </p>
              <h3>ESIC Registration Online Process</h3>
              <p>
                The process for ESIC registration has shifted from a manual to a
                completely online system, making it more accessible and
                efficient. Businesses looking to register under ESIC can now
                complete the entire process through the official ESIC portal.
                For those who find navigating online EPF ESIC registration a
                challenge, LegallensIndia offers expert assistance. Our team is
                well-versed in the intricacies of the ESIC online portal and can
                guide you through each step, ensuring a smooth and successful
                EPF ESIC registration for your business.
              </p>
              <h3>Why Choose LegallensIndia for ESI registration?</h3>
              <p>
                LegallensIndia' team of seasoned professionals, including
                chartered accountants and legal experts, offers premier legal
                and compliance ESI PF registration services in India. We
                recognize the critical nature of an employer's obligation for
                ESI registration and approach this task with the highest degree
                of diligence and attention to detail. Our EPF ESI Registration
                process is streamlined, efficient, and designed to save you
                time. Transparency is at the core of our service delivery,
                ensuring you receive regular updates throughout the process.
                Should you have any inquiries during the EPF ESI registration or
                filing process, our expert team is readily available to provide
                you with the necessary support and guidance.
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
