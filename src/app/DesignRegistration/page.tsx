import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function DesignRegistration() {
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
              <h1 className="display-1 text-white mb-3">Design Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Design registration offers a shield for your unique design,
                classifying it as intellectual property and ensuring it's safe
                from imitation.
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
                { id: 3, title: "Design Registration", url: "" },
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
                      <h5 className="card-title">Design Registration</h5>
                      <p>
                        Design registration offers a shield for your unique
                        design, classifying it as intellectual property and
                        ensuring it's safe from imitation.
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
                Design Registration - Safeguard Your Unique Creations
              </h2>
              <p>
                Design registration offers a shield for your unique design,
                classifying it as intellectual property and ensuring it's safe
                from imitation. It grants the creator exclusive rights to use
                the design for a decade, possibly extending it for an additional
                five years. Hence, Design efiling becomes an essential
                requirement to secure your original designs legally.
                LegallensIndia guides you through to register a design in India,
                ensuring your creations are protected, and your rights are
                upheld.
              </p>
              <p>
                Reach out to our experts today and make the Design e filing
                process smooth and hassle-free.
              </p>
              <h3>Design Registration - Governing Law</h3>
              <p>
                The Designs Act, 2000, governs design registration and
                protection in India, and the subsequent Design Rules were
                introduced in 2001. The introduction of the Designs Act in 2000
                served to repeal and supplant the earlier Act from 1911.
              </p>
              <p>
                The Design Rules of 2001 have undergone amendments, with
                significant changes made by the Designs (Amendment) Rules in
                2008 and 2014. A noteworthy update in the rules under this Act
                has been the addition of a new applicant category. This new
                category recognizes 'small entities' as distinct applicants, in
                addition to individual or natural persons.
              </p>
              <h3>Definition of a Design</h3>
              <p>
                As per Section 2(d) of the Designs Act 2001, a design is
                characterized as the distinctive features encompassing shape,
                pattern, configuration, composition, or ornamentation formed by
                lines or colors. This can be applied to any article, whether
                two-dimensional, three-dimensional, or a combination of both.
                The application can be achieved through various means, including
                industrial processes, whether mechanical, manual, or chemical,
                used separately or in combination. However, the defining factor
                of a design is its visual appeal when viewed in the final
                product, solely judged by the eye. It's essential to note that
                the design does not consider the underlying construction
                principle or anything that is essentially a mere mechanical
                contraption.
              </p>
              <h3>Basic Requirements of Design Registration</h3>
              <p>
                To register and safeguard a design under the Design Act, 2000,
                the following core criteria must be met to proceed with Design e
                filing:
              </p>
              <h4>Innovation Element</h4>
              <p>
                The design should possess a fresh and unique aspect. Only
                designs with this innovative trait are eligible for
                registration. Furthermore, combinations of existing designs can
                be considered, but only if the result presents a distinct visual
                appeal.
              </p>
              <h4>Originality and Non-disclosure</h4>
              <p>
                The design must be one-of-a-kind and not previously exposed to
                the public, either within India or internationally. This means
                it shouldn't have been previously published, used, or disclosed
                in any manner.
              </p>
              <h4>Application to an Object</h4>
              <p>
                The design must be attached or applicable to a specific product
                or object. A standalone design, without relevance to an item,
                cannot be registered.
              </p>
              <h4>Alignment with Public Values and National Security:</h4>
              <p>
                The design should not be in conflict with public morals,
                sentiments, or the security of India. Designs deemed
                inappropriate by the government or other authoritative bodies
                won't qualify for registration. It's essential that the design
                can be registered under section 5 of the Design Act, 2000.
              </p>
              <p>
                It's important to ensure these criteria are met when seeking to
                trademark a design under the English language provisions of the
                Design Act, 2000.
              </p>
              <h4>Exclusions from Design Registration:</h4>
              <p>
                Design registration has certain exclusions and does not
                encompass everything. The following are explicitly excluded from
                the purview of Design e filing registration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Literary or Artistic Work:</strong> Unlike
                      copyright protection, design registration doesn't cover
                      literary or artistic creations such as books, calendars,
                      stamps, and tokens.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Buildings and Structures:</strong> Architectural
                      works, including buildings and other structures, are not
                      eligible for design registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Geographical Representations:</strong> Maps are
                      excluded from the scope of design registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>National Symbols:</strong> Designs that imitate or
                      resemble national flags, emblems, or official signs of any
                      country are not allowed for registration.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Who can Apply for Design Registration Online?
              </h3>
              <p>
                The following type of Persons can apply for Design Registration
                online:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Applicants:</strong> Individuals, their legal
                      representatives, or assignees can apply either
                      individually or jointly for design registration.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Definition of Person:</strong> The term "person"
                      encompasses a variety of entities, including firms,
                      partnerships, small entities, and corporate bodies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Non-Resident Indians (NRIs):</strong> For NRIs,
                      the application for Design Registration should be made
                      through their agent or legal representative.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                All provisions should be understood and complied with as per the
                English language stipulations to register a design.
              </p>
              <h3>Documents Required to Register a Design in India: </h3>
              <p>
                To register a design in India, applicants need to provide the
                following documentation:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Applicant's Details:</strong> Name and complete
                      address of the applicant.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Applicant's Nature/Status:</strong> Clear
                      indication of the legal status of the applicant,
                      specifying whether the applicant is an individual, a
                      company, etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Startup Certificate (if applicable):</strong>{" "}
                      Startups must provide a registration certificate.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Description of the Article:</strong> A detailed
                      description of the 'article' to which the design pertains,
                      accompanied by its classification according to the
                      prescribed categories.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Visual Representation:</strong> A minimum of four
                      visuals (images or drawings) showing the article from all
                      angles should be included with the application.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Benefits of Design Registration in India</h3>
              <p>
                Benefits of registering a Design in India is explained in detail
                below:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Protection Against Design Infringement:</strong>{" "}
                      Registering a design grants businesses legal protection,
                      preventing others from replicating their design to
                      produce, market, or distribute items.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Extended Validity Period:</strong> An online
                      design registration certificate boasts a validity of 10
                      years. Post this duration, its validity can be renewed for
                      another five years.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Competitive Edge:</strong> Design registration
                      online bestows a unique identifier to businesses. This
                      ensures that a company's products stand out and are
                      distinct from competitors due to the registered design.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Assured Originality:</strong> Products with
                      designs registered under them are guaranteed to be
                      original. This means such designs have neither been
                      employed in India nor have they been published in any
                      other WTO member nation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Customer Appeal:</strong> A vital advantage of
                      design registration is that it primarily focuses on visual
                      evaluation, ensuring the design resonates with the broader
                      public.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Encourages Innovation:</strong> One of the
                      fundamental prerequisites for design registration is its
                      distinctiveness. This implies that to get registered, the
                      design must not only be captivating but also distinct
                      enough from competitors, fostering innovation and
                      constructive competition.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Procedure for Design Registration in India
              </h3>
              <p>
                The procedure to register a Design in India is explained in
                detail below, which includes a design search India, filing,
                examination, and getting approval:
              </p>
              <h4>Design Registration Search</h4>
              <p>
                Start by conducting a comprehensive design registration search
                of existing designs to confirm the novelty and uniqueness of
                your design. The process of Design search India helps in evading
                possible infringement complications.
              </p>
              <h4>Application Preparation and Filing</h4>
              <p>
                The application to trademark a design will be drafted and filed,
                incorporating all requisite documents as mentioned above.
              </p>
              <h4>Application Examination</h4>
              <p>
                Post-submission, the Indian Design Office will scrutinize your
                application, ensuring it adheres to all mandatory stipulations.
              </p>
              <h4>Official Gazette Publication</h4>
              <p>
                Upon acceptance of your application, the design is published in
                the official gazette. This publication offers the general public
                an opportunity to voice any objections concerning the proposed
                design registration. Keep track of the design registration
                status to find any potential objections raised by others.
              </p>
              <h4>Registration Approval</h4>
              <p>
                If no objections arise, or if raised objections are successfully
                addressed, the Indian Design Office will bestow the design
                registration. A certificate confirming the registration will be
                provided, holding validity for a decade.
              </p>
              <h4>Registration Renewal</h4>
              <p>
                Following the initial tenure of 10 years, the design
                registration can be extended for an additional five years.
              </p>
              <p>
                LegallensIndia expert will guide you through the efiling design
                and renewal procedure, ensuring the sustained validity of your
                design registration.
              </p>
              <h3>How LegallensIndia can help in Design Registration</h3>
              <p>
                LegallensIndia has a team of experienced professionals adept at
                navigating the complexities of design registration in India. Our
                dedicated team will guide you from the initial stages of
                understanding the significance of your design to the meticulous
                documentation, efiling design process and design registration
                status. With our expertise, we streamline the design
                registration process at affordable design registration cost,
                ensuring timely submissions and continuous updates.
              </p>
              <p>
                By choosing LegallensIndia, you opt for a hassle-free,
                comprehensive approach to safeguarding your design's uniqueness.
              </p>
              <p>
                Ready to protect and trademark a design? Talk to our Design
                Registration experts today and start the process!
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
