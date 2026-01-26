import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function AOAAmendment() {
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
              <h1 className="display-1 text-white mb-3">AOA Amendment</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                The Articles of Association (AOA) of a company outline the rules
                and regulations that dictate its internal management.
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
                { id: 3, title: "AOA Amendment", url: "" },
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
                      <h5 className="card-title">AOA Amendment</h5>
                      <p>
                        The Articles of Association (AOA) of a company outline
                        the rules and regulations that dictate its internal
                        management.
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
                Articles of Association (AOA) Amendment
              </h2>
              <p>
                The Articles of Association (AOA) of a company outline the rules
                and regulations that dictate its internal management. These
                articles specify the procedures for managing various aspects and
                operations within the company. A company article has to be
                registered at the time of company incorporation. A company can
                amend its Articles of Association (AOA) post-incorporation as
                and when such changes are deemed necessary for its management.
                AOA Amendment is important for companies to stay up-to-date and
                efficient. Once a company has altered its Articles of
                Association (AOA), it must file Form MGT-14 with the Ministry of
                Corporate Affairs.
              </p>
              <p>
                At LegallensIndia, we offer expert assistance in navigating
                through the process of the AOA Amendment, ensuring that all the
                necessary details are accurately and efficiently handled.
                Contact our experts today for assistance and ensure a smooth,
                compliant process.{" "}
              </p>
              <h3>Article of Association</h3>
              <p>
                The Articles of Association (AoA) is a crucial document for a
                company's internal administration and governance. It contains
                the rules, regulations, and bylaws that govern the company's
                internal management and operations. The AoA is an integral part
                of a company's constitution and defines various aspects of its
                functioning, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Directors' Roles: </strong>Rules about what the
                      directors do and how they are appointed or removed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Shareholder Rights: </strong>Explains shareholder
                      rights like voting, getting dividends, and selling shares.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board Meetings: </strong>Guidelines for how
                      meetings of the directors are held.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>General Meetings: </strong>Rules for big company
                      meetings, including how decisions are voted on.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Profit Sharing: </strong>How the company's profits
                      are distributed to shareholders.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Borrowing Money: </strong>Rules about how the
                      company can take loans.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Changing the AOA: </strong>How to update these
                      rules.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Shutting Down the Company: </strong>Steps for
                      closing the company and distributing its assets.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company Seal: </strong>If there's a company seal,
                      rules for using it.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                It's important to note that the AoA can be altered through a
                formal legal process as per the provisions of the Companies Act
                or other relevant laws.
              </p>
              <h3>AOA Amendment</h3>
              <p>
                AOA Amendment refers to the process of changing the Articles of
                Association of a company. Amending the AOA allows a company to
                update or change these rules to adapt to new circumstances,
                comply with legal requirements, or realign with the company's
                evolving objectives and strategies.
              </p>
              <h3>When a Company Can Amendment AOA?</h3>
              <p>
                A company can alter its Articles of Association (AoA) under
                various circumstances, including
              </p>
              <h4>Conversion of a Private Company into a Public Company</h4>
              <p>
                When a private company decides to become a public company, it
                often needs to make significant changes to its AoA to comply
                with the additional regulatory requirements applicable to public
                companies. This includes changes related to shareholding,
                disclosures, and governance.
              </p>
              <h4>Conversion of Public Company into Private Company</h4>
              <p>
                Conversely, if a public company intends to become a private
                company, it must amend its AoA to align with the reduced
                regulatory requirements for private companies. This may involve
                changes in shareholding and governance structures.
              </p>
              <h4>Alteration in any of the Existing Articles</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Change in Business Objectives: </strong>When the
                      company's business objectives or activities evolve or
                      expand, it may need to amend the AoA to reflect these
                      changes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Change in Share Capital: </strong>If the company
                      intends to increase or decrease its share capital, the AoA
                      may need to be altered to accommodate these changes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Change in Name: </strong>When a company decides to
                      change its name, it must amend the AoA to reflect the new
                      name.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Alteration of Share Classes: </strong>If the
                      company wants to create new classes of shares or modify
                      existing ones, the AoA may need to be revised.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Alteration of Share Rights: </strong>Changes in
                      the rights attached to shares, such as voting rights or
                      dividend preferences, may require alterations to the AoA.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Change in Registered Office: </strong>If the
                      company moves its registered office to a different
                      location, the AoA should be updated to reflect the new
                      address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Change in Board Structure: </strong>Alterations
                      may be necessary to modify the composition or powers of
                      the Board of Directors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Conversion of Company Type: </strong>Converting
                      from a private company to a public company (or vice versa)
                      often requires substantial changes to the AoA.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance with Legal Requirements: </strong>To
                      ensure compliance with company law or regulations changes,
                      the AoA may need to be amended.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Special Resolutions: </strong>Any changes that
                      require approval by a special resolution of shareholders
                      will necessitate amendments to the AoA.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Key Requirements for Changing a Company's AoA</h3>
              <p>
                For the Articles of Association (AOA) Amendment, these are the
                main rules to follow:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Guidelines: </strong>The changes need to be
                      in line with the rules set by the Companies Act and the
                      company's own Memorandum.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Special Agreement for Entrenchment: </strong>If
                      the company wants to add special, hard-to-change rules
                      (entrenchment provisions), all members of a private
                      company must agree, or a majority vote is needed in a
                      public company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Approval for Changing Company Type: </strong>If
                      the company is switching from public to private or vice
                      versa, it must get a majority agreement (Special
                      Resolution) for this change.Procedure for AoA Amendment.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Procedure for AOA Amendment</h3>
              <p>
                A company may modify, delete or add any article in the following
                manner:
              </p>
              <h4>Step 1: Board of Directors Meeting</h4>
              <p>
                Convene a meeting of the Board of Directors following Section
                173 and Secretarial Standard (SS-1).
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice Issuance: </strong>Send a notice of the
                      Board Meeting to all Directors of the Company. The notice
                      should reach them at least 7 days before the meeting date.
                      In urgent cases, a shorter notice can be issued.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Attach Supporting Documents: </strong>Include the
                      meeting's agenda, notes to the agenda, and a draft
                      resolution with the notice.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board Resolution: </strong>During the Board
                      Meeting, discuss and pass the necessary Board Resolution
                      for altering articles. Authorise either the Company
                      Secretary or any Director to sign and file the relevant
                      forms with the Registrar of Companies and perform any
                      actions necessary to implement the Board's decision.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>General Meeting Arrangements: </strong>Decide on
                      the date, time, and venue of the General Meeting during
                      the Board Meeting. Approve the draft notice convening the
                      General Meeting and include an explanatory statement as
                      required by Section 102 of the Companies Act, 2013.
                      Authorize either a Director or the Company Secretary to
                      sign and issue the notice of the General Meeting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Draft Minutes Circulation: </strong>Within 15 days
                      from the conclusion of the Board Meeting, prepare and
                      circulate the draft minutes to all Directors. Distribute
                      the draft minutes via hand delivery, speed post,
                      registered post, courier, or email.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Request comments and
                      feedback from all Directors.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Step 2: Convene General Meeting</h4>
              <p>
                Arrange for a General Meeting as per Section 96, 100, and
                Secretarial Standard (SS-2).
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice Issuance: </strong>Issue a written notice
                      for the General Meeting at least 21 days before the
                      scheduled meeting date. Notice delivery can be done by
                      various means such as hand delivery, ordinary post, speed
                      post, registered post, courier, facsimile, email, or any
                      other electronic method.In certain cases, a Shorter Notice
                      can be used, but this requires consent from a majority in
                      number and at least ninety-five percent of the paid-up
                      share capital of the company with voting rights, as
                      outlined in Section 101.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Recipients of Notice: </strong>Ensure that the
                      notice is sent to all relevant parties, including
                      Directors, Members, Auditors of the Company, Secretarial
                      Auditor, Debenture Trustees, and others entitled to
                      receive the notice of the General Meeting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice Content: </strong>Specify the precise day,
                      date, time, and full address of the meeting venue in the
                      notice. Include a statement outlining the business to be
                      transacted during the General Meeting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>General Meeting Conduct: </strong>Conduct the
                      General Meeting on the designated day. Pass a Special
                      Resolution for the alteration of the Articles of
                      Association.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Disclosure to Stock Exchange: </strong>Share the
                      proceedings of the General Meeting with the Stock Exchange
                      within 24 hours from the meeting's conclusion. Post the
                      same information on the company's website within 2 working
                      days.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minutes Preparation: </strong>Prepare detailed
                      minutes of the General Meeting. Obtain signatures from
                      relevant attendees. Organise and compile the minutes
                      following established procedures.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Step 3: File Form MGT-14 with ROC</h4>
              <p>
                Submit Form MGT-14 to the Registrar of Companies (ROC) within 30
                days after the Special Resolution is passed during the General
                Meeting.
              </p>
              <p>Required Attachments:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Ensure the following
                      documents are attached as part of the Form MGT-14
                      submission:
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Certified True Copies of
                      the Special Resolutions, including the explanatory
                      statement.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Copy of the notice of
                      the meeting sent to members, along with all annexures.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Altered Articles of
                      Association should include any newly inserted provisions,
                      especially those related to entrenchment (if applicable).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Copy of the attendance
                      sheet from the General Meeting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> If a Shorter Notice was
                      used, include the consent related to it, if applicable.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Every change made to the
                      Articles of Association must be recorded in every copy of
                      the articles.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                This ensures that any amendments or modifications to the
                Articles are reflected consistently in all document copies for
                the sake of accuracy and compliance with Section 15(1).
              </p>
              <p>
                <strong>Note: </strong>A company is not required to pay stamp
                duty when making alterations to its articles. Stamp duty has to
                be paid only at the time of company incorporation.
              </p>
              <h4>Step 4: Effect of AOA Amendment</h4>
              <p>
                The revised Articles of Association become effective when the
                board resolution is passed. These modified articles carry the
                same legal weight as the original ones. However, these
                alterations are only valid if they adhere to the processes
                outlined in the Companies Act and the company's Memorandum.
                Additionally, it's essential to reflect these changes across all
                copies of the Articles of Association.
              </p>
              <h3>Streamlining AOA Amendments with LegallensIndia</h3>
              <p>
                LegallensIndia offers comprehensive assistance in the amendment of
                the Articles of Association (AOA) for companies. Our expert team
                guides businesses through the entire process, ensuring that all
                modifications comply with the relevant provisions of the
                Companies Act. We provide end-to-end support, starting from
                drafting the necessary resolutions and preparing the revised
                Articles of Association to file the required forms with the
                Registrar of Companies.
              </p>
              <p>
                Contact us today to ensure your AOA Amendments are handled
                efficiently and in compliance with legal requirements.
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
