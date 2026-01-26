import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DigitalSignature() {
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
              <h1 className="display-1 text-white mb-3">Digital Signature</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In today’s digital-first world, securing online transactions and verifying your identity is critical for compliance and trust.
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
                { id: 3, title: "Digital Signature Registration", url: "" },
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
                      <h5 className="card-title">Digital Signature</h5>
                      <p>In today’s digital-first world, securing online transactions and verifying your identity is critical for compliance and trust.
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

              <h2 className="display-4 mb-3">Digital Signature Certificate</h2>              
              <p>
                In today’s digital-first world, securing online transactions and
                verifying your identity is critical for compliance and trust. A
                Digital Signature Certificate (DSC) acts as your digital
                identity, allowing you to sign documents electronically, ensure
                data integrity, and authenticate your credentials across various
                government and business platforms. Whether you're filing income
                tax returns, registering on the MCA portal, applying for GST,
                participating in e-Tendering, or accessing ICEGATE, a DSC is
                essential for safe and seamless digital communication.
              </p>
              <p>
                At LegallensIndia, we make it easy to obtain your DSC online. Our
                government-approved DSC solutions are fully compliant with all
                major Indian portals, including MCA, GST, Income Tax, ICEGATE,
                GEM, and more. Backed by expert support, secure token delivery,
                and same-day processing, LegallensIndia is your trusted partner
                for fast, reliable, and legally valid digital signature
                certificates.
              </p>
              <p>
                <em>
                  Get your Digital Signature Certificate easily and securely
                  with LegallensIndia! Our experts will guide you at every step to
                  ensure a smooth, hassle-free experience.&nbsp;&nbsp;&nbsp;
                </em>
              </p>
              <h3>What is Digital Signature Certificate?</h3>
              <p>
                A Digital Signature Certificate (DSC) is a secure digital key
                issued by a Certifying Authority (CA) to verify and authenticate
                the identity of an individual or organisation. It uses public
                key encryption to create a unique digital signature for
                electronically signing documents.
              </p>
              <p>
                DSCs are commonly required for submitting various online forms
                to the Government of India and are widely used for signing
                emails, e-documents, and other digital transactions. They ensure
                the authenticity, integrity, and confidentiality of the
                information by leveraging encryption technology.
              </p>
              <p>Each DSC includes details such as:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The user's name
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Pin code
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Country
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Email address
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Date of issuance
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Name of the certifying
                      authority
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Digital Signature Certificates are typically valid for one to
                two years and can be renewed upon expiry.
              </p>
              <h3>Advantages of a Digital Signature Certificate&nbsp;</h3>
              <p>
                Digital Signature Certificates offer multiple benefits that
                enhance the security, efficiency, and credibility of online
                transactions.
              </p>
              <h4>Authentication</h4>
              <p>
                A DSC helps verify the identity of the certificate holder,
                ensuring that the personal and organisational details used in
                online transactions are genuine.
              </p>
              <h4>Reduced Cost and Time</h4>
              <p>
                Digital signatures eliminate the need for printing, scanning,
                and physically signing documents. Files can be signed and sent
                electronically in seconds, saving both time and operational
                costs. Moreover, DSC holders do not need to be physically
                present to authorise or approve transactions.
              </p>
              <h4>Data Integrity</h4>
              <p>
                Once a document is digitally signed, it cannot be altered or
                tampered with, ensuring the information remains intact and
                secure. This feature is especially valuable in official or legal
                transactions where data consistency is critical.&nbsp;
              </p>
              <h4>Document Authenticity</h4>
              <p>
                Digitally signed documents provide a high level of confidence
                and trust to recipients. They verify that the content originates
                from a legitimate source, reducing the risk of fraud or forgery
                and allowing stakeholders to act on the document with assurance.
              </p>
              <h3>Importance of DSC for Fulfilling Statutory Compliances</h3>
              <p>
                A Digital Signature Certificate (DSC) is essential for meeting
                various statutory and regulatory requirements mandated by
                government authorities.
              </p>
              <h4>Income Tax Filing:</h4>
              <p>
                Individuals and entities whose accounts are subject to audit
                under the Income Tax Act must mandatorily file their Income Tax
                Returns (ITR) using a DSC. It ensures secure submission and
                authentication of tax documents.
              </p>
              <h4>Ministry of Corporate Affairs (MCA):</h4>
              <p>
                The MCA requires all companies to file statutory documents,
                forms, and returns (like DIR-3, AOC-4, MGT-7, etc.) digitally
                using a valid DSC. This ensures data integrity and legal
                compliance in company filings.
              </p>
              <h4>Goods and Services Tax (GST):</h4>
              <p>
                For companies and LLPs, GST registration and subsequent filings
                (such as GSTR-1, GSTR-3B, refund applications, and amendments)
                must be authenticated using a DSC. It verifies the identity of
                the authorised signatory and secures the transaction.
              </p>
              <h4>Import and Export (DGFT):</h4>
              <p>
                Businesses dealing with international trade must use a DSC for
                filing applications with the Director General of Foreign Trade
                (DGFT), such as obtaining an Import Export Code (IEC), filing
                licensing applications, and other related services.
              </p>
              <h4>Employees’ Provident Fund (EPFO):</h4>
              <p>
                Employers are required to use a DSC for filing returns,
                transferring funds, and approving KYC details of employees on
                the EPFO portal.
              </p>
              <h4>E-Tendering and E-Procurement:</h4>
              <p>
                Government and public sector undertakings mandate the use of
                DSCs for participating in e-tendering processes, submitting
                bids, and signing contracts electronically.
              </p>
              <h3>
                Certifying Authorities for Issuance of a Digital Signature
                Certificate
              </h3>
              <p>
                The Controller of Certifying Authorities (CCA), operating under
                the Ministry of Electronics and Information Technology (MeitY),
                Government of India, is the regulatory body responsible for
                overseeing the issuance and management of Digital Signature
                Certificates (DSCs) in India.
              </p>
              <p>
                To facilitate this, the CCA has licensed multiple Certifying
                Authorities (CAs) to issue DSCs to individuals, businesses, and
                government entities. Currently, 15 authorised Certifying
                Authorities are recognised for this purpose.
              </p>
              <p>
                These CAs are entrusted with the task of verifying applicant
                identity and issuing DSCs in compliance with the guidelines laid
                down under the Information Technology Act, 2000.
              </p>
              <p>
                A list of licensed Certifying Authorities, along with their
                official websites, is given here.
              </p>
              <h3>Types of Digital Signature Certificate?</h3>
              <p>
                Digital Signature Certificates are categorised based on their
                functionality. Depending on the purpose, users can opt for one
                of the following types:
              </p>
              <h4>1. Sign DSC</h4>
              <p>
                A Sign DSC is used solely for digitally signing documents. It
                verifies the identity of the signer and ensures that the signed
                content remains unchanged and authentic.&nbsp;
              </p>
              <p>
                This type of DSC is commonly used for tasks such as filing
                Income Tax Returns (ITR), submitting GST returns, filing forms
                with the Ministry of Corporate Affairs (MCA), and signing PDF
                documents, contracts, and other online files. It is ideal when
                the primary requirement is to assure the recipient of the
                document's legitimacy and the signer’s identity.
              </p>
              <h4>2. Encrypt DSC</h4>
              <p>
                An Encrypt DSC is designed for the encryption of sensitive data,
                protecting it from unauthorized access. It transforms readable
                data into an unreadable format, accessible only by the intended
                recipient with the correct decryption key.&nbsp;
              </p>
              <p>
                This type is especially useful for uploading documents on
                e-tender portals, securing e-commerce transactions, sharing
                legal documents, and sending confidential business or personal
                information. Encrypt DSCs are critical for individuals or
                organizations that prioritize data confidentiality in digital
                communication.
              </p>
              <h4>3. Sign &amp; Encrypt DSC</h4>
              <p>
                The Sign &amp; Encrypt DSC combines the functionalities of both
                signing and encryption, offering complete digital security. It
                ensures not only the authenticity and integrity of the data but
                also maintains confidentiality throughout the transaction.&nbsp;
              </p>
              <p>
                This DSC certificate is widely used for filing government forms
                and applications, exchanging sensitive business data, and
                submitting legal or regulatory documents. It is best suited for
                users who need a comprehensive solution to both verify their
                identity and protect their data during electronic exchanges.
              </p>
              <h3>Classes of Digital Signature Certificates</h3>
              <p>
                The type of applicant and the intended purpose determine the
                class of Digital Signature Certificate (DSC) one should apply
                for. Certifying Authorities in India issue three classes of
                DSCs.
              </p>
              <h4>
                <span>Class 1&nbsp;</span>
                <span>Digital Signature Certificates</span>
              </h4>
              <p>
                Class 1 Certificates are issued to individuals or private
                subscribers and are used to confirm the user’s name and email
                address as listed in the database of the Certifying Authority.
                These certificates are generally used for securing basic
                personal communications and do not hold legal validity for
                signing official documents.
              </p>
              <h4>
                Class 2&nbsp;<span>Digital Signature Certificates</span>
              </h4>
              <p>
                Class 2 Certificates were earlier issued to individuals and
                authorised signatories for e-filing forms on various government
                portals such as the Ministry of Corporate Affairs (MCA), Income
                Tax Department, and GST portal. However, as of January 1, 2021,
                the Controller of Certifying Authorities (CCA) has discontinued
                the issuance of Class 2 Certificates. All functions previously
                served by Class 2 Certificates must now be fulfilled using Class
                3 Certificates.
              </p>
              <h4>
                Class 2&nbsp;<span>Digital Signature Certificates</span>
              </h4>
              <p>
                Class 3 Certificates are currently the highest level of DSCs in
                use and offer the highest degree of security. These are used for
                online participation in e-auctions and e-tendering processes
                across India. Vendors and individuals participating in such
                online processes are required to obtain a Class 3 DSC.&nbsp;
              </p>
              <p>
                Following the discontinuation of Class 2 certificates, anyone
                filing forms with the Registrar of Companies (ROC), submitting
                income tax returns, customs filings, GST applications, patent
                and trademark applications, or other official documents online
                is now required to use a Class 3 DSC Certificate.
              </p>
              <h3>Digital Signature Certificate Validity</h3>
              <p>
                The validity of a Digital Signature Certificate (DSC) online
                ranges from 1 to 3 years, as specified by the Controller of
                Certifying Authorities (CCA). When purchasing a DSC, you can
                choose a validity period that suits your needs, with a minimum
                of one year and a maximum of three years.&nbsp;
              </p>
              <h3>Documents Required for Submitting a DSC Application</h3>
              <p>
                To complete your Digital Signature Certificate (DSC)
                online&nbsp; application, you will need to provide the following
                documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Aadhaar card
                    </li>
                    <li>
                      <i className="uil uil-check"></i> PAN card
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Passport-sized
                      photograph
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Address proof (such as
                      utility bills, voter ID, or passport)
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How to get a Digital Signature Certificate Online?</h3>
              <p>
                Follow these simple steps to apply for and receive your Digital
                Signature Certificate with ease.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Visit a Licensed Certifying Authority (CA) Website:{" "}
                      </strong>
                      Go to the website of any licensed CA authorized to issue
                      DSCs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Select Class 3 DSC Application: </strong>Choose
                      the option for Class 3 DSC registration or application.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Fill in the Application Form: </strong>Enter
                      required details such as:
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>
                              <i className="uil uil-check"></i> Class of DSC
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Validity period
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Type of
                              certificate (sign only or sign and encrypt)
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Applicant’s name
                              and contact details
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Residential
                              address
                            </li>
                            <li>
                              <i className="uil uil-check"></i> GST number (if
                              applicable)
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Details of
                              identity and address proof documents
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Upload Recent Photograph and E-sign Declaration:{" "}
                      </strong>
                      Upload a recent passport-sized photograph and
                      electronically sign the declaration form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Upload Supporting Documents:</strong> Upload
                      scanned copies of proof of identity and address.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Note: If Aadhaar-based eKYC authentication is available and
                selected, you may skip uploading documents.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Attestation Process: </strong>Provide details of
                      the attestation officer who will verify your identity, or
                      visit the CA office with original documents and
                      self-attested copies for manual verification.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Make Payment: </strong>Complete the payment for
                      DSC issuance using the CA’s online payment gateway.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Verification by Certifying Authority: </strong>The
                      CA will verify your application and documents.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Receive DSC Electronically: </strong>Once
                      verified, the CA will issue the DSC electronically and
                      send it to you via email or allow you to download it from
                      their portal.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <em>
                  Don’t worry about this cumbersome process—our experts will
                  guide you every step of the way and help you obtain your DSC
                  online quickly and effortlessly.
                </em>
              </p>
              <h3>
                <span>Digital Signature Certificate</span>&nbsp;Renewal
              </h3>
              <p>
                As per the guidelines of the Controller of Certification
                Agencies (CCA), renewing your DSC online requires fresh identity
                verification. You can easily renew your Digital Signature
                Certificate by following the same process as applying for a new
                DSC on the LegallensIndia website.
              </p>
              <h3>Buy Digital Signature Securely with LegallensIndia!</h3>
              <p>
                LegallensIndia is your trusted partner to help you apply for a
                Digital Signature Certificate (DSC) online and obtain it
                securely.&nbsp; We simplify the entire application process,
                helping you obtain a robust Digital Signature Certificate that
                ensures the authenticity and integrity of your electronic
                documents. Designed for both individuals and businesses, this
                certificate comes with advanced encryption and secure token
                features to protect your data during online transactions.
              </p>
              <h4>
                Why Choose LegallensIndia for Your Digital Signature Certificate
                (DSC) Needs?
              </h4>
              <h4>Class 3 Digital Signature Certificates</h4>
              <p>
                Fully compliant and highly secure DSCs are ideal for
                e-Tendering, e-Procurement, ICEGATE, Trademark filing, EPFO,
                MCA, GST, and more.
              </p>
              <h4>DSCs for Individuals &amp; Organisations</h4>
              <p>
                Whether you're an individual professional or a business entity,
                we offer PAN-based and Aadhaar-based DSC registration to suit
                your requirements.
              </p>
              <h4>Fast &amp; Secure Token-Based Delivery</h4>
              <p>
                Receive your DSC in a USB token or via secure download—often
                within minutes—delivered anywhere in India.
              </p>
              <h4>End-to-End Support</h4>
              <p>
                Expert assistance at every step—from application to
                activation—ensuring a smooth and hassle-free experience.
              </p>
              <h4>Trusted by Thousands</h4>
              <p>
                LegallensIndia is a recognised name in legal and business
                services, offering reliable and government-authorised DSC
                solutions across India.
              </p>
              <h4>
                Why Customers Trust LegallensIndia for Digital Signature
                Certificates (DSCs)
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Reliable Partner with
                      Trusted Network: We work exclusively with
                      government-authorised DSC providers to ensure every
                      certificate issued is 100% legally valid and accepted
                      across all official Indian portals.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> &nbsp;Fast Turnaround –
                      Same-Day Issuance: Apply online and receive your DSC
                      quickly, often on the same day. Our efficient application
                      and verification process ensures you don’t face
                      unnecessary delays.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> &nbsp;Seamless
                      Compatibility Across Government Portals: Our DSCs are
                      fully compatible with major e-Governance platforms like
                      GEM, IREPS, MCA, GST, ICEGATE, e-Tendering portals, and
                      more, ensuring smooth operations and successful digital
                      filings.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Get Started Today!</h4>
              <p>
                Secure your Digital Signature Certificate with LegallensIndia and
                experience fast, reliable, and compliant service, trusted by
                professionals and businesses across India.Apply online now or
                speak to our experts for personalised assistance!&nbsp;&nbsp;
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
