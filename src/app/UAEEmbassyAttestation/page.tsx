import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function UAEEmbassyAttestation() {
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
                UAE Embassy Attestation
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                UAE Embassy attestation is mandatory to apply for a visa and
                enter the United Arab Emirates (UAE).
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
                { id: 2, title: "UAE Embassy Attestation", url: "" },
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
                      <h5 className="card-title">UAE Embassy Attestation</h5>
                      <p>
                        UAE Embassy attestation is mandatory to apply for a visa
                        and enter the United Arab Emirates (UAE).
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

              <h2 className="display-4 mb-3">UAE Embassy Attestation</h2>
              <p>
                UAE Embassy attestation is a vital stamping procedure that
                involves verifying Indian originated documents to ensure they
                are legally recognised in the United Arab Emirates (UAE). This
                legal procedure confirms the authenticity and validity of the
                immigrants’ educational, non-educational, and commercial
                documents through verification and stamping by the UAE embassy /
                UAE consulate. These documents will be further attested by the
                Ministry of Foreign Affairs (MoFA).&nbsp; Ensure to have a
                passport copy and original certificate that requires attestation
                to undergo the UAE Attestation process. Documents attestation
                from the UAE Embassy is mandatory to obtain employment, family
                residence, higher education, school admission visas, or business
                setup in the UAE.&nbsp;
              </p>
              <p>
                <span>
                  Navigating the UAE Embassy attestation process can be
                  intricate and time-consuming. The experienced team at
                  LegallensIndia guarantees 100% authentic attestation and
                  supports you through each phase, from collecting your
                  documents to obtaining the final attestation. With our
                  expertise, you can rest assured that your documents will be
                  processed accurately and efficiently.
                </span>
              </p>
              <p>
                <strong>
                  Start Your UAE Embassy Attestation with LegallensIndia Today!
                </strong>
              </p>
              <h3>What is UAE Embassy Attestation?</h3>
              <p>
                The UAE Embassy is an official office established by the UAE
                government to strengthen relations with other nations and foster
                a strategic partnership. UAE Embassy attestation is a mandatory
                stamping procedure required when applying for a visa to move to
                the United Arab Emirates (UAE) for personal, educational, or
                professional reasons. This process involves authenticating your
                documents at the UAE Embassy or Consulate in India. Once the
                attestation procedures are completed, your documents are legally
                recognised and valid throughout the seven Emirates, allowing you
                to travel to and settle in the UAE with all necessary paperwork
                in order.
              </p>
              <h3>Importance of UAE Embassy Attestation from India</h3>
              <p>
                The UAE Embassy in India must attest documents for several
                reasons:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Recognition:</strong> Attestation by the UAE
                      Embassy ensures that your documents are legally recognised
                      and accepted in the UAE. This is crucial for various legal
                      and administrative processes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Validation of Authenticity: </strong>The
                      attestation process verifies the authenticity of your
                      documents. It confirms that the documents are genuine and
                      have been issued by legitimate authorities in India.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Employment Requirements: </strong>For employment
                      purposes, employers in the UAE often require attested
                      educational and professional documents to verify the
                      qualifications and credentials of prospective employees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Educational Purposes:</strong> Attestation is
                      necessary for students planning to pursue higher education
                      in the UAE. It ensures that their previous academic
                      qualifications are recognised by educational institutions
                      in the UAE.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business and Commercial Activities:</strong> For
                      business-related activities, attested commercial documents
                      (such as certificates of incorporation, power of attorney,
                      etc.) are required to establish and operate a business
                      legally in the UAE.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Residency and Immigration: </strong>Attestation of
                      personal documents (such as birth certificates, marriage
                      certificates, etc.) is required for various residency and
                      immigration processes, including applying for family
                      visas.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance with UAE Regulations:</strong> The UAE
                      has specific regulatory requirements for document
                      verification and attestation. Attesting documents through
                      the UAE Embassy ensures compliance with these regulations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Avoiding Legal Issues: </strong>Proper attestation
                      helps avoid legal issues and complications that may arise
                      due to unverified or unauthenticated documents. It ensures
                      a smooth and hassle-free process for various personal,
                      educational, and professional activities in the UAE.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                &nbsp;By getting your documents attested by the UAE Embassy in
                India, you ensure that they are legally valid and recognised in
                the UAE, facilitating various processes and activities in the
                country.
              </p>
              <h3>
                <span>Purpose of Certificate Attestation UAE</span>
              </h3>
              <p>
                <span>
                  Certificate attestation is a crucial process that validates
                  the authenticity of documents issued outside the UAE. It
                  ensures that these documents are legally recognised and
                  accepted within the country. This attestation process is
                  essential for each document since they are utilised for
                  various purposes in the UAE,
                </span>
              </p>
              <h4>
                <span>Educational Certificate:</span>
              </h4>
              <p>
                <span>
                  Educational certificates are required to acquire a work visa
                  or work card for most job assignments. They are also necessary
                  to pursue advanced education in the UAE. Specialists, nurses,
                  pharmacists, lab technicians, and other professionals need
                  educational certificates to take Ministry of Health (MOH) and
                  Department of Health (DOH) assessments. Moreover, educational
                  certificates are used to obtain equivalent certifications,
                  ensuring the recognition of qualifications in the UAE.
                </span>
              </p>
              <h4>
                <span>Non-Educational Certificate:</span>
              </h4>
              <p>
                <span>
                  Non-educational certificates are important for securing
                  resident visas for family members, including spouses,
                  children, and in-laws. Additionally, these certificates are
                  required for school admissions, particularly through the
                  submission of a Transfer Certificate.
                </span>
              </p>
              <h4>
                <span>Commercial Certificate:</span>
              </h4>
              <p>
                <span>
                  Commercial documents, such as Power of Attorney or the
                  Memorandum or Article of Association, play a crucial role in
                  business-related activities. It is necessary to gain the right
                  to sell properties in one's home country, facilitate the
                  removal of LLC partnerships, open bank accounts, and complete
                  company registration procedures.
                </span>
              </p>
              <h3>List of Documents That Need to Be Attested</h3>
              <p>
                Attestation is necessary for various documents based on their
                purpose and origin. These documents are categorised into{" "}
                <strong>
                  educational, non-educational, and commercial certificates
                </strong>
                . Below are the specific types of documents that typically
                require attestation:
              </p>
              <h4>Educational Certificate Attestation</h4>
              <p>
                The educational documents that typically need attestation
                include:
              </p>
              <p>
                <strong></strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Degree Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Diploma Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        SSLC (Secondary School Leaving Certificate) Certificates
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        HSC (Higher Secondary Certificate) Certificates
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Engineering Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Marksheet Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Report Card Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Transcript Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>PG Degree Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>CA Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>ICWA Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>ITI Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>CS Certificates</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Non-Educational Certificate Attestation&nbsp;</h4>
              <p>
                Non-educational certificate attestation involves verifying
                personal documents often required for visa applications, family
                reunification, and other personal matters. These include:
              </p>
              <p>
                <strong></strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Birth Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Death Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Marriage Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Experience Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Good Conduct Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Medical Reports</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Police Clearance Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Single Purpose Power of Attorney (e.g., selling a car)
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>To Whom It May Concern Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Divorce Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Aadhar Card Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Single Status Certificate</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Commercial Certificate Attestation </h4>
              <p>
                Commercial document attestation involves verifying documents
                related to business and trading activities. These documents are
                often required for setting up businesses, opening bank accounts,
                and other commercial purposes. These include:
              </p>
              <p>
                <strong></strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Power of Attorney (non-commercial enterprise)</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Memorandum or Articles of Association</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Employment Contracts</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Judicial Rulings</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>General Power of Attorney</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Business Contracts</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Document of Fingerprint</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Court Issued Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Work Experience Certificates</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Lost Foreign Passport</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Company Registration Documents</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Certificates of origin</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Company invoices</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>GST documents</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Income tax return documents</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Other business documents</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for UAE Embassy Attestation</h3>
              <p>
                To initiate the UAE Embassy attestation process, the following
                documents are required:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Valid Passport Copy:</strong>&nbsp;A photocopy of
                      the passport (including the first, last, and valid visa
                      pages).
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Original Certificate to be Attested:</strong>
                      &nbsp;A photocopy of the original certificate might be
                      required.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Procedures of UAE Embassy Attestation from India</h3>
              <p>
                Attesting documents from the UAE Embassy in India involves
                several steps. Here is a detailed procedure typically followed:
              </p>
              <h4>
                <span>1. Notary Attestation</span>
              </h4>
              <p>
                <span>
                  The first step is to get your documents notarised in the
                  registered notary with the help of local lawyer. This step
                  confirms that the documents are authentic and ready for
                  further attestation.
                </span>
              </p>
              <h4>2. Obtain a Stamp from the Home Department</h4>
              <p>
                Once notarised, the documents must be stamped and attested by
                the Home Department of the respective state where the documents
                were issued. This attestation confirms the authenticity of the
                notary attestation.
              </p>
              <h4>3. Ministry of External Affairs (MEA) Attestation</h4>
              <p>
                After the state-level attestation, the documents must be
                attested by India's Ministry of External Affairs (MEA). The MEA
                attestation is mandatory before submitting the documents to the
                UAE Embassy.
              </p>
              <h4>4. Attest with the UAE Embassy in India</h4>
              <p>
                The next step is to get the documents attested by the UAE
                Embassy in India. This attestation is required for the documents
                to be recognised in the UAE.
              </p>
              <h4>5. Ministry of Foreign Affairs (MOFA) Attestation</h4>
              <p>
                Once the UAE Embassy in India has attested the documents, they
                need to be attested by the Ministry of Foreign Affairs (MOFA).
                This is the final step in the attestation process. Once the
                attestation procedures are completed, the immigrants are
                qualified to travel to the United Arab Emirates (UAE).&nbsp;
              </p>
              <h4>6. Courier Documents to the UAE</h4>
              <p>
                After obtaining all necessary attestations, the documents should
                be sent to the UAE. Using a reliable courier service ensures the
                documents arrive safely and promptly.
              </p>
              <h4>7. Translate Documents into Arabic</h4>
              <p>
                If the documents are in a language other than Arabic, they must
                be translated. This translation should be done by a certified
                translator to ensure accuracy and compliance with UAE
                regulations.
              </p>
              <h4>8. Reattest Documents in the UAE</h4>
              <p>
                Once in the UAE, the translated documents may need to be
                reattested by the relevant authorities. This final attestation
                is crucial for official recognition of the documents within the
                UAE legal framework.
              </p>
              <em>
                The procedures for UAE attestation vary based on the type of
                certificate (educational, non-educational, or commercial) being
                attested. Each document type follows a specific sequence of
                verification and endorsements. The following table provides you
                with an overview:
              </em>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <strong>Steps of Attestation</strong>
                    </td>
                    <td className="border">
                      <strong>For Educational Documents</strong>
                    </td>
                    <td className="border">
                      <strong>For Non-Educational</strong> Documents
                    </td>
                    <td className="border">
                      <strong>For Commercial Documents</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Initial Verification</td>
                    <td className="border">
                      HRD (Human Resource Department) / SDM (Sub-Divisional
                      Magistrate)
                    </td>
                    <td className="border">Notary Public</td>
                    <td className="border">Chamber of Commerce</td>
                  </tr>
                  <tr>
                    <td className="border">Central Government Verification</td>
                    <td className="border">
                      Ministry of External Affairs (MEA)
                    </td>
                    <td className="border">
                      Ministry of External Affairs (MEA)
                    </td>
                    <td className="border">
                      Ministry of External Affairs (MEA)
                    </td>
                  </tr>
                  <tr>
                    <td className="border">UAE Embassy Verification</td>
                    <td className="border">UAE Embassy in India</td>
                    <td className="border">UAE Embassy in India</td>
                    <td className="border">UAE Embassy in India</td>
                  </tr>
                  <tr>
                    <td className="border">Final Verification in the UAE</td>
                    <td className="border">
                      Ministry of Foreign Affairs (MOFA)
                    </td>
                    <td className="border">
                      Ministry of Foreign Affairs (MOFA)
                    </td>
                    <td className="border">
                      Ministry of Foreign Affairs (MOFA)
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>Get Your Documents Attested in India with LegallensIndia</h3>
              <p>
                We provide comprehensive and reliable UAE Embassy attestation
                services for all documents, ensuring your documents are legally
                recognised and accepted in the UAE. Whether you need
                educational, non-educational, or commercial documents attested,
                we are here to assist you every step of the way. Choose
                LegallensIndia for UAE attestation services and experience
                unparalleled expertise, efficiency, and reliability in handling
                your document attestation needs. Our service offers:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> <strong>Speed: </strong>
                      Fast and efficient processing of your documents, ensuring
                      timely completion of your attestation needs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Comprehensive Services: </strong>We handle all
                      stages of the attestation process, from notary to MOFA
                      attestation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Customer Support:</strong> Our dedicated customer
                      support team can assist you at every process step.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Convenience: </strong>Easy submission and tracking
                      of documents through our user-friendly platform.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Secure Handling: </strong>We prioritise the safety
                      and confidentiality of your documents. Our strict
                      procedures ensure they are protected throughout the
                      attestation process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nationwide Network:</strong> With a wide network
                      across India, we can handle document attestation from any
                      state.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                With LegallensIndia' expert attestation services, ensure your
                documents are legally recognized and accepted in the UAE.{" "}
                <strong>Contact us today to get started!</strong>
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
