import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function IndianSubsidiary() {
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
                India Business Setup
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Setting up a subsidiary in India can be a transformative step
                for expanding your business operations and accessing one of the
                world's largest and most dynamic markets.
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
                { id: 3, title: "India Business Setup", url: "" },
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
                      <h5 className="card-title">India Business Setup</h5>
                      <p>
                        Setting up a subsidiary in India can be a transformative
                        step for expanding your business operations and
                        accessing one of the world's largest and most dynamic
                        markets.
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
                Indian Subsidiary Company Registration
              </h2>
              <p>
                Setting up a subsidiary in India can be a transformative step
                for expanding your business operations and accessing one of the
                world's largest and most dynamic markets. At LegallensIndia, we
                specialise in providing comprehensive and tailored services for
                incorporating a foreign subsidiary in India. Our team of experts
                is here to guide you through the complexities of Indian
                subsidiary registration, from understanding the legal
                requirements and navigating regulatory approvals to assisting
                with compliance and documentation on setting up an Indian
                subsidiary of foreign company. Partner with us for setting up a
                subsidiary company in India and unlock India's vast business
                potential to drive your company's growth and success.
              </p>
              <h3>Subsidiary Company</h3>

              <p>
                A subsidiary company is often referred to as a sister company,
                while the company that exercises control over it is known as the
                parent company or holding company. The parent company holds the
                authority to control the subsidiary company, either in part or
                entirely.
                <br />
                The registration process for a foreign subsidiary company in
                india is governed by the Companies Act of 2013. According to the
                Companies Act of 2013, a subsidiary company can be defined as a
                company in which a foreign corporate body or parent entity holds
                a minimum of 50% of the total share capital. In essence, the
                parent company exerts a significant influence and control over
                the subsidiary company.
              </p>
              <h3>Types of Subsidiaries in India</h3>
              <p>In India, there are two primary categories of subsidiaries:</p>
              <h4>Wholly-Owned Subsidiary</h4>
              <p>
                In a wholly-owned subsidiary, the parent company possesses 100%
                ownership of the subsidiary's shares. However, it's important to
                note that wholly-owned subsidiaries can only be established in
                sectors that permit 100% Foreign Direct Investment (FDI).
              </p>
              <h4>Subsidiary Company</h4>
              <p>
                In this category of subsidiary, the parent company owns 50% of
                the subsidiary's shares.
                <br />
                Before proceeding with establishing a foreign subsidiary company
                in india, obtaining approval from the Reserve Bank of India is a
                crucial prerequisite. This regulatory step ensures compliance
                with the country's foreign investment regulations and safeguards
                the interests of all stakeholders involved.
              </p>
              <h3>Advantages of Indian Subsidiary Company Registration</h3>
              <p>
                There are several compelling advantages associated with setting
                up a subsidiary company in India.
              </p>
              <h4>Entry into the Indian Market</h4>
              <p>
                India's competitive environment offers a plethora of investment
                opportunities that attract foreign entrepreneurs to establish
                their subsidiary companies in the country.
              </p>
              <h4>Foreign Direct Investment (FDI) in India</h4>
              <p>
                FDI involves investments by foreign companies in Indian private
                companies through share subscriptions or acquisitions. In 2020,
                the Indian government introduced a provision requiring prior
                approval for investments from countries sharing a border with
                India, making Indian subsidiary registration an attractive
                option for foreign investors.
              </p>
              <h4>Perpetual Succession</h4>
              <p>
                The concept of perpetual succession ensures that a company's
                existence remains intact regardless of events like changes in
                management, transfers of membership, or insolvency. The company
                continues to operate seamlessly, providing stability and
                continuity.
              </p>
              <h4>Limited Liability</h4>
              <p>
                Limited liability is a significant advantage that encourages
                individuals to opt for company formation over other business
                structures. This principle extends to Indian subsidiary
                registration companies, protecting the personal assets of
                shareholders and directors. The company bears responsibility for
                its debts to third parties, shielding the personal assets of its
                stakeholders.
              </p>
              <h4>Scope of Diversification</h4>
              <p>
                Establishing an Indian subsidiary company registration provides
                a strategic avenue for foreign businesses to expand their
                operations. This contributes to the growth and development of
                the Indian economy and introduces a wide range of goods and
                services, fostering healthy competition.
              </p>
              <h4>Separate Legal Identity</h4>
              <p>
                According to the Companies Act, a company is recognized as a
                distinct legal entity separate from its shareholders and
                directors. This legal status empowers the company to engage in
                agreements with other competent entities as an artificial legal
                person. It also grants the company the ability to initiate legal
                actions and respond to allegations before the judicial system in
                its own name, without direct involvement from its members or
                directors.
              </p>
              <h4>Property Ownership and Rental</h4>
              <p>
                A subsidiary company, being a legal entity, possesses the
                authority and right to purchase or rent properties in India for
                its business activities. To prevent potential conflicts among
                company members, it is advisable to acquire such properties in
                the name of the company itself, aligning with the principle of
                perpetual succession.
                <br />
                These are the major advantages of getting an Indian subsidiary
                registration and establishing a company.
              </p>
              <h3>
                Regulatory Authorities for Indian Subsidiary Company
                Registration
              </h3>
              <p>
                The Ministry of Corporate Affairs (MCA is responsible for
                setting and enforcing the rules and regulations governing
                company registration and compliance. Registrar of Companies
                (ROC) offices handle the procedures related to company
                incorporation, ensuring companies follows legal requirements.
                Reserve Bank of India (RBI) regulates foreign currency exchange
                aspects for foreign subsidiary company in india, ensuring
                adherence to financial regulations.
              </p>
              <h3>
                Requirements and Key Facts about Company Registration in India
              </h3>
              <p>
                Here are the essential elements to consider for the
                incorporation of Indian subsidiary of foreign company:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company Name:</strong>Your new business requires a
                      unique name that is distinct from existing businesses'
                      names or trademarks
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Shareholders:</strong>The parent company can hold
                      100% of the shares, or any combination of two foreign
                      nationals can be shareholders. It is not mandatory to have
                      an Indian resident as a shareholder.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Share Capital:</strong> India does not impose a
                      minimum capital requirement for company registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Directors:</strong> A minimum of two directors is
                      mandatory, with at least one director being an Indian
                      resident. Nominee directorship services can be provided if
                      required.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registered Address:</strong> Every company in
                      India must have a registered address that is officially
                      recorded in government records. Virtual office address
                      services are available to meet this requirement.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Annual General Meeting (AGM):</strong>According to
                      the Companies Act, every Indian company must conduct at
                      least one general meeting annually, in addition to two
                      board meetings.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company Secretary:</strong>It is mandatory to file
                      three secretarial returns each year, which are handled by
                      a company secretary. LegallensIndia can assist with this
                      requirement. A statutory auditor must also be appointed.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Taxation</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Professional fees,
                      including government fees for company registration
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Following incorporation,
                      companies are subject to a profit tax rate of
                      approximately 25.36%.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> GST (Goods and Services
                      Tax) is applicable to domestic sales, with monthly GST
                      returns and one annual tax return required.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Annual Compliance</h4>
              <p>
                India has unique compliance requirements, including mandatory
                statutory audits even for smaller companies.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Foreign subsidiary
                      company in india must appoint a statutory auditor and
                      submit annual filings.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Navigating these
                      requirements is crucial for establishing and operating a
                      company in India under the Companies Act 2013.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How to Register a Subsidiary Company in India?</h3>
              <p>
                Incorporation of foreign subsidiary in india involves several
                key steps and compliance requirements. Here's a step-by-step
                guide on how to register a subsidiary company in India:
              </p>
              <h4>Determine the Type of Company</h4>
              <p>
                Decide on the type of company you want to establish
                Incorporation of foreign subsidiary in india.
              </p>
              <h4>Obtain Digital Signature Certificate (DSC)</h4>
              <p>
                Since the registration process is conducted online, you must
                obtain a Digital Signature Certificate (DSC) for the proposed
                directors of the company. The DSC is used to sign the necessary
                documents during the registration process electronically.
              </p>
              <h4>Apply for a Director Identification Number (DIN)</h4>
              <p>
                The directors of the subsidiary company must obtain a Director
                Identification Number (DIN) from the Ministry of Corporate
                Affairs (MCA). This can be done by submitting the DIN
                application online.
              </p>
              <h4>Name Approval</h4>
              <p>
                Please choose a unique name for your subsidiary company and
                apply for its approval through the MCA's online portal. Ensure
                that the chosen name adheres to the naming guidelines provided
                by the MCA.
              </p>
              <h4>
                Draft Memorandum of Association (MoA) and Articles of
                Association (AoA)
              </h4>
              <p>
                MoA and AoA are legal documents that outline the company's
                objectives, rules, and regulations. Prepare these documents
                following the Companies Act 2013.
              </p>
              <h4>File Incorporation Documents</h4>
              <p>
                Once your chosen name is approved, you must file the
                incorporation documents, including the MoA, AoA, and other
                required forms, with the Registrar of Companies (ROC) through
                the MCA's online portal. The incorporation process is typically
                done using the SPICe+ form on the Ministry of Corporate Affairs
                portal.
              </p>
              <h4>Payment of Registration Fees</h4>
              <p>
                Pay the necessary registration fees to the ROC based on the
                authorized capital of the subsidiary company.
              </p>
              <h4>Obtain a Certificate of Incorporation (COI)</h4>
              <p>
                If all the submitted documents and information are in order, the
                ROC will issue a Certificate of Incorporation. This certificate
                officially confirms the indian subsidiary registration for a
                company.
              </p>
              <h4>
                Apply for Permanent Account Number (PAN) and Tax Registration
              </h4>
              <p>
                After obtaining the CoI, apply for a Permanent Account Number
                and a Tax Deduction and Collection Account Number from the
                Income Tax Department for the subsidiary company.
              </p>
              <h4>Open Bank Account</h4>
              <p>
                Finally, open a bank account in the name of the foreign
                subsidiary company in india.
                <br />
                Compliance with Other Regulations: In addition to the company
                registration process, ensure compliance with other relevant
                regulations.
              </p>
              <h4>Obtain a GST Number</h4>
              <p>
                Goods and Services Tax (GST) registration is required after
                completing the above steps, mainly if the company engages in
                various business activities. Every Indian company must apply for
                a GST number for taxation purposes.
              </p>
              <h4>Initiating Business Operations</h4>
              <p>
                Once the incorporation of a foreign subsidiary in India is
                completed, the company can commence its business operations.
                <br />
                These step-by-step guide provides you a thorough Indian
                subsidiary registration process.
              </p>
              <h3>
                Compliance Requirements for Indian Subsidiary Registration
              </h3>
              <p>
                To establish a legal and valid Indian subsidiary company
                registration, compliance with specific regulations is mandatory:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Foreign Exchange Management Act (FEMA):</strong>
                      Foreign companies based in India must adhere to foreign
                      exchange laws and regulations outlined in the Foreign
                      Exchange Management Act, 1999.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Companies Act, 2013:</strong>All Indian subsidiary
                      companies must comply with the Companies Act, 2013
                      provisions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reserve Bank of India (RBI) Compliances:</strong>{" "}
                      RBI imposes several foreign exchange management
                      compliances on Indian subsidiary companies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Income Tax Act, 1961:</strong> Indian subsidiaries
                      must file income tax returns every year. The corporate tax
                      rate in India is currently 25%.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Annual Returns:</strong> Companies are required to
                      file annual returns with the MCA and the Registrar of
                      Companies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        SEBI (Listing Obligations and Disclosure Regulations):
                      </strong>
                      If the subsidiary lists its securities on a stock
                      exchange, it must comply with SEBI regulations.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Taxation of Indian Subsidiary Companies</h3>
              <p>
                Indian subsidiary companies are subject to specific taxation
                policies:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Taxes are levied on all
                      income earned within or outside India, including dividends
                      from foreign subsidiaries.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Tax rates for foreign
                      subsidiaries in India include 50% for royalty received for
                      technical services from the government or any Indian
                      entity and 40% for other income.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A surcharge of 2% is
                      applied if the company's income falls between Rs. 1 Crore
                      and Rs. 10 Crores; for payments above Rs. 10 Crores, a 5%
                      surcharge is levied.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A 4% health and
                      education cess is added to the total tax amount.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Concessional tax rates apply to Indian subsidiaries in specific
                sectors, such as oil exploration, air transportation, and
                shipping businesses.
              </p>
              <h3>FDI in Private Limited Company</h3>
              <p>
                100% Foreign Direct Investment is allowed in most sectors. A few
                sectors, however, require prior approval from the Central
                Government for foreign investments. These sectors include
                private security agencies, civil aviation, mining, print media
                and broadcasting, satellite establishment and operation,
                pharmaceuticals, and trading of food products.
                <br />
                Foreign entities can establish wholly-owned Indian subsidiaries
                with 100% ownership, subject to specific qualifications.
              </p>
              <p className="mt-4">For a Private Limited Company</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> No minimum capital
                      requirement
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Minimum of 2 directors
                      (at least one must be a resident of India)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Minimum of 2
                      shareholders
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">For a Public Company</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Minimum of 3 directors
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> At least seven
                      shareholders
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                How LegallensIndia Can Assist with Indian Subsidiary Company
                Registration
              </h3>
              <p>
                Still unsure how to register a subsidiary company in India?
                LegallensIndia simplifies Indian subsidiary registration by
                offering comprehensive support at every crucial step. From
                selecting a unique name and obtaining essential Director
                Identification Numbers (DIN) and Digital Signature Certificates
                (DSC) to assisting with PAN and TAN applications and setting up
                a dedicated company bank account, we streamline the entire
                registration process.
                <br />
                Our expert team ensures compliance with regulatory requirements,
                including the Foreign Exchange Management Act (FEMA), Companies
                Act, 2013, Reserve Bank of India (RBI) compliances, and the
                Income Tax Act, 1961.
                <br />
                We facilitate filing annual returns, guide you through SEBI
                (Listing Obligations and Disclosure Regulations) compliance, and
                provide tax services to navigate India's taxation policies. With
                LegallensIndia as your partner, you can initiate and grow your
                Indian subsidiary business confidently and efficiently.
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
