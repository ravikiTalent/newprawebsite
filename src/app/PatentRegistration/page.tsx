import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function PatentRegistration() {
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
              <h1 className="display-1 text-white mb-3">Patent Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Patents are pivotal in protecting the intellectual property
                rights of fresh innovations, be they products, services, or
                processes.
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
                { id: 3, title: "Patent Registration", url: "" },
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
                      <h5 className="card-title">Patent Registration</h5>
                      <p>
                        Patents are pivotal in protecting the intellectual
                        property rights of fresh innovations, be they products,
                        services, or processes.
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

              <h2 className="display-4 mb-3">Patent Registration</h2>
              <p>
                Patents are pivotal in protecting the intellectual property
                rights of fresh innovations, be they products, services, or
                processes. In India, to ensure these rights are recognized and
                upheld, one must adhere to the Indian Patent Act of 1970 for
                patent registration.
              </p>
              <p>
                At LegallensIndia, we understand the intricacies of the landscape
                of patent filing in India. With our experts and streamlined
                processes, we guide you step-by-step, ensuring your invention
                stands out and receives the protection for your Patent India it
                rightfully deserves. Ready to safeguard your innovation? Let
                LegallensIndia lead the way to a hassle-free patent registration
                online process.
              </p>
              <h3>What is a Patent?</h3>
              <p>
                A patent is a legal certificate that grants individuals or
                companies exclusive rights to protect their inventions, ensuring
                others cannot import, produce, or sell their inventions without
                permission. Many inventors do patent filing for their
                innovations to shield their unique concepts from unauthorized
                use.
              </p>
              <h3>Patent Registration Process in India</h3>
              <p>
                <strong>Patent filing</strong>&nbsp;in India is a formal process
                that grants inventors exclusive rights to their invention,
                whether it's a product, service, or technology. This gives the
                inventor sole authority over their creation for the patent's
                validity. Inventors and businesses must register their patent
                India to prevent unauthorized individuals or entities from
                using, selling, or manufacturing their inventions without
                consent. So, the filing of a patent is an important process to
                secure your creations or invention.
              </p>
              <h3>What is Eligible for patent filing in India?</h3>
              <p>
                In India, a diverse range of inventions can be granted patent
                protection. Here is the list of inventions eligible for patent
                filing and protection:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Products: </strong>This encompasses novel and
                      inventive tangible items like machinery, gadgets,
                      chemicals, drugs, and fabricated goods.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Processes or Methods: </strong>Patent registration
                      in India can be obtained for innovative procedures or
                      methods that present a fresh approach to performing a
                      particular task or producing an item. This might cover
                      manufacturing techniques, industrial processes, or
                      pioneering methodologies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Machines: </strong>Any innovative and practical
                      mechanical inventions, especially those showcasing novel
                      mechanisms or parts, are eligible for filing of a.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Manufactured Goods: </strong>Articles produced
                      using a distinct method or possessing unique attributes
                      can be patented.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Chemical Formulations: </strong>Novel and
                      inventive chemical substances, encompassing medicinal
                      drugs, are eligible for patents.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Biotechnological Discoveries: </strong>Advances in
                      the realm of biotechnology, such as genetic modifications,
                      gene mapping, and groundbreaking biotech processes, can be
                      patented.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Software and Digital Innovations: </strong>In
                      certain cases, software and computer-related inventions
                      that exhibit originality and inventiveness can be secured
                      through a patent filing.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                What is Not Eligible for Patent Filing in India?
              </h3>
              <p>
                According to the Patent Act of 1970, certain inventions and
                discoveries are explicitly excluded from being patented. Here's
                a list of items not eligible for patent filing:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Inventions against the
                      laws of nature.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Inventions detrimental
                      to human, animal, or plant life or harmful to the
                      environment.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Discoveries of basic
                      scientific principles or theoretical concepts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Identification of
                      substances occurring naturally, whether living or
                      non-living.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Inventions that are
                      merely an existing process or apparatus unless they lead
                      to a novel product.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Simple combinations
                      yield predictable results or properties of their
                      ingredients.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Elementary modifications
                      or reordering of familiar devices.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Items explicitly barred
                      by the Patents (Amendment) Act, 2002.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Agricultural or
                      horticultural methods.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Procedures associated
                      with medical, surgical, healing, diagnostic, therapeutic,
                      or prevention of conditions in humans or animals.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Matters related to
                      plants and animals (including seeds, varieties, species),
                      excluding microorganisms.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Computer software or
                      mathematical formulas.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Works of literature,
                      drama, music, or art, encompassing films and TV shows.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Basic methods of playing
                      games.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Simple display of
                      information.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Designs of integrated
                      circuit layouts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Inventions that merely
                      combine known properties of traditionally recognized
                      components.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Subjects related to
                      atomic energy are not patentable.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Always consult with a
                      patent specialist for a thorough understanding tailored to
                      your specific invention or idea.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Why is Patent Registration Crucial?</h3>
              <p>
                Undergoing the patent registration online process and
                registering a patent is of paramount importance for several
                reasons:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Safeguard: </strong>Registration offers a
                      solid legal shield for the patent owner. If someone
                      infringes upon the patent, the holder can take legal
                      recourse and claim damages. Absent registration, this
                      protection is unenforceable.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Transferable Privileges: </strong>With a
                      registered patent, the owner can sell or license their
                      invention, paving the way for potential revenue streams.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Two-Decade Protection: </strong>Once granted, a
                      patent's protection lasts for 20 years, ensuring long-term
                      exclusivity.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Business Edge: </strong>Registering a patent
                      provides businesses a competitive upper hand, as rivals
                      are deterred from integrating patented innovation into
                      their offerings.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Building Assets: </strong>Beyond just an idea, a
                      patent is a tangible intellectual property asset for an
                      enterprise. It can be marketed, transferred, or leveraged
                      in business deals.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Always consider consulting with experts when thinking about the
                patent filing process to reap its full benefits.
              </p>
              <h3>Requirements for Submitting a Patent Application India</h3>
              <p>
                The following key criteria must be met by an invention to
                initiate the process of filing of a patent in India:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Novelty: </strong>The invention should be unique
                      and not have been disclosed or published in India before
                      the date of the patent application.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inventive Step (Non-Obviousness): </strong>The
                      invention shouldn't be an evident advancement for someone
                      well-versed in the relevant domain. It should bring forth
                      something unexpected or non-obvious.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Industrial Utility: </strong>The invention must
                      have practical value and be usable in an industrial
                      setting.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Consult a patent expert to understand and navigate the patent
                application India process effectively.
              </p>
              <h3>Validity of Patent Registration in India</h3>
              <p>
                In India, once a patent is registered, it remains valid for a
                period of 20 years from the date of filing the provisional or
                complete patent application. After the conclusion of this
                20-year tenure, the patent becomes public property.
              </p>
              <h3>Required Documents for Patent Registration Online Process</h3>
              <p>
                Here is the list of documents essential for patent filing India:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Patent Registration Application: </strong>Form-1.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Complete Specifications: </strong>Form-2. In the
                      absence of complete specifications, a provisional
                      specification can be submitted.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Statement and Undertaking: </strong>Form-3.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Inventor's Declaration: </strong>A declaration
                      from the inventor clarifying the details of the invention
                      and its originality, provided in Form-5.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proof of Right: </strong>Documentation from the
                      inventor confirming the applicant's right to apply for the
                      patent registration online.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Power of Authority: </strong>If a patent agent or
                      legal representative is submitting the patent application,
                      then Form-26, a power of authority, is required.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Priority Documents: </strong>For convention
                      applications (from the Paris Convention) or PCT (Patent
                      Cooperation Treaty) national phase applications, it's
                      imperative to present priority documents. These can be
                      provided with the initial submission or within 18 months
                      from the priority date.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Permission from National Biodiversity Authority:{" "}
                      </strong>
                      If the application involves biological material sourced
                      from India, obtaining permission from the National
                      Biodiversity Authority is mandatory.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Source of Biological Material: </strong>The patent
                      application should specify the source or origin of any
                      biological material mentioned in the specifications.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Ensure you have these documents before proceeding with the
                process of filing of a patent.
              </p>
              <h3>Patent Registration in India - How to File Patent Online?</h3>
              <p>
                Acquiring a patent registration in India involves a systematic
                procedure, commencing with a Patent Search and culminating in
                issuing a Patent Registration Certificate.
              </p>
              <p>
                Below, we have provided a regarding the file patent online
                process:
              </p>
              <h4>Step 1: Conducting Patent Search</h4>
              <p>
                Begin the process with a thorough patent search to ascertain the
                invention's uniqueness. It's advisable to undertake patent
                searches before filing to gauge the novelty of your invention.
                If your invention mirrors prior art or closely resembles
                existing patents, its novelty might be contested by the Indian
                Patent Office. Hence, preliminary patent searches are pivotal to
                gauging the probability of patent approval.
              </p>
              <h4>Step 2: Drafting the Patent Specification</h4>
              <p>
                Upon completing the international searches, the next step is to
                draft the patent specification. This document, framed in
                technical and legal terms, may or may not incorporate the
                inventor's claims. Absence of claims indicates a provisional
                specification; presence denotes a complete one. The
                specification outlines the invention, offering a comprehensive
                description, practical instances, and the best implementation
                method. A patent is legally shielded when its specification,
                including the inventor's claims, is exhaustive.
              </p>
              <h4>Step 3: Filing the Patent Application</h4>
              <p>
                After preparing the Patent Specification, you can proceed with
                the patent application filing in India. Depending on the drafted
                specifications, applications can be either provisional or
                complete. The Provisional or Complete Specification is lodged in
                Form 2, whereas the Patent Application is in Form 1, in line
                with the Indian Patent Act. If you've filed a provisional patent
                specification, a complete one encompassing the inventor's claims
                should be submitted within 12 months. Ensure to pay the
                requisite patent registration fees along with the application.
              </p>
              <h4>Step 4: Publicizing Patent for Opposition</h4>
              <p>
                Post the patent application, the patent is listed in an official
                gazette for public scrutiny. This transparency enables the
                public to raise objections against the patent, provided they
                have valid reasons.
              </p>
              <h4>Step 5: Initiating Patent Examination</h4>
              <p>
                The patent application undergoes examination only after an
                explicit examination request has been made. This request should
                be made within 48 months from the patent's filing or its
                priority date. An assigned patent examiner then scrutinizes the
                application, releasing an examination report highlighting
                concerns. A response to this report must be dispatched within a
                year of its release. If needed, the examiner might summon the
                applicant or representative to a hearing to address these
                concerns, termed patent prosecution.
              </p>
              <h3>Grant of Patent Registration</h3>
              <p>
                Upon successfully resolving the examination report's concerns
                and the examiner's satisfaction with the applicant's
                clarifications, the patent registration process in india
                progresses to the final stage: the grant of a Patent
                Registration. This concludes the procedure for patent
                registration in India. Conversely, if the counterarguments don't
                convince the examiner, the application gets declined,
                necessitating the applicant to restart the entire patent process
                for subsequent protection in India.
              </p>
              <h3>Where to file a Patent Application</h3>
              <p>
                It's filed at the appropriate patent office using Form-1 and a
                provisional/complete specification, along with the required fee.
                The following factors are used to determine a patent office's
                jurisdiction -
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Place of residence,
                      domicile, or business of the applicant (first mentioned
                      applicant in the case of joint applicants).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The place from where the
                      invention originated.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Address for service in
                      India given by the applicant, when the applicant has no
                      business or domicile place in India (Foreign applicants).
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Mumbai Patent Office Jurisdiction</h4>
              <p>
                The States of Gujarat, Maharashtra, Madhya Pradesh, Goa,
                Chhattisgarh, the Union Territories of Daman &amp; Diu, and
                Dadra &amp; Nagar Haveli fall under the Mumbai Patent Office
                jurisdiction.
              </p>
              <h4>Delhi Patent Office Jurisdiction</h4>
              <p>
                The States of Haryana, Himachal Pradesh, Jammu and Kashmir,
                Punjab, Rajasthan, Uttar Pradesh, Uttarakhand, National Capital
                Territory of Delhi, and the Union Territory of Chandigarh fall
                under the Delhi Patent Office jurisdiction.
              </p>
              <h4>Chennai Patent Office Jurisdiction</h4>
              <p>
                The States of Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, and
                the Union Territories of Pondicherry and Lakshadweep fall under
                the Chennai Patent Office jurisdiction.
              </p>
              <h4>Kolkata Patent Office Jurisdiction</h4>
              <p>
                The rest of India, the States of Bihar, Orissa, West Bengal,
                Sikkim, Assam, Meghalaya, Manipur, Tripura, Nagaland, Arunachal
                Pradesh, and Union Territory of Andaman and Nicobar Islands fall
                under the Kolkata Patent Office jurisdiction.
              </p>
              <h3>Patent Renewal and Its Application Process</h3>
              <p>
                To ensure the continued protection of an invention, it's
                essential to renew the patent regularly. If not renewed, the
                patent expires, and the invention becomes publicly accessible.
                In India, patent renewal is a yearly process carried out by the
                patentee by applying along with the requisite patent
                registration fees.
              </p>
              <h4>Restoration of a Patent</h4>
              <p>
                If the patent expires due to non-renewal, one can apply for its
                restoration. To do so:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> File a restoration
                      application using Form-15 within 18 months from the date
                      the patent became inactive.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Provide a statement
                      describing the circumstances that led to the failure to
                      renew the patent.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Pay the prescribed
                      restoration fee.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Upon receiving the
                      application, the Controller will evaluate the reasons for
                      the delay. If deemed satisfactory, the patent may be
                      restored.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> It's advisable to
                      regularly track patent renewal dates or engage with a
                      patent agency to manage these renewals, ensuring
                      continuous protection for the invention.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Get Patent Registration with LegallensIndia
              </h3>
              <p>
                LegallensIndia is your trusted partner in safeguarding
                intellectual innovations and guiding you on how to apply for
                patent in India. The patent registration process in India can be
                intricate, but with LegallensIndia, it's simplified. Our expert
                team, proficient in the Indian patent system, provides
                comprehensive assistance, ensuring your application is compliant
                and robust, all with affordable patent registration fees. Choose
                LegallensIndia to transform your innovative concepts into
                protected assets and navigate the complexities of the patent
                application seamlessly.
              </p>
              <p>&nbsp;</p>
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
