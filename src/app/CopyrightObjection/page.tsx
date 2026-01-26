import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function CopyrightObjection() {
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
              <h1 className="display-1 text-white mb-3">Copyright Objection</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Copyright refers to the ownership rights to literature, theatre,
                music, artwork, sound recordings, and other works.
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
                { id: 3, title: "Copyright Objection", url: "" },
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
                      <h5 className="card-title">Copyright Objection</h5>
                      <p>
                        In India, the trademark objection step is significant
                        during the process of registering a trademark.
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
                Copyright Objections - File Effective Reply
              </h2>
              <p>
                Copyright refers to the ownership rights to literature, theatre,
                music, artwork, sound recordings, and other works. Copyright
                registration grants a set of rights to the work, including
                reproduction, public communication, adaptation, and translation.
                Copyright registration ensures that the writers' rights to
                ownership and enjoyment of their works are protected and
                rewarded, which protects and rewards creativity.
              </p>
              <p>
                Copyright registration is required since it allows you to
                communicate with the public, reproduce the rights, adapt, and
                translate the works.
              </p>
              <p>
                As understanding of intellectual property rules has grown, there
                has been a significant increase in the amount of intellectual
                property being registered in India. One of the most important
                types of intellectual property protection is copyright
                registration.
              </p>
              <p>
                The Copyright Act of 1957 governs the process of copyright
                registration. The author's creative work cannot be replicated
                since no one is permitted to use it without the author's or
                creator's consent. The author has the right to charge for the
                use or modification of their work. The copyright is usually
                protected for 60 years.
              </p>
              <h3>Eligibility</h3>
              <p>
                Copyright registration can be obtained for any works related to
                literature, drama, music, artwork, film, or sound recording.
                Copyrights are given to mainly three classes of work, and each
                class has its distinctive right under the copyright act.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Original literary,
                      dramatic, musical, and artistic works comprise the
                      copyright for books, music, painting, sculpture, etc.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Cinematography films are
                      another class of copyright that consists of any work of
                      visual recording on any medium.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Sound recordings have a
                      distinctive class under the copyright act that consists of
                      a recording of sounds, regardless of the medium on which
                      such recording is made or the method by which the sound is
                      produced.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Benefits of acquiring Copyright Registration
              </h3>
              <h4>Provides Legal Protection</h4>
              <p>
                The creators enjoy legal protection when their work is
                reproduced without authorization. Registering a Copyright makes
                it much easier to protect the original work against
                infringement.
              </p>
              <h4>Market Presence</h4>
              <p>
                Copyright registration creates a public record of the work, and
                proof of ownership is established for the creative work.
              </p>
              <h4>Rights Of The Owner</h4>
              <p>
                The owner of registered copyright gets the rights to reproduce,
                disseminate and adapt and translate the work.
              </p>
              <h3>Process for Copyright Registration</h3>
              <p>
                Copyright registration applications can be submitted on Form IV
                along with the required fees. It can be copyrighted whether it
                is a published or unpublished work. Three copies of published
                material must be supplied with the application for published
                work.
              </p>
              <p>
                For unpublished work, a copy of the manuscript must be supplied
                with the application for affixing the copyright office's stamp,
                which serves as proof that the work has been registered.
              </p>
              <p>The process for Copyright Registration:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> The application for
                      copyright registration has to be filed in the concerned
                      forms that mention the particular's work.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Depending on the type of
                      the work, a separate copyright application may have to be
                      filed.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The applicant needs to
                      sign the forms, and the Advocate must submit the
                      application under the name the POA has been executed.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Meanwhile, our experts
                      will prepare the copyright registration application and
                      submit the necessary forms with the Registrar of
                      copyrights.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The diary number will be
                      issued once the application is submitted online.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Within the waiting
                      period of 30 days, the copyright examiner reviews the
                      application for potential objection or any other
                      discrepancies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If there is an
                      objection, a notice will be issued, and the same has to be
                      compiled within 30 days from the date of issuance of the
                      notice. The examiner may call both parties for a hearing.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> After the discrepancy
                      has been removed or no objection, the copyright is
                      registered, and the Copyright Office will issue the
                      registration certificate.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Copyright Protection Validity</h3>
              <p>
                Copyright protection usually lasts for 60 years. The 60-year
                period begins with the author's death year in the case of
                original literary, theatrical, musical, and artistic works.
              </p>
              <p>
                The 60 years is counted from the publication date in the case of
                cinematographic films, sound recordings, pictures, posthumous
                publications, anonymous and pseudonymous publications, works of
                government, and activity of international organisations.
              </p>
              <h3>The remedy in case of Copyright Infringement</h3>
              <p>
                Infringement against the copyright of any work is a crime
                punishable under Section 63 of the Copyright Act. Six months in
                prison and a fine of Rs. 50,000 are possible penalties.
              </p>
              <p>
                Also, if a copyright violation has occurred or is likely to
                occur, any police officer not below the rank of sub-inspector
                may, if satisfied, take all copies of the work and the plates
                used to make infringing copies of work without a warrant.
              </p>
              <h3>Copyright Objection</h3>
              <p>
                There is a possibility that the registrar will raise objections
                to the copyright application during the registration procedure.
                An objection may arise for a variety of reasons, including
                application similarities and the existence of similar work.
                Copyright objections can be raised up to 30 days after the
                copyright application is filed.
              </p>
              <p>
                If any objections arise after a thorough assessment of the
                application, the registrar tells the applicant and requests
                clarifications. It is critical to respond to the copyright
                objection letter because it is a legal requirement. If no
                response is received, the registrar may terminate the copyright
                application, which is then amended in the copyright journal as
                "rejected."
              </p>
              <p>
                To avoid such outcomes, it is critical to reply to the copyright
                objection in order to obtain and maintain the work's legal
                rights.
              </p>
              <p>
                As a legal letter, replying to a copyright objection letter
                necessitates legal understanding and drafting skills. There is
                no fixed format to draft a response to copyright objection
                letter.
              </p>
              <h3>Rights of the Copyright owner</h3>
              <h4>Right of reproduction</h4>
              <p>
                Copyright registration grants exclusive rights to the copyright
                owner. An individual cannot make copies or reproduce work
                without the permission of the copyright owner.
              </p>
              <h4>Right of Adaptation</h4>
              <p>
                The Act allows the creator to use his piece of work the way he
                wants to use it. He can create any derivatives of his original
                work. He can also use a different format based on his existing
                creation.
              </p>
              <h4>Right of Communication To The Public</h4>
              <p>
                The owner can broadcast their original work to the public. The
                copyright owner can use visual signs or even images.
              </p>
              <h4>Right of Public Performance</h4>
              <p>
                The owners of artistic and musical work can perform their works
                in public. A musician can play his piece of music for the
                people. An artist can perform in public or any platform the
                artist wishes to.
              </p>
              <h4>Right of Paternity And Integrity</h4>
              <p>
                The producers of original work are endowed with moral and
                ethical rights. The right of attribution, often known as
                paternity, means that the artist can claim sole authorship of
                his work.
              </p>
              <p>
                The right of integrity empowers the owner to sue the individuals
                for damages. If someone attempts to mutilate, change, or distort
                the original work, the copyright holder can sue for damages.
              </p>
              <h4>Right of Distribution</h4>
              <p>
                The Copyright Act allows the owner to distribute his work in
                whatever form he likes. If he wishes, he can also transfer
                certain rights to another person to use the copyright.
              </p>
              <h3>Lawful Use of Copyrighted Work Without Permission</h3>
              <p>
                Under some circumstances, the legislation permits the use of a
                registered work for research, study, critique, review, and news
                reporting without the owner's permission, as well as the use of
                works in libraries, schools, and legislatures. Some exclusions
                have been prescribed in respect of specific uses of copyrighted
                works to protect users' interests. The usage of the work is one
                of the exemptions.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> For research or private
                      study.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> For criticism or review.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> In connection with a
                      judicial proceeding.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> For performance by an
                      amateur club or society, if the performing for a
                      non-paying audience.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The making of sound
                      recordings of literary, dramatic, or musical works under
                      certain conditions.
                    </li>
                  </ul>
                </div>
              </div>
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
