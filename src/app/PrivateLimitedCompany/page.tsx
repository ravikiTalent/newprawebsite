import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function PrivateLimitedCompany() {
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
                Company Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                This is the most preferred entity for startups and SMEs due to
                ease of fundraising, scalability, and investor trust.
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
                { id: 3, title: "Company Registration", url: "" },
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
                      <h5 className="card-title">Company Registration</h5>
                      <p>Instant Name Application for Company.</p>
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
                Private Limited Company Registration in India
              </h2>
              <p>
                Setting up a business in India often involves choosing a private
                limited company as a preferred option. This structure offers
                shareholders limited liability protection while placing specific
                ownership constraints. In contrast, in the case of an LLP,
                partners oversee the management. Private limited company
                registration allows for a clear distinction between directors
                and shareholders.
                <br />
                At LegallensIndia, we offer a cost-effective service to register
                new company, registration of startup in India and facilitate
                seamless private limited company registration in India. We
                handle all legal formalities for online PVT LTD company
                registration in India, ensuring strict compliance with the
                Ministry of Corporate Affairs (MCA) regulations.
              </p>
              <h3>What is a private limited company?</h3>
              <p>
                In India, a private limited company is a privately held entity
                with limited liability, and it ranks among the nation's most
                favored business structures. This popularity is primarily
                attributed to its numerous advantages, including limited
                liability protection, ease of formation and maintenance, and its
                status as a distinct legal entity. This encourages a prospective
                businessman to engage in the incorporation of private limited
                company. A private limited company enjoys legal separation from
                its owners and necessitates a minimum of two members and two
                directors for its operation. Here are the key characteristics of
                a private limited company in India, which justify the PVT LTD
                company registration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limited Liability Protection:</strong>{" "}
                      Shareholders of a private limited company are liable only
                      to the extent of their shareholding. Their assets remain
                      safeguarded, even in cases of financial setbacks incurred
                      by the company.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Separate Legal Entity:</strong> A private company
                      possesses its own distinct legal identity. It can own
                      property, engage in contracts, and initiate or defend
                      legal actions under its unique name.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimum Number of Shareholders: </strong> A
                      private company must have a minimum of two shareholders
                      and cannot exceed 200 shareholders.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimum Number of Directors:</strong> A private
                      limited company necessitates a minimum of two directors.
                      At least one of these directors must be an Indian citizen.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimum Share Capital:</strong> The company must
                      maintain a minimum paid-up capital of Rs. 1 lakh or a
                      higher amount as specified.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Name of the Firm:</strong> The private limited
                      company's name must conclude with the words "Private
                      Limited."
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Restrictions on Share Transfer:</strong> The right
                      to transfer shares within a private limited company is
                      restricted. Shares can only be transferred with the
                      approval of the Board of Directors or following the
                      company's Articles of Association.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Prohibition on Public Invitation:</strong> Private
                      limited companies are prohibited from inviting the public
                      to subscribe to their shares or debentures.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance Requirements:</strong> Private limited
                      companies are obligated to adhere to various legal and
                      regulatory obligations, including maintaining proper
                      financial records, conducting annual general meetings, and
                      filing annual returns with the ROC.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                In summary, the attributes of a private limited company
                registration process in India make it a favoured choice among
                entrepreneurs planning to involve in the registration of startup
                in India, owing to its advantageous features and relatively
                straightforward structure.
              </p>
              <h3>Types of Private Limited Companies:</h3>
              <p>
                Entrepreneurs or prospective businessmen must consider the
                following types of private limited companies, if they intend to
                start company or undertaking the business registration in India,
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company Limited by Shares:</strong> Shareholders'
                      liability is limited to the nominal share amount mentioned
                      in the Memorandum of Association.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company Limited by Guarantee:</strong> Member
                      liability is limited to the amount of guarantee specified
                      in the Memorandum of Association. This guarantee is
                      invoked only during winding up.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unlimited Companies:</strong> Members of unlimited
                      companies have unlimited personal liability for the
                      company's debts and liabilities. However, they are still
                      considered a separate legal entity, and individual members
                      cannot be sued.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Ensure you deeply understood these types before proceeding to
                the business registration in India.
              </p>
              <h3>Advantages of a Private Limited Company</h3>
              <p>
                A Private Limited Company Incorporation is one of India's most
                popular business structures. It offers several advantages and
                some disadvantages, let us explain.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limited Liability:</strong> Shareholders'
                      responsibility is restricted to the extent of their
                      capital contribution, safeguarding personal assets from
                      the company's financial obligations and liabilities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Distinct Legal Identity:</strong> A Private
                      Limited Company possesses an independent legal identity
                      distinct from its proprietors. It has the capacity to own
                      assets, engage in contractual agreements, and initiate or
                      defend legal actions under its own name through company
                      name registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Continuous Existence: </strong> The company's
                      existence persists irrespective of shifts in shareholders
                      or directors. Its existence is not contingent upon the
                      lifespan of its associates.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ease of Funding:</strong> Raising capital by
                      issuing shares to investors, venture capitalists, or angel
                      investors is easier. This structure attracts external
                      investment. This removes the capital worries when an
                      entrepreneur start company.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tax Benefits:</strong> Private Limited Companies
                      may qualify for various tax benefits and exemptions,
                      making them tax-efficient entities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Credibility and Trust:</strong> Having "Pvt. Ltd."
                      in your company name often instills more confidence and
                      trust in customers, suppliers, and partners. This
                      signifies one of important benefits of company name
                      registration.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Disadvantages of a Private Limited Company
              </h3>
              <p>
                The Disadvantages of a private limited company when you intend
                to for the incorporation of private limited company,{" "}
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Compliance Burden:</strong> Face regulatory
                      demands, including financial reporting, filings, and
                      audits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Complex Setup:</strong> Process and cost for
                      managing are higher than more superficial structures.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Share Limits: </strong> Restricted share
                      transfers; max 200 shareholders in India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Public Disclosure:</strong> Financial info is
                      publicly viewable, impacting privacy.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Exit Complexity:</strong> Selling or leaving is
                      more complicated than with other structures.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Slower Decisions:</strong> The involvement of
                      shareholders and directors may slow choices.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Requirements for Registering a Company in India:
              </h3>
              <p>
                The following requirements must be considered when you set out
                on how to register PVT LTD company in India,
              </p>
              <h4>Directors and Members:</h4>
              <p>
                A minimum of two directors and 200 members are required for
                Private Limited Company Registration in India, as per the
                Companies Act of 2013.
                <br />
                Directors must have a Director Identification Number (DIN)
                issued by the Ministry of Corporate Affairs (MCA) for a new
                company registration in India.
                <br />
                At least one director must be an Indian resident, having spent
                182 days in India in the previous calendar year.
              </p>
              <h4>Company Name:</h4>
              <p>
                When selecting a name for a PVT LTD registration in India, two
                factors must be considered:
                <br />
                The name should reflect the principal activity of the business.
              </p>
              <h4>Address of the Registered Office:</h4>
              <p>
                After the company formation in India process, the company must
                provide the permanent address of its registered office to the
                company registrar. Business operations occur in this office, and
                all relevant company documentation is maintained.
              </p>
              <h3>
                Company Registration Online Process - How to Register a Company
                in India?
              </h3>
              <p>
                Here is the four-step process on how to register PVT LTD company
                in India:
              </p>
              <h4>Step 1: Acquire a Digital Signature Certificate (DSC)</h4>
              <p>
                Every director and shareholder must secure a Digital Signature
                Certificate (DSC) issued by the Controller of Certification
                Agencies (CCA). This involves providing essential details such
                as passport-sized photos, PAN, Aadhaar Card, phone number, and
                email address. Foreign nationals should also furnish notarized
                and apostilled documents if applicable.
              </p>
              <h4>Step 2: Director Identification Number (DIN)</h4>
              <p>
                Obtain a Director Identification Number (DIN) if you intend to
                be a director in the company. DIN is essential for directors and
                needs to be provided in the registration form.
              </p>
              <h4>Step 3: Name Reservation for the Company (SPICe+ Part A)</h4>
              <p>
                Begin by completing the SPICe+ Part A form to secure a unique
                company name. This entails selecting the company type, class,
                category, and sub-category, specifying the primary division of
                industrial activity and offering a comprehensive business
                description. You'll need to propose two names for approval.
              </p>
              <h4>Step 4: Submission of Company Details (SPICe+ Part B)</h4>
              <p>
                Provide comprehensive information concerning capital, registered
                office address, subscriber and directors' details, stamp duty,
                PAN and TAN application, and necessary attachments for new
                company registration in india.{" "}
              </p>
              <h4>
                Step 5: Preparation and Submission of Incorporation Forms
                (SPICe+ MOA and AOA)
              </h4>
              <p>
                Draft the Memorandum of Association (MOA) and Articles of
                Association (AOA) containing crucial company details. Obtain
                digital signatures from subscribers and professionals before
                submitting these documents to the MCA for approval.
                <br />
                Additionally, file the AGILE-PRO-S form to register for GST,
                EPFO, ESIC, a bank account, and a shop and establishment license
                (which may be state-dependent).
              </p>
              <h4>Certificate of Incorporation</h4>
              <p>
                Upon successful document verification, the MCA will issue the
                Certificate of Incorporation (COI) with the Company
                Identification Number (CIN), PAN, and TAN.
                <br />
                These are the typical steps to be followed for PVT LTD company
                registration online in India successfully.
              </p>
              <h3>What Is a Company Registration Certificate?</h3>
              <p>
                A Company Registration Certificate, officially known as the
                Certificate of Incorporation, is a government-issued document
                that legally confirms the formation of a company in India under
                the Companies Act, 2013.
                <br />
                It is issued digitally by the Registrar of Companies (RoC) under
                the Ministry of Corporate Affairs (MCA) after successful
                approval of the incorporation documents, in accordance with
                Section 7(2) of the Companies Act.
                <br />
                This certificate affirms that your business is a distinct legal
                entity, capable of:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Owning assets
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Opening a bank account
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Applying for statutory
                      registrations (like GST)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Entering into legal
                      contracts
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Raising funds or
                      investments
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Think of it as your company’s legal birth
                certificate—authorizing it to operate within India’s regulatory
                framework.
              </p>
              <h4>What Does the Company Registration Certificate Contain?</h4>
              <p>
                The Certificate of Incorporation includes key details such as:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Company Name – as
                      approved during SPICe+ filing
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Corporate Identification
                      Number (CIN) – a unique ID issued by the MCA
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Date of Incorporation –
                      the official date of company formation
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> PAN and TAN – if applied
                      for during the registration process
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Company Structure –
                      e.g., Private Limited, LLP, OPC, etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Registered Office
                      Address – the company’s official location
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Documents Required for Online Company Registration in India:
              </h3>
              <p>
                To register a Private Limited Company using the SPICe+ (INC-32)
                form, the following documents must be submitted:
              </p>
              <h4>A. When the Director and Subscriber are Indian Nationals</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Affidavit by Subscribers:</strong> An affidavit on
                      stamp paper from each subscriber confirming their
                      intention to become shareholders of the company.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proof of Registered Office Address:</strong>
                      <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                        <li>
                          <i className="uil uil-check"></i>{" "}
                          <strong>If Rented/Leased: </strong> Rental agreement
                          and No Objection Certificate (NOC) from the property
                          owner.
                        </li>
                        <li>
                          <i className="uil uil-check"></i>{" "}
                          <strong>If Owned: </strong>Ownership document such as
                          Sale Deed.
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Utility Bills:</strong>A copy of the latest
                      electricity bill, water bill, or gas bill (not older than
                      2 months) for the registered office.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Name Approval Documents:</strong>
                      <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                        <li>
                          <i className="uil uil-check"></i> If the proposed name
                          includes restricted words or expressions requiring
                          prior approval from the Central Government, a copy of
                          the approval letter must be attached.
                        </li>
                        <li>
                          <i className="uil uil-check"></i> If the proposed name
                          is based on a registered trademark or a trademark
                          application, attach a copy of the trademark
                          registration certificate or the trademark application.
                        </li>
                        <li>
                          <i className="uil uil-check"></i>{" "}
                          <strong>Identity and Address Proof:</strong>
                        </li>
                        <li>
                          <i className="uil uil-check"></i> If any
                          subscriber/director does not have a Director
                          Identification Number (DIN), submit valid identity and
                          address proof.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                B. When the Director or Subscriber is a Foreign National
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Passport:</strong> A valid passport is mandatory.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Address Proof:</strong> Submit any one of the
                      following, provided it contains the current address:
                      <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                        <li>
                          <i className="uil uil-check"></i> Driving License
                        </li>
                        <li>
                          <i className="uil uil-check"></i> Residence Card
                        </li>
                        <li>
                          <i className="uil uil-check"></i> Bank Statement
                        </li>
                        <li>
                          <i className="uil uil-check"></i> Government-issued
                          identity document with address
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Time Required to Register a Private Limited Company
              </h3>
              <p>
                Registering a Private Limited Company in India typically takes 7
                to 10 working days. This includes approvals for:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Director Identification
                      Number (DIN)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Company Name
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Certificate of
                      Incorporation
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                With the introduction of the SPICe+ (INC-32) form, the process
                has been streamlined into a single online application with the
                Ministry of Corporate Affairs (MCA). This digital integration
                has significantly reduced registration time and improved
                efficiency—making it easier for startups and businesses to
                launch and expand operations in India.
              </p>
              <h3>Post-Registration Compliance</h3>
              <p>
                Following incorporation, adhering to post-registration company
                compliances is essential to streamline company operations and
                define the roles and responsibilities of directors and
                shareholders. This includes mandatory procedures after
                completing the process of how to register a company in India,{" "}
              </p>
              <h3>Register Your Company through LegallensIndia</h3>
              <p>
                LegallensIndia specializes in Private limited Company
                Registration services in India, providing comprehensive guidance
                and support throughout the registration process. Our team of
                professionals offers expert consultation tailored to your
                specific requirements and business goals for online company
                registration in India with affordable PVT LTD company
                registration fees.
                <br />
                Selecting the appropriate name for your company incorporation is
                critical, and LegallensIndia' experts will help you choose a
                unique and fitting name that aligns with ROC guidelines. We'll
                conduct a name availability search and facilitate the
                reservation of your chosen name, reflecting your business
                identity.
                <br />
                Compiling the necessary documentation for online company
                formation in India can be overwhelming, but our experts will
                handle this task efficiently. We will guide you in assembling
                all required documents, ensuring accuracy and compliance, to
                register new company properly.
                <br />
                For a PVT LTD registration, directors must obtain a Digital
                Signature Certificate and Director Identification Number (DIN).
                We will guide this process to ensure you possess the
                certifications for seamless registration.
                <br />
                By choosing LegallensIndia for your Company Registration needs,
                you can be confident that your company registration process will
                be managed professionally and effectively. We aim to simplify
                the process with reasonable PVT LTD company registration fees,
                allowing you to concentrate on your business objectives while we
                address the legal requirements. Embark on your entrepreneurial
                journey with assurance by registering your company through
                LegallensIndia.
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
