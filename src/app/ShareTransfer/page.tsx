import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function ShareTransfer() {
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
              <h1 className="display-1 text-white mb-3">Share Transfer</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Share transfer from one person to another person or one person
                to many or many to one person.
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
                { id: 3, title: "Share Transfer", url: "" },
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
                      <h5 className="card-title">Share Transfer</h5>
                      <p>
                        Share transfer from one person to another person or one
                        person to many or many to one person.
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
                Private Limited Company Share Transfer
              </h2>
              <p>
                The Share Transfer Procedure in a Private Limited Company is a
                structured process that facilitates sharing ownership from one
                individual to another. Shares represent portions of ownership
                within a company, and they hold the potential to be purchased,
                sold, or transferred. In India, the transfer of shares within a
                private limited company is regulated by the Companies Act 2013,
                along with the associated rules and guidelines set forth by the
                Ministry of Corporate Affairs (MCA).
              </p>
              <p>
                At LegallensIndia, our team of experts stands prepared to
                facilitate the Share Transfer process for Private Limited
                Companies, ensuring that every step is executed following the
                prevailing legal standards and regulatory requirements, thereby
                guaranteeing a seamless transition and compliance integrity.
              </p>
              <h3>Meaning of Share Transfer</h3>
              <p>
                Share transfer refers to the process where a company shareholder
                voluntarily transfers their ownership rights, and potential
                obligations associated with a share of the company. This
                transaction occurs when a shareholder decides to relinquish
                their membership in the company and passes on their share to
                another individual who desires to become a member.
              </p>
              <p>
                Therefore, the transfer of shares in the company is transferred
                much like any movable asset, unless there are specific
                limitations imposed by the company's articles of association.
              </p>
              <h3>
                Key Regulations for Transfer of Shares in Private Companies
              </h3>
              <p>
                The transfer of shares in company law for a private company is
                governed by specific legal provisions to ensure compliance with
                corporate governance standards and to maintain the company's
                private status. Section 56(1) &amp; (3) of the Companies Act,
                2013, alongside Rule 11(1) (2) (3) of the Companies (Share
                Capital and Debentures) Rules, 2014, lay down the framework for
                these transfers.
              </p>
              <h3>Share Transfer Rules in Private Limited Companies</h3>
              <p>
                In Private Limited Companies, share transfer is governed by the
                Articles of Association (AOA), which must be consulted before
                initiating any transfer. Shareholders' constraints of the
                transfer of shares in the company is:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Pre-emptive Rights: </strong>Shareholders wishing
                      to sell their shares must offer them first to the
                      company's existing members at a price set by the Company's
                      Directors or Auditor. The valuation method for shares
                      should be outlined in the Articles of Association. Should
                      there be no interest from current shareholders, the shares
                      can be transferred to someone outside the company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Directorial Discretion on Share Transfers:{" "}
                      </strong>
                      The Articles of Association may empower a director to
                      decline a share transfer to another individual. This
                      grants directors significant authority over share transfer
                      decisions in a Private Limited Company.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Key Participants in Share Transfer Process</h3>
              <p>The process involves several key parties, including</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Initial subscribers to
                      the company's memorandum.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A legal representative,
                      in the event of a shareholder's death.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The transferor is the
                      current shareholder wishing to transfer shares.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The transferee is the
                      recipient of the shares.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The company involved in the transfer, regardless of whether it
                is publicly traded or privately held.
              </p>
              <h3>
                Documents Required for Share Transfer in a Private Limited
                Company
              </h3>
              <p>
                For a successful completion of the procedure for transfer of
                shares in private company, the necessary documents include
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Share Transfer Deed: </strong>This crucial
                      document, needing signatures from both the seller and
                      buyer of the shares, facilitates the transfer.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Share Certificate: </strong>The seller must
                      provide the original share certificate when submitting the
                      share transfer deed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN Card: </strong>A photocopy of the buyer's PAN
                      Card is essential for the share transfer process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board Resolution: </strong>The company's Board of
                      Directors needs to endorse the share transfer through a
                      formal resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>No Objection Certificate: </strong>An NOC from the
                      seller may be requested to confirm their consent to the
                      share transfer.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Indemnity Bond: </strong>The seller might need to
                      provide an indemnity bond to safeguard the company from
                      potential transfer-related losses.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Stamp Duty Payment: </strong>The share transfer
                      deed requires the payment of stamp duty, which varies by
                      state.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Share Transfer Process in a Private Limited Company</h3>
              <p>
                The procedure for transfer of shares in private company adheres
                to the company's Articles of Association (AOA) and relevant
                legal guidelines.
              </p>
              <h4>Initiation of Share Transfer Procedure</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Review the AOA: </strong>Examine the AOA for any
                      transfer restrictions or conditions that must be met.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notification to Director: </strong>The shareholder
                      intending to transfer shares must formally notify the
                      company's director of their intention.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Price Determination: </strong>Establish the share
                      price according to the AOA, typically set by the directors
                      or the company auditor. This price is the initial offer
                      made to existing shareholders.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notifying Shareholders: </strong>The company must
                      inform all shareholders about the available shares,
                      including details like the offer price and the deadline
                      for expressing interest.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Share Allocation: </strong>If any current
                      shareholders are interested, they should be allocated
                      first. If no interest is shown, or there are remaining
                      shares, they can be offered to external parties.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Executing the Share Transfer</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Share Transfer Deed: </strong>The next step in
                      transferring shares involves acquiring the official
                      transfer deed, designated as Form SH-4, which a recognised
                      authority must endorse. This form serves as the primary
                      document for executing share transfers. In certain
                      situations, the transfer of shares might not adhere to the
                      standard Form SH-4 requirement. These exceptions include
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Transfers executed by
                      directors or nominees on behalf of another corporate
                      entity as outlined in section 187 of the Companies Act,
                      2013.{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Share transfers from
                      directors or nominees for a government-owned or controlled
                      corporation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Shares are pledged as
                      security for loan repayment to institutions like the State
                      Bank of India, scheduled banks, other banking companies,
                      financial institutions, or government entities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Transfers involving
                      debentures, where a standardised transfer format is
                      acceptable.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Deed Execution: </strong>The transferor (seller)
                      and the transferee (buyer) must sign the share transfer
                      deed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Stamp Duty: </strong>The deed must be stamped by
                      the Indian Stamp Act and the applicable stamp duty rates
                      in the state.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Witness Verification: </strong>A witness must sign
                      the deed, providing their signature, name, and address for
                      additional validation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Submission: </strong>Attach the share
                      certificate or allotment letter to the completed transfer
                      deed and submit these documents to the company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Share Certificate Issuance: </strong>Upon
                      verifying and accepting the transfer documents, the
                      company will issue a new share certificate to the
                      transferee, officially recognising them as the new
                      shareholders.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                LegallensIndia: Your Trusted Partner in Simplifying Share
                Transfers
              </h3>
              <p>
                The team of experts at LegallensIndia is equipped to provide
                comprehensive assistance with the share transfer process. Our
                expert knowledge and experience in navigating the complexities
                of corporate regulations can ensure a smooth and compliant
                procedure for transfer of shares in private company. From
                reviewing the Articles of Association to ensuring the proper
                execution and stamping of share transfer deeds, LegallensIndia
                professionals can guide you through each step.{" "}
              </p>
              <p>
                <em>
                  Get Expert Assistance for share transfer Now with LegallensIndia
                  – Contact Us Today!
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
