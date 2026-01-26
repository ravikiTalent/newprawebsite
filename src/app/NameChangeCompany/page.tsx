import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function NameChangeCompany() {
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
                Name Change - Company
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Changing a company's name isn't a decision to be taken lightly.
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
                { id: 3, title: "Name Change - Company", url: "" },
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
                      <h5 className="card-title">Name Change - Company</h5>
                      <p>
                        Changing a company's name isn't a decision to be taken
                        lightly.
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

              <h2 className="display-4 mb-3">Company Name Change</h2>
              <p>
                <span>
                  In the dynamic business world, a company's name is more than
                  just an identifier; it's a powerful symbol of its brand
                  identity and corporate ethos. A well-chosen name can
                  significantly impact customer perception and market presence,
                  creating an indelible imprint in the minds of stakeholders.
                  However, there are times when a change in a company's name
                  becomes imperative. Such a need may arise due to various
                  reasons. Changing a company's name isn't a decision to be
                  taken lightly. Knowing how to change company name is a
                  strategic move that requires careful consideration and legal
                  compliance. In India, changing a company's name is governed by
                  the <span>Companies Act 2013</span>. Hence, changing a company
                  name includes a legal procedure demanding expert
                  support.&nbsp;
                </span>
              </p>
              <p>
                <span>Are you</span>
                <span>&nbsp;planning to </span>
                <span>change</span>
                <span>&nbsp;</span>
                <span>your company name?&nbsp;</span>LegallensIndia offers expert
                guidance and seamless support for your company's name change
                process, ensuring legal compliance and ease of transition.{" "}
              </p>
              <p>
                <strong>
                  <em>
                    Contact LegallensIndia today to start reshaping your company's
                    future identity!
                  </em>
                </strong>
              </p>
              <h3>
                <span>Company Name Change</span>
              </h3>
              <p>
                <span>
                  Under the Companies Act 2013, a company can change its name
                  through a special resolution passed in a general meeting,
                  subject to approval from the Registrar of Companies (RoC) and
                  the Central Government. Importantly, this name change does not
                  create a new company or entity. The existing company will
                  operate under its new name, and this change does not impact:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>The rights or obligations of the company</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Any legal proceedings involving or against the company
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Legal Provisions for Changing a Company's Name:</span>
              </h3>
              <p>
                <span>
                  Under Section 13(2) of the Companies Act 2013, a company can
                  change its name by passing a special resolution and obtaining
                  approval from the Central Government (delegated to the
                  Registrar of Companies).
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Section 4(2) of the Companies Act 2013 prohibits a
                        company from having a name that is identical or closely
                        resembles an existing company's name, violates any
                        existing law, or is considered undesirable by the
                        Central Government (Refer to Rule 8 of Companies
                        (Incorporation) Rules, 2014 for details).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Section 4(3) of the Companies Act 2013 adds that certain
                        words or expressions in a company's name require prior
                        approval from the Central Government to avoid creating a
                        false impression of government affiliation.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Restrictions on Name Changes (Rules 29(1) and 29(2) of
                  Companies (Incorporation) Rules, 2014):
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Rule 29(1):</strong> Companies that have defaulted
                      in filing documents with the Registrar or in repaying
                      deposits or debentures cannot change their names.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Rule 29(2):</strong> An application in Form INC-24
                      must be filed along with the fee to change the name. Upon
                      approval, a new certificate of incorporation in Form
                      INC-25 is issued with the updated name.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Common Reasons for Changing Company Name</span>
              </h3>
              <p>
                <span>
                  There can be several compelling reasons for a company to
                  contemplate changing its name. Some of the most common motives
                  include:
                </span>
              </p>
              <h4>
                <span>Changing from Private to Public</span>
              </h4>
              <p>
                <span>
                  Changing from a private limited company to a public limited
                  company may involve altering the company's name as part of the
                  restructuring process. This change is often made when a
                  private company offers its shares to the public through an
                  initial public offering (IPO) and becomes subject to different
                  regulatory requirements.
                </span>
              </p>
              <h4>
                <span>Changing from Public to Private</span>
              </h4>
              <p>
                <span>
                  Conversely, a public limited company may change its status to
                  a private limited company. This change may involve altering
                  the company's name, among other modifications. Companies may
                  choose this route for various reasons, such as reducing
                  regulatory compliance or increasing management control.
                </span>
              </p>
              <h4>
                <span>Voluntary Name Change</span>
              </h4>
              <p>
                <span>
                  Sometimes, companies opt for a complete name change, which
                  goes beyond altering the company's status or structure.{" "}
                </span>
                <span>
                  The company's board may choose to undergo a voluntary name
                  change, provided all necessary conditions are met.
                </span>
              </p>
              <h4>
                <span>Adaptation to New Business Activities</span>
              </h4>
              <p>
                <span>
                  When a company modifies its business activities, it may change
                  its name to align with its updated objectives. In such cases,
                  adjustments to the Memorandum of Articles may also be
                  necessary.
                </span>
              </p>
              <h4>
                <span>Marketing and Rebranding</span>
              </h4>
              <p>
                <span>
                  {" "}
                  Companies may decide to change their names for marketing
                  purposes, effective brand positioning, or to stay in tune with
                  current trends and fashions that enhance their brand image. It
                  can also be a strategic move when entering new markets.
                </span>
              </p>
              <h4>
                <span>Change of Ownership</span>
              </h4>
              <p>
                <span>
                  {" "}
                  A change in ownership or an entity taking over the company
                  often results in a name change. This alteration reflects the
                  authority of the new management and serves branding purposes.
                </span>
              </p>
              <h4>
                <span>Intellectual Property Rights (IPR)</span>
              </h4>
              <p>
                <span>
                  {" "}
                  A company may opt for a name change to strengthen its
                  trademark or copyright protection. Conversely, it may avoid
                  potential IPR conflicts by altering its name.
                </span>
              </p>
              <h4>
                <span>Compliance with the Registrar of Companies (RoC)</span>
              </h4>
              <p>
                <span>
                  RoC may issue a company name change order following a
                  complaint from another company claiming priority in name or
                  trademark usage. In such cases, compliance with RoC's
                  directive becomes mandatory.
                </span>
              </p>
              <h4>
                <span>Leveraging Popularity</span>
              </h4>
              <p>
                <span>
                  When a business gains prominence for a specific product or
                  service, it may rebrand the entire company around that product
                  or service to capitalize on its popularity.
                </span>
              </p>
              <h3>
                <span>Documents Required to Change Business Name</span>
              </h3>
              <p>
                <span>
                  The documents required for changing a company name include:
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    Attachments to <span>Form MGT-14</span> (For Changing
                    Company Name):
                  </strong>
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Certified True Copies of the Special Resolutions along
                        with the explanatory statement.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        A copy of the meeting notice was sent to members,
                        including all annexures.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Altered <span>Memorandum</span> &amp;{" "}
                        <span>Article of Association</span>.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Copy of the Attendance Sheet of the General Meeting.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Shorter Notice Consent, if applicable.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  <strong>
                    Attachments to <span>Form INC-24</span> (For Name Change
                    Approval):
                  </strong>
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Notice along with Explanatory Statements.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Certified True Copy of the Special Resolution.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Altered Memorandum &amp; Article of Association.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Minutes of the General Meeting.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Affidavit from Directors.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  In addition to the documents that need to be filed with MGT-14
                  and INC-24, several essential documents are required to change
                  the company name successfully. These documents include:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Certificate of Incorporation</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Altered MOA and AOA</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Digital Signature of the authorised director</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Proof of registered business address</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>List of shareholders and directors</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Timeline for Changing Company Name</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Changing a company's name typically takes around 10 to 15
                  working days due to the need for approvals from various
                  departments.
                </span>
              </p>
              <h3>
                <span>How to Change Company Name?</span>
              </h3>
              <p>
                <span>
                  Here is the systematic process we have outlined below
                  regarding how to change your business name:
                </span>
              </p>
              <h4>
                <span>Step 1: Board Resolution&nbsp;</span>
              </h4>
              <p>
                <span>
                  Initiate the process by convening a board meeting. During this
                  meeting, the board of directors will decide to change the
                  company's name. They will also authorize a Director or the
                  Company Secretary (CS) to verify the availability of the new
                  name with the Ministry of Corporate Affairs (MCA).
                  Additionally, the board will set the groundwork for conducting
                  an<span> Extraordinary General Meeting (EGM)</span> to pass a
                  special resolution.
                </span>
              </p>
              <h4>
                <span>Step 2: Checking Name Availability</span>
              </h4>
              <p>
                <span>
                  To ensure the chosen name for the company is available and
                  compliant with regulatory requirements, the authorized
                  director or company secretary will follow these steps:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Reservation Request:</strong> The authorized
                        representative will initiate a request for the
                        reservation and approval of the new name using the RUN
                        (Reserve Unique Name) facility provided by the Ministry
                        of Corporate Affairs (MCA).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Availability Check:</strong> Through the RUN
                        facility, they will verify the availability of the
                        proposed company name. This process mirrors the name
                        approval procedure during the company's initial
                        incorporation.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Confirmation from RoC:</strong> Once the request
                        is processed, the Registrar of Companies (RoC) will
                        issue confirmation regarding the availability of the
                        proposed name. It's important to note that this
                        confirmation does not constitute the final approval of
                        the company name; it simply confirms that the requested
                        name is available.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Compliance Check:</strong> The proposed name
                        must adhere to certain guidelines. It should not closely
                        resemble an existing company name or trademark and
                        should not include prohibited words outlined in the
                        Companies (Incorporation) Rules, 2014. All other
                        conditions applicable during the initial name approval
                        process also apply in this situation.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Step 3: Passing a Special Resolution</span>
              </h4>
              <p>
                <span>
                  After obtaining confirmation from the Registrar of Companies
                  (RoC) that the proposed name is available and compliant, the
                  company must proceed with the following steps to formally
                  change its name:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>
                          Calling an Extraordinary General Meeting (EGM):
                        </strong>{" "}
                        The company must convene an EGM, during which
                        shareholders will discuss and vote on the proposed name
                        change. This meeting should be called with proper
                        notice, and the agenda should include the resolution to
                        change the company's name.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Passing a Special Resolution:</strong> During
                        the EGM, a special resolution will be proposed and voted
                        upon. This special resolution should explicitly state
                        the company's intention to change its name and make the
                        necessary amendments to the Memorandum of Association
                        and Articles of Association to reflect the new name.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Approval by Shareholders:</strong> For the
                        resolution to pass, it must receive the affirmative
                        votes of the majority of shareholders present and voting
                        at the EGM. The requirements for passing a special
                        resolution may vary based on the company's Articles of
                        Association and applicable laws.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Filing with RoC:</strong> Once the special
                        resolution is passed, the company must file the
                        resolution along with the necessary documents, such as
                        the altered Memorandum of Association and Articles of
                        Association, with the RoC.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Obtaining RoC Approval:</strong> After reviewing
                        the submitted documents, the RoC will approve the name
                        change and the associated amendments to the company's
                        governing documents.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>
                  Step 4: Applying to the Registrar for Name Change Approval
                </span>
              </h4>
              <p>
                <span>
                  After passing the special resolution and conducting the EGM,
                  the company must follow a formal procedure to apply for the
                  name change approval from the Registrar of Companies (RoC).
                  Here are the steps involved:
                </span>
              </p>
              <h4>
                <span>Filing Form MGT-14</span>
              </h4>
              <p>
                <span>
                  &nbsp;Within 30 days of passing the special resolution, the
                  company is required to file Form MGT-14 with the RoC. This
                  form contains essential details related to the special
                  resolution. The above-mentioned documents should be submitted
                  along with Form MGT-14.
                </span>
              </p>
              <h4>
                <span>Filing Form INC-24</span>
              </h4>
              <p>
                <span>
                  After successfully filing Form MGT-14, the company should file
                  Form INC-24 with the RoC. This form is used to seek approval
                  from the Central Government for the name change.
                </span>
              </p>
              <p>
                <span>
                  In Form INC-24, the company must provide reasons for the name
                  change and specify the number of members who attended the EGM,
                  the number of members voting for and against the resolution,
                  and the percentage of shareholding involved.
                </span>
              </p>
              <p>
                <span>
                  By completing these formalities and submitting the necessary
                  documents, the company seeks approval from regulatory
                  authorities for the name change, ensuring compliance with
                  legal requirements.
                </span>
              </p>
              <h4>
                <span>
                  Step 5: Issuance of Certificate of Incorporation for Name
                  Change&nbsp;
                </span>
              </h4>
              <p>
                <span>
                  Once the Registrar of Companies (RoC) has reviewed the
                  submitted documents and is satisfied with the name change
                  application, they will issue a new Certificate of
                  Incorporation. It's important to note that the name change
                  process is considered complete only after the RoC has issued
                  the new Certificate of Incorporation reflecting the updated
                  company name. This certificate serves as an official
                  confirmation of the successful name change and should be
                  retained as a crucial legal document for the company.
                </span>
              </p>
              <h3>Essential Compliances After a Company Name Change</h3>
              <p>
                <span>
                  After receiving the new certificate of incorporation from the
                  RoC, the company should promptly update its name in various
                  documents and records, including:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>MOA and AOA copies</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Common and official seals</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Promissory notes and bills of exchange</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Bank account name</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Tax authorities, EPF, and ESI department</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Website and social media accounts</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <span>PAN</span> and <span>TAN</span>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Letterheads, business cards, etc.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Statutory registers</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Employment and business contracts</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Business licenses or permits</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  These updates ensure legal compliance with the changed company
                  name.
                </span>
              </p>
              <h3>
                LegallensIndia: Your Trusted Partner for Company Name Changes
              </h3>
              <p>
                <span>
                  Ready to rebrand your business with a new name? Let
                  LegallensIndia guide you through every step of the company name
                  change process.&nbsp;
                </span>
                <span>We </span>
                <span>
                  provide comprehensive assistance to companies looking to
                  change their names in India. With a team of experienced
                  professionals and a deep understanding of the legal procedures
                  involved,{" "}
                </span>
                <span>we</span>
                <span>
                  &nbsp;can seamlessly guide you through the entire process.{" "}
                </span>
                <span>&nbsp;</span>
                <span>
                  Our experts ensure a smooth transition, handling all the
                  legalities and compliance requirements.
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>
                      Contact LegallensIndia today to reshape your company’s
                      future identity!
                    </em>
                  </strong>
                </span>
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
