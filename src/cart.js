import React from "react";
import { Products } from "./Products";
import { useState, useEffect } from "react";

function Cart({
  isCartVisible,
  setIsCartVisible,
  cart,
  setCart,
  isCardsVisible,
  setIsCardsVisible,
  ProductsCategory,
  setProductsCategory,
  ShowCategories,
  setShowCategories,
  showFooter,
  setShowFooter,
}) {
  const [cartTotal, setCartTotal] = useState(0);
  const [confirmation, setConfirmation] = useState(null);
  const [viewMode, setViewMode] = useState("cart");

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      const product = ProductsCategory.find((p) => p.id === i + 1);
      if (product) {
        totalVal += product.price * cart[i];
      }
    }
    setCartTotal(totalVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    const confirmationData = {
      name: form.inputName.value,
      email: form.inputEmail4.value,
      address: form.inputAddress.value,
      address2: form.inputAddress2.value,
      city: form.inputCity.value,
      state: form.inputCity.value,
      zip: form.inputZip.value,
      cartItems: cart,
      cartTotal,
    };
    setConfirmation(confirmationData);
    setViewMode("confirmation");
    setShowCategories("confirmation");
  };

  function CustomOrderList() {
    const [customData, setCustomData] = useState(null);

    useEffect(() => {
      fetch("custom.json")
        .then((response) => response.json())
        .then((data) => {
          setCustomData(data);
        })
        .catch((error) => console.error(error));
    }, []);

    if (!customData) {
      return <div>Loading...</div>;
    }

    return (
      <div id="customOrderR2">
        {Object.keys(customData).map((key) => {
          const array = customData[key];
          return (
            <div key={key} className="row2 col1">
              <h1>{key}</h1>
              {array.map((item) => (
                <React.Fragment key={item}>
                  <input
                    type="radio"
                    id={item.toLowerCase().replace(" ", "")}
                    name={key}
                    value={item}
                    required
                  />
                  <label htmlFor={item.toLowerCase().replace(" ", "")}>
                    {item}
                  </label>
                  <br />
                </React.Fragment>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {isCartVisible && (
        <div className="cart-section">
          {viewMode === "cart" && (
            <div className="form-wrapper" id="form-wrapper">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <h1 className="viewCart">View Your Cart</h1>
                  <div className="cartItems">
                    {/* Loop Products */}
                    {ProductsCategory.filter(
                      (product) => cart[product.id - 1] >= 1
                    ).map((product, index) => (
                      <div
                        key={index}
                        className="group relative shadow-lg cart-item"
                      >
                        <div className="min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                          <img
                            alt="Product"
                            src={product.image}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                          />
                        </div>
                        <div className="flex justify-between p-3">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a href={product.href}>
                                <span
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                  }}
                                >
                                  {product.title}
                                </span>
                              </a>
                              <p className="text-sm font-medium text-green-600">
                                ${product.price}
                              </p>
                              Category: {product.category}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Rating:
                              {product.rating.rate}
                            </p>
                            <p>Cart: {cart[product.id - 1]}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>




                  <div class="formContainer">
                    <form action="" class="form">
                      <h1>Custom Orders</h1>
                      {CustomOrderList}
                      <br />
                      <div class="col-50">
                        <p>Size (in inches)</p>
                        <label for="name">Length</label>
                        <input type="text" id="length" name="size" required />
                        <label for="name">Width</label>
                        <input type="text" id="length" name="size" required />
                        <label for="name">Thickness</label>
                        <input
                          type="text"
                          id="thickness"
                          name="size"
                          required
                        />
                      </div>
                      <br />
                    </form>
                  </div>










                  <h1>Payment Information</h1>
                  <div id="liveAlertPlaceholder"></div>
                </div>
              </div>

              <form
                className="row g-3"
                id="checkout-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Must be like, "John Doe"
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Must be like, "abc@xyz.efg"
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="inputCard" className="form-label">
                    Card
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi-credit-card-fill"></i>
                    </span>
                    <input
                      type="text"
                      id="inputCard"
                      className="form-control"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Must be like, "7777-7777-7777-7777"
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    required
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    required
                  />
                </div>
                <div className="col-12"></div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => {
                      setShowFooter(false);
                    }}
                  >
                    <i className="bi-bag-check"></i> Order
                  </button>
                </div>
              </form>
            </div>
          )}
          {viewMode === "confirmation" && (
            <div className="confirmation-view">
              <h2>Order Confirmation</h2>
              <p>Thank you for your order, {confirmation.name}!</p>
              <hr />
              <h3>Shipping Address</h3>
              <p>{confirmation.address}</p>
              {confirmation.address2 && <p>{confirmation.address2}</p>}
              <p>
                {confirmation.city}, {confirmation.state} {confirmation.zip}
              </p>
              <hr />
              <h3>Order Summary</h3>
              <ul>
                {ProductsCategory.filter(
                  (product) => confirmation.cartItems[product.id - 1] >= 1
                ).map((product, index) => (
                  <li key={index}>
                    {product.title} x {confirmation.cartItems[product.id - 1]}
                    <span>
                      $
                      {(
                        product.price * confirmation.cartItems[product.id - 1]
                      ).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                Total: ${cartTotal.toFixed(2)}
              </p>
              <hr />
              <p>
                A confirmation email has been sent to{" "}
                <strong>{confirmation.email}</strong>.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => window.location.reload()}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
