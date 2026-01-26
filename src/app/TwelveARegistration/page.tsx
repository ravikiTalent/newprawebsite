import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TwelveARegistration() {
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
              <h1 className="display-1 text-white mb-3">12A Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                12A Registration, granted by the Income Tax Department, is a one-time registration for trusts and other nonprofit organizations.
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
                { id: 1, title: "Home", url: "#" },{ id: 2, title: "Registrations", url: "Registrations" },
                { id: 3, title: "12A Registration", url: "" },
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
                      <h5 className="card-title">12A Registration</h5>
                      <p>12A Registration, granted by the Income Tax Department, is a one-time registration for trusts and other nonprofit organizations.
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

              <h2 className="display-4 mb-3">12A Registration</h2>
              <p>
                12A Registration, granted by the Income Tax Department, is a
                one-time registration for trusts and other nonprofit
                organizations. The primary objective of this Registration is to
                obtain an exemption from income tax payment. Generally,
                organizations apply for 12A Registration soon after their
                incorporation. Nonprofit entities such as{" "}{" "}
                Trusts, and NGOs that have obtained 12A Registration are
                entitled to income tax exemption on their surplus income.
              </p>
              <p>
                At LegallensIndia, we understand the importance of obtaining
                Section 12A registration for your organization. We offer
                comprehensive assistance and guidance throughout the
                registration process to help you unlock the benefits and
                privileges provided under Section 12A of the Income Tax Act.
              </p>
              <p>
                Contact LegallensIndia today to embark on your journey toward 12A
                registration online and obtain a 12A Certificate for trusts,
                NGOs, etc. Let us handle the complexities while you focus on
                making a positive impact in society.
              </p>
              <h3>Section 12A of Income Tax Act</h3>
              <p>
                After establishing a Trust organization or NGO, it is necessary
                to register under Section 12A of the Income Tax Act to claim
                exemptions provided by Sections 11 and 12. Section 12A allows
                nonprofit entities such as Charitable Trusts, Nonprofit
                Organizations, Welfare Societies, Religious Institutions, etc.,
                to enjoy total tax exemption per the Income Tax Act of 1961
                provisions.
              </p>
              <p>
                If a non-profit trust or NGO fails to register for form 12a
                income tax, their financial receipts and transactions will be
                taxable. It's important to note that private or family trusts
                are not eligible for such exemptions and cannot obtain 12A
                Registration for trusts, institutions, etc.
              </p>
              <h3>What is 12A registration?</h3>
              <p>
                NGOs, trusts, and charitable trusts must understand what is 12A
                registration. 12A registration is a crucial process under the
                Income Tax Act in India, designed for NPOs, including trusts,
                NGOs, and Section 8 companies. It is granted by the Income Tax
                Department and allows these entities to be exempt from paying
                income tax on their surplus income utilized for charitable or
                religious purposes. Organizations typically apply for 12A
                registration immediately after incorporation to avail of tax
                benefits and enhance their credibility. The registration process
                involves applying Form 10A online and the necessary
                documentation to verify the organization's charitable
                activities. Once approved, the registration remains valid unless
                cancelled.
              </p>
              <h3>Benefits of 12A Registration</h3>
              <p>
                The advantages associated with Filing Form 12A and obtaining 12A
                registration online are as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Income Application:</strong> The funds utilized
                      for charitable or religious purposes are considered the
                      application of income. This means that expenses incurred
                      for such purposes are considered when calculating the
                      nonprofit organization's taxable income.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Income Tax Exemption:</strong> Income received by
                      the organization with a 12A certificate will be exempt
                      from the charge of Income Tax. This exemption allows the
                      organization to allocate more resources toward its
                      philanthropic endeavours.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Accumulation of Income:</strong> Registered
                      entities can accumulate or set aside income for future
                      use. However, the amount set aside should not exceed 15%
                      of the funds for charitable or non-commercial purposes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Exclusion from Total Income:</strong> The income
                      that is accumulated and considered as the income
                      application is not included in the assessee's total
                      income. This helps in reducing the tax liability of the
                      organization.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Access to Grants:</strong> NGOs with Section 12A
                      registration are eligible to receive grants from both
                      domestic and international sources. Various agencies and
                      institutions specifically provide grants to NGOs that have
                      obtained Registration under this section.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>One-Time Registration:</strong> The Registration
                      granted under Section 12A is treated as a one-time
                      registration. Once registered, the organization remains
                      active until the date of cancellation, eliminating the
                      need for periodic renewal.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Flexible Benefits:</strong> Form 12A income tax
                      Registered NGOs can avail themselves of the registration
                      benefits as and when required, without any rigid renewal
                      process. This flexibility allows organizations to use the
                      benefits based on their needs and circumstances.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                By filing Form 12A, nonprofit organizations can unlock these
                valuable benefits, enabling them to effectively pursue their
                charitable and religious objectives while enjoying tax
                exemptions and financial support from various sources.
              </p>
              <h3>Eligible Entity for Section 12A registration</h3>
              <p>
                12A registration is available to various types of entities that
                meet the eligibility criteria. The following entities are
                eligible for Section 12A of Income Tax Act registration and to
                obtain 12A certificate:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} <strong>Trusts:</strong>{" "}
                      Public charitable trusts, religious trusts, and other
                      types of trusts established for charitable or religious
                      purposes can apply for Registration under Section 12A.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Institutions:</strong> Charitable or religious
                      institutions, including educational institutions,
                      hospitals, medical institutions, and other similar
                      establishments, are eligible for Section 12A registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>NGOs (Non-Governmental Organizations):</strong>{" "}
                      Nonprofit organizations engaged in social welfare,
                      community development, environmental conservation, or
                      other charitable purposes can apply for Registration under
                      Section 12A.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Societies:</strong> Societies registered under the
                      Societies Registration Act of 1860 and engaged in
                      activities of a charitable or religious nature can seek
                      Registration under Section 12A.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Section 8 Companies:</strong> Companies registered
                      under Section 8 of the Companies Act 2013, established for
                      promoting art, science, commerce, sports, education,
                      research, social welfare, or any other charitable
                      objectives, are eligible for Section 12A registration.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Eligibility Criteria under Section 12A</h3>
              <p>
                To file form 12A and obtain a 12A certificate, certain criteria
                set by the Income Tax Department must be fulfilled.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} To qualify for 12A
                      Registration, the organization must meet the "charitable
                      purpose" definition per the Income Tax Act.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Charitable purposes
                      include relief to the poor, education, medical relief, and
                      activities focused on environmental preservation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Objectives related to
                      public utility also qualify as charitable purposes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Registration is granted
                      if there is no profit motive behind the organization's
                      activities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} If the organization
                      engages in trade or commerce, Registration is granted only
                      if trade receipts are less than twenty percent of total
                      receipts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Private or Family Trusts
                      are not eligible for 12A Registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} The organization's
                      activities must genuinely benefit the public to qualify
                      for Registration.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Filing of Form 10A</h3>
              <p>
                Form 10A is an essential form that must be filed by entities
                intending to register under Section 12A. The application process
                for Section 12A registration for trusts, NGOs, etc and the
                filing of Form 10A has been streamlined to be exclusively
                conducted online. A{" "}
                is required for authentication to proceed with the online
                filing. When applying for Registration under Section 12A, it is
                mandatory to affix the digital signature of the founder or
                author of the trust.
              </p>
              <p>
                The application for Registration, using Form 10A, should be
                submitted online and addressed to the Commissioner of Income
                Tax. Alongside the application, the necessary documents should
                be included to complete the registration process successfully.
                This digital and online procedure ensures a streamlined and
                efficient process for entities seeking Section 12A registration,
                promoting ease and convenience in complying with the
                requirements.
              </p>
              <h3>Validity of Section 12A Registration</h3>
              <p>
                Once an organization obtains Section 12A registration, the
                validity of the Registration is perpetual unless it is cancelled
                or revoked by the Income Tax Department. Unlike certain
                registrations requiring periodic renewal, Section 12A of Income
                Tax Act has no expiration date or a specific time limit.
              </p>
              <h3>
                Documents Required for Registration under Section 12A of the
                Income Tax Act
              </h3>
              <p>
                Several documents are required to be submitted to the Income Tax
                Department to apply for 12A Registration. These documents
                include the following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} A self-certified copy of
                      the instrument used to create the trust or establish the
                      institution. If the trust or institution was created
                      through means other than drafting and registering an
                      instrument, a self-certified copy of the document proving
                      its creation must be submitted.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} A self-certified copy of
                      the Registration made with the applicable body, which
                      could be the Registrar of Companies, the Registrar of
                      Firms and Societies, or the Registrar of Public Trusts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} A self-certified copy of
                      the documents provides evidence for adopting or modifying
                      the entity's objectives.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Annual financial
                      statements for the preceding three financial years.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} A detailed note
                      describing the activities conducted by the entity.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} In cases where the
                      Income Tax department has canceled the Registration
                      granted under this section due to a default, the assessee
                      must submit a self-certified copy of the existing order
                      granting Registration after rectifying the default.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Suppose the assessee had
                      previously applied for Registration under this section,
                      and the application was rejected. In that case, a
                      self-certified copy of the rejection order should be
                      attached to the current application.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">12A Registration Procedure</h3>
              <p>
                The procedure for obtaining 12A Registration involves the
                following steps:
              </p>
              <h4>Submission of Application</h4>
              <p>
                As mentioned above, the assessee must apply in the prescribed
                format online. The application should contain all the necessary
                details and supporting documents.
              </p>
              <h4>Request for Additional Information</h4>
              <p>
                After the application is submitted, the Commissioner may request
                the applicant to provide additional information or documents.
                This request ensures the genuineness of the activities
                undertaken by the trust or institution.
              </p>
              <h4>Approval and Written Order</h4>
              <p>
                If the Commissioner is satisfied with the application and
                supporting documents, a written order is passed stating that the
                assessee is eligible to obtain Registration under Section 12A.
                The written order is then forwarded to the assessee.
              </p>
              <h4>The Privilege of Registration</h4>
              <p>
                Upon receiving the written order, the assessee can avail of the
                Registration privilege under Section 12A. This Registration
                grants the entity the benefits and exemptions associated with
                Section 12A.
              </p>
              <h4>Rejection of Application</h4>
              <p>
                If the Commissioner is unsatisfied with the application or finds
                any deficiencies, they have the right to reject it. In such
                cases, the assessee will be informed about the reasons for the
                rejection.
              </p>
              <p>
                By following this procedure and meeting the requirements,
                entities can file form 12a income tax and obtain a 12A
                certificate for trusts, NGOs, etc., enabling them to enjoy the
                advantages and privileges provided under Section 12A of the
                Income Tax Act.
              </p>
              <h3>
                Assistance with 12A Registration: How LegallensIndia Can Help
              </h3>
              <p>
                LegallensIndia offers valuable assistance for Section 12A
                registration, ensuring a smooth and hassle-free process. With
                team of experienced professionals, we provide expert guidance
                every step of the way. From understanding the requirements to
                preparing the necessary documentation, LegallensIndia ensures that
                all the essential aspects of the registration process are
                handled efficiently. We have extensive knowledge of the
                procedures, enabling them to easily navigate the complexities.
                By entrusting the Section 12A registration process to
                LegallensIndia, individuals, and organizations can save time and
                effort while ensuring compliance with the necessary legal
                formalities. LegallensIndia is your trusted and reliable partner
                when it comes to seeking assistance with Section 12A
                registration. With our expertise and unwavering commitment to
                customer satisfaction, we provide comprehensive support
                throughout the registration process.
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
