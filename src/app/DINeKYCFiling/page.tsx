import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DINeKYCFiling() {
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
              <h1 className="display-1 text-white mb-3">DIN eKYC Filing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A Director Identification Number (DIN) is a unique number
                assigned to an individual who wishes to become a director or is
                already serving as a director of a company.
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
                { id: 3, title: "DIN eKYC Filing", url: "" },
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
                      <h5 className="card-title">DIN eKYC Filing</h5>
                      <p>
                        A Director Identification Number (DIN) is a unique
                        number assigned to an individual who wishes to become a
                        director or is already serving as a director of a
                        company.
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
                DIR 3 KYC - Application for KYC of Directors
              </h2>
              <p>
                A{" "}
                
                  Director Identification Number (DIN){" "}
                is a unique number assigned to an individual who wishes to
                become a director or is already serving as a director of a
                company. Earlier, obtaining a DIN was a one-time process that
                required submitting an application through e-Form DIR-3.
              </p>
              <p>
                However, with the Ministry of Corporate Affairs (MCA) now
                updating its records, every director holding a DIN must annually
                submit their{" "}
                
                  KYC details{" "}
                by filing e-Form DIR-3 KYC.
              </p>
              <p>
                If you're a director needing to fulfill annual KYC requirements,
                LegallensIndia makes it simple and hassle-free. Our experts are
                ready to assist you with your DIR 3 KYC filing to ensure you
                remain compliant with MCA regulations.
              </p>
              <p>
                <i>
                  Complete Your DIR 3 KYC Filing Effortlessly with
                  LegallensIndia!&nbsp;&nbsp;
                </i>
              </p>
              <h3>What is&nbsp; DIR-3 KYC Form?</h3>
              <p>
                As mentioned, Form DIR-3 KYC is an electronic form mandated by
                the Ministry of Corporate Affairs (MCA) for the purpose of
                updating the KYC (Know Your Customer) details of individuals who
                have been allotted a Director Identification Number (DIN).
              </p>
              <h3>Applicability of MCA Form DIR 3KYC</h3>
              <p>
                Form DIR-3 KYC is a mandatory filing requirement under the
                Companies (Appointment and Qualification of Directors) Rules,
                2014. It applies to individuals who have been allotted a
                Director Identification Number (DIN) and whose DIN status is
                'approved'.
              </p>
              <h4>Purpose of DIN KYC&nbsp; Filing</h4>
              <p>
                The purpose of this form is to conduct the annual KYC (Know Your
                Customer) process for directors, which must be submitted to the
                Registrar of Companies (ROC). This form is essential for
                maintaining current and accurate director information with the
                ROC, including addresses, contact numbers, and email addresses.
              </p>
              <h3>DIR-3 KYC Due Date</h3>
              <p>
                According to the recent announcement by the Ministry of
                Corporate Affairs (MCA), every director who was allotted a DIN
                on or before 31st March 2018 and whose DIN is in approved status
                must submit their KYC details to the MCA. This requirement also
                applies to disqualified directors.
              </p>
              <p>
                From the Financial Year 2019–20 onwards, it is mandatory for{" "}
                <b>
                  every director who has been allotted a DIN on or before the
                  end of the financial year and whose DIN remains approved to
                  file Form DIR-3 KYC by 30th September of the immediately
                  following financial year.
                </b>
              </p>
              <p>
                <span>
                  <i>
                    Latest Update: For the Financial Year 2024–25, the last date
                    for filing DIR-3 KYC without a fee has been{" "}
                    <span data-end="175" data-start="142">
                      extended to 15th October 2025 from the earlier due date of
                      30th September 2025
                    </span>
                    . After this date, a late filing fee of ₹500 will be
                    applicable.&nbsp;&nbsp;
                  </i>
                </span>
              </p>
              <h3>Types of e-Form DIR-3 KYC</h3>
              <p>
                Directors must submit their KYC details each year, and the
                Ministry of Corporate Affairs offers two ways to do this. The
                type of form to be filed depends on whether it is the first
                submission or if any changes in details are required.
              </p>
              <p>DIR-3 KYC (Form)</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> To be filed for the
                      first time after a DIN is allotted.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Also required if there
                      is any change or update in the director’s KYC details,
                      such as a new mobile number or email address.&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">DIR 3 KYC WEB</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> To be filed by a
                      director who has already submitted DIR-3 KYC or DIR-3 KYC
                      (Web) in a previous year, provided there is no change in
                      KYC details.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> In this version, the
                      director’s basic information is pre-filled from the MCA
                      database and cannot be edited.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Checkpoints for Filing e-Form DIR-3 KYC</h3>
              <p>
                When submitting the e-Form DIR-3 KYC, directors should keep the
                following points in mind:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Personal Contact Details:</b> Provide your own mobile
                      number and email address. These will be verified through a
                      one-time password (OTP).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Digital Signature: </b>The form must be signed using
                      the director’s own{" "}
                      
                        digital signature
                      .
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <b>Accuracy and Certification:</b> Ensure that all details
                      entered are complete and accurate. The form must be
                      certified by a practising Chartered Accountant (CA),
                      Company Secretary (CS), or Cost Accountant.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Consequences of Not Filing e-Form DIR-3 KYC Within the Due Date
              </h3>
              <p>
                If a director fails to file the e-Form DIR-3 KYC on the MCA21
                portal by 30th September, the Director Identification Number
                (DIN) will be marked as “Deactivated due to Non-filing of DIR-3
                KYC” by the Ministry of Corporate Affairs.
              </p>
              <p>
                To{" "}                
                  reactivate the DIN{" "}
                in the future, the director must file the pending e-Form DIR-3
                KYC and pay a late fee of ₹5,000. This penalty applies on or
                after 30th September of the relevant year. Filing the e-Form
                DIR-3 KYC is an annual requirement for all directors.
              </p>
              <h3>Documents Required for Filing e-Form DIR-3 KYC</h3>
              <p>
                To file the DIR-3 KYC form, keep the following documents ready:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Permanent address proof
                      – such as Voter ID, Driving Licence, or PAN card.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Present address proof –
                      for example, a recent utility bill (not older than 2
                      months) or a rental agreement.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhaar card.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Passport.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Other supporting
                      documents (if applicable).
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">In addition to the above, ensure you have:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The Digital Signature
                      Certificate (DSC) of the director (applicant) filing the
                      form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The DSC, membership
                      number, and certificate of practice number of a practising
                      professional, such as a Chartered Accountant (CA), Company
                      Secretary (CS), or Cost Accountant.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How to File DIR 3 KYC: Step-by-Step Guide&nbsp;</h3>
              <p>
                Here is a detailed guide to help you complete the filing of
                e-Form DIR-3 KYC successfully:
              </p>
              <h4>Step 1: Log in to the MCA Website</h4>
              <p>
                Start by visiting the Ministry of Corporate Affairs (MCA)
                website. On the homepage, click on the ‘Sign In/Sign Up’ button.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> If you are an existing
                      user, log in directly by entering your User ID and
                      password.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> If you are a new user
                      and have not yet registered on the MCA website, click the
                      ‘Register’ button. Provide all the required details in the
                      registration form and create your account. Once
                      registered, you can log in using the User ID and password
                      created during registration.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                Step 2: Provide Mobile Number and Email for OTP Verification
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> After logging in to the
                      MCA website, go to the ‘MCA Services’ tab. From there,
                      navigate to ‘Company e-Filing’, then select ‘DIN Related
                      Filings’ and click on ‘Form DIR-3 KYC’ or ‘Form DIR-3 KYC
                      Web’.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> On the form, the
                      director needs to enter the DIN number, mobile number, and
                      email address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> An OTP (One-Time
                      Password) will be sent to both the registered mobile
                      number and email address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Enter the OTPs received
                      on both mediums and then click on ‘Next’ to proceed.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                Step 3: Enter Personal and Identification Details in the MCA DIR
                3 KYC form
              </h4>
              <p>
                On the next page of the form, the director must fill in the
                following details accurately:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Full Name
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Father’s name
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Nationality
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Date of birth
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Gender
                    </li>
                    <li>
                      <i className="uil uil-check"></i> PAN number (Permanent
                      Account Number)&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Mobile number and the
                      OTP sent to the mobile number
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Email ID and the OTP
                      sent to the email ID
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhaar number
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Permanent residential
                      addresses&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Present residential
                      address&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                If the director is filing the e-Form DIR-3 KYC (Web), most of
                the above details will already be pre-filled from the MCA
                database. Only the details that are not pre-filled will need to
                be entered by the director.
              </p>
              <p>
                <b>Important Note: </b>It is mandatory to declare your{" "}                
                  Permanent Account Number (PAN
                ). After entering the PAN details, click on the ‘Verify
                income-tax PAN’ button. The system will automatically verify the
                information based on the PAN card number. In the case of foreign
                nationals who do not possess a PAN, the name entered in the form
                must exactly match the name provided in the Digital Signature
                Certificate (DSC) to ensure successful validation.
              </p>
              <h4>Step 4: Upload Attachments and Certify the e-Form</h4>
              <p>
                Once all details are entered, the director must upload the
                required documents. After attaching the necessary documents, the
                director must make a declaration confirming that the information
                provided in the e-Form DIR-3 KYC is true and correct.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Attach the director’s
                      own Digital Signature Certificate (DSC).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> &nbsp;The e-Form must
                      also be digitally signed by a practising professional,
                      which can be a Chartered Accountant (CA), a Company
                      Secretary (CS), or a Cost Accountant.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Enter the professional’s
                      membership number and other details, and attach the
                      digital signature of the professional certifying the form.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Finally, after completing these steps, click the ‘Submit’ button
                to submit the DIR-3 KYC form successfully.
              </p>
              <h4>Service Request Number (SRN) Generation</h4>
              <p>
                Upon successful submission of the e-Form DIR-3 KYC, a Service
                Request Number (SRN) will be generated automatically. This SRN
                acts as a unique reference and should be carefully saved for any
                future correspondence or communication with the MCA.
              </p>
              <h4>Email Communication and Confirmation</h4>
              <p>
                An official email confirming the approval and receipt of the
                form will be sent to the personal email ID of the applicant.
                Once this confirmation email is received, it serves as proof
                that the process of filing the e-Form DIR-3 KYC has been
                successfully completed.
              </p>
              <h3>File Your DIR-3 KYC Easily with LegallensIndia!</h3>
              <p>
                Looking to complete your DIR-3 KYC filing quickly and
                hassle-free? Let LegallensIndia handle the process for you. Our
                team of experts will guide you through every step from preparing
                the required documents to submitting the form, ensuring 100%
                compliance with MCA regulations. Save time, avoid penalties, and
                stay updated with the latest legal requirements.
              </p>
              <p>
                <b></b>
              </p>
              <p>
                <i>
                  Partner with LegallensIndia now and complete your KYC filing
                  effortlessly!
                </i>
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
