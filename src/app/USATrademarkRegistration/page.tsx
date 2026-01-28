import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function USATrademarkRegistration() {
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
                USA Trademark Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Filing of trademark application with the United States Patent
                and Trademark Office. Prices are inclusive of government fee.
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
                { id: 2, title: "USA Trademark Registration", url: "" },
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
                      <h5 className="card-title">USA Trademark Registration</h5>
                      <p>
                        Filing of trademark application with the United States
                        Patent and Trademark Office. Prices are inclusive of
                        government fee.
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

              <h2 className="display-4 mb-3">USA Trademark Registration</h2>
              <p>
                The United States of America (USA) is one of the most coveted
                markets in the world, and we applaud you for considering
                expanding your business there! Your first step is to protect
                your brand in the U.S.; you must know the United States Patent
                and Trademark Office (USPTO) and how to get your trademark
                registration USA.
              </p>
              <p>
                LegallensIndia can help Indian nationals and Indian enterprises
                to obtain trademark registration in the United States.
                LegallensIndia is a leading online business services platform;
                we provide a wide range of services to help businesses start,
                manage, and grow. LegallensIndia provides a streamlined and
                hassle-free process for obtaining trademark registration USA.
                Our team of experienced trademark attorneys and professionals
                can guide you through the process and ensure your trademark
                registration application is prepared correctly and submitted to
                the USPTO.
              </p>
              <h3>Trademark</h3>
              <p>
                Trademarks are intellectual property used to distinguish and
                identify one party's goods and services from another. A
                trademark can be a word, symbol, phrase, design, or combination
                of these elements.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The purpose of a
                      trademark is to help consumers identify and distinguish
                      the goods or services of one company from those of
                      another.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> A strong trademark can
                      help build brand recognition and loyalty and be a valuable
                      asset for a company.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Trademark rights are granted to the owner of the trademark, who
                has the exclusive right to use the trademark in connection with
                the goods or services for which it is registered. This means
                that no one else can use a similar mark in a way that will
                likely cause confusion or deceive consumers.
              </p>
              <h3>Trademark Registration USA</h3>
              <p>
                It is not mandatory to register the trademark, and the rights
                for a trademark can be obtained without registration. But,
                trademark registration in USA offers several benefits and can be
                done by filling out the USA trademark application with the
                USPTO.
              </p>
              <h3>Benefits of U.S. Trademark Registration</h3>
              <p>
                Registration of a trademark in the United States has many
                benefits, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Protection:</strong>&nbsp;Registration of a
                      trademark gives you exclusive rights to use your brand or
                      business name in connection with the goods or services
                      specified in the registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nationwide Rights:</strong>&nbsp;A trademark
                      registration in USA provides national protection, meaning
                      that you can prevent others from using your trademark in
                      connection with similar goods or services anywhere in the
                      United States.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Deters Infringement:</strong>&nbsp;A registered
                      trademark can deter potential infringers, which may be
                      less likely to use or copy your trademark if they know the
                      Law protects it.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Establishes Ownership:</strong> A US trademark
                      registration establishes your ownership of the trademark
                      and can help to prevent disputes with others who may claim
                      a right to use the same or similar trademark.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Provides Remedies:</strong> If someone does
                      infringe on your trademark rights, a registered trademark
                      provides you with legal remedies, such as the right to sue
                      for damages and injunctive relief.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Enhances Brand Value:</strong> A registered
                      trademark can improve the value of your brand or business,
                      making it more attractive to potential investors,
                      partners, and customers.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Access to Customs Recordation:</strong>&nbsp;A
                      registered trademark can be recorded with U.S. Customs and
                      Border Protection to prevent the importation of infringing
                      goods.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Overall, registering a trademark can provide many benefits and
                protections for your brand or business and is an important step
                in building and protecting your intellectual property assets.
              </p>
              <h3>Who can apply for trademark Registration USA?</h3>
              <p>
                Anyone who meets the eligibility criteria for trademark
                registration in USA can apply for a trademark registration,
                including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Individuals
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Partnerships Firm
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Corporations
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Limited Liability
                      Company (LLC)
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Other entities
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Indian nationals and Indian enterprises can also apply for USA
                trademark registration.
              </p>
              <h3>
                Eligibility Criteria for USA Trademark Registration for Indian
              </h3>
              <p>
                Indian individuals and businesses are eligible for US trademark
                registration if they meet the following requirements:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> The trademark must be
                      used in U.S. commerce, which means that the goods or
                      services associated with the trademark must be sold or
                      offered for sale in the United States.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> An application must be
                      filed with the United States Patent and Trademark Office
                      (USPTO) to register trademark USA.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The trademark must not
                      be confusingly similar to any existing trademark or trade
                      name already registered or used in the United States.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The trademark must not
                      be generic or merely descriptive of the goods or services
                      associated with it.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> The trademark must not
                      be immoral or scandalous.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Non-U.S. citizens and
                      entities must have a U.S. attorney represent them in all
                      trademark matters before the USPTO.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                United States Patent and Trademark Office (USPTO)
              </h3>
              <p>
                Trademark regulations vary from country to country. In the
                United States, trademark registration is handled by the United
                States Patent and Trademark Office (USPTO), a federal agency.
              </p>
              <h3>The Law governing the USA trademark registration</h3>
              <p>
                The Law governing trademark registration in the United States is
                the Lanham Act, also known as the Trademark Act of 1946. The
                Lanham Act is codified in Title 15 of the United States Code and
                is administered by USPTO.
              </p>
              <p>
                The Lanham Act provides the legal framework for trademark
                registration USA as well as the use and protection of trademarks
                in the United States. The Lanham Act also sets out the
                requirements for trademark use, including the condition that the
                trademark is used in commerce in connection with the goods or
                services associated with the mark, and establishes the remedies
                available to trademark owners in the event of infringement or
                dilution.
              </p>
              <h3>USA Trademark Classes for Goods and Services</h3>
              <p>
                The USPTO uses the International Classification of Goods and
                Services, known as the Nice Classification, to classify goods
                and services for trademark registration. The Nice Classification
                system divides goods and services into 45 different classes.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> For goods, the USPTO
                      uses 34 classes, ranging from Class 1 to Class 34.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> For services, the USPTO
                      uses 11 classes, ranging from Class 35 to Class 45.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                For filing a US trademark application, the applicant must
                identify the class or classes of goods and/or services for which
                the trademark will be used. This information is used by the
                USPTO to determine whether the trademark is distinctive and not
                likely to be confused with existing trademarks. It is important
                to note that a separate application and filing fee is required
                for each class of goods or services for which trademark
                registration is sought.
              </p>
              <h3>Types of Trademark Registration in USA</h3>
              <p>
                There are several types of trademark registration in the United
                States:
              </p>
              <h4>Standard Character Mark</h4>
              <p>
                A standard character mark is a word, phrase, symbol, or design
                registered in plain text without any specific font, style, or
                color.
              </p>
              <h4>Design Mark</h4>
              <p>
                A design mark is a trademark that includes a specific design or
                logo and is registered in combination with specific design
                elements.
              </p>
              <h4>Collective Mark</h4>
              <p>
                A collective mark is used by group or organization members to
                indicate membership or association with the group. It is
                registered in the name of the group or organization.
              </p>
              <h4>Certification Mark</h4>
              <p>
                A certification mark is a trademark used to certify a product or
                service's quality, characteristics, or origin. It is registered
                by the owner of the mark to indicate that the product or service
                meets certain standards or requirements.
              </p>
              <h4>Sound Mark</h4>
              <p>
                A sound mark is a trademark consisting of a specific sound or
                musical notation registered as a sound recording.
              </p>
              <h4>Motion Mark</h4>
              <p>
                A motion mark is a trademark that includes a specific moving
                image or animation registered as a video or animation file.
              </p>
              <p>
                Choosing the right type of trademark registration for your brand
                or business is important, depending on the nature of the
                trademark and the goods or services associated with it.
                LegallensIndia can help you determine the most appropriate
                registration type for your needs.
              </p>
              <h3>Validity of a USA Trademark Registration</h3>
              <p>
                A USA trademark registration is valid for ten years from the
                registration date. It can be renewed for successive 10-year
                periods as long as the trademark is still used in commerce.
                LegallensIndia can assist Indian nationals and Indian
                enterprises with the renewal of their USA trademark
                registration.
              </p>
              <p>
                To maintain the validity of trademark registration, the
                trademark owner must use the trademark in commerce in connection
                with the goods or services specified in the registration and
                file the necessary renewal applications and fees with the United
                States Patent and Trademark Office (USPTO) on a timely basis.
              </p>
              <h3>Documents Required for USA Trademark Registration</h3>
              <p>
                The following are the critical documents required for trademark
                registration in the United States:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Trademark Application:</strong>&nbsp;The
                      application must include the proposed trademark, the goods
                      or services associated with the trademark, and the name
                      and address of the trademark owner.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Specimen of Use:</strong>&nbsp;For trademarks
                      already in use in the United States, a specimen of use
                      must be provided to demonstrate how the trademark is used
                      in commerce. This can be a photograph, label, or other
                      visual representation of the trademark used on the goods
                      or services associated with the mark.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Power of Attorney:</strong> Non-U.S. citizens and
                      entities must appoint a U.S. attorney to represent them in
                      all trademark matters before the USPTO. A power of
                      attorney document must be submitted to authorize the U.S.
                      attorney to act on behalf of the trademark owner.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Priority Claim:</strong>&nbsp;If the trademark
                      owner has previously applied for the same trademark in
                      another country or jurisdiction, a priority claim can be
                      filed to establish the priority of the trademark.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Statement of Use:</strong>&nbsp;If the trademark
                      is not yet in use in the United States, a statement of use
                      must be filed within a certain timeframe to demonstrate
                      that the trademark is being used in commerce in connection
                      with the goods or services associated with the mark.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Assignment or Transfer:</strong>&nbsp;If the
                      trademark has been assigned or transferred from one owner
                      to another, documentation of the assignment or transfer
                      must be provided.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">USA Trademark Registration Process</h3>
              <p>
                USA Trademark registration can be done through the United States
                Patent and Trademark Office (USPTO). Here are the steps on how
                to register trademark USA:
              </p>
              <h4>Conduct a trademark search</h4>
              <p>
                Before filing a US trademark application, it is important to
                conduct a comprehensive search to ensure that the trademark is
                available for registration and does not infringe on the rights
                of any existing trademarks.
              </p>
              <h4>Determine the appropriate trademark class</h4>
              <p>
                The USPTO uses the International Classification of Goods and
                Services to classify trademarks. You must determine which class
                or classes your goods or services fall under.
              </p>
              <h4>File a trademark application</h4>
              <p>
                Once you have conducted a trademark search and determined that
                your trademark is available, you can file a trademark
                application with the USPTO. Ensure to pay the required USA
                trademark registration cost. LegallensIndia can assist you with
                preparing and filing the trademark application with the USPTO,
                including selecting the appropriate trademark classes and
                drafting the required documentation.
              </p>
              <h4>Hire a U.S. Trademark Attorney</h4>
              <p>
                Non-U.S. citizens and entities must have a U.S. attorney
                represent them in all trademark matters before the USPTO.
                LegallensIndia can help Indian nationals and Indian enterprises
                to hire a U.S. trademark attorney for trademark registration in
                the United States. A U.S. trademark attorney can provide
                valuable legal guidance and assistance throughout the trademark
                registration process and can help ensure that the trademark
                application meets all the requirements.
              </p>
              <h4>Review and examination</h4>
              <p>
                After the trademark application is filed, it will be reviewed by
                a trademark examiner to ensure that it meets all the
                requirements for registration. The examiner will also search to
                ensure no conflicting trademarks. LegallensIndia can assist with
                the review and examination process by responding to any
                objections or requests for information from the trademark
                examiner.
              </p>
              <h4>Publication</h4>
              <p>
                If the trademark application is approved, it will be published
                in the Official Gazette of the USPTO. This allows others to
                oppose the registration of the trademark. We can help to respond
                to any opposition that may be filed.
              </p>
              <h4>Trademark Registration</h4>
              <p>
                If no oppositions are filed, or the oppositions are successfully
                resolved, the trademark will be registered, and a registration
                certificate will be issued. Once a trademark is registered, it
                is essential to maintain the registration by using it in
                commerce and filing the necessary renewal applications and fees
                with the USPTO on a timely basis.
              </p>
              <p>
                This is the step by step procedure on how to register trademark
                in USA. LegallensIndia can assist with obtaining the USA
                trademark registration certificate and maintaining the
                registration at affordable USA trademark registration costs,
                including the registration renewal as required by US trademark
                Law.
              </p>
              <p>
                Here at legallens india, we have a simplified process for obtaining a
                trademark registration in the USA, with reasonable USA trademark
                registration costs. LegallensIndia can connect clients with
                experienced U.S. trademark attorneys who can provide valuable
                legal guidance and assistance throughout the trademark
                registration process.
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
