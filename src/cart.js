import React from "react";
import { Products } from "./Products";
import { useState, useEffect } from "react";

function Cart({
  isCartVisible,
  cart,
  ProductsCategory,
  setShowCategories,
  setShowFooter,
  showCustomForm,
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

  return (
    <div>
      {isCartVisible && (
        <div className="cart-section">
          {viewMode === "cart" && (
            <div className="form-wrapper" id="form-wrapper">
              <div className="row">
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
                  {showCustomForm && (
                  <div className="formContainer">
                    <form action="" className="form">
                      <h1 className="customOrders">Custom Orders</h1>

                      <div id="customOrderR2">
                        <div className="bladeStyle">
                          <h1 className = "radioh1">Blade Style</h1>
                          <input
                            type="radio"
                            id="dagger"
                            name="bladeStyle"
                            value="dagger"
                            
                          />
                          <label htmlFor="dagger">Dagger</label>
                          <br />

                          <input
                            type="radio"
                            id="sword"
                            name="bladeStyle"
                            value="sword"
                          />
                          <label htmlFor="sword">Sword</label>
                          <br />

                          <input
                            type="radio"
                            id="pocket"
                            name="bladeStyle"
                            value="pocket"
                          />
                          <label htmlFor="pocket">Pocket Knife</label>
                          <br />
                        </div>



                        <div className="steelType">
                          <h1 className = "radioh1" >Steel Type</h1>
                          <input
                            type="radio"
                            id="mono"
                            name="steel"
                            value="mono"
                            required
                          />
                          <label htmlFor="mono">Monosteel</label>
                          <br />

                          <input
                            type="radio"
                            id="mai"
                            name="steel"
                            value="mai"
                          />
                          <label htmlFor="mai">San Mai</label>
                          <br />

                          <input
                            type="radio"
                            id="damascus"
                            name="steel"
                            value="damascus"
                          />
                          <label htmlFor="damascus">Damascus</label>
                          <br />
                        </div>

                        <div className="handleMaterial">
                          <h1 className = "radioh1" >Handle Material</h1>
                          <input
                            type="radio"
                            id="burl"
                            name="handle"
                            value="burl"
                            required
                          />
                          <label htmlFor="burl">Stabilized Burl</label>
                          <br />

                          <input
                            type="radio"
                            id="micarta"
                            name="handle"
                            value="micarta"
                          />
                          <label htmlFor="micarta">Micarta</label>
                          <br />

                          <input
                            type="radio"
                            id="hybrid"
                            name="handle"
                            value="hybrid"
                          />
                          <label htmlFor="hybrid">Resin Hybrid</label>
                          <br />
                        </div>

                        <div className="sheath">
                          <h1 className = "radioh1">Sheath</h1>
                          <input
                            type="radio"
                            id="leather"
                            name="sheath"
                            value="leather"
                            required
                          />
                          <label htmlFor="leather">Leather</label>
                          <br />

                          <input
                            type="radio"
                            id="scabbard"
                            name="sheath"
                            value="scabbard"
                          />
                          <label htmlFor="scabbard">Sword Scabbard</label>
                          <br />

                          <input
                            type="radio"
                            id="kydex"
                            name="sheath"
                            value="kydex"
                          />
                          <label htmlFor="kydex">Kydex</label>
                          <br />
                        </div>
                      </div>

                      <br />
                      <p className="formCustomSize">
                        Blade Size (in inches)</p>
                      <div className="customDimensions">
                        <div>
                        <label htmlFor="length dimension">Length</label>
                        <input type="text" className = "dimension" id="length" name="length" required />
                        </div>
                        <div>
                        <label htmlFor="width dimension">Width</label>
                        <input type="text" className = "dimension" id="width" name="width" required />
                        </div>
                        <div>
                        <label htmlFor="thicknes dimension">Thickness</label>
                        <input type="text" className = "dimension" id="thickness" name="thickness" required/>
                        </div>
                      </div>
                      <br />
                    </form>
                  </div>
                  )}

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
