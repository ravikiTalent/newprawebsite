import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DematofShares() {
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
                Dematerialisation of Company Shares
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Dematerialisation is the process of transferring physical shares
                into a digital account, known as a Demat account, which
                simplifies managing and trading shares.
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
                {
                  id: 3,
                  title: "Dematerialisation of Company Shares",
                  url: "",
                },
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
                      <h5 className="card-title">
                        Dematerialisation of Company Shares
                      </h5>
                      <p>
                        Dematerialisation is the process of transferring
                        physical shares into a digital account, known as a Demat
                        account, which simplifies managing and trading shares.
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

              <h2 className="display-4 mb-3">Dematerialisation of Shares</h2>
              <p>
                Dematerialisation is the process of transferring physical shares
                into a digital account, known as a Demat account, which
                simplifies managing and trading shares. Converting physical
                shares to Demat enhances security, reducing the risks associated
                with physical shares like loss or theft. It also makes trading
                faster and more efficient and simplifies share management.
                Previously required mainly for public companies, the
                dematerialisation process is now mandatory for private limited
                companies. All private limited companies, except small ones must
                convert physical shares to Demat by September 30,
                2024.&nbsp;&nbsp;
              </p>
              <p>
                LegallensIndia is well-equipped to support companies in this
                transition, helping them convert their physical shares into
                electronic ones through expert guidance and streamlined
                processes.
              </p>
              <p>
                <strong>
                  <em>
                    Looking to convert physical shares to Demat? Contact our
                    experts today for a smooth and hassle-free transition!
                  </em>
                </strong>
              </p>
              <h3>What is Dematerialisation of shares?</h3>
              <p>
                Dematerialisation refers to the process of converting physical
                securities, such as share certificates and other documents, into
                electronic format. These securities are then held in a demat
                account.
              </p>
              <p>
                A depository, responsible for maintaining securities in
                electronic form, can hold various types of securities, including
                bonds, government securities, and mutual fund units. These are
                managed by a registered Depository Participant (DP), which acts
                as an intermediary offering depository services to investors and
                traders in accordance with the Depositories Act of 1996.
              </p>
              <p>
                In India, two depositories are registered with SEBI and are
                authorised to operate:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> NSDL (National
                      Securities Depository Ltd.)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> CDSL (Central Depository
                      Services (India) Ltd.)
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Dematerialisation of Shares of Private Companies</h3>
              <p>
                In October 2023, the Ministry of Corporate Affairs (MCA)
                introduced an amendment to the Companies (Prospectus and
                Allotment of Securities) Rules 2014, known as the Companies
                (Prospectus and Allotment of Securities) Second Amendment Rules
                2023. This amendment included the addition of Rule 9B, which now
                requires all private limited companies, except small and
                government companies, to dematerialise their securities.
              </p>
              <h3>
                MCA's Rule 9B - Dematerialisation of Shares of Private Companies
              </h3>
              <p>
                Before the introduction of Rule 9B by the Ministry of Corporate
                Affairs (MCA), dematerialisation of shares was not compulsory
                for private limited companies. The mandate previously applied
                only to publicly traded companies and certain large private
                entities. Most private companies continued to rely on physical
                share certificates, which were susceptible to loss, theft, and
                forgery.
              </p>
              <p>
                In October 2023, the Ministry of Corporate Affairs (MCA) revised
                the Companies (Prospectus and Allotment of Securities) Rules,
                2014, by implementing Rule 9B. This regulation mandates that all
                private companies, except those classified as small companies
                (those with a paid-up capital below Rs.4 crore and a turnover
                less than Rs.40 crore), must dematerialise their shares by
                September 30, 2024.
              </p>
              <p>The critical elements of Rule 9B are as follows:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Issuance of Securities:</strong> Private companies
                      must issue securities solely in dematerialised form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Conversion of Existing Shares:</strong> All
                      physical share certificates must be converted into
                      electronic form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Preparation by Promoters and Directors:</strong>{" "}
                      Before any new securities are issued, private companies
                      must ensure that shares held by promoters, directors, and
                      key managerial personnel are dematerialised.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transfer and Subscription of Shares: </strong>Any
                      transfer or subscription of securities by the company must
                      be conducted in dematerialised form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance Deadline:</strong> Companies that no
                      longer meet the "small company" criteria based on their
                      financial records after March 31, 2023, have 18 months to
                      comply with these requirements.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Applicability of Dematerialisation of Shares&nbsp;&nbsp;</h3>
              <p>
                The dematerialisation of Shares applies to a wide range of
                entities in the securities market.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Public Companies</strong>: All public companies in
                      India are required to dematerialise their shares.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Private Limited Companies</strong>: Private
                      limited companies, except those categorised as small
                      companies, must also comply with dematerialisation
                      regulations.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Holding and Subsidiary Companies</strong>:
                      Regardless of the financial thresholds set for small
                      companies, any private limited company that is a holding
                      company or a subsidiary of another corporate body must
                      convert physical shares to Demat.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Small Companies Exception</h4>
              <p>
                &nbsp;A small company is a private limited company with a
                paid-up capital of INR 40,000,000 or less and a turnover not
                exceeding INR 400,000,000 in the preceding financial year. These
                companies are exempt from mandatory dematerialisation unless
                they are holding or subsidiary companies of other corporations,
                in which case they must comply regardless of their financial
                metrics.
              </p>
              <h3>
                <span>Advantages of Dematerialisation of Shares</span>
              </h3>
              <p>
                <span>
                  Converting physical shares to a Demat (dematerialised) account
                  offers several compelling advantages for shareholders and
                  companies alike:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enhanced Security</strong>
                      <span>
                        : Dematerialization eliminates the risks associated with
                        physical certificates, such as theft, loss, or damage.
                        Electronic shares are securely stored in a digital
                        format, reducing the potential for fraud.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ease of Transactions</strong>
                      <span>
                        : Buying and selling shares become significantly quicker
                        and easier when they are held in a Demat account. This
                        streamlined process enhances the efficiency of trading
                        activities, making it possible to execute transactions
                        at the click of a button.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reduced Costs</strong>
                      <span>
                        : Handling physical documents often involves higher
                        costs due to stamp duties, handling charges, and other
                        overheads. Dematerialisation reduces these expenses, as
                        electronic records do not incur such costs.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Convenience</strong>
                      <span>
                        : Managing a Demat account is simpler compared to
                        handling physical papers. Shareholders can access their
                        holdings anytime and from anywhere, using online
                        platforms provided by their depository participants.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Automatic Updates</strong>
                      <span>
                        : Corporate actions like dividends, stock splits, and
                        bonus issues are automatically updated in the Demat
                        account, ensuring shareholders always have up-to-date
                        information and receive their entitlements without any
                        need for physical intervention.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Loan Collateral</strong>
                      <span>
                        : Shares held in Demat form can easily be pledged as
                        collateral to secure loans, often facilitating quicker
                        loan approvals compared to physical shares.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Requirements of Dematerialisation of Shares of Private Companies
              </h3>
              <p>
                To align with Rule 9B, private&nbsp; limited companies should
                follow these step-by-step procedures for dematerialisation:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Amend Articles of Association (AoA): </strong>
                      Modify the AoA to enable shareholders to hold shares in
                      dematerialised form. This legal foundation ensures that
                      electronic holding of shares is permissible under your
                      company's charter.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Appoint a Registrar and Transfer Agent (RTA):
                      </strong>{" "}
                      Select a SEBI-registered RTA to oversee the
                      dematerialisation process. This agent will act as the
                      intermediary between the shareholders and the
                      depositories.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Obtain International Securities Identification Number
                        (ISIN):
                      </strong>{" "}
                      Each type of share that the company issues must be
                      assigned an ISIN, which is a unique code required to
                      identify the shares in the electronic space.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Open Demat Accounts: </strong>Direct shareholders
                      to open Demat accounts with a Depository Participant (DP),
                      which could be a bank or brokerage firm. This account will
                      hold the shares in electronic form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Dematerialize Existing Shares:</strong> Coordinate
                      with your RTA to convert all existing physical share
                      certificates into electronic form. This involves
                      validating the authenticity of the certificates and their
                      ownership before they are converted.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ensure Compliance for Key Personnel:</strong>{" "}
                      Verify that all shares held by promoters, directors, and
                      key managerial personnel are dematerialised.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Filing Form PAS 6 to MCA:</strong> File
                      half-yearly returns using the PAS 6 form to report the
                      details of dematerialisation to the MCA.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Last Date for Dematerialisation of Physical Shares</h3>
              <p>
                The physical shares to demat deadline depends on the company's
                financial year-end date. If the company follows the standard
                financial year ending on March 31,&nbsp; the physical shares to
                demat last date is 18 months later, September 30, 2024.&nbsp;
              </p>
              <p>
                However, if a company's financial year ends on December 31, as
                with a financial year ending on December 31, 2023, the Last Date
                for Dematerialisation of Physical Shares would be 18 months
                after that, falling on June 30, 2025.
              </p>
              <h3>How to Convert Physical Shares into Demat?</h3>
              <p>
                The process of dematerialisation of shares is straightforward
                and typically completed within a few days. Here's a step-by-step
                guide on how to dematerialise shares:
              </p>
              <h4>Opening a Demat Account</h4>
              <p>
                The first step in dematerialising your shares is to open a Demat
                account with a Depository Participant (DP). DPs typically act as
                intermediaries between you and the depository and are often
                share brokers. To open an account, you’ll need to complete an
                account opening form, providing clear and legible details,
                including your bank account number, IFSC code, bank name and
                branch, and branch address.
              </p>
              <p>
                Once your Demat account is set up, you should convert your
                physical share certificates into electronic form
              </p>
              <h4>Submit a Demat Request Form (DRF)</h4>
              <p>
                Obtain a DRF from your DP, complete it, and sign it. Ensure the
                names and signatures match those on the share certificates and
                the company's records.
              </p>
              <h4>Verification and Conversion</h4>
              <p>
                The concerned authorities will verify the details after
                submitting the DRF along with your physical share certificates.
              </p>
              <h4>Dematerialisation Request Number (DRN)</h4>
              <p>
                Once your DP approves the documents, you will receive a
                Dematerialization Request Number (DRN) as confirmation of your
                request.
              </p>
              <h4>Forwarding to Registrar and Share Transfer Agent (RTA)</h4>
              <p>
                The DP will then send your dematerialisation request to the
                respective company's Registrar and Share Transfer Agent (RTA).
              </p>
              <h4>Conversion to Electronic Form</h4>
              <p>
                After the RTA approves your request, your physical share
                certificates will be converted into electronic format and
                destroyed to prevent misuse.
              </p>
              <h4>Credit to Your Demat Account</h4>
              <p>
                The shares, now in electronic form, are credited to your Demat
                account. You can then sell these shares or transfer them to
                other accounts as needed.
              </p>
              <h3>
                Penalties for Non-Dematerialisation of Shares for Private
                Companies
              </h3>
              <p>
                The penalties for not completing the dematerialisation of shares
                of private companies can be quite stringent under Rule 9B. Here
                are the potential consequences:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Restrictions on Securities Transactions: </strong>
                      Companies that fail to meet the requirements will be
                      barred from issuing or allotting any securities, including
                      those involved in bonus share schemes and buybacks.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limitations for Shareholders:</strong>{" "}
                      Shareholders who do not convert their physical shares into
                      dematerialised form will face restrictions, such as being
                      unable to sell their shares or participate in new
                      subscriptions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Monetary Fines for Companies: </strong>Companies
                      in violation of Rule 9B can be fined INR 10,000, with an
                      additional INR 1,000 for each day the violation continues,
                      accumulating to a maximum penalty of INR 200,000.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Penalties for Officers in Default:</strong>{" "}
                      Officers of the company found in default may incur fines
                      up to INR 50,000.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Easily Convert Physical Shares to Demat with LegallensIndia!
              </h3>
              <p>
                LegallensIndia offers comprehensive support to companies looking
                to dematerialise their shares through NSDL/<span>CDSL</span>. We
                take charge of the entire dematerialisation process, handling
                all the necessary procedures and documentation to ensure a
                smooth and efficient transition. With our expert guidance, your
                company can seamlessly shift to a digital shareholding
                structure, enhancing the security and accessibility of your
                securities.&nbsp;
              </p>
              <p>
                <em>
                  <strong>
                    Convert Your Physical Shares to Demat with LegallensIndia –
                    Get Started Now!
                  </strong>
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
