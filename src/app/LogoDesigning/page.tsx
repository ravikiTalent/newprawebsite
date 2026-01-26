import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function LogoDesigning() {
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
              <h1 className="display-1 text-white mb-3">Logo Designing</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                For any business, establishing a distinct identity and making a
                lasting impact is essential to stand out in the market.
                Designing a logo plays a crucial role in enhancing your brand's
                visibility.
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
                { id: 3, title: "Logo Designing", url: "" },
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
                      <h5 className="card-title">Logo Designing</h5>
                      <p>
                        For any business, establishing a distinct identity and
                        making a lasting impact is essential to stand out in the
                        market. Designing a logo plays a crucial role in
                        enhancing your brand's visibility.
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

              <h2 className="display-4 mb-3">Trademark Logo Design</h2>
              <p>
                For any business, establishing a distinct identity and making a
                lasting impact is essential to stand out in the market.
                Designing a logo plays a crucial role in enhancing your brand's
                visibility. A well-designed logo can create immediate brand
                recognition and significantly shape your target customers'
                perception of your brand. LegallensIndia excels in designing logos
                that are visually appealing and legally secure.
              </p>
              <p>
                From the start, we do more than just craft a memorable logo; we
                ensure it's legally sound. Our skilled team, featuring globally
                recognised trademark experts and innovative graphic designers,
                is dedicated to creating unique logo design online. We cater to
                various business sectors, providing tailored branding trademarks
                solutions. Take the first step towards defining your brand’s
                identity. Contact LegallensIndia for creating logo online and a
                smooth trademark registration process.
              </p>
              <h3>What is a Logo?</h3>
              <p>
                A logo is a unique visual symbol representing a company or its
                products and services. It can be a mix of graphic, text, or
                numerical elements. Logos used to identify products are often
                referred to as trademarks, while those representing services are
                called service marks. A logo symbolises a company's goals and
                vision.
              </p>
              <h3>What is a Logo Designing?</h3>
              <p>
                Logo design is a process dedicated to crafting the ideal visual
                representation for a company. Usually, a logo comprises two key
                elements: a symbol or brand mark and a logotype. Additionally,
                it may incorporate a tagline to communicate the company's
                message and values further.
              </p>
              <h3>Logo Design and Trademark Registration</h3>
              <p>
                We offer logo design online services across all 45 trademark
                classes for companies and businesses. Our services include
                trademark registration, handling objections and oppositions,
                infringement analysis, and renewals.
              </p>
              <p>
                Our logo design process includes a thorough trademark search to
                protect your brand identity. Our fast, affordable, and tailored
                logo designing services benefit businesses in various sectors.
              </p>
              <p>
                Trademarks are vital for safeguarding intellectual property.
                They protect your company's name, title, logo, or symbol,
                preserving your brand's unique identity. Securing your logo
                through trademark registration is essential, as it deters others
                from copying or infringing on your brand. It ensures your brand
                remains distinct and protected.
              </p>
              <h3>Significance of a Logo for Your Business</h3>
              <p>
                The importance of a logo for a business cannot be overstated, as
                it plays several crucial roles in branding and marketing:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Identity: </strong>Think of a logo as your
                      company's face. Just like a face can be unique and easily
                      recognisable, a well-designed logo reflects the essence of
                      your business. It tells customers who you are and what you
                      represent.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Recognition: </strong>A logo is like a visual
                      signature for your brand. It creates a lasting impression,
                      making it easier for people to remember your business.
                      This recognition is vital in a competitive market where
                      consumers are bombarded with choices.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Professionalism: </strong>When your logo is
                      professionally designed, it conveys a sense of
                      professionalism and trustworthiness. Customers are more
                      likely to do business with a company that presents itself
                      well, and a good logo is an important part of that
                      presentation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Marketing: </strong>Your logo becomes a key
                      element in all your marketing efforts. It appears on
                      business cards, websites, social media, advertisements,
                      and product packaging. Consistent use of the logo helps in
                      building brand recognition and trust.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Connection: </strong>Logos have the power to evoke
                      emotions and feelings. The logo's design, colours, and
                      overall look and feel can influence how customers perceive
                      your brand. It helps establish a connection between your
                      business and its target audience.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Stand Out: </strong>A distinctive logo sets your
                      business apart in a crowded marketplace. It makes you
                      easily distinguishable from competitors and can be why
                      customers choose your brand over others.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Branding Base: </strong>Your logo often serves as
                      the foundation for your entire branding strategy. It
                      dictates your marketing materials' colour scheme,
                      typography, and overall design style. It ensures
                      consistency in how your brand is presented.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Protection: </strong>When you trademark your
                      logo, you gain legal protection. This means this is the
                      only one who can use a similar logo that might confuse
                      customers. It safeguards your brand's uniqueness and
                      prevents copycats.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Our LegallensIndia logo designing services understands the
                importance of logo for the brand and striving to create a
                perfect &amp; unique logo matches to your business core idea.
              </p>
              <h3>Why Choose LegallensIndia for Logo Design Online?</h3>
              <p>
                Discover why LegallensIndia is your best partner for creating logo
                online perfectly and securing your brand's identity.
              </p>
              <h4>Exceptional Logo Design Team</h4>
              <p>
                LegallensIndia takes pride in being the perfect choice for all
                your logo design requirements. Our dedicated team of Logo
                Designers in India possesses creative talent and a profound
                understanding of the intricate art and science behind crafting
                logos that authentically represent your brand. This expertise
                and understanding the psychology behind the customers sets our
                logo designing services apart from others.
              </p>
              <h4>Formats and Delivery Method for Logo Design</h4>
              <p>
                We design logos using tools like Photoshop and Illustrator in
                formats like JPG, PNG, PDF, EPS, AI, etc. The final design is
                delivered to the client in PSD File format, allowing for any
                modifications. Our team then conducts a trademark search to
                ensure the uniqueness of the revised logo.
              </p>
              <h4>Trademark Experts</h4>
              <p>
                At LegallensIndia, we don't stop at creativity; we enhance it with
                legal precision. In addition to our creative minds, we house a
                team of trademark experts who meticulously oversee the logo
                creation process. This combination of creative ingenuity and
                legal acumen ensures that your logo looks appealing and is
                legally secure. By creating logo online combined with legal
                supervision, your logo will capture the people's attention
                without any legal complications.
              </p>
              <h4>Trademark Registration for Added Protection</h4>
              <p>
                Furthermore, LegallensIndia offers trademark registration services
                to safeguard your brand against unauthorised use. Your logo is
                not just a graphic; it's your brand's identity. With
                LegallensIndia professional logo design service, you're not only
                acquiring a logo; you're fortifying a brand identity that stands
                out and remains protected in the ever-evolving market landscape.
              </p>
              <p>
                Contact LegallensIndia now for logo design and trademark
                registration that combines creativity and legal protection.
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
