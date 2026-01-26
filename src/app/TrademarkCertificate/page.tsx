import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrademarkCertificate() {
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
                Trademark Certificate & Brand Monitoring
              </h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A Trademark Registration Certificate is a legal document issued
                by the Indian Trademark Registry that certifies the successful
                registration of a trademark in India.
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
                {
                  id: 3,
                  title: "Trademark Certificate & Brand Monitoring",
                  url: "",
                },
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
                        Trademark Certificate & Brand Monitoring
                      </h5>
                      <p>
                        A Trademark Registration Certificate is a legal document
                        issued by the Indian Trademark Registry that certifies
                        the successful registration of a trademark in India.
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
                Trademark Registration Certificate
              </h2>
              <p>
                A Trademark Registration Certificate is a legal document issued
                by the Indian Trademark Registry that certifies the successful
                registration of a trademark in India. The trademark certificate
                is proof of the exclusive ownership of the trademark and grants
                the trademark owner the absolute right to use the trademark for
                its goods and services. The certificate of trademark also shows
                the trademark’s official registration date, class of goods and
                services and the geographical region where the trademark is
                registered. The Trademark Registration Certificate is a valuable
                asset to the trademark owner and must be renewed to ensure its
                validity.
              </p>
              <h3>What is Trademark Registration?</h3>
              <p>
                Trademark registration is the process of registering a trademark
                with the government to protect it from being used without
                permission. A trademark is a identifiable symbol or expression
                which identifies a source's products or services from those of
                others. Trademark registration in India is governed by the
                Trademarks Act 1999 and is administered by the Controller
                General of Patents, Designs, and Trademarks.
              </p>
              <p>
                Trademark registration and obtaining a trademark certificate is
                an important part of protecting a business’s intellectual
                property. It helps to prevent others from using a similar or
                identical trademark without permission. The registration process
                also serves to notify the public that a business owns a
                particular trademark, which can help deter infringement.
              </p>
              <h3>What is Trademark Certificate?</h3>
              <p>
                A Trademark Certificate is an official legal document issued by
                the Indian Trademark Registry that confirms the successful
                registration of a trademark under the Trade Marks Act, 1999.
                This certificate serves as proof of exclusive ownership of the
                trademark, granting the owner the sole right to use it for their
                goods or services. It includes critical details such as the
                registration date, trademark class, and geographical scope of
                protection. The certificate is vital for protecting intellectual
                property, deterring unauthorized use, and enabling legal action
                against infringement. Additionally, it allows the owner to
                license or monetize the trademark and ensures nationwide
                recognition and enforcement of rights.
              </p>
              <h3>
                Benefits of Certificate of&nbsp;<span>Trademark</span>
              </h3>
              <p>
                A trademark registration certificate is a powerful tool for
                brand protection and helps avoid future costly disputes. It also
                offers a variety of benefits, such as exclusive rights to use
                the trademark, the ability to file a suit for trademark
                infringement and statutory damages for trademark infringement.
                Furthermore, it allows for a broader scope of protection for the
                trademark, including foreign countries.
              </p>
              <h4>Protection of Unique Brand Name</h4>
              <p>
                Registering a trademark provides you with exclusive rights to
                use the mark on goods and services in the class it is
                registered. This means that no other person or entity can use
                the same mark or any confusingly similar mark on similar goods
                and services. This certificate of trademark provides strong
                legal protection for the uniqueness of your brand name or logo.
              </p>
              <h4>Prevent Unauthorized Use</h4>
              <p>
                Once the trademark is registered, it can be used to prevent any
                third party from using it without authorization. This is
                especially important when someone tries to pass off their goods
                or services as those of the registered trademark owner. In such
                cases, the trademark owner can take legal action against the
                infringer and protect their rights.
              </p>
              <h4>Ability to License and Franchise</h4>
              <p>
                One of the significant benefits of registering a trademark is
                that it allows the trademark owner to license and franchise
                their mark to third parties. This means the trademark owner can
                enter into commercial agreements with other parties, allowing
                them to use the mark in return for payment. It is a great way to
                monetize the trademark and grow the business.
              </p>
              <h4>Increased Brand Value</h4>
              <p>
                A registered trademark can help increase the value of a brand.
                This is because it gives the brand a unique identity and makes
                it easier for customers to identify the brand and its products
                and services. This can help increase the brand’s recognition and
                create a loyal customer base.
              </p>
              <h4>Increased Investment Opportunities</h4>
              <p>
                A registered trademark can be used as an asset to attract
                investors. This is because investors are more likely to invest
                in a business with a registered trademark, indicating that the
                company has taken steps to protect its intellectual property.
              </p>
              <h4>Protection in Foreign Markets</h4>
              <p>
                A trademark registration in India can also be used to protect
                the brand in foreign markets. This is because the registration
                provides exclusive rights to use the mark in India, which can be
                used as a basis for seeking protection in foreign countries.
              </p>
              <h3>How to Get Trademark Certificate?</h3>
              <p>
                Obtaining a Trademark Registration Certificate is an important
                step in protecting your brand or product. It gives legal
                recognition to your mark and serves as irrefutable proof of
                ownership. It serves as a deterrent to potential infringers, as
                it serves as an official notice that your mark is a registered
                trademark. Additionally, registering your trademark gives you
                the exclusive right to use the trademark throughout India. This
                makes it easier to enforce your rights if someone attempts to
                use a similar mark without your permission. Here is the step by
                step process on how to get trademark certificate:
              </p>
              <h4>Selection of Trademark</h4>
              <p>
                The first step in obtaining a trademark registration certificate
                in India is to select the trademark. The trademark should be
                unique, distinctive, and capable of recognising the goods or
                services of one person from those of another.
              </p>
              <h4>Trademark Application</h4>
              <p>
                The next step is to file an application with the Trade Marks
                Registry in India. The application must be filed online and
                should include the following:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> The name and address of
                      the applicant.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Details of the
                      trademark.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The goods and/or
                      services to which the trademark applies.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The class or classes of
                      goods and/or services in which the trademark is to be
                      registered.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Examination of Trademark</h4>
              <p>
                Once the application is filed, it is examined by the Trade Marks
                Registry. During this examination, the registry will determine
                whether the trademark is eligible for registration and verify
                that it is not identical or deceptively similar to any existing
                trademark.
              </p>
              <h4>Publication of Trademark</h4>
              <p>
                If the examination is successful, the trademark will be
                published in the trademark journal. This will allow any third
                parties who may have objections to the registration to file
                their objections
              </p>
              <h4>Response to Objections</h4>
              <p>
                If any objections are raised, the applicant will have to respond
                to them. The applicant may also have to provide additional
                evidence in support of the application.
              </p>
              <h4>Grant of Trademark Registration</h4>
              <p>
                If the objections are addressed and the application is deemed
                eligible for registration, the Trade Marks Registry will grant
                and issue the trademark certificate. Once you are granted
                permission, your trademark is registered, and you can do the
                trademark certificate download India.
              </p>
              <h3>Renewing a Trademark Registration Certificate</h3>
              <p>
                Renewing a trademark registration certificate ensures that the
                protection of the brand or logo is maintained. Without the
                renewal of the trademark certificate, the brand or logo can
                become vulnerable to infringement and may result in a loss of
                exclusive rights and legal action. When the certificate is
                renewed, it extends the duration of the registered trademark and
                provides additional legal protection. This is especially
                important if the brand or logo is widely used and recognized by
                the public. Renewing a trademark registration certificate is an
                important step in preserving the brand’s or logo’s value and
                preventing any potential issues from arising.
              </p>
              <h4>Determine the Renewal Period</h4>
              <p>
                Trademark registration in India is valid for 10 years from the
                registration date. Trademark owners need to renew their
                registration before the expiration of the 10 years to continue
                enjoying the benefits of trademark registration.
              </p>
              <h4>Prepare Renewal Application</h4>
              <p>
                Trademark owners must file a renewal application before the
                expiration date of the 10 years. The renewal application must be
                filed with the Trademark Registrar or the Intellectual Property
                Office of India (IPO).
              </p>
              <p>Submit Necessary Documents</p>
              <p>
                Trademark owners should submit the following documents along
                with the renewal application:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Copy of the existing
                      registration certificate
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Affidavit of use of the
                      trademark
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> A power of attorney
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Copy of the trademark
                      certificate from the Trademark Office
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Payment of the renewal
                      fee
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Receive Acknowledgement</h4>
              <p>
                Upon receipt of the renewal application, the Trademark Registry
                will send an acknowledgement to the trademark owner.
              </p>
              <h4>Review of the Renewal Application</h4>
              <p>
                Following the renewal application submission, the Trademark
                Registry will review the application and check for any
                discrepancies.
              </p>
              <h4>Issue of Renewal Trademark Certificate</h4>
              <p>
                After the Trademark Registry has approved the renewal
                application, a new registration certificate will be issued. The
                new registration certificate will have the updated expiration
                date and will be valid for 10 years from the renewal date.
              </p>
              <h4>Publication of Renewal Certificate</h4>
              <p>
                The renewed trademark certificate will also be published in the
                Trademarks Journal.
              </p>
              <h3>
                How LegallensIndia can help you get Trademark Registration
                Certificate
              </h3>
              <p>
                LegallensIndia can help customers with trademark registration
                certificate by providing them with up-to-date information about
                the process and the necessary documents that need to be
                submitted. Our team of experts guide our customers through each
                step of the registration process and ensures they clearly
                understand what is required. Our experts can review documents,
                provide feedback on any potential issues, and help resolve any
                conflicts that may arise. Additionally, we can help customers to
                understand the implications of registering a trademark and the
                potential legal problems that may occur.
              </p>
              <p>
                We also provide comprehensive services to help ensure that
                customers have a successful trademark registration. Our team can
                help customers to create an effective trademark that meets all
                the criteria set by the Indian Trademark Office, and we can
                provide advice on how to protect their trademark from
                infringement. Once the application is complete, our team will
                ensure that the application to ensure it is complete and
                accurate and will provide any necessary guidance to the
                customer.
              </p>
              <p>
                At LegallensIndia, we understand the importance of having a
                secure, reliable trademark registration and are committed to
                helping our customers to achieve this goal. We strive to provide
                the best customer service and guidance to ensure our customers
                can register their trademarks without hassle.
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
