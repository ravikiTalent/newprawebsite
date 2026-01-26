import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import { cartList } from "data/cart-page";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";

// CUSTOM DATA

export default function TrustRegistration() {
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
              <h1 className="display-1 text-white mb-3">Trust Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Trusts are a business structure created with noble intentions to
                promote the development of sciences, literature, and other
                worthy causes.
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
                { id: 3, title: "Trust Registration", url: "" },
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
                      <h5 className="card-title">Trust Registration</h5>
                      <p>
                        A Trust can be registered in India to conduct not for
                        profit or charitable activities. Get a Trust Deed
                        prepared by a Lawyer through LegallensIndia along stamp
                        paper.
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

              <h2 className="display-4 mb-3">Trust Registration</h2>

              <p>
                Trusts are a business structure created with noble intentions to
                promote the development of sciences, literature, and other
                worthy causes. They serve purposes such as alleviating scarcity,
                providing education to those in need, and offering medical
                support. Trust registration is officially registering a trust
                under the Trusts Act of 1882. This legal step ensures that the
                trust is recognized and operates within the framework of the
                law. Trust registration Online provides legal validity and
                establishes its existence as a separate entity.
                <br />
                If you are contemplating the creation of a trust for non-profit
                or charitable purposes, registration of a trust is vital to
                ensure its effective operation and compliance with legal
                obligations. At LegallensIndia, we have a dedicated team of
                professionals ready to support you every step of the way during
                the trust registration and getting a trust registration
                certificate download. We clear up your doubts and confusion on
                how to register a trust in India. Our aim is to provide you with
                a seamless and efficient trust registration online process.
                <br />
                Contact us today to discuss your registration needs and benefit
                from our expertise in establishing legally compliant and
                effective trusts.
              </p>
              <h3>Trust & Trust Registration - An Overview</h3>
              <p>
                Individuals establish trusts to allocate a portion of their
                assets or property for the benefit of another person. A trust is
                a fiduciary relationship involving the trustor, trustee, and
                beneficiary. The involved parties are outlined in the trust deed
                when applying for registration for trust creation.
                <br />
                A trust is established when the trustor transfers a specific
                asset or property to the trustee for the ultimate benefit of the
                beneficiary. The beneficiary, who is typically a third party,
                may have a connection to both the trustor and the trustee.
                <br />
                Therefore, the relationship between the parties involved is
                essential in defining trust. According to the Indian Trusts Act
                of 1882, a trust is defined as a "Relationship between the
                trustor and trustee to hold specific benefits for the
                beneficiary."
              </p>

              <h3>Parties involved in the Trust Registration Process</h3>
              <p>
                The trust registration process involves the following parties:
              </p>
              <h4>Trustor:</h4>
              <p>
                The trustor is the person who establishes the trust. They are
                typically the owner of the assets or property being placed in
                the trust.
              </p>

              <h4>Trustee:</h4>
              <p>
                The trustee is an individual or entity entrusted with the
                responsibility of managing and overseeing the trust. They hold
                and administer the trust property on behalf of the trustor and
                for the benefit of the beneficiary.
              </p>
              <h4>Beneficiary:</h4>
              <p>
                The beneficiary is the person for whom the trust is created.
                They are the intended recipient of the benefits, assets, or
                property held within the trust. The beneficiary can be a third
                party, known to both the trustor and trustee, and they are
                entitled to receive the benefits according to the terms and
                conditions of the trust.
              </p>
              <h3>Types of Trusts</h3>
              <p>
                Trusts can be classified into various categories based on the
                activities they undertake. You need to understand these types to
                navigate how to register a trust in India. Here are the
                different types of trusts:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Public Trust
                    </li>
                    <li className="mt-3">
                      <i className="uil uil-check"></i> Private Trust
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Public Cum-Private Trust
                    </li>
                  </ul>
                </div>
              </div>
              <h4 className="mt-4">Private Limited Trusts</h4>
              <p>
                Private Limited Trusts are established to carry out activities
                for specific individuals, families, or close associates. These
                trusts can have beneficiaries closely related to the
                trust'strust's founders. Private limited trusts are governed by
                The Trusts Act of 1882.
              </p>
              <h4>Public Limited Trusts</h4>
              <p>
                Public limited trusts are typically created to benefit the
                general public. They are often established for charitable,
                educational, and religious purposes and are governed by specific
                statutes such as the Religious Endowments Act of 1863, the
                Charitable and Religious Trust Act of 1920, or the Bombay Public
                Trust Act of 1950. Charitable and religious trusts are the most
                common types of public trusts in India.
              </p>
              <h4>Public Cum-Private Trust</h4>
              <p>
                This type of trust serves both public and private purposes. It
                can utilize its income for the benefit of the public and
                specific individuals or families. The beneficiaries of a public
                cum-private trust can be a combination of public and private
                individuals.
              </p>
              <h3>Regulatory Authority and Laws for Trust Registration</h3>
              <p>
                The Registrar of Trusts is the primary regulatory authority
                responsible for the registration of trust in India. Their role
                involves maintaining a comprehensive database of all registered
                trusts in the country. The registration process for private
                trusts is governed by the Trusts Act of 1882.
                <br />
                In the case of public trusts, no singular governing act applies
                uniformly. Public trusts in India must be registered with the
                relevant state authority as required by the applicable state
                act.
                <br />
                Several laws play a significant role in the regulation of trusts
                in India. These include:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Trusts Act of 1882:</strong>This act provides the
                      legal framework for registering and administrating private
                      trusts. It outlines the rights, responsibilities, and
                      procedures associated with registration for private trust.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Income Tax Act of 1961:</strong> The Income Tax
                      Act grants certain tax benefits and exemptions to
                      registered trusts. Donors can take advantage of tax
                      deductions under this act when making contributions to
                      registered trusts.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Societies Registration Act of 1860:</strong>{" "}
                      Although it does not directly govern registration of trust
                      establishment, this act regulates the trust formation and
                      functioning of societies involved in charitable, literary,
                      scientific, or artistic activities. Societies often work
                      alongside trusts and may engage in similar endeavors.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Reasons for Trust Registration</h3>
              <p>
                Obtaining charitable trust registration for the is necessary for
                the following reasons:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> It ensures proper
                      regulation of trust activities, ensuring compliance with
                      laws and regulations.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Trusts aim to promote
                      non-commercial activities in areas like arts, science,
                      education, and the environment, contributing to a better
                      society.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Registered trusts can
                      claim income tax benefits under sections 12A and 80G,
                      encouraging donations and support.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> It provides a license to
                      conduct trust-related businesses within the legal
                      framework.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Trusts contribute to the
                      development of sectors like education, healthcare, social
                      welfare, and the environment.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                By registering, trusts fulfill their objectives, gain legal
                recognition, and access government benefits and opportunities.
              </p>
              <h3>Benefits of Trust Registration</h3>
              <p>
                It offers several advantages to individuals and organizations.
                Here are the key benefits of charitable trust registration:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Charitable Involvement:</strong>Setting up a
                      Charitable Trust allows individuals to benefit themselves,
                      their beneficiaries, and their chosen charities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Tax Exemptions:</strong> Registered trusts in
                      India can access tax exemptions provided by the Income Tax
                      Department, benefiting from tax relaxations.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Financial Support:</strong> Registered trusts
                      provide essential financial assistance to the
                      underprivileged and the public through charitable
                      activities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Legal Protection:</strong> The Indian Trusts Act
                      of 1882 ensures comprehensive legal protection,
                      safeguarding the trust's legal standing from unnecessary
                      claims.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Family Wealth Protection:</strong> Trusts help
                      allocate specific assets, preserving and managing family
                      wealth that may be difficult to divide individually.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Probate Avoidance: </strong>It enables the
                      transfer of assets to heirs without probate, streamlining
                      the asset distribution process.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i>{" "}
                      <strong>Immigration/Emigration Benefits:</strong>{" "}
                      Establishing a trust can be advantageous when relocating,
                      mitigating taxation, safeguarding assets, and offering
                      flexibility in asset organization.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                By registering a trust, individuals can enjoy these benefits,
                including financial advantages, legal protection, and asset
                management flexibility.
              </p>
              <h3>Registration Requirements for the Trust </h3>
              <p>
                To be eligible to obtain a certificate of trust registration,
                the following criteria must be met:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> A trust must be formed
                      by at least two or more individuals.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trust must be
                      established in accordance with the provisions outlined in
                      the Indian Trusts Act of 1882.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> None of the parties
                      involved should be disqualified under any prevailing law
                      in India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The objectives of the
                      trust formation must not contravene any existing laws in
                      India.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trustee must conduct
                      their activities in a fair and just manner.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trust formation
                      should not be contrary to public interest or any other
                      applicable laws.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The activities carried
                      out by the trust must not cause harm to any individual.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trust activities
                      should align with the objectives stated in the trust deed.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trust deed must be
                      drafted appropriately, reflecting the genuine interests of
                      the parties involved in forming the trust.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trust has more than
                      two purposes, both purposes must be valid. If one goal is
                      reasonable and the other is invalid, the trust cannot be
                      formed.
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">Contents of a Trust Deed</h3>
              <p>
                A trust deed is a crucial document that outlines the key details
                and provisions of a trust. It encompasses the following clauses:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Period or term for which
                      the trust will remain in operation.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The registered office
                      address of the trust.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The geographical area or
                      region where the trust will carry out its activities.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The goals and objectives
                      that the trust aims to achieve.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Information about the
                      person establishing the trust (settlor) and details of the
                      assets or property being transferred to the trust.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Information about the
                      board of trustees, including their membership,
                      qualifications, terms, and tenure.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The roles,
                      responsibilities, and powers of the trustees.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Procedures for amending
                      the trust deed and provisions for the closure or
                      termination of the trust.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> The trust deed ensures
                      that the trust operates in accordance with the relevant
                      laws and regulations.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                The trust deed serves as a legally binding document that governs
                the operations and functioning of the trust, providing clarity
                and guidance to all parties involved.
              </p>
              <h3>Documents required for Trust Registration Online:</h3>
              <p>
                Ensure to have these documents before engaging on the procedure
                for registration of Trust:
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Trust Deed with the
                      respective stamp value.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Two photographs of the
                      parties involved in the trust.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> PAN cards of the
                      individuals associated with the trust.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Address proof of the
                      individuals.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Identity proof of the
                      individuals.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Authentication from the
                      partners (if applicable).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> No Objection Certificate
                      for using the premises (if applicable).
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Any form of a utility
                      bill as proof of address.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Address proof of the
                      trust registered office.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> 12A Registration and 80G
                      Certificates from the respective income tax authorities to
                      claim deductions (if applicable).
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-4">
                Process / Procedure for Registration of Trust
              </h3>
              <p>
                The procedure for registration of Trust and obtaining a trust
                registration certificate download is explained in detail below:
              </p>
              <h4>Name of the Trust</h4>
              <p>
                The parties forming the trust must choose an appropriate name
                that complies with the provisions of relevant acts such as
                Trademarks, Copyrights Act, Intellectual Property Rights Act,
                and Emblems and Names Act, 1950.
              </p>
              <h4>Settlers of the Trust</h4>
              <p>
                Determine the individuals who will act as settlers of the trust.
                While there is no restriction on the number of trustees, a
                minimum of two trustees is required. The author of the trust
                cannot be a trustee, and all trustees must be residents of
                India.
              </p>
              <h4>Prepare a Memorandum of Association for the Trust</h4>
              <p>
                Prepare a Memorandum of Association (MOA) that outlines the
                objectives and purpose for which the trust is being formed.
                Ensure that the goals stated in the MOA are legally permissible.
              </p>
              <h4>Draft the Trust Deed</h4>
              <p>
                Create a trust deed, which is a legally binding document that
                establishes the trust. The trust deed must be presented to the
                registrar when registering the trust. It should contain all the
                terms and conditions agreed upon by the author, trustees, and
                beneficiaries.
              </p>
              <h4>Submit the Deed to the Registrar</h4>
              <p>
                Once the trust deed is drafted, submit it to the registrar and
                other required documents. The author, trustees, and
                beneficiaries will be involved in this process.
              </p>
              <h4>Obtain Trust Registration Certificate</h4>
              <p>
                After reviewing the submitted documents, the trust will be
                registered if the registrar is satisfied with their validity and
                compliance. The registrar will issue a trust registration
                certificate, which the trustees and the trustor should keep.
                They can also proceed with the trust registration certificate
                download as per instructions. Once the trust is registered, a
                bank account can be opened in the trust’s name.
              </p>
              <h3>Winding up a trust</h3>
              <p>
                Winding up a trust occurs when all the trust’ properties/assets
                are distributed lawfully to the beneficiaries or a similar
                entity, directly or through resettlement. During the winding-up
                process, the parties involved must address any tax obligations
                resulting from the asset transfer. It is essential to comply
                with the approval of the charity commissioner, court, or other
                applicable laws to minimize the risk of legal disputes.
              </p>
              <h3>
                How can LegallensIndia help in securing Trust Registration?
              </h3>
              <p>
                At LegallensIndia, our team of experts is committed to providing
                you with the necessary support for charitable trust registration
                and ensuring compliance. It involves intricate legal
                implications that require careful attention. Our experts will
                resolve your questions regarding how to register a trust in
                India. Our professionals ensure that you gain a deeper
                understanding of the governing provisions of Trust in India,
                enabling you to undertake Trust-related activities with minimal
                legal hassles.
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
