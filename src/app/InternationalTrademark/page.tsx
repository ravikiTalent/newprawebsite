import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function InternationalTrademark() {
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
                International Trademark
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Trademark filing can help protect a brand, business name or logo
                in a country from being copied by others.
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
                { id: 2, title: "International Trademark", url: "" },
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
                      <h5 className="card-title">International Trademark</h5>
                      <p>
                        Trademark filing can help protect a brand, business name
                        or logo in a country from being copied by others.
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
                International Trademark Registration
              </h2>
              <p>
                Looking to safeguard your brand on a global scale? International
                trademark registration is crucial for businesses aiming to
                extend their reach beyond domestic markets. This process secures
                exclusive rights to your brand in multiple countries, protecting
                it from unauthorised use and maintaining its unique identity
                worldwide.
              </p>
              <p>
                With LegallensIndia, the complexities of international trademark
                filing are effortlessly managed. Our expert team offers thorough
                guidance and extensive support, ensuring robust protection of
                your brand worldwide and facilitating its international
                expansion.
              </p>
              <p>
                <em>
                  <strong>
                    Trust the experts at LegallensIndia to handle your
                    international trademark filing needs effectively.
                  </strong>
                </em>
              </p>
              <h3>International Trademark Registration&nbsp;&nbsp;</h3>
              <p>
                International trademark registration offers a unified solution
                for securing trademark protection in multiple countries through
                a centralised application system. This system enables both
                businesses and individuals to protect their trademarks not only
                in their home country but also in various international
                jurisdictions. It promotes global brand recognition and
                consistency, crucial for expanding market reach.
              </p>
              <p>
                A primary tool in international trademark registration is the
                Madrid System, managed by the World Intellectual Property
                Organization (WIPO). The Madrid System allows trademark holders
                to protect their mark in over 120 member countries by submitting
                a single application and paying one fee. This efficient and
                cost-effective approach simplifies securing trademark rights
                across multiple countries, enhancing the ease of global branding
                efforts.
              </p>
              <h3>Trademarks</h3>
              <p>
                A trademark is a type of intellectual property that includes any
                recognisable sign, design, or expression that differentiates the
                products or services of one source from those of others.
                Trademarks can be owned by individuals, businesses, or any legal
                entity and are commonly seen on packages, labels, or directly on
                products. For services they are often used in advertising to
                help identify the service provider.
              </p>
              <p>Trademarks serve multiple key purposes:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identification: </strong>They signal the source of
                      a product or service to consumers, aiding them in
                      selecting various options.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Quality Assurance:</strong> They assure consumers
                      of consistent quality, representing the same standard
                      across all products or services bearing the trademark.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Marketing: </strong>Trademarks are vital in
                      branding and marketing, as they help build consumer
                      recognition and loyalty.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Protection: </strong>Holding a trademark
                      provides exclusive rights to use it on specified goods or
                      services, helping to secure the owner"s market position
                      against unauthorised use by competitors.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                To secure trademark rights, one must typically register the
                trademark with the appropriate governmental authority,
                establishing legal protection under the law.
              </p>
              <h3>Types of Trademarks</h3>
              <p>
                Trademarks can take various forms, each serving to identify and
                distinguish products or services in the marketplace uniquely.
                Here are the main types of trademarks that can be registered:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Single Words or Phrases: </strong>These are the
                      most common types of trademarks, representing a
                      distinctive word or a combination of words.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Combinations of Letters and Numerals:</strong>{" "}
                      These trademarks include alphanumeric combinations that
                      uniquely identify a brand.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Logos and Symbols:</strong> Visual designs or
                      symbols representing a company or product, easily
                      recognisable and often used with word marks.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Three-Dimensional Shapes:</strong> This includes
                      the shape of products or their packaging that is
                      distinctive enough to merit trademark protection.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Sounds and Fragrances:</strong> Less common, these
                      trademarks can be any sound or scent that, when associated
                      with a good or service, distinguishes it from others in
                      the market.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Specific Colors or Combinations of Colors:
                      </strong>{" "}
                      Colors can be trademarked if used consistently and
                      distinctively to identify a particular brand or product.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Each trademark protects different aspects of a brand's identity
                and can be crucial in building a strong market presence.
              </p>
              <h3>Types of Trademark Protection</h3>
              <p>
                To ensure your trademark is safeguarded effectively, there are
                different protection strategies available at both national and
                international levels:
              </p>
              <h4>Securing Your Trademark Nationally</h4>
              <p>
                National protection of your trademark begins with the
                registration process. This involves submitting an application
                and the required fees to your local trademark office. Once
                registered, your trademark receives legal recognition and
                protection within that jurisdiction, which allows you to enforce
                your trademark rights effectively.
              </p>
              <h4>Protecting Your Trademark Internationally</h4>
              <p>
                Direct Filing in Each Country: For international protection, you
                can file a trademark application directly in each country where
                you want protection. This method requires you to comply with
                each country's trademark office's unique legal requirements and
                procedures, which can vary widely.
              </p>
              <p>
                Utilising the WIPO's Madrid System: The World Intellectual
                Property Organization's Madrid System offers a more streamlined
                approach. By submitting a single application, you can seek
                protection in over 120 countries simultaneously, greatly
                simplifying the process of international trademark registration.
                This system allows for centralised management of your trademark
                registrations in multiple jurisdictions, reducing complexity and
                potentially lowering costs.
              </p>
              <h3>Benefits of Global Trademark Registration</h3>
              <p>
                International trademark registration offers substantial
                advantages for businesses aiming to protect and maximise their
                brand globally. Here are some of the key benefits:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Broader Protection:</strong> By securing trademark
                      rights in multiple countries, you ensure your brand's
                      comprehensive global protection across all key markets.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Streamlined Process:</strong> Utilizing systems
                      like the Madrid Protocol facilitates trademark
                      registration in multiple jurisdictions simultaneously,
                      eliminating the need for separate applications in each
                      country and simplifying the process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cost Efficiency:</strong> Filing a single
                      application for international registration can be more
                      cost-effective than submitting multiple national
                      applications. This approach can lead to significant
                      savings in both filing fees and administrative efforts.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Centralised Management:</strong> International
                      registration provides a centralised system for managing
                      trademark rights across various countries, making it
                      easier to maintain and enforce your trademarks globally
                      through a single administrative process.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Leverage:</strong> Holding an
                      internationally registered trademark strengthens your
                      legal position to take action against infringement and
                      counterfeit activities across multiple jurisdictions.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Market Expansion Support:</strong> Securing
                      international trademark protection is essential for
                      businesses planning to enter new markets. It ensures that
                      your brand is legally protected as you expand, helping to
                      prevent conflicts and establish your presence.
                    </li>
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <strong>Brand Value Enhancement:</strong> A trademark
                      protected internationally increases your brand's overall
                      value. It becomes more attractive for licensing,
                      franchising, and business partnerships, facilitating
                      easier access to broader markets and potential revenue
                      streams.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Duration and Renewal of Trademark Registration</h3>
              <p>
                The term of trademark protection usually extends for ten years
                from the registration date. This standard applies across most
                international jurisdictions, including those participating in
                systems like the Madrid Protocol for international trademark
                registration. Crucially, the protection provided by a trademark
                registration can be renewed indefinitely. To maintain the
                registration, the trademark must remain in use, and the renewal
                fees need to be paid on time.
              </p>
              <h3>
                The Madrid System for International Trademark Registration
              </h3>
              <p>
                The Madrid System is a streamlined international trademark
                framework that simplifies registering and managing trademarks in
                multiple countries. Administered by the World Intellectual
                Property Organization (WIPO), it enables trademark owners to
                apply for protection in over 120 member countries of the Madrid
                Union by filing a single international application and paying
                one set of fees. This system facilitates the central management
                of trademarks, allowing for easy modifications, renewals, and
                expansions of trademark protection globally through a unified
                platform.
              </p>
              <h3>Eligibility Criteria for Using the Madrid System</h3>
              <p>
                To be eligible to use the Madrid System for international
                trademark registration, there are specific criteria that must be
                met:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Nationality or
                      Residency: You need to be a national of, or have a
                      domicile or active business operations within, any of the
                      130 countries represented by the 114 members of the Madrid
                      System.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Existing Trademark
                      Application or Registration: You must already have a
                      trademark application or registration (often called the
                      "basic application" or "basic registration") filed with
                      the Intellectual Property (IP) Office of a Madrid System
                      member country or region.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Benefits of Using the Madrid System for Trademark Registration
              </h3>
              <p>
                The Madrid System, administered by the World Intellectual
                Property Organization (WIPO), provides a streamlined and
                efficient method for internationally securing and managing
                trademark protection. This system is advantageous for businesses
                of all sizes, from small startups to large multinational
                corporations, as it simplifies the processes involved in brand
                management across various markets.
              </p>
              <p>Key Advantages of the Madrid System:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Convenience: Businesses
                      can submit a single international trademark application in
                      one language, with one set of fees, and in a single
                      currency. This simplifies the process of applying for
                      brand protection in multiple territories simultaneously.
                      Moreover, the Madrid System offers central, digital
                      management of international trademark portfolios through
                      WIPO, facilitating easier brand expansion into new
                      markets.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Global Reach: Covering
                      territories representing over 80% of the world's trade,
                      the Madrid System enables trademark registration and
                      management across all or any of its member territories.
                      This extensive coverage is ideal for businesses
                      establishing or broadening their international presence.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Cost Efficiency: Filing
                      one application instead of multiple national or regional
                      applications saves time and financial resources. The
                      system also reduces the need for translations and the
                      hiring of local representatives in each country, further
                      reducing costs.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                With over 1.7 million registered trademarks, the Madrid System
                is preferred for global trademark registration among brand
                owners looking to expand internationally.
              </p>
              <p>
                Experts at LegallensIndia are well-prepared to help you navigate
                the complexities of the Madrid System for international
                trademark registration, ensuring a smooth and effective process.
              </p>
              <h3>
                <span>International trademark registration procedure</span>
              </h3>
              <p>
                The international trademark registration process primarily
                utilises the Madrid System, offering a streamlined and
                cost-effective approach for registering and managing trademarks
                globally. Here is a detailed overview of the&nbsp;
                <span>international trademark registration procedure:</span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Global Trademark Search:</strong>&nbsp;
                      </span>
                      Before applying for international trademark registration,
                      the applicant must perform a global trademark search. This
                      can be done using the WIPO’s Global Brand Database to
                      check for similar or identical trademarks that are already
                      registered. It's essential to ensure that no conflicting
                      trademarks exist in the Madrid Protocol countries where
                      the trademark registration is intended. If a conflicting
                      trademark is found, the application may be rejected.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <i className="uil uil-check"></i> Basic Application or
                      Registration: You must first have an existing trademark
                      application or registration (the basic mark) in your home
                      country's trademark office. This acts as the foundation
                      for your international application.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> International
                      Application: You can file a single international
                      application through the World Intellectual Property
                      Organization (WIPO). This application allows you to choose
                      the member countries of the Madrid System where you wish
                      to protect your trademark. Depending on local regulations,
                      you can submit this application directly to WIPO or
                      through your national or regional trademark office.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Designation of
                      Countries: In the international application, specify the
                      Madrid System member countries where you seek trademark
                      protection. These designations indicate where you plan to
                      use your trademark actively.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Payment of Fees: The
                      fees for international registration include a basic fee
                      and additional fees for each country you designate. These
                      fees may vary depending on whether your trademark
                      application is for a black-and-white or colour mark and
                      how many classes of goods or services you are registering.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Examination by WIPO:
                      WIPO reviews your application for compliance with the
                      Madrid System's requirements. If your application meets
                      all criteria, WIPO will record your trademark in the
                      International Register and publish it in the WIPO Gazette
                      of International Marks.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Examination by
                      Designated Countries: Following approval from WIPO, each
                      designated country will conduct its review based on local
                      trademark laws. This may include checks for conflicts with
                      existing trademarks and adherence to local regulations.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Notification of
                      Decisions: WIPO will inform you of the decisions from each
                      designated country's trademark office. If any country
                      refuses protection, you can address these refusals
                      directly with the respective country's office, typically
                      requiring the involvement of local agents or attorneys.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Protection and Renewal:
                      If granted, your international registration protects your
                      trademark in the designated countries for 10 years from
                      the registration date. This protection can be renewed for
                      subsequent 10-year periods. You can manage your
                      registration through WIPO, including handling renewals,
                      adding new country designations, and changing your
                      registration.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Management of the
                      International Registration: You may need to record changes
                      with WIPO throughout the life of the international
                      registration, such as changes in ownership or updates to
                      the holder's name or address.
                    </li>
                    <li>
                      <i className="uil uil-check"></i> Use Requirements: In
                      many jurisdictions, active use of the trademark is
                      necessary to maintain registration. In some countries, you
                      may need to provide proof of use to prevent cancellation.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                LegallensIndia experts can guide you through the entire&nbsp;
                <span>international trademark registration procedure</span>,
                ensuring a smooth and successful registration.
              </p>
              <h3>
                Why Choose LegallensIndia for Your International Trademark
                Filings?
              </h3>
              <p>
                <span></span>
              </p>
              <p>
                <span>
                  LegallensIndia is your ideal partner for international
                  trademark registration India, offering unparalleled expertise
                  and experience in the complexities of global trademark
                  registration. We provide tailored, comprehensive support to
                  meet your needs, ensuring your brand is protected effectively
                  across multiple jurisdictions.&nbsp;
                </span>
                <span>
                  Our dedicated team is committed to delivering efficient and
                  reliable services, from conducting a global trademark search
                  and simplifying the application process to assisting with
                  ongoing maintenance and enforcement.&nbsp;
                </span>
                Choose LegallensIndia for seamless international trademark
                registration India, and trust us to safeguard your brand's
                integrity and enhance its potential on the international stage.
              </p>
              <p>
                <span>
                  <em>
                    Explore the benefits of safeguarding your brand globally
                    with LegallensIndia. Start your international trademark
                    registration in India today!
                  </em>
                </span>
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
