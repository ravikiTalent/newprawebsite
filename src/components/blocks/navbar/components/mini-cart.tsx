"use client";
import Link from "next/link";
import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS LIBRARY FUNCTIONS
import currency from "utils/currency";
// CART CONTEXT
import { useCart, CartItem } from "context/CartContext";

export default function MiniCart() {
  const { cartList, addItem, removeItem } = useCart();

  // Calculate subtotal
  const subtotal = cartList.reduce((total, item) => {
    const price = item.salePrice || item.regularPrice;
    return total + price * item.quantity;
  }, 0);

  // Handle quantity change
  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      salePrice: item.salePrice,
      regularPrice: item.regularPrice,
      quantity: newQuantity,
      color: item.color
    };

    addItem(cartItem);
  };

  // Handle remove item
  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
  };

  return (
    <div className="offcanvas offcanvas-end bg-light" id="offcanvas-cart" data-bs-scroll="true">
      <div className="offcanvas-header">
        <h3 className="mb-0">Your Cart</h3>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>

      <div className="offcanvas-body d-flex flex-column">
        {cartList.length === 0 ? (
          <div className="text-center py-8">
            <i className="uil uil-shopping-cart-alt fs-40 text-muted mb-4"></i>
            <h5 className="mb-2">Your cart is empty</h5>
            <p className="text-muted">Add items to get started!</p>
          </div>
        ) : (
          <>
            <div className="shopping-cart">
              {cartList.map((item) => (
                <div className="shopping-cart-item d-flex justify-content-between mb-4" key={item.id}>
                  <div className="d-flex flex-row">
                    <figure className="rounded w-17">
                      <Link href="/products/1">
                        <Image src={item.image} alt={item.title} width={90} height={100} className="w-100 h-auto" />
                      </Link>
                    </figure>

                    <div className="w-100 ms-4">
                      <h3 className="post-title fs-16 lh-xs mb-1">
                        <NextLink title={item.title} href="/products/1" className="link-dark" />
                      </h3>

                      <p className="price fs-sm">
                        {item.salePrice ? (
                          <>
                            <del>
                              <span className="amount">{currency(item.regularPrice)}</span>
                            </del>{" "}
                            <ins>
                              <span className="amount">{currency(item.salePrice)}</span>
                            </ins>
                          </>
                        ) : (
                          <span className="amount">{currency(item.regularPrice)}</span>
                        )}
                      </p>

                      <div className="form-select-wrapper">
                        <select
                          className="form-select form-select-sm"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="ms-2">
                    <a
                      href="#"
                      className="link-dark"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemoveItem(item.id);
                      }}
                    >
                      <i className="uil uil-trash-alt" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="offcanvas-footer flex-column text-center">
              <div className="d-flex w-100 justify-content-between mb-4">
                <span>Subtotal:</span>
                <span className="h6 mb-0">{currency(subtotal)}</span>
              </div>

              <Link href="/checkout" className="btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4">
                <i className="uil uil-credit-card fs-18" /> Checkout
              </Link>

              <p className="fs-14 mb-0">Free shipping on all orders over $50</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
