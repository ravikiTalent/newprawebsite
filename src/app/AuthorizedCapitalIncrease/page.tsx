import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function AuthorizedCapitalIncrease() {
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
                Authorized Capital Increase
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                According to Section 2 (8) of the Companies Act 2013,
                “Authorized Capital” is the capital authorised by the company's
                memorandum to be the maximum amount of the share capital of the
                company.
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
                { id: 3, title: "Authorized Capital Increase", url: "" },
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
                        Authorized Capital Increase
                      </h5>
                      <p>
                        According to Section 2 (8) of the Companies Act 2013,
                        “Authorized Capital” is the capital authorised by the
                        company's memorandum to be the maximum amount of the
                        share capital of the company.
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
                Company Authorized Capital Increase
              </h2>
              <p>
                Each business needs more funds over time to run business. These
                funds can be required on a long- and short-term basis. A
                short-term need can be satisfied by taking loans and advances.
                But in the long run, the company will require more funds. For a
                Private Limited Company, this can be done by increasing the
                company's authorised capital. Since the private limited company
                is governed and regulated under the Company Act to make changes
                in the structure, it is necessary to follow the Act and the
                rules stated.
              </p>
              <p>
                LegallensIndia makes it easy to increase your company's authorised
                capital. Our experts guide you through every step, ensuring a
                hassle-free experience.
              </p>
              <h3>What is Authorized Capital?</h3>
              <p>
                According to Section 2 (8) of the Companies Act 2013,
                “Authorized Capital” is the capital authorised by the company's
                memorandum to be the maximum amount of the share capital of the
                company.
              </p>
              <p>
                The company can expand its business to the level of the
                authorised capital. If the company has to expand the business,
                infusing more funds than at first, the company has to increase
                the authorised capital.
              </p>
              <h4>Authorised and Paid-Up Capital of a Company</h4>
              <p>
                Authorised share capital represents the total potential value of
                shares a company can issue. In contrast, paid-up capital is the
                actual value of shares that have been fully issued, subscribed
                to, and paid for by shareholders. The company cannot exceed its
                authorised share capital with its paid-up capital. Therefore, if
                a company's paid-up capital reaches the limit of its authorised
                capital and it aims to welcome new shareholders, it has two
                options:
              </p>
              <p>
                Either increase its authorised share capital and then issue new
                shares or
              </p>
              <p>
                Facilitate the{" "}
                  transfer of shares{" "}
                from current shareholders to new ones.
              </p>
              <h3>Authorised Share Capital Increase</h3>
              <p>
                Authorised share capital increase refers to raising the maximum
                amount of share capital that a company is legally permitted to
                issue to its shareholders. This is typically achieved through an
                amendment to the company's Memorandum of Association (MOA)
              </p>
              <p>
                By increasing the authorised share capital, a company expands
                its capacity to issue additional shares, enabling it to raise
                funds from existing or new shareholders. This process is often
                undertaken to support business expansion, finance new projects,
                or meet evolving financial needs.
              </p>
              <h3>Amending the MOA for Increasing Authorized Capital</h3>
              <p>
                During the formation of a Private Limited Company, the initial
                authorised and paid-up capital levels are established in the
                company's Memorandum of Association (MOA). This sets the maximum
                amount of share capital that the company is allowed to issue to
                its shareholders. Should the company aim to exceed this
                predetermined cap by issuing additional shares, it necessitates
                an amendment to the MOA to raise the authorised capital
                threshold, thereby accommodating the issuance of new shares
                beyond the original limit.
              </p>
              <h3>Reasons for Increasing Authorized Share Capital</h3>
              <p>
                As mentioned above, a company might consider increasing its
                authorised capital for several reasons, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Addressing significant
                      financial needs
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Funding new business
                      initiatives
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Facilitating mergers or
                      acquisitions and infusing capital as part of a
                      restructuring plan
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Issuing additional
                      shares
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Converting debt into
                      equity
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Meeting regulatory
                      requirements, if applicable
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for Authorized Share Capital Increase</h3>
              <p>
                Specific documentation must be submitted within 30 days
                following shareholder approval to formalise an increase in
                authorised share capital. For private companies, this involves
                submitting the resolution through e-form SH-7, while the
                submission of e-form MGT-14 is not required. Ensure the
                following documents are prepared for filing:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The latest amended
                      version of the Memorandum of Association (MoA)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The most recent or
                      revised copy of the Articles of Association (AoA),
                      particularly in cases where the AoA has been altered
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A copy of the ordinary
                      resolution approved by the company's shareholders
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Procedure to Increase Authorized Share Capital</h3>
              <p>
                The process involves several essential steps to ensure
                compliance with regulatory requirements and secure shareholder
                approval for the proposed increase.
              </p>
              <h4>Review the Articles of Association (AoA)</h4>
              <p>
                The AoA outlines the company's governance, including capital
                management. Initially, verify if the AoA permits changes to the
                authorised capital.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Check for Provision:</strong> The process is
                      straightforward if the AoA includes a provision for
                      altering authorized capital. Otherwise, the AoA needs
                      amending.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Amend the AoA if Necessary:</strong> In the
                      absence of a provision, amend the AoA as per Section 14 of
                      the Companies Act, 2013, to include the capability for
                      authorized capital alteration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proceed with Capital Modification:</strong> Once
                      the AoA allows it, the company can officially change its
                      authorized capital.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Convening a Board Meeting for Authorized Capital Increase</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice for Board Meeting:</strong> Dispatch a
                      notice detailing the meeting's agenda to all directors at
                      least 7 days in advance to their registered addresses.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board Resolution:</strong> During the board
                      meeting, a resolution will be passed to convene an
                      extraordinary general meeting (EGM). This involves issuing
                      a notice in line with Section 101 of the Companies Act to
                      present and seek approval for the revised authorized
                      capital clause in the Memorandum of Association via an
                      Ordinary Resolution, as per the guidelines of Section 60
                      of the Act.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Shareholder Notification:</strong> Inform
                      shareholders about the EGM specifics, including the
                      agenda, date, time, and venue. The notice should also
                      outline the voting method for resolution approval.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Distribution of EGM Notice:</strong> Ensure the
                      EGM notice reaches the following parties:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Directors
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Shareholders
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Auditors
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>EGM Notice Period:</strong> The notice for the EGM
                      should be issued at least 21 days before the scheduled
                      date. However, a shorter notice period is permissible if
                      at least 95% of voting-eligible members consent, which can
                      be obtained either in writing or via electronic means.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                Conducting the Extraordinary General Meeting for Capital
                Increase
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>During the EGM:</strong> The agenda item for
                      increasing the authorized share capital is formally
                      presented to the attendees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Voting Process:</strong> The voting occurs as
                      outlined in the EGM notice, allowing shareholders to vote
                      on the proposed increase.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Resolution Approval:</strong> The resolution to
                      increase the authorized capital is officially passed upon
                      securing the necessary approval through voting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Documentation:</strong> An explanatory statement
                      detailing the resolution and its implications is prepared
                      and appended to the official records, marking the
                      authorization of the capital increase.
                    </li>
                  </ul>
                </div>
              </div>
              <h4>
                Regulatory Filings for Authorized Capital Increase with ROC
              </h4>
              <p>
                Post-resolution, within 30 days, the company must complete the
                following filings along with the applicable fees:
              </p>
              <p>
                <strong>Filing of Form MGT – 14:</strong>
              </p>
              <p>
                This form must be submitted to the Registrar of Companies (RoC)
                within 30 days following the adoption of the relevant
                resolution.
              </p>
              <p>
                <strong>Details Required:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Company information
                      including Corporate Identification Number (CIN).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The purpose of the
                      filing.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Dates of notice dispatch
                      and resolution passage.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Resolution specifics.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Digital signatures and
                      director identification numbers (DINs) are required.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Documents Required:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Notice of EGM with the
                      Explanatory Statement under Section 102.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Certified copy of the
                      EGM resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Updated Memorandum of
                      Association (MoA) reflecting the Capital Clause
                      alteration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Updated Articles of
                      Association (AoA) if it includes provisions for authorised
                      capital increase.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Filing Form SH-7 for Authorized Capital Increase</h4>
              <p>
                Form SH-7 must be submitted to the Registrar of Companies (RoC)
                within 30 days following the resolution to increase the
                authorised share capital. This form notifies the Registrar about
                the specifics of the authorised capital augmentation.
              </p>
              <p>
                <strong>Details Required:</strong>
              </p>
              <p>Company information, including CIN.</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Resolution type.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Meeting date.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Service Request Number
                      (SRN) of Form MGT – 14, if already filed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Original and new
                      authorised share capital amounts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Breakdown of the
                      additional share capital.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Stamp Duty Fees details.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Digital Signatures and
                      DINs as necessary.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A certified true copy of
                      the capital alteration resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Updated MoA with the
                      Capital Clause changes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Updated AoA if it
                      includes a new provision for capital increase.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Any other optional
                      documents, if required.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Payment of E-Stamp Duty</h3>
              <p>
                Complete the e-stamp duty payment for the augmented Authorized
                Share Capital amount via the Ministry of Corporate Affairs (MCA)
                Portal, as law requires.
              </p>
              <h3>Procedure Following Authorized Share Capital Increase</h3>
              <p>
                After the authorised share capital increase, certain steps need
                to be followed to ensure regulatory compliance and effective
                implementation of the decision.
              </p>
              <h4>Update MOA and AOA</h4>
              <p>
                Ensure that all copies of these documents reflect any changes
                made to the Memorandum of Association (MOA) and Articles of
                Association (AOA). This is to maintain consistency and legal
                compliance across all official company records.
              </p>
              <h4>Share Allotment</h4>
              <p>
                With the authorised share capital now increased, the company can
                increase its paid-up share capital. This is typically achieved
                by issuing new equity shares to existing or new shareholders,
                thereby infusing additional funds into the company.
              </p>
              <h3>
                Penalties for Non-Compliance with Authorized Capital Increase
                Procedures
              </h3>
              <p>
                While the Companies Act 2013, specifically in Sections 61 and
                65, outlines the provisions for increasing authorised capital,
                it doesn't directly specify penalties within these sections.
                However, Section 450 of the Act addresses penalties for general
                non-compliance.{" "}
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> When a company or its
                      officers fail to adhere to the prescribed rules, a penalty
                      of Rs. 10,000 is imposed.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> An additional daily
                      penalty of Rs. 1,000 is levied for ongoing violations
                      until the issue is resolved.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Specifically concerning
                      the late submission of Form SH-7, which is required within
                      30 days of the resolution to increase authorised capital,
                      the penalty accrues at Rs. 1,000 per day of delay.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> This penalty continues
                      until the default is corrected, subject to a maximum cap
                      of Rs. 25 lakh, whichever amount is lower.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Why Choose LegallensIndia for Authorized Capital Increase</h3>
              <p>
                LegallensIndia is your ideal partner for increasing your company's
                authorised capital, offering a comprehensive suite of services
                tailored to your needs. Here's why:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert MOA Amendment Guidance:</strong> We
                      specialize in navigating the complexities of amending your
                      Memorandum of Association (MOA), ensuring that your
                      documentation accurately reflects your new capital
                      structure.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>MGT-14 Filing Assistance:</strong> Our team
                      efficiently handles the filing of Form MGT-14, which is
                      required for registering changes in your company's capital
                      with the Registrar of Companies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Seamless Form SH-7 Submission:</strong> We take
                      care of filing Form SH-7, which is essential for
                      officially recording the increase in your authorized
                      capital.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>End-to-End Support:</strong> From the initial
                      assessment to the final submission, LegallensIndia provides
                      unwavering support, ensuring a smooth and compliant
                      capital increase process.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Choosing LegallensIndia means opting for a stress-free experience
                backed by expertise and a commitment to your business's growth.
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
