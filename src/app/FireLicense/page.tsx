import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function FireLicense() {
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
              <h1 className="display-1 text-white mb-3">Fire License</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Fire safety is an essential consideration for any event or daily operations across India. In order to ensure the safety of individuals and property, a certificate of fire safety is a mandatory requirement for all businesses and organizations operating within buildings.
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
                { id: 1, title: "Home", url: "#" },{ id: 2, title: "Registrations", url: "Registrations" },
                { id: 3, title: "Fire License Registration", url: "" },
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
                      <h5 className="card-title">Fire License</h5>
                      <p>Fire safety is an essential consideration for any event or daily operations across India. In order to ensure the safety of individuals and property, a certificate of fire safety is a mandatory requirement for all businesses and organizations operating within buildings.
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

              <h2 className="display-4 mb-3">Fire License Registration</h2>
              <p>
                <span>
                  Fire safety is an essential consideration for any event or
                  daily operations across India. In order to ensure the safety
                  of individuals and property, a certificate of fire safety is a
                  mandatory requirement for all businesses and organizations
                  operating within buildings. This fire safety license ensures
                  that the premises meet the necessary fire safety standards and
                  adhere to the relevant fire safety regulations set forth by
                  local authorities. In India, the process for obtaining a fire
                  license certificate or no-objection certificate (NOC) is
                  overseen by various state fire and rescue services
                  departments. Each state has its own regulations and procedures
                  for issuing the certificate of fire safety.&nbsp;
                </span>
              </p>
              <p>
                <span>
                  Our Fire License Service is dedicated to assisting businesses
                  and organizations in navigating these&nbsp;
                </span>
                Fire NOC requirements efficiently. With a team of experts
                knowledgeable in fire safety regulations, we provide
                comprehensive support to help you secure your fire safety
                certificate and ensure compliance with national and local fire
                safety standards. Contact us to find out more about how we can
                facilitate your fire license apply process, obtain the
                certificate of fire safety and enhance the safety of your
                premises.
              </p>
              <h3>Fire License</h3>
              <p>
                A Fire License is a state government-issued permit to ensure the
                safety of individuals in places that are prone to fire hazards.
                Certificate of fire safety is a precautionary measure mandated
                for specific types of businesses, as per the proposed safety
                standards.&nbsp;
              </p>
              <p>
                In addition to this, a Fire License certificate is also
                necessary to obtain building plan approval from the Chennai
                Metropolitan Development Authority for multistoried structures
                such as schools, cinemas, hotels, commercial complexes,
                hospitals, corporate and mercantile buildings, residential
                apartments, industries, custodial institutions, and other
                related buildings. The fire extinguisher business license in
                India ensures the fire safety of these buildings. LegallensIndia
                can assist in registering for a Fire and Safety Licence and
                obtain the certificate of fire safety.
              </p>
              <h3>Applicability of Fire License</h3>
              <p>
                <span>
                  The applicability of a fire safety certificate in India
                  extends to all commercial, industrial, and institutional
                  establishments that operate within a building structure. A
                  fire license, also known as a Fire No Objection Certificate
                  (NOC), is mandatory to ensure that the premises comply with
                  fire safety regulations set forth by the National Building
                  Code (NBC) of India and other local fire safety guidelines.
                  This Fire certificate requirement applies to a wide range of
                  businesses, including offices, factories, hotels, hospitals,
                  schools, malls, and high-rise residential buildings.
                </span>
              </p>
              <p>
                <span>
                  The fire and safety license ensures that these establishments
                  are equipped with adequate fire prevention and control
                  measures, such as fire alarms, extinguishers, hydrant systems,
                  and proper emergency exits. The fire safety department of the
                  respective state or municipal corporation assesses whether the
                  building meets the required fire safety standards before
                  issuing the Fire NOC certificate. Regular fire license renewal
                  is also required to ensure continued compliance, making
                  the&nbsp;
                </span>
                fire extinguisher business license in India critical document
                for any business or organization operating in India.
              </p>
              <h3>Types of businesses that require a Fire License</h3>
              <p>
                In general, businesses that involve potential fire hazards are
                required to obtain a Fire and safety License. Specific types of
                businesses that require a Fire certificate can vary by state and
                country but typically include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Hotels and restaurants
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Movie theaters and
                      entertainment venues
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Educational institutions
                      such as schools and universities
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Hospitals and healthcare
                      facilities
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Manufacturing and
                      industrial facilities
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Warehouses and storage
                      facilities
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Shopping malls and
                      retail stores
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Office buildings and
                      high-rise structures
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Public assembly
                      buildings such as stadiums and arenas
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Residential buildings
                      with more than three floors.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These are the list of entities required to obtain a Fire safety
                license to ensure the place is well-protected.
              </p>
              <h3>
                Key Requirements for Obtaining a Certificate of Fire Safety
              </h3>
              <p>
                It is important for businesses to check with their local fire
                department or a government agency to determine if they need a
                Fire License and if specific Fire NOC requirements must be met
                to obtain a certificate of fire safety. Some of the key
                requirements for obtaining a fire and safety licence in Tamil
                Nadu include the following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Submission of building
                      plans and a No Objection Certificate (NOC) from the local
                      fire department.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Installation of fire
                      safety equipment, including fire extinguishers, fire
                      alarms, and sprinklers, as per the specifications outlined
                      in the Tamil Nadu Fire Service Rules.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Conducting regular fire
                      safety audits and inspections to ensure compliance with
                      local regulations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Providing fire safety
                      training to employees and conducting mock drills to
                      prepare for emergencies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Renewing the fire
                      license apply periodically as per the rules and
                      regulations.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It is important to note that failure to comply with the Fire
                License Rules in Tamil Nadu can result in legal consequences,
                including fines and imprisonment. Therefore, it is essential to
                follow all the necessary procedures and guidelines to obtain and
                maintain a fire extinguisher business license in India for your
                building.
              </p>
              <h3>Fire License Apply - How to Get Fire Safety Certificate?</h3>
              <p>
                The process of how to get fire safety certificate depends on the
                dimensions of building. The submission of a fire license
                application depends on the type of building being considered.
                For buildings that are up to 17.25 meters in height and not
                classified as major storage buildings (Non-MSB), the District
                Officer of the Fire and Rescue Services Department is the
                relevant authority to whom the application must be submitted.
              </p>
              <p>
                However, for buildings with a height exceeding 17.25 meters
                (MSB) or those with more than one basement and a height of fewer
                than 17.25 meters, the Director of the Fire and Rescue Services
                Department is the concerned authority for submitting the fire
                license application.
              </p>
              <p>
                {" "}
                It is important to note that the specific requirements for
                obtaining a fire and safety licence may vary depending on the
                type and location of the building. Also, keep in mind that
                the&nbsp;fire license renewal is essential to extend the
                validity of the registration and stay compliant.&nbsp;
              </p>
              <h3>Advantages of Fire License Registration</h3>
              <p>
                Here are the several advantages of registration of fire license
                and obtain the certificate of fire safety:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Safe Business:</strong> Registering for a Fire
                      License ensures that your business is equipped with the
                      necessary safety measures as mandated by the government.
                      This provides a safer environment for your employees and
                      customers.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Protection and Safety:</strong> In the unfortunate
                      event of a fire, the safety measures installed in the
                      building can help protect people and property from damage.
                      A Fire License ensures that these safety measures are in
                      place and up-to-date.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Right:</strong> Operating a business with a
                      legally approved Fire License holder gives you the right
                      to claim legal remedies in case of any issues or disputes
                      arising from fire incidents. This can help safeguard your
                      business and reputation in the long run.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal compliance:</strong> Obtaining a fire
                      license ensures your business or organization complies
                      with local fire safety regulations. This can help you
                      avoid legal consequences, such as fines or imprisonment
                      that may result from non-compliance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fire safety:</strong> Obtaining a fire safety
                      certificate involves a fire safety assessment of your
                      workplace. This helps to identify potential fire hazards
                      and implement safety measures to prevent fires and protect
                      your employees and property.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reputation:</strong> A fire license demonstrates
                      to customers and clients that your business or
                      organization prioritizes safety and is committed to
                      meeting all necessary safety requirements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Peace of mind:</strong> With a fire license in
                      hand, you can have peace of mind knowing that your
                      workplace is equipped with proper fire safety equipment,
                      your employees are trained in fire safety practices, and
                      you have an emergency plan in place in case of a fire.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Insurance benefits:</strong> Some providers may
                      offer premiums discounts for businesses with a fire
                      license. Additionally, having a fire license can help to
                      expedite the insurance claim process in case of fire
                      damage.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Obtaining a fire license for your business or organization in
                Tamil Nadu is essential for legal compliance, fire safety, and
                peace of mind. Fire extinguisher business license in India can
                also offer reputational and insurance benefits to help your
                business in the long run.
              </p>
              <h3>Documents required for the registration of a Fire License</h3>
              <p>
                The following documents and requirements for registration of
                Fire License and obtain certificate of fire safety,
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Copy of NOC received
                      during Pre Establishment
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Copy of sale deed or
                      rental or lease agreement
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Copy of approved
                      building plan from Competent Authority (Local Body/
                      Directorate of Town and Country Planning (DTCP)/ Chennai
                      Metropolitan Development Authority (CMDA))
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Ensure to have these documents before proceeding to obtain a
                Fire extinguisher business license in India.
              </p>
              <h3>Applying for Fire Licence through LegallensIndia</h3>
              <p>
                LegallensIndia can be a valuable resource for businesses seeking a
                Fire License in India. We offer expert guidance and support
                throughout the Fire license apply process, including preparing
                the application, compiling necessary documents, and ensuring
                timely submission. With a team of experts knowledgeable about
                the local requirements and procedures, LegallensIndia can help
                businesses navigate the complexities of obtaining a Fire License
                and avoid delays or penalties. Along with the registration, our
                experts extend their support to the Fire license renewal process
                as well.&nbsp;
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
