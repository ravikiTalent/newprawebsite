import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function LimitedLiabilityPartnership() {
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
                Limited Liability Partnership Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Limited Liability Partnership (LLP) is a contemporary and
                advantageous business structure.
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
                { id: 3, title: "LLP Registration", url: "" },
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
                      <h5 className="card-title">LLP Registration</h5>
                      <p>Instant Name Application for LLP.</p>
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
                Limited Liability Partnership (LLP) Registration in India
              </h2>
              <p>
                Limited Liability Partnership (LLP) is a contemporary and
                advantageous business structure. Blending the strengths of
                partnership dynamics and the security of limited liability, an
                LLP registration in India offers a versatile platform for
                entrepreneurs to collaborate and innovate confidently.
                <br />
                Getting your LLP registered in India is super easy with
                LegallensIndia. Many businesses trust us to help them register
                their Limited Liability Partnerships and ensure they follow the
                rules. Our team of experts will guide you through the online
                registration process from beginning to end. It's the fastest and
                cheapest way of LLP company registration, all you have to do is
                just reach out to us. Start now and set yourself up for a
                successful business future with LLP registration online.
              </p>

              <h3>What is an LLP?</h3>
              <p>
                A Limited Liability Partnership (LLP) is a unique type of
                business setup that blends a partnership's and a company's
                features. In an LLP, partners enjoy limited liability, similar
                to shareholders in a company, while also benefiting from the
                flexibility and simplicity of a partnership. This arrangement
                grants the LLP formation its legal identity, allowing it to take
                legal actions and be subject to legal actions separately from
                its partners.
                <br />
                The structure and LLP registration in India have become popular
                among entrepreneurs in various industries because they shield
                partners' assets and have more straightforward regulatory
                requirements than traditional corporations. The concept of LLP
                was introduced in India in 2008 and is governed by the Limited
                Liability Partnership Act, offering a dependable and adaptable
                option for businesses of all sizes.
              </p>
              <h3>
                Prerequisites and Eligibility Conditions for LLP Registration
                Process
              </h3>
              <p>
                To qualify for the LLP company registration in India, you must
                adhere to the subsequent criteria:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimum of Two Partners:</strong> Establishing a
                      Limited Liability Partnership in India necessitates a
                      minimum of two partners, with no upper threshold on the
                      maximum number of partners.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Designated Partners:</strong> Within the
                      partnership framework, at least two selected partners are
                      obligatory, and they must be natural individuals. At least
                      one of these designated partners must also maintain
                      residency in India for an LLP incorporation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Nomination for Body Corporate Partner:</strong> If
                      a body corporate assumes the role of a partner, the
                      designation of a natural person must act as its
                      representative.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Agreed Contribution:</strong> Each partner is
                      required to contribute the shared capital of the LLP, as
                      stipulated and agreed upon.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Minimum Authorized Capital:</strong> To register
                      LLP, it is mandated to possess an authorized capital of at
                      least Rs.1 lakh.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Indian Resident Designated Partner:</strong> At
                      least one designated partner of the LLP must hold a
                      resident status in India.
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                By satisfying these prerequisites, you can progress with the LLP
                registration process in India and avail the advantages bestowed
                by this business structure.
              </p>
              <h3>Characteristics of Limited Liability Partnership (LLP)</h3>
              <p>
                Here are the characteristics of company structure, and one must
                adhere to this for LLP registration in India:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Identity:</strong> Like big companies, an
                      LLP has a separate legal identity. This means it's seen as
                      its own "person" regarding rights and responsibilities,
                      separate from those who own it.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>At Least Two Partners:</strong> An LLP formation
                      needs at least two people to start it. This teamwork helps
                      in setting up the business and working together.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>No Partner Limit:</strong> Unlike some other
                      businesses, there's no highest number of partners an LLP
                      can have. This makes it easy to grow and bring in more
                      partners.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Two Designated Partners:</strong> A Limited
                      Liability Partnership must have at least two "main"
                      partners. These people must be real individuals, and at
                      least one should live in India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Limited Responsibility:</strong> One big plus of
                      an LLP is that if something goes wrong, each partner is
                      only responsible for what they put in. So, personal things
                      are safe from business problems.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Cost-Effective Start:</strong> To register LLP,
                      costs less than setting up a big company. This makes it a
                      great option for smaller businesses.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Less Rules to Follow:</strong> LLPs don't have to
                      follow as many rules and regulations as big companies.
                      This means less paperwork and less to worry about.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>No Minimum Money Needed:</strong> Unlike big
                      companies, you don't need a certain amount to start an
                      LLP. Partners can invest what they can afford.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Advantages of Register LLP in India</h3>
              <p>
                The advantages of register LLP in India are elaborated in detail
                below:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Own Legal Identity:</strong> An LLP is like its
                      own person, just like big companies. This helps people
                      trust and work with it, as it can do legal things
                      independently.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Less Risk for Partners:</strong> LLP partners are
                      only responsible for what they put in. They don't have to
                      pay for all the debts or losses, which is good for their
                      reputation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Saves Money and Time:</strong> To register LLP,
                      the costs are less and have fewer rules than big
                      companies. There's less paperwork to do every year.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>No Fixed Money Needed:</strong> You don't need
                      much money for LLP company registration. Partners can put
                      in whatever amount they want.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Disadvantages of Register LLP in India</h3>
              <p>
                Certainly, Limited Liability Partnerships (LLPs) present
                numerous advantages despite a few inherent disadvantages:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>
                        Getting in Trouble for Not Following Rules:
                      </strong>{" "}
                      Even though LLPs have fewer rules, they can get big fines
                      if they don't follow them on time. Even if an LLP doesn't
                      do anything in a year, it still needs to tell the
                      government or get fined.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Ending an LLP:</strong> An LLP needs at least two
                      partners. It must stop if it has fewer than two partners
                      for six months. Also, it might have to close if it can't
                      pay its debts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Hard to Get Big Money:</strong> LLPs don't work
                      like big companies where people invest money and become
                      owners. This makes it tricky to get a lot of money from
                      investors.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Limited Liability Partnership (LLP) Name Structure
              </h3>
              <p>
                Choose a unique name that is not used by other businesses. This
                makes approval easier and establishes your identity. Include
                words that clearly describe what your business does. This helps
                people understand your services or products.
                <br />
                End your LLP name with "LLP" or "Limited Liability Partnership."
                This is necessary to show your business structure and essential
                part of your LLP registration process.
              </p>
              <h3>Documents Required for LLP Registration Online</h3>
              <p>
                To initiate the LLP company registration process, partners are
                required to have the following LLP registration documents:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN Card/ID Proof of Partners:</strong> Address
                      Proof of Partners: Partners can submit the following
                      documents: Voter's ID, Passport, Driver's License, or
                      Aadhar Card.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Residence Proof of Partners:</strong> Partners
                      need to provide recent documents such as a bank statement,
                      telephone bill, mobile bill, electricity bill, or gas bill
                      from the last 2-3 months.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Passport-size Photograph:</strong> Partners should
                      provide a passport-size photograph with a white
                      background.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>For Foreign Nationals and NRIs:</strong> For
                      Foreign Nationals and NRIs:
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Proof of Registered Office Address:</strong> This
                      includes the landlord's rent agreement and a no-objection
                      certificate if the office space is rented. A recent
                      utility bill (gas, electricity, or telephone) with the
                      complete address and owner's name (dated two months or
                      older) should also be submitted.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Digital Signature Certificate (DSC):</strong> At
                      least one designated partner must have a DSC for digitally
                      signing documents.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Ensure to have these LLP registration documents before
                proceeding to register the LLP online.
              </p>
              <h3>Procedure for LLP Registration Online</h3>
              <p>
                The process of how to register LLP in India involves several key
                steps. Here is a comprehensive guide for LLP company
                registration online:
              </p>
              <h4>Obtain a Digital Signature Certificate (DSC)</h4>
              <p>
                All proposed partners of the LLP must obtain a Digital Signature
                Certificate (DSC) since all government filings require digital
                signatures.
              </p>
              <h4>Obtain Director Identification Number (DIN)</h4>
              <p>
                Partners without a DIN need to apply for one. The Director
                Identification Number (DIN) is a unique identification number
                assigned to individuals aspiring to become directors or
                designated partners in LLPs.
              </p>
              <h4>Choose a Name for the LLP</h4>
              <p>
                Select a unique and suitable name for your LLP registration
                online, adhering to Ministry of Corporate Affairs guidelines.
              </p>
              <h4>Form for LLP Incorporation (FiLLiP)</h4>
              <p>
                This form collects essential information about the proposed LLP,
                partners, LLP agreement, and registered office address. It
                includes a declaration from partners consenting to act as
                designated partners and comply with LLP regulations.
              </p>
              <h4>Draft LLP Agreement:</h4>
              <p>
                Create the LLP Agreement outlining partner rights, duties, and
                obligations. This agreement must be notarized and filed with the
                Ministry of Corporate Affairs within 30 days of LLP
                incorporation.
              </p>
              <h4>Obtain a Certificate of Incorporation</h4>
              <p>
                Once forms and documents are filed and verified, the Registrar
                of Companies (RoC) will issue the Certificate of Incorporation,
                officially recognizing the LLP's existence.
              </p>
              <h4>Apply for PAN and TAN</h4>
              <p>
                After obtaining the Certificate of Incorporation, apply for the
                Permanent Account Number (PAN) and TAN to complete the process
                of how to register LLP in India.
                <br />
                You can complete the Limited Liability Partnership (LLP)
                registration online and embark on your entrepreneurial venture
                by diligently following these steps.
              </p>
              <h3>
                Effortless LLP Registration Made Possible with LegallensIndia
              </h3>
              <p>
                LegallensIndia is your trusted companion throughout the entire
                LLP registration online journey. Here's how we can assist you:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Experienced Professionals:</strong> Our skilled
                      team knows the ins and outs of LLP company registration.
                      We'll provide you with accurate information, ensuring you
                      grasp each step.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Name Availability:</strong> We'll help you check
                      if your desired Limited Liability Partnership (LLP) name
                      is available and reserve it according to the rules.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>DSCs and DINs:</strong> We'll assist you in
                      getting the Digital Signature Certificates (DSCs) and
                      Director Identification Numbers (DINs) necessary for the
                      process.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>LLP Agreement:</strong> Our experts will aid in
                      drafting the LLP Agreement, ensuring it's legally sound.
                      We'll also manage to file the required documents with the
                      authorities, keeping things accurate and compliant.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>PAN and TAN Application:</strong> We'll simplify
                      the application process for your LLP's Permanent Account
                      Number (PAN) and Tax Deduction and Collection Account
                      Number (TAN).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Customer Support:</strong> We're here for you. Our
                      customer support will address your questions, ensuring
                      your LLP registration process journey is seamless.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Affordable LLP registration fees:</strong> Our LLP
                      registration fees are designed to be affordable with
                      high-quality service including, MCA name approval, instant
                      filing, name choices, etc., for a seamless startup
                      experience.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Timely Updates:</strong> You'll receive timely
                      updates on your LLP company registration progress, keeping
                      you informed every step of the way.
                    </li>
                  </ul>
                </div>
                <p>
                  With LegallensIndia as your partner, you can confidently
                  navigate LLP formation with reasonable LLP registration fees,
                  guided by experienced professionals who will ensure a
                  hassle-free experience from start to finish.
                </p>
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
