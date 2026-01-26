import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ICEGATERegistration() {
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
                ICEGATE Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                ICEGATE, or Indian Customs Electronic Gateway, is an essential
                portal for the trading community.
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
                { id: 3, title: "ICEGATE Registration", url: "" },
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
                      <h5 className="card-title">ICEGATE Registration</h5>
                      <p>
                        ICEGATE, or Indian Customs Electronic Gateway, is an
                        essential portal for the trading community.
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

              <h2 className="display-4 mb-3">ICEGATE Registration</h2>
              <p>
                ICEGATE, or Indian Customs Electronic Gateway, is an essential
                portal for the trading community. It offers a streamlined
                platform for the electronic filing of customs documents such as
                Shipping Bills and Bills of Entry. This registration is not just
                a procedural step; it's a strategic move towards faster customs
                clearance and enhanced transparency in international
                transactions. Understanding the criticality of this process,
                LegallensIndia offers specialized assistance to businesses,
                ensuring that their ICEGATE registration process is seamless and
                efficient.
              </p>
              <p>
                <strong>
                  <em>
                    Contact our experts today and take the first step towards
                    efficient customs clearance!
                  </em>
                </strong>
              </p>
              <h3>What is ICEGATE?</h3>
              <p>
                As mentioned above, ICEGATE stands for Indian Customs Electronic
                Gateway, a key initiative by the Indian Customs to streamline
                and expedite the customs clearance process through
                digitalization. It serves as the digital portal for the trading
                and logistics community to interact with the Customs department
                through official ICEGATE login. It facilitates the electronic
                filing of customs documents such as Shipping Bills for exports
                and Bills of Entry for imports.
              </p>
              <h3>ICEGATE registration</h3>
              <p>
                ICEGATE registration is critical for entities involved in
                international trade, such as cargo carriers and trading
                partners. It enables them to file essential customs documents
                online, including Shipping Bills and Bills of Entry, through the
                Indian Customs Electronic Gateway. This digital platform is
                designed to streamline and accelerate the customs clearance
                process by minimizing paperwork and enhancing electronic
                submissions, leading to faster processing times, reduced
                operational costs, and improved visibility of shipment statuses.
              </p>
              <h3>Eligibility for ICEGATE Registration</h3>
              <p>
                ICEGATE registration is open to a wide range of entities
                involved in the import and export process. Eligible entities can
                register and access this digital portal through official ICEGATE
                login. Below, we have listed the entities eligible for ICEGATE
                registration process:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  F card Custom Brokers or Custom House Agents (CHA
                  -Individuals, Firms or Employees
                </li>
                <li><i className="uil uil-check"></i>{" "}IEC Certificate Holders</li>
                <li><i className="uil uil-check"></i>{" "}Console agents</li>
                <li><i className="uil uil-check"></i>{" "}Shipping Agents</li>
                <li><i className="uil uil-check"></i>{" "}Airlines</li>
                <li><i className="uil uil-check"></i>{" "}Air Cargo Agents</li>
                <li><i className="uil uil-check"></i>{" "}IEC Authorized persons</li>
              </ul></div></div>
              <h3 className="mt-4">Why do Traders Need ICEGATE Registration?</h3>
              <p>
                The primary reason for ICEGATE registration is that it is a
                prerequisite for the electronic filing of crucial documents
                related to customs clearance. Without a registered ICEGATE ID,
                one cannot submit these documents online through ICEGATE Login,
                which include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Shipping Bills:</strong> Required for the export of
                  goods from India, detailing the shipment's contents, value,
                  and destination.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Bill of Entries:</strong> Necessary for the import of
                  goods into India, providing specifics about the incoming
                  goods, their value, and the duties applicable.
                </li>
              </ul></div></div>
              <h3>Advantages of ICEGATE Registration</h3>
              <p>
                Registering at ICEGATE provides several key benefits that
                facilitate and enhance the customs clearance process for
                businesses and individuals engaged in international trade
                through India. These advantages include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Centralized Document Filing:</strong> With an ICEGATE
                  ID, users can file all necessary customs documents online,
                  including Shipping Bills and Bills of Entries, through a
                  single, centralized platform. This streamlines the submission
                  process and eliminates the need for physical paperwork.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Real-Time Tracking:</strong> Registrants can monitor
                  the status of their filings through ICEGATE's online document
                  tracking system, providing transparency and up-to-date
                  information on the progress of their customs jobs.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Immediate Notifications:</strong> Users receive
                  instant acknowledgements regarding the submission status of
                  their documents directly to their registered email. This
                  includes positive and negative acknowledgements and unique
                  identifiers like Shipping Bill (SB) and Bill of Entry (BE)
                  numbers, which are essential for tracking and reference.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Efficient Communication:</strong> ICEGATE facilitates
                  seamless communication between the customs department and
                  traders. While incoming files can be accepted from any email
                  ID, critical outbound communications such as queries and
                  responses are directed only to the registered email in the
                  ICEGATE database, ensuring secure and reliable communication.
                </li>
              </ul></div></div>
              <p>
                These benefits collectively contribute to a more efficient,
                transparent, and manageable customs clearance process, making
                ICEGATE an indispensable tool for those involved in India's
                international trade.
              </p>
              <h3>
                Transaction Types Eligible for ICEGATE Registration Process
              </h3>
              <p>
                At ICEGATE, you can register for a wide array of transaction
                types, accommodating the diverse needs of the international
                trading community. Here's a breakdown of the primary transaction
                types you can register for at ICEGATE:
              </p>
              <h4>Primary Transaction Types</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Exports:</strong> Registration for exports allows you
                  to file Shipping Bills electronically, facilitating the smooth
                  export of goods from India.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Imports:</strong> Import registration enables the
                  electronic submission of Bill of Entries, which is essential
                  for clearing imported goods into India.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>IGM (Import General Manifest):</strong> IGM
                  registration is crucial for shipping lines, airlines, and
                  cargo agents to declare the details of cargo arriving in
                  India.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>EGM (Export General Manifest):</strong> EGM is
                  necessary for exporters and shipping agents to file details of
                  cargo being shipped out of India, ensuring compliance with
                  export regulations.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Consol Manifest:</strong> This registration is vital
                  for consolidators to file consolidated cargo details,
                  enhancing cargo handling and customs clearance efficiency.
                </li>
              </ul></div></div>
              <h4 className="mt-4">Additional Transaction Capabilities</h4>
              <p>
                Beyond these primary transactions, ICEGATE also supports a range
                of other specific functions to facilitate smoother trade
                operations:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Query Replies:</strong> ICEGATE allows for the
                  submission and management of queries related to customs
                  processing, enabling efficient resolution of issues.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>
                    Amendments to BE (Bill of Entry) and SB (Shipping Bill):
                  </strong>{" "}
                  The platform offers the flexibility to make necessary
                  amendments to these documents, ensuring that all information
                  is accurate and up-to-date.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Documents Required for ICEGATE Registration</h3>
              <p>
                Here's the list of documents required for ICEGATE registration
                and start utilizing the digital portal with official ICEGATE
                Login:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Applicant Entity</strong>
                    </th>
                    <th className="border">
                      <strong>Documents Required</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Custom Broker/CHA (Individual)</td>
                    <td className="border">
                      Address Proof, Valid License or Permit
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Custom Broker/CHA (Firm)</td>
                    <td className="border">
                      Authorization Letter, Address Proof, Valid License or
                      Permit
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Custom Broker/CHA (Employee)</td>
                    <td className="border">
                      F-card/G-card, Authorization Letter, Address Proof
                      (Aadhaar/Voter ID/Passport/DL)
                    </td>
                  </tr>
                  <tr>
                    <td className="border">IEC Authorized Person</td>
                    <td className="border">
                      Authorization Letter, Address Proof
                    </td>
                  </tr>
                  <tr>
                    <td className="border">IEC Holders</td>
                    <td className="border">
                      Address Proof, Valid License or Permit
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Airlines/Air Agents</td>
                    <td className="border">
                      Authorization Letter, Address Proof, Valid License or
                      Permit
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Shipping Lines/Shipping Agents</td>
                    <td className="border">
                      Order of Commissioner, Authorization Letter, Address Proof
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Console Agents</td>
                    <td className="border">
                      Address Proof, Valid License or Permit
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>Note:</strong> For ICEGATE registration, the following
                are considered valid address proofs for the applicant :
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}Aadhaar Card</li>
                <li><i className="uil uil-check"></i>{" "}Voter ID</li>
                <li><i className="uil uil-check"></i>{" "}Driving License</li>
                <li><i className="uil uil-check"></i>{" "}Passport</li>
              </ul></div></div>
              <h3 className="mt-4">Types of ICEGATE Registration</h3>
              <p>
                ICEGATE offers various registration types to cater to the
                diverse needs of the trading community. Understanding these
                types helps entities choose the most suitable registration
                pathway for their operations. Here's an overview of the types of
                ICEGATE registrations:
              </p>
              <h4>ICEGATE Partnership Registration</h4>
              <p>
                This type of registration is designed for entities that wish to
                engage in electronic document filing through the ICEGATE portal
                as partners. It suits businesses looking for a comprehensive
                digital engagement with customs for their import/export
                activities.
              </p>
              <h4> ICEGATE Simplified Registration</h4>
              <p>
                The Simplified Auto Registration is designed to make the
                registration process more accessible to importers and exporters.
                It provides them with essential information services and the
                ability to submit certain types of documents without the
                comprehensive capabilities of full partnership registration.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  Primarily based on the Importer Exporter Code (IEC) and Goods
                  and Services Tax Identification Number (GSTIN).
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Requires OTP verification for email and mobile phones to
                  ensure security.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Allows for a more straightforward registration process without
                  uploading a ICEGATE Digital Signature Certificate (DSC),
                  verifying PAN, uploading additional documents to ICEGATE, or
                  undergoing a detailed approval process.
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Important Note:</strong>
              </p>
              <p>
                Entities registered under the Simplified Auto Registration
                category have limited capabilities and are not eligible to
                submit customs paperwork through ICEGATE. This registration type
                is ideal for entities that require basic access to the portal
                for information and minor submissions that don't include
                comprehensive customs documents.
              </p>
              <h3>ICEGATE Registration: Applicable Customs Ports</h3>
              <p>
                ICEGATE's comprehensive registration system enables users to
                conduct transactions with just a single registration across all
                Electronic Data Interchange (EDI) enabled Customs Ports in
                India.
              </p>
              <h3>DGFT Guidelines for ICEGATE Registration Process</h3>
              <p>
                The Directorate General of Foreign Trade (DGFT) provides
                comprehensive guidelines for entities looking to register on
                ICEGATE, especially those intending to file documents using the
                Remote EDI System (RES). Here's an overview of the key ICEGATE
                registration guidelines by DGFT, including creating an ICEGATE
                Digital signature:
              </p>
              <h4>Prompt Registration for IEC Holders:</h4>
              <p>
                IEC holders planning to file documents on ICEGATE are urged to
                register promptly through the new Registration Module to
                facilitate their document filing processes.
              </p>
              <h4>ICEGATE Digital Signature Certificate (DSC) Requirement:</h4>
              <p>
                Users are advised to have their className III Individual Type
                DSC tokens ready and plugged into their systems before starting
                the registration process.
              </p>
              <p>
                DSCs must be uploaded during registration to authenticate the
                user's identity and ensure secure transactions.
              </p>
              <h4>PAN Verification</h4>
              <p>
                The applicant's PAN details will be cross-verified against the
                Income Tax Department's PAN database during registration to
                ensure accuracy and authenticity.
              </p>
              <p>
                A scanned PAN card copy must also be uploaded, further
                validating the applicant's details.
              </p>
              <h4>Name Consistency</h4>
              <p>
                The name provided during the ICEGATE registration should match
                the name on the applicant's PAN card to avoid discrepancies and
                potential issues in the verification process.
              </p>
              <h4>CHA Employee Registration</h4>
              <p>
                Only G-Card holders can register as Custom House Agent (CHA)
                employees. This is because G-Card holders are authorized to
                digitally sign documents using DSC, a capability not extended to
                H-Card holders.
              </p>
              <h4>Parent and Child User Registration</h4>
              <p>
                An entity can register one parent user on ICEGATE, with
                subsequent users registered as child users under the primary
                account, facilitating structured access and management.
              </p>
              <h4>ICES Registration Number Utilization</h4>
              <p>
                The ICES (Indian Customs EDI System) registration number
                provided during the registration process is used to access
                information from ICES directories and is displayed for
                verification purposes.
              </p>
              <h4>Data Collection and Verification</h4>
              <p>
                The data collection process for the registration commences once
                the applicant verifies the information provided, ensuring that
                all entered data is accurate and confirmed by the user.
              </p>
              <h4>Authority to Disable IEC-Authorized Person</h4>
              <p>
                Suppose an IEC-authorized person is no longer associated with
                the IEC holder. In that case, the IEC holder has the right to
                disable this person's access in the ICEGATE Registration module,
                ensuring security and control over who has access to file
                documents on behalf of the entity.
              </p>
              <h3>Simplify Your ICEGATE Registration with LegallensIndia</h3>
              <p>
                Choosing LegallensIndia for a seamless ICEGATE registration and
                ICEGATE Login setup. It ensures that your business complies with
                all customs regulations without any complexities. We provide
                professional support from start to end, including creating a
                Digital signature ICEGATE. With a team of dedicated experts
                well-versed in the intricacies of international trade
                regulations and the ICEGATE portal, LegallensIndia provides
                personalized guidance through every step of the registration
                process.
              </p>
              <p>
                <strong>
                  <em>
                    Ready to streamline your ICEGATE registration process? Talk
                    to our experts today!
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
