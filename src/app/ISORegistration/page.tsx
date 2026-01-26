import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ISORegistration() {
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
              <h1 className="display-1 text-white mb-3">ISO Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                ISO certification is an internationally recognized standard that
                demonstrates a company's commitment to quality, efficiency, and
                customer satisfaction.
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
                { id: 3, title: "ISO Registration", url: "" },
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
                      <h5 className="card-title">ISO Registration</h5>
                      <p>
                        ISO certification is an internationally recognized
                        standard that demonstrates a company's commitment to
                        quality, efficiency, and customer satisfaction.
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

              <h2 className="display-4 mb-3">ISO Registration</h2>
              <p>
                ISO certification is an internationally recognized standard that
                demonstrates a company's commitment to quality, efficiency, and
                customer satisfaction. Achieving this ISO certification in India
                can significantly enhance your business's credibility and
                competitive edge, opening doors to global markets and improving
                overall operational effectiveness.
              </p>
              <p>
                At LegallensIndia, we understand the critical importance of ISO
                certification online for businesses looking to establish their
                mark in the industry. Our expert team is equipped to guide you
                through every step of the ISO certificate registration process,
                ensuring that your business meets all necessary standards with
                minimal hassle.
              </p>
              <p>
                <strong>
                  Secure Your ISO Certification with LegallensIndia: Elevate Your
                  Business Standards Today!
                </strong>
              </p>
              <h3>ISO Registration</h3>
              <p>
                ISO registration refers to registering an organization with an
                external certification body to obtain certification for
                compliance with one or more standards established and published
                by the International Organization for Standardization (ISO). ISO
                is a non-governmental, independent international organization
                that brings together experts worldwide to develop global
                standards that address various issues and promote technological
                advancement.&nbsp;Applying for an ISO certificate online is a
                simple process where you submit your business details and
                required documents to a certification body. Once verified, you
                receive your ISO certification digitally.
              </p>
              <p>
                ISO certificate registration involves an extensive audit and
                assessment process by an external certification body to
                determine whether the organization meets the applicable ISO
                standard requirements. The certification body will review the
                organization's operations, procedures, and systems to ensure
                they comply with the relevant ISO standard.
              </p>
              <p>
                Once the certification body confirms that the organization
                complies with the applicable ISO standard, it will issue an ISO
                certification in India. As mentioned, you can easily engage in
                the process of ISO certificate apply online through accredited
                certification bodies to ensure your business meets international
                standards.
              </p>
              <h3>The objective of ISO Certification</h3>
              <p>
                ISO certification aims to provide a framework for businesses to
                establish, implement, and maintain a management system that
                meets international standards. The ISO certification process
                helps companies identify and manage risks, improve operations,
                and demonstrate a commitment to quality and continuous
                improvement.&nbsp;ISO certificate apply online process involves
                document submission, audit assessment, and certification from an
                authorized body.
              </p>
              <p>
                ISO certification provides a set of globally recognized
                standards for various aspects of business operations, including
                quality management, environmental management, information
                security management, occupational health, and safety management,
                food safety management, and energy management. The certification
                process involves an independent assessment of the business's
                management system to ensure that it meets the requirements of
                the relevant ISO standard.
              </p>
              <h3>ISO Certificate</h3>
              <p>
                An ISO certificate is a document that confirms that a company,
                organization, or product adheres to one or more of the standards
                established and published by the International Organization for
                Standardization (ISO). ISO is a non-governmental, independent
                international organization that brings together experts
                worldwide to develop global standards that address various
                issues and promote technological advancement.
              </p>
              <p>
                ISO certification indicates that the business or product meets
                specific requirements and operates responsibly and in compliance
                with industry standards and management procedures.
              </p>
              <p>
                An external certification body typically carries out the
                certification process, which conducts audits and assessments to
                ensure that the organization or product meets the applicable ISO
                standard requirements. It is good to have complete knowledge
                regulatory bodies involved in the ISO registration before
                proceeding to the&nbsp;online apply for ISO certification in
                India.
              </p>
              <h3>Benefits of ISO registration:</h3>
              <p>
                ISO registration online is a globally recognized standard, and
                achieving it can provide various benefits:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Improved quality management:</strong> A quality
                      management system that meets international standards can
                      be established and maintained through ISO certification.
                      This can lead to improved quality control, better process
                      management, and increased efficiency in operations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Increased customer satisfaction:</strong> ISO
                      certification demonstrates a commitment to quality and
                      customer satisfaction, which can help businesses attract
                      and retain customers. ISO certification can also help
                      companies to differentiate themselves from their
                      competitors and build a reputation for quality and
                      reliability. This justifies the importance of&nbsp;online
                      apply for ISO certification in India.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enhanced credibility:</strong> ISO certification
                      is recognized globally as a mark of quality and
                      credibility. ISO certification can help businesses gain
                      recognition and trust from customers, suppliers, and
                      stakeholders.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Improved risk management:</strong> ISO
                      registration online and obtaining the certification
                      requires businesses to identify and manage risks
                      associated with their operations. This can help
                      enterprises to identify potential risks and take steps to
                      mitigate them, leading to improved risk management and
                      increased resilience.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Access to new markets:</strong> Many businesses
                      require ISO certification as a prerequisite for doing
                      business. ISO certification can help companies to access
                      new markets and expand their customer base.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Improved processes and efficiency:</strong>{" "}
                      Obtaining ISO certification involves a comprehensive
                      review of a business's processes and procedures, which can
                      help identify areas for improvement and increase
                      efficiency.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cost savings:</strong> By improving processes and
                      efficiency, ISO certification can lead to cost savings for
                      a business.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Overall, ISO certification can help businesses improve their
                operations, increase customer satisfaction, and enhance their
                reputation and credibility, leading to long-term success and
                growth.
              </p>
              <h3>Types of ISO Certification</h3>
              <p>
                The list of types of ISO certification available in India is the
                same as the global list of ISO certifications. Here are the
                types of ISO certifications available in India:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Quality Management
                      Systems (QMS): ISO 9001:2015 - Quality Management Systems
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Environmental Management
                      Systems (EMS): ISO 14001:2015 - Environmental Management
                      Systems
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Occupational Health and
                      Safety Management Systems (OHSMS): ISO 45001:2018 -
                      Occupational Health and Safety Management Systems
                    </li>
                    <li>
                      <i className="uil uil-check"></i> OHSAS 18001:2007 -
                      Occupational Health and Safety Management Systems
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Information Security
                      Management Systems (ISMS): ISO/IEC 27001:2013 -
                      Information Security Management Systems
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Energy Management
                      Systems (EnMS): ISO 50001:2018 - Energy Management Systems
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Food Safety Management
                      Systems (FSMS): ISO 22000:2018 - Food Safety Management
                      Systems
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Social Responsibility:
                      ISO 26000:2010 - Social Responsibility
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Asset Management: ISO
                      55001:2014 - Asset Management
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Risk Management: ISO
                      31000:2018 - Risk Management
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Anti-bribery Management
                      Systems: ISO 37001:2016 - Anti-bribery Management Systems
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Compliant Management
                      System: ISO 10002:2018 - Compliant Management System
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Security Management: ISO
                      28000:2007 - Security Management
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Sustainable Events: ISO
                      20121:2012 - Sustainable Events
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Medical Devices: ISO
                      13485:2016 - Medical Devices
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Testing and Calibration
                      Laboratories: ISO/IEC 17025:2017 - Testing and Calibration
                      Laboratories
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Language Codes: ISO
                      639:2002 - Language Codes
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Currency Codes: ISO
                      4217:2015 - Currency Codes
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Country Codes: ISO
                      3166:2013 - Country Codes
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Date and Time Format:
                      ISO 8601:2019 - Date and Time Format
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Note that some of these certifications have been updated over
                time, and the year of the latest version is mentioned alongside
                the certification name.
              </p>
              <h3>
                <span>Requirements for&nbsp;</span>
                ISO certification in India
              </h3>
              <p>
                All the prescribed requirements must be obtained before
                proceeding with ISO certification apply online. The requirements
                to obtain ISO certification in India vary depending on the
                specific ISO standard, but generally, they include the
                following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Implementing a quality
                      management system (QMS) that addresses the needs of the
                      applicable ISO standard
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Documenting processes
                      and procedures related to the QMS
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Establishing and
                      maintaining a management system that is focused on
                      continual improvement
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Ensuring that employees
                      are trained on the QMS and are aware of their
                      responsibilities
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Demonstrating compliance
                      with applicable legal and regulatory requirements
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Monitoring and measuring
                      the effectiveness of the QMS through internal audits and
                      management reviews
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Identifying and
                      addressing non-conformities and taking corrective and
                      preventive actions
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Keeping records related
                      to the QMS and maintaining document control.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Specific ISO standards may have additional requirements
                depending on the scope of the standard, which are necessary for
                the process of ISO certification apply online.
              </p>
              <h3>ISO Certification Process in India</h3>
              <p>
                The process of ISO certification in India typically involves the
                following steps:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Determine the type of ISO certification needed:
                      </strong>{" "}
                      The first step is to determine the type of ISO
                      certification that best suits your business needs. This
                      could be based on the industry, target market, or
                      customers' specific requirements. You can check out the
                      various types in the ISO certification official website.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identify a Certification Body:</strong> Once you
                      have determined the type of ISO certification needed, you
                      will need to identify a Certification Body (CB) accredited
                      by the National Accreditation Board for Certification
                      Bodies (NABCB). You can also check the list of CBs on the
                      NABCB website.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Prepare the documentation: </strong>The next step
                      is to prepare the necessary documentation, which includes
                      a Quality Manual, Procedures, and Work Instructions. This
                      documentation will help demonstrate that your business
                      follows the requirements of the relevant ISO standard. You
                      can find all the list of required documents in the ISO
                      Certification official website.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Implementation of the Quality Management System (QMS):
                      </strong>{" "}
                      The QMS must be implemented and maintained per the
                      standard's requirements. This includes identifying and
                      managing risks, documenting and controlling procedures,
                      and performing internal audits.
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>
                              <i className="uil uil-check"></i>{" "}
                              <strong>Stage 1 audit:</strong> A Stage 1 audit is
                              a documentation review to ensure that the QMS
                              documentation aligns with the requirements of the
                              ISO standard.
                            </li>
                            <li>
                              <i className="uil uil-check"></i>{" "}
                              <strong>Stage 2 audit:</strong> A Stage 2 audit is
                              a site audit to ensure that the QMS is implemented
                              and maintained as per the standard's requirements.
                              This audit typically includes interviews with key
                              personnel, observations, and a review of records.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Certification decision:</strong> The Certification
                      Body (CB) will decide based on the results of Stage 1 and
                      Stage 2 audits. The CB will issue an ISO certificate if
                      the QMS meets the standard's requirements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Surveillance audits:</strong> After certification,
                      the CB will conduct surveillance audits to ensure the QMS
                      meets the standard's requirements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Re-certification audit:</strong> After three
                      years, the QMS will be re-certified based on a
                      re-certification audit.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It is important to note that the ISO certification online
                process may vary slightly depending on the specific ISO standard
                and CB.
              </p>
              <h3>Simplify ISO Certification Help with LegallensIndia</h3>
              <p>
                LegallensIndia has a team of experienced professionals who can
                provide end-to-end support to businesses seeking ISO
                certification. We can help companies to save time, effort, and
                resources in the ISO certification process and ensure a smooth
                and hassle-free experience.With LegallensIndia, businesses can
                expect a seamless and trouble-free journey toward achieving ISO
                certification, backed by our full range of support services.
              </p>
              <p>
                <strong>
                  Get Your ISO Certification Today with LegallensIndia and Boost
                  Your Business Standards!
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
