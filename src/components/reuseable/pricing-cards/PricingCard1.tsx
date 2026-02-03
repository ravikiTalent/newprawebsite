"use client";
import clsx from "clsx";
import Price from "./Price";
import NextLink from "../links/NextLink";
import { useCart } from "context/CartContext";
import { useAuth } from "context/AuthContext";

// ================================================================
interface PricingCard1Props {
  planName: string;
  features: string[];
  bulletBg?: boolean;
  yearlyPrice: number;
  monthlyPrice: number;
  activeYearly: boolean;
  roundedButton?: boolean;
  productId?: string;
  productImage?: string;
  productTitle?: string;
  onAdd?: () => void;
}
// ================================================================

export default function PricingCard1(props: PricingCard1Props) {
  const { planName, features, yearlyPrice, monthlyPrice, activeYearly, roundedButton, bulletBg, productId, productImage, productTitle, onAdd } = props;
  const { addItem } = useCart();
  const { user } = useAuth();

  const yearClasses = activeYearly ? "price-show" : "price-hide price-hidden";
  const monthClasses = !activeYearly ? "price-show" : "price-hide price-hidden";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to add items to cart");
      return;
    }
    if (onAdd) {
      onAdd();
      return;
    }
    // Default add to cart logic
    const cartItem = {
      id: productId || `product-${planName}-${Date.now()}`,
      title: productTitle || planName,
      image: productImage || "/img/photos/a3.jpg",
      salePrice: activeYearly ? yearlyPrice : monthlyPrice,
      regularPrice: activeYearly ? yearlyPrice : monthlyPrice,
      quantity: 1,
      color: planName
    };
    addItem(cartItem);
  };

  return (
    <div className="pricing card shadow-lg h-100">
      <div className="card-body p-5">
        {/* <div className="prices text-dark">
          <Price duration="mo" value={monthlyPrice} classes={monthClasses} />
          <Price duration="yr" value={yearlyPrice} classes={yearClasses} />
        </div> */}

        <h4 className="card-title mt-2">{planName}</h4>

        <ul className={clsx({ "icon-list bullet-soft-primary mt-7 mb-8": true, "bullet-bg": bulletBg })}>
          {features.map((item, i) => (
            <li key={i}>
              <i className="uil uil-check fs-21" />
              <span>
                <strong>{item.split(" ")[0]}</strong> {item.split(" ").slice(1).join(" ")}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleAddToCart}
          className={`btn btn-primary ${roundedButton ? "rounded" : "rounded-pill"} w-100`}
          disabled={!user}
          title={!user ? "Login required to add to cart" : "Add to cart"}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
