import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function RegisteredOfficeChange() {
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
                Company Registered Office Change
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A company's registered office is its official address, listed
                with the Registrar of Companies (ROC), where all formal
                communications are received.
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
                { id: 3, title: "Company Registered Office Change", url: "" },
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
                        Company Registered Office Change
                      </h5>
                      <p>
                        A company's registered office is its official address,
                        listed with the Registrar of Companies (ROC), where all
                        formal communications are received.
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
                Company Registered Office Change
              </h2>
              <p>
                A company's registered office is its official address, listed
                with the Registrar of Companies (ROC), where all formal
                communications are received. It's a legal requirement in key
                company documents like the MOA and AOA. Sometimes, a company
                might need to change this address due to growth, better
                location, or cost management. Specific rules in the Companies
                Act 2013 guide this process. It involves steps like board
                meetings, shareholder approvals, and filings with the ROC,
                varying based on whether the move is within the same city, to
                another city, or a different state.
              </p>
              <p>
                For companies looking to navigate this change of registered
                office smoothly, LegallensIndia offers expertise and support,
                ensuring efficient compliance with all legal requirements.{" "}
              </p>
              <p>
                <em>
                  Ready for a seamless transition of your company's registered
                  office? Talk to our experts today and ensure a smooth,
                  compliant transition!
                </em>
              </p>
              <h3>Registered Office of a company</h3>
              <p>
                A company's Registered Office refers to the official address
                legally registered with the Registrar of Companies (ROC) in the
                jurisdiction where the company is incorporated. This address is
                where all formal communications, legal documents, and official
                notices are sent to the company. It is a legal requirement for
                companies to maintain a registered office, and this address must
                be disclosed in the company's foundational documents, such as
                the Memorandum of Association (MOA) and Articles of Association
                (AOA).
              </p>
              <h3>Company Registered Office Change</h3>
              <p>
                As mentioned above, The registered office serves as the central
                hub for all official communications and notices addressed to the
                company. It is the principal place of business where the company
                conducts its operations and interacts with stakeholders.
              </p>
              <p>
                Circumstances may arise, necessitating a change in the
                registered office's location. When such situations occur, the
                company must adhere to specific protocols and compliances as
                outlined in the Companies Act, 2013 and further detailed in the
                Companies (Incorporation) Rules, 2014.
              </p>
              <h3>
                Key Reasons for Changing a Company's Registered Office Address
              </h3>
              <p>
                Companies might change their registered office address for
                several straightforward reasons:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Better Location:</strong> Moving closer to
                      customers or suppliers or with better facilities and
                      transport links.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Growth and Expansion:</strong> Following a merger
                      or acquisition, companies might consolidate offices or
                      move to accommodate a growing team.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cost Savings:</strong> Shifting to an area with
                      lower rent, taxes, or operational costs to save money.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Market Reach:</strong> Relocating to tap into new
                      markets or be closer to a specific customer base.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Compliance:</strong> Sometimes, laws or
                      regulations require a company to be based in a certain
                      area.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enhancing Image:</strong> Moving to a prestigious
                      area to boost the company's image and appeal to clients
                      and investors.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Four Key Scenarios - Change of Registered Office</h3>
              <p>
                The company address change can occur within the same city,
                across cities, or even in a different state or region, depending
                on the company's needs and strategic decisions. When a company
                decides for a change of registered office, the process and
                regulatory requirements can vary significantly based on the
                nature of the relocation. Here are four common scenarios for
                changing a company's registered office, each with its own set of
                procedural steps:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Change of Registered
                      Office within Same City , Town, or Village local limits
                    </li>
                    <li>
                      <i className="uil uil-check"></i> From One City to Another
                      Within the Same ROC Jurisdiction
                    </li>
                    <li>
                      <i className="uil uil-check"></i> From Jurisdiction of One
                      ROC to Another Within the Same State
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Change of Registered
                      office from One State to Another State
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Company Registered Office Change Within Local Limits of City,
                Town, or Village
              </h3>
              <p>
                When a company decides for a change of registered office within
                same city, town, or village local limits, a specific procedure
                must be followed to ensure compliance with regulatory
                requirements. Here's a concise breakdown of the steps involved
                in the change of registered office within same city:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board of Directors Meeting:</strong> The initial
                      step involves convening a meeting of the company's Board
                      of Directors with two main agendas:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A Board Resolution must
                      be passed to approve shifting the registered office within
                      the local limits.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Authorising company
                      officials to handle e-filing and undertake necessary
                      actions to implement the resolution.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Filing with the Registrar of Companies (ROC):
                      </strong>{" "}
                      Post-meeting, the company must file certain documents with
                      the ROC in form INC-22 within fifteen days from the
                      meeting date. These documents include:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A certified true copy of
                      the Board Resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proof of the new
                      registered office address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A recent utility bill
                      (not over two months) as address proof.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                If the premises are leased or not owned by the company,
                documentation proving the company's right to use the new address
                must be provided
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Updating Company Records:</strong> Following ROC's
                      approval, the company must update its registered address
                      on all official correspondence and records, including
                      letterheads, banners, signboards, and other relevant
                      documents.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These are the steps are involved in the procedure for change in
                registered office within same city.
              </p>
              <h3>
                Registered Office Change From One City to Another Within the
                Same ROC Jurisdiction
              </h3>
              <p>
                When a company plans to move its registered office outside the
                local limits of any city, town, or village but within the same
                jurisdiction of the Registrar of Companies (ROC) and the same
                state, it must follow a detailed procedure to ensure legal
                compliance and regulatory approval. This process involves
                several key steps:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board of Directors Meeting:</strong> The company
                      must first convene a meeting of its Board of Directors to
                      address several important matters:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> To pass a Board
                      Resolution for relocating the registered office beyond
                      local city limits.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> To authorise company
                      officials to undertake necessary actions to implement this
                      resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Approval of the notice
                      for calling a General Meeting of shareholders is required.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> To authorise sending out
                      the notice of the General Meeting to shareholders,
                      directors, and auditors.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Notice of General Meeting:</strong> The approved
                      notice for the General Meeting must be dispatched to all
                      shareholders, directors, and auditors through post,
                      courier, or email, detailing the agenda to seek approval
                      for the office relocation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>General Meeting:</strong> At the convened General
                      Meeting, the shareholders must pass a Special Resolution
                      to approve shifting the registered office outside the
                      local limits.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Filing with ROC - Form MGT-14:</strong> Within
                      fifteen days of passing the Special Resolution (noting
                      that the Companies Act, 2013 requires filing within thirty
                      days, but for this purpose, it needs to be expedited), the
                      company must file a certified true copy of the Special
                      Resolution, along with an explanatory statement and the
                      notice of the Extraordinary General Meeting (EGM), to the
                      ROC in form MGT-14. The Service Request Number (SRN) of
                      this filing is crucial for subsequent steps.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Filing with ROC - Form INC-22:</strong>{" "}
                      Subsequently, within fifteen days of the General Meeting
                      where the shareholder approval was obtained, the company
                      must file the following documents to the ROC in form
                      INC-22:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A certified true copy of
                      the Board Resolution passed by the Board of Directors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A certified true copy of
                      the Special Resolution approved by the shareholders.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proof of the new
                      registered office address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A recent utility bill
                      (not older than two months) as proof of the new address.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> If the company does not
                      own the premises, documentation confirms the company's
                      right to use the address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Update Company Records:</strong> Following the
                      ROC's approval, the company must update its address on all
                      official documents, including letterheads, banners,
                      signboards, and other relevant records or papers.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Registered Office Change From Jurisdiction of One ROC to Another
                Within the Same State
              </h3>
              <p>
                Shifting a company's registered office from the jurisdiction of
                one Registrar of Companies (ROC) to another within the same
                state involves a comprehensive procedure to ensure compliance
                with legal requirements. Here's a step-by-step guide to
                navigating this process:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Board of Directors Meeting:</strong> The company
                      must convene a meeting of its Board of Directors to
                      address several key actions:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Pass a Board Resolution
                      to approve the relocation of the registered office from
                      one ROC jurisdiction to another within the same state.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Authorise company
                      officials to take the necessary actions to implement this
                      resolution.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Approve the notice for
                      calling a General Meeting.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Authorise the dispatch
                      of the General Meeting notice to shareholders, directors,
                      and auditors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>General Meeting Notice:</strong> Dispatch the
                      approved General Meeting notice to all shareholders,
                      directors, and auditors through post, courier, or email.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>General Meeting:</strong> Conduct a General
                      Meeting to pass a Special Resolution for the shift of the
                      registered office across ROC jurisdictions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Filing with ROC - Form MGT-14:</strong> Within
                      thirty days of passing the Special Resolution, file a
                      certified true copy of the resolution, an explanatory
                      statement, and the notice of the General Meeting to the
                      ROC using Form MGT-14.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Creditor and Debenture Holder Lists:</strong>{" "}
                      Prepare and, if necessary, obtain consent from a list of
                      the company's creditors and debenture holders regarding
                      the proposed office relocation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>State Government Intimation:</strong> Notify the
                      state Chief Secretary about the proposed shift, ensuring
                      that the move does not adversely affect the interests of
                      the company's employees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Application to Regional Director - Form INC-23:
                      </strong>{" "}
                      Submit an application to the Regional Director with the
                      following documents:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Board and Special
                      Resolutions approving the office shift.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Minutes of the General
                      Meeting where the shift was approved.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Key managerial personnel
                      or directors declare that the company is not defaulting on
                      payments to its workers and has the consent of creditors
                      or has made provisions for their payment.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A declaration that the
                      company does not seek to change the court's jurisdiction
                      where any prosecution case is pending.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> An acknowledged copy of
                      the intimation was sent to the chief secretary.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regional Director's Approval:</strong> The
                      Regional Director will review the application and is
                      expected to pass an order within fifteen days, provided
                      the application is complete in all respects.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Filing Regional Director's Order—Form INC-28:
                      </strong>{" "}
                      File the Regional Director's approval order with the ROC
                      using form INC-28 within thirty days of receiving the
                      order.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Final ROC Filing - Form INC-22:</strong> Within
                      sixty days of receiving the Regional Director's order,
                      file form INC-22 with the ROC, including:
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Certified true copies of
                      the Board and Special Resolutions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proof of the new
                      registered office address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A recent utility bill as
                      proof of the new address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> If the premises are
                      leased, evidence that the company can use the address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The Regional Director's
                      order approving the office relocation.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Update Company Records:</strong> Following ROC
                      approval, update the company's registered address on all
                      official documents, including letterheads, banners,
                      signboards, and other relevant records.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Change of Registered Office<span>&nbsp;f</span>rom One State to
                Another State
              </h3>
              <p>
                Relocating a company's registered office from one state to
                another involves meticulous steps to ensure compliance with
                legal requirements. This comprehensive procedure ensures the
                relevant authorities recognise and approve the change of
                registered office from one state to another:
              </p>
              <h4>Board Meeting</h4>
              <p>
                Convene a Board of Directors meeting to pass resolutions for
                shifting the registered office to another state and altering the
                Memorandum of Association (MOA).
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Authorise officials to
                      file a petition with the Regional Director for newspaper
                      publication.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Appoint an Authorized
                      Representative to appear before the Regional Director.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Approve and authorise
                      the dispatch of the General Meeting notice.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">General Meeting Notice</h4>
              <p>
                Notices of the General Meeting should be sent to shareholders,
                directors, and auditors by post, courier, or email.
              </p>
              <h4>General Meeting</h4>
              <p>
                Hold a general meeting to pass special resolutions for shifting
                the registered office and altering the MOA.
              </p>
              <h4>Finalisation of Creditors and Debenture Holders List</h4>
              <p>
                Compile lists of secured and unsecured creditors and debenture
                holders, including amounts due, not older than one month from
                the application date, accompanied by a declaration signed by the
                Company Secretary and at least two Directors.
              </p>
              <h4>Notice to Creditors and Debenture Holders</h4>
              <p>
                Dispatch individual notices to creditors and debenture holders
                seeking no objection certificates, sent at least fourteen days
                before the hearing date.
              </p>
              <h4>Newspaper Advertisement</h4>
              <p>
                Publish notices regarding the change in registered office from
                one state to another in both an English and a vernacular
                newspaper in the district of the existing office, as per form
                INC-26, at least fourteen days before the hearing.
              </p>
              <h4>Notice to Regulatory Bodies</h4>
              <p>
                Send copies of the application to the ROC of the existing state,
                relevant regulatory bodies, the Securities and Exchange Board of
                India (for listed companies), and the Chief Secretary of the
                existing state.
              </p>
              <h4>Application to Regional Director (Form INC-23)</h4>
              <p>
                Submit an application to the Regional Director with many
                documents, including the altered MOA, minutes of the General
                Meeting, board resolutions, affidavits, list of creditors and
                debenture holders, newspaper advertisements, and no objection
                certificates from creditors, if any.
              </p>
              <h4>Order by Regional Director</h4>
              <p>
                The Regional Director may pass an order without a hearing if no
                objections are received within fifteen days or hold a hearing
                and pass an order within sixty days if there are objections.
              </p>
              <h4>E-Filing of Form MGT-14 and Form INC -22</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> File form MGT-14 with
                      the ROC within thirty days of passing the special
                      resolutions, including the altered MOA and General Meeting
                      details.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Submit the application
                      to the Regional Director in form INC-23, and file a copy
                      of this application with the ROC in form GNL-1.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> File the Regional
                      Director's order in form INC-28 within thirty days of
                      receipt.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Submit form INC-22
                      within fifteen days of receiving the order, with details
                      of the new registered office and the order from the
                      Regional Director.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Intimation of Change</h4>
              <p>
                Inform various government, non-government, and local authorities
                about the change in the registered office.
              </p>
              <h4>Update Company Records</h4>
              <p>
                After ROC approval, update the company's address on all records,
                including letterheads, banners, and signboards.
              </p>
              <h3>
                Why LegallensIndia for Registered Office Address Change
                Compliance?
              </h3>
              <p>
                LegallensIndia is a reliable choice for handling your company's
                registered office address change due to our straightforward and
                efficient approach. Our expertise in legal and regulatory
                processes ensures that your address change complies with all
                necessary formalities, avoiding common pitfalls. With a
                dedicated team to guide you through each step, from
                documentation to ROC filing, LegallensIndia makes the complex
                procedure hassle-free, allowing you to focus on your business.
                At the same time, we take care of the legalities.
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
