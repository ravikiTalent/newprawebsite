"use client";
import { Fragment, useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";
// CART CONTEXT
import { useCart } from "context/CartContext";

// Product packages
const productPackages = [
  {
    id: "gst-software-registration",
    name: "GST Software & Registration",
    title: "Proprietorship",
    image: "/img/photos/a3.jpg",
  },
  {
    id: "gst-filing-6-months",
    name: "GST Filing & Registration - 6 Months",
    title: "Proprietorship",
    image: "/img/photos/a3.jpg",
  },
  {
    id: "gst-filing-12-months",
    name: "GST Filing & Registration - 12 Months",
    title: "Proprietorship",
    image: "/img/photos/a3.jpg",
  },
];

export default function StartupIndia() {
  const [selectedPackage, setSelectedPackage] = useState(productPackages[0]);
  const { cartList } = useCart();

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const packageId = e.target.value;
    const selected = productPackages.find((pkg) => pkg.id === packageId);
    if (selected) {
      setSelectedPackage(selected);
    }
  };

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
                Startup India Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Startup India is a flagship initiative launched by the
                Government of India in 2016 to promote innovation, support
                emerging businesses, and create a robust startup ecosystem.
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
                { id: 3, title: "Startup India", url: "" },
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
                      <h5 className="card-title">Startup India</h5>
                      <p>
                        Easily get Startup India registration through DPIIT.
                      </p>
                      <div className="form-select-wrapper mb-4">
                        <select
                          id="GSTSelction"
                          className="form-select"
                          aria-label="Select package"
                          value={selectedPackage.id}
                          onChange={handlePackageChange}
                        >
                          {productPackages.map((pkg) => (
                            <option key={pkg.id} value={pkg.id}>
                              {pkg.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <Pricing1 
                        roundShape 
                        selectedPackage={selectedPackage}
                      />
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
                        {cartList.length > 0 ? (
                          cartList.map((item) => (
                            <CartListItem02 key={item.id} {...item} />
                          ))
                        ) : (
                          <tr>
                            <td className="text-center py-4">
                              <p className="text-muted">Your cart is empty</p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <h5 className="card-title">{selectedPackage.title}</h5>
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
                Startup India Registration 2025 – Get Your DPIIT Certificate
              </h2>
              <p>
                Startup India is a flagship initiative launched by the
                Government of India in 2016 to promote innovation, support
                emerging businesses, and create a robust startup ecosystem.
                Through DPIIT recognition, eligible startups can access a range
                of benefits, including tax exemptions, funding support, and
                easier compliance.
                <br />
                At LegallensIndia, we specialise in assisting startups with
                end-to-end Startup India Registration, helping founders obtain
                DPIIT recognition quickly and efficiently. From eligibility
                checks to document filing, our experts ensure a smooth and
                reliable registration process, so you can focus on building your
                business.
              </p>
              <h3>What is Startup India?</h3>

              <p>
                Startup India is a flagship initiative launched by the
                Government of India on January 16, 2016, with the goal of
                promoting a culture of innovation and entrepreneurship across
                the country. The initiative aims to build a strong, inclusive
                startup ecosystem that empowers entrepreneurs and transforms
                India into a nation of job creators rather than job seekers.
                <br />
                Through Startup India, the government has introduced various
                programs and policies to support startups, simplify regulatory
                processes, improve access to funding, and encourage
                innovation-led growth. These efforts are designed to reduce
                barriers for early-stage companies and foster long-term success
                in both domestic and global markets.
                <br />
                Administered by DPIIT, Government of India
                <br />
                The Startup India initiative is overseen by the Department for
                Promotion of Industry and Internal Trade (DPIIT), under the
                Ministry of Commerce and Industry. DPIIT is responsible for:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Evaluating and
                      recognising startups based on defined eligibility criteria
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Issuing Startup
                      Recognition Certificates
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Monitoring benefits such
                      as tax exemptions and fast-track compliance
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Coordinating with other
                      ministries and departments to ensure policy alignment
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Continuously updating
                      guidelines to create a supportive ecosystem for innovation
                      and growth
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                With DPIIT at the helm, Startup India serves as a catalyst for
                empowering startups, fueling economic development, and
                positioning India as a global innovation hub.{" "}
              </p>
              <h3>Objectives of Startup India</h3>
              <p>
                The Startup India initiative was launched with the following key
                objectives to promote and nurture entrepreneurship in India:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Promote Innovation:</strong>Support startups that
                      offer unique products, services, or business models to
                      drive innovation and competitiveness.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Simplify Regulations:</strong>Streamline legal,
                      tax, and compliance procedures to make it easier for
                      startups to launch and operate in India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Facilitate Funding Access:</strong>Improve access
                      to funding through government-backed schemes, venture
                      capital, angel investors, and credit facilities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Encourage Job Creation:</strong>Enable startups to
                      create employment opportunities by empowering
                      entrepreneurs to build scalable and sustainable
                      businesses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Foster a Startup-Friendly Ecosystem:</strong>
                      Collaborate with incubators, accelerators, educational
                      institutions, and industry bodies to build a strong
                      support network for startups.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Eligibility Criteria For Startup India Registration 2025</h3>
              <p>
                Under the Startup India scheme, eligible companies can be
                recognised as Startups by the Department for Promotion of
                Industry and Internal Trade (DPIIT), which is part of the
                Ministry of Commerce and Industry, Government of India.
                <br />
                To obtain Startup India registration for your business and get
                the listed benefits, the following eligibility criteria must be
                met:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Structure:</strong>The startup must be
                      incorporated as a private limited company, a limited
                      liability partnership (LLP), or a partnership firm.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Age of the Startup:</strong>The startup should be
                      at most ten years from its incorporation. However,
                      startups in the biotechnology sector are allowed up to 15
                      years.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Annual Revenue:</strong> The startup's yearly
                      turnover must not exceed INR 100 crores in any fiscal year
                      since its inception.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Innovative Approach:</strong> The startup must aim
                      to innovate, develop, deploy, or commercialise new
                      products, processes, or services driven by technology or
                      intellectual property.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>DPIIT Recognition:</strong> The startup must
                      acquire a Startup India certificate from the Department
                      for Promotion of Industry and Internal Trade (DPIIT).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Compliance:</strong>The startup must comply
                      with all relevant legal requirements, such as the
                      Companies Act, Income Tax Act, and Goods and Services Tax
                      Act. Additionally, it must maintain a bank account in the
                      business's name and provide these details during DPIIT
                      registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Job Creation:</strong>The startup should either
                      contribute to job creation or have the potential to do so
                      in the future, aligning with the Startup India scheme’s
                      objective to stimulate employment within the country.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who Is Not Eligible for Startup India Recognition?</h3>
              <p>
                Not all entities qualify for DPIIT recognition under the Startup
                India initiative. The following are not eligible:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Sole Proprietorships:</strong>Individual-run
                      businesses without a company or LLP structure are not
                      eligible.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unregistered Partnership Firms:</strong>Firms
                      formed through notarised partnership deeds, but not
                      registered under the Partnership Act, do not qualify.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Startups Exceeding Turnover Limits:</strong>{" "}
                      Entities that have exceeded the INR 100 crore turnover
                      limit in any financial year are not eligible.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Companies Older Than 10 Years:</strong> Businesses
                      incorporated over 10 years ago are excluded from Startup
                      India benefits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reconstructed or Split Ventures:</strong>
                      Businesses created by splitting up or restructuring an
                      existing company are ineligible.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Lack of Innovation or Scalability:</strong>
                      Entities that do not offer a product, service, or business
                      model with innovation, potential for employment
                      generation, or scalability will not be recognised.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Documents Required for Startup India Certificate</h3>
              <p>
                To apply for a Startup India certificate and obtain DPIIT
                recognition for your startup business, you are required to have
                the following documents:
              </p>
              <h4>MoA & AoA or Partnership Deed</h4>
              <p>
                The Memorandum of Association (MoA) and Articles of Association
                (AoA) are foundational documents outlining a company’s
                objectives, scope, and internal governance; for partnership
                firms, the Partnership Deed serves a similar purpose by
                detailing the terms and structure of the partnership.
              </p>
              <h4>Certificate of Incorporation</h4>
              <p>
                This is the official document issued by the Registrar of
                Companies that legally establishes your business as a registered
                entity and confirms its existence.
              </p>
              <h4>PAN Card of Organisation</h4>
              <p>
                A Permanent Account Number (PAN) card issued in the name of the
                company or partnership firm serves as a unique identifier for
                tax and financial transactions.
              </p>
              <h4>PAN Card of Authorised Person</h4>
              <p>
                The PAN card of the director, partner, or authorised signatory
                is used to verify their identity and facilitate compliance with
                statutory requirements.
              </p>
              <h4>Aadhaar of the Authorised Person</h4>
              <p>
                The Aadhaar card of the director, partner, or authorised
                signatory is required for identity verification and
                authentication during the registration process.
              </p>
              <h4>Business Address Proof</h4>
              <p>
                A document that verifies the registered office address of the
                business, such as a utility bill, rent agreement, or property
                ownership document.
              </p>
              <h4>Bank Statement of the Company</h4>
              <p>
                A recent bank statement in the name of the company or firm is
                used to confirm the existence and financial activity of the
                business entity.
              </p>
              <h4>Photograph of Directors</h4>
              <p>
                Passport-sized photographs of all directors or partners are
                required for identification and official records as part of the
                application process.
              </p>
              <h3>Details Required for Startup India Application </h3>
              <p>
                You are required to provide the following details to apply for
                Startup India registration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Name of Startup:</strong>Enter the official name
                      of your business or startup as registered.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Type of Organisation:</strong>Select your business
                      structure - Private Limited Company, LLP, or Partnership
                      Firm.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Company PAN Number:</strong>Provide the Permanent
                      Account Number issued in your company's name.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Email ID:</strong> Enter a valid and active
                      business email address for correspondence.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Mobile Number:</strong> Provide the mobile number
                      of the authorised representative for OTP verification and
                      updates.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Name of Authorised Person:</strong>Mention the
                      full name of the individual authorised to represent the
                      startup.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Personal PAN Number:</strong>Enter the PAN of the
                      authorised person for identification purposes.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Address of Business:</strong>Fill in the complete
                      official address where your business operates.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>City:</strong>
                      Specify the city of your business location.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>State:</strong>
                      Select the relevant state from the list provided.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Pincode:</strong>Enter the postal code
                      corresponding to your business address.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Does your Company Have a GST Number:</strong>
                      Indicate whether your business is GST-registered by
                      selecting Yes or No.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Step-by-Step Process of Startup India Registration 2025</h3>
              <p>
                Here’s a step-by-step process on how to complete Startup India
                registration for your startup and obtain the Startup India
                Certificate:{" "}
              </p>
              <h4>Step 1: Incorporate Your Business</h4>
              <p>
                Begin by incorporating your business. You can choose from
                several structures, such as a Private Limited Company,
                Partnership Firm, or Limited Liability Partnership (LLP). This
                involves submitting a registration application along with the
                necessary documents and fees to the appropriate authority.{" "}
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Private Limited Company or LLP:</strong>File your
                      registration application with the Registrar of Companies
                      (ROC)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Partnership Firm:</strong>Submit your registration
                      application to the Registrar of Firms.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                For both types of registration, you will need to obtain a
                Startup Certificate of Incorporation or Partnership
                registration, confirming the legal formation of your business.
                The experts at LegallensIndia can help you register your company
                easily in India.{" "}
              </p>
              <h4>Step 2: Register with Startup India</h4>
              <p>
                After incorporating your business, the next step is to register
                it as a startup under the Startup India scheme. The registration
                process is completely online and easy to follow.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Visit the official
                      Startup India website and click on the ‘Register’ button.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Fill in your name, email
                      ID, mobile number, and password, then click on ‘Register’
                      to create your account.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> You’ll receive an OTP on
                      your registered email. Enter the OTP and proceed to fill
                      in other required details such as:
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Type of user
                      (individual, startup, or incubator)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Name of your startup
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Stage of your business
                      (idea, validation, early traction, etc.)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Click on the ‘Submit’
                      button once all information is filled in. This will create
                      your Startup India profile.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Step 3: Obtain DPIIT Registration</h4>
              <p>
                Once your profile on the Startup India website is set up, the
                next essential step is to secure recognition from the Department
                for Promotion of Industry and Internal Trade (DPIIT). As
                mentioned earlier, DPIIT recognition grants startups numerous
                advantages.{" "}
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> To apply for DPIIT
                      Recognition, sign in with your registered profile
                      credentials on the Startup India website and navigate to
                      the ‘Apply for DPIIT Recognition’ option located under the
                      ‘Recognition’ tab. On the subsequent page, select either
                      ‘Apply as Company or LLP’ or ‘Apply as Partnership Firm.’
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If you choose ‘Apply for
                      Company or LLP,’ you will be directed to the National
                      Single Window System (NSWS) website. Here, companies and
                      LLPs must register and add the ‘Registration as a Startup’
                      form to begin the DPIIT registration process.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Successfully completing this step will officially recognise your
                startup under DPIIT, enabling access to the comprehensive
                benefits and support provided by the Startup India initiative.
              </p>
              <h4>Step 4: Obtain Your Startup India Recognition Number </h4>
              <p>
                Once you apply for registration, you will immediately receive a
                DPIIT recognition number. This serves as a preliminary
                acknowledgement of your application. The official Startup India
                Certificate of Registration will be issued after the relevant
                authority thoroughly reviews all your submitted documents. This
                Startup India certificate is your formal recognition under the
                Startup India initiative, confirming that your startup meets all
                the necessary compliance and eligibility criteria.
                <br />
                After receiving the DPIIT certificate, you can apply for various
                benefits offered under the Startup India scheme, such as tax
                exemptions (under the Income Tax Act), patent filing, and IPR
                services. LegallensIndia makes this process easier for your new
                business with reasonable startup India registration fees.
              </p>
              <h3>Startup India Certification Benefits</h3>
              <p>
                Getting DPIIT recognition under the Startup India initiative
                offers a wide range of advantages that support growth,
                compliance ease, and access to funding. Here’s a detailed
                overview of the key benefits:
              </p>
              <h4>1. Tax Exemption under Section 80-IAC</h4>
              <p>
                Startups can avail 100% income tax exemption for any three
                consecutive financial years within their first ten years from
                incorporation. This is applicable to Private Limited Companies
                and LLPs incorporated between April 1, 2016, and April 1, 2021.
              </p>
              <h4>2. Angel Tax Exemption</h4>
              <p>
                Recognised startups are exempt from paying angel tax under
                Section 56(2)(viib), provided their paid-up share capital and
                premium do not exceed ?25 crore post the proposed investment,
                and subject to certain asset-based restrictions.
              </p>
              <h4>3. Rebate on Trademark and Patent Fees</h4>
              <p>
                Startups receive up to 80% rebate on patent filing fees and 50%
                rebate on trademark registration. The government also covers the
                cost of facilitators, significantly reducing IP protection
                expenses.
              </p>
              <h4>4. Self-Certification of Compliance</h4>
              <p>
                Startups can self-certify compliance under six labour laws and
                three environmental laws for a period of five years, reducing
                the need for inspections and simplifying operations during the
                early growth stages.
              </p>
              <h4>5. Access to Government Tenders</h4>
              <p>
                DPIIT-recognised startups can participate in government tenders
                without the need to show prior experience or turnover. They are
                also exempt from submitting Earnest Money Deposits (EMD), easing
                their entry into public procurement.
              </p>
              <h4>6. Networking & Exposure Opportunities</h4>
              <p>
                Recognised startups get access to government-organised summits,
                startup fests, and networking events. They can also list
                products and services on the Government e-Marketplace (GeM) and
                connect directly with public sector buyers.
              </p>
              <h4>7. Fund of Funds for Startups (FFS)</h4>
              <p>
                Startups can access funding support through a ?10,000 crore
                government-backed fund managed by SIDBI. Funding is disbursed
                through SEBI-registered venture capital firms under this scheme.
              </p>
              <h4>8. Fast-Track Exit Under IBC</h4>
              <p>
                Eligible startups can close their operations within 90 days
                under the fast-track exit route of the Insolvency and Bankruptcy
                Code, 2016—helpful for entities with simple debt structures or
                minimal liabilities.
              </p>
              <h3>Timeline for Startup India Registration</h3>
              <p>
                Understanding the registration timeline helps startups plan
                ahead and avoid unnecessary delays. While the Department for
                Promotion of Industry and Internal Trade (DPIIT) aims to process
                applications promptly, actual approval times may vary based on
                documentation and application clarity.
              </p>
              <h4>Average Approval Time</h4>
              <p>
                Most DPIIT recognition applications are processed within 7 to 15
                working days from the date of submission, provided that:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}All required documents are correctly uploaded
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}The startup clearly meets the eligibility criteria
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}The business description demonstrates innovation and scalability
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">DPIIT Review Process</h4>
              <p>
                If an application lacks detail—particularly in explaining the
                innovation or uniqueness of the business model—DPIIT may request
                additional information or revisions. This can extend the
                approval timeline.
                <br />
                To ensure a faster process, LegallensIndia helps you prepare a
                complete and compelling application, reducing the chances of
                delay or rejection.
              </p>
              <h3>Startup India Registration Costs</h3>
              <p>
                Startup India Registration is completely free of cost when done
                through the official DPIIT portal. However, to be eligible, your
                business must be a registered entity such as a Private Limited
                Company, LLP, or Partnership Firm. While there are no government
                fees for the DPIIT recognition itself, startups may incur costs
                for company registration, document preparation, and professional
                assistance. At LegallensIndia, our pricing is clear and
                competitive. Contact us today to get a customised quote based on
                your business needs and startup stage.
              </p>
              <h3>Common Reasons for Startup India Application Rejection</h3>
              <p>
                Even if a startup meets the basic eligibility criteria,
                applications are frequently rejected due to avoidable errors or
                oversights. Understanding these common pitfalls can
                significantly improve your chances of obtaining DPIIT
                recognition.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Lack of Innovation or Value Proposition:</strong>Applications that do not clearly demonstrate innovation, technology-driven solutions, or how the business addresses a real problem are often rejected.</li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Weak or Generic Business Description:</strong>A vague or poorly written description of the business model, target audience, or operational approach reduces credibility and fails to impress evaluators.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ineligible Business Type or Age:</strong> Startups that are: <br/>More than 10 years old<br/>
Registered as sole proprietorships<br/>
Have exceeded ?100 crore turnover<br/>
are automatically disqualified under the scheme.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}Failure to upload key documents—such as the Certificate of Incorporation, pitch deck, or founder details—can lead to immediate rejection.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Formed Through Business Restructuring:</strong> Entities formed by splitting up or restructuring existing companies—without a clear element of innovation or differentiation—are not eligible for recognition.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                At LegallensIndia, we help ensure your application is complete,
                compliant, and compelling—minimising rejection risks and
                speeding up approval.
              </p>
              <h3>Revocation of Startup India Registration</h3>
              <p>
                DPIIT recognition under the Startup India scheme can be revoked
                if certain conditions are violated. Common reasons for
                cancellation include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}If the startup exceeds ?100 crore in turnover or crosses the 10-year age limit from incorporation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>False Declarations:</strong>Submitting incorrect or misleading information during the registration process.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Lack of Innovation:</strong> Businesses that do not demonstrate innovation, uniqueness, or improvement over existing solutions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regulatory Non-Compliance:</strong> Failing to comply with tax laws or other statutory obligations.
                    </li>                    
                  </ul>
                </div>
              </div>
              <p>
                To avoid revocation, ensure your application is accurate and
                your startup continues to meet all DPIIT criteria. LegallensIndia
                can help you stay compliant throughout your startup journey.
              </p>
              <h3>Choose LegallensIndia for Your Startup India Registration!</h3>
              <p>
                Choose LegallensIndia for expert support in obtaining your Startup
                India Certificate! Our team is dedicated to guiding you through
                every step of the startup india registration process, from
                company registration to securing your DPIIT certificate. We
                provide comprehensive assistance to help you meet compliance
                requirements with affordable startup India registration fees and
                pave the way for your startup’s success and growth.{" "}
              </p>
              <h5>
                Contact our Experts today and take the first step towards your
                startup success!
              </h5>
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
