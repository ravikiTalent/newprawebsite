import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function GSTAmendment() {
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
              <h1 className="display-1 text-white mb-3">GST Amendment</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                After obtaining GST registration, various scenarios may arise
                where updating details becomes necessary, leading to a GST
                Amendment.
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
                { id: 2, title: "GST", url: "GST" },
                { id: 3, title: "GST Amendment", url: "" },
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
                      <h5 className="card-title">GST Amendment</h5>
                      <p>
                        After obtaining GST registration, various scenarios may
                        arise where updating details becomes necessary, leading
                        to a GST Amendment.
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

              <h2 className="display-4 mb-3">GST Registration Amendment</h2>
              <p>
                After obtaining GST registration, various scenarios may arise
                where updating details becomes necessary, leading to a GST
                Amendment. GST amendment refers to the process of making changes
                or updates to the details provided during GST registration.
                These changes could include alterations to business information,
                contact details, or other crucial particulars. GST amendments
                are necessary to ensure that the information provided to tax
                authorities remains accurate and up-to-date, reflecting any
                changes in business operations or structure. By keeping GST
                registration details current, businesses can maintain compliance
                with tax regulations and avoid potential penalties
              </p>
              <p>
                LegallensIndia experts are here to assist. With our expertise and
                guidance, applying for GST registration amendment becomes
                seamless. From ensuring compliance with regulatory requirements
                to expediting the application process, LegallensIndia experts
                provide comprehensive support, ensuring businesses can easily
                adapt to evolving needs.
              </p>
              <h3>GST Registration</h3>
              <p>
                Under the Goods and Services Tax (GST) regime, GST Registration
                is a process by which businesses and individuals are required to
                register themselves with the tax authorities if their turnover
                exceeds the threshold limits specified by the government. Once
                registered, they are issued a unique Goods and Services Tax
                Identification Number (GSTIN), which they use for filing GST
                returns, paying taxes, and complying with other GST regulations.
              </p>
              <p>
                <strong>
                  <em>
                    Obtain your GST registration effortlessly with LegallensIndia!
                  </em>
                </strong>
              </p>
              <h3>Amendment of GST registration</h3>
              <p>
                Amendment of GST registration refers to modifying or updating
                the details provided during the initial GST registration. It
                allows registered individuals or entities to change their
                registration information as required by updating particulars
                such as business address, contact details, authorized
                signatories, business activities, or any other relevant
                information.
              </p>
              <h3>Types of GST Registration Amendments</h3>
              <p>
                Amendment of registration under GST details is structured into
                three primary categories, each defined by the required
                authorisation level and the timeline for implementing changes.
                Moreover, when requesting amendments to certain sections of the
                registration application, it's mandatory to justify the need for
                these changes as part of the GST registration protocol.
              </p>
              <h4>Amendments to Core Fields</h4>
              <p>
                Amendments in this category concern critical information such as
                the legal name of the business, the main business location, and
                any secondary business locations. Changes to these core fields
                require approval from the appropriate governing body and usually
                take about 15 days to receive confirmation. These changes are
                integral to the business's GST registration identity.
              </p>
              <h4>Core Field Details</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  The legal name of the business providing the PAN remains
                  unchanged
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Main and secondary business locations, assuming there's no
                  change in the state
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Changes involving key stakeholders like promoters, partners,
                  Karta, the managing committee, or the CEO
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>Verification and Approval</strong>
              </p>
              <p>
                Amendments to core fields necessitate verification and approval
                by a tax official. This is because changes in core fields often
                relate to fundamental aspects of the business identity and legal
                standing, which could impact tax liability and compliance.
              </p>
              <h4>Amendments to Non-core Fields</h4>
              <p>
                This category includes all other registration details that don't
                need approval from a regulatory body. Changes to non-core fields
                can be made directly online, facilitating a swift update
                process. This category essentially covers all details outside of
                core fields, allowing businesses to modify certain information
                conveniently.
              </p>
              <p>
                <strong>Included Changes:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}Updates to bank account details</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Adjustments in business information</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Updates to the list of goods and services offered</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Modifications to state-specific details without altering the
                  state
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Changes in authorized signatories or representatives</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Updates or modifications in details of existing stakeholders
                  like promoters, partners, or Karta
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Minor adjustments in the current main or secondary business
                  locations
                </li>
              </ul></div></div>
              <p className="mt-4">
                <strong>No Official Approval Required </strong>
              </p>
              <p>
                Amendments in non-core fields do not require approval from a tax
                official. The taxpayer can make these changes directly through
                the GST portal, and they are generally processed automatically.
              </p>
              <p>
                The distinctions between core and non-core fields are outlined
                in the table below:{" "}
              </p>
              <div className="table-responsive m-b-10">
                <table className="table mb-5 border">
                  <thead>
                    <tr>
                      <th className="border">
                        <strong>Core fields (Approval Required)</strong>
                      </th>
                      <th className="border">
                        <strong>Non-Core fields (No Approval Required)</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">
                        Name of the Business (Legal Name) if there is no change
                        in PAN
                      </td>
                      <td className="border">
                        <p>
                          All the other fields of registration application
                          except the following:
                        </p>
                        <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                          <li className="">
                      <i className="uil uil-check"></i>{" "}The Legal name of the business,</li>
                          <li className="">
                      <i className="uil uil-check"></i>{" "}Addition/ deletion of stakeholder details</li>
                          <li className="">
                      <i className="uil uil-check"></i>{" "}Principal place of business</li>
                          <li className="">
                      <i className="uil uil-check"></i>{" "}Another place of business.</li>
                        </ul></div></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        Addition / Deletion of Stakeholders
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        Principal Place of Business (other than a change in
                        State)
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        Additional Place of Business (other than a change in
                        State)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4>Updating Email or Mobile Number</h4>
              <p>
                A specific procedure is followed to update the contact email or
                mobile number linked with the GST account, starting with an
                online verification process on the common GST portal. This step
                is further reinforced with an OTP (One-Time Password)
                verification, ensuring the contact details are accurate and
                secure, thus maintaining the integrity of the GST registration
                information.
              </p>
              <h3>Eligibility Criteria for Amendment of GST Registration</h3>
              <p>
                Any taxpayer of the following category registered under GST can
                file the amendment of registration under GST:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}New Registrants &amp; Normal Taxpayers</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  TDS/ TCS Registrants, UN Bodies, Embassies &amp; others, and
                  Notified persons having UIN
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}Non-Resident Taxable Person</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}GST Practitioner</li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Online Details and Database Access or Retrieval Service
                  Provider
                </li>
              </ul></div></div>
              <h3 className="mt-4">GST Amendment – Changes to Business Name</h3>
              <p>
                In instances where a GST name change is needed due to
                alterations in a business's legal name, the GST registration
                certificate remains valid and does not require cancellation.
                Instead, the GST name change can be executed by amending the
                existing GST registration to mirror the new business name.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  This amendment process involves submitting FORM GST REG-14 on
                  the GST portal within 15 days following the event of the
                  business name change.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Upon submission for the GST name change, the GST Officer must
                  review the application and, if found satisfactory, approve the
                  amendment to the business name within 15 working days using
                  FORM GST REG-15.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  Following approval, the amendment will be effective from the
                  date the need for the change arose.
                </li>
              </ul></div></div>
              <h3 className="mt-4">GST Amendment – Changes to Address</h3>
              <p>
                In case of any changes to the address of the principal place of
                business or any other area of business, GST FORM REG-14 can be
                filed. For changes to address, proof of address for the new
                location must be provided in the GST registration amendment
                application. Accepted proof of address includes:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>For Own Premises:</strong> Any document supporting the
                  premises' ownership, such as the latest Property Tax Receipt,
                  Municipal Khata copy, or copy of the Electricity Bill.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>For Rented or Leased premises:</strong> A copy of the
                  valid Rent / Lease Agreement with any document supporting the
                  Lessor's ownership of the premises, such as the Latest
                  Property Tax Receipt, Municipal Khata copy, or copy of the
                  Electricity Bill.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    For premises not falling under any of the above categories:
                  </strong>{" "}
                  A copy of the Consent Letter with any document in support of
                  the consenter's ownership of the premises, like a Municipal
                  Khata copy or an Electricity Bill copy. The same documents may
                  be uploaded for shared properties.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>
                    For rented/leased premises where the Rent/lease agreement is
                    unavailable:
                  </strong>{" "}
                  An affidavit to that effect should be attached along with any
                  document supporting the possession of the premises, like a
                  copy of the Electricity Bill.
                </li>
              </ul></div></div>
              <p className="mt-4">
                If the principal place of business is located in an SEZ or the
                applicant is an SEZ developer, Necessary documents/certificates
                issued by the Government of India must be uploaded.
              </p>
              <p>
                All changes to address recorded in the GST portal must be
                updated within 15 days of the change. When an application for a
                change of GST address is made, the GST office approves the
                change within 15 days. The date of Amendment on approval by the
                Officer is the date of the occurrence of the event warranting
                the Amendment.
              </p>
              <h3>GST Amendment – Changes to Promoter Information</h3>
              <p>
                In case of addition, deletion, or retirement of partners or
                directors, Karta, Managing Committee, Board of Trustees, Chief
                Executive Officer or equivalent responsible for the day-to-day
                affairs of the business, a GST amendment application must be
                filed within 15 days of such an event.
              </p>
              <p>
                On receipt of an application for GST amendment, the concerned
                officer would approve the change or request for additional
                information within 15 days of application.
              </p>
              <h3>GST Amendment – Changes to Mobile Number or Email ID</h3>
              <p>
                Any changes to the mobile number or email ID mentioned on the
                GST Common Portal can be made by the Authorized Signatory using
                his/her digital signature after an online verification process.
                Changes to a mobile number or email ID do not require filing a
                GST amendment application or verification by an Officer. Changes
                to email or mobile numbers in the GST common portal are
                considered routine changes.
              </p>
              <h3>GST Amendment – Changes to PAN</h3>
              <p>
                If a business or PAN constitution changes, a GST Amendment
                application cannot be made. Only a new GST registration
                application in FORM GST REG-01 can be submitted for changes to
                PAN.{" "}
              </p>
              <h3>Limitations in GST Registration Amendments</h3>
              <p>
                The following outlines specific details that cannot be altered
                within the GST registration framework:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>PAN Card Details:</strong> As mentioned above,
                  Altering PAN card information is impossible because GST
                  registration is directly linked to the PAN number.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Change in Business Type:</strong> Under GST, changing
                  your business type to require a new PAN is not
                  straightforward; it typically involves cancelling your
                  existing GST registration and applying for a new one.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Moving Between States:</strong> Similarly, when a
                  business relocates its primary place of operation from one
                  state to another, it modifies the? GSTIN. Consequently, this
                  situation necessitates cancelling the existing GST
                  registration and submitting a fresh application for a new GST
                  registration in the new state.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Modifying the Primary Authorized Signatory:</strong>{" "}
                  Changing the primary authorized signatory requires adding a
                  new primary signatory; without fulfilling this condition,
                  updating the primary signatory in GST registration is not
                  possible.
                </li>
              </ul></div></div>
              <h3 className="mt-4">GST Amendment Time Limit</h3>
              <p>
                The GST Amendment Time Limit is explained below, highlighting
                the key deadlines and steps involved in the process:
              </p>
              <h4>Notification Deadline</h4>
              <p>
                Taxpayers must be informed of changes to their GST details on
                the common portal within 15 days following the event that
                necessitates the change through a GST amendment application.
              </p>
              <h4>Officer Approval</h4>
              <p>
                The designated officer is tasked with verifying and approving
                the amendment application within 15 working days from its
                receipt. Approval makes the amendment effective retroactively
                from the date of the event prompting the change.
              </p>
              <h4>Notice for Additional Information</h4>
              <p>
                Suppose the amendment application is deemed unjustified or the
                documents are incomplete or incorrect. In that case, the officer
                may issue a notice for the taxpayer to provide additional
                information or clarification within 15 days
              </p>
              <p>
                The taxpayer has seven days from receiving the notice to submit
                the necessary clarification or further details.
              </p>
              <h4>Approval or Rejection</h4>
              <p>
                Upon a satisfactory response from the taxpayer, the officer will
                approve the GST amendment application.
              </p>
              <p>
                The officer may reject the application if the taxpayer's
                response is insufficient.
              </p>
              <h4>Automatic Amendment</h4>
              <p>
                Suppose the officer does not act within 15 days of receiving the
                amendment application or within seven working days of receiving
                additional information or clarification. In that case, the
                registration certificate will be automatically amended as
                requested. The amended certificate will be available on the
                Common Portal.
              </p>
              <h3>GST Registration Amendment Procedure</h3>
              <p>
                The application must be filed on the GST Common Portal to amend
                your GST registration.
              </p>
              <h4>Application Filing</h4>
              <p>
                You can file your amendment application on the GST Common
                Portal, specifying whether it's for core or non-core field
                changes.
              </p>
              <h4>Selecting Amendment Type</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>For core amendments:</strong> Choose the specific core
                  field you need to amend, such as business details, principal
                  or additional places of business, or promoters/partners
                  details.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>For non-core amendments:</strong> Select the
                  appropriate non-core field you wish to update.
                </li>
                <li className="">
                      <i className="uil uil-check"></i>{" "}
                  <strong>Editing and Document Upload:</strong> Amend the
                  required details within the selected field.
                </li>
              </ul></div></div>
              <p className="mt-4">
                Where necessary, upload supporting documents (e.g., address
                proof for changes to the principal place of business or ID proof
                for changes in partner/promoter details).
              </p>
              <h4>Submission and Verification:</h4>
              <p>
                After making changes, provide a reason for the amendment and its
                date, then proceed to 'Save and Continue'.
              </p>
              <p>
                Verify the amendment application using DSC, e-signature, or EVC,
                which will generate an Application Reference Number (ARN). An
                acknowledgement will be sent to your registered contact details.
              </p>
              <h4>Review and Approval (for core field amendments)</h4>
              <p>
                A tax officer will review the core field amendment application.
                Upon approval, you'll receive an approval order and an updated
                registration certificate. If the application is rejected, a
                notification will be sent to your registered contact details.
              </p>
              <h4>Automatic Update (for non-core field amendments):</h4>
              <p>
                Non-core field amendments are automatically updated upon
                submission and do not require tax officer approval. These
                changes are effective from the event date that necessitated the
                amendment.
              </p>
              <p>
                <strong>Note:</strong> If there's an ongoing amendment
                application with a generated ARN, another amendment cannot be
                submitted until the first is resolved. For non-core amendments,
                if a core amendment is pending, you will be notified and can
                choose to proceed; however, core changes won't reflect until
                approved.
              </p>
              <h3>Streamline Your GST Amendment Process with LegallensIndia</h3>
              <p>
                LegallensIndia provides comprehensive assistance with the GST
                amendment process, ensuring seamless navigation through
                regulatory requirements. Leveraging our expertise, businesses
                can efficiently handle amendments, whether they involve core
                fields like business details or non-core fields like bank
                details. Our platform simplifies the application filing on the
                GST Common Portal, guiding users through each step, from initial
                filing to document submission and verification. With
                LegallensIndia, businesses can confidently manage GST registration
                changes, ensuring compliance with regulatory standards while
                minimizing administrative burdens.
              </p>
              <p>
                <strong>
                  <em>
                    Get started with LegallensIndia today and experience
                    hassle-free GST compliance.
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
