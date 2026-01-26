import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { PartnershipList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function Partnership() {
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
                Partnership Firm Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Start your partnership firm registration with an expert-drafted
                deed by our team.
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
                { id: 2, title: "Business Registration", url: "StartUp" },
                { id: 3, title: "Partnership", url: "" },
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
                        Partnership Firm Registration
                      </h5>
                      <p>
                        Get Your Partnership Firm in Just 5–7 Days – 100% Online
                        & Hassle-Free! Start your partnership firm registration
                        with an expert-drafted deed by our team. Stamp paper
                        will be under the client scope.
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
                        {PartnershipList.map((item) => (
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

              <h2 className="display-4 mb-3">Partnership Firm Registration</h2>

              <p>
                A partnership firm is a popular choice among entrepreneurs due
                to its simplicity and flexibility. It allows multiple
                individuals to come together and combine their resources,
                skills, and expertise to run a business. Registering your
                partnership firm is the first step towards formalizing your
                partnership and ensuring its legal recognition.
              </p>

              <p>
                At LegallensIndia, we understand that navigating the intricacies
                of partnership firm registration process can be daunting. That's
                why we offer a comprehensive and hassle-free partnership firm
                registration online service designed to meet your needs with
                affordable partnership firm registration fees. We go through the
                complete process and register partnership deed effortlessly.
                Whether you are a new startup or an existing unregistered
                partnership looking to formalize your business, our expert team
                of professionals guides you through the process to register
                partnership firm.
              </p>

              <h5>
                Contact us now to learn more and get started on your partnership
                firm registration journey.
              </h5>

              <h3>Partnership Firms</h3>

              <p>
                A partnership stands as one of the fundamental structures for
                conducting business. It materializes when two or more
                individuals collaborate to establish a business venture, sharing
                profits according to an agreed-upon ratio. This form of business
                encompasses a broad spectrum of trades, occupations, and
                professions. A notable advantage is that partnership firms
                entail relatively fewer regulatory requirements than companies.
              </p>
              <h3>Law Governing the Partnership Firms Registration</h3>
              <p>
                In India, the operation of partnership firms is governed by the
                Indian Partnership Act of 1932. Those who unite to create a
                partnership firm are referred to as partners, and the formation
                of the partnership firm is based on a contractual agreement
                among these individuals. The agreement among partners is
                commonly referred to as a "partnership deed."
              </p>
              <h3>Partnership Deed</h3>
              <p>
                A partnership deed is a legal document that outlines the terms
                and conditions of a partnership. It includes details such as the
                rights and duties of partners, the distribution of profits,
                individual capital contributions, and the partnership's
                duration. Partnership deed registration is essential to execute
                the operations legally.
                <br />
                This document is significant as it helps prevent
                misunderstandings and conflicts among partners by clearly
                defining their roles and responsibilities. Moreover, it serves
                as proof of the partnership's existence and can be used in legal
                proceedings to resolve disputes. So, it is necessary to register
                partnership deed to get these benefits.
              </p>
              <h3>Partnership Firm Registration</h3>
              <p>
                Partnership registration involves the formal registration of a
                partnership firm by its partners with the Registrar of Firms.
                This process typically occurs in the state where the firm is
                located. It's important to note that partnership firm
                registration is not mandatory; it's optional. Partners can
                choose to apply for partnership deed registration at the time of
                forming the firm or later during its ongoing operations.
                <br />
                For partnership deed registration to take place, two or more
                individuals must come together as partners, agree on a firm
                name, and create a deed to register partnership deed.
              </p>

              <h5>
                Get expert help from LegallensIndia to easily register your firm
                with affordable partnership firm registration cost!
              </h5>
              <h3>Who Can Be a Partner in India's Partnership Firms?</h3>
              <p>
                To become a partner in an Indian partnership firm, you need to
                meet these conditions:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Mental and Legal Fitness:</strong> You must be
                      mentally sound, not underage, not insolvent, and not
                      legally prohibited from making contracts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Registered Partnership Firms:</strong> A
                      registered partnership firm can partner with other firms
                      or businesses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Head of a Hindu Family:</strong> A Hindu Undivided
                      Family (HUF) leader can be a partner if they contribute
                      their own skills and labor to the partnership.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Companies as Partners:</strong> Companies,
                      considered legal entities, can also be partners if their
                      objectives permit it.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Trustees of Specific Trusts:</strong> Trustees of
                      private religious, family, or Hindu trusts can partner
                      unless their rules explicitly prohibit it.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Advantages of a Partnership Firm</h3>
              <p>The advantages of a Partnership Firm are listed as follows:</p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ease of Formation:</strong> Partnership firm
                      registration cost is affordable and relatively easy to
                      establish, involving fewer formalities compared to other
                      business structures.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Varied Skill Sets:</strong> Partners can bring
                      diverse skills, knowledge, and resources to the business,
                      enhancing its overall capabilities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Shared Financial Burden:</strong> Partners share
                      the financial responsibilities and risks, making it more
                      manageable for each individual.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tax Benefits:</strong> Partnership firms are not
                      subject to income tax themselves. Instead, profits are
                      taxed at the individual partners' tax rates, which can
                      lead to potential tax savings.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Flexible Decision-Making:</strong> Partnerships
                      allow for flexible decision-making as partners have a say
                      in the business's operations and direction.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Greater Access to Capital:</strong> Partners can
                      contribute capital, and additional partners can be added
                      to raise more funds for the business.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Disadvantages of a Partnership Firm</h3>
              <p>
                Partnership firm registration online can be fruitful since it is
                cost-effective and provides greater access to capital. But you
                will have the following drawbacks:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Unlimited Liability:</strong> Partners have
                      unlimited personal liability, meaning they are personally
                      responsible for the firm's debts and obligations, which
                      can put their personal assets at risk.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limited Capital:</strong> Raising substantial
                      capital may be challenging as it relies on the partners'
                      contributions and potential loans.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Conflict Potential:</strong> Differences in
                      opinion among partners can lead to conflicts and hinder
                      decision-making.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limited Growth Potential:</strong> A partnership
                      may need more growth and scalability compared to larger
                      business structures.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Continuity Issues:</strong> The firm's continuity
                      may be disrupted due to a partner's death, withdrawal, or
                      insolvency unless provisions are made in the partnership
                      deed.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tax Complexity:</strong> Partnerships can involve
                      complex tax arrangements, and each partner is responsible
                      for their own tax compliance, which may require
                      professional assistance.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Choosing a partnership firm structure should involve careful
                consideration of these advantages and disadvantages in the
                context of your business goals and circumstances.
              </p>
              <h3>Importance of Register Partnership Firm</h3>
              <p>
                While register partnership firm is not legally required under
                the Indian Partnership Act, it offers several significant
                advantages and is considered advisable:
              </p>
              <h4>Legal Standing</h4>
              <p>
                A registered partnership firm obtains legal recognition. This
                allows partners to enforce their contractual rights against
                other partners or the firm. In contrast, unregistered
                partnership firms face limitations when pursuing legal action.
              </p>
              <h4>Suing Third Parties</h4>
              <p>
                Registered firm can file a lawsuit against third parties to
                enforce its contractual rights, providing legal protection
                unregistered firms do not enjoy. Unregistered firms cannot
                initiate legal proceedings against external parties.
              </p>
              <h4>Claiming Set-Off</h4>
              <p>
                Registered firms can claim set-off or other legal remedies to
                enforce contractual rights. Unregistered firms lack this legal
                advantage in proceedings brought against them.
              </p>
              <h3>Partnership Firm Registration Process</h3>
              <p>
                The procedure for partnership deed registration is explained in
                detail below:
              </p>
              <h4>Choose a Name for the Partnership Firm</h4>
              <p>
                Select a unique name for the partnership firm, ensuring it is
                not identical or similar to any existing company or LLP. It must
                also comply with legal naming regulations.
              </p>
              <h4>Draft the Partnership Deed</h4>
              <p>
                Create a comprehensive partnership deed outlining the terms and
                conditions of the partnership. This document should include the
                firm's name, partner names and addresses, business nature,
                profit-sharing ratio, and the partnership's duration.
              </p>
              <h4>Application for Registration</h4>
              <p>
                Partners must apply with the Registrar of Firms, including firm
                details, partners' names and addresses, and the duration of the
                firm.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> The name of the
                      Partnership Firm
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The principal place of
                      business
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The location of any
                      other sites where the firm carries on business
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The date of joining of
                      partners
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The names and addresses
                      of the partners
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The duration of the firm
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Obtain the Certificate of Registration</h4>
              <p>
                Following verification by the Registrar of Firms, If the
                Registrar is satisfied with the application, a Certificate of
                Registration will be issued to confirm the partnership deed
                registration. This certificate proves the firm's registration
                with the Registrar of Firms.
              </p>
              <h4>Apply for PAN and TAN</h4>
              <p>
                Apply for a Permanent Account Number (PAN) and a Tax Deduction
                and Collection Account Number (TAN) from the Income Tax
                Department. These numbers are essential for tax-related matters.
                <br />
                This is the comprehensive step-by-step process to register
                partnership firm. Get expert help from LegallensIndia to
                seamlessly complete your partnership firm registration process.
              </p>
              <h3>
                How can LegallensIndia help in Partnership Firm Registration?
              </h3>
              <p>
                We offer comprehensive assistance in Partnership Firm
                Registration, simplifying the complex process for you. Our
                experienced team provides expert guidance, aids in document
                preparation, assists with name selection, and ensures full legal
                compliance with affordable partnership firm registration fees.
                We take care of submitting your application to the relevant
                authorities and keep you informed with timely updates. Whether
                initiating a new partnership or formalizing an existing one, our
                services are tailored to your unique needs when it comes to
                register partnership firm. We don't stop at registration; our
                support continues post-registration, helping you understand the
                ongoing responsibilities of operating a registered partnership
                firm.
                <br />
                With LegallensIndia, you can confidently navigate the
                partnership firm registration online process, knowing that your
                partnership is established efficiently, allowing you to
                concentrate on your business's growth. Our effective solutions
                and reasonable partnership firm registration cost make the
                entire process hassle-free and affordable. Contact us today to
                take the first step towards a successful partnership.
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
