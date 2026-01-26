import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TwelveAand80GRegistration() {
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
                12A and 80G Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In India, non-profit organisations can benefit significantly from two specific registrations provided by the Income Tax Department: 12A and 80G.
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
                { id: 2, title: "Registrations", url: "Registrations" },
                { id: 3, title: "12A and 80G Registration", url: "" },
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
                      <h5 className="card-title">12A and 80G Registration</h5>
                      <p>In India, non-profit organisations can benefit significantly from two specific registrations provided by the Income Tax Department: 12A and 80G.
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

              <h2 className="display-4 mb-3">12A and 80G Registration</h2>

              <p>
                <span>
                  In India, non-profit organisations can benefit significantly
                  from two specific registrations provided by the Income Tax
                  Department: 12A and 80G. The 12A registration grants
                  non-profit organizations an exemption from paying income tax
                  on their earned income, which can greatly aid in maximising
                  the funds available for their charitable activities.
                  Additionally, the 80G registration offers a substantial
                  benefit to the donors of these organisations, allowing them to
                  claim deductions on their taxable income for any donations
                  made. So, the 12A and 80G registration process online must be
                  done by the non-profit organisations to avail tax deduction
                  benefits.
                </span>
              </p>
              <p>
                <span>
                  At LegallensIndia, we understand the importance of obtaining
                  Section 12A and 80G registrations for your non-profit
                  organisation. We offer comprehensive assistance and guidance
                  throughout the registration process to help you get the
                  benefits and privileges provided under these sections of the
                  Income Tax Act.
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>
                      Contact our experts today to get Section 12A and 80G
                      registrations easily!
                    </em>
                  </strong>
                </span>
              </p>
              <h3>
                <span>What is 12A and 80g Registration?</span>
              </h3>
              <p>
                <span>
                  12A and 80G registrations are critical tax provisions for NGOs
                  in India, enabling charitable institutions to avail themselves
                  of specific tax exemptions and benefits. These exemptions are
                  governed by Sections 12A/12AA and 80G of the Income Tax Act of
                  1961:
                </span>
              </p>
              <h4>
                <span>12A Registration</span>
              </h4>
              <p>
                <span>
                  This certification is provided under the Income Tax Act 1961
                  to non-profit organisations in India. Once registered under
                  Section 12A, an NGO becomes eligible for tax exemption on its
                  income, meaning it doesn’t have to pay tax on surplus funds
                  generated through grants, donations, or other revenue as long
                  as these funds are used for charitable purposes. This
                  registration is crucial for NGOs as it helps in maximising the
                  funds available for their activities.
                </span>
              </p>
              <h4>
                <span>80G Registration</span>
              </h4>
              <p>
                <span>
                  While 12A registration benefits the NGO, 80G registration is
                  intended to incentivise donors. It allows individuals or
                  entities who donate to a 12A-registered NGO to claim a
                  deduction on their income tax. This deduction is a percentage
                  of the amount donated and can significantly reduce the donor's
                  taxable income. The purpose of this provision is to encourage
                  more donations by providing financial benefits to donors.
                </span>
              </p>
              <p>
                The key difference between 12A and 80G is that 12A registration
                provides tax exemption on an NGO’s income, while 80G
                registration allows donors to avail tax deductions on their
                donations.&nbsp;
                <span>
                  Both registrations enhance NGOs' ability to attract
                  contributions by offering fiscal advantages to both the
                  organisations and their benefactors. So, it is useful to
                  register and obtain the 12A 80G certificate.
                </span>
              </p>
              <h3>
                <span>Who can apply for 12A and 80G registration?</span>
              </h3>
              <p>
                <span>
                  The following types of organisations are eligible to apply for
                  12A 80G registration,
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Charitable Trusts</strong>
                      <strong>: </strong>Organizations established for
                      charitable purposes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registered Societies</strong>
                      <strong>: </strong>Societies that are formally registered
                      under the Societies Registration Act or similar state
                      laws.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Section 8 Companies</strong>
                      <strong>: </strong>Companies formed under Section 8 of the
                      Companies Act 2013 specifically for promoting charitable
                      activities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Religious Organizations</strong>
                      <strong>:</strong> Groups that primarily focus on
                      religious activities and charitable work.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Educational Institutions</strong>
                      <strong>: </strong>Non-profit schools, colleges, and
                      educational foundations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Medical Institutions</strong>
                      <strong>: </strong>Non-profit hospitals and medical
                      research organisations
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Eligibility Criteria for 12A 80G Registration</span>
              </h3>
              <p>
                <span>
                  To be eligible for Section 12A/80g registration, organisations
                  need to meet specific requirements set by the Income Tax
                  Department:
                </span>
              </p>
              <h4>
                <span>12A Registration Eligibility Criteria&nbsp;</span>
              </h4>
              <p>
                <span>
                  This section pertains to registering charitable or religious
                  NGOs, enabling them to enjoy tax exemptions on income derived
                  from donations. To qualify for Section 12A registration, an
                  organisation must meet the following criteria:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nature of the Organization</strong>
                      <strong>: </strong>Applicable to trusts, societies, or
                      Section 8 companies that are established solely for
                      charitable or religious purposes as defined under Section
                      2(15) of the Income Tax Act. This includes activities like
                      poverty relief, education, medical relief, environmental
                      preservation, and more. Organizations with these
                      operations need to obtain 12A certificate for trust.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Charitable Activities</strong>
                      <strong>: </strong>The organization must actively engage
                      in its stated philanthropic objectives without any profit
                      motives benefiting specific individuals or groups. Those
                      who fall under this criteria can get 12A certificate for
                      trust
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registration Proof</strong>
                      <strong>: </strong>Must be duly registered as a trust, a
                      society, or a Section 8 company under the relevant laws,
                      with proof required during the application process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Income Utilization</strong>
                      <strong>:</strong> All income and assets must be
                      exclusively used for charitable or religious purposes,
                      without any direct or indirect benefit to members or
                      specific individuals.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Documentation</strong>
                      <strong>: </strong>Proper bookkeeping and documentation
                      must be maintained to reflect accurate financial
                      operations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tax Compliance</strong>
                      <strong>: </strong>Annual tax returns must be filed on
                      time, even with exempt status, to maintain this exemption.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Political Neutrality</strong>
                      <strong>:</strong> The organisation should not participate
                      in or support political activities, as this can result in
                      the revocation of the 12A status.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>80G Registration Eligibility Criteria</span>
              </h4>
              <p>
                <span>
                  This allows donors to claim tax deductions on donations made
                  to eligible non-profit organizations. Eligibility for Section
                  80G registration includes:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nature of Organisation</strong>
                      <strong>:</strong> Must be a non-profit operating as a
                      registered trust, society, or Section 8 company focused on
                      charitable or religious purposes, serving the public
                      interest.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>12A Registration Requirement</strong>
                      <strong>:</strong> Organizations must already be exempt
                      under Sections 11 and 12, evidenced by a 12A registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Restrictions on Usage of Income</strong>
                      <strong>:</strong> The governing documents must strictly
                      limit the use of funds to charitable purposes only.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inclusivity of Beneficiaries</strong>
                      <strong>: </strong>The benefits of the organization should
                      not be restricted to any particular religious community or
                      caste, ensuring a wider societal benefit.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regular Accounting</strong>
                      <strong>:</strong> Accurate and regular financial records
                      must be kept to provide transparency and accountability.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>
                  <span>Additional Notes</span>
                  <span>:</span>
                </strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Religious Trusts</strong>
                      <strong>: </strong>12A registration is suitable only for
                      public religious trusts, not for those serving private
                      religious functions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Scope of Public Utility Activities</strong>
                      <strong>:</strong> These should not involve commercial
                      activities unless they support the organization's
                      charitable purpose, with such income not exceeding 20% of
                      total receipts in the previous year.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Benefits of 12A and 80G Registrations</span>
              </h3>
              <p>
                <span>
                  The benefits of obtaining 80G and 12A registrations for
                  charitable organizations and NGOs are substantial, impacting
                  various aspects of their operations:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tax Exemptions for Donors</strong>
                      <strong>: </strong>NGOs with 80G certification can offer
                      their donors the advantage of tax deductions on their
                      contributions. This makes donating more attractive and can
                      lead to increased support.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enhanced Credibility and Trust</strong>
                      <strong>: </strong>Being registered under Section 12A and
                      80G lends an official stamp of approval from the Income
                      Tax Department, enhancing an NGO's credibility. This trust
                      factor is crucial for donors and partners who seek
                      transparency in operations.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Increased Fundraising Potential</strong>
                      <strong>: </strong>The tax benefits associated with these
                      registrations encourage both individuals and corporate
                      entities to donate more generously. This broadens the
                      potential fundraising base, allowing NGOs to expand their
                      activities and reach.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Access to Government Grants</strong>
                      <strong>:</strong> Many government programs and
                      initiatives require NGOs to have 12A and 80G registrations
                      to qualify for funding. This opens up numerous
                      opportunities for grants that are critical for project
                      financing and operations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Long-Term Sustainability</strong>
                      <strong>:</strong> The ability to offer tax benefits to
                      donors not only boosts immediate donations but also helps
                      in building long-term partnerships, ensuring sustainable
                      funding sources. This stability allows NGOs to plan and
                      execute impactful, long-term projects.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Efficient Utilization of Resources</strong>
                      <strong>:</strong> With 12A registration, NGOs must
                      maintain meticulous records and use their funds strictly
                      for charitable purposes. This ensures that resources are
                      used effectively and for the intended goals of the
                      organisation.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  Overall, 12A and 80G registrations not only help in managing
                  and expanding financial resources through tax benefits but
                  also play a vital role in building organizational reputation
                  and operational capacity.
                </span>
              </p>
              <h3>Validity of 12A and 80G Registration</h3>
              <p>
                The validity of 12A and 80G registrations depends on the type of
                registration obtained. There is no annual renewal requirement;
                however, registrations must be renewed periodically. Provisional
                registration is granted for a period of 3 years, while the
                validity of regular registration is for 5 years. The renewal
                process must be initiated at least 6 months before the expiry of
                the current registration. For example, if the validity is up to
                31st March 2025, the renewal application should be submitted on
                or before 30th September 2024 to ensure continuous compliance.
              </p>
              <h3>
                <span>12A and 80G Registration Documents Required</span>
              </h3>
              <p>
                <span>
                  For NGOs to successfully complete the online registration
                  process for 12A and 80G, they must provide a comprehensive set
                  of documents required for 12A and 80G registration that verify
                  their legal registration. Failure to provide these documents
                  could result in the application being considered incomplete
                  and subsequently rejected by the authorities. Below is a
                  detailed list of documents required for 12A and 80G
                  registrations in India.
                </span>
              </p>
              <p>
                <span>
                  Here's the list covers the 12A and 80G registration documents
                  required:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Trust Deed/Society Registration Certificate/Section 8
                        Company Certificate
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Memorandum of Association and Articles of Association
                        (for Section 8 companies only)
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>PAN card of the organization</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Bank account statement of the organization</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Audited accounts of the organization for the last three
                        years
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        List of trustees/members/directors of the organization
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        List of activities carried out by the organization
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>12A and 80G Registration Process Online</span>
              </h3>
              <p>
                <span>
                  Under the Finance Acts of 2020 and 2021, Form 10A is now
                  mandated for registrations under Sections 12A and 80G of the
                  Income Tax Act. We have outlined the revised registration 12A
                  and 80G registration process online in a detailed step-by-step
                  guide below on how to apply 12A and 80G online.&nbsp;&nbsp;
                </span>
              </p>
              <p>
                <span>
                  Note: The earlier provisions under Section 12AA have been
                  superseded by Section 12AB. Therefore, every NGO that was
                  registered under Sections 12A, 12AA, or 80G must now
                  re-register under Section 12AB, effective from April 1, 2021.
                </span>
              </p>
              <h4>
                <span>Step-1: NGO Formation and Registration</span>
              </h4>
              <p>
                <span>
                  First, choose the appropriate legal structure for your
                  NGO—trust, society, or Section 8 company—based on state
                  regulations. After selecting the structure, officially
                  register your organization with the appropriate authority,
                  such as the Registrar of Societies or Companies.
                </span>
              </p>
              <p>
                <span>
                  LegallensIndia can help you register your society, NGO, or
                  Section 8 company. Our experts are here to assist you every
                  step of the way.
                </span>
              </p>
              <h4>
                <span>Step 2: </span>
                <span>&nbsp;</span>
                <span>Document Preparation</span>
              </h4>
              <p>
                <span>
                  Gather critical documents needed to apply for 80G and 12A
                  registration using Form 10A. These include your organization's
                  registration certificate, MOA/Bye Laws/Trust Deed, audited
                  financial statements, FCRA Registration, and NGO Darpan ID,
                  among others. These documents will verify your NGO's
                  legitimacy and existence.
                </span>
              </p>
              <h4>
                <span>Step-3: Application Preparation&nbsp;</span>
              </h4>
              <p>
                <span>
                  Fill out Form 10A, the official form for 12A &amp; 80G
                  registrations, available from the Income Tax Department’s
                  website or local offices. Ensure that all details about your
                  organization's objectives, activities, and board members are
                  accurately and thoroughly provided.
                </span>
              </p>
              <h4>
                <span>Step-4: Application Submission&nbsp;</span>
              </h4>
              <p>
                <span>
                  Submit Form 10A along with the required documents at the
                  Office of the Income Tax Commissioner or through the Income
                  Tax Website. This submission begins the formal registration
                  process for 12A/80G. Keep copies of all submitted documents
                  for future reference.
                </span>
              </p>
              <h4>
                <span>Step-5: Review and Inspection&nbsp;</span>
              </h4>
              <p>
                <span>
                  The tax authority will review your application and may inspect
                  your NGO’s activities and financial records to ensure they
                  meet the registration requirements for Sections 12A/80G.
                </span>
              </p>
              <h4>
                <span>Step-6: Registration Confirmation</span>
              </h4>
              <p>
                <span>
                  If your application is successful and complies with the
                  necessary standards, your NGO will be granted registration
                  under Sections 12A/80G. Conversely, if any discrepancies are
                  found, your application may be rejected, but you will have the
                  opportunity to address the issues raised.
                </span>
              </p>
              <h4>
                <span>
                  Step-7: 12A &amp; 80G Registration Certificate&nbsp;&nbsp;
                </span>
              </h4>
              <p>
                <span>
                  Once registered successfully, you will receive an official
                  12&amp; 80g&nbsp; Registration certificate, affirming your
                  NGO’s eligibility for tax exemption under Sections 12A&amp;
                  80G. This 12A 80G certificate is vital for confirming your
                  organization's legal status and enabling tax benefits for both
                  the NGO and its donors.
                </span>
              </p>
              <h3>
                <span>
                  LegallensIndia: Your Partner for Seamless 12A and 80G
                  Registration!
                </span>
              </h3>
              <p>
                <span>
                  LegallensIndia offers expert assistance in securing both 12A and
                  80G registrations. Our experts guide organisations through the
                  intricate registration processes, ensuring compliance with
                  affordable 12A and 80G registration fees. Whether the initial
                  80G and 12A registration registration or renewal, LegallensIndia
                  provides comprehensive support, streamlining the application
                  process and helping organisations achieve their charitable
                  goals while maximising tax benefits.
                </span>
              </p>
              <p>
                <span>
                  <strong>
                    <em>
                      Get started today to enjoy tax benefits while supporting
                      your charitable endeavours.
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
