import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function WindingUpLLP() {
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
                Winding up of an LLP
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Winding up a Limited Liability Partnership (LLP) involves
                legally dissolving the entity by settling its debts, liquidating
                its assets, and distributing the remaining assets to the
                partners.
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
                { id: 3, title: "Winding up of an LLP", url: "" },
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
                      <h5 className="card-title">Winding up of an LLP</h5>
                      <p>
                        Winding up a Limited Liability Partnership (LLP)
                        involves legally dissolving the entity by settling its
                        debts, liquidating its assets, and distributing the
                        remaining assets to the partners.
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

              <h2 className="display-4 mb-3">Winding up of an LLP</h2>
              <p>
                Winding up a Limited Liability Partnership (LLP) involves
                legally dissolving the entity by settling its debts, liquidating
                its assets, and distributing the remaining assets to the
                partners. This process can be initiated voluntarily by the
                partners or compulsorily by a tribunal for various reasons such
                as insolvency, inactivity, or breach of laws. Navigating the
                complexities of winding up requires a thorough understanding of
                legal procedures, compliance requirements, and financial
                management. LLP members need to approach this process
                methodically to ensure a smooth dissolution of LLP firm,
                safeguarding the interests of all parties involved.
              </p>
              <p>
                LegallensIndia can provide expert guidance and support throughout
                your winding up of LLP, ensuring compliance with all legal
                requirements and minimising potential complications. Contact us
                today to get started and ensure a seamless and compliant
                winding-up procedure for your LLP.
              </p>
              <h3>What is the Winding up of LLP?</h3>
              <p>
                Winding up of a Limited Liability Partnership (LLP) refers to
                the formal process of closing down the LLP's operations,
                disposing of its assets, and settling its liabilities. This
                process is undertaken when an LLP ceases its business activities
                and dissolves as a legal entity.
              </p>
              <h3>Law Governing - LLP Winding up</h3>
              <p>
                The rules for winding up of LLP and dissolution of Limited
                Liability Partnerships (LLPs) in India are primarily governed by
                the following provisions and notifications:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 65 of the LLP Act, 2008:</strong> This
                      section empowers the Central Government to formulate rules
                      regarding LLPs' winding up and LLP dissolution Process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 67 of the LLP Act, 2008:</strong> This
                      section grants the Central Government the authority to
                      apply, with or without modifications, any provisions of
                      the Companies Act, 1956, to LLPs. This includes provisions
                      related to winding up, enabling a more flexible and
                      adaptable approach to regulate the LLP dissolution
                      processes by borrowing relevant provisions from the
                      Companies Act.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Notification vide GSR 6(E), dated 6th January 2010:
                      </strong>{" "}
                      Following the authority granted under Section 67, the
                      Central Government issued this notification to
                      specifically direct that certain sections of the Companies
                      Act, 1956 apply to the winding up of LLPs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Limited Liability Partnership (Winding up and
                        Dissolution) Rules, 2012:
                      </strong>{" "}
                      Issued under notification No. [F.No. 1/7/2012-CL-V] dated
                      10th July 2012, these rules specifically address the
                      procedures, forms, and fees associated with LLPs' winding
                      up and dissolution.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Comparison Between LLP Winding Up and Dissolution of LLP</h3>
              <p>
                Winding up and dissolution of LLP firm are two distinct stages
                in ending the operations of a Limited Liability Partnership
                (LLP). Here's a simplified comparison:
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Basis</strong>
                    </th>
                    <th className="border">
                      <strong>Winding Up</strong>
                    </th>
                    <th className="border">
                      <strong>Dissolution</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Meaning</td>
                    <td className="border">
                      Winding up is when the LLP prepares to close by selling
                      assets and paying off creditors.
                    </td>
                    <td className="border">
                      Dissolution is the final step, where the LLP is officially
                      closed and ceases to exist after all legal procedures are
                      completed.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Legal Entity</td>
                    <td className="border">
                      During winding up, the LLP remains a legal entity and can
                      engage in legal proceedings.
                    </td>
                    <td className="border">
                      After dissolution, the LLP no longer exists as a legal
                      entity, its name is removed from ROC records, and it
                      cannot be sued or sued.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                In essence, LLP winding up process is settling the LLP's
                affairs, and dissolution is the official end of the LLP's
                existence.
              </p>
              <h3>Modes of LLP Winding Up</h3>
              <p>
                An LLP can be wound up through various methods, each with its
                own set of procedures and legal implications.
              </p>
              <h4>Voluntary Winding Up</h4>
              <p>
                In this method, the partners of the LLP decide to wind up the
                affairs of the partnership voluntarily. This decision could be
                based on mutual agreement among the partners or for reasons
                specified in the LLP agreement.
              </p>
              <h4>Insolvency and Bankruptcy Code (IBC), 2016</h4>
              <p>
                While the IBC primarily focuses on restructuring and reviving
                entities like LLPs under specific conditions, the National
                Company Law Tribunal (NCLT) has the authority to order the
                liquidation of an LLP. This adds a unique dimension to the
                winding-up process, especially in insolvency cases.
              </p>
              <h4>Compulsory Winding Up by the Tribunal</h4>
              <p>
                This mode is initiated by an external order rather than the
                LLP's partners. The tribunal may wind up the LLP for reasons
                such as non-compliance with statutory requirements, inability to
                pay debts, or other grounds deemed sufficient by the law.
              </p>
              <h3>Voluntary Liquidation</h3>
              <p>
                As mentioned above, Voluntary liquidation of a Limited Liability
                Partnership (LLP) is a self-initiated process where the partners
                of the LLP decide to dissolve and wind up the LLP's affairs
                without external compulsion, such as a court order. This
                decision can be based on various reasons, including but not
                limited to financial struggles, mutual agreement among partners
                to cease operations, or achieving the objectives for which the
                LLP was formed.
              </p>
              <h4>Pre-requisites for Voluntary Liquidation</h4>
              <p>
                To initiate a voluntary liquidation under the Insolvency and
                Bankruptcy Code (IBC), 2016, a corporate entity, such as a
                Limited Liability Partnership (LLP), must meet the following
                pre-requisites:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Solvency:</strong> The LLP must be solvent,
                      meaning it should be able to pay its debts in full.
                      Solvency indicates that the assets of the LLP exceed its
                      liabilities, ensuring that all creditors can be paid.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Declaration by Designated Partners:</strong> A
                      declaration must be made by the majority of the designated
                      partners. This declaration should affirm that the LLP can
                      pay all its debts in full from the proceeds obtained from
                      selling its assets during the liquidation process. This
                      declaration is a formal statement ensuring the liquidation
                      process is conducted with financial responsibility.{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>No Intent to Defraud:</strong> The voluntary
                      liquidation process must not be undertaken with the
                      intention to defraud any person. This condition ensures
                      the liquidation process is carried out in good faith and
                      for legitimate reasons rather than to escape financial
                      responsibilities or legal obligations.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Procedure for Voluntary Liquidation Of LLP</h3>
              <p>
                The process of voluntary liquidation for a Limited Liability
                Partnership (LLP) involves several critical steps as outlined
                below:
              </p>
              <h4>Commencement of Liquidation</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Declaration of Solvency (DOS):</strong> Obtain a
                      declaration from most designated partners, verified by an
                      affidavit, affirming the LLP's ability to pay off debts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Accompanying Documents:</strong> The DOS should be
                      accompanied by audited financial statements for the last
                      two years or since incorporation and a valuation report of
                      assets by a registered valuer.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Resolution:</strong> Pass a resolution for
                      voluntary liquidation and appoint an insolvency
                      professional as the liquidator within four weeks of
                      obtaining the DOS.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Creditors' Approval:</strong> If the LLP has
                      debts, creditors representing two-thirds of the debt value
                      must approve the resolution within seven days.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notification:</strong> Notify the Registrar and
                      the Insolvency and Bankruptcy Board of India (IBBI) about
                      the resolution within seven days.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Liquidation Proceedings:</strong> Liquidation is
                      deemed to commence from the resolution date, subject to
                      creditors' approval.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Effect of Liquidation</h4>
              <p>
                The LLP must cease business operations from the liquidation
                commencement date except for actions beneficial to the
                winding-up process.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The LLP continues to
                      exist until it is dissolved.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Appointment and
                      Remuneration of Liquidator
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Appoint an insolvency
                      professional as a liquidator who meets specific
                      eligibility conditions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The resolution for
                      appointment should include terms and conditions and
                      remuneration, which is part of the liquidation cost.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Reporting</h4>
              <p>
                The liquidator must prepare and submit various reports,
                including a Preliminary Report, Annual Status Report, minutes of
                consultations with stakeholders, and a Final Report as
                specified.
              </p>
              <h4>Public Announcement by the Liquidator</h4>
              <p>
                Make a public announcement within five days of the appointment,
                inviting stakeholders to submit their claims within 30 days.
              </p>
              <p>
                The announcement should be published in newspapers with wide
                circulation and on relevant websites.
              </p>
              <h4>Verification of Claims</h4>
              <p>
                The liquidator verifies submitted claims within 30 days from the
                last date of receipt and may admit or reject them wholly or
                partially.
              </p>
              <h4>Realisation of Assets</h4>
              <p>
                The liquidator is responsible for valuing and selling the LLP's
                assets in an approved manner and mode, recovering dues, and
                realising unpaid capital contributions from partners.
              </p>
              <h4>Deposit and Distribution of Proceeds</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Open a bank account in
                      the name of the LLP 'in voluntary liquidation' to deposit
                      all received monies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Distribute the proceeds
                      from the realisation to stakeholders within six months
                      after deducting the liquidation cost.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These steps are structured to ensure a systematic and
                transparent process for dissolving the LLP while safeguarding
                the interests of creditors and stakeholders.
              </p>
              <h3>Winding Up Of LLP By Tribunal</h3>
              <p>
                Winding up of a Limited Liability Partnership (LLP) by a
                Tribunal can be initiated for several reasons:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Voluntary Winding Up:
                      The LLP decides and consents to be wound up.{" "}
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Insufficient Number of
                      Partners: The LLP has fewer than two partners for six
                      months. An LLP requires at least two partners to operate
                      legally.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Inability to Pay Debts:
                      The LLP is financially insolvent and cannot meet its debt
                      obligations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Activities Against
                      National Interest: The LLP engages in activities
                      detrimental to the sovereignty, integrity of India, the
                      state's security, or public order.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Non-compliance with
                      Statutory Filings: The LLP fails to file the Statement of
                      Accounts and Solvency or Annual Returns with the Registrar
                      for five consecutive financial years, indicating a lack of
                      operational transparency and regulatory compliance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Just and Equitable
                      Grounds: The Tribunal determines that it is just and
                      equitable for the LLP to be wound up. This broad and
                      subjective criterion can encompass various situations the
                      Tribunal deem as warranting winding up for fairness or
                      other reasons.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                When a Tribunal initiates the winding-up process for an LLP
                based on these grounds, it marks the beginning of a formal
                procedure to dissolve the LLP.
              </p>
              <h4>Procedure for winding up of an LLP by a Tribunal</h4>
              <p>
                The procedure for winding up an LLP by a Tribunal involves
                several steps to ensure an orderly and fair dissolution of the
                LLP. Here's an overview of the process:
              </p>
              <h4>Step 1: Petition for Winding Up</h4>
              <p>
                The process begins with filing a petition for winding up to the
                Tribunal. This petition can be filed by the LLP itself,
                creditors, partners, or, in certain cases, by the Registrar or
                by a person authorised by the Central Government.
              </p>
              <h4>Step 2: Tribunal's Decision to Wind Up</h4>
              <p>
                Upon receiving the petition, the Tribunal will consider the
                reasons for winding up. If the Tribunal finds sufficient grounds
                per the LLP Act's provisions, it will pass a winding-up order.
              </p>
              <h4>Step 3: Appointment of Liquidator</h4>
              <p>
                Once the winding-up order is passed, the Tribunal will appoint a
                Liquidator. The role of the Liquidator is crucial, as they are
                responsible for managing the entire winding-up process,
                including the liquidation of assets.
              </p>
              <h4>Step 4. Public Announcement:</h4>
              <p>
                The Liquidator must publicly announce the winding up, inviting
                claims from creditors and instructing debtors to settle their
                dues.
              </p>
              <h4>Step 5. Settlement of Claims:</h4>
              <p>
                The Liquidator will then proceed to settle the claims of
                creditors as prescribed by the law. This includes verifying the
                claims and deciding the order for the debts to be paid.
              </p>
              <h4>Step 6. Liquidation of Assets:</h4>
              <p>
                The Liquidator will liquidate the LLP's assets to generate funds
                to pay off the LLP's debts. This could involve selling off
                property, machinery, intellectual property, etc.
              </p>
              <h4>Step 7. Distribution of Assets</h4>
              <p>
                After paying off the debts. If there are any remaining assets,
                they are distributed among the partners of the LLP according to
                the agreement in the LLP deed or the LLP Act if the deed does
                not specify the distribution.
              </p>
              <h4>Step 8. Dissolution of LLP</h4>
              <p>
                Once all debts have been paid, and the remaining assets have
                been distributed, the Liquidator will apply to the Tribunal for
                the dissolution of LLP firm. After ensuring that all procedures
                have been correctly followed, the Tribunal will pass an order to
                dissolve the LLP.
              </p>
              <h4>Step 9. Filing of Order with Registrar</h4>
              <p>
                The order of dissolution issued by the Tribunal must be filed
                with the Registrar by the Liquidator within a specified period.
                The Registrar will then publish a notice declaring the LLP to be
                dissolved.
              </p>
              <h4>Key Considerations</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The entire process must
                      follow the rules and regulations outlined in the LLP Act
                      and other relevant laws.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The interests of the
                      creditors are given priority in the winding-up process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The role of the
                      Liquidator is central to the winding-up process, and they
                      must act impartially and diligently to conclude the
                      process efficiently.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Insolvency Proceedings for LLPs under the IBC, 2016</h3>
              <p>
                The Insolvency and Bankruptcy Code (IBC), 2016 introduced a
                comprehensive legal framework for insolvency resolution and
                liquidation for corporate entities, including Limited Liability
                Partnerships (LLPs) in India. The IBC aims to consolidate and
                amend the laws relating to reorganisation and insolvency
                resolution in a time-bound manner to maximise the value of
                assets, promote entrepreneurship, and increase credit
                availability.
              </p>
              <p>
                Under the IBC, the process of winding up an LLP due to
                insolvency involves several key steps:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Initiation:</strong> The process can be initiated
                      by the LLP itself, its creditors, or partners by filing an
                      application to the National Company Law Tribunal (NCLT)
                      demonstrating that the LLP cannot pay its debts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Moratorium:</strong> Upon acceptance of the
                      application, the NCLT orders a moratorium period during
                      which all legal actions against the LLP are halted. This
                      provides a breathing space for the resolution process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Insolvency Resolution Professional (IRP):</strong>{" "}
                      The NCLT appoints an Insolvency Resolution Professional
                      (IRP) to manage the affairs of the LLP during the
                      insolvency process. The IRP takes control of the LLP's
                      operations and assets and works to draft a resolution
                      plan.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Committee of Creditors (CoC):</strong> The IRP
                      constitutes a Committee of Creditors, which plays a
                      crucial role in reviewing and approving the resolution
                      plan or deciding on liquidating the LLP if the resolution
                      plan is not feasible.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Resolution Plan:</strong> The resolution plan
                      outlines the strategy for the insolvency resolution, which
                      could involve restructuring the LLP's debts, selling
                      assets to repay creditors, or a combination of measures.
                      The plan needs the approval of the CoC and the NCLT.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Liquidation:</strong> If the resolution plan is
                      not approved within the stipulated time frame (typically
                      180 days, extendable by another 90 days), or if the CoC
                      decides on liquidation, the LLP is liquidated. The assets
                      are sold, and the proceeds are distributed to the
                      creditors following the priority established under the
                      IBC.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Dissolution:</strong> Once the assets have been
                      liquidated and the proceeds distributed, the LLP is
                      dissolved, marking the end of the winding-up process.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">LegallensIndia: Your Partner in LLP Winding Up</h3>
              <p>
                LegallensIndia offers specialised services to facilitate the
                winding up of Limited Liability Partnerships (LLPs), ensuring a
                smooth and compliant process from start to finish. Our team of
                experts provides comprehensive support, including preparation of
                necessary documentation, declaration of solvency, resolution
                passing, and appointment of a liquidator. We guide you through
                each step, ensuring that all legal requirements are met and the
                process is conducted efficiently. With LegallensIndia, you can
                confidently navigate the complexities of LLP winding up process,
                providing a seamless transition and closure of your business
                affairs.
              </p>
              <p>
                <strong>
                  <em>
                    Contact our experts today for personalised assistance.
                  </em>
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
