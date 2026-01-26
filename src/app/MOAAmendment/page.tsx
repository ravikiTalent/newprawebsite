import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function MOAAmendment() {
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
              <h1 className="display-1 text-white mb-3">MOA Amendment</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Companies may need to periodically amend their Memorandum of
                Association (MOA) to reflect changes in their operational,
                structural, or strategic directives.
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
                { id: 3, title: "MOA Amendment", url: "" },
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
                      <h5 className="card-title">MOA Amendment</h5>
                      <p>
                        Companies may need to periodically amend their
                        Memorandum of Association (MOA) to reflect changes in
                        their operational, structural, or strategic directives.
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

              <h2 className="display-4 mb-3">MOA Amendment</h2>
              <p>
                Companies may need to periodically amend their Memorandum of
                Association (MOA) to reflect changes in their operational,
                structural, or strategic directives. The MOA is the foundational
                legal document defining a company's scope, objectives, and
                operational boundaries. At LegallensIndia, we understand the
                significance of MOA amendments and offer expert guidance. From
                understanding the intricacies of MOA clauses to navigating the
                legal framework, our team ensures seamless compliance with
                regulatory requirements.
              </p>
              <p>
                Contact our experts today to get started with your MOA
                amendments!
              </p>
              <h3>Memorandum of Association (MOA)</h3>
              <p>
                The "MOA" refers to the Memorandum of Association, which serves
                as the foundation document for a company. It is crafted during
                the{" "}
                  company registration{" "}
                process and holds legal significance. The MOA outlines the
                company's objectives, operational boundaries, and internal
                regulations, establishing a framework for its operations and
                defining its relationship with shareholders. It sets the
                company's scope and legal parameters in clear terms.
              </p>
              <p>
                The Memorandum of Association covers many aspects of the
                company, encompassing its operations, delegation of
                responsibilities, policies, and guiding principles.
              </p>
              <h3>What is the MOA Amendment?</h3>
              <p>
                An MOA (Memorandum of Association) Amendment refers to the
                process through which a company amends the provisions outlined
                in its MOA. An amendment to the Memorandum of Association is
                permissible under Section 13 of The Companies Act, 2013, in
                conjunction with the Company Rules Act, which provides the legal
                framework for modifying the MOA.
              </p>
              <p>
                Amendments to the MOA are often necessary as a company evolves
                to reflect changes in its objectives, operations, or governance
                structure.
              </p>
              <h3>When can an MOA be amended?</h3>
              <p>
                As mentioned above, the Memorandum of Association (MOA) is a
                critical document for any company, outlining the fundamental
                conditions under which it operates. The MOA contains several key
                clauses:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Name Clause: </strong>Identifies the company's
                      official name.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Situation Clause: </strong>Specifies the location
                      of the company's registered office.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Object Clause: </strong>Describes the company's
                      purposes and the scope of activities it can undertake.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Liability Clause: </strong>States the liability of
                      the company's members, whether limited by shares or
                      guarantees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Capital Clause: </strong>Details the company's
                      authorised capital, including the number and types of
                      shares.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Subscription Clause: </strong>Includes the
                      signatures of the initial subscribers to the MOA,
                      indicating their agreement to form the company and take up
                      shares.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Key Amendments to the Memorandum of Association (MOA)</h3>
              <p>
                An amendment to the MOA can be made to alter any or all of the
                above-mentioned clauses EXCEPT the Subscription Clause. These
                amendments can include:
              </p>
              <h4>Altering Name in MOA</h4>
              <p>
                The MOA will be altered by passing a special resolution to make
                changes in the company's name. In the case of a name change for
                a private or public limited company, no approval from the
                central government is needed. However, in other cases, the
                central government's consent is necessary.
              </p>
              <h4>Registered Office Change (State to State)</h4>
              <p>
                A company must change the Memorandum of Association to transfer
                the registered office to another state. Generally, the reasons
                for changing the registration to another state include:
              </p>
              <p>
                For conducting the business more professionally and economically
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> To achieve the
                      significant purpose of the company by sophisticated means
                    </li>
                    <li>
                      <i className="uil uil-check"></i> To develop the
                      operations in the current location
                    </li>
                    <li>
                      <i className="uil uil-check"></i> To manage the existing
                      objectives
                    </li>
                    <li>
                      <i className="uil uil-check"></i> To sell the business
                      enterprise wholly or partially.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> To merge the business
                      with another person or another business.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                In case the registered office is shifted from one state to
                another, a special resolution has to be approved, and approval
                from the company's board of directors has to be acquired by the
                company. This change in memorandum should be filed with the
                Registrar of the state from which the company is moving and also
                to the Registrar of the state where the company wants to shift.
                After approval from the Registrar of Companies, the changes must
                be made in the MOA of the Company to reflect the new state where
                the registered office is located.
              </p>
              <h4>Alteration of Objects Clause</h4>
              <p>
                The changes to the object clause in the case of a Private
                Limited Company can be made without any hassles. But if the same
                is to be done for any company that has raised funds from the
                public, then a special resolution is required to be passed.
                Also, this must be published in an English and another
                local-language newspaper where the company's registered office
                is located. The details should also be available on the
                company's website, along with the requisite justifications and
                modifications.
              </p>
              <p>
                Also, all the dissenting shareholders should be allowed to exit
                by the promoters and the shareholders who control the company.
                This opportunity should be given with the regulations specified
                by the Securities Exchange Board of India (SEBI).
              </p>
              <h4>Alteration of the Liability Cause</h4>
              <p>
                A change in the clause needs to be made to limit the liability
                of the Directors. As the liability of the shareholders cannot be
                unlimited and, a resolution is to be made to make this change in
                the liability by passing a resolution.
              </p>
              <p>
                A copy of the resolution must be filed with the registrar within
                30 days of the change.
              </p>
              <h4>Alteration of Capital Clause</h4>
              <p>
                This change can also be done at a normal general meeting. This
                change may be required as a subdivision of the shares or the
                consolidation of shares. Other reasons to make alterations to
                the capital clause can be the conversion of stock and annulment
                of the unsubscribed capital. These alterations must be filed
                with the registrar within 30 days.
              </p>
              <h4>Alteration of Authorized Capital</h4>
              <p>
                To issue shares, a company must ensure its authorised capital
                covers the planned amount. If not, it may need to raise its
                authorised capital and adjust its MOA accordingly.
              </p>
              <h3>Documents Required for MOA Amendment</h3>
              <p>The necessary documents for MOA amendment include:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Revised MOA: </strong>A copy of the Memorandum of
                      Association reflecting the proposed changes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Certified Copy of Special Resolution: </strong>A
                      certified copy of the resolution passed at the
                      Extraordinary General Meeting (EGM) approving the MOA
                      amendments.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Explanatory Statement: </strong>A document
                      providing explanations and justifications for the proposed
                      changes, distributed to members along with the EGM notice.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>EGM Notice: </strong>A formal notice sent to all
                      company members, announcing the EGM and detailing the
                      agenda, including the proposed MOA amendments.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Form MGT-14: </strong>A form submitted to the
                      Registrar of Companies and the above documents officially
                      registers the special resolution and amendments.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Common Procedure for MOA Amendment</h3>
              <p>
                Amending the Memorandum of Association (MOA) involves a
                structured legal process as outlined by The Companies Act, which
                applies to all companies. Here's a detailed breakdown of the
                necessary steps:
              </p>
              <h4>Step 1: Preparing for the Amendment</h4>
              <p>
                <strong>Board Resolution: </strong>Initiate the process by
                drafting a board resolution that outlines the intent to amend
                the MOA. This resolution should clearly state the sections of
                the MOA to be altered and justify each proposed change. The
                board of directors must approve this resolution, signifying the
                company's internal agreement to proceed with the amendments.
              </p>
              <h4>Step 2: Drafting the Special Resolution</h4>
              <p>
                <strong>Resolution Content: </strong>The special resolution
                should be meticulously drafted to include all proposed
                amendments to the MOA. It must be comprehensive, detailing the
                exact changes in clauses such as the Object Clause, Name Clause,
                Capital Clause, etc., as required.
              </p>
              <p>
                <strong>Legal Compliance: </strong>Ensure the resolution
                complies with the relevant sections of the Companies Act that
                govern MOA amendments. Legal advice may be sought to guarantee
                adherence to all statutory requirements.
              </p>
              <h4>Step 3: Notice of General Meeting</h4>
              <p>
                <strong>Meeting Notice: </strong>A formal notice of the general
                meeting must be issued to all company shareholders, directors,
                and auditors. This notice should include the meeting's agenda,
                date, time, and venue, with a clear mention of the special
                resolution to alter the MOA.
              </p>
              <p>
                <strong>Advance Notice: </strong>The Companies Act mandates a
                minimum notice period (typically 21 days unless otherwise agreed
                by all members for a shorter period), which must be strictly
                followed to ensure the meeting's legality.
              </p>
              <h4>
                Step 4: Conducting the Extraordinary General Meeting (EGM)
              </h4>
              <p>
                <strong>Meeting Proceedings: </strong>Present the proposed MOA
                amendments to the members for discussion during the general
                meeting. It's crucial to address any concerns or questions
                raised by the members regarding the amendments.
              </p>
              <p>
                <strong>Voting on the Resolution: </strong>The special
                resolution for amending the MOA requires approval by a
                three-fourths majority of the members present and voting. The
                voting process should be conducted transparently, adhering to
                the company's articles of association and the Companies Act.
              </p>
              <h4>Step 5: Regulatory Compliance and Filings</h4>
              <p>
                <strong>Form MGT-14: </strong>Post-approval, file Form MGT-14
                with the Registrar of Companies (RoC) within the prescribed
                timeframe (usually 30 days from the resolution's passing). This
                form serves to register the special resolution with the RoC.
              </p>
              <p>
                <strong>Supporting Documents: </strong>Along with Form MGT-14,
                submit a certified copy of the special resolution, a copy of the
                altered MOA, and the explanatory statement provided to members
                along with the meeting notice.
              </p>
              <p>
                <strong>Filing Fee: </strong>Ensure the correct filing fee is
                paid, based on the company's authorised capital and the RoC's
                fee schedule.
              </p>
              <h4>Step 6: Registrar's Approval and Finalization</h4>
              <p>
                <strong>RoC Review: </strong>The Registrar of Companies will
                review the submitted documents for compliance with the Companies
                Act and the company's articles. The RoC may seek additional
                information or clarifications.
              </p>
              <p>
                <strong>Approval and Effectiveness: </strong>Once satisfied, the
                RoC will register the amendment, and the changes to the MOA will
                take effect from the date of registration. The RoC will issue a
                confirmation, usually in the form of an updated certificate of
                incorporation reflecting the amended MOA.
              </p>
              <h4>Step 7: Updating Company Records and Notification</h4>
              <p>
                <strong>Record Updates: </strong>After the RoC's approval,
                update all company records, including statutory registers and
                internal documents, to reflect the MOA amendments.
              </p>
              <p>
                <strong>Stakeholder Notification: </strong>Inform all relevant
                stakeholders, including shareholders, creditors, banks, and
                other financial institutions, of the MOA changes to ensure
                transparency and maintain trust.
              </p>
              <h3>Key Considerations for MOA Amendments and Adoption</h3>
              <p>
                When contemplating amendments to the Memorandum of Association
                (MOA) or adopting a new one, certain critical aspects must be
                kept in mind:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Capital Clause Alteration: </strong>The ability to
                      modify the capital clause is contingent upon authorisation
                      by the company's Articles of Association (AOA). Any
                      changes to this clause must align with the provisions
                      outlined in the AOA.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Liability Clause Modification: </strong>Changes to
                      the liability clause necessitate filing a resolution with
                      the registrar within 30 days post-approval. While it's
                      permissible to amend this clause to limit the directors'
                      liability, shareholders' liability cannot be similarly
                      altered.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Situation Clause Amendments: </strong>When the
                      situation clause about the company's registered office is
                      amended, the company must submit proof or verify the new
                      address within 30 days, typically via Form INC-22.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Restrictions for Companies Limited by Guarantee:{" "}
                      </strong>
                      For companies limited by guarantee or those without share
                      capital, amendments to the MOA cannot extend
                      profit-sharing rights to non-members.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Adoption of a New MOA</h3>
              <p>
                Companies incorporated before the enactment of the Companies Act
                2013 might direct to adopt a new MOA (and potentially new
                Articles of Association) to comply with the updated format and
                provisions of the new act. This is particularly relevant for
                entities established under previous legislations, necessitating
                a refresh to align with contemporary legal frameworks.
              </p>
              <h3>Streamline Your MOA Amendment Process with LegallensIndia</h3>
              <p>
                Choosing LegallensIndia for your MOA amendment needs ensures a
                seamless and hassle-free process. With our expertise and
                experience in company registration and compliance, we guide you
                through every step of the MOA amendment process. Our team of
                professionals ensures that your MOA amendments are handled
                efficiently, with meticulous attention to detail and adherence
                to legal requirements. We take care of everything from drafting
                the necessary resolutions to filing the required documents with
                the Registrar of Companies.
              </p>
              <p>
                <strong>
                  <em>Contact our experts today to get started!</em>
                </strong>
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
