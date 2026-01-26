import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function CopyrightRegistration() {
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
                Copyright Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Copyright is an essential principle that safeguards the
                creations of artists and authors. It grants them unique rights
                over their works' distribution, sharing, and replication.
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
                { id: 3, title: "Copyright Registration", url: "" },
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
                      <h5 className="card-title">Copyright Registration</h5>
                      <p>
                        Copyright is an essential principle that safeguards the
                        creations of artists and authors. It grants them unique
                        rights over their works' distribution, sharing, and
                        replication.
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
                Copyright Registration: Protect Your Creative Works
              </h2>
              <p>
                Copyright is an essential principle that safeguards the
                creations of artists and authors. It grants them unique rights
                over their works' distribution, sharing, and replication.
                Copyright Registration in India provides legal protection and
                offers creators enhanced authority over their creations.
              </p>
              <p>
                At LegallensIndia, we have streamlined the process of Registration
                of a Copyright in India to make securing your intellectual
                property straightforward and effective. With years of experience
                in intellectual property, our team is equipped with the
                knowledge to guide you through every step of the Online
                Copyright Registration process.
              </p>
              <h3>What Is Copyright?</h3>
              <p>
                Copyright is a legal provision that recognizes the rights of
                intellectual property owners. At its core, it revolves around
                the right to replicate or reproduce a piece of creative content.
                In simple terms, when someone creates intellectual property,
                they gain specific rights over it. Consequently, only the
                original creator or individuals they grant permission to can
                reproduce or use that content. Through copyright India law,
                creators are endowed with an exclusive privilege to use or
                reproduce their work for a set duration. After this period
                elapses, the copyrighted material might transition to the public
                domain.
              </p>
              <h3>What Can You Copyright?</h3>
              <p>
                Copyright filing serves as a protective shield for a diverse
                range of creative outputs. The Registrar of Copyrights has
                structured a detailed register, segmented into six clear
                categories, each dedicated to particular types of intellectual
                creations:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Literary Works (Excluding Computer Programs):
                      </strong>{" "}
                      This division includes various written works like novels,
                      poems, essays, articles, and similar creations.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Musical Works:</strong> Items like tunes, song
                      lyrics, and musical notations fall within this category.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Artistic Works:</strong> Copyright in this realm
                      covers visual arts like paintings, sculptures, drawings,
                      and similar artistic endeavors.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cinematography Films:</strong> Films and related
                      audiovisual projects enjoy the benefits of copyright
                      protection in this category.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Sound Recordings:</strong> Audio recordings,
                      whether they are of music, spoken word, or other
                      sound-driven content, are protected here.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Computer Programs, Tables, and Compilations:
                      </strong>{" "}
                      The digital world's cornerstones, such as software, data
                      tables, and compilations, receive their protection in this
                      segment.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                You can do copyright filing for all these works and obtain a
                copyright registration certificate.
              </p>
              <h3>Copyright Law</h3>
              <p>
                Copyrights are governed by "THE COPYRIGHT ACT, 1957." This
                legislation has seen numerous updates over the years to remain
                relevant in the dynamic world of intellectual property rights.
              </p>
              <h3>The Importance of Copyright Registration</h3>
              <p>
                Registration of a Copyright in India for your original or
                creative work is crucial. It not only establishes your legal
                claim over the work but also empowers you with control over its
                distribution, reproduction, and any subsequent translations or
                adaptations of the content. Ensure to register copyright online
                and obtain a copyright registration certificate to reap all
                these benefits.
              </p>
              <h3>Why Should You Register Your Work Under Copyright Law?</h3>
              <p>
                Although it's not mandatory to register your work under
                copyright law, it's strongly advised due to several significant
                advantages. Acquiring copyright protection grants creators
                distinct rights over their creations, ensuring that their work
                remains safeguarded from unauthorized duplication for a
                specified duration. This legal shield provides peace of mind,
                fostering inspiration and driving creators to pursue and
                generate more creative content.
              </p>
              <h3>Benefits of Registration of a Copyright in India</h3>
              <p>
                Copyright registration in India comes with many advantages for
                creators and those holding intellectual property rights:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Protection for the Owner:</strong> Through online
                      copyright registration in India, owners receive exclusive
                      rights covering activities like reproduction,
                      distribution, adaptation, sharing, and translation of
                      their work.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Robust Legal Safeguard:</strong> Registration with
                      a valid copyright registration certificate ensures that
                      the work can't be copied without the rightful owner's
                      permission.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Boosts Brand Image:</strong> Holding a registered
                      copyright is a testament to ownership and can be leveraged
                      in marketing, enhancing brand reputation and goodwill.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>International Protection:</strong> Once
                      copyrighted in a given country, that work is typically
                      granted similar rights in many other countries, including
                      India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Treat Copyright as an Asset:</strong> Recognized
                      as an intellectual property asset, Copyright can be
                      traded, adding a financial dimension to the creator's
                      portfolio.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Increased Visibility for the Owner:</strong>{" "}
                      Registered works are more prominently showcased, available
                      globally, and easily traceable in copyright databases.
                      This visibility can deter potential unauthorized use.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Security:</strong>&nbsp;Registration of
                      a Copyright paves the way for economic resilience by
                      allowing creators to diversify and capitalize on their
                      content, leading to sustained income streams.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <span>
                  <strong>
                    <em>
                      Get expert help from LegallensIndia for streamlined
                      copyright registration with reasonable copyright fees in
                      India - Quick &amp; Reliable!
                    </em>
                  </strong>
                </span>
              </p>
              <h3>Copyright Symbol Explanation</h3>
              <p>
                After securing a registration of a copyright in India, the
                copyright symbol (©) becomes a tool at your disposal. This
                emblem is a direct declaration to the public that the work is
                shielded by copyright laws. Its presence can act as a deterrent,
                discouraging unauthorized replication or misuse of the creative
                piece.
              </p>
              <p>
                Legal Rights Afforded to a Copyright Owner Being a copyright
                owner furnishes you with a set of definitive legal rights,
                including:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Claim of Authorship:</strong> You can assert and
                      acknowledge your role as the creator of your published
                      work.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reproduction and Storage:</strong> As the owner,
                      you possess the right to reproduce the content in any
                      tangible medium and store it electronically.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Publication Control:</strong> You hold the
                      discretion to decide when, where, and how to publish or
                      withhold your work from publication.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Public Display and Communication:</strong> You are
                      entitled to showcase or share your work with the public.
                      Additionally, you have the prerogative to make
                      translations or adaptations of the original content.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Reputation Protection:</strong> Should there be a
                      threat to your professional standing or reputation via
                      your work, you have the right to intervene and take
                      protective measures.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Licensing or Transfer:</strong> You can opt to
                      sell or lease your Copyright, allowing others specified
                      rights to your work as outlined in the agreement.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                These rights equip copyright owners with the tools to oversee,
                defend, and exercise control over their creative contributions
                and intellectual assets.
              </p>
              <p>
                Duration of Copyright Protection After registering a work under
                Copyright, the protection generally lasts for the duration of
                the creator's life and then extends for an additional 60 years
                after their demise. This prolonged period guarantees that the
                work stays protected, allowing the creator's heirs or designated
                rights holders to benefit from it for an extended time.
              </p>
              <h3>Conditions for Filing a Copyright Application in India</h3>
              <p>
                When applying for online copyright registration in India, ensure
                you adhere to the following format and size guidelines for
                different works:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Artistic Works:</strong> Upload in either pdf or
                      jpg format.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Sound Recording Works:</strong> Submit in mp3
                      format.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Literary/Dramatic, Music, and Software Works:*
                      </strong>{" "}
                      Upload documents in PDF format, ensuring the file size
                      doesn't exceed 10 MB.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>For Software:</strong> Submit a PDF that includes
                      at least the initial ten and the concluding ten pages of
                      the source code. If the source code has fewer than 20
                      pages, upload the complete code. Ensure there are no
                      redacted or obscured sections.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                How to Register Copyright Online in India?
              </h3>
              <p>
                As emphasized, if you are an artist who produces creative works,
                copyright registration must be done to give legal protection.
                Here is step by step processes on how to get copyright in India:
              </p>
              <h4>Submission of Application</h4>
              <p>
                Draft an application that includes all required details and a
                statement of particulars using the designated format (FORM XIV).
                Remember, individual works require separate applications. Each
                application must be signed by both the applicant and an Advocate
                who holds a Vakalatnama or a Power of Attorney (POA). Ensure to
                pay the required copyright registration fees.
              </p>
              <h4>Issuance of Diary Number</h4>
              <p>
                Upon application receipt, the registrar assigns a Diary Number,
                signifying the commencement of the registration process.
                Thereafter, a 30-day waiting period is observed to allow for any
                potential objections.
              </p>
              <h4>Handling of Copyright Objections</h4>
              <p>
                Should no objections arise within the 30-day window, a
                scrutinizer evaluates the application for inconsistencies. If
                deemed satisfactory, the scrutinizer proceeds with registration
                and provides the registrar an extract for the Register of
                Copyright.
              </p>
              <h4>Resolution of Objections</h4>
              <p>
                If objections emerge, both involved parties will receive a
                notification detailing the objections. A subsequent hearing will
                be convened to address and resolve these concerns.
              </p>
              <h4>Application Scrutiny</h4>
              <p>
                Post-hearing, if needed, the scrutinizer conducts a thorough
                examination of the application. Depending on the findings, the
                application may be endorsed or declined.
              </p>
              <h4>Issuance of Copyright Registration Certificate</h4>
              <p>
                Upon application approval and payment of copyright registration
                fees, the corresponding authority dispenses the copyright
                registration certificate. Typically, the entire procedure
                concludes in around 2 to 3 months.
              </p>
              <h3>How LegallensIndia Can Assist You?</h3>
              <p>
                At LegallensIndia, we're dedicated to streamlining the often
                complex journey of online copyright registration in India. Our
                team, comprising experts, provides comprehensive support,
                ensuring that each step, from initial documentation to handling
                potential objections and obtaining the final copyright
                certificate with affordable copyright fees in India. We manage
                to register copyright online with precision and expertise. By
                choosing LegallensIndia, you can take advantage of seamless
                registration process, ensuring your creative works are
                safeguarded at a good copyright registration cost. Whether you
                are a budding creator or an established intellectual property
                owner, with LegallensIndia by your side, you can navigate the
                online copyright registration process with confidence and ease.
              </p>
              <p>
                Ready to secure your creative work? Get started with our
                expert-led copyright registration services today!
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
