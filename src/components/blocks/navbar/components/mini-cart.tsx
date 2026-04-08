"use client";
import Link from "next/link";
import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS LIBRARY FUNCTIONS
import currency from "utils/currency";
// CART CONTEXT


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




        return null;
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
