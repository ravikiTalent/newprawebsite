import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkRegistration() {
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
                Trademark Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Trademark registration grants you exclusive legal rights over
                your brand name, logo, or symbol.
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
                { id: 2, title: "Trademark", url: "Trademark" },
                { id: 3, title: "Trademark Registration", url: "" },
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
                      <h5 className="card-title">Trademark Registration</h5>
                      <p>
                        Trademark registration grants you exclusive legal rights
                        over your brand name, logo, or symbol.
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

              <h2 className="display-4 mb-3">Trademark Registration</h2>
              <p>
                Trademark registration grants you exclusive legal rights over
                your brand name, logo, or symbol. In India, this process is
                governed by the Trade Marks Act, 1999, which helps you protect
                and exclusively use your intellectual property in the market.
              </p>
              <p>
                To register a trademark, you need to file Form TM-A with the
                Trademark Office and choose the appropriate class for your goods
                or services, ensuring your brand receives the right protection.
                Once registered, you can legally use the ® symbol to indicate
                your trademark is officially recognised.
              </p>
              <p>
                At LegallensIndia, we make trademark registration easy. Our expert
                team guides you through trademark searches, handles any
                oppositions, and supports you with renewals. With the assistance
                of our experienced trademark attorneys, you can secure your
                trademark certificate confidently, safeguarding your
                intellectual property and establishing a strong legal identity
                for your brand.
              </p>
              <p>
                Let LegallensIndia be your trusted partner, securing your brand's
                identity and protecting your intellectual property.
              </p>
              <h3>What is a Trademark?</h3>
              <p>
                A trademark is a form of intellectual property that can be a
                word, phrase, symbol, design, or a combination of these
                elements, used to uniquely identify and distinguish the goods or
                services of one business from those of others. According to the
                Trade Marks Act, 1999, a trademark may also include the shape of
                products, their packaging, or specific color combinations, as
                long as these can be graphically represented and serve to
                differentiate one product or service from another.
              </p>
              <h3>Why Should You Register a Trademark?</h3>
              <p>
                In India, registering your trademark provides legal protection
                under the Trademarks Act, 1999, allowing you to take action
                against infringement or unauthorised use. A registered trademark
                is valid for 10 years from the filing date and must be renewed
                to maintain protection.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Creates an official
                      public record of ownership through publication in the
                      Trademark Journal.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Distinguishes your brand
                      from competitors and enhances recognition.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Builds customer trust by
                      associating your brand with quality.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Increases business
                      value, attracting investors and partners.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Protects against
                      counterfeiting and imitation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Enables you to license
                      the trademark for additional revenue.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Grants the right to use
                      the ® symbol, enhancing brand credibility.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Becomes a valuable and
                      marketable business asset.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Who can Apply for Trademark Registration Online?
              </h3>
              <p>
                Trademark registration online in India is open to a wide range
                of entities and individuals, including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Individuals
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Joint owners of a
                      company
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Proprietorship firms
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Partnership firms (with
                      a maximum of ten partners)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Limited Liability
                      Partnerships (LLPs)
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Indian companies
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Foreign companies
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Trusts
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Societies
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                This inclusivity ensures that various businesses and entities
                can safeguard their brand identities through trademark or brand
                name registration online.
              </p>
              <h3>Types of Trademark in India</h3>
              <p>
                In India, various trademark registration online or brand name
                registrations cater to different needs and purposes, all aimed
                at enabling consumers to recognize products and services
                associated with specific manufacturers or service providers.
                Here, we delve into the distinct categories of trademark India
                available for registration:
              </p>
              <h4>Product Mark</h4>
              <p>
                This type of trademark is affixed to goods or products, aiding
                in identifying their origin and preserving a company's
                reputation. Trademark India applications falling under classes
                1-34 are typically classified as product marks as they pertain
                to tangible commodities.
              </p>
              <p>Example: Coca-Cola® on beverage bottles.</p>
              <h4>Service Mark</h4>
              <p>
                Similar to a product mark, a service mark is used to identify
                services rather than physical products. Service marks primarily
                help differentiate the providers of certain services from
                others. Trademark applications falling under classes 35-45 are
                often regarded as service marks related to service offerings.
              </p>
              <p>Example: FedEx® for courier and delivery services.</p>
              <h4>Collective Mark</h4>
              <p>
                A collective mark conveys specific characteristics of products
                or services associated with a particular group. It allows
                individuals or entities to protect and represent goods and
                services collectively. The trademark holder may be an
                association, a public institution, or a Section 8 corporation.
              </p>
              <h4>Certification Mark</h4>
              <p>
                The owner issues these marks to indicate information about a
                product's origin, composition, quality, or other pertinent data.
                Certification marks establish product standards and assure
                consumers that the product meets standardized quality
                benchmarks. They are commonly found in packaged goods, toys, and
                electronics.
              </p>
              <p>
                Example: CA® (Chartered Accountants of India) used by members of
                the Institute of Chartered Accountants of India.
              </p>
              <h4>Certification Mark</h4>
              <p>
                The owner issues these marks to indicate information about a
                product's origin, composition, quality, or other pertinent data.
                Certification marks establish product standards and assure
                consumers that the product meets standardized quality
                benchmarks. They are commonly found in packaged goods, toys, and
                electronics.
              </p>
              <p>
                Example: ISI mark (Bureau of Indian Standards) for product
                quality certification.&nbsp;
              </p>
              <h4>Shape Mark</h4>
              <p>
                Shape marks are employed to secure the distinct shape of a
                product, making it easily recognizable to consumers as
                originating from a specific manufacturer. Registration is
                contingent on the shape being deemed distinctive.
              </p>
              <p>Example: The Coca-Cola® contour bottle shape.</p>
              <h4>Pattern Mark</h4>
              <p>
                Pattern marks are used for products featuring unique, designed
                patterns that serve as distinguishing features. To qualify for
                registration, these patterns must stand out as distinctly
                recognizable.
              </p>
              <p>Example: Louis Vuitton® monogram canvas pattern.</p>
              <h4>Sound Mark</h4>
              <p>
                Sound marks are distinctive sounds associated with products or
                services from suppliers. Sound logos, often known as audio
                mnemonics, are commonly heard at the beginning or end of
                commercials. An example in India is the IPL tune.
              </p>
              <p>Example: Nokia® tune or the IPL cricket theme in India.</p>
              <p>
                These diverse categories of trademark registrations, like logo
                trademark registration or trade name registration, offer
                businesses and entities the flexibility to protect their brand
                identity following their unique offerings and market presence.
              </p>
              <h3>Trademark Symbols</h3>
              <p>
                Trademark symbols visually indicate whether a trademark is
                registered or unregistered. The most common ones are TM (™), R
                (®), and SM (℠).
              </p>
              <h4>TM Symbol (™)</h4>
              <p>
                Used by brands that have applied for trademark registration and
                whose application is still pending. It can be used for both
                goods and services, signalling to others that the mark is
                claimed and warning against infringement.
              </p>
              <h4>R Symbol (®)</h4>
              <p>
                Indicates that the trademark is officially registered with the
                Registrar of Trademarks. Unauthorized use of a registered mark
                can lead to legal action by the trademark owner.
              </p>
              <h4>SM Symbol (℠)</h4>
              <p>
                Used for unregistered service marks. It serves the same purpose
                as the ™ symbol but applies specifically to services rather than
                goods.
              </p>
              <h3>Benefits of Trademark Registration</h3>
              <p>
                Trademark registration not only offers legal protection but also
                grants exclusive rights, strengthens your market position, and
                sets your products or services apart from competitors. It
                enhances goodwill, creates a valuable business asset, and
                supports global brand growth, boosting overall brand strength.
              </p>
              <h4>Exclusive Rights &amp; Legal Protection</h4>
              <p>
                Trademark registration grants you the exclusive right to use
                your mark for specific products and services, preventing
                unauthorised use and safeguarding your brand identity.
              </p>
              <h4>Brand Building &amp; Recognition</h4>
              <p>
                A trademark differentiates your offerings and builds a strong,
                unique identity. Trademark registration boosts consumer trust,
                loyalty, and recognition — all vital for long-term brand
                success.
              </p>
              <h4>Creation of a Valuable Asset</h4>
              <p>
                A registered trademark becomes an intangible business asset that
                can be sold, licensed, or used as collateral. It protects your
                investment by stopping others from using a similar name or logo
                and increases your brand’s market value, making it more
                appealing to investors.
              </p>
              <h4>Right to Use the ® Symbol</h4>
              <p>
                Once your trademark is officially registered, you gain the right
                to use the ® symbol, which signals authenticity, credibility,
                and legal protection.
              </p>
              <h4>Protection Against Infringement</h4>
              <p>
                A registered trademark enables you to take legal action against
                infringement and file trademark opposition in disputes, ensuring
                your rights remain secure.
              </p>
              <h4>Long-Term Validity</h4>
              <p>
                Trademark registration lasts for ten years from the filing date,
                offering long-term security for your brand registration with the
                option for unlimited renewals.
              </p>
              <h4>Global Trademark Registration</h4>
              <p>
                International trademark registration is made easier through
                treaties like the Madrid Protocol and Vienna Codification,
                allowing your brand to be protected in multiple countries.
              </p>
              <h4>Customer Attraction</h4>
              <p>
                Brand registration enhances visibility and credibility, helping
                your brand stand out in the marketplace and attract more
                customers by assuring them of authenticity and quality.
              </p>
              <p>
                Brand registration in India with the help of LegallensIndia, you
                can rest assured that your brand is in capable hands. Don't
                delay any longer ensure the validity and exclusivity of your
                trademark today. Get started with LegallensIndia and safeguard
                your valuable intellectual property rights.
              </p>
              <h3>
                Required Documents &amp; Details to Apply for&nbsp;
                <span>Registration in</span>
                <span>&nbsp;Trademark India</span>
              </h3>
              <p>
                To initiate the company trademark registration online or brand
                name registration process in India, you will need to furnish the
                following initial details:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Applicant's Name:</strong> The name of the
                      individual, company, or entity applying for the brand
                      trademark registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Type:</strong> Specify the type of
                      business entity, such as sole proprietorship, partnership,
                      private limited company, etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Objectives:</strong> Provide a brief
                      description of your business objectives or activities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Brand/Logo/Slogan Name:</strong> Clearly mention
                      the name, logo, or slogan that you intend to trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registration Address:</strong> Furnish the
                      official address of the entity applying for the trademark.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                In addition to these details, you will be required to submit the
                following documents to apply trademark registration online, or
                even logo trademark registration process:
              </p>
              <p>
                <strong></strong>
              </p>
              <table className="table mb-5 border">
                <tbody>
                  <tr>
                    <td className="border">
                      <p>
                        <strong>Applicant Type</strong>
                      </p>
                    </td>
                    <td className="border">
                      <p>
                        <strong>Required Documents</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Individuals</p>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> PAN card
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Aadhar card
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Proprietorship</p>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> GST certificate
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i>{" "}
                              <span>PAN card</span>
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i>{" "}
                              <span>Aadhar card</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Company</p>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> Incorporation
                              certificate
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Company PAN card
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> MSME Certificate
                              (if applicable)
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Logo (if
                              applicable)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Partnership Firms</p>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> Partnership deed
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Partnership PAN
                              card
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> MSME
                              registration certificate
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Logo (if
                              applicable)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Limited Liability Partnerships (LLPs)</p>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> LLP deed
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Incorporation
                              certificate
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i>{" "}
                              <span>LLP PAN card</span>
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i>{" "}
                              <span> Logo (if applicable)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <p>Trusts</p>
                    </td>
                    <td className="border">
                      <div className="row gy-3 gx-xl-8">
                        <div className="col-xl-12">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                            <li className="">
                              <i className="uil uil-check"></i> Trust deed
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Trust PAN card
                            </li>
                            <li className="">
                              <i className="uil uil-check"></i> Logo (if
                              applicable)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong></strong>
              </p>
              <h3>How to Register Trademark in India Online</h3>
              <p>
                After completing the trademark search, the next step is filing
                the brand trademark registration application with the Trademark
                Registrar. Here are the step by step process on how to register
                trademark in India online:
              </p>
              <h3>
                <span>Trademark search</span>
              </h3>
              <p>
                Before apply trademark India, conducting a comprehensive
                trademark search is of paramount importance. This step is
                critical to safeguard the integrity and exclusivity of your
                brand. An online&nbsp;trademark search entails furnishing the
                brand name and the relevant class for scrutiny. This meticulous
                search aids in identifying pre-existing trademarks in the
                market, enabling the assessment of potential conflicts and,
                ultimately, ensuring the protection of your brand. LegallensIndia
                provides online trademark search tools and support to facilitate
                this pivotal process, assisting you in making informed decisions
                regarding your trademark or brand name registration.
              </p>
              <h4>Choosing the Correct Trademark Class</h4>
              <p>
                Trademark classes are a critical aspect of the registration
                process, as they categorize goods and services into 45 distinct
                classes. To register trademark India, you should carefully
                select the appropriate class because it determines the validity
                of your trademark registration online or trade name registration
                concerning your business's products or services. If your company
                operates across various areas falling into different classes,
                it's crucial to ensure that you apply for a trademark under all
                the relevant classes.
              </p>
              <p>
                In India, some commonly chosen trademark classes to register
                trademark include:
              </p>
              <h4>The Vienna Codification Process</h4>
              <p>
                The Vienna Classification, also called the Vienna Codification,
                is an international system that categorizes the figurative
                elements of trademarks. After filing the trademark registration
                application, the Trademark Registrar will apply the Vienna
                classification to the trademark's figurative elements.
              </p>
              <h4>Trademark Examination</h4>
              <p>
                After completing the Vienna Codification, the trademark
                registration application will be assigned to a Trademark
                Registrar's officer. The officer will assess the application for
                accuracy and generate a trademark examination report. Based on
                this report, the officer can accept the application, allow it
                for trademark journal publication, or raise objections to the
                registration process.
              </p>
              <p>
                In the event of objections, the applicant can address the
                concerns before the Trademark Officer. If the officer finds the
                justifications satisfactory, the trademark will be approved for
                publication in the Trademark Journal.
              </p>
              <h4>Trademark Journal Publication</h4>
              <p>
                Once the Trademark Registrar accepts the application, the
                trademark will be published in the Trademark journal. This
                journal, published weekly, contains details of all trademarks
                the Registrar receives. Members of the public have the
                opportunity to raise objections if they believe the trademark
                registration could harm their interests. If no objections are
                submitted within 90 days of publication, the trademark will be
                registered within 12 weeks.
              </p>
              <h4>Trademark Hearing</h4>
              <p>
                A Trademark Hearing Officer will schedule a hearing if a third
                party objects to the application. Both the applicant and the
                opposing party have the chance to present their arguments. Based
                on the hearings and evidence, the Trademark Hearing Officer will
                decide whether to accept or reject the application of brand
                registration in India.
              </p>
              <h4>Trademark Registration</h4>
              <p>
                In cases where no objections or oppositions are raised, the
                trademark registration certificate will be prepared and issued.
                A trademark is officially considered registered when the
                Trademark Registration Certificate is issued, granting the owner
                exclusive rights to the mark. For example, a logo trademark
                registration will be approved if it doesn't receive any
                objection or opposition.
              </p>
              <p>
                At this point, the ® symbol can be added to the logo or
                trademark.
              </p>
              <h4>Trademark Objection</h4>
              <p>
                Trademark objections are typically one of the initial stages in
                the trademark registration process. Instead of outright denial,
                the Registrar seeks valid reasons or explanations regarding the
                trademark's registrability.
              </p>
              <h4>Trademark Opposition</h4>
              <p>
                Trademark opposition occurs when a third party files an
                objection against register trademark. The Registry accepts
                oppositions from any natural or legal person, including
                individuals, businesses, partnership firms, and trusts.&nbsp;
              </p>
              <p>
                This is the complete process on how to register brand name in
                India. After this you need to renew the trademark to extend its
                validity.
              </p>
              <h4>Trademark Renewal</h4>
              <p>
                It is important to register trademark. But it is important to
                know that it remains valid for ten years from the filing date.
                To ensure the continued protection of your trademark, it is
                imperative to renew it every ten years. This continual renewal
                of your brand name registration secures your marks from misuse
                or exploitation.
              </p>
              <h3>Post-Trademark Registration Procedures</h3>
              <p>
                Once trademark registration is complete, you must follow certain
                steps to maintain protection and enforce your rights.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Renewal: Every 10 years
                      via Form TM-R.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Amendments: Made through
                      Form TM-P for changes in details.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Opposition Handling:
                      Address any filed oppositions within the legal time frame.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Transfers/Assignments:
                      Record them with the Registry using Form TM-P.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Monitoring: Regular
                      trademark checks to detect potential infringements.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Trademark Rectification</h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Purpose: Correct
                      mistakes/omissions in the trademark register.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Reasons: Errors,
                      non-use, or breach of conditions.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Procedure: Submit Form
                      TM-26 with supporting evidence.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Who Can Apply: Any
                      interested party affected by the trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Authority: Trademark
                      Registrar or Intellectual Property Appellate Board (IPAB).
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                How LegallensIndia Can Assist You with Trademark Registration
              </h3>
              <p>
                Online trademark registration in India can be intricate,
                involving numerous steps and government procedures. At
                LegallensIndia, we simplify this process. Here's a breakdown of
                how we can assist you:
              </p>
              <h4>Trademark Search</h4>
              <p>
                Please start the process by providing us with essential
                information about your desired trademark and industry. Our
                experts will thoroughly search the trademark database to
                determine its availability. Once we identify an available brand,
                we move on to the next step, that is, to register trademark.
              </p>
              <h4>Class Selection and Document Collection</h4>
              <p>
                Our professional experts will guide you in selecting the
                appropriate class or classes that comprehensively cover all
                aspects of your business. Concurrently, you can begin uploading
                the documents required for the online trademark registration.
              </p>
              <h4>Trademark Application Filing</h4>
              <p>
                Upon receiving your documents, our expert team will verify their
                accuracy and completeness. We then complete the trademark
                application form on your behalf, ensuring all required documents
                are submitted correctly. Throughout this process, we maintain
                transparency and keep you informed, monitoring notifications
                from the Trademark Registry until the trademark or brand name
                registration is completed.
              </p>
              <p>
                <b>
                  Congratulations! Once the application is submitted, you can
                  start using the ™ symbol
                </b>
              </p>
              <h4>Trademark Objection (if applicable)</h4>
              <p>
                In cases where the trademark examiner raises questions about
                your application, you may receive a trademark objection notice.
                Our experts can aid you in crafting a robust response and
                submitting the necessary documents and evidence.
              </p>
              <p>
                We keep you informed about the status of your application and
                help you navigate any oppositions or hearings. After successful
                registration, LegallensIndia can help with trademark renewal,
                trademark assignment, licensing, and any other post-registration
                services you may require.
              </p>
              <p>
                Are you the one who cares about your brand and intends to
                "trademark my business name"? Are you ready to protect your
                brand and secure your trademark in India? Take the initial step
                in safeguarding your business identity by obtaining Trademark
                Registration or logo trademark registration through
                LegallensIndia.
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
