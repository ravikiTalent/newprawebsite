import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ImportExportCode() {
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
                Importer Exporter Code Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                International trade is a gateway to a world of opportunities for
                businesses in India.
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
                { id: 3, title: "Importer Exporter Code", url: "" },
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
                      <h5 className="card-title">Importer Exporter Code</h5>
                      <p>
                        International trade is a gateway to a world of
                        opportunities for businesses in India.
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
                Importer Exporter Code (IEC Code) Registration Online
              </h2>

              <p>
                International trade is a gateway to a world of opportunities for
                businesses in India. Whether you're looking to import goods,
                export products, or expand your business globally, having an
                Importer Exporter Code (IEC) is your key to entering the
                international market. This import and export code is issued by
                the Directorate General of Foreign Trade (DGFT), under the
                Ministry of Commerce. All the importers and exporters in India
                must know what is IEC Code. For importers, the DGFT IEC
                and&nbsp;import and export license are indispensable for the
                clearance of customs and facilitating payments to foreign banks,
                ensuring smooth international trade transactions. Similarly,
                exporters rely on the IEC to streamline the process of sending
                shipments and receiving payments from overseas clients.
              </p>
              <p>
                LegallensIndia is here to simplify the process for you. Our
                comprehensive IEC registration services make it easier than ever
                to obtain the essential IEC certificate and import and export
                license, ensuring that you're well-prepared to explore the
                global trade landscape.
              </p>
              <p>
                <strong>
                  Obtain Your IEC Number Today through LegallensIndia!
                </strong>
              </p>
              <h3>What is IEC Code (Import Export Code)?</h3>
              <p>
                IEC Code Full Form is "Importer Exporter Code". Import and
                Export Code is to be obtained by the business entity for import
                into or export from India. Import &amp; Export Code is popularly
                known as the IEC number. Import &amp; Export Code is a ten-digit
                unique number issued by the Directorate General of Foreign Trade
                (DGFT).
              </p>
              <p>
                DGFT IEC registration certificate is mandatory for a business
                involved in import and export. Hence, before initiating an
                import of goods into India, an importer must ensure that the
                importing entity has&nbsp;GST registration and IE code, both of
                which are required to clear customs.
              </p>
              <p>
                If an importer does not have both GST and import and export
                license, the goods will be stuck at the port and start incurring
                demurrage charges or could be destroyed. Ensure to follow the
                key rules and regulations while engaging in the process of IEC
                Code Apply through IEC Code Login.
              </p>
              <h3>Importance of Import Export Code</h3>
              <p>
                Businesses have a great option to enter the international market
                with the export and&nbsp;import&nbsp;of the products and the
                services they are involved in. The IE code is an essential
                requirement while entering the global market as it supports the
                growth and development of the business to a certain extent.
                There are various advantages of getting an import and export
                code. Here we have listed a few of them:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>International market unlocks:</strong>&nbsp;As the
                      DGFT IEC Code is a requirement for the import and export
                      business, it allows the products to reach the global
                      market.&nbsp;IE code makes the entry of the international
                      Indian company smoother and opens doors for growth and
                      expansion.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Online DGFT IEC registration:</strong> The process
                      to find the import and export code is
                      entirely&nbsp;online&nbsp;and hassle-free with short
                      document submission.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Less document requirement:</strong> It is not
                      required to submit many documents to for the process of
                      IEC Code apply and obtain an import and export license.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Lifetime Validity:</strong> IE Code is a lifetime
                      registration valid as long as the business exists. Hence,
                      there are no issues with updating, filing, and renewing
                      Import Export Code registration. The IEC registration is
                      valid until the company exists or the registration is not
                      revoked or surrendered.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reduces illegal goods transportation:</strong> The
                      most basic requirement for the&nbsp;import export
                      license&nbsp;is that you need to provide authentic
                      information. Without giving proper information, IE code
                      cannot be obtained. This criterion makes the
                      transportation of illegal goods impossible.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Availing Several Benefits:</strong>&nbsp;Import
                      and Export code registration has enormous benefits for
                      importers and exporters. The registered business entities
                      can get help through subsidies from the Customs, Export
                      Promotion Council or other authorities. With LUT filing
                      under GST, the exporters can make exports without paying
                      taxes. If the exports are made with tax payment, the
                      exporter can claim the refunds of the paid tax amount.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliances:</strong> Unlike other tax
                      registration, the person carrying import or export does
                      not require to fulfill any specific compliance
                      requirements such as the annual filing or the return
                      filings.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Validity of DGFT IEC Code</h3>
              <p>
                As mentioned above, IEC Code registration is permanent and valid
                for a lifetime. Hence, there will be no hassles with updating,
                filing, and renewing the import export license. It is valid till
                the business exists or the registration is not revoked or
                surrendered. Further, unlike tax registrations like GST
                registration or&nbsp;PF registration, the importer or exporter
                does not require to file any filings or follow any other
                compliance requirements like annual filing.
              </p>
              <p>
                As IE code registration is one-time and requires no additional
                compliance, it is recommended for all exporters &amp; importers
                to obtain IE code after incorporation.
              </p>
              <h4>Nature of the Firm obtaining an IEC</h4>
              <p>
                The nature of the Firm obtaining an import and export
                license/registration may be any of the follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Proprietorship Firm
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Partnership Firm
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Limited Liability
                      Partnership
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Limited Company
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Trust
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Hindu Undivided
                      Family&nbsp;(HUF)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Society
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                Pre-Requisites for Applying for Import Export License/
                Registration
              </h4>
              <p>
                Here are the pre-requisites for an IEC registration, such
                as&nbsp; DGFT IEC Login, PAN, etc:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Valid DGFT IEC Login
                      Credentials to DGFT Portal (After Registering on DGFT
                      Portal)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> IEC may be applied on
                      behalf of a firm which may be a Proprietorship,
                      Partnership, LLP, Limited Company, Trust, HUF, and
                      Society.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The Firm must have an
                      active Firm's Permanent Account Number (PAN) and details
                      like Name as per Pan, Date of Birth, or Incorporation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The Firm must also have
                      a bank account in the Name of the Firm and a valid address
                      before the procedure of IEC Code apply.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Note:</strong> These details will be validated with the
                Income Tax Department site.
              </p>
              <h3>Documents required for IEC Code registration</h3>
              <p>
                The list of scanned documents required for IEC apply and
                obtaining an IEC certificate is listed as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Proof of
                      establishment/incorporation/registration: The following
                      type of Firm needs to submit the
                      establishment/incorporation/registration certificate:
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Partnership
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Registered Society
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Trust
                    </li>
                    <li>
                      <i className="uil uil-check"></i> HUF
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Other
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proof of Address: Proof
                      of Address can be any one of the following documents:
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Sale Deed
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Rent agreement
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Lease deed
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Electricity bill
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Telephone landline bill
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Mobile, post-paid bill
                    </li>
                    <li>
                      <i className="uil uil-check"></i> MoU
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Partnership deed
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Other acceptable
                      documents (for proprietorship only):
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Aadhar card
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Passport
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Voter id
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Note:</strong> In case the address proof is not in the
                Name of the applicant firm, a no objection certificate (NOC) by
                the firm premises owner in favor of the Firm, along with the
                address proof, is to be submitted as a single PDF document to
                obtain import export license.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Proof of Firm's Bank
                      Account
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Canceled Cheque
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Bank Certificate
                    </li>
                    <li>
                      <i className="uil uil-check"></i> User should have an
                      active DSC or Aadhaar of the Firm's member for submission.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Active Firm's Bank
                      accounts for entering its details in the Application and
                      making online payment of the application fee.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Once you have all the required documents, you can initiate the
                IEC code registration process through a valid IEC Code login
                credentials. Ensure to engage in the IEC Code check to track
                your application status.
              </p>
              <h3>How to Apply for IEC Code?</h3>
              <p data-start="31" data-end="96">
                Follow these steps properly to complete the process of how to
                apply for ICE Code:
              </p>
              <p></p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li data-start="98" data-end="229">
                      <strong data-start="101" data-end="124">
                        Visit DGFT Website:
                      </strong>{" "}
                      Go to the official DGFT website, and navigate to the 'IEC
                      Profile Management' under the 'Services' tab.
                    </li>
                    <li data-start="230" data-end="360">
                      <strong data-start="233" data-end="252">
                        Register/Login:
                      </strong>{" "}
                      Register by providing your details and validating the OTP.
                      Once registered, log in with your IE code login
                      credentials.
                    </li>
                    <li data-start="361" data-end="541">
                      <strong data-start="364" data-end="382">
                        Apply for IEC:
                      </strong>{" "}
                      On the dashboard, click on "Apply for IEC" and fill out
                      the ANF 2A application form. Provide details like firm
                      name, PAN, GSTIN, address, bank account, etc.
                    </li>
                    <li data-start="542" data-end="636">
                      <strong data-start="545" data-end="570">
                        Sign the Application:
                      </strong>{" "}
                      Review and digitally sign the application using DSC or
                      Aadhaar.
                    </li>
                    <li data-start="637" data-end="695">
                      <strong data-start="640" data-end="657">
                        Make Payment:
                      </strong>{" "}
                      Pay the prescribed application fee.
                    </li>
                    <li data-start="696" data-end="851">
                      <strong data-start="699" data-end="727">
                        Receive IEC Certificate:
                      </strong>{" "}
                      After successful verification, you’ll receive the IEC
                      Certificate via email, or you can download it from the
                      DGFT portal.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Streamline Your IEC Application with LegallensIndia</h3>
              <p>
                LegallensIndia can assist you in obtaining an Importer Exporter
                Code (IEC) in India. Here's how we can help:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Information and Guidance:</strong> LegallensIndia
                      can provide you with detailed information about the Import
                      export code application process, including the eligibility
                      criteria and the documents required.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Application Preparation:</strong> We can assist in
                      preparing the necessary documentation, including the
                      application form and supporting documents.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Application Submission:</strong> LegallensIndia can
                      submit your IEC application to the Directorate General of
                      Foreign Trade (DGFT) on your behalf, ensuring that it is
                      done correctly and promptly.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Follow-up and Tracking:</strong> We can track the
                      progress of your application through efficient IEC Code
                      check and follow up with the authorities, helping you
                      navigate any potential roadblocks or delays.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>IEC Certificate Delivery:</strong> Once your ICE
                      Code is approved, LegallensIndia can help you obtain and
                      deliver your IEC certificate and import export license.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Consultation:</strong> If you have any
                      queries or concerns regarding IEC or IEC Code check or
                      international trade, LegallensIndia' experts can provide you
                      with professional guidance.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Using LegallensIndia for your IEC application can save you time
                and ensure that the process is handled efficiently and
                accurately, allowing you to focus on your import and export
                activities.
              </p>
              <p>
                <em>
                  <strong>Get Started with LegallensIndia Today!</strong>
                </em>
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
