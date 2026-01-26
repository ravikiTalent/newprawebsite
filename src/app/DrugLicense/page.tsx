import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DrugLicense() {
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
              <h1 className="display-1 text-white mb-3">Drug License</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Securing a drug licence is a fundamental step for entities wishing to engage in the pharmaceutical industry within India, encompassing activities from manufacturing to selling drugs and cosmetics.
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
                { id: 3, title: "Drug License Registration", url: "" },
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
                      <h5 className="card-title">Drug License</h5>
                      <p>Securing a drug licence is a fundamental step for entities wishing to engage in the pharmaceutical industry within India, encompassing activities from manufacturing to selling drugs and cosmetics.
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

              <h2 className="display-4 mb-3">Drug License</h2>
              <p>
                Securing a drug licence is a fundamental step for entities
                wishing to engage in the pharmaceutical industry within India,
                encompassing activities from manufacturing to selling drugs and
                cosmetics. This license is a safeguard, ensuring that all
                pharmaceutical practices adhere to the rigorous quality and
                safety standards set forth by the Drugs and Cosmetics Act. Given
                the complexity of the application process and the importance of
                adherence to these regulations, navigating the intricacies of
                obtaining a drug license can be daunting.
              </p>
              <p>
                LegallensIndia offers expert guidance and support for the Drug
                License registration Process and obtaining the licence. With our
                deep understanding of the regulatory landscape and a
                comprehensive approach to handling applications, LegallensIndia
                helps demystify the process, ensuring that businesses and
                individuals can secure their pharma licence efficiently while
                fully complying with the legal mandates.
              </p>
              <h3>What is a Drug Licence?</h3>
              <p>
                In India, businesses must have the right licenses for their
                operations, including those dealing drugs and cosmetics. A drug
                licence issued by the government requires firms to legally
                manufacture, distribute, or sell pharmaceutical and cosmetic
                products. These licenses are specific to each region, meaning a
                separate permit is needed for operations in different states.
                Moreover, a distinct pharma license is required for each
                location if a business operates in multiple locations within a
                single state. Selling pharmaceutical products which do not have
                proper drug licenses leads to the cancellation of a pharmacy
                license. Drug licence verification can be done by the officials
                to ensure the safety. However, there's an exception for mobile
                vendors.
              </p>
              <h3>Meaning of Drugs</h3>
              <p>
                A drug licence is an authorisation issued by regulatory bodies
                that allows a business to engage in drug-related activities.
                Obtaining a drug licence is a prerequisite for initiating any
                drug-related business operations. The definition of a "drug" is
                provided in section 3(b) of The Drugs And Cosmetics Act, 1940,
                and encompasses.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> All medications and
                      treatments used for diagnosing, preventing, treating, or
                      alleviating diseases or disorders in humans or animals.
                      This also covers substances applied to the human body to
                      deter insects such as mosquitoes.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Every component
                      constitutes a drug, including empty gelatin capsules.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Various medical devices.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Therefore, the term "drug" encompasses all forms of medicines,
                including Allopathic, Homeopathic, Ayurvedic, Siddha, and Unani.
                For licensing purposes for pharma licence, these medicines can
                be categorised into two main groups.
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Drugs Regulated By Drug Controller</strong>
                    </th>
                    <th className="border">
                      <strong>Drugs Regulated By Drug Controller</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">
                      Medicines are Licensed by the Drug Controlling Authority
                      (Functioning Under the Ministry Of Health). Following are
                      the examples
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>
                              <i className="uil uil-check"></i> Allopathic Drugs
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Veterinary
                              Medicines
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Medical Devices
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Homeopathy
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td className="border">
                      Aayush Drug Control Cell is one of the verticals of the
                      Central Drug Standard Control Organisation (CDSCO),
                      regulated by the Ministry of Ayush. The following is
                      covered under Aayush.
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li>
                              <i className="uil uil-check"></i> Ayurveda
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Unani
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Siddha
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Herbal Products
                              For Medicinal Use
                            </li>
                            <li>
                              <i className="uil uil-check"></i> Herbal Products
                              For Cosmetic Use
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="mt-4">The objective of Obtaining a Drug Licence</h3>
              <p>
                The issuance of a drug licence serves as a regulatory measure to
                control and restrict access to medicines and drugs, ensuring
                they are not subjected to misuse or abuse. Drug licence
                verification done for the same purpose to ensure compliance and
                safety.
              </p>
              <h3>Importance of Drug Licence</h3>
              <p>
                The drug license is a prerequisite for businesses or individuals
                to legally operate in India's trading, manufacturing, or
                distribution of drugs and cosmetics. It ensures that all
                entities adhere to the stringent guidelines and standards
                outlined in the Drugs and Cosmetics Act 1940 to maintain the
                safety, efficacy, and quality of pharmaceutical and cosmetic
                products.
              </p>
              <p>
                Additionally, obtaining a license and drug licence renewal is
                just one part of regulatory compliance; entities must secure a
                trade license and register under the Shop and Establishment Act
                to fully comply with the legal requirements for operating a
                business in this sector.
              </p>
              <h3>Entities Required to Obtain a Drug License Registration</h3>
              <p>
                The following groups are typically required to secure a drug
                licence to operate legally within the pharmaceutical and
                healthcare sectors:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Pharmacists: </strong>Professionals authorised to
                      prepare, dispense, and advise on pharmaceutical drugs,
                      ensuring their safe and effective use by having pharma
                      license.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Wholesale Distributors: </strong>Businesses
                      involved in bulk purchasing and distributing drugs to
                      various retail outlets or other organisations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Retailers: </strong>Businesses that sell drugs
                      directly to consumers, providing the final link in the
                      supply chain between the manufacturer and the end-user.
                      These entities must obtain drug license along with medical
                      store licence.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Manufacturers: </strong>Companies or individuals
                      producing pharmaceuticals and cosmetics, including
                      formulation, compounding, packaging, and labelling.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Drug Sellers and Dealers: </strong>Individuals or
                      entities engaged in the commercial trading of
                      pharmaceuticals and cosmetic products. They must have both
                      drug and pharmacy license to carry out the operations
                      legally.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Importers: </strong>Companies or individuals who
                      import drugs, cosmetics, and traditional medicines from
                      abroad, ensuring these imported items comply with the
                      local regulatory requirements.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Ayurvedic, Siddha, and Unani Drug Providers:{" "}
                      </strong>
                      Entities dealing in traditional Indian medicinal products,
                      also regulated under the Drugs and Cosmetics Act need to
                      have pharma licence.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Types of Drug Licenses</h3>
              <p>
                In India, the kind of drug licence required varies based on the
                specific activities of the drug business.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Manufacturing License: </strong>For businesses
                      that produce drugs, including allopathic and homoeopathic
                      medicines. This manufacturing pharma licence is mandatory
                      for any entity creating and producing pharmaceutical
                      products.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Sale License: </strong>This is required to sell
                      drugs and has two main categories:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Wholesale Drug Licence: </strong>This is needed by
                      businesses that sell drugs in bulk to retailers or other
                      entities rather than directly to consumers.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Retail Drug Licence: </strong>Necessary for
                      businesses selling drugs directly to consumers. This
                      includes stand-alone pharmacies, ayurvedic shops, and any
                      retailer providing drugs to end-users, such as hospitals
                      and dispensaries. Selling products without a drug and
                      pharmacy license leads to legal problems.&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Loan License: </strong>This type of pharma licence
                      For businesses that don't own a manufacturing facility but
                      utilise the manufacturing premises of another licensed
                      manufacturer to produce drugs. This arrangement allows for
                      flexibility in production without the need to own a
                      manufacturing unit.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Import License: </strong>Required for businesses
                      importing drugs into India, whether for further
                      manufacturing or direct sale. This pharma licence ensures
                      that imported drugs meet the same standards as
                      domestically produced.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Multi-Drug Licence: </strong>For businesses
                      operating pharmacies under the same name across multiple
                      states. This pharma licence facilitates the management of
                      a pharmacy chain by standardising licensing across various
                      locations.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Eligibility Criteria for Obtaining a Drug License</h3>
              <p>
                The eligibility criteria for obtaining a drug license typically
                involve a combination of educational qualifications,
                professional registrations, and specific requirements related to
                the premises where the drugs will be stored and sold. Some
                general criteria apply to most jurisdictions:
              </p>
              <p>
                <strong>Qualified Personnel:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Retail Drug License: </strong>Requires a qualified
                      and registered pharmacist with a B.Pharm or D.Pharm
                      degree. A medical store licence must also be obtained to
                      sell drug-based products.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Wholesale Drug License: </strong>Requires either a
                      qualified pharmacist or a competent person with relevant
                      experience in drug dealing (a graduate with one year of
                      experience or an undergraduate with four years of
                      experience).
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Registration with Pharmacy Council:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The pharmacist or
                      competent person must be registered with the State
                      Pharmacy Council or equivalent regulatory body.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Adequate Premises:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The premises must meet
                      specific size and infrastructure requirements, such as
                      minimum area, proper storage facilities, and adherence to
                      safety standards.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>
                  Compliance with Legal and Regulatory Requirements:
                </strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Applicants must ensure
                      that their business complies with the local laws,
                      regulations, and guidelines set forth by the drug control
                      authorities.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Documentation and Records:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Proper documentation,
                      including educational certificates, identity proofs, and
                      professional registrations, must be maintained and
                      provided during the application process.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Good Storage Practices:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The premises should be
                      equipped to store drugs under the required conditions to
                      ensure their efficacy and safety.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Ethical Practices:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The business must commit
                      to ethical practices, including the responsible sale and
                      dispensing of drugs.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>No Criminal Record:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Typically, the applicant
                      (proprietor, pharmacist, or competent person) should not
                      have any criminal record related to drug offences or other
                      serious crimes.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                This is the eligibility criteria required on how to get drug
                licence. Ensure to properly engage in the process, check drug
                licence status, and obtain the certificate.
              </p>
              <h3>Premises Specifications &amp; Conditions</h3>
              <p>
                The specifications and conditions of the premises are crucial
                for obtaining a pharma licence.
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Eligibility Criteria</strong>
                    </th>
                    <th className="border">
                      <strong>For Retail Drug License</strong>
                    </th>
                    <th className="border">
                      <strong>For Wholesale Drug License</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Type of Premises</td>
                    <td className="border">
                      May be located in a Mixed Land Use Area or a Commercial
                      Place.
                    </td>
                    <td className="border">
                      It must be located in a Commercial Place only.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Minimum Area</td>
                    <td className="border">
                      The minimum carpet area is 10 square meters with a height
                      of 2.75 meters.
                    </td>
                    <td className="border">
                      The minimum carpet area is 10 square meters with a height
                      of 2.75 meters.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Approach Road</td>
                    <td className="border">
                      The road must face a minimum width as the local
                      municipality prescribes for mixed land use.
                    </td>
                    <td className="border">
                      Should be on a road/street broad enough for easy loading
                      and unloading, ideally facing a road with a minimum width
                      of 18 meters.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Furniture</td>
                    <td className="border">
                      Requires racks, almirah for storage, and a table and
                      chair.
                    </td>
                    <td className="border">
                      Requires racks, almirah for storage, and a table and
                      chair.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">Equipment</td>
                    <td className="border">
                      Computer systemPrinter for invoices Refrigerator
                      (essential for storing certain drugs, especially vaccines,
                      in a low-temperature zone)
                    </td>
                    <td className="border">
                      Computer systemPrinter for invoicesRefrigerator (essential
                      for storing certain drugs, especially vaccines, in a
                      low-temperature zone)
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>Additional Notes:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Combined Retail and Wholesale Premises: </strong>
                      If applying for retail and wholesale pharma licences at
                      the same premises, the minimum area should be 15 square
                      meters.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Measuring Carpet Area: </strong>The carpet area
                      excludes open areas, pantry, and washroom, considering
                      only the area used for drug dealings.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Mixed Land Use Definition: </strong>It allows for
                      non-residential activities in residential areas, with
                      mixed-use shops permissible only on the ground floor up to
                      the maximum floor coverage. Such regions require the
                      unconditional surrender of the front setback for parking,
                      with no boundaries, and must have approval from the local
                      authority and payment of conversion charges.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Commercial Place Definition: </strong>A location
                      designated solely for commercial activities. Before
                      renting for a wholesale pharma licence, it's important to
                      confirm the commercial status of the premises by checking
                      the conversion charge receipt and parking fee receipt.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Validity of Drug License</h3>
              <p>
                A drug license, upon issuance, remains valid for five years,
                subject to its continued compliance with regulations. It can,
                however, be suspended or cancelled by the Drug Department if it
                fails to adhere to the required standards and regulations within
                this timeframe.
              </p>
              <h3>Documents Required for Drug License</h3>
              <p>
                The documents required for obtaining a New Retail Drug License
                and a New Wholesale Drug License share several similarities but
                also differ, particularly in the personnel involved. These
                documents are essential on how to get drug licence. Here's a
                comparative overview:
              </p>
              <h5>
                Required Documentation for Obtaining a New Retail Drug License
              </h5>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Application Form (Form
                      No. 19)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Application Fee Receipt
                      (Challan of Rs. 3000/-)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proprietor's Affidavit
                      (On Rs. 20 Stamp Paper)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proprietor's Educational
                      Certificates (Self-Attested)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proprietor's Identity
                      Proof (Self-Attested Copies of Domicile/Driving
                      License/Voter ID Card)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Registered Pharmacist's
                      Affidavit
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Registered Pharmacist's
                      Educational Certificates (Self-Attested)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Registered Pharmacist's
                      Identity Proof (Self-Attested Copies of Domicile/Driving
                      License/Voter ID Card)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Blueprint of the
                      Proposed Premises' Layout
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Electricity Bill for the
                      Proposed Premises
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Refrigerator Purchase
                      Receipt
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Lease Agreement (On Rs.
                      50 Stamp Paper)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Ownership Documents for
                      the Premises, Including Tax Receipt
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Cover Letter for the
                      Application
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Photographs (Five Each)
                      of the Registered Pharmacist and Proprietor
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="mt-4">Required Documents for New Wholesale Drug License</h5>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Form No. 19: Official
                      application form.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Challan of Rs. 3000/-:
                      Proof of application fee payment.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proprietor's Affidavit:
                      On Rs. 20 stamp paper.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Educational Certificates
                      of Proprietor: Self-attested copies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Identity Proof of
                      Proprietor: Self-attested copies (Domicile, Driving
                      License, Voter ID Card).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Competent Person's
                      Affidavit.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Educational Certificates
                      of Competent Person: Self-attested copies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Identity Proof of
                      Competent Person: Self-attested copies (Domicile, Driving
                      License, Voter ID Card).
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Experience Certificate
                      of Competent Person: Original certificate showing four
                      years of experience post-12th or two years
                      post-graduation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Blueprint of Proposed
                      Premises Layout.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Electricity Bill for
                      Proposed Premises.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Refrigerator Purchase
                      Receipt: Required for storing certain drugs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Lease Agreement: On Rs.
                      50 stamp paper.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Ownership Documents for
                      Premises: Including tax receipts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Cover Letter:
                      Introducing the application.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Photographs: 5 each of
                      the Competent Person and Proprietor.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                All the documents are required before engaging in the process,
                check drug licence status and obtaining the drug licence. And
                also ensure to have the required documents for drug licence
                renewal for compliance.
              </p>
              <h3>How to Apply for Drug Licence?</h3>
              <p>
                The Procedure to obtain a Drug License involves several key
                steps, each critical to ensuring compliance with regulatory
                standards. Here are the step by step process on how to apply for
                drug license:
              </p>
              <h4>Preparation of Documentation</h4>
              <p>
                Documentation is the foundation of the licensing process. Proper
                documentation streamlines the process and facilitates the
                successful issuance of a license. The required documents vary
                depending on the type of application, whether for wholesale or
                retail drug sales, and the specific business activities
                involved.
              </p>
              <h4>Creation of User ID and Password</h4>
              <p>
                Applicants must register to obtain a user ID and password. These
                credentials are sent to the applicant's registered email
                address, allowing them to proceed with the application process
                for user ID and password creation.
              </p>
              <h4>Filing the Application</h4>
              <p>
                Applicants must submit their application for a drug license to
                the relevant state's Drug Controlling Authority. Each license
                type necessitates a distinct application form. Unlike some other
                regulatory areas, there isn't a single centralised license that
                covers all states; applicants need to submit separate
                applications for each location they operate in.
              </p>
              <h4>Premises Inspection</h4>
              <p>
                A drug inspector responsible for the area inspects the premises
                where the drug license is sought. This inspection involves
                verifying the application's details, measuring the premises, and
                ensuring the location is suitable based on zoning laws (e.g.,
                commercial or mixed-use land).
              </p>
              <h4>Application Scrutiny</h4>
              <p>
                The Drug Inspector reviews the application and accompanying
                documents against observations made during the site visit. If
                any clarifications are needed, they will be requested from the
                applicant, who must respond within three days. Failure to
                provide a satisfactory response can result in the application
                being denied.
              </p>
              <h4>License Issuance</h4>
              <p>
                Following a thorough drug licence verification process and
                assuming all criteria are met, the Drug Control Department will
                issue the Drug License. Frequently, you can check drug licence
                status.
              </p>
              <p>
                The experts at LegallensIndia can guide you through the process of
                successfully completing the process, check drug licence status
                and obtaining the license.
              </p>
              <h3>Process of Drug Licence Download</h3>
              <p>
                To proceed with drug licence download, visit the official
                website of the State Drugs Control Department. Log in using your
                credentials and navigate to the license section. Enter the
                required details, such as the application number or license
                number, and submit the request. Once verified, you can complete
                the drug licence download process and get the list in the
                prescribed format. Ensure that the license remains valid by
                regularly checking for renewal requirements and compliance
                updates.
              </p>
              <h3>Drug License Renewal</h3>
              <p>
                The drug license usually has a validity period of five years,
                after which it needs an drug licence renewal to continue its
                legal effectiveness.
              </p>
              <h3>Simplify Your Drug License Process with LegallensIndia</h3>
              <p>
                Securing a drug license can be a straightforward and hassle-free
                process when you choose LegallensIndia. With our expertise in
                navigating the complex regulatory framework of the
                pharmaceutical industry, LegallensIndia offers comprehensive
                support, from preparing your application to ensuring compliance
                with all legal requirements. Our knowledgeable team provides
                personalised guidance, making the entire process efficient
                including registration, check drug licence status, obtaining the
                certificate and minimising potential errors or delays. Whether
                you're new to the pharmaceutical sector or looking to expand
                your existing operations, LegallensIndia can help streamline your
                journey to obtaining a drug license.
              </p>
              <p>
                <strong>
                  <em>
                    Contact our experts today for personalised assistance!
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
