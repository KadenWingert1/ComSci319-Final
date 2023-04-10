//This isn't implemented and doesn't work correctly

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// import itemsData from './Products'; // import item data from a JSON file

// function BrowseView() {
//   const [cart, setCart] = useState({}); // global cart variable
//   const [search, setSearch] = useState(''); // search input state

//   // update cart item quantity
//   function updateCartItem(id, quantity) {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [id]: quantity,
//     }));
//   }

//   // handle search input change
//   function handleSearchChange(event) {
//     setSearch(event.target.value);
//   }

//   // filter items based on search input
//   const filteredItems = itemsData.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // render item card
//   function renderItemCard(item) {
//     const { id, title, price, img } = item;
//     const quantity = cart[id] || 0;

//     return (
//       <div key={id} className="item-card">
//         <img src={img} alt={title} />
//         <div className="item-details">
//           <h3>{title}</h3>
//           <p>${price}</p>
//         </div>
//         <div className="quantity-controls">
//           <button
//             className="quantity-btn"
//             onClick={()









// const TAX_RATE = 0.1;

// function CartView({ cartItems, onCartItemQuantityChange, onCheckout }) {
//   const [form, setForm] = useState({
//     fullName: '',
//     email: '',
//     cardNumber: '',
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     zip: '',
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleQuantityChange = (itemId, newQuantity) => {
//     onCartItemQuantityChange(itemId, newQuantity);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!form.fullName) {
//       errors.fullName = 'Full name is required';
//     }
//     if (!form.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//       errors.email = 'Invalid email address';
//     }
//     if (!form.cardNumber) {
//       errors.cardNumber = 'Credit card number is required';
//     } else if (!/^\d{16}$/.test(form.cardNumber)) {
//       errors.cardNumber = 'Invalid credit card number';
//     }
//     if (!form.address1) {
//       errors.address1 = 'Address is required';
//     }
//     if (!form.city) {
//       errors.city = 'City is required';
//     }
//     if (!form.state) {
//       errors.state = 'State is required';
//     }
//     if (!form.zip) {
//       errors.zip = 'Zip code is required';
//     } else if (!/^\d{5}$/.test(form.zip)) {
//       errors.zip = 'Invalid zip code';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleCheckout = () => {
//     if (validateForm()) {
//       onCheckout({
//         ...form,
//         totalPrice: calculateTotalPrice(),
//       });
//     }
//   };

//   const calculateTotalPrice = () => {
//     const subtotal = cartItems.reduce(
//       (total, { price, quantity }) => total + price * quantity,
//       0
//     );
//     const tax = subtotal * TAX_RATE;
//     return subtotal + tax;
//   };

//   return (
//     <div className="container mx-auto py-4">
//       <h1 className="text-xl font-bold mb-4">Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <table className="table-auto w-full mb-4">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Item</th>
//                 <th className="px-4 py-2">Quantity</th>
//                 <th className="px-4 py-2">Price</th>
//                 <th className="px-4 py-2">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map(({ id, name, price, quantity, image }) => (
//                 <tr key={id}>
//                   <td className="px-4 py-2">
//                     <img src={image} alt={name} className="w-16 h-16 mr-4" />
//                     {name}
//                   </td>
//                   <td className="px-4 py





// const ConfirmationView = ({ items, total, user, handleReset }) => {
//   // Redact the first 12 digits of the credit card number
//   const redactedCardNumber = user.creditCard.replace(/\d(?=\d{4})/g, "*");
  
//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-5">Confirmation</h1>
      
//       <div className="row mb-5">
//         <div className="col-md-8">
//           <h2>Purchased Items</h2>
//           <ul>
//             {items.map(item => (
//               <li key={item.id}>
//                 <img src={item.image} alt={item.name} style={{ width: '50px' }} />
//                 {item.name} ({item.quantity}) - ${item.price * item.quantity}
//               </li>
//             ))}
//           </ul>
          
//           <p>Total Purchase Amount: ${total}</p>
//         </div>
        
//         <div className="col-md-4">
//           <h2>User Information</h2>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           <p>Address: {user.address}</p>
//           <p>Credit Card: {redactedCardNumber}</p>
//         </div>
//       </div>
      
//       <button className="btn btn-primary" onClick={handleReset}>Return to Browse</button>
//     </div>
//   );
// };

// export default ConfirmationView;
