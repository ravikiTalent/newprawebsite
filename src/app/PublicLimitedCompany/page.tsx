import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function PublicLimitedCompany() {
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
                Public Limited Company Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In India, a Public Limited Company (PLC) is a business structure
                suited for large-scale operations.
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
                { id: 2, title: "Business Registration", url: "StartUp" },
                { id: 3, title: "Public Limited Company", url: "" }
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
                        Public Limited Company Registration
                      </h5>
                      <p>
                        In India, a Public Limited Company (PLC) is a business
                        structure suited for large-scale operations.
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
                Public Limited Company Registration
              </h2>

              <p>
                In India, a Public Limited Company (PLC) is a business structure
                suited for large-scale operations. Entrepreneurs who are
                planning for large-scale business operations can start a Public
                Limited Company registration in India. Unlike private companies,
                PLCs can raise funds from the general public by offering shares
                on stock exchanges. This allows them to access a wider pool of
                capital for growth. A Public Limited Company in India enjoys all
                the privileges of a corporate entity together with the features
                of Limited Liability. Entrepreneurs and aspiring business owners
                must understand what is public limited company and the
                registration process to obtain all the benefits.
                <br />
                LegallensIndia can help you start your public limited company in
                India with ease and efficiency. Our comprehensive services cover
                everything from company registration to compliance management,
                ensuring a smooth and hassle-free setup process for your
                business.
              </p>
              <h5>
                Start your public limited company registration today with
                LegallensIndia!
              </h5>
              <h3>What is Public Limited Company in India?</h3>
              <p>
                A public limited company meaning defined by its unique function,
                which is a form of corporate entity that permits the general
                public to hold ownership stakes through publicly traded shares.
                These shares are commonly exchanged on established stock
                markets, enabling a diverse group of brokers, investors, and
                traders to buy and sell equity. This structure allows
                individuals from various backgrounds to invest and hold shares
                in the company.
                <br />
                Unlike private companies, public limited companies are governed
                by stricter regulatory and reporting standards. In India, the
                law governing public limited companies is primarily outlined in
                the Companies Act of 2013. The public company minimum members is
                7, and there is no limit on the maximum number of members
                /shareholders for starting a Public Limited Company.
                <br />
                The day-to-day operations are managed by an executive team, but
                the broader ownership lies with the many shareholders who invest
                in the companys stock. These shareholders typically have voting
                rights that include the ability to vote on the election of the
                board of directors. The board then selects the executive team
                tasked with managing the company's ongoing business affairs. It
                is important to remember to meet the minimum shareholders in
                public company to proceed in the functions.
              </p>
              <h3>Key Characteristics of a Public Limited Company</h3>
              <p>
                Below are the fundamental characteristics of a public limited
                company:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board of Directors:</strong>According to the
                      Companies Act, a public limited company must appoint at
                      least three directors, with no upper limit on the number.
                      The board of directors plays a crucial role in governing
                      the company's management and strategic decision-making.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company Name:</strong>It is a legal requirement
                      for all public limited companies to include the word
                      "Limited" in their company name. This designation
                      indicates that the company is legally a public entity,
                      capable of trading shares on the stock market and open to
                      investment by the public.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>The Company's Prospectus:</strong> Public limited
                      companies are required to prepare and issue a prospectus.
                      This document offers a detailed look at the company's
                      operational activities and financial health, providing
                      essential information to potential investors and aiding
                      their decision-making process.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Paid-Up Capital:</strong> While the Companies Act
                      stipulates various regulations for public limited
                      companies, it does not impose a minimum initial share
                      capital requirement for registration. This absence of a
                      specified minimum allows companies the flexibility to set
                      their capital structure according to their specific needs
                      and strategic objectives.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Types of Public Limited Company</h3>
              <p>
                Public limited companies are broadly categorised into two
                distinct types:
              </p>
              <h4>Listed Company</h4>
              <p>
                This type of public limited company has its shares actively
                listed and available for trading on one or more stock exchanges.
                This accessibility allows the public and various financial
                entities to buy and sell the company's shares, providing greater
                liquidity and exposure to a diverse pool of investors.
              </p>
              <h4>Unlisted Company</h4>
              <p>
                Unlike its listed counterparts, an unlisted public limited
                company does not have its shares traded on any stock exchange.
                As a result, its shares are not as easily transferable, and the
                company does not experience the same level of public scrutiny or
                regulatory requirements as a listed company. This category of
                public limited company may appeal to businesses seeking to
                benefit from a broader base of shareholders while avoiding the
                complexities of full public trading.
              </p>
              <h3 className="mt-4">Requirements for Registration of a Public Limited Company</h3>
              <p>
                When planning to register a public limited company, it is
                important to understand and adhere to the specific rules and
                regulations set under the Companies Act. Here are the key
                requirements for forming a public limited company in India:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimum Shareholders in Public Company:</strong>
                      The public company minimum members to form a PLC is seven
                      shareholders, with no limit on the maximum number.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board of Directors:</strong>A public company
                      minimum members of three directors is required to
                      establish a public limited company. Each director must
                      possess a valid Director Identification Number (DIN).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Authorised Share Capital:</strong>The company
                      should have a minimum authorised share capital of Rs. 1
                      lakh to meet the initial financial requirements for
                      registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Digital Signature Certificate (DSC):</strong> The
                      registration process includes electronic submission of
                      documents. Therefore, a Digital Signature Certificate of
                      at least one director is necessary for authenticating
                      documents submitted electronically.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company Name:</strong> The proposed name of the
                      company must comply with the provisions of the Companies
                      Act and Rules, ensuring it is unique and not already in
                      use.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Foundational Documents: </strong> Key documents
                      required include the Memorandum of Association (MOA) and
                      Articles of Association (AOA). Additionally, Form DIR-12
                      must be duly filled to register the details of the
                      directors.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Advantages of Public Limited Company Registration</h3>
              <p>
                Registering as a public limited company brings several key
                benefits:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Easier Access to Capital:</strong>These companies
                      can raise funds by selling shares to the public, which
                      provides a major boost in capital and makes it easier to
                      fund expansion projects.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Flexibility:</strong>Public limited
                      companies can raise money using a variety of financial
                      options, thanks to strict regulations that give investors
                      confidence in their investments.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limited Liability:</strong>The shareholders of a
                      Public Limited Company are given limited liability
                      protection. In a situation of unexpected liability, the
                      same would be limited only to the company and would not
                      affect the shareholders in any way.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Growth Opportunities:</strong>Going public can
                      help smaller companies grow by providing the funds needed
                      for expansion and improving operational efficiency due to
                      increased accountability.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Flexibility in Shareholder Structure:</strong>
                      While the Public company minimum members are 7
                      shareholders, there is not upper limit for maximum
                      members.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Easy Share Trading:</strong>Shares of public
                      limited companies can be bought and sold easily on the
                      stock market, which attracts more investors and makes it
                      simpler for existing shareholders to sell their shares if
                      they choose.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                These benefits make public limited companies attractive for
                businesses looking to expand and attract investment.
              </p>
              <h3>
                Documents Required for Public Limited Company Registration
              </h3>
              <p>
                To successfully register a Public Limited Company in India, you
                will need to gather and submit the following documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Identity Proof for Shareholders and Directors:
                      </strong>
                      Acceptable forms of identification include Aadhar cards,
                      PAN cards, or voter IDs for all shareholders and
                      directors.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Address Proof for Shareholders and Directors:
                      </strong>
                      Documents proving residence are required for all members
                      involved.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN Card Details:</strong>These are needed for all
                      directors, shareholders, and members of the company.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company Office Address Proof:</strong>This can be
                      a recent utility bill (not older than two months) that
                      confirms the location of your company's office or business
                      premises.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Landlord's Consent Letter:</strong> A letter from
                      the landlord of your business premises giving permission
                      for your company to operate from that location.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Digital Signature Certificates (DSC):</strong>{" "}
                      Required for all designated directors to authenticate
                      documents digitally.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Foundational Documents:</strong> Copies of the
                      company's Articles of Association (AOA) and Memorandum of
                      Association (MOA).
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Public Limited Company Registration Procedure</h3>
              <p>
                Public limited company registration involves several structured
                steps that adhere to regulatory requirements. Here is a detailed
                guide to the procedure:
              </p>
              <h4>Step 1: Obtain Digital Signature Certificates (DSC)</h4>
              <p>Step 1: Obtain Digital Signature Certificates (DSC)</p>
              <h4>Step 2: Apply for Director Identification Number (DIN)</h4>
              <p>Step 2: Apply for Director Identification Number (DIN)</p>
              <h4>Step 3: Check Company Name Availability</h4>
              <p>
                Use the MCA online portal to check if your desired company name
                is available. It is important to ensure that the name does not
                infringe upon any existing trademarks or is not already in use.
                This step is crucial as it establishes the unique identity of
                your company.
              </p>
              <h4>Step 4: File SPICe+ Form</h4>
              <p>
                Once the name is approved, proceed to file the SPICe+ form. This
                comprehensive form is designed to cover all legalities for the
                incorporation of a company. Along with this form, you will need
                to submit the Memorandum of Association (MOA) and Articles of
                Association (AOA), which detail the constitution and rules
                governing the management of the company.
              </p>
              <h4>Step 5: Certificate of Incorporation</h4>
              <p>
                After the submission of the SPICe+ form and necessary documents,
                the Registrar of Companies (ROC) will review the application.
                Upon successful verification, the ROC issues a Certificate of
                Incorporation. This certificate is a legal document that marks
                the birth of the company and includes the company's Corporate
                Identification Number (CIN) and the date of incorporation.
              </p>
              <h4>Step 6: Apply for PAN and TAN</h4>
              <p>
                With the incorporation certificate in hand, the next step is to
                apply for the company's Permanent Account Number (PAN) and Tax
                Deduction and Collection Account Number (TAN). These are
                essential for all tax-related transactions and compliances.
              </p>
              <h4>Step 7: Open a Company Bank Account</h4>
              <p>
                Finally, open a bank account in the name of the company. You
                will need the Certificate of Incorporation, MOA, AOA, PAN, and
                other relevant documents to set up the bank account. This
                account will handle all monetary transactions of the company.
              </p>
              <h4>Additional Steps</h4>
              <p>
                Depending on the nature of the business and the specific sector
                it operates in, you may need additional approvals or
                registrations, such as GST registration, import/export code, or
                industry-specific licenses.
                <br />
                Whatever licenses or registrations you require, the experts at
                LegallensIndia are here to assist you in starting your public
                limited company in India.
              </p>
              <h3>
                Start Your Public Limited Company with Ease through
                LegallensIndia!
              </h3>
              <p>
                Starting your public limited company registration is
                straightforward and efficient with LegallensIndia. With a proven
                track record of expert guidance and a commitment to smooth,
                compliant service, we streamline the entire registration
                process. From handling all necessary documentation, including
                DSC, DIN, MOA, and AOA, to ensuring your company complies with
                all legal requirements, our team is equipped to support you at
                every step.
                <br />
                Choose LegallensIndia to leverage our expertise and focus more
                on growing your business while we take care of the bureaucratic
                hurdles.{" "}
              </p>
              <h5>
                Get started today and easily establish your public limited
                company in India.
              </h5>
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
