import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function Section8Company() {
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
                Section 8 Company Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A Section 8 Company is a non-profit organization that aims to
                promote charitable activities, art, science, education, and
                sports.
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
                { id: 3, title: "Section 8 Company", url: "" },
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
                      <h5 className="card-title">Section 8 Company</h5>
                      <p>
                        Register Your Company in Just 7–10 Days – 100% Online &
                        Hassle-Free! Government fees are covered for up to INR 1
                        lakh of authorized capital, including stamp duty
                        charges. Additional charges apply for DSC certificates,
                        payable directly to the Certifying Authority.
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
              <h2 className="display-4 mb-3">Section 8 Company Registration</h2>
              <p>
                A Section 8 Company is a non-profit organization that aims to
                promote charitable activities, art, science, education, and
                sports. The profits of such companies are utilized for promoting
                these objectives and are not distributed among the Company's
                members. It is essential to understand what is Section 8
                company, document requirements, and company incorporation
                process.
                <br />
                At LegallensIndia, we provide end-to-end services for
                registering Section 8 companies in India. Our team of experts
                offers hassle-free and professional services to help you
                establish a Section 8 company quickly and efficiently. Contact
                us today to avail of our professional services for registering
                your Section 8 Company in India.
              </p>
              <h3>What is Section 8 Company? - Companies Act, 2013</h3>
              <p>
                According to the Companies Act 2013, a Section 8 company means
                an organization whose objectives are to promote arts, commerce,
                science, research, education, sports, charity, social welfare,
                religion, environmental protection, or other similar activities
                goals. These entities utilize their profits to achieve their
                mission and do not distribute dividends to their shareholders.
              </p>
              <h3>Overview of Section 8 Company Registration</h3>
              <p>
                A Section 8 Company is a type of corporation established to
                promote non-profit activities, such as education, social
                welfare, environment preservation, arts, sports, charity, and
                more. This follows the provisions of the Companies Act 2013.
                <br />
                The essential purpose of registering a Section 8 Company is to
                encourage non-profitable goals, including but not limited to
                trade, arts, commerce, education, charity, environmental
                protection, sports research, and social welfare. To register a
                Section 8 Company, a minimum of two directors are required, and
                there is no requirement for a minimum paid-up capital to set up
                such a company.
              </p>
              <h3>Key Points about Section 8 Company Act</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> In India,
                      Non-Governmental Organizations (NGOs) can be registered
                      under the Registrar of Societies or as a non-profit entity
                      under Section 8 Company of the Companies Act, 2013.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Profit generated by
                      Section 8 Companies cannot be used for purposes other than
                      charitable objectives and cannot be distributed among
                      shareholders.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Section 8 Companies are
                      similar to the erstwhile Section 25 Company under the
                      Company Act 1956. As per the prevailing Company Act, these
                      are now recognized as Section 8 Companies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Section 8 Companies are
                      required to comply with the provisions of the Companies
                      Act 2013. They are mandated to maintain books of accounts,
                      file returns with the Registrar of Companies (ROCs), and
                      comply with GST and IT Act.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Any changes to the
                      charter documents like the Articles of Association (AoA)
                      and Memorandum of Association (MoA) require the
                      government's consent.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Benefits of Opening a Section 8 Company in India</h3>
              <p>
                Incorporating a Section 8 company in India offers numerous
                advantages, some highlighted below.
              </p>
              <h4>Tax Exemption</h4>
              <p>
                Section 8 companies registered under section 12AA of the Income
                Tax Act are eligible for a 100% tax exemption, as they utilize
                their profits for charitable purposes. This is a significant
                benefit as the profits generated by such entities are
                non-taxable.
              </p>
              <h4>No Minimum Capital Requirement</h4>
              <p>
                Unlike public limited companies, Section 8 entities do not have
                a minimum capital requirement. They can adjust their capital
                structure according to their growth, giving them more
                flexibility.
              </p>
              <h4>Separate Legal Entity</h4>
              <p>
                Section 8 companies have a separate legal identity and perpetual
                existence, just like other registered companies. This increases
                their credibility and provides them with more autonomy and legal
                standing.
              </p>
              <h4>Increased Credibility</h4>
              <p>
                Section 8 companies are subject to strict legal compliance
                frameworks, enhancing their credibility regarding legal
                standing. Unlike NGOs and trusts, Section 8 entities follow
                stringent compliances post-registration, making them more
                trustworthy.
              </p>
              <h4>No Title Required</h4>
              <p>
                Section 8 companies are free to choose a name that suits their
                liking during the registration process. Unlike other registered
                structures, they are not required to affix the term "Section 8"
                after their name.
                <br />A Section 8 company in India offers numerous benefits,
                including tax exemption, no minimum capital requirement, no need
                to pay stamp duty, separate legal identity, increased
                credibility, and no title required. These advantages make
                Section 8 companies attractive for entrepreneurs looking to
                start a business with a charitable or social cause.
              </p>
              <h3>Who can Form a Section 8 Company?</h3>
              <p>
                Here are the criteria that specify who can form a Section 8
                company.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> An Indian national or
                      Hindu Undivided Family (HUF) can incorporate a Section 8
                      Company.
                    </li>
                    <li className="mt-3">
                      <i className="uil uil-check"></i> The entity must have at
                      least one director.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The primary object of
                      the Section 8 Company Act should be related to promoting
                      art and science, sports, charitable activities, education,
                      or providing financial assistance to individuals from
                      lower-income groups.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                These eligibility criteria ensure that the Section 8 Company
                operates to promote social welfare and contribute to the greater
                good of society.
              </p>
              <h3>
                Mandatory legal requirements for the Incorporation of Section 8
                Company
              </h3>
              <p>
                Before applying for the process of incorporation of Section 8
                company in India, specific legal requisites must be fulfilled.
                These requirements are as follows:
              </p>
              <h4>Number of Directors</h4>
              <p>
                A minimum of two directors is required if the Section 8 entity
                intends to operate as a private limited company. However, a
                minimum of three directors are required if the entity aims to
                operate as a public limited company.
              </p>
              <h4>Number of Members</h4>
              <p>
                If the Section 8 Company Act aims to function as a private
                limited company, the number of members is capped at 200 by the
                Ministry of Corporate Affairs (MCA). However, there is no such
                limit for Section 8 entities with a business structure like a
                public limited company.
              </p>
              <h4>Capital Requirement and Name</h4>
              <p>
                According to the Companies Act 2013, Section 8 entities are not
                required to maintain a minimum paid-up capital. Moreover, NGOs
                operating as Section 8 entities are not obligated to affix terms
                like private limited or limited in their name.
              </p>
              <h4>Company Objects</h4>
              <p>
                Only entities with non-profit objectives are eligible for
                Section 8 registration. The Memorandum of Association and
                Articles of Association must clearly state such goals for which
                the Company is established. Any profits the Section 8 entity
                generates must be utilized for charitable purposes or reinvested
                in the entity. The profit of Section 8 entities is not available
                to its members in any form. These legal requisites ensure that
                Section 8 companies operate with transparency and the intended
                purpose of promoting social welfare.
              </p>
              <h3>Documents Required for Section 8 Company Incorporation</h3>
              <p>
                The following documents are required to complete the
                incorporation process for a Section 8 company in India:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Articles of Association
                      (AOA) and Memorandum of Association (MOA)
                    </li>
                    <li className="mt-3">
                      <i className="uil uil-check"></i> Declaration by the first
                      director(s) and subscriber(s) (an affidavit is not
                      required)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Proof of office address,
                      such as a copy of utility bills like electricity, water,
                      or gas bill
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Copy of the certificate
                      of incorporation (COI) of an overseas corporate body (if
                      any)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A resolution passed by
                      the promoter company
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Consent of Nominee
                      (INC-3)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Residential and identity
                      proof of nominees and subscribers
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Applicant's identity and
                      residential proof
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Digital Signature
                      Certificate (DSC)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Declaration of
                      unregistered companies.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                By providing these documents, you can ensure smooth and
                efficient Section 8 company incorporation processes.
              </p>
              <h3>Section 8 Company Incorporation Process</h3>
              <p>
                The process of incorporating Section 8 companies in India
                involves the following steps:
              </p>
              <h4>Step 1: Obtain Digital Signature Certificate (DSC)</h4>
              <p>
                The first step is to obtain a Digital Signature Certificate
                (DSC) for the proposed directors of the Section 8 Company. This
                certificate is required for the online filing of documents with
                the Ministry of Corporate Affairs (MCA). Form DIR-3 is used for
                obtaining the DIN and should be filed along with the DSC of the
                proposed directors.
                <br />
                Forms to be used: DIR-3, DSC
              </p>
              <h4>Step 3: Reserve the Company Name</h4>
              <p>
                The next step is to reserve the name of the proposed Company
                with the MCA. The Section 8 company name should be unique and
                not be similar to any existing company name. Form INC-1 is used
                for reserving the company name.
                <br />
                Forms to be used: INC-1
              </p>
              <h4>Step 4: File the Application for Incorporation</h4>
              <p>
                After the company name is approved, the next step is to apply
                for Section 8 Company incorporation. The application for
                incorporation is filed in Form INC-32 along with the Company's
                Memorandum of Association (MOA) and Articles of Association
                (AOA).
                <br />
                Forms to be used: INC-32, MOA, and AOA
              </p>
              <h4>Step 5: Obtain a License for Section 8 Company</h4>
              <p>
                Once the application for incorporation is approved, the next
                step is to obtain a license for the Section 8 Company. Form
                INC-12 is used for obtaining the license. It should be filed
                along with the necessary documents.
                <br />
                Forms to be used: INC-12
              </p>
              <h4>Step 6: Obtain a Certificate of Incorporation</h4>
              <p>
                After obtaining the license, the MCA issues a Certificate of
                Incorporation in Form INC-16. This certificate confirms the
                incorporation of the Section 8 Company.
                <br />
                Forms to be used: INC-16
                <br />
                In summary, the forms used for Section 8 Company registration
                are DIR-3, DSC, INC-1, INC-32, MOA, AOA, INC-12, and INC-16.
              </p>
              <h4>Donations/Funding of Section 8 Company</h4>
              <p>
                A Section 8 Company cannot collect capital through deposits but
                can accept donations from the public. Several methods are
                available to raise funds, such as foreign donations, equity
                funding, and domestic donations.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Foreign contributions
                      are permissible only if FCRA registration is obtained,
                      which can be applied for three years after registration.
                    </li>
                    <li className="mt-3">
                      <i className="uil uil-check"></i> If immediate foreign
                      contributions are required, prior permission from the
                      commissioner can be requested.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Equity funding can be
                      achieved by releasing new equity shares at a premium
                      price. Domestic subsidies have no restrictions, but it is
                      vital to establish a comprehensive system to prevent money
                      laundering.
                    </li>
                  </ul>
                </div>
                <h3 className="mt-4">
                  Registration under Section 12AA and 80G for Section 8
                  Companies
                </h3>
                <p>
                  Registering a Section 8 company under Section 12AA and
                  obtaining approval under Section 80G offers significant
                  benefits. Section 12AA registration exempts the company's
                  income from taxation if used for charitable purposes, ensuring
                  that resources are maximized for social welfare activities.
                  Section 80G registration allows donors to claim tax deductions
                  on their contributions, making the organization more
                  attractive to donors and enhancing its fundraising potential.
                  <br />
                  <strong>Important note:</strong> For Section 8 companies, the
                  validity of 80G registration is till March 2025. It must be
                  renewed for Assessment Year (AY) 2025-2026 in March 2025 to
                  continue availing the tax benefits under Section 80G.
                </p>
                <h5>
                  LegallensIndia makes your Section 12AA and 80G registration
                  seamless, helping your Section 8 company secure tax exemptions
                  and attract more donors with ease!
                </h5>
                <h3 className="mt-4">
                  Streamline Section 8 Company Registration with LegallensIndia
                </h3>
                <p>
                  LegallensIndia is a trusted partner for entrepreneurs and
                  organizations looking to obtain Section 8 company registration
                  in India. With our expertise and seamless online platform,
                  LegallensIndia simplifies the complex process of registering a
                  Section 8 company, ensuring that all legal formalities are
                  met. Our dedicated team of professionals guides clients
                  through the entire registration procedure, from documentation
                  to approval, and helps you establish non-profit organizations
                  that can work towards social welfare and charitable
                  activities.
                  <br />
                  Contact us now to begin your Section 8 company registration
                  journey.
                </p>
              </div>
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
