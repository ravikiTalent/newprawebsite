import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function EightyGRegistration() {
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
              <h1 className="display-1 text-white mb-3">80G Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Registering your NGO under Section 80G can significantly enhance your ability to attract donors by offering them the benefit of tax deductions on their contributions.
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
                { id: 3, title: "80G Registration", url: "" },
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
                      <h5 className="card-title">80G Registration</h5>
                      <p>Registering your NGO under Section 80G can significantly enhance your ability to attract donors by offering them the benefit of tax deductions on their contributions.
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

              <h2 className="display-4 mb-3">80G Registration</h2>
              <p>
                Registering your NGO under Section 80G can significantly enhance
                your ability to attract donors by offering them the benefit of
                tax deductions on their contributions. This financial incentive
                makes donating to your organisation more appealing and can boost
                your fundraising efforts. If you are a charitable organisation
                seeking 80G registration, LegallensIndia is here to help. Our team
                can guide you through the 80G registration process, ensuring a
                smooth and efficient experience from start to finish.
              </p>
              <h3>What is Section 80G?</h3>
              <p>
                Section 80G of the Income Tax Act 1961 is a provision that
                allows individuals and organisations to claim tax deductions on
                donations made to eligible charitable organisations. When an
                organisation obtains an 80G certificate, it has been registered
                and recognised by the Income Tax Department as eligible to
                receive donations that qualify for tax exemption. Donors who
                contribute to such organisations can claim deductions on their
                taxable income for the amount donated up to a specified limit,
                thereby reducing their tax liability and encouraging charitable
                giving.
              </p>
              <h3>What is 80G registration?</h3>
              <p>
                80G registration enables donors to claim tax deductions on
                donations made to eligible charitable organisations.
              </p>
              <p>
                The registration grants tax benefits to both the donor and the
                recipient. Charitable organisations registered under Section 80G
                are entitled to receive tax-deductible donations, and donors can
                claim deductions on the amount donated while filing their income
                tax returns.
              </p>
              <p>
                The Finance Act 2020 introduced amendments to India's 80G
                registration provisions. These amendments include the
                requirement for organizations with 80G registration to file
                annual returns, verification of donees by the Income Tax
                Department, and the possibility of reassessing and revoking
                registrations for non-compliance.&nbsp;&nbsp;
              </p>
              <h3>Importance of 80G Registration&nbsp;</h3>
              <p>
                80G Registration under the Income Tax Act allows donors, whether
                individuals, companies, associations, or organisations, to claim
                deductions on their total income for donations to an NGO. This
                exemption is provided under Section 80G of the Income Tax Act,
                stipulating that the donated amount must not exceed ten per cent
                of the donor's gross total income.
              </p>
              <p>
                Donations must be made in monetary form, and only financial
                transactions are considered valid under this section.&nbsp; When
                issuing receipts for donations, NGOs must include the number and
                date of the 80G certificate, indicating the validity period of
                the certificate.
              </p>
              <h3>Eligibility Criteria for 80G Registration Certification</h3>
              <p>
                Before proceeding to the process of how to apply 80G
                certificate, one must be qualified for 80G registration. The
                following criteria must met by the charitable organisations:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Legal Structure: </strong>The organization must be
                      registered under a recognized legal structure in India,
                      such as a trust, society, or non-profit company.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Non-Profit Objective: </strong>The organisation's
                      primary focus should be charitable activities, not profit
                      generation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Proper Documentation: </strong>The organization
                      must maintain accurate accounting records and have its
                      accounts audited annually to ensure compliance with income
                      tax regulations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Compliance with Statutory Requirements:</strong>{" "}
                      To be eligible for 80 G registration, the organization
                      must adhere to all requirements under Sections 11 and 12
                      of the Income Tax Act.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Non-Exempt Business Income: </strong>The
                      organization should not have any non-exempt income from
                      business activities. If there is business income, it must
                      maintain separate accounting records, and donations should
                      only be used for charitable purposes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Non-Exclusive Focus: </strong>The organization
                      should not focus exclusively on benefiting a specific
                      religious community or caste.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Darpan Portal Registration: </strong>For
                      registration or re-validation, obtaining a registration
                      number from the Darpan portal of Niti Aayog is mandatory,
                      especially if the organisation receives or plans to
                      receive grants or assistance from the Central or State
                      Government.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Audit Reports:</strong> If the NGO's total income
                      exceeds the minimum threshold specified under the Income
                      Tax Act, its accounts must be audited by a chartered
                      accountant.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Utilization of Funds:</strong> At least 85% of the
                      income should be spent on the organizationâ??s objectives
                      within India to ensure the funds are used effectively for
                      charitable purposes.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Benefits of 80G Registration</h3>
              <p>
                Section 80G Registration Offers Many Benefits, listed as
                follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Tax Deductions: </strong>Donors can claim tax
                      deductions of up to 50% or 100% of their donations,
                      depending on the type of charitable organization.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Enhanced Credibility:</strong> Organizations with
                      80G registration are viewed as more trustworthy, making it
                      easier to attract donors.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Increased Donations: </strong>The tax benefits
                      make these organisations more attractive to donors,
                      leading to more donations from both individuals and
                      businesses.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Wider Reach: </strong>With 80G registration,
                      charities can connect with a larger number of potential
                      donors, increasing their ability to raise funds and
                      support their causes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}{" "}
                      <strong>Compliance and Transparency:</strong> Registered
                      under 80G ensures that the organisation meets legal
                      standards and operates transparently.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for 80G Registration</h3>
              <p>
                To get your 80G certificate, the following documents are
                mandatory along with Form 10A/10G:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Trust deed/society
                      registration certificate/section 8 company certificate
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Memorandum of
                      Association and Articles of Association (for section 8
                      companies only)
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} PAN card of the
                      organisation
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Bank account statement
                      of the organization
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Audited accounts of the
                      organization for the last three years
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} List of
                      trustees/members/directors of the organization
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} List of activities
                      carried out by the organization
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Ensure to keep these documents ready before getting into the
                process of how to apply 80G certificate.
              </p>
              <h3>80G Registration Validity and Renewal</h3>
              <p>
                The initial provisional registration under Section 80G is valid
                for three years. After this period, organizations must renew
                their registration. Following a successful renewal, the
                registration is valid for an additional five years. To continue
                enjoying the benefits of 80G registration, organisations must
                renew it every five years thereafter.&nbsp;&nbsp;
              </p>
              <p>
                <strong>Important Note:&nbsp;</strong>
                <em>
                  For Section 8 companies, the validity of 80G registration is
                  till March 2025. It must be renewed for Assessment Year (AY)
                  2025-2026 in March 2025 to continue availing the tax benefits
                  under Section 80G.&nbsp;
                </em>
              </p>
              <h3>80g registration Process</h3>
              <p>
                The process for obtaining 80G registration for NGOs can be
                approached in two ways, depending on whether the organisation is
                a new entrant or seeking renewal of an existing provisional
                registration.&nbsp;
              </p>
              <h4>Process for Section 80g Provisional Registration</h4>
              <p>
                To receive an 80G Registration Certificate, follow these four
                basic steps:
              </p>
              <h4>Step 1: Application Submission</h4>
              <p>
                Submit an application in Form No. 10A for 80G registration to
                the Commissioner of the Income Tax Department in the
                organisation's jurisdictional region.
              </p>
              <h4>Step 2: Document Examination</h4>
              <p>
                Once the application and documents are submitted, the Income Tax
                Department will thoroughly examine the provided materials.
              </p>
              <h4>Step 3: Additional Information (if required)</h4>
              <p>
                If the officials require additional information, they will
                request further documents from you. You must submit the
                requested documents within the specified time frame.
              </p>
              <h4>Step 4: Certification Issuance</h4>
              <p>
                If the department is satisfied with verifying the papers and
                information presented, the Commissioner will issue the 80G
                Certificate to the organisation.
              </p>
              <p>
                Note: The validity of the 80g provisional registration starts
                from the Assessment Year for which the organisation sought the
                registration. The renewal application should be submitted:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} At least six months
                      before the end of the current validity period, or
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Within six months from
                      the commencement of their activities, whichever comes
                      first.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                The Transition from 80g Provisional Registration to Regular 80G
                Registration: Before the provisional registration expires, NGOs
                must apply for regular registration, which is valid for five
                years. This stage involves a detailed review of the NGOâ??s
                activities and financial records.
              </p>
              <h4>Process for Regular 80g Registration</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "} Submit Form 10G: NGOs
                      must complete Form 10G and submit it with the required
                      documents to the Income Tax Department.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Inspection: The Income
                      Tax Officer (ITO) may conduct an on-site inspection to
                      verify the NGOâ??s information.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "} Approval: Upon
                      satisfactory review, the NGO will receive regular 80G
                      registration, valid for five years.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Streamline 80G Registration with LegallensIndia!</h4>
              <p>
                Simplify your 80G registration process with LegallensIndia. Our
                experts guide you through each step, from application submission
                to getting an 80 G certificate, ensuring a smooth and efficient
                experience. Let us handle the complexities while you focus on
                your charitable activities.
              </p>
              <p>&nbsp;</p>
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
