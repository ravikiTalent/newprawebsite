import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function BarcodeRegistration() {
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
                Barcode Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Barcode registration is registering your product with a unique barcode that barcode scanners can scan and read.
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
                { id: 3, title: "Barcode Registration", url: "" },
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
                      <h5 className="card-title">Barcode Registration</h5>
                      <p>Barcode registration is registering your product with a unique barcode that barcode scanners can scan and read.
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

              <h2 className="display-4 mb-3">Barcode Registration</h2>
              <p>
                Barcode registration is registering your product with a unique
                barcode that barcode scanners can scan and read. The barcode
                helps in identifying your product and also helps in tracking
                your product's movement throughout the supply chain. Barcode
                registration is crucial for businesses; especially those
                involved in manufacturing, warehousing, and retail, as it helps
                streamline their operations and ensures product authenticity.
              </p>
              <p>
                At LegallensIndia, we provide a simple, hassle-free, affordable
                barcode registration online service to help you register
                barcodes for your product with a unique barcode. We assist you
                in obtaining and registering a barcode number with a barcode
                issuing agency. We also help you with the renewal of your
                barcode registration.
              </p>
              <h3>Barcode</h3>
              <p>
                A barcode is a pattern of parallel lines of varying width and
                spacing, along with digits; a machine can read that. It quickly
                encodes and identifies important product details such as product
                numbers, serial numbers, and batch numbers.
              </p>
              <p>
                Barcodes are widely used for efficient product identification in
                various industries, including supermarkets, clothing stores, and
                malls. They offer many advantages, such as reducing errors,
                cost-effectiveness, time-saving, and simplified inventory
                management. This global identification system benefits all
                parties in the supply chain, from manufacturers to logistics and
                wholesalers, by providing an easy and accurate way to identify
                products.
              </p>
              <h3>How Do Businesses Use Barcodes?</h3>
              <p>
                Barcodes are a widely used technology that provides a unique
                symbol, typically consisting of parallel lines and a number,
                which can be scanned to retrieve product information from a
                database. Businesses utilize barcodes in several ways,
                including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inventory management:</strong> Large departmental
                      stores with extensive product lines use barcode systems to
                      track all aspects of the product cycle, from manufacturing
                      to sales.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Asset tracking:</strong> With the significant
                      amount of IT assets businesses holds today, barcodes are
                      used to tag and track assets in asset software.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Returns tracking:</strong> In online shopping,
                      barcodes can be used to track returns. They can also be
                      attached to invoices to facilitate the tracking of
                      payments from customers.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Types of Barcodes</span>
              </h3>
              <p>
                <span>
                  Below, we explore various types of barcodes commonly used in
                  different industries and applications:
                </span>
              </p>
              <h4>
                <span>EAN-13</span>
              </h4>
              <p>
                Known as the International Article Number, which was formerly
                referred to as the European Article Number, the EAN-13 is a
                13-digit barcode extensively used in Europe, India, and other
                countries. It plays a crucial role in the global retail supply
                chain, facilitating efficient product tracking and
                identification.<span></span>
              </p>
              <h4>
                <span>UPC-A</span>
              </h4>
              <p>
                The Universal Product Code (UPC-A) is a 12-digit barcode widely
                used in the United States, Canada, the United Kingdom,
                Australia, and New Zealand. It is essential for standardizing
                and tracking retail products across these nations.<span></span>
              </p>
              <h3>Introduction to GS1 Barcodes</h3>
              <p>
                GS1 is a not-for-profit, international organization that
                develops and maintains standards for barcodes used in global
                trade and logistics. GS1 barcodes help businesses to communicate
                product information efficiently and accurately across the supply
                chain. Below are the major types of GS1 barcodes, each designed
                for specific applications and industries:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        <span>GS1 EAN/UPC Family Barcodes:&nbsp;</span>
                      </strong>
                      <span>
                        These are the first and most commonly utilized GS1
                        barcodes. Known as GTINs (Global Trade Item Numbers) or
                        EANs, these barcodes facilitate the marketing of
                        products through modern retail channels.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>GS1 DataBar Family Barcodes: </strong>GS1 Barcode
                      is primarily
                      <span>
                        &nbsp;used for labelling fresh foods, these barcodes
                        encode information such as batch numbers or expiration
                        dates, along with other details like the item's weight
                        at the time of purchase.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        <span>GS1 Barcodes (1D):&nbsp;</span>
                      </strong>
                      <span>
                        GS1-128 and ITF-14 are adaptable 1D barcodes designed
                        for tracking items across global supply chains. The
                        GS1-128 can incorporate any of the GS1 identification
                        keys and additional data, such as serial numbers and
                        expiration dates. In contrast, the ITF-14 is tailored
                        for corrugated materials and carries only the Global
                        Trade Item Number (GTIN).
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        <span>GS1 Barcodes (2D):&nbsp;</span>
                      </strong>
                      <span>
                        These square or rectangular barcodes, composed of many
                        tiny dots, can store a vast amount of information. They
                        are designed to be readable even when printed small or
                        directly imprinted onto products, making them suitable
                        for a wide range of industries, including manufacturing,
                        warehousing, logistics, and healthcare.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Barcode Registration</h3>
              <p>
                Barcode registration refers to assigning a unique identification
                code to a product or item and linking it to a barcode symbol.
                This identification code can track the item through the supply
                chain and facilitate inventory management, pricing, and other
                business processes.
              </p>
              <p>
                To register a barcode, you must obtain a unique identification
                number from a global organization such as GS1 or EAN
                International. These organizations maintain databases of
                registered identification numbers and issue them to companies
                that want to use GS1 barcodes for their products.
              </p>
              <p>
                Once you have obtained an identification number, you can
                generate barcode symbols using software or hardware that
                supports the barcode format you want to use (e.g., UPC, EAN,
                Code 39, etc.). You can then print the barcode on labels or
                packaging for your products, ensuring the barcode symbol and
                identification code are correctly linked in your database.
              </p>
              <p>
                Registering your barcodes with a global organization ensures
                that your product information is globally recognized and
                standardized, allowing for efficient tracking and communication
                across different supply chain systems.
              </p>
              <h3>Types of Barcodes We Offer</h3>
              <p>
                We are pleased to offer you a package of 100 barcodes with
                different validity periods based on your turnover.
              </p>
              <p>For businesses with a turnover of up to 5 Crores, we offer:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> 100 Barcodes with a
                      validity of 1 year
                    </li>
                    <li>
                      <i className="uil uil-check"></i> 100 Barcodes with a
                      validity of 2 years
                    </li>
                    <li>
                      <i className="uil uil-check"></i> 100 Barcodes with a
                      validity of 3 years
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Our barcode registration service includes assistance with
                obtaining a barcode number and registering it with a barcode
                issuing agency. We also provide ongoing support and renewal
                services to ensure your barcodes remain up-to-date and compliant
                with industry standards.
              </p>
              <h3>Documents Required to Register Barcode</h3>
              <p>
                The following documents are typically required for barcode
                registration :
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A letter requesting the
                      allotment of a barcode
                    </li>
                    <li>
                      <i className="uil uil-check"></i> PAN card of the entity
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Copy of audited balance
                      sheet
                    </li>
                    <li>
                      <i className="uil uil-check"></i> GST/VAT registration
                      certificate
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Certificate of
                      incorporation/partnership deed
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Memorandum of
                      Association/Articles of Association
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Copy of canceled cheque
                      or bank statement
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Please note that the requirements may vary depending on the
                specific registration authority.
              </p>
              <h3>Barcode registration Fees</h3>
              <p>
                Please note that the barcode registration fees may vary
                depending on the specific registration authority and the type of
                barcode being registered. However, in general, the fees are
                usually determined based on the following factors:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Turnover of the company:</strong> Companies with a
                      higher turnover may be required to pay higher barcode
                      registration fees.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Several barcodes are required:</strong> The fees
                      may also depend on the number of barcodes that must be
                      registered.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Subscription period:</strong> The fees may vary
                      based on the subscription period for which the barcodes
                      are being registered.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Based on these factors, the fees for barcode registration in
                India can vary.
              </p>
              <h3>Advantages of Barcode Registration:</h3>
              <p>
                Barcode registration online offers several benefits to
                businesses, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reduced errors:</strong> Barcode registration
                      reduces errors as the information is automated and
                      eliminates the need for manual data entry.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cost-effective and convenient:</strong> Barcode
                      registration online is easy to obtain, cost-effective, and
                      convenient to print. It can also be customized to meet
                      specific business needs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Detailed product information:</strong> Barcodes
                      contain detailed information about the product, such as
                      product numbers, serial numbers, and batch numbers, which
                      ensures product authenticity.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Optimized inventory:</strong> Barcode registration
                      captures all the product information, making tracking and
                      managing inventory easier, resulting in a more efficient
                      supply chain.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Time-saving:</strong> Barcode registration process
                      saves time as it allows for quick and easy access to
                      product information through barcode readers.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Accurate and faster billing:</strong> The
                      automated information linked to the barcode ensures
                      accurate billing, leading to more efficient
                      decision-making.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unique and global identification:</strong> The
                      bar-coding system facilitates unique and globally
                      recognized identification, ensuring that no two products
                      have the same code.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">How can LegallensIndia help with Barcode Registration?</h3>
              <p>
                Upload the necessary documents and business details on our web
                portal to obtain barcode registration online. Next, consult our
                business advisor regarding the product you wish to register for
                a barcode.
              </p>
              <p>
                Choose a package and complete the payment process using one of
                the various payment modes available. Once you place an order,
                one of our dedicated professionals will be assigned to your
                application. A
              </p>
              <p>
                After verifying the documents and information provided, our team
                will apply for barcode registration online. If the registration
                is successful, we will provide you with barcodes and a
                certificate.
              </p>
              <p>
                To complete the barcode registration process, you must submit
                several documents, as mentioned above. Additionally, you must
                submit a letter requesting the allocation of a barcode on your
                company letterhead.
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
