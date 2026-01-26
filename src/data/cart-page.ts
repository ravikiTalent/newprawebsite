const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Shop', url: '/shop' },
  { id: 3, title: 'Cart', url: '/cart' }
];

const tableHeading = [
  { id: 1, title: 'Product' },
  { id: 2, title: 'Price' },
  { id: 3, title: 'Quantity' },
  { id: 4, title: 'Total' }
];

const cartList = [
  {
    size: 43,
    quantity: 1,
    salePrice: 45,
    color: 'GST Software & Registration',
    regularPrice: 55,
    title: 'Proprietorship',
    image: '/img/photos/a3.jpg',
    id: '62f3bac114a90b9c05bce066'
  },
  {
    size: 43,
    quantity: 1,
    salePrice: 0,
    color: 'GST Filing & Registration - 6 Months',
    regularPrice: 55,
    title: 'Proprietorship',
    image: '/img/photos/a3.jpg',
    id: '62f3bad7afb837063e6e3de6'
  },
  {
    quantity: 1,
    salePrice: 0,
    color: 'GST Filing & Registration - 12 Months',
    regularPrice: 55,
    title: 'Proprietorship',
    image: '/img/photos/a3.jpg',
    id: '62f3bb3a8ee7c0fd2d072f52'
  }
];

const PartnershipList = [
  {
    size: 43,
    quantity: 1,
    salePrice: 45,
    color: 'Andaman and Nicobar Islands',
    regularPrice: 55,
    title: 'Partnership',
    image: '/img/photos/a3.jpg',
    id: '62f3bac114a90b9c05bce066'
  },
  {
    size: 43,
    quantity: 1,
    salePrice: 0,
    color: 'Arunachal Pradesh',
    regularPrice: 55,
    title: 'Partnership',
    image: '/img/photos/a3.jpg',
    id: '62f3bad7afb837063e6e3de6'
  }
];

const orderSummeryRow = [
  {
    name: 'Subtotal',
    value: { amount: 135.99, parentClass: 'pe-0 text-end', childClass: 'price' }
  },
  {
    name: 'Discount',
    value: { amount: 6.8, parentClass: 'pe-0 text-end', childClass: 'price text-red' }
  },
  {
    name: 'Shipping',
    value: { amount: 10, parentClass: 'pe-0 text-end', childClass: 'price' }
  },
  {
    name: 'Grand Total',
    value: { amount: 152.79, parentClass: 'pe-0 text-end', childClass: 'price text-dark fw-bold' }
  }
];

export { breadcrumb, tableHeading, cartList, PartnershipList, orderSummeryRow };
