"use client";
import { Fragment, useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "components/reuseable/Breadcrumb";
import { Pricing1 } from "components/blocks/pricing";
import RegisterForm02 from "components/elements/forms/RegisterForm02";
import CartListItem02 from "components/reuseable/CartListItem02";
import LoginModal from "components/common/LoginModal";
import { useCart } from "context/CartContext";
import { useAuth } from "context/AuthContext";

// CUSTOM DATA
const proprietorshipProducts = [
  {
    id: '62f3bac114a90b9c05bce066',
    title: 'Proprietorship',
    image: '/img/photos/a3.jpg',
    size: 43,
    quantity: 1,
    salePrice: 45,
    color: 'GST Software & Registration',
    regularPrice: 55,
  },
  {
    id: '62f3bad7afb837063e6e3de6',
    title: 'Proprietorship',
    image: '/img/photos/a3.jpg',
    size: 43,
    quantity: 1,
    salePrice: 0,
    color: 'GST Filing & Registration - 6 Months',
    regularPrice: 55,
  },
  {
    id: '62f3bb3a8ee7c0fd2d072f52',
    title: 'Proprietorship',
    image: '/img/photos/a3.jpg',
    quantity: 1,
    salePrice: 0,
    color: 'GST Filing & Registration - 12 Months',
    regularPrice: 55,
  }
];

export default function Proprietorship() {
  const { cartList, addItem } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('62f3bac114a90b9c05bce066');

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    const product = proprietorshipProducts.find(p => p.id === selectedProduct);
    if (product) {
      addItem(product);
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className="wrapper text-white image-wrapper bg-image bg-overlay" style={{ backgroundImage: "url(/img/photos/bg1.jpg)" }}>
        <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
              <h1 className="display-1 text-white mb-3">Proprietorship Registration</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                A company turning ideas into beautiful things.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light angled upper-end lower-end">
        <div className="container py-14 py-md-8">
          <div className="row"><Breadcrumb
            data={[{ id: 1, title: 'Home', url: '#' }, { id: 2, title: 'Business Registration', url: 'StartUp' }, { id: 3, title: 'Proprietorship', url: '' }]}
          /></div>
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
                          <h5 className="card-title">Proprietorship</h5>
                          <p>Assistance for GST registration with 1 year LEDGERS Accounting software license for Invoicing, GST E-invoicing and GST filing through LEDGERS.</p>
                          <div className="form-select-wrapper mb-4">
                            <select 
                              id="GSTSelction" 
                              className="form-select" 
                              aria-label="Default select example"
                              value={selectedProduct}
                              onChange={handleServiceChange}
                            >
                              <option value="62f3bac114a90b9c05bce066">GST Software & Registration</option>
                              <option value="62f3bad7afb837063e6e3de6">GST Filing & Registration - 6 Months</option>
                              <option value="62f3bb3a8ee7c0fd2d072f52">GST Filing & Registration - 12 Months</option>
                            </select>
                          </div>
                          <Pricing1 roundShape />
                          <button 
                            onClick={handleAddToCart}
                            className="btn btn-primary rounded mt-3"
                          >
                            ADD
                          </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 position-relative">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  {isAuthenticated ? (
                    <div className="mb-3 p-3 bg-light rounded">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <small className="text-muted">Logged in as</small>
                          <h6 className="mb-0">{user?.name}</h6>
                          <small className="text-muted">{user?.email}</small>
                        </div>
                        <button 
                          onClick={logout}
                          className="btn btn-sm btn-outline-danger"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-3 p-3 bg-light rounded text-center">
                      <p className="mb-2">Please login to add items to cart</p>
                      <button 
                        onClick={() => setShowLoginModal(true)}
                        className="btn btn-primary btn-sm"
                      >
                        Login / Register
                      </button>
                    </div>
                  )}
                  
                  <div className="py-4">
                    <table className="table text-center shopping-cart">
                      <tbody>
                        {cartList.map((item) => (
                          <CartListItem02 
                            key={item.id} 
                            {...item}
                          />
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

              <h2 className="display-4 mb-3">Proprietorship Registration</h2>

              <h3>
                Sole Proprietorship: A Simple and Popular Business Structure in
                India
              </h3>

              <p>
                A sole proprietorship is one of the oldest and simplest forms of
                business in India. It is owned, managed, and controlled by a
                single individual — the proprietor. Since there is no legal
                distinction between the proprietor and the business, setting up
                a sole proprietorship is quick and involves minimal compliance.
              </p>

              <p>
                Because the business and the proprietor are legally the same
                entity, a proprietorship cannot have partners or shareholders.
                Additionally, the proprietor bears full personal liability for
                any business obligations. As such, this structure is best suited
                for small businesses with up to 5 employees.
              </p>
              <h3>
                Register Your Sole Proprietorship Online with LegallensIndia
              </h3>
              <p>
                LegallensIndia makes it easy to register your proprietorship firm
                online. Our expert team ensures a smooth and efficient
                registration process, helping solo entrepreneurs bring their
                business ideas to life. Get started with your sole
                proprietorship registration today and take the first step toward
                growing your business.
              </p>
              <h3>Sole Proprietorship Registration in India</h3>
              <p>
                In India, sole proprietorship registration follows a unique
                process, as there is no specific government-issued registration
                exclusively for this business type. Instead, a sole
                proprietorship is recognized through various tax registrations
                required under Indian laws. One of the key registrations is GST
                (Goods and Services Tax), which must be obtained in the
                proprietor’s name. This serves as official proof that the
                individual is operating as a sole proprietorship.
              </p>

              <p>
                At LegallensIndia, we make the process of registering your
                proprietorship firm online simple and hassle-free. With our
                expert support, you can quickly formalize your business and
                start operating with confidence.
              </p>
              <h3>Essential Licenses and Registrations for Proprietorships</h3>
              <p>
                To register proprietorship firm online and run in India, you
                need important licenses and registrations, including:
              </p>

              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-12">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li className="">
                      <i className="uil uil-check"></i> Get a Permanent Account
                      Number (PAN) and an Aadhaar card for your business
                      identification.
                    </li>
                    <li className="mt-3">
                      <i className="uil uil-check"></i> Register under UDYAM,
                      which recognizes your business as a Micro, Small, or
                      Medium Enterprise (MSME) and offers government benefits.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> If your business exceeds
                      specific thresholds, you must register for Goods and
                      Services Tax (GST) to collect and pay GST.
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Open a separate bank
                      account for your business to manage finances smoothly.{" "}
                    </li>
                    <li className="">
                      <i className="uil uil-check"></i> Depending on your
                      business location, register under your state's Shops and
                      Establishment Act to follow local labor regulations.
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

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </Fragment>
  );
}
