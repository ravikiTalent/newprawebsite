import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DarpanRegistration() {
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
              <h1 className="display-1 text-white mb-3">Darpan Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">NGO Darpan registration is a crucial process for non-governmental organisations (NGOs) and voluntary organisations (VOs) in India, facilitated through an online platform managed by the Government of India.
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
                { id: 3, title: "Darpan Registration", url: "" },
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
                      <h5 className="card-title">Darpan Registration</h5>
                      <p>NGO Darpan registration is a crucial process for non-governmental organisations (NGOs) and voluntary organisations (VOs) in India, facilitated through an online platform managed by the Government of India.
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

              <h2 className="display-4 mb-3">Darpan Registration</h2>
              <p>
                <span>
                  NGO Darpan registration is a crucial process for
                  non-governmental organisations (NGOs) and voluntary
                  organisations (VOs) in India, facilitated through an online
                  platform managed by the Government of India. This NGO Darpan
                  Portal registration not only grants official recognition and
                  enhances credibility but also opens up numerous opportunities
                  for government funding, networking, and tax benefits. By
                  registering on the NGO Darpan platform and obtaining a Darpan
                  Registration Certificate, NGOs and VOs can effectively
                  streamline their interactions with government departments,
                  gaining access to vital resources and information that support
                  their missions and expand their impact.
                </span>
              </p>
              <p>
                <span>
                  Let LegallensIndia simplify your NGO Darpan registration
                  process. Gain official recognition, access government funding,
                  and enhance your organisation's credibility with our expert
                  assistance. Contact us today to get started!
                </span>
              </p>
              <h3>
                <span>What is Darpan Registration?</span>
              </h3>
              <p>
                <span>
                  Darpan Registration refers to the process of registering a
                  Non-Government Organisation (NGO) or Voluntary Organisation
                  (VO) on the NGO Darpan portal of Niti Aayog, an online
                  platform developed by NITI Aayog in collaboration with the
                  National Informatics Center (NIC, MeITY). Launched by the
                  Indian Government in 2015, the portal serves as a centralized
                  and national database of Darpan registration for trusts, NGOs
                  and VOs in India.
                </span>
              </p>
              <p>
                <span>During the&nbsp;</span>
                NGO Darpan Portal registration
                <span>
                  , NGOs and VOs provide self-declared information about their
                  activities, projects, sources of income, and other relevant
                  details. This registration process helps the government and
                  other stakeholders gain a better understanding of the
                  activities and impact of NGOs across different sectors and
                  locations.
                </span>
              </p>
              <p>
                <span>
                  The primary objectives of Darpan Registration for Trusts, NGOs
                  and VOs include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Facilitating Government Grants and Funding
                      </strong>
                      <strong>: </strong>NGOs receive a Unique Darpan ID upon
                      registration, which simplifies the process of applying for
                      government grants and funding.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enhancing Transparency and Accountability</strong>
                      <strong>:</strong> By making the information publicly
                      accessible, the Darpan portal of Niti Aayog ensures
                      greater transparency and accountability in NGO activities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Creating a Comprehensive Database</strong>
                      <strong>: </strong>The centralized database helps in the
                      efficient management and monitoring of NGOs and their
                      contributions to various social causes.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>Overall,&nbsp;</span>
                NGO Darpan Portal registration&nbsp;
                <span>
                  is a crucial step for NGOs and VOs seeking to enhance their
                  credibility, secure government support, and ensure their
                  operations are transparent and accountable.
                </span>
              </p>
              <h3>
                <span>Applicability of Darpan Registration</span>
              </h3>
              <p>
                <span>
                  Any registered Non-Government Organisation (NGO) or Voluntary
                  Organisation (VO) is eligible to obtain NGO Darpan
                  Registration. However, this registration becomes mandatory for
                  NGOs and VOs seeking foreign contributions under the FCRA and
                  government grants under various schemes and initiatives. Upon
                  registration, these organisations receive a Unique Darpan ID,
                  which facilitates a transparent and straightforward
                  application process for grants and funding opportunities. The
                  following institutions are eligible for NGO Darpan
                  Registration online in India:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Registered Trusts</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Registered Societies</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Registered Section 8 Companies</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Charitable Associations</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Any other NGO/VO</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Key Points of NGO Darpan Portal Registration</span>
              </h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Managed by NITI Aayog: </strong>Following the
                        dissolution of the Planning Commission in January 2015,
                        NITI Aayog, along with the National Informatics Center,
                        has been responsible for managing the&nbsp;
                      </span>
                      NGO Darpan Portal registration<span>.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unique ID for NGOs/VOs:</strong>
                      <strong> </strong>By registering on the NGO Darpan portal,
                      organisations receive a Unique ID, which is essential for
                      accessing government funds and participating in various
                      governmental schemes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Mandatory for Government Funding:</strong>
                      </span>
                      <span>
                        {" "}
                        In certain cases, registering with NGO Darpan becomes a
                        prerequisite for receiving grants from Government
                        Ministries and Departments.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Facilitation of Legal Compliances:</strong>
                      <strong> </strong>The Unique ID obtained through NGO
                      Darpan registration online is necessary for fulfilling
                      other regulatory requirements, such as FCRA registration
                      and Form-10A submission, among others.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Recognition Across Ministries:</strong>
                      <strong> </strong>Various government departments recognise
                      and require NGO Darpan registration, making it an integral
                      part of governmental dealings with NGOs and VOs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transparency and Accountability:</strong>
                      <strong> </strong>The portal also plays a vital role in
                      maintaining detailed records of all registered NGOs and
                      VOs, enhancing transparency, accountability, and
                      efficiency in the operations of these organisations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Strengthened Government-NGO Partnership</strong>
                      <strong>:</strong> By streamlining the process of data
                      collection and dissemination, the NGO Darpan portal
                      fosters a stronger partnership between the government and
                      the voluntary sector, aimed at collaborative governance
                      and development initiatives.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Eligibility Criteria for NGO Darpan Registration</span>
              </h3>
              <p>
                <span>
                  To be eligible for registration under the NGO Darpan portal
                  managed by NITI Aayog, an organisation must meet specific
                  legal form requirements. Eligible entities include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Voluntary Organizations (VOs) or Non-Governmental
                        Organizations (NGOs) that are registered as:
                      </span>
                    </li>
                    <div className="row gy-3 gx-xl-8">
                      <div className="col-xl-12">
                        <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                          <li>
                            <span>Trusts</span>
                          </li>
                          <li>
                            <span>Societies</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Nonprofit companies are classified as Section 8
                        companies (previously known as Section-25 companies)
                        under the Indian Companies Act, 2013 (formerly 1956).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  It's important to note that individuals cannot apply for
                  registration. Only organisations that are duly registered in
                  one of the above categories and possess the necessary
                  documentation to prove their established legal status are
                  considered eligible for NGO Darpan registration
                  process.&nbsp;&nbsp;
                </span>
              </p>
              <h3>
                <span>NGO Darpan Registration Documents</span>
              </h3>
              <p>
                <span>
                  For nonprofit organisations seeking to register on the NGO
                  Darpan portal and obtain a Darpan registration certificate, a
                  specific set of documents is essential to complete the process
                  successfully. Ensure you have the following documents ready
                  before you begin the registration:
                </span>
              </p>
              <p>
                <span>
                  These are official papers or digital files that you need to
                  submit to verify the legitimacy and operational status of your
                  NGO. They include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Address Proof of the NGO:</strong>
                      <strong> </strong>Any official document confirming the
                      NGO’s physical location.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Organisation PAN: </strong>
                      </span>
                      <span>
                        The Permanent Account Number card or certificate for the
                        NGO.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>NGO Registration Certificate:</strong>
                      </span>
                      <span>
                        {" "}
                        The legal document that confirms your NGO's registration
                        as a trust, society, or Section 8 company.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>
                  <span>Details Required for Darpan ID Registration</span>
                </strong>
              </p>
              <p>
                <span>
                  These are specific pieces of information related to the
                  members and activities of your NGO that you must provide
                  during the registration process. They include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Name of the NGO: </strong>
                      </span>
                      <span>The full legal name as registered.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Details of Members:</strong>
                      <strong> </strong>Names, phone numbers, addresses, and
                      identity proofs for all key organisation members.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Details of Grants and Donations:</strong>
                      </span>
                      <span>
                        {" "}
                        Records of all financial support received over the last
                        five years.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Area of Activities</strong>: Information regarding
                      the geographical and operational scope of the NGO’s
                      projects and initiatives.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <strong></strong>
              </h3>
              <h3>
                <span>NGO Darpan Registration Benefits</span>
              </h3>
              <p>
                <span>
                  Registering with the NGO Darpan portal offers a myriad of
                  advantages that significantly enhance the operation and
                  perception of NGOs and VOs (Voluntary Organizations) in India:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Government Engagement:</strong> It facilitates
                      direct engagement between NGOs/VOs and various government
                      departments, making interaction and communication more
                      streamlined.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enhanced Credibility:</strong>
                      <strong> </strong>Registration improves the
                      trustworthiness and credibility of NGOs and VOs,
                      establishing them as legitimate entities in the eyes of
                      the public and the government.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Access to Grants:</strong>
                      </span>
                      <span>
                        {" "}
                        A unique ID, provided upon creating NGO Darpan login and
                        registration, is essential when applying for government
                        grants. This ID is a prerequisite for many forms of
                        government assistance.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Timely Updates on Grants: </strong>
                      </span>
                      <span>
                        The NGO Darpan portal coordinates with government
                        ministries and departments to share crucial information
                        with registered NGOs and VOs. This ensures that
                        organisations receive timely updates on available
                        grants.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Seamless Data Flow:</strong>
                      </span>
                      <span>
                        {" "}
                        The portal enables a seamless flow of data to NGOs and
                        VOs across the country directly from the government.
                        This improves the efficiency and speed of information
                        dissemination.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Access to Information on Government Initiatives:
                      </strong>
                      <strong> </strong>NGOs and VOs can easily obtain updates
                      and detailed information on new government programs,
                      projects, schemes, and the progress of existing
                      initiatives.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Repository of Information: </strong>
                      </span>
                      <span>
                        NGO Darpan helps create a comprehensive database or
                        repository of information regarding VOs and NGOs, which
                        aids in research and policy-making.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Multiple Grant Validation: </strong>
                      </span>
                      <span>
                        &nbsp;Darpan registration certificate validates NGOs and
                        VOs for taking multiple grants, simplifying the process
                        of obtaining additional funding.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Improved Public Image:</strong>
                      <strong> </strong>Being registered on the NGO Darpan
                      portal helps create a better image and goodwill for the
                      NGO or VO, enhancing its reputation and effectiveness in
                      the community.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>NGO Darpan Registration Process</span>
              </h3>
              <p>
                <span>The NGO Darpan Registration Process</span>
                <span>
                  {" "}
                  is a structured approach to formally recognise NGOs in India,
                  allowing them to access government funds and participate in
                  various schemes. This involves preparing documents,&nbsp;
                  generating an NGO Darpan login, submitting the application and
                  processing the NGO Darpan certificate download. Here’s a
                  step-by-step breakdown of how to complete the Darpan ID
                </span>
                <span> registration:</span>
              </p>
              <h4>
                <span>Step 1: Documentation Preparation</span>
              </h4>
              <p>
                <span>
                  Before initiating the registration process, ensure that all
                  required documents are prepared. These typically include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Proof of address of the NGO</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>PAN card of the NGO</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Registration certificate of the NGO</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Details of the NGO's members (names, phone numbers,
                        addresses, identity proofs)
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Information about grants and donations received over the
                        last five years
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Description of the NGO’s working area and activities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 2: Create an Account on the NGO Darpan Portal</span>
              </h4>
              <p>
                <span>
                  Visit the official NGO Darpan website managed by NITI Aayog.
                  You will need to create an account and on this portal. This
                  involves:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Generating NGO Darpan login credentials by providing an
                        email address and creating a password
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Activating the account through a verification email
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 3: Filling the Online Application</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Once your account is set up, log in and start the
                        application process:
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Enter detailed information about your NGO, including
                        registration details, key contacts, and operational
                        areas
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Upload the required documents in the prescribed format
                        and size
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 4: Submission and Verification</span>
              </h4>
              <p>
                <span>After completing the </span>
                <span>Darpan Registration Form</span>
                <span>
                  {" "}
                  application and uploading documents, submit your application
                  through the portal. The details provided will be verified by
                  the respective department. This step checks for:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Completeness and accuracy of the information provided
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>The authenticity of the documents uploaded</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 5: Issuance of Unique Identification Number</span>
              </h4>
              <p>
                <span>
                  Once your application is verified and approved, your NGO will
                  be issued a Unique Identification Number (UIN), also known as
                  the Darpan ID. This number is crucial for:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Applying for government grants</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Participating in government schemes</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Ensuring transparency and establishing credibility in
                        operations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Darpan ID will appear in the Unique ID Details section of your
                  Darpan account on the NGO Darpan portal.&nbsp;
                </span>
                Ensure to complete the process of the NGO Darpan certificate
                download and keep it secure.
              </p>
              <p>
                <strong>Note:</strong> Keep your NGO’s profile updated on the
                NGO Darpan portal to ensure you remain eligible for ongoing and
                new government initiatives.&nbsp;
              </p>
              <h3>
                <span>
                  Easily Secure Your Darpan Portal Registration with
                  LegallensIndia!
                </span>
              </h3>
              <p>
                <span>
                  Simplify your NGO Darpan Registration process with
                  LegallensIndia! Our dedicated team of experts ensures that your
                  NGO or Voluntary Organisation is registered accurately and
                  efficiently. By partnering with us, you can quickly obtain
                  your Unique Darpan ID and D
                </span>
                arpan registration certificate, which enhances your
                organisation’s credibility and opens doors to government grants
                and funding opportunities.&nbsp;
              </p>
              <p>
                <strong>
                  <em>
                    <span>Contact us now to streamline your </span>
                    <span>NGO&nbsp; Darpan registration process</span>
                    <span> and take your organisation to the next level!</span>
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
