import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DINReactivation() {
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
              <h1 className="display-1 text-white mb-3">DIN Reactivation</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Director Identification Number (DIN) may be subject to
                deactivation due to non-compliance with regulatory requirements.
                Reactivate it by filing Form DIR-3 through LegallensIndia with
                expert assistance.
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
                { id: 2, title: "MCA Services", url: "MCAServices" },
                { id: 3, title: "DIN Reactivation", url: "" },
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
                      <h5 className="card-title">DIN Reactivation</h5>
                      <p>
                        Director Identification Number (DIN) may be subject to
                        deactivation due to non-compliance with regulatory
                        requirements. Reactivate it by filing Form DIR-3 through
                        LegallensIndia with expert assistance.
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
                DIN Reactivation - Filing Form DIR-3 KYC
              </h2>
              <p>
                Director Identification Number (DIN) is an essential identifier
                for anyone aspiring to be a director in Indian companies, issued
                by the Ministry of Corporate Affairs (MCA). It's crucial for
                maintaining a record of an individual's involvement in corporate
                governance. Directors are required to update their KYC details
                annually through the{" "}
                  DIR-3 KYC form{" "}
                with the MCA. Failure to do so leads to the deactivation of the
                DIN, which restricts their ability to function in corporate
                roles. To reactivate a deactivated DIN, directors must file the
                DIR-3 KYC form, sometimes with a late fee, depending on the
                delay.
              </p>
              <p>
                This can be a bit complicated and time-consuming. That's where
                LegallensIndia comes in. We specialise in helping directors to
                done DIN reactivation easily. Our team guides you through each
                step on how to reactivate DIN number, handles the paperwork, and
                offers advice to ensure you can get back to your director duties
                quickly and without hassle.
              </p>
              <h3>Director Identification Number (DIN)</h3>
              <p>
                A Director Identification Number (DIN) is a compulsory
                requirement for a company's current and prospective directors.
                This 8-digit Unique Identification Number is assigned to
                directors following the guidelines established by the amendment
                to the Companies Act. Once issued, a DIN remains valid for the
                lifetime of the director.
              </p>
              <h3>What is Form DIR-3 KYC?</h3>
              <p>
                Form DIR-3 KYC is an electronic form mandated by the Ministry of
                Corporate Affairs (MCA) to update the KYC (Know Your Customer)
                details of individuals who have been allotted a Director
                Identification Number (DIN).
              </p>
              <h3>Applicability</h3>
              <p>
                Form DIR-3 KYC is a mandatory filing requirement under the
                Companies (Appointment and Qualification of Directors) Rules,
                2014. It applies to individuals allotted a Director
                Identification Number (DIN) by or before March 31st, 2018, and
                whose DIN status is 'approved'.
              </p>
              <h3>Purpose of DIR-3 KYC (Know Your Customer) </h3>
              <p>
                The purpose of this form is to conduct the annual KYC (Know Your
                Customer) process for directors and must be submitted to the
                Registrar of Companies (ROC). This form is essential for
                maintaining current and accurate director information with the
                ROC, including addresses, contact numbers, and email addresses.
              </p>
              <h3>Annual Deadline for Filing Form DIR-3 KYC</h3>
              <p>
                The deadline for filing Form DIR-3 KYC is set as September 30th
                of each year. However, this due date is subject to any
                extensions that may be granted.
              </p>
              <p>Types of DIR-3 KYC Forms</p>
              <h3>DIR-3 KYC eForm</h3>
              <p>
                First-time filers of DIR-3 KYC must use the eForm DIR-3 KYC,
                accessible on the MCA (Ministry of Corporate Affairs) portal.
                This form is also required for existing filers updating their
                mobile number or email address.
              </p>
              <h3>DIR-3-KYC-WEB</h3>
              <p>
                The DIR-3 KYC web form is a simplified version available for DIN
                holders who have previously filed a DIR-3 KYC eForm. Accessible
                through the MCA web service, this form streamlines the filing
                process by pre-filling most of the information, making annual
                DIR-3 compliance more efficient.
              </p>
              <h3>Penalty for Non-Filing of DIR-3 KYC</h3>
              <p>
                A fine of INR 5,000 is imposed on individuals who fail to comply
                with the filing requirement within the stipulated timeframe.
              </p>
              <h3>DIN Deactivation</h3>
              <p>
                If a director fails to submit e-Form DIR-3 KYC by the 30th of
                September on the MCA 21 portal, their Director Identification
                Number (DIN) will be marked as 'Deactivated due to Non-filing of
                DIR-3 KYC' by the department.
              </p>
              <h3>DIN Reactivation</h3>
              <p>
                Every holder of a Director Identification Number (DIN) whose DIN
                has been deactivated due to non-compliance with the DIR-3 KYC
                filing requirement must file the e-form DIR-3 KYC or complete
                the KYC process through the designated web service, along with
                paying the applicable fee. This need to be done for DIN
                reactivation.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> After the DIR-3 KYC form
                      is submitted, it undergoes a Straight Through Processing
                      (STP) for approval.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Upon successful
                      approval, the system automatically reactivates the
                      deactivated DIN. This process ensures that all directors
                      maintain up-to-date KYC information as per regulatory
                      requirements.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required</h3>
              <p>
                The following documents are required to file DIR-3 KYC for DIN
                reactivation process:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Digital Signature Certificate (DSC): </strong>
                      Class-2 DSC linked to the individual's PAN.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN Card: </strong>Provide a self-attested copy of
                      the PAN card.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proof of Address: </strong>Submit a self-attested
                      copy of an Aadhar Card, Voter’s ID Card, or Driving
                      License.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Photograph: </strong>A self-attested passport
                      photograph is required and mandatory for foreign
                      nationals.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Contact Verification and
                      Personal Details for DIR-3 KYC
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Mobile Number &amp; Email Address: </strong>A
                      unique personal mobile number and email address for OTP
                      verification purposes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Additional Personal Details: </strong>Information
                      regarding Citizenship, Nationality, and Residential
                      Status.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Streamline Your DIN Reactivation Process with LegallensIndia
              </h3>
              <p>
                At LegallensIndia, we offer comprehensive assistance at every
                stage of the DIN reactivation process through DIR-3 KYC form
                filing:
              </p>
              <h4>DIN Application Support</h4>
              <p>
                Our team guides you get the DIR-3 KYC form, ensuring you have
                the correct version for DIN holders with deactivated numbers.
              </p>
              <p>
                We help you accurately fill in your DIN on the form. If your DIN
                was deactivated due to previous non-submission, we assist in the
                reactivation process, including paying any late fees. We
                completely guide you through on how to reactivate DIN number.
              </p>
              <h4>Form Completion Guidance</h4>
              <p>
                Our experts ensure your personal information is accurately
                entered, including your name as per your PAN card, father's
                name, nationality, date of birth, and residential address
                details.
              </p>
              <h4>PAN Verification Process</h4>
              <p>
                We facilitate the PAN verification process, ensuring your
                details match the PAN database. For foreign nationals without a
                PAN, we ensure that the name on the form aligns with your DSC.
                Contact Information Update and Verification
              </p>
              <p>
                Our team aids in updating your contact details and guides you
                through the OTP verification process for your mobile number and
                email address.
              </p>
              <h4>Document Attachment Support</h4>
              <p>
                We assist in preparing and attaching self-attested copies of
                your PAN, address proof, photograph, and any other necessary
                documents, ensuring clarity and compliance.
              </p>
              <h4>Digital Signature</h4>
              <p>
                LegallensIndia assists in obtaining and applying the required
                digital signature from a recognised professional to authenticate
                your form. Form Submission
              </p>
              <p>
                Our team thoroughly reviews your form for accuracy and
                completeness before guiding you through the submission process
                on the MCA portal.
              </p>
              <h4>SRN Generation and Follow-up</h4>
              <p>
                After submission, we help track your Service Request Number
                (SRN) for future references and correspondence with the MCA.
                Email Confirmation Tracking
              </p>
              <p>
                We monitor and confirm the receipt of the acknowledgement email
                from MCA, ensuring your DIR-3 KYC form submission is successful.
              </p>
              <h4>Additional Support</h4>
              <p>
                LegallensIndia provides reminders and assistance for annual
                compliance, ensuring timely and hassle-free submissions in
                subsequent years using the DIR-3 KYC Web service on the MCA
                portal.
              </p>
              <p>
                With LegallensIndia, you can be assured of a smooth and guided
                experience in reactivating your DIN and staying compliant with
                MCA regulations.
              </p>
              <p>
                <strong>
                  <em>
                    Contact Our Experts Today to Reactivate Your DIN easily!
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
