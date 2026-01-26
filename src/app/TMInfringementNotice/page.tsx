import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TMInfringementNotice() {
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
                Trademark Infringement Notice
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Trademark infringement happens when someone uses a mark that
                closely resembles your registered trademark, leading to consumer
                confusion and damaging your brand's reputation.
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
                { id: 3, title: "Trademark Infringement Notice", url: "" },
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
                      <h5 className="card-title">
                        Trademark Infringement Notice
                      </h5>
                      <p>
                        Trademark infringement happens when someone uses a mark
                        that closely resembles your registered trademark,
                        leading to consumer confusion and damaging your brand's
                        reputation.
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

              <h2 className="display-4 mb-3">Trademark Infringement Notice</h2>
              <p>
                <span>
                  Trademark infringement happens when someone uses a mark that
                  closely resembles your registered trademark, leading to
                  consumer confusion and damaging your brand's reputation. A
                  legal notice for trademark infringement is the first formal
                  step to resolve this, detailing the infringement, demanding
                  cessation, and highlighting potential legal consequences. This
                  trademark violation notice is crucial in safeguarding the
                  distinctiveness of your trademark. If you face such a
                  situation, LegallensIndia is here to assist you. We offer
                  services for drafting and issuing a notice for infringement of
                  trademark, handled professionally by our lawyers through both
                  email and registered post.
                </span>
              </p>
              <p>
                <span>
                  <em>
                    Ready to protect your trademark? Connect with LegallensIndia
                    today to get expert assistance in drafting and issuing a
                    trademark infringement notice.
                  </em>
                </span>
              </p>
              <h3>
                <span>What is Trademark Infringement?</span>
              </h3>
              <p>
                <span>
                  Trademark infringement is the unauthorised use of a trademark
                  identical or deceptively similar to a registered trademark
                  owned by another party. This infringement can involve a
                  symbol, logo, word, phrase, design, or any combination
                  representing a company's goods or services. Such unauthorised
                  use can lead to consumer confusion and unfairly capitalise on
                  the reputation of the established trademark. To combat this,
                  companies can, with adequate evidence and the assistance of a
                  legal professional, take steps to protect their trademarks and
                  uphold their rights.
                </span>
              </p>
              <h3>
                <span>Types of Trademark Infringement</span>
              </h3>
              <p>
                <span>
                  In India, trademark infringement can be categorised into two
                  main types: Direct Infringement and Indirect Infringement.
                  Understanding these distinctions is crucial for businesses and
                  individuals to protect their intellectual property
                  effectively.
                </span>
              </p>
              <h4>
                <span>Direct Infringement</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Unauthorised Use: </strong>
                      </span>
                      <span>
                        Direct infringement occurs when a trademark is used
                        without the permission of its owner. Usage with the
                        owner’s consent does not constitute an infringement.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identical or Deceptively Similar:</strong>
                      <strong> </strong>Infringement happens if the offending
                      trademark is identical to or so similar to the registered
                      trademark that it confuses consumers into believing both
                      marks are associated.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registered Trademark:</strong>
                      <strong> </strong>Only trademarks that are registered
                      under India’s trademark registry are protected against
                      infringement. Unregistered trademarks are subject to the
                      common law of passing off, which requires proving
                      goodwill, misrepresentation, and damage.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Class of Goods or Services:</strong>
                      <strong> </strong>The unauthorised use must pertain to
                      goods or services that fall within the same category as
                      those for which the trademark is registered.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Indirect Infringement</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Vicarious Infringement:</strong>
                      <strong> </strong>This occurs when an entity has the power
                      to control the infringer and benefits from the
                      infringement but fails to prevent it.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Contributory Infringement:</strong>
                      <strong> </strong>This type of infringement involves a
                      party that knowingly assists or contributes to the
                      infringing actions of the direct infringer.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Grounds of Trademark Infringement Notice</span>
              </h3>
              <p>
                <span>
                  Under Section 29 of the Trade Marks Act, 1999, the grounds for
                  trademark infringement in India are clearly defined to protect
                  registered trademarks from unauthorised use and to maintain
                  the integrity of a brand's identity in the market. The
                  following scenarios constitute trademark infringement and
                  essential to send trademark violation notices:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Identity with a Registered Mark:</strong>
                      </span>
                      <span>
                        {" "}
                        Infringement occurs when an unregistered mark is
                        identical to a registered trademark for identical goods
                        or services. This straightforward comparison prevents
                        potential consumer confusion regarding the origin of the
                        goods or services.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Likelihood of Confusion:<span></span>
                        <span> </span>
                      </strong>
                      <span>
                        Infringement is also established if an unregistered mark
                        is similar to a registered trademark in such a way that
                        it causes confusion or deception among consumers. This
                        can include sound, appearance, or meaning similarities
                        that may mislead the public.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Similarity to a Mark with Reputation: </strong>
                      </span>
                      <span>
                        If an unregistered mark is similar to a registered
                        trademark that has a significant reputation in India,
                        and the use of the unregistered mark would take unfair
                        advantage of, or be detrimental to, the distinctive
                        character or repute of the registered trademark, then it
                        constitutes infringement.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>
                          Unauthorized Use on Labeling or Packaging:{" "}
                        </strong>
                      </span>
                      <span>
                        Using a registered trademark on labeling or packaging
                        without the owner’s authorization also counts as
                        infringement. This includes any direct reproduction of
                        the trademark on products or their packaging.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Unfair Advantage in Advertising: </strong>
                      </span>
                      <span>
                        Utilizing a registered trademark in advertising in a way
                        that gains an unfair advantage or is detrimental to its
                        reputation is also considered infringement. This
                        scenario addresses issues where the trademark's goodwill
                        is exploited to mislead consumers or tarnish the
                        trademark’s image. In these cases, notice for
                        infringement of trademark can be issued.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Exceptions to Trademark Infringement&nbsp;&nbsp;</span>
              </h3>
              <p>
                <span>
                  Section 30 of the Trademarks Act 1999 specifies scenarios
                  where a registered trademark does not constitute infringement,
                  providing a legal defence against infringement claims.
                </span>
              </p>
              <p>
                <span>
                  A registered trademark is not infringed under the following
                  conditions:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Using Indicating Characteristics: </strong>When
                      the trademark is used solely to describe the type,
                      quality, quantity, purpose, value, geographical origin,
                      time of production, or other attributes of goods or
                      services.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limitations on Registration: </strong>If the
                      trademark is registered with specific conditions or
                      limitations, any use that adheres to these conditions or
                      falls outside their scope is not considered infringement.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Authorised Use by Proprietor or Registered User:
                      </strong>{" "}
                      Usage of the trademark by the trademark owner or a legally
                      registered user for goods or services associated with the
                      owner does not constitute infringement.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Adaptation of Goods or Services:</strong> The use
                      of the trademark is permissible if it involves adapting it
                      to become a part of, or an accessory to, other goods or
                      services, provided such use is considered reasonably
                      necessary.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Use of Identical or Similar Trademarks: </strong>
                      Under the rights granted by its registration, the
                      legitimate owner may utilize a registered trademark that
                      is identical or similar to another registered trademark.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  When you encounter trademark infringement, it's essential to
                  act swiftly and strategically to protect your intellectual
                  property rights.
                </span>
              </p>
              <h3>
                <span>Trademark Notice</span>
              </h3>
              <p>
                <span>
                  When you encounter trademark infringement, you must act
                  quickly and strategically to safeguard your intellectual
                  property rights. One effective initial step is to send a
                  Trademark Infringement Notice. This legal notice for trademark
                  infringement is a formal legal communication directed at the
                  individual or entity using a logo, phrase, or branding closely
                  resembling your registered trademark. It serves as a
                  preliminary warning, clearly detailing the infringement and
                  demanding an immediate cessation of its use. The primary goal
                  of the trademark violation notice is to protect the trademark
                  owner's brand identity and reputation by preventing consumer
                  confusion and averting potential harm to the brand.
                </span>
              </p>
              <h3>
                <span>When do you send a&nbsp;</span>Trademark Infringement
                Notice?
              </h3>
              <p>
                <span>
                  You can send a legal notice for trademark infringement in the
                  following instances:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unauthorised Use:</strong>
                      <strong> </strong>When someone uses your trademark without
                      your permission.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Similarity:</strong> If the infringing trademark
                      is identical or confusingly similar to your registered
                      trademark, potentially misleading consumers into thinking
                      the infringing product or service is yours.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Direct Competition:</strong>
                      <strong> </strong>When the infringing trademark is used
                      for goods or services that are similar or identical to
                      those offered under your registered trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Public Use:</strong>
                      <strong> </strong>If the infringing trademark is used
                      commercially, such as on packaging, advertising, or a
                      website. Private use or non-commercial mention generally
                      does not constitute infringement.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Substantial Similarity:</strong> When the
                      infringing mark copies a significant part of your
                      trademark, even if there are minor differences or
                      additions, you can send trademark violation notice.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>Essentials to Include in&nbsp;</span>Trademark
                Infringement Notice
              </h3>
              <p>
                Here are the important information to be included in the
                trademark violation notice:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Your Information: </strong>Clearly state your
                      name, contact information (address, phone number, email),
                      and your status as the rightful owner of the registered
                      trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Infringer’s Information:</strong> Include the name
                      and contact details of the party allegedly infringing your
                      trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Trademark Name: </strong>Specify the exact name of
                      your registered trademark.&nbsp;
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registration Details:</strong> Mention the
                      registration number and date of registration for your
                      trademark (if applicable).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Products/Services: </strong>Describe the specific
                      goods or services your trademark is registered for.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Describe the Infringing Mark: </strong>Clearly
                      explain the trademark used by the alleged infringer.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Explain the Similarity</strong>: Detail how the
                      infringing mark is identical to or deceptively similar to
                      your registered trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Provide Evidence (Optional):</strong> If
                      available, include screenshots, copies of packaging, or
                      advertisements demonstrating the infringing use.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cease and Desist: </strong>Clearly state your
                      demand for the infringing party to stop using your
                      trademark immediately.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Specify Actions: </strong>Outline the actions you
                      expect the infringer to take, such as removing the
                      infringing mark from products, websites, or marketing
                      materials.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Set a Deadline: </strong>Provide a reasonable
                      timeframe for the infringer to respond to your notice for
                      infringement of trademark and comply with your demands.
                      This is typically 15-30 days.&nbsp;
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inform of Potential Lawsuit: </strong>Clearly
                      state that you will pursue legal action, such as a lawsuit
                      if the infringing party fails to comply within the
                      specified timeframe.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>
                  Procedure to Draft a Legal Notice for Trademark Infringement
                </span>
              </h3>
              <p>
                <span>
                  Below, we have given the procedure and step by step format to
                  draft a legal notice for trademark infringement,
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Introduction:</strong> Begin by briefly stating
                      the purpose of the notice to inform the recipient of the
                      trademark infringement.&nbsp;&nbsp;
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identification of Parties:</strong> Identify
                      yourself as the trademark's rightful owner and provide
                      your contact details. Similarly, identify the alleged
                      infringer with their contact details.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Trademark Details:</strong>
                      <strong> </strong>Specify the exact name of the infringed
                      trademark and include its registration details, such as
                      the trademark certificate number. Also, describe the goods
                      or services the trademark protects.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nature of Infringement: </strong>Describe the
                      infringing mark used by the alleged infringer and explain
                      how it is identical, similar, or deceptively similar to
                      your registered trademark. If available, include evidence
                      such as screenshots, packaging, or advertisements.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Demand for Action: </strong>Clearly state your
                      demand for the infringing party to cease and desist from
                      using your trademark immediately. Outline the specific
                      actions they must take, such as removing the infringing
                      mark from all products, websites, and marketing materials.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Response Timeframe:</strong> Set a reasonable
                      deadline, typically 15-30 days, for the infringer to
                      respond to your notice and comply with your demands.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Consequences of Non-Compliance:</strong> Inform
                      the infringer of the potential legal action you will take,
                      such as filing a lawsuit, if they fail to comply within
                      the specified timeframe.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Conclusion: </strong>Reiterate your ownership of
                      the trademark and your commitment to protecting your
                      rights, emphasising the seriousness of the matter.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                <span>
                  Protect Your Brand with LegallensIndia: Expert Trademark
                  Infringement Notice Services
                </span>
              </h3>
              <p>
                <span>
                  At LegallensIndia, we understand that your trademark is not just
                  a symbol but a representation of your brand’s identity and
                  reputation. Protecting this vital asset against infringement
                  is crucial. Our legal experts are here to assist you in
                  drafting and issuing effective trademark infringement notices
                  to safeguard your brand’s integrity.
                </span>
              </p>
              <h4>
                <span>Drafting of Trademark Infringement Notice</span>
              </h4>
              <p>
                <span>
                  Our team of seasoned lawyers specialises in the precise
                  crafting of trademark infringement notices. We meticulously
                  analyse the details of infringement against the backdrop of
                  trademark laws to ensure your notice is legally robust. This
                  includes:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identifying the Infringement: </strong>Detailing
                      how your trademark rights have been violated.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Grounding: </strong>Citing relevant
                      trademark laws and registration details that support your
                      claim.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Demand for Action: </strong>Clearly stating the
                      cease and desist demands and any additional actions
                      required by the infringer to remedy the situation.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Issuance by Lawyer</span>
              </h4>
              <p>
                <span>
                  Once drafted, the notice is thoroughly reviewed and issued by
                  our qualified lawyers. We ensure that the notice communicates
                  the seriousness of the infringement with precision and
                  authority. Issuance involves:
                </span>
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Email Delivery:</strong>
                      </span>
                      <span>
                        {" "}
                        Immediate and direct email delivery to the infringer,
                        ensuring swift communication.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registered Post:</strong>
                      <strong> </strong>Send a hard copy of the notice via
                      registered post to provide a legal record of the attempt
                      to resolve the infringement.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">
                <span>Why Choose LegallensIndia?</span>
              </h4>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expertise:</strong> Our legal team's extensive
                      knowledge of trademark law ensures that your notice is
                      drafted with the utmost care and legal expertise.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <span>
                        <strong>Timeliness: </strong>
                      </span>
                      <span>
                        We act swiftly to prevent further damage to your brand,
                        understanding the urgency that trademark infringements
                        demand.
                      </span>
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Comprehensive Support:</strong>
                      <strong> </strong>From initial consultation to the final
                      issuance of the notice, we provide end-to-end support.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  <em>
                    Protect your trademark with LegallensIndia. Our expert
                    guidance is designed to effectively enforce your rights and
                    deter any further infringement. Contact us today to get
                    started on securing your brand’s identity.
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
