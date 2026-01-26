import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function OnePersonCompany() {
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
                One-Person Company (OPC) Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Registering a One-Person Company (OPC) is favored among
                entrepreneurs who desire limited liability and a distinct legal
                identity.
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
                { id: 2, title: "Proprietorship", url: "StartUp" },
                { id: 3, title: "OPC Registration", url: "" },
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
                      <h5 className="card-title">OPC Registration</h5>
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
                One-Person Company (OPC) Registration
              </h2>

              <p>
                Registering a One-Person Company (OPC) is favored among
                entrepreneurs who desire limited liability and a distinct legal
                identity. OPC is a unique business structure that permits a
                single person to function as a company, giving them the benefits
                of limited liability while retaining complete control. In an 1
                person company, the individual serves as both the director and
                shareholder, merging the advantages of a sole proprietorship
                with the legal protection of a private limited company.
                <br />
                At LegallensIndia, we specialize in simplifying the OPC
                registration process, ensuring that entrepreneurs can smoothly
                navigate the complexities of legal formalities with reasonable
                One person company registration fees. Our experienced team is
                dedicated to assisting you at every step to register one person
                company, from document preparation to filing, we offer expert
                guidance to help you make informed decisions regarding your One
                Person Company Registration.
                <br />
                Contact us now and take the first step toward building your
                entrepreneurial dream!
              </p>
              <h3>Introduction to One Person Company (OPC)</h3>
              <p>
                One Person Company (OPC) registration in India was introduced as
                a concept under the Companies Act of 2013, enabling a single
                individual to establish a company and enjoy the combined
                benefits of both a sole proprietorship and a traditional company
                structure. This concept of 1 person company became available
                with the implementation of the Companies Act in 2013.
                <br />
                The primary objective behind creating one-person companies was
                to foster entrepreneurship and encourage the formalization of
                Micro, Small, and Medium Enterprises (MSMEs). According to
                Section 2(62) of the Companies Act 2013, a company can be formed
                with just one director and one member, and interestingly, these
                roles can be held by the same individual. Simply, OPC Company
                registration allows a single person to set up a limited
                liability company in India. The following describes the
                eligibility and procedure to register one person company.
              </p>
              <h3>Eligibility Criteria to register One Person Company</h3>
              <p>
                Before you go ahead and engage in single person company
                registration process, it's crucial to understand the specific
                eligibility criteria and limitations that govern its formation.
                The Companies Act sets out clear requirements that must be met
                to ensure that the individual promoting the 1 person company is
                eligible to do so.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Natural Person, Indian Citizen & NRI:</strong> As
                      per Companies (Incorporation) 2nd Amendment Rules 2021,
                      only a natural person who is an Indian citizen whether
                      resident in India or otherwise shall be eligible to
                      incorporate a One Person Company. Note: Resident in India”
                      means a person who has stayed in India for a period of not
                      less than one hundred and twenty days during the
                      immediately preceding financial year.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimum Authorized Capital:</strong> The OPC must
                      have a minimum authorized capital of Rs 1 00,000, the
                      amount stated in the company's capital clause during the
                      OPC Company registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nominee Appointment:</strong> The promoter must
                      appoint a nominee during the OPC's incorporation. This
                      nominee would become a member of the OPC in the event of
                      the promoter's death or incapacity.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Restrictions on Certain Businesses:</strong>{" "}
                      Businesses involved in financial activities such as
                      banking, insurance, or investments are not eligible for
                      OPC company registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Conversion to Private Limited Company:</strong> If
                      the OPC's paid-up share capital exceeds 50 lakhs or its
                      average annual turnover surpasses 2 Crores, it must be
                      converted into a private limited company to comply with
                      the regulatory requirements for larger companies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> It's worth noting that
                      an individual can establish only one OPC, and an OPC
                      cannot have a minor as its member. In the following
                      section, you'll find advantages and disadvantages one will
                      get as a result of OPC registration online.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Advantages of One Person Company (OPC)</h3>
              <p>Advantages of 1 person company include the following:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Status:</strong> An OPC obtains a separate
                      legal entity status, safeguarding the individual who
                      founded it from personal liability for company losses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Easy Fundraising:</strong> Being a private
                      company, OPCs find it easier to raise funds through
                      venture capitalists, angel investors, and banks compared
                      to proprietorship firms.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reduced Compliance:</strong> OPCs enjoy certain
                      exemptions from compliance requirements under the
                      Companies Act, 2013, simplifying administrative
                      obligations.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Simple Incorporation:</strong> OPCs can be
                      established with just one member and one nominee, with the
                      member also serving as the director. No minimum paid-up
                      capital requirement simplifies the incorporation process.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Efficient Management:</strong> With a single
                      person managing the OPC, decision-making is swift, leading
                      to efficient company management without conflicts or
                      delays.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Perpetual Succession:</strong> OPCs maintain
                      perpetual succession, ensuring the company's continuity
                      even with only one member.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                In conclusion, OPCs offer several advantages, including limited
                liability, ease of fundraising, reduced compliance,
                straightforward single person company registration and
                management, and perpetual succession.
              </p>
              <h3>Disadvantages of 1 Person Company</h3>
              <p>
                While OPCs offer advantages, there are also limitations for
                single person company registration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Suitable for Small Businesses:</strong> OPCs are
                      primarily suitable for small-scale businesses as they can
                      only have one member. This limits their ability to raise
                      additional capital as the business expands.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Restriction on Business Activities:</strong> OPCs
                      are restricted from engaging in certain activities, such
                      as non-banking financial investments and charitable
                      objectives. Hence, the companies with these business
                      activities are not eligible for OPC company registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ownership and Management:</strong> There's a lack
                      of clear distinction between ownership and management in
                      OPCs, as the sole member can also be the director. This
                      can potentially lead to ethical concerns or conflicts of
                      interest.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Required Documents for OPC Registration Online
              </h3>
              <p>
                Several essential documents must be prepared and submitted to
                the Registrar of Companies (ROC) as part of the Single Person
                Company registration process:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Memorandum of
                      Association (MoA)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Articles of Association
                      (AoA)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The nominee's consent,
                      along with their PAN card and Aadhaar card, must be
                      submitted via Form INC-3.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Proof of Registered
                      Office
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The proposed director
                      should furnish a declaration in Form INC-9 and their
                      consent in Form DIR-2.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A declaration by a
                      qualified professional certifying that all necessary legal
                      compliances have been adhered to.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Keep these required documents ready for OPC company
                registration.
              </p>
              <h3>Registration of One Person Company (OPC) in India</h3>
              <p>
                In India, OPC company registration is facilitated through the
                SPICe+ (Simplified Proforma for Incorporating Company
                Electronically Plus) form, which has replaced the previous
                application forms for company incorporation.
                <br />
                The OPC Registration process consists of two parts:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part A:</strong>{" "}
                      This initial section of the SPICe+ form is dedicated to
                      securing approval for the desired company name and
                      applying for the Director Identification Number (DIN) or
                      Permanent Account Number (PAN) for the proposed director.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> <strong>Part B:</strong>{" "}
                      The subsequent segment, known as Part B, involves
                      furnishing incorporation-related details. Here, essential
                      information such as the registered office address of the
                      OPC, details about share capital, particulars of the
                      director, and information about the shareholder is
                      provided.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Here are the steps for an single person company registration.
              </p>
              <h4>Step 1: Obtain a Digital Signature Certificate (DSC)</h4>
              <p>
                Secure a Digital Signature Certificate (DSC) for the intended
                director of the OPC. The DSC is utilized for electronically
                signing crucial documents.
              </p>
              <h4>Step 2: Obtain Director Identification Number (DIN)</h4>
              <p>
                Acquire a Director Identification Number (DIN) for the proposed
                director from the Ministry of Corporate Affairs (MCA).
              </p>
              <h4>Step 3: Name Reservation</h4>
              <p>
                Apply for name reservation through the MCA portal using Form
                SPICe+ (Part A). Ensure that the chosen name for your company is
                distinct and does not resemble any existing company or
                trademark.
              </p>
              <h4>Step 4: Prepare MOA and AOA</h4>
              <p>
                Draft the Memorandum of Association (MOA) and Articles of
                Association (AOA) clearly to register one person company. These
                documents define the company's objectives and internal rules.
              </p>
              <h4>Step 5: File the Forms</h4>
              <p>
                File the necessary forms with the MCA to register One Person
                Company. Attach the relevant documents to the SPICe+ form,
                including MOA, AOA, declarations, proof of the registered
                office, nominee appointment, and other documents as required by
                the MCA.
              </p>
              <h4>Step 6: Certificate of Incorporation</h4>
              <p>
                Upon approval by the ROC and verification of compliance
                requirements, the ROC will issue a Certificate of Incorporation,
                signifying the successful registration of your One Person
                Company. Notably, the PAN number (Permanent Account Number) and
                TAN (Tax Deduction and Collection Account Number) are generated
                automatically during the incorporation process, eliminating the
                need for separate applications.
                <br />
                With this Certificate of Incorporation, your OPC is officially
                recognized and ready to commence its operations in India.
              </p>
              <h4>Why LegallensIndia for OPC Registration Online?</h4>
              <p>
                LegallensIndia is the ideal partner for OPC registration online
                for several compelling reasons. With years of expertise in
                company registration and a deep understanding of the regulatory
                landscape, LegallensIndia simplifies the often complex OPC
                registration process. Our one person company registration fees
                are designed to be affordable while providing exceptional value,
                ensuring a seamless experience from start to finish.
                <br />
                We offer expert guidance, from name reservation to document
                preparation and submission for effortless OPC company
                registration. Our commitment to accuracy and compliance
                guarantees that your OPC registration process adheres to all
                legal requirements, while our dedicated support team is readily
                available to address any queries or concerns you may have. With
                our transparent one person company registration fees, you can
                trust LegallensIndia to deliver reliable and professional
                service tailored to your needs.
              </p>
              <h5>
                Get started now and embark on your entrepreneurial journey with
                confidence!
              </h5>
              <h3>Post-Incorporation Formalities for OPC</h3>
              <p>
                Following the successful incorporation of a One Person Company
                (OPC), specific compliance formalities must be adhered to, akin
                to those applicable to private limited companies. Our experts
                are ready to assist you in fulfilling OPC compliance
                requirements, ensuring that your business remains in full legal
                compliance.
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
