import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function UKCompany() {
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
                UK Company Registration
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Set-up Business in UK with 1 Year virtual office address service
                along with bank account opening.
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
                { id: 2, title: "UK Company Registration", url: "" },
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
                      <h5 className="card-title">UK Company Registration</h5>
                      <p>
                        Set-up Business in UK with 1 Year virtual office address
                        service along with bank account opening.
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

              <h2 className="display-4 mb-3">UK Company Registration</h2>
              <p>
                Registering a company in the United Kingdom offers numerous
                advantages, attracting entrepreneurs and investors worldwide.
                The UK's business-friendly regulations, supportive environment,
                and tax incentives make it an attractive destination for Indian
                companies looking to expand their operations globally. For
                Indian entrepreneurs, register company in UK to get numerous
                benefits, including access to a thriving economy, political
                stability, a robust financial system, and a skilled workforce.
              </p>
              <p>
                LegallensIndia is a professional online platform in India that
                offers a wide range of business services to individuals and
                companies. We provide assistance to register company in
                UK,&nbsp; including company registration, trademark
                registration, GST registration, income tax filing, accounting
                and bookkeeping, and other compliance-related services. Our
                user-friendly online portal simplifies the business registration
                UK process, making it convenient for businesses to fulfill their
                legal and regulatory obligations. With our expert team and
                robust technology, LegallensIndia aims to streamline and
                optimize business operations, helping entrepreneurs focus on
                growth and success.
              </p>
              <p>
                LegallensIndia is a trusted business solutions provider in India
                that can help UK entrepreneurs to set up company in UK. We offer
                a comprehensive range of services to help entrepreneurs set up
                their business in the UK.
              </p>
              <h3>Criteria for Company Formation UK</h3>
              <p>
                It is an exciting prospect to register company in UK , but it
                also comes with many legal and administrative requirements. To
                register a company in the UK, there are several criteria that
                must be met.
              </p>
              <h4>Company Name Approval:</h4>
              <p>
                The first step to register company in UK is to choose a unique
                company name. The name must be different from an existing
                company name. It must also not contain any sensitive words or
                expressions or offensive or illegal terms. A company name must
                also have a designated ending relevant to its type, such as
                "Ltd." for a private limited company.
              </p>
              <h4>Registered Office:</h4>
              <p>
                All UK companies must have a registered office, the company's
                official address where all legal documents will be sent. The
                address must be in the United Kingdom as a condition for company
                formation UK and can be a physical or virtual office. It is also
                important to note that the registered office must be a physical
                address if the company is a Limited Liability Partnership (LLP).
              </p>
              <h4>Directors:</h4>
              <p>
                All companies in the UK must have at least one director. A
                director can be a person or a company, but they must be over 16
                years old and not be disqualified from holding the position of
                director. Companies must also provide Companies House with all
                directors' names and addresses, and any changes must be notified
                within 14 days.
              </p>
              <h4>Shareholders:</h4>
              <p>
                All UK companies must have at least one shareholder, but there
                is no limit to the number of shareholders a company can have.
                Shareholders own a portion of the company, and their rights and
                responsibilities are outlined in the company's articles of
                association. Companies must also provide Companies House with
                all shareholders' names and addresses, and any changes must be
                notified within 14 days to ensure legal compliance for company
                formation UK.
              </p>
              <h3>Documents Required to Register Company in UK</h3>
              <p>
                As an Indian entrepreneur looking to set up a business in the
                United Kingdom, you will need to follow specific legal
                requirements to register your company. This process involves
                submitting several documents to the UK government.
              </p>
              <h4>1. Memorandum of Association:</h4>
              <p>
                The Memorandum of Association is a legal document outlining the
                company's objectives, name, and number of shares issued. This
                document is the foundation of the company, and it is essential
                for company registration.
              </p>
              <h4>2. Articles of Association:</h4>
              <p>
                The Articles of Association define the rules and regulations of
                the company and the procedures for running the company. This
                document is vital for the company's internal management and the
                rights of shareholders.
              </p>
              <h4>3. Completed Registration form (IN01):</h4>
              <p>
                This form provides details about the company's directors,
                shareholders, and registered office address. This form must be
                completed and filed with the Registrar of Companies to register
                your company.
              </p>
              <h4>4. Identification Proof:</h4>
              <p>
                Identification proof, such as a passport or driving license, is
                required for all directors and shareholders of the company. This
                document helps verify the identity of the individuals
                registering the company.
              </p>
              <h4>5. Address Proof:</h4>
              <p>
                Address proof, such as a utility bill or bank statement, is
                required to prove the address of the individuals registering the
                company.
              </p>
              <h4>6. Certificate of Incorporation:</h4>
              <p>
                The Registrar of Companies issues this document once the company
                is registered. The certificate confirms the company's legal
                existence and includes details such as the company name,
                registration number and incorporation date.
              </p>
              <h4>7. Business Plan:</h4>
              <p>
                A business plan is a document that outlines the company's
                objectives, mission, and strategy. It should include the target
                market, marketing plan, financial projections, and management
                team.
              </p>
              <h4>8. Bank Account Details:</h4>
              <p>
                Bank account details are required to set up company in UK for
                tax purposes. This includes the bank name, account number, and
                sort code.
              </p>
              <h3>Benefits of Business Registration UK</h3>
              <p>
                Below, we have given several benefits to entrepreneurs through
                business registration UK.
              </p>
              <h3></h3>
              <h4>Access to a Thriving Economy:</h4>
              <p>
                With a GDP consistently ranking among the world's top economies,
                the UK provides a favourable market for Indian companies to
                expand their operations. Moreover, its proximity to Europe
                offers more access to a more extensive consumer base and allows
                businesses to tap into the European Union market through Company
                Formation London, UK.
              </p>
              <h4>Political Stability and Investor-Friendly Policies:</h4>
              <p>
                The UK is renowned for its political stability, transparent
                governance, and investor-friendly policies. A robust legal
                framework protects intellectual property rights, contracts, and
                business interests. This stability instils confidence in
                investors and provides a solid foundation for long-term business
                planning and growth.
              </p>
              <h4>Strong Financial and Banking System:</h4>
              <p>
                Registering a company in the UK provides access to an efficient
                banking system, facilitating international transactions and
                easing business operations. Indian entrepreneurs can benefit
                from flexible financial solutions available through established
                financial institutions, such as business loans, credit lines,
                and investment opportunities.
              </p>
              <h4>Skilled Workforce and Global Talent Pool:</h4>
              <p>
                The UK has a well-educated and diverse workforce, including a
                significant Indian diaspora. Registering a company in the UK
                allows businesses to tap into this skilled talent pool, gaining
                access to individuals with diverse backgrounds and expertise.
                The UK's reputable educational institutions produce a steady
                stream of highly qualified professionals, providing a
                competitive advantage for companies seeking specialized talent
                across various sectors.
              </p>
              <h4>Business-friendly Regulations and Supportive Environment:</h4>
              <p>
                The UK government actively supports business growth and
                innovation. The country offers a simplified and efficient
                company registration process, allowing entrepreneurs to set up
                their businesses quickly. Additionally, the UK encourages
                entrepreneurship by providing various support programs,
                including mentoring, business incubators, and access to
                government-backed initiatives.
              </p>
              <h4>Gateway to Europe:</h4>
              <p>
                Entrepreneurs can establish their presence in the UK and utilize
                it as a stepping stone to expand operations throughout Europe,
                enjoying the benefits of a single market with over 450 million
                consumers.
              </p>
              <h4>Tax Benefits and Incentives:</h4>
              <p>
                The UK offers a competitive tax regime that incentivizes
                businesses. The corporate tax rate is comparatively low,
                providing favourable conditions for profitability and
                reinvestment. Moreover, the UK has double taxation agreements
                with several countries, including India, ensuring that
                businesses are not taxed twice on the same income.
              </p>
              <h3>
                Register your Company in UK Effortlessly through LegallensIndia!
              </h3>
              <p>
                Setting up a company in the UK can be an excellent opportunity
                for Indian entrepreneurs looking to expand their business
                operations overseas. The UK is known for its robust business
                ecosystem, ease of business, and favourable tax policies.
                LegallensIndia is a trusted business solutions provider in India
                that can help entrepreneurs in the UK with their company
                registration process.
              </p>
              <p>
                LegallensIndia can also help entrepreneurs in the UK with the
                preparation and filing of the Annual Returns and Accounts
                required for the compliance of company formation London, UK. We
                provide advice on the best practices to follow in order to
                ensure proper accounting practices and the maintenance of the
                company's financial records. LegallensIndia also offers
                assistance in the preparation and filing of the company's
                Director's Report and the Company's Annual Return.
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
