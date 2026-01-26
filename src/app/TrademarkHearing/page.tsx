import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkHearing() {
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
              <h1 className="display-1 text-white mb-3">Trademark Hearing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A Trademark Hearing in India is an administrative proceeding
                conducted by the Registrar of Trademarks to resolve disputes
                between two parties regarding the registration, renewal, or
                infringement of a Trademark.
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
                { id: 2, title: "Trademark", url: "Trademark" },
                { id: 3, title: "Trademark Hearing", url: "" },
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
                      <h5 className="card-title">Trademark Hearing</h5>
                      <p>
                        A Trademark Hearing in India is an administrative
                        proceeding conducted by the Registrar of Trademarks to
                        resolve disputes between two parties regarding the
                        registration, renewal, or infringement of a Trademark.
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

              <h2 className="display-4 mb-3">Trademark Hearing</h2>
              <p>
                A Trademark Hearing in India is an administrative proceeding
                conducted by the Registrar of Trademarks to resolve disputes
                between two parties regarding the registration, renewal, or
                infringement of a Trademark. During the trademark hearing
                process, each party has the opportunity to present their case,
                which may include testimony from witnesses, legal arguments, and
                other evidence. The Registrar will then decide based on the
                evidence presented. The final decision will significantly impact
                the Trademark in question. When you receive a trademark show
                cause hearing notice, it's crucial to respond promptly to
                protect your intellectual rights. It is essential to have
                experienced legal counsel present to ensure the best possible
                outcome.
              </p>
              <h3>Importance of Trademakr Hearing</h3>
              <p>
                Trademark Hearings in India are vital as they provide an
                opportunity for trademark applicants to defend their
                applications against objections raised by the Trademarks
                Registry or third parties. After an examiner assigns the
                trademark application with a status of 'ready for show cause
                hearing', then the application needs further review. These
                trademark show cause hearings enable applicants to provide
                further evidence and arguments supporting their applications,
                which can help ensure that they are accepted. They also provide
                an important forum for resolving disputes over the rights to use
                trademarks in the country, helping to ensure that trademark
                owners are adequately protected. Failing to address a show cause
                hearing trademark notice can result in the loss of your
                trademark rights.
              </p>
              <h3>Trademark Registry Jurisdiction</h3>
              <p>
                Each state and union territory has been assigned to one of the
                five zones that comprise the regional jurisdiction for trademark
                applications and hearings:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Chennai</strong>
                      Andhra Pradesh, Tamil Nadu, Telangana, Kerala, Karnataka,
                      Lakshadweep Island, and the Union Territories of
                      Pondicherry.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Mumbai</strong>
                      The state of Madhya Pradesh, Maharashtra, Goa, and
                      Chhattisgarh.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>New Delhi</strong>Jammu and Kashmir, Haryana,
                      Punjab, Uttar Pradesh, Delhi, Himachal Pradesh, and the
                      Union Territories of Chandigarh and Uttarakhand.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ahmedabad</strong>Rajasthan, Gujarat, Dadra, Diu,
                      Daman, and Nagar Haveli.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Kolkata</strong>
                      Assam, Bihar, Arunachal Pradesh, Manipur, Orissa, West
                      Bengal, Mizoram, Sikkim, Meghalaya, Tripura, Jharkhand,
                      and the Union Territories of Andaman &amp; Nicobar Islands
                      and Nagaland are all included.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Trademark Hearing Adjournment</h3>
              <p>
                The concerned director may postpone a trademark hearing to allow
                for an appearance, or it may be stopped or postponed
                unilaterally by filing a TM-M application at least three days
                prior to the hearing period. If an applicant fails to appear for
                a scheduled trademark opposition hearing often referred to as
                being 'ready for show cause hearing', the concerned
                administrator may postpone it up to three times before rejecting
                their application.
              </p>
              <h3>Documents Required for Trademark Hearing</h3>
              <p>
                Here is the list of documents typically required for trademark
                opposition hearing:
              </p>
              <h4>Power of Attorney</h4>
              <p>
                A power of attorney (POA) is a legal document that permits
                someone else the authority to act on your behalf in a legal or
                business matter. When registering for a trademark, the applicant
                must sign a power of attorney to give the right to represent
                them in the trademark registration process.
              </p>
              <h4>Authorisation Letter</h4>
              <p>
                An authorisation letter is a document used to grant permission
                or authority to another person or entity to act on behalf of the
                sender in a certain capacity. In trademark registration, an
                authorisation letter is used to appoint a representative as the
                applicant’s legal representative for the trademark registration
                process.
              </p>
              <h4>Proof of Usage</h4>
              <p>
                Proof of usage is documentation that demonstrates how the
                trademark is being used in the marketplace. The Indian
                Trademarks Registry requires this documentation to prove that
                the trademark is being used in connection with the goods and
                services it is registered for. Examples of proof of usage
                include invoices, brochures, advertisements, photographs, and
                other documents that demonstrate the use of the trademark.
              </p>
              <h4>Trademark Opposition Hearing Process</h4>
              <p>
                This process is a legal proceeding that is organized by the
                Registrar of Trademarks or an appointed hearing officer to
                resolve any objections mentioned by the Trademark Examiner
                during the registration process. The following are the steps
                associated with the show cause hearing trademark process:
              </p>
              <h4>Examination Report Issuance</h4>
              <p>
                Following the filing of the trademark application, it is
                examined by the Trademark Examiner. If the Examiner discovers
                any objections, they will issue an Examination Report outlining
                the issues.
              </p>
              <h4>Examination Report Response</h4>
              <p>
                Within one month of issuance, the applicant must respond to the
                Examination Report, addressing the Examiner's objections. If the
                response is deemed satisfactory, the trademark application moves
                on to the next stage.
              </p>
              <h4>Hearing Request</h4>
              <p>
                If the Examiner is dissatisfied with the applicant's response,
                they may request a hearing. The applicant must file a request
                for a hearing within one month of receiving the trademark
                hearing notice.
              </p>
              <h4>Evidence Filing</h4>
              <p>
                Once the hearing request has been filed, the hearing officer
                will schedule the hearing. Before the trademark hearing date,
                both the applicant and the Examiner must file evidence and
                documents supporting their respective cases.
              </p>
              <h4>Hearing</h4>
              <p>
                The applicant and Examiner have the opportunity to present their
                arguments and evidence before the hearing officer at the
                hearing. The hearing officer will hear both sides and decide
                based on the evidence presented.
              </p>
              <h4>Decision</h4>
              <p>
                Based on the evidence provided at the hearing, the hearing
                officer will decide whether to approve or reject the trademark
                application. If the trademark application is approved, the
                trademark will be registered and the applicant will be issued a
                registration certificate.
              </p>
              <h3>How LegallensIndia can help you with Trademark Hearing</h3>
              <p>
                At LegallensIndia, we provide trademark hearing services to help
                businesses protect their valuable trademarks. Our team of
                experienced IP lawyers is dedicated to providing the highest
                quality legal service to ensure the trademark registration
                process goes smoothly with affordable trademark hearing fees.
              </p>
              <p>
                When a trademark hearing process is necessary, we appoint an IP
                lawyer to the job responsible for collecting the required
                supporting documents from the client and uploading them to the
                registry. After that, we wait for the trademark hearing date to
                be allotted by the registry. Once the trademark hearing date has
                been set, we attend the hearing and present our defence.
              </p>
              <p>
                Our IP lawyers are highly experienced in trademark hearings and
                understand the importance of building a strong case on behalf of
                our clients. We use the latest technology and industry best
                practices to ensure the hearing is conducted efficiently and
                successfully. Our service justifies the trademark hearing fees
                you are paying.
              </p>
              <p>
                Our legal experts can help you understand and navigate the
                complexities of trademark hearing notice. We understand that a
                trademark hearing process can be stressful, and our team of IP
                lawyers are dedicated to ensuring the process is as stress-free
                as possible. We provide our clients with detailed information
                about the hearing process so that they can make informed
                decisions. If you've been served with trademark hearing notice,
                contact us immediately for professional guidance and
                representation.
              </p>
              <p>
                At LegallensIndia, we strive to provide our clients with the best
                possible service with justifiable trademark hearing fees. Our IP
                lawyers are committed to providing the highest quality legal
                advice and representing our clients in trademark hearings. We
                work hard to ensure that our clients' trademarks are protected
                and that they receive a successful outcome from the hearing.
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
