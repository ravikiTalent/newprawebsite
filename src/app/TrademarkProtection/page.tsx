import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkProtection() {
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
                Trademark Protection
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                In today’s highly competitive business environment, your brand
                is your most valuable asset.
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
                { id: 3, title: "Trademark Protection", url: "" },
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
                      <h5 className="card-title">Trademark Protection</h5>
                      <p>
                        In today’s highly competitive business environment, your
                        brand is your most valuable asset.
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

              <h2 className="display-4 mb-3">Trademark Protection</h2>
              <p>
                <em className="text-center block">
                  Protect Your Brand, Secure Your Identity
                </em>
              </p>
              <p>
                In today’s highly competitive business environment, your brand
                is your most valuable asset. Your brand’s name, logo, or slogan
                creates an identity in the minds of your customers and
                distinguishes you from your competitors. Protecting these brand
                elements is critical to maintaining your business reputation and
                preventing misuse by others.
              </p>
              <p>
                Trademark protection is the legal way to safeguard your brand.
                It grants you exclusive rights over your unique mark and
                empowers you to take legal action against unauthorised use. At
                LegallensIndia, we specialise in providing end-to-end trademark
                protection services, ensuring your brand is safe, secure, and
                legally enforceable across India.
              </p>
              <h3>What is a Trademark?</h3>
              <p>
                A trademark is a distinctive sign, symbol, word, phrase, logo,
                design, or a combination thereof that identifies and
                distinguishes the goods or services of one business from those
                of others. It represents the brand’s goodwill and reputation and
                provides the legal right to exclusive use.
              </p>
              <p>Common types of trademarks include:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Brand names
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Logos and symbols
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Taglines or slogans
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Product shapes and
                      packaging
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Sounds and colours (in
                      certain cases)
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Why is Trademark Protection Important?</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Exclusive Rights:</strong> A registered trademark
                      gives you exclusive rights to use the mark for the goods
                      and services it covers, preventing unauthorised use by
                      competitors.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Brand Recognition:</strong> Trademarks build brand
                      loyalty and customer trust. A protected trademark ensures
                      that your customers can easily identify your products and
                      services.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Recourse:</strong> Infringement of an
                      unregistered trademark can be hard to prove. Registration
                      provides strong legal evidence, making it easier to
                      enforce your rights in court.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Asset:</strong> Trademarks are intangible
                      assets that add value to your business. They can be sold,
                      licensed, or used as collateral for loans.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nationwide Protection:</strong> In India,
                      trademark registration provides protection across the
                      entire country, unlike common law rights that are limited
                      to specific regions.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Who Needs Trademark Protection?</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Startups and Entrepreneurs:</strong> Protect your
                      new brand identity from the outset.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Established Businesses:</strong> Prevent others
                      from diluting your brand reputation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>E-commerce Sellers:</strong> Secure your online
                      presence with unique trademarks.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Manufacturers and Service Providers:</strong>{" "}
                      Safeguard your product and service names.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Franchise Owners:</strong> Ensure your brand is
                      consistently represented in multiple locations.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Creative Professionals:</strong> Protect logos,
                      taglines, and brand elements you create.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Legal Framework for Trademark Protection in India
              </h3>
              <p>
                Trademark protection in India is governed by the{" "}
                <strong>Trademarks Act, 1999</strong> . This legislation
                provides the framework for registering trademarks, protecting
                the rights of trademark owners, and resolving disputes.
              </p>
              <p>
                The Act confers exclusive rights to registered trademark owners,
                allowing them to use the trademark and prevent unauthorized use
                by others. It also provides legal remedies against infringement
                and misuse.
              </p>
              <h3>Registered Trademark Protection</h3>
              <p>
                A registered trademark enjoys strong legal rights and
                enforcement powers under the Trademarks Act, 1999. If your
                trademark is registered, you gain exclusive rights to use the
                mark for the specified goods or services.
              </p>
              <p>
                <strong>Benefits of Registration:</strong>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Provides prima facie
                      evidence of ownership and validity.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Grants statutory
                      protection against misuse.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Empowers you to take
                      legal action through infringement lawsuits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Helps prevent third
                      parties from unauthorised usage.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Infringement Protection: </strong>If someone uses your
                registered trademark—or something deceptively similar—you can:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> File a legal suit for
                      infringement.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Seek a temporary or
                      permanent injunction.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Claim monetary damages
                      or profits made by the infringer.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Request destruction of
                      counterfeit goods and recover legal costs.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Unregistered Trademark Protection</h3>
              <p>
                Even if your trademark is not registered, you still have legal
                recourse under common law through a passing off action. This
                protects your goodwill from misrepresentation by competitors.
              </p>
              <p>
                Passing off occurs when someone uses your brand name or similar
                branding to mislead customers and benefit from your reputation.
                It’s based on the legal principle that no one should benefit
                unfairly from another's brand.
              </p>
              <p>To Succeed in a Passing Off Case, You Must Prove:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> You are the prior user
                      of the mark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Your trademark has
                      acquired distinctiveness and public association.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The defendant’s use
                      creates a likelihood of confusion and causes damage to
                      your business.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <em>
                  While passing off can offer some protection, it’s limited in
                  scope and harder to enforce. Trademark registration provides a
                  strong legal shield, allowing for easier enforcement, better
                  protection across India, and long-term brand security.&nbsp;
                </em>
              </p>
              <h3>How to Protect Your Trademark in India?</h3>
              <p>
                Protecting your trademark is essential to prevent misuse,
                safeguard your reputation, and maintain your exclusive rights.
                Here’s a step-by-step guide on how to protect your trademark
                effectively in India:
              </p>
              <h4>1. Understand What a Trademark Is</h4>
              <p>
                A trademark is any visible sign or symbol capable of
                distinguishing your goods or services from those of others. It
                may include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Brand names
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Logos
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Slogans
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Designs
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Letters or numerals
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Combination of the above
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Your trademark acts as a badge of origin and goodwill, helping
                customers identify your products or services.
              </p>
              <h4>2. Conduct a Comprehensive Trademark Search</h4>
              <p>
                Before applying for trademark registration, it is crucial to
                conduct a thorough search to ensure that your proposed trademark
                does not conflict with existing trademarks.
              </p>
              <p>Use the LegallensIndia trademark search tool for checks.</p>
              <h4>
                3. Register Your Trademark with the Indian Trademark Registry
              </h4>
              <p>
                Although trademark rights can arise from use, registering your
                trademark provides stronger legal protection and exclusive
                rights nationwide.
              </p>
              <p>Benefits of trademark registration include:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Legal presumption of
                      ownership and validity.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Statutory protection
                      against infringement.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Ability to initiate
                      legal action against unauthorized users.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Licensing and
                      franchising opportunities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Enhanced commercial
                      value and goodwill.&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                4. Select the Appropriate Class for Registration
              </h4>
              <p>
                India follows the Nice Classification system, categorizing goods
                and services into 45 classes. Choose the class(es) that best
                represent your business activities to ensure comprehensive
                protection for your trademark.
              </p>
              <h4>5. File the Trademark Application</h4>
              <p>
                You can file your trademark application either online. The
                application must contain:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Applicant’s details
                      (individual, company, or partnership).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A clear representation
                      of the trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> List of goods or
                      services and their respective class.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Power of attorney if
                      represented by an agent.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Required fees.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Once filed, the application undergoes examination for
                objections, and if cleared, it is published in the Trademark
                Journal for public opposition.&nbsp;
              </p>
              <h4>6. Monitor and Enforce Your Trademark Rights</h4>
              <p>
                Trademark registration is not the end of protection. You must
                vigilantly monitor the market to identify any unauthorised or
                confusingly similar use of your trademark.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Use online monitoring
                      tools or hire experts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Act promptly by sending
                      cease and desist notices.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> File suits for trademark
                      infringement in the appropriate courts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Seek remedies such as
                      injunctions, damages, and destruction of counterfeit
                      goods.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Timely enforcement helps
                      maintain the exclusivity and value of your trademark.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">7. Renew Your Trademark Registration</h4>
              <p>
                Trademark registration in India lasts for 10 years from the date
                of application and can be renewed indefinitely every 10 years.
                Renewal is essential to keep your trademark rights active.
              </p>
              <h3>Avoid Common Mistakes in Trademark Protection</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Delaying registration,
                      which risks losing priority.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Failing to conduct a
                      proper trademark search.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Neglecting to monitor
                      and enforce your rights.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Missing trademark
                      renewal deadlines.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Overlooking online brand
                      protection measures.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Start Trademark Protection with LegallensIndia!
              </h3>
              <p>
                Don't leave your brand vulnerable to misuse or legal disputes.
                At LegallensIndia, we make trademark protection easy, fast, and
                affordable. Whether you're a startup, growing business, or
                established enterprise, our experts help you:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Conduct thorough
                      trademark searches
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Register your trademark
                      under the correct class
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Monitor and enforce your
                      rights
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Renew and manage your
                      trademark long-term
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Handle infringement
                      cases professionally
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>
                  <em>Get Started Today</em>
                </strong>
                <em>
                  {" "}
                  — Secure your brand’s future with trusted legal support from
                  LegallensIndia.
                </em>
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
