import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkOpposition() {
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
                Trademark Opposition
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Once the registry accepts a trademark application, it undergoes
                a crucial step – publication in the government journal for four
                months.
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
                { id: 3, title: "Trademark Opposition", url: "" },
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
                      <h5 className="card-title">Trademark Opposition</h5>
                      <p>
                        Once the registry accepts a trademark application, it
                        undergoes a crucial step – publication in the government
                        journal for four months.
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

              <h2 className="display-4 mb-3">Trademark Opposition</h2>
              <p>
                Once the registry accepts a trademark application, it undergoes
                a crucial step – publication in the government journal for four
                months. During this phase, any general public member can raise
                Opposition against the trademark. This opposition of trademark
                stage holds significant importance in determining whether the
                trademark can proceed toward registration or if valid objections
                need to be addressed. LegallensIndia stands ready to offer expert
                assistance and guidance to navigate the process of trademark
                opposition in India, ensuring a seamless and effective
                resolution.
              </p>
              <h3>Trademark Opposition</h3>
              <p>
                Under the Trademarks Act of 1999, trademarks can be registered
                in India. To do this, trademark owners must submit their
                application to the Registrar of Trademarks. Once the Registrar
                reviews the application, they will publicize the trademark in
                the official trademark journal. Any individual can challenge the
                registration of a trademark once it's listed in the Trademark
                Journal. Such challenges or oppositions should be directed to
                the Trademark Registry, where the original application was made.
                Should any opposition arise, the trademark registry will hold a
                trademark opposition hearing to resolve the issue.
              </p>
              <p>
                The procedures and guidelines for trademark opposition in India
                are outlined in the Trademarks Act, 1999 and the Trade Marks
                Rules, 2017.*
              </p>
              <h3>Initiation of Trademark Opposition -Eligibility</h3>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> According to Section 21
                      of the Trademark Act, 'any person' can oppose a trademark,
                      irrespective of their commercial or personal interest.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A trademark can be
                      countered by filed by a customer, member of the public or
                      competitor, or any other person. Also, the person filing
                      the trademark opposition needs to be a prior registered
                      trademark owner.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> After a opposition of
                      trademark is filed, both parties need to conclude whether
                      the trademark should be abandoned or registered.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Anyone who believes that
                      the published mark might create confusion among the public
                      can file for the Opposition while defending the trademark
                      lies in the trademark registrant's hands.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Grounds For Trademark Opposition</h3>
              <p>
                The Indian trademark law does not provide any specific grounds
                of opposition. There are various reasons a trademark opposition
                in India in may be opposed mentioned below:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> The trademark is similar
                      or identical to an earlier or existing registered
                      trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trademark is devoid
                      of distinctive character.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trademark is
                      descriptive.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trademark
                      registration application is made with bad faith.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trademark is
                      customary in the current language and or in the
                      established practices of a business.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trademark is likely
                      to deceive the public or cause confusion.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trademark is
                      contrary to the law or prevented by law.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trademark is
                      prohibited under the Emblem and Names Act, 1950.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trademark contains
                      matters that are likely to hurt any class or section of
                      people's religious feelings.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Trademark Opposition Procedure</h3>
              <p>The trademark opposition procedure is as follows:</p>
              <h4>Initiating a Trademark Opposition</h4>
              <p>
                Suppose an individual wishes for an opposition of trademark. In
                that case, they can submit their concerns to the Registrar
                within four months from the date the registration application
                was advertised in the trademark journal. This is done using Form
                TM-O, accompanied by the necessary fee.
              </p>
              <p>
                This opposition notice should detail the trademark registration
                application, information about the opposing party, and the
                reasons for Opposition. Within three months of receiving this,
                the Registrar will forward the applicant a copy of the
                opposition notice.
              </p>
              <h4>Stage One: Responding with a Counter statement</h4>
              <p>
                Upon receiving the opposition notice, the applicant has a
                two-month window to submit a counterstatement using Form TM-O.
                This statement should clarify their stance. The Registrar will
                provide the opposing party with the applicant's counter
                statement within two months.
              </p>
              <p>
                If the applicant doesn't respond within the specified two
                months, their trademark registration application is deemed
                abandoned, halting the registration process.
              </p>
              <h4>Stage two: Presenting Evidence in the Opposition Process</h4>
              <p>
                The party opposing the trademark must present Evidence backing
                their Opposition to the Registrar within two months of receiving
                the applicant's counterstatement. This Evidence should also be
                shared with the applicant.
              </p>
              <p>
                Subsequently, the applicant has two months to submit Evidence
                supporting their application after receiving the opposition
                evidence. This Evidence must be shared with both the Registrar
                and the opposing party.
              </p>
              <p>
                Optional Stage Three: If needed, the opposing party has another
                month to submit further Evidence after receiving the applicant’s
                Evidence. This, too, must be shared with the applicant and the
                Registrar.
              </p>
              <h4>
                Trademark Opposition Hearing &amp; Determining the Outcome of
                the Opposition
              </h4>
              <p>
                The Registrar schedules a trademark opposition hearing after the
                evidence exchange, notifying both parties. Should the opposing
                party be absent, their Opposition is dismissed, leading to the
                trademark's registration. Conversely, if the applicant is
                absent, their application is considered abandoned and is
                dismissed. All written arguments provided by both sides will be
                taken into account.
              </p>
              <p>
                Post deliberation, the Registrar determines whether to register
                the trademark or dismiss the application. This decision is then
                communicated in writing to both parties at their specified
                addresses. This is the specific process involved in the
                trademark opposition hearing.
              </p>
              <h4>
                Conclusion &amp; Final Steps in the Trademark Opposition
                Procedure
              </h4>
              <p>
                If the Registrar rules in favor of the applicant, the trademark
                gets registered, and a certificate is issued. However, the
                trademark registration application is denied if the decision is
                in the opposing party's favor.
              </p>
              <h3>Importance of Compliance with Filing Requirements</h3>
              <p>
                Both the applicant and the opposing party must adhere to filing
                requirements during the opposition of trademark process, as
                failure to do so can have serious consequences:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Abandonment of Opposition:</strong> Failure to
                      submit counter-reply or supporting documents on time may
                      lead to the abandonment of the Opposition, allowing the
                      trademark application to proceed.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Removal of Trademark Application:</strong> If the
                      applicant fails to respond or provide necessary Evidence,
                      the trademark application may be removed, preventing
                      registration.
                    </li>
                  </ul>
                </div>
              </div>
              <h3>Significance of Trademark Opposition in India</h3>
              <p>
                The trademark opposition procedure in India ensures that only
                deserving trademarks are granted registration. It facilitates
                public participation and prevents conflicting trademarks from
                coexisting in the market. Timely adherence to timelines and
                filing requirements is crucial for effective case presentation.
              </p>
              <p>
                If you're facing trademark opposition or considering opposing a
                trademark, consult LegallensIndia for expert guidance and support
                throughout the process.
              </p>
              <h3>LegallensIndia: Your Partner in Trademark Opposition</h3>
              <p>
                <strong>
                  LegallensIndia offers comprehensive assistance in the trademark
                  opposition process in India:
                </strong>{" "}
                Expert Guidance: Our experienced professionals, well-versed in
                trademark laws, provide expert guidance and advice throughout
                the opposition process, ensuring a well-founded and effective
                opposition.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Expert Guidance:</strong> Our experienced
                      professionals, well-versed in trademark laws, provide
                      expert guidance and advice throughout the process of
                      trademark opposition procedure, ensuring a well-founded
                      and effective opposition.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Thorough Trademark Search:</strong> Before
                      initiating the Opposition, LegallensIndia conducts a
                      meticulous trademark search to identify similar or
                      conflicting trademarks. This step is critical for building
                      a strong case and avoiding potential issues.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Document Preparation:</strong> Our experts assist
                      in preparing all necessary documents required for filing
                      the trademark opposition, ensuring accuracy and compliance
                      with legal requirements.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Efficient Filing:</strong> LegallensIndia handles
                      the entire filing process, submitting the Opposition to
                      the Trademark Registry on your behalf and handling
                      trademark opposition hearing. This streamlines the process
                      and ensures timely submission.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Timely Updates:</strong> Throughout the process,
                      we provide regular updates, keeping you informed about the
                      progress of your trademark opposition.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                By choosing LegallensIndia, individuals and businesses can
                navigate the opposition of trademark process efficiently,
                increasing the likelihood of successfully protecting their
                valuable trademark rights in India. Trust LegallensIndia to be
                your reliable and trusted partner for all trademark-related
                matters, including trademark search, trademark registration,
                trademark objections, trademark renewal, and more.
              </p>
              <h3>
                Difference between Trademark Objection and Trademark Opposition
              </h3>
              <p>
                People often get confused between trademark objection and
                trademark opposition. We have a table to explain the fundamental
                difference between the trademark objection and trademark
                opposition.
              </p>
              <table className="table mb-5 border">
                <thead>
                  <tr>
                    <th className="border">
                      <strong>Trademark Objection</strong>
                    </th>
                    <th className="border">
                      <strong>Trademark Opposition</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">
                      A Trademark Examiner issues trademark objection.
                    </td>
                    <td className="border">
                      A trademark gets opposition from a third party.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">One does not need to pay fees.</td>
                    <td className="border">
                      Fees are required to be submitted along with the reply to
                      the opposition.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      A reply should be submitted within one month.
                    </td>
                    <td className="border">
                      A reply should be submitted within three months(which may
                      exceed not more than one month)
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      Trademark objection is a part of the registration process.
                    </td>
                    <td className="border">
                      A trademark opposition is a different process.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      If there is no response from the applicant, it leads to
                      the removal of the trademark.
                    </td>
                    <td className="border">
                      Similar is the case with trademark opposition; no response
                      will lead to the removal of the trademark.
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      An appeal can be made after the rejection.
                    </td>
                    <td className="border">
                      An appeal can be made after the judgment is passed.
                    </td>
                  </tr>
                </tbody>
              </table>
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
