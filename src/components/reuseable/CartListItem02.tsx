"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "./links/NextLink";
// CUSTOM UTILS LIBRARY FUNCTIONS
import currency from "utils/currency";
import { useCart } from "context/CartContext";

// =============================================================
interface CartListItemProps {
  id: string;
  title: string;
  image: string;
  size?: number;
  color?: string;
  quantity: number;
  salePrice: number;
  regularPrice: number;
}
// =============================================================

export default function CartListItem02(props: CartListItemProps) {
  const { id, title, image, size, color, salePrice, regularPrice } = props;
  const [quantity, setQuantity] = useState(props.quantity);
  const { removeItem } = useCart();
  // const { removeItem } = useShoppingCart();

  const total = +quantity * (salePrice || regularPrice);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to remove this item from the cart?')) {
      removeItem(id);
    }
  };

  // const removeItemFromCart = () => {
  //   removeItem(props.id);
  // };

  // const addToCart = () => {
  //   addItem(product, { count: quantity });
  //   setQuantity(1);
  // };

  return (
    <tr>
      <td className="option text-start d-flex flex-row align-items-center ps-0">
        <figure className="rounded w-15">
          <Link href="#">
            <Image width={50} height={60} src={image} alt="product" className="w-100 h-auto" />
          </Link>
        </figure>

        <div className="w-100 ms-4">
          <h3 className="post-title h6 lh-xs mb-1">
            <NextLink href="#" className="link-dark">{title}</NextLink>
          </h3>

          {color && <div className="small">{color}</div>}
          {/* {size && <div className="small">Size: {size}</div>} */}
        </div>
      </td>

      {/* <td>
        <p className="price">
          {salePrice ? (
            <Fragment>
              <del>
                <span className="amount">{currency(regularPrice)}</span>
              </del>{" "}
              <ins>
                <span className="amount">{currency(salePrice)}</span>
              </ins>
            </Fragment>
          ) : (
            <span className="amount">{currency(regularPrice)}</span>
          )}
        </p>
      </td> */}

      <td>
        <div className="form-select-wrapper">
          {/* <select className="form-select form-select-sm mx-auto" defaultValue={1}>
            {[1, 2, 3, 4, 5].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select> */}
          <div className="d-flex justify-content-around align-items-center">
          <button
            onClick={decreaseQuantity}
            className="btn btn-circle btn-outline-primary btn-sm" style={{ minWidth: '24px', maxWidth:'24px', minHeight: '24px', maxHeight:'24px' }}
          >
            -
          </button>
          <span className="text-center rounded-md mx-1" style={{ minWidth: '20px', maxWidth:'20px' }}>{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="btn btn-circle btn-outline-primary btn-sm" style={{ minWidth: '24px', maxWidth:'24px', minHeight: '24px', maxHeight:'24px' }}
          >
            +
          </button>
        </div>
        </div>
      </td>

      <td>
        <p className="price">
          <span className="amount" style={{ minWidth: '80px', maxWidth:'80px', display: 'inline-block'}}>{currency(total)}</span>
        </p>
      </td>

      <td className="pe-0">
        <button 
          onClick={handleDelete}
          className="btn btn-link link-dark p-0 border-0"
          style={{ textDecoration: 'none', cursor: 'pointer' }}
          title="Delete item"
        >
          <i className="uil uil-trash-alt" />
        </button>
      </td>
    </tr>
  );
}
