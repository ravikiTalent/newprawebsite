import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function BISRegistration() {
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
              <h1 className="display-1 text-white mb-3">BIS Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                BIS certification, granted by the Bureau of Indian Standards (BIS), guarantees that your product meets stringent quality, safety, and performance standards.
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
                { id: 3, title: "BIS Registration", url: "" },
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
                      <h5 className="card-title">BIS Registration</h5>
                      <p>BIS certification, granted by the Bureau of Indian Standards (BIS), guarantees that your product meets stringent quality, safety, and performance standards.
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

              <h2 className="display-4 mb-3">BIS Registration</h2>
              <p>
                <span>
                  BIS certification, granted by the Bureau of Indian Standards
                  (BIS), guarantees that your product meets stringent quality,
                  safety, and performance standards. Although optional for many
                  items, Indian&nbsp;
                </span>
                <span>BIS certification</span>
                <span>
                  {" "}
                  is mandatory for 380 essential products to ensure public
                  safety. Through our{" "}
                </span>
                <span>BIS certification services</span>
                <span>
                  , you can enhance your product's credibility and earn the
                  prestigious ISI mark, signifying compliance with{" "}
                </span>
                <span>Indian standards</span>
                <span>.&nbsp;</span>Products with Bureau of Indian standards
                certificate gain a competitive advantage, as consumers tend to
                favour certified items for their quality and safety.
              </p>
              <p>
                <em>
                  <span> Partner with LegallensIndia to simplify the </span>
                  <span>BIS certification process</span>
                  <span>
                    , boosting consumer trust and confidence in your brand.
                  </span>
                </em>
              </p>
              <h3>
                <span>An Introduction to BIS Certification in India</span>
              </h3>
              <p>
                <span>BIS, short for </span>
                <span>Bureau of Indian Standards</span>
                <span>
                  , is the national certification body of India, established
                  under the{" "}
                </span>
                <span>BIS Act of 2016</span>
                <span>
                  . Operating under the Ministry of Consumer Affairs, Food &amp;
                  Public Distribution,{" "}
                </span>
                <span>BIS</span>
                <span>
                  {" "}
                  replaced the Indian Standards Institution (ISI) on April 1,
                  1987, taking over its responsibilities. The{" "}
                </span>
                <span>BIS certificate meaning</span>
                <span>
                  &nbsp;refers to the crucial role in ensuring the quality,
                  safety, and performance standards of products in India through
                  standardisation and{" "}
                </span>
                <span>product certification</span>
                <span>
                  . It is mandatory for the certain organizations which are
                  subjected to BIS Certificate Verification.
                </span>
              </p>
              <p>
                <span>
                  Manufacturers, whether Indian or foreign, producing products
                  that fall under mandatory certification categories are
                  required to obtain a{" "}
                </span>
                <span>BIS registration certificate</span>
                <span>. The B</span>ureau of Indian Standards registration
                <span>&nbsp;process can be completed online through the </span>
                <span>BIS portal</span>
                <span>, allowing manufacturers to ensure compliance with </span>
                <span>Indian standards</span>
                <span>
                  {" "}
                  and enhance the credibility of their products. Specified
                  companies and manufacturers must get a Bureau of indian
                  standards license to legally comply with the&nbsp;
                </span>
                Bureau of Indian Standards Act, 2016.&nbsp;
              </p>
              <h3>
                <span>Who Can Apply for BIS Certification?</span>
              </h3>
              <p>
                <span>
                  Any organisation involved in manufacturing, assembly, or
                  service provision based in India or abroad can apply for{" "}
                </span>
                <span>BIS certification</span>
                <span>
                  . It must be a legally recognised entity and provide documents
                  verifying the business's name and address. Those organizations
                  are subject to BIS verification.&nbsp;
                </span>
              </p>
              <h3>
                <span>
                  Indian BIS Registration for Importers, Exporters, and
                  Manufacturers
                </span>
              </h3>
              <p>
                <span>The </span>
                <span>Bureau of Indian Standards (BIS)</span>
                <span> offers a variety of </span>
                <span>product registration schemes</span>
                <span>
                  {" "}
                  designed to ensure that products manufactured, imported, or
                  sold in India meet the required{" "}
                </span>
                <span>quality, safety, and performance standards</span>
                <span>
                  . Whether you are an importer, exporter, or manufacturer,
                  obtaining{" "}
                </span>
                <span>BIS certification</span>
                <span>
                  {" "}
                  is essential for compliance with Indian regulations. Some
                  schemes are mandatory, while others are voluntary, depending
                  on the industry and product category. Below is an outline of
                  the different Indian&nbsp;
                </span>
                <span>BIS registration schemes</span>
                <span>
                  {" "}
                  available to help you understand which one applies to your
                  products.
                </span>
              </p>
              <h4>
                <span>Compulsory Registration Scheme (CRS)</span>
              </h4>
              <p>
                <span>Under the </span>
                <span>Compulsory Registration Scheme (CRS)</span>
                <span>
                  , certain categories of products must be certified before
                  being placed on the Indian market. The primary goals of CRS
                  are to protect{" "}
                </span>
                <span>consumer safety</span>
                <span>
                  , safeguard the environment, and enhance national security.
                  Products under{" "}
                </span>
                <span>CRS</span>
                <span> include:</span>
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <p>
                        <span>
                          <strong>Type of Product</strong>
                        </span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          <strong>Examples of Products</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Electronics and IT Goods</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Laptops, tablets, printers, scanners, mobile phones,
                          LED lights, etc.
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Domestic Appliances</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Electric irons, ceiling fans, LED lamps, electric
                          water heaters, etc.
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Auto Components</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Motor vehicle tires, tubes, and safety glass for motor
                          vehicles.
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Steel Materials</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Steel pipes for various applications.</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <span>These products must comply with relevant </span>
                <span>Indian standards</span>
                <span> and be tested in </span>
                <span>ACPI-registered laboratories</span>
                <span>
                  . BIS CRS registration is a prerequisite for their sale or
                  import into India.
                </span>
                <span>&nbsp;</span>
              </p>
              <h4>
                <span>Voluntary Certification Scheme (VCS)</span>
              </h4>
              <p>
                <span>The </span>
                <span>Voluntary Certification Scheme (VCS)</span>
                <span>
                  {" "}
                  allows manufacturers to certify their products, even if they
                  are not subject to mandatory certification.{" "}
                </span>
                <span>VCS certification</span>
                <span>
                  {" "}
                  encourages manufacturers to differentiate their products in
                  the marketplace by demonstrating compliance with{" "}
                </span>
                <span>Indian standards</span>
                <span>
                  , boosting consumer trust and product competitiveness.
                  Products under{" "}
                </span>
                <span>VCS</span>
                <span> include:</span>
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <p>
                        <span>
                          <strong>Type of Product</strong>
                        </span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          <strong>Examples of Products</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Textiles and Leather Products</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Garments, footwear, leather goods, etc.</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Chemicals and Petrochemicals</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Paints, varnishes, adhesives, etc.</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Construction Materials</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Cement, steel doors, paints, sanitary fittings, etc.
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Domestic Appliances</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Kitchen appliances, water heaters, air conditioners,
                          etc.
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <span>VCS certification</span>
                <span> enhances consumer confidence and </span>
                <span>product marketability</span>
                <span>
                  {" "}
                  while showcasing a commitment to quality and safety.
                </span>
                <span>&nbsp;</span>
              </p>
              <h4>
                <span>Foreign Manufacturers Certification Scheme (FMCS)</span>
              </h4>
              <p>
                <span>The </span>
                <span>Foreign Manufacturers Certification Scheme (FMCS)</span>
                <span>
                  {" "}
                  is tailored for manufacturers outside of India who wish to
                  export their products to the Indian market. Foreign
                  manufacturers can apply for{" "}
                </span>
                <span>BIS certification</span>
                <span> through an </span>
                <span>Authorized Indian Representative (AIR)</span>
                <span>
                  {" "}
                  or by establishing their own representative office in India.
                  Products under{" "}
                </span>
                <span>FMCS</span>
                <span> include electronics, consumer goods, and </span>
                <span>industrial equipment</span>
                <span>.</span>
              </p>
              <p>
                <span>FMCS certification</span>
                <span>
                  {" "}
                  facilitates international trade by ensuring that imported
                  products meet{" "}
                </span>
                <span>Indian standards</span>
                <span>, improving </span>
                <span>consumer safety</span>
                <span>
                  {" "}
                  and protecting national interests. It smooths the process for
                  foreign manufacturers to certify their products in line with{" "}
                </span>
                <span>Indian regulations</span>
                <span>.</span>
                <span>&nbsp;</span>
              </p>
              <h4>
                <span>Hallmarking Scheme for Gold and Silver Articles</span>
              </h4>
              <p>
                <span>BIS</span>
                <span> also administers the </span>
                <span>Hallmarking Scheme</span>
                <span>
                  , certifying the purity and fineness of gold and silver
                  articles sold in India.&nbsp;
                </span>
                Bureau of Indian standards certificate&nbsp;
                <span>
                  guarantee that these precious metal items conform to defined
                  purity standards, ensuring transparency and reducing the risk
                  of fraudulent practices.
                </span>
                <span>&nbsp;</span>
              </p>
              <h4>
                <span>Product Certification Scheme (PCS)</span>
              </h4>
              <p>
                <span>The </span>
                <span>Product Certification Scheme (PCS)</span>
                <span>
                  {" "}
                  covers a wide range of products that may not fall under{" "}
                </span>
                <span>CRS</span>
                <span>
                  {" "}
                  but still require BIS certificate verification for their
                  conformity with{" "}
                </span>
                <span>Indian standards</span>
                <span>. Examples include:</span>
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <p>
                        <span>
                          <strong>Type of Product</strong>
                        </span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          <strong>Examples of Products</strong>
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Industrial</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Machinery, pressure vessels, industrial valves, etc.
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Electrical</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Cables, switches, circuit breakers, etc.</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Chemical and Pharmaceuticals</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>
                          Certain chemicals, pharmaceutical products, etc.
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>
                        <span>Construction</span>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <span>Bricks, tiles, roofing sheets, etc.</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>
                <span>
                  Indian BIS Registration: Key Eligibility Requirements
                </span>
              </h3>
              <p>
                <span>To ensure compliance with </span>
                <span>BIS standards and obtain a&nbsp;</span>Bureau of Indian
                standards license
                <span>
                  , entities must meet the following eligibility criteria for
                  successful{" "}
                </span>
                <span>BIS registration</span>
                <span>:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Entity:</strong>
                      <strong> </strong>Only registered legal entities in India,
                      such as private companies, partnerships, or
                      proprietorships, are eligible to apply for BIS
                      Certification.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Application Type:</strong>
                      <strong> </strong>BIS registration is open to producers,
                      importers, or suppliers, both from domestic and
                      international markets.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Product Category: </strong>
                      </span>
                      <span>
                        BIS certification is mandatory for certain product
                        categories as specified in the Indian BIS Act, where
                        certification is required to legally manufacture or sell
                        these products in India.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Product Testing:</strong>
                      <strong> </strong>All products must undergo testing at
                      BIS-approved laboratories to verify compliance with Indian
                      standards.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Documentary Requirements: </strong>
                      </span>
                      <span>
                        Applicants must submit various documents, including
                        manufacturing licenses, test reports, and supporting
                        materials as per BIS guidelines. These documents are
                        mandatory for BIS CRS registration.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Manufacturing Facility: </strong>
                      </span>
                      <span>
                        The facility should be capable of producing products
                        that meet BIS standards. BIS may conduct inspections to
                        verify compliance before issuing the
                        certification.&nbsp;
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Benefits of Obtaining a</span>&nbsp;Bureau of Indian
                Standards <span>Certificate</span>
              </h3>
              <p>
                <span>Acquiring a </span>
                <span>BIS certificate registration</span>
                <span> offers numerous advantages for businesses:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Market Credibility: </strong>BIS certification
                      verifies that your products meet Indian quality and safety
                      standards, building trust and credibility.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Compliance: </strong>Ensures your products
                      comply with Indian regulations, making them legally fit
                      for sale and distribution in the Indian market.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Access to Government Tenders: </strong>Certified
                      products qualify for government tenders, creating business
                      growth opportunities.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Consumer Confidence: </strong>The BIS mark assures
                      customers of product safety and quality.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Brand Reputation: </strong>A BIS certificate
                      registration demonstrates your brand's commitment to
                      quality.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Competitive Advantage: </strong>BIS certification
                      distinguish your products from non-certified competitors.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>
                  Documents Required for Bureau of Indian Standards (BIS)
                  Registration and Certification
                </span>
              </h3>
              <p>
                <span>To obtain BIS certificate registration and the B</span>
                ureau of Indian standards license
                <span>
                  , a comprehensive set of documents must be submitted. These
                  include testing reports, brand documents, factory documents,
                  authorization letters, and India representative documents.
                  Additionally, the test report from a BIS-recognized laboratory
                  must accompany the application for certification. All
                  documents must be in the prescribed format set by BIS and duly
                  signed and stamped by the appropriate signatories.
                </span>
              </p>
              <p>
                <span>
                  Below is a list of the key documents required for a fresh
                  application with the Bureau of Indian Standards, to
                  download&nbsp;
                </span>
                BIS certificate:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Business License of the Manufacturing Unit&nbsp;
                        (English translated and in the local language).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Scope of the Business License (English translated and in
                        the local language).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>ISO Certificate of the Manufacturer</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Authorisation Letter (Required if the signatory is
                        someone other than the head of the manufacturing
                        facility).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>Trademark Certificate</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Trademark Authorization Letter (Necessary if the brand
                        is not owned by the manufacturer).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Nomination Letter of the Authorized Indian
                        Representative (AIR)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Testing Documents</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Filled out CDF (Compliance Data Form) and CCL (Critical
                        Component List).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Technical Specification Sheet or Product Manual
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        Providing detailed information about the device being
                        applied for.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                <em>
                  <span>
                    LegallensIndia can assist in preparing and submitting these
                    documents for a smooth{" "}
                  </span>
                  <span>BIS certification</span>
                  <span> process.</span>
                </em>
              </p>
              <h3>
                <span>Procedure of BIS Certificate Registration</span>
              </h3>
              <p>
                <span>The </span>
                <span>Procedure of BIS Registration</span>
                <span> ensures that products meet </span>
                <span>Indian standards</span>
                <span>
                  {" "}
                  for quality, safety, and performance. Here’s a step-by-step
                  overview of the stages involved:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identification of Applicability</strong>
                      <strong>:</strong> The first step in the BIS certification
                      process is determining whether the product falls under the
                      mandatory BIS certification scope. This can be checked via
                      the BIS website or by consulting authorized agencies.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Application Submission</strong>
                      <strong>: </strong>Once the product is confirmed to
                      require BIS certification, the application process begins.
                      This involves providing the following details:
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Application Details: </strong>Description of the
                      product and relevant specifics.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Product Details:</strong> Description,
                      specifications, and intended use of the product.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Manufacturing Process Details:</strong>{" "}
                      Information on production facilities, quality control
                      measures, and manufacturing standards.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Test Reports:</strong> Previous test results,
                      especially those compliant with international standards,
                      must be submitted.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Brand Authorization Letter:</strong> This is
                      required if the products are manufactured by a third party
                      under a license.·&nbsp;
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        <span>Document Review</span>
                        <span>: </span>
                      </strong>
                      <span>BIS</span>
                      <span>
                        {" "}
                        reviews the submitted documents to ensure completeness
                        and accuracy. This step verifies that all required
                        information has been provided and that the product is
                        within the scope of applicable{" "}
                      </span>
                      <span>Indian standards</span>
                      <span>.</span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Sample Testing</strong>
                      <strong>: </strong>Product samples are tested in a
                      BIS-recognized or accredited laboratory. Testing is
                      conducted against relevant Indian standards to ensure
                      compliance with safety, quality, performance, and other
                      criteria.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Factory Inspection (if Applicable)</strong>
                      <strong>:</strong> For certain product categories, a
                      factory inspection may be required. BIS conducts factory
                      surveillance to evaluate the production processes, quality
                      control systems, and adherence to BIS standards. This
                      ensures that the manufacturing facility can consistently
                      produce products that meet certified standards.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Grant of BIS Registration Certificate</strong>
                      <strong>: </strong>After successful testing, inspection
                      (if applicable), and BIS verification, the BIS
                      registration certificate is issued. You can track the BIS
                      license status to know about your application processing.
                      This certificate serves as proof that the product meets
                      the required Indian standards for quality and safety. You
                      can also have the facility to download BIS Certificate
                      <span>.&nbsp;</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                <em>
                  <span>
                    LegallensIndia can assist in streamlining the entire{" "}
                  </span>
                  <span>BIS registration process</span>
                  <span>
                    , from initial consultation to applying for certification,
                    ensuring a smooth and efficient experience for manufacturers
                    and importers.
                  </span>
                </em>
              </p>
              <h3>Procedure of BIS Number Check Online</h3>
              <p>
                It is important to understand how to check BIS certificate
                online to know its authenticity. Here is the typical process of
                BIS Number check online:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Visit the BIS Website:</strong> Go to the official
                      Bureau of Indian Standards (BIS) website to initiate the
                      BIS license check online.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Locate the Certification Section:</strong> Look
                      for the "Certification" or "Online Services" section on
                      the website.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Access Online Verification:</strong> Click on
                      "Online Certificate Verification" or "Certificate Search"
                      to proceed with BIS license check online.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enter Details:</strong> Fill in the required
                      information, such as the certificate number, product name,
                      and manufacturer details.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Submit and View BIS Certificate Check Results:{" "}
                      </strong>
                      Submit your search request. The website will display the
                      results of the given BIS certificate check, including the
                      validity of the certificate, product details, and the
                      scope of certification.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                This is the complete step by step process involved in how to
                check BIS certificate online.
              </p>
              <h3>
                <span>
                  Surveillance and Renewal of Bureau of Indian Standards
                  Registration
                </span>
              </h3>
              <p>
                <span>After a manufacturer or importer secures </span>
                <span>BIS certification</span>
                <span>
                  , they are required to perform follow-up surveillance
                  activities. This includes periodic audits, product testing,
                  and evaluations to ensure continued compliance with the
                  relevant{" "}
                </span>
                <span>BIS standards</span>
                <span>
                  . Regular surveillance helps maintain the quality and safety
                  of the products in line with{" "}
                </span>
                <span>BIS</span>
                <span>
                  {" "}
                  requirements, ensuring that any deviations are promptly
                  addressed.
                </span>
              </p>
              <p>
                <span>The </span>
                <span>BIS certification</span>
                <span>
                  {" "}
                  is typically valid for a specified period, after which a
                  renewal is necessary to continue placing the product on the{" "}
                </span>
                <span>Indian market</span>
                <span>
                  . Manufacturers or importers must apply for renewal before the
                  certificate expires to ensure uninterrupted compliance and the
                  ability to sell their products in India.
                </span>
              </p>
              <h3>
                <span>Choose LegallensIndia for Easy BIS Registration</span>
              </h3>
              <p>
                When it comes to navigating the complexities of Bureau of Indian
                standards registration, LegallensIndia is your trusted partner.
                Our experienced team will guide you through every step of the
                process, from document preparation, tracking the BIS license
                status to download BIS Certificate, ensuring full compliance
                with Indian standards. Whether you're a manufacturer, importer,
                or exporter, we streamline the entire BIS certificate
                registration journey, saving you time and effort. With
                LegallensIndia by your side, you can focus on growing your
                business while we handle the certification process. Secure your
                BIS certification today with LegallensIndia and boost your
                product's credibility, marketability, and compliance in the
                Indian market.
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
