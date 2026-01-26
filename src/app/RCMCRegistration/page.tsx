import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function RCMCRegistration() {
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
                RCMC Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Registration-Cum-Membership Certificate (RCMC) is a certificate that validates an exporter dealing with products registered with an agency/ organization that the Indian Government authorizes.
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
                { id: 3, title: "RCMC Registration", url: "" },
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
                      <h5 className="card-title">RCMC Registration</h5>
                      <p>
                        Registration-Cum-Membership Certificate (RCMC) is a certificate that validates an exporter dealing with products registered with an agency/ organization that the Indian Government authorizes.
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

              <h2 className="display-4 mb-3">RCMC Registration</h2>
              <p>
                The RCMC (Registration Cum Membership Certificate) is an
                authorization document for importing or exporting restricted
                products according to the Foreign Trade Policy (FTP). Typically,
                the Export Promotion Councils (EPCs), Commodity Boards, and
                Export Development Authorities established by the Director
                General of Foreign Trade (DGFT) for each restricted product
                issue this certificate.
              </p>
              <p>
                Moreover, it functions as proof of membership or registration of
                an exporter with a specific EPC, commodity board, or export
                development authority. The RCMC is essential to benefit from
                concessions provided under the FTP for importing or exporting
                restricted goods.
              </p>
              <p>
                LegallensIndia, as a professional service provider, can assist
                businesses in obtaining RCMC registration online quickly and
                efficiently. We have years of experience handling RCMC
                registration process and can provide end-to-end support to our
                clients.
              </p>
              <h3>What is RCMC Certificate?</h3>
              <p>
                Importers and Exporters must be aware of what is RCMC
                certificate.&nbsp;
                <strong>
                  RCMC full form stands
                  for&nbsp;&nbsp;Registration-Cum-Membership Certificate
                </strong>
                . The RCMC certificate validates an exporter dealing with
                products registered with an agency or organization authorized by
                the Indian Government. This certificate of RCMC meaning
                indicates that the exporter is registered with the authorized
                agency or organization.
              </p>
              <h3>Why RCMC Registration?</h3>
              <p>
                The RCMC registration process online serves several purposes.{" "}
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  Firstly, it authorizes importing or exporting products that
                  fall under the restricted category per the Foreign Trade
                  Policy (FTP).{" "}
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Secondly, it is evidence of membership or registration of an
                  exporter with a specific EPC, commodity board, or export
                  development authority.{" "}
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Thirdly, it is required to take advantage of concessions
                  provided under the FTP for the import/export of restricted
                  goods.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Eligibility for RCMC Registration Online</h3>
              <h4>Exporter or Merchandiser (Merchant)</h4>
              <p>
                Before applying for RCMC registration, the exporter or
                merchandiser must confirm that their business deals with imports
                and exports. This is one of the key requirements for starting a
                manufacturing company in India. Additionally, the exporter must
                prove they have applied for an from the authorized authority.
                The DGFT (Director General of Foreign Trade) regulates the IEC.
              </p>
              <h4>Business Main Line Declaration</h4>
              <p>
                In the Business Main Line Declaration, the exporter or merchant
                must specify their primary business line. For instance, if their
                main business is dealing with coffee and tea products, they need
                to consult the Tea and Coffee Promotion Board. In case there is
                no export promotion board or regulatory agency for the
                commodities dealt with by the exporter, this needs to be
                mentioned as well.
              </p>
              <h4>Consent from the Board of the FIEO</h4>
              <p>
                The applicant must obtain the necessary board permission or
                clearance from FIEO. If no specialized board is available for a
                specific product, the applicant needs to apply for approval to
                FIEO. In addition, obtaining FIEO authorization is also required
                for RCMC registration online.
              </p>
              <h3>
                Benefits of&nbsp;Registration-Cum-Membership Certificate (RCMC)
              </h3>
              <p>
                Obtaining a Registration Cum Membership Certificate (RCMC)
                offers several benefits to exporters. Some of these benefits
                include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>
                    Access to export promotion schemes and benefits
                  </strong>{" "}
                  - RCMC is a mandatory requirement for availing export
                  promotion schemes and benefits such as Duty Drawback,
                  Merchandise Export from India Scheme (MEIS), and Market Access
                  Initiative (MAI).{" "}
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Facilitation in import and export</strong> - RCMC
                  makes it easier for exporters to import or export restricted
                  goods as the certificate validates the exporter's authenticity
                  and products' authenticity.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Easier customs clearance</strong> - RCMC reduces the
                  time and effort required for customs clearance as it proves
                  the exporter's membership with a recognized authority and
                  their compliance with government regulations.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Enhances credibility</strong> - RCMC enhances the
                  credibility of the exporter as it is a testament to their
                  compliance with government regulations and standards.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Access to market information</strong> - RCMC enables
                  exporters to stay updated with the latest market information
                  and developments through export promotion activities and
                  programs organized by Export Promotion Councils and Commodity
                  Boards.
                </li>
              </ul></div></div>
              <h3 className="mt-4">RCMC Registering Authorities</h3>
              <p>
                The Registering Authorities responsible for issuing the RCMC
                Certificate are empowered by the DGFT. These authorities include
                the Export Promotion Councils, Commodity Boards, and Export
                Development Authority.
              </p>
              <p>
                Their primary function is to promote and develop the Indian
                export industry, and each authority is responsible for promoting
                a particular group of products.
              </p>
              <p>
                The DGFT currently authorizes 35 organizations to issue the RCMC
                certificate, including 27 Export Promotion Councils, 6 Commodity
                Boards, and 2 Development Authorities, which work towards
                promoting the import/export of restricted items.
              </p>
              <h3>Export promotion councils</h3>
              <p>
                These authorities are categorized based on the type of products
                they deal with. Each of India's Export Promotion Councils and
                commodities boards categorizes itself according to the Type of
                products.
              </p>
              <p>
                List of Export Promotion Councils, Commodity Boards, and
                Development Authorities in India:
              </p>
              <h4>Export Promotion Councils:</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  Agricultural and Processed Food Products Export Development
                  Authority (APEDA){" "}
                </li>
                <li><i className="uil uil-check"></i>{" "}Apparel Export Promotion Council (AEPC)</li>
                <li><i className="uil uil-check"></i>{" "}
                  Basic Chemicals, Pharmaceuticals and Cosmetics Export
                  Promotion Council (CHEMEXCIL)
                </li>
                <li><i className="uil uil-check"></i>{" "}Carpet Export Promotion Council (CEPC)</li>
                <li><i className="uil uil-check"></i>{" "}
                  Chemicals and Allied Products Export Promotion Council
                  (CAPEXIL)
                </li>
                <li><i className="uil uil-check"></i>{" "}Council for Leather Exports (CLE)</li>
                <li><i className="uil uil-check"></i>{" "}
                  Electronics and Computer Software Export Promotion Council
                  (ESC)
                </li>
                <li><i className="uil uil-check"></i>{" "}Engineering Export Promotion Council (EEPC)</li>
                <li><i className="uil uil-check"></i>{" "}Federation of Indian Export Organisations (FIEO)</li>
                <li><i className="uil uil-check"></i>{" "}Gems and Jewellery Export Promotion Council (GJEPC)</li>
                <li><i className="uil uil-check"></i>{" "}Handloom Export Promotion Council (HEPC)</li>
                <li><i className="uil uil-check"></i>{" "}
                  Handicrafts and Handlooms Export Corporation of India (HHEC)
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Indian Oilseeds and Produce Export Promotion Council (IOPEPC)
                </li>
                <li><i className="uil uil-check"></i>{" "}Indian Silk Export Promotion Council (ISEPC)</li>
                <li><i className="uil uil-check"></i>{" "}Marine Products Export Development Authority (MPEDA)</li>
                <li><i className="uil uil-check"></i>{" "}
                  Pharmaceuticals Export Promotion Council of India (PHARMEXCIL)
                </li>
                <li><i className="uil uil-check"></i>{" "}Plastics Export Promotion Council (PLEXCONCIL)</li>
                <li><i className="uil uil-check"></i>{" "}Project Exports Promotion Council of India (PEPC)</li>
                <li><i className="uil uil-check"></i>{" "}Services Export Promotion Council (SEPC)</li>
                <li><i className="uil uil-check"></i>{" "}Shellac Export Promotion Council (SPEC)</li>
                <li><i className="uil uil-check"></i>{" "}Sports Goods Export Promotion Council (SGEPC)</li>
                <li><i className="uil uil-check"></i>{" "}
                  Synthetic and Rayon Textiles Export Promotion Council (SRTEPC)
                </li>
                <li><i className="uil uil-check"></i>{" "}Tea Board of India</li>
                <li><i className="uil uil-check"></i>{" "}Tobacco Board</li>
                <li><i className="uil uil-check"></i>{" "}Wool and Woollens Export Promotion Council (WWEPC)</li>
                <li><i className="uil uil-check"></i>{" "}The Coffee Board of India</li>
                <li><i className="uil uil-check"></i>{" "}
                  The Cotton Textiles Export Promotion Council (TEXPROCIL)
                </li>
              </ul></div></div>
              <h4 className="mt-4">Commodity Boards</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}Coir Board</li>
                <li><i className="uil uil-check"></i>{" "}Coffee Board</li>
                <li><i className="uil uil-check"></i>{" "}Rubber Board</li>
                <li><i className="uil uil-check"></i>{" "}Spices Board</li>
                <li><i className="uil uil-check"></i>{" "}Tea Board of India</li>
                <li><i className="uil uil-check"></i>{" "}Tobacco Board</li>
              </ul></div></div>
              <h4 className="mt-4">Development Authorities</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}Electronics Industries Development of India (ELCID)</li>
                <li><i className="uil uil-check"></i>{" "}National Centre for Trade Information (NCTI)</li>
              </ul></div></div>
              <p className="mt-4">
                If an export product is not covered by any Export Promotion
                Council or Commodity Board, the exporter can obtain the RCMC
                from the Federation of Indian Exporters Organization (FIEO).
              </p>
              <p>
                If the exporter deals with multi-products and the situation are
                unresolved, they can also obtain RCMC from FIEO.
              </p>
              <p>
                For multi-product exporters in the North Eastern States, the
                RCMC can be obtained from Shellac &amp; Forest Products Export
                Promotion Council (except for products managed by APEDA, Spices
                Board, and Tea Board).
              </p>
              <p>
                For exporters of handicrafts and handloom products from Jammu
                &amp; Kashmir, the Director of Handicrafts, Government of Jammu
                &amp; Kashmir, is authorized to issue the RCMC.
              </p>
              <h3>Validity of RCMC</h3>
              <p>
                The RCMC remains valid starting from the issuance date on the
                1st of April of the licensing year and is valid for five years,
                concluding on the 31st of March.
              </p>
              <h3>Documents Required for RCMC</h3>
              <p>
                The application form for RCMC must be accompanied by several
                mandatory documents, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  An IEC number issued by the regional licensing authority
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  A Permanent Account Number (PAN) granted by the competent
                  authority
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  The Memorandum of Association (MOA) for corporate,
                  institutional, private limited, or limited companies
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  A self-certified copy of the partnership deed for partnership
                  companies and individuals
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  The trust deed for trusts, institutional or corporate entities
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  A certificate from the Registrar of Companies regarding the
                  registered office change of the company
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  Certified data on the company's foreign exchange earnings over
                  the past three years, provided by the company's chartered
                  accountant
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  A board resolution or power of attorney issued in favor of the
                  signing authority, if the name of the signing authority is not
                  mentioned in the IEC/MOA/partnership deed/trust deed of the
                  company/firm/trust
                </li>
                <li><i className="uil uil-check"></i>{" "}A GST registration certificate.</li>
              </ul></div></div>
              <h3 className="mt-4">Types of Exporters/Importers Covered - RCMC</h3>
              <p>
                The online RCMC application process is available for various
                types of exporters and importers, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Ordinary Membership:</strong> This type of membership
                  is suitable for businesses new to the export and import
                  industry and looking for basic membership.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Associate Membership:</strong> This membership is for
                  entities involved in the export and import trade for a
                  significant period and has an established business. The fee
                  for associate membership is higher than ordinary membership
                  and includes a small amount of GST.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Premier Trading House (PTH) Membership:</strong> This
                  membership is for companies with a significant share in
                  India's total exports and substantially contributed to India's
                  international trade.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Star Export House (SEH) Membership:</strong> This
                  membership is for companies that have demonstrated consistent
                  export growth and earned significant foreign exchange.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Trading House (TH) Membership:</strong> This
                  membership is for companies engaged in import and export
                  activities with an annual turnover of at least INR 100 crores.
                </li>
              </ul></div></div>
              <h3 className="mt-4">Compliance with RCMC</h3>
              <p>
                Compliance with the RCMC Certificate is mandatory for exporters
                who wish to participate in various government schemes and
                programs related to exports. Some of the important compliance
                requirements related to RCMC are as follows:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Renewal of RCMC:</strong> The RCMC is valid for five
                  years, after which it needs to be renewed. Failure to renew
                  the RCMC can result in non-compliance.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Adherence to Export-Import Policy:</strong> Exporters
                  must adhere to the export-import policy guidelines and
                  conditions related to the RCMC issued by the DGFT.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Submission of Annual Export Data:</strong> Exporters
                  must submit their annual export data to the DGFT as required.
                  Failure to do so can result in the suspension or cancellation
                  of the RCMC.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Compliance with Customs Regulations:</strong>{" "}
                  Exporters must comply with the customs regulations and
                  procedures related to the export of goods. Non-compliance can
                  result in penalties and other legal actions.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Compliance with Foreign Trade Regulations:</strong>{" "}
                  Exporters must comply with the various foreign trade
                  regulations related to the export of goods, such as compliance
                  with export control regulations, sanctions, and embargoes.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Adherence to Quality Standards:</strong> Exporters
                  must adhere to the quality standards specified by the
                  importing country for exporting goods.
                </li>
                <li><i className="uil uil-check"></i>{" "}
                  <strong>Maintenance of Records:</strong> Exporters must
                  maintain records related to their export transactions and
                  comply with the record-keeping requirements of the DGFT.
                </li>
              </ul></div></div>
              <p className="mt-4">
                Compliance with RCMC requirements is essential for exporters to
                participate in various export-related schemes and programs and
                to avoid penalties and legal actions.
              </p>
              <h3>
                RCMC Registration Procedure: DGFT Common Digital Platform for
                filing of RCMC{" "}
              </h3>
              <p>
                The DGFT has recently launched the e-RCMC module as part of its
                IT revamp project. This module is a common digital platform
                designed to provide exporters, importers, and issuing agencies
                with single-point access for RCMC/RC-related processes,
                including new/modified/renewal RCMC/RC applications. The primary
                aim of this platform is to offer an electronic, contactless
                single window for RCMC/RC-related processes, making obtaining
                RCMC certificates simpler and more efficient.
              </p>
              <h3>
                Get Your RCMC Certificate Quickly with
                LegallensIndia&nbsp;&nbsp;
              </h3>
              <p>
                At LegallensIndia, We can assist in filing the RCMC application
                online through the DGFT's e-RCMC module. We can ensure that the
                application is filed correctly and that the applicant receives
                the RCMC certificate as soon as possible with reasonable RCMC
                registration fees.
              </p>
              <p>
                LegallensIndia can provide reliable and efficient assistance to
                businesses seeking their RCMC registration with affordable RCMC
                registration fees. Our experience, expertise, and dedication to
                client satisfaction make us a good choice for businesses seeking
                RCMC registration online services.
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
