import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function FSSAILicense() {
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
                FSSAI License Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                If your business sells food or edible items, adhering to the
                FSSAI (Food Safety and Standards Authority of India) Act
                regulations is crucial.
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
                { id: 3, title: "FSSAI License Registration", url: "" }
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
                      <h5 className="card-title">FSSAI License</h5>
                      <p>
                        Medium-size traders, transporters, Wholesalers will
                        require the FSSAI state license from the state
                        government. The FBO, having an annual turnover of more
                        than Rs. 12 lakh but not exceeding Rs. 20 crore, is
                        considered a medium-sized FBO and must obtain a state
                        license.
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
                FSSAI License Registration: State &amp; Central License
              </h2>
              <p>
                If your business sells food or edible items, adhering to the
                FSSAI (Food Safety and Standards Authority of India) Act
                regulations is crucial. This legal framework requires your
                business to be officially registered with the government and
                obtain a license from the Food Safety Department. Whether you
                are a small-scale or large-scale food business engaged in
                manufacturing, storing, transporting, or distributing food,
                obtaining FSSAI registration or a license, depending on your
                business's size and nature, is essential. Obtaining food
                registration and complying with these regulations ensures the
                safety and quality of the country's food products.
              </p>
              <p>
                At LegallensIndia, we understand the significance of obtaining
                an FSSAI license registration for your business. We're committed
                to making the FSSAI License online process seamless and
                hassle-free.
              </p>
              <h3>Licensing and Registration for Food Businesses in India</h3>
              <p>
                According to Section 31(1) of the Food Safety and Standards Act,
                2006, all Food Business Operators in India must obtain an FSSAI
                license&nbsp; from the Food Safety &amp; Standards Authority of
                India. This legal requirement is governed by the Food Safety
                &amp; Standards (Licensing and Registration of Food Business)
                Regulations, 2011. Any food manufacturing, storage,
                transportation, or distribution business must hold a valid FSSAI
                License or Registration. The specific type of authorization,
                whether registration or license, depends on the scale and nature
                of the food business.
              </p>
              <h3>Who Requires an FSSAI License?</h3>
              <p>
                In India, any business engaged in activities such as making,
                storing, distributing, selling, or importing food products is
                obligated to secure an FSSAI (Food Safety and Standards
                Authority of India) license. This encompasses restaurants,
                catering services, food processing factories, food delivery
                ventures, and online food sellers requiring FSSAI license apply
                online. Both individuals and companies participating in these
                operations must obtain an FSSAI license online to operate
                lawfully within India. After applying, ensure to engage in the
                FSSAI license check process to find the status of your
                application.
              </p>
              <h3>FSSAI Registration</h3>
              <p>
                is mandatory for small-scale food manufacturers or Food Business
                Operators (FBOs) whose turnover is below Rs. 12 Lakhs unless the
                FBO falls under the category of compulsory licensing. Petty FBOs
                involved in producing or selling food items, such as hawkers,
                petty retailers, itinerant vendors, temporary stall-holders, or
                small-scale food industry enterprises, need to obtain an FSSAI
                registration certificate if they meet the following conditions:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Annual Turnover:</strong> The turnover should be
                      less than Rs. 12 lahks.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Production Capacity:</strong> Food products
                      (excluding milk, meat, and fish) should not exceed 100
                      liters or kg daily.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Milk Procurement:</strong> The milk procurement,
                      handling, and collection should be limited to 500 liters
                      daily.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Slaughtering Capacity:</strong> Slaughtering
                      capacity should be up to ten small animals, two large
                      animals, or 50 poultry birds per day or less.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Food Distribution:</strong> Engaging in food
                      distribution at religious or social gatherings, except as
                      a caterer.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                The FSSAI registration number, consisting of 14 digits, is
                issued by the State Licensing Authority. Notably, the first
                digit of the registration number begins with the digit 2.
              </p>
              <h3>FSSAI License for Food Businesses</h3>
              <p>
                An FSSAI License is a crucial requirement for enterprises with a
                turnover exceeding Rs. 12 lakhs and for Food Business Operators
                (FBOs) engaged in food processing and manufacturing. This
                license is divided into two primary types: Central FSSAI License
                and State FSSAI License. The FSSAI license is identified by a
                14-digit code with the initial digit 1. The choice between a
                State or central license depends on the scale of the business.
                The validity of the license must be maintained through FSSAI
                License Renewal. With the FSSAI license online check, you can
                check the authenticity and validity of your license.
              </p>
              <h3>State License</h3>
              <p>
                FBOs such as medium-scale processors, manufacturers, traders,
                marketers, or transporters fall within the jurisdiction of the
                FSSAI state license, which the respective state government
                grants. Medium-sized FBOs with an annual turnover surpassing Rs.
                12 lakhs but not exceeding Rs. 20 Crores are required to obtain
                a state license. A central license becomes mandatory if an FBO's
                annual turnover exceeds Rs. 20 Crores.
              </p>
              <h3>Central License</h3>
              <p>
                Large-scale enterprises involved in food processing,
                transportation, manufacturing, and international trade of food
                products are obligated to obtain the FSSAI central license. An
                FBO is classified as a large business if its annual turnover
                exceeds Rs. 20 Crores, necessitating acquiring the FSSAI central
                license from the Central Government.
              </p>
              <h3>
                Benefits of Obtaining an FSSAI License for Your Food Business
              </h3>
              <p>
                Obtaining an FSSAI food license apply online offers numerous
                benefits that contribute to the success and credibility of your
                food business:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Compliance:</strong> Acquiring an FSSAI
                      license registration ensures your food business fully
                      complies with regulatory mandates, minimizing legal risks.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Food Safety Assurance:</strong> The license
                      guarantees that your food products adhere to stringent
                      safety standards, giving customers confidence in their
                      quality and safety.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Building Goodwill:</strong> Displaying the FSSAI
                      logo on your products and premises establishes consumer
                      trust, elevating your brand's reputation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Consumer Awareness:</strong> FSSAI registration
                      highlights your dedication to food safety, promoting
                      consumer awareness, and fostering loyalty.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Regulation Facilitation:</strong> The FSSAI
                      license streamlines the management of various aspects,
                      such as manufacturing, storage, distribution, and selling
                      of imported food items, ensuring regulatory compliance.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Attracting Investors:</strong> An FSSAI license
                      adds a layer of credibility to your business, making it
                      more attractive to potential investors who value adherence
                      to quality and safety standards.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Quality Assurance:</strong> The FSSAI registration
                      number prominently displayed at your establishment shows
                      your commitment to hygiene and quality, reassuring
                      customers.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                By obtaining an FSSAI food license apply online and regular
                FSSAI license check online, your business benefits from legal
                adherence, consumer trust, regulatory facilitation, and enhanced
                credibility, leading to a more successful and reputable food
                enterprise.&nbsp;&nbsp;
              </p>
              <h3>Documents Required</h3>
              <p>
                Documents Required for FSSAI license apply online is listed as
                follows:
              </p>
              <h4>Mandatory Documents for Non-Manufacturing KoBs:</h4>
              <p>
                For all types of non-manufacturing/processing Kind of Business,
                the following documents are required:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> A list of Directors,
                      Partners, Proprietor, and Executive members of
                      Society/Trust, including full addresses and contact
                      details, along with the nomination of the authorized
                      Signatory.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Photo ID and address
                      proof issued by a Government authority for the Proprietor,
                      Partner, Directors, and Authorized Signatory.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proof of possession of
                      premises, which can include a Sale Deed, Rent Agreement,
                      or Electricity Bill.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Partnership Deed or Self
                      Declaration for Proprietorship, Memorandum, and Article of
                      Association related to the constitution of the firm.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Copy of the Certificate
                      obtained under the Coop Act, 1861.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Form IX - Nomination of
                      a Person.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Documents for Manufacturing KoBs</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Hotels, Restaurants,
                      Food Vending Establishments, Club/Canteen - Analysis
                      report of water to be used as an ingredient in food from a
                      recognized/public health laboratory.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Importer - Importer
                      Export Code and Recall Pan.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Merchant Exporter -
                      Importer Export Code and a declaration that products meant
                      for export only shall not be exposed for sale and
                      consumption in the domestic market.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Head office/Registered
                      office/e-Commerce - Recall Pan.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Transporters - List of
                      Vehicle Registration Numbers.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                Documents Required for Manufacturers/Processors:
              </h4>
              <p>
                For all manufacturing and processing KoBs, the following
                documents are applicable who prefer for Food licence apply
                online:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> List of Directors,
                      Partners, Proprietor, and Executive Members of
                      Society/Trust, including full addresses and contact
                      details, along with the nomination of the authorized
                      Signatory.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Photo ID and address
                      proof issued by the Government authority for the
                      Proprietor, Partner, Directors, and authorized Signatory.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Proof of Possession of
                      premises, which can include a Sale Deed, Rent Agreement,
                      or Electricity Bill.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Partnership Deed or Self
                      Declaration for Proprietorship, Memorandum, and Article of
                      Association related to the constitution of the firm.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Copy of the certificate
                      obtained under the Coop Act-1861.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Form IX - Nomination of
                      a person as per the FSS Rules, 2008.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Blueprint/layout plan of
                      the processing unit showing the dimensions in
                      meters/square meters and operation-wise area location.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Production unit
                      photographs.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Name and list of
                      equipment and machinery, including the number, installed
                      capacity, and horsepower used.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Analysis report
                      (Chemical and bacteriological) of water to be used as an
                      ingredient in food from a recognized/public health
                      laboratory.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Additionally, certain supplementary documents and FSSAI license
                fees are necessary to obtain FSSAI registration. These documents
                are necessary to initiate the Food registration process. After
                applying, track your FSSAI application status with the help of
                FSSAI license check. Our expert team will provide guidance and
                assistance during the process of food licence apply
                online.&nbsp;
              </p>
              <h3>Validity &amp; FSSAI License Renewal</h3>
              <p>
                The FSSAI License / Registration is issued for 1 to 5 years, as
                the Food Business Operator chooses. This validity period begins
                from the date of issuance. FSSAI License Renewal is essential
                for the Food Business Operator (FBO) to initiate the renewal
                process for the license or registration at least 30 days before
                the current authorization is set to expire.
              </p>
              <h3>
                Penalties for Conducting Business without an FSSAI License
              </h3>
              <p>
                Any individual or food business operator obligated to acquire a
                license but engages in activities such as manufacturing,
                selling, storing, distributing, or importing any food item
                without the required permit shall be subject to penalties. These
                penalties include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Imprisonment:</strong> The offender may face
                      imprisonment for a period that has the potential to extend
                      up to six months.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Monetary Fine:</strong> In addition to
                      imprisonment, the offender can be imposed with a fine,
                      potentially extending up to five lakh rupees.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                It is important to note that carrying out food-related business
                activities without the appropriate FSSAI license can lead to
                legal consequences, including imprisonment and significant
                financial penalties. Timely FSSAI license check can help you to
                reduce the risk of non-compliance penalties and issues.
              </p>
              <h3>Why Choose LegallensIndia for Your Food License Needs?</h3>
              <p>
                Obtaining an FSSAI License is essential for adhering to
                regulations, ensuring food safety, building customer confidence,
                and expanding within the food industry. LegallensIndia is your
                reliable partner for an FSSAI license apply online in India. Our
                team of experts simplifies the process, ensuring accurate
                documentation and a smooth submission experience. Whether you
                run a small business or a larger enterprise, LegallensIndia
                guides you through FSSAI requirements, streamlining compliance
                and allowing you to focus on your core business operations. Our
                experienced professionals will assist you in selecting the
                appropriate food category and license.
              </p>
              <p>
                FSSAI license apply online through LegallensIndia involves a
                straightforward process:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Consultation:</strong>&nbsp;Our experts will
                        guide you through the different types of FSSAI licenses
                        based on your business size and activities at an
                        affordable food license price.
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Collection:</strong> We'll assist you in
                      gathering the necessary documents for your specific
                      license category, simplifying the FSSAI license apply
                      online process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Application Preparation:</strong> Our team will
                      prepare your FSSAI license application with accurate
                      details and documentation.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Submission:</strong> We will submit your
                      application to the relevant FSSAI authorities and track
                      the application status through FSSAI license check online.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Follow-Up:</strong> Our experts will handle any
                      queries or follow-up requests from the authorities on your
                      behalf.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Affordable FSSAI License Fee:</strong> Our FSSAI
                      license fees are designed to be affordable while providing
                      high-quality service, including expert consultation, and
                      timely filing, ensuring a seamless compliance process for
                      your food business.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>License Issuance:</strong> Once approved, your
                      FSSAI license will be issued, allowing you to operate your
                      food business legally.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                As specialists in business services, we aid numerous
                entrepreneurs in acquiring various government licenses every
                year. Don't delay to take the initial step to secure your food
                license today! at a reasonable food license price. For
                comprehensive information about registration and licensing,
                consult our experts.
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
