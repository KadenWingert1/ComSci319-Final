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
}) {
  const [cartTotal, setCartTotal] = useState(0);
  const [confirmation, setConfirmation] = useState(null);
  const [viewMode, setViewMode] = useState("cart"); // Add this line

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

  const resetApp = () => {

    console.log("PRODUCT CATEGORY: ", Products.length);
    const arrayLength = Products.length;
    const zeros = [];
    for (let i = 0; i < arrayLength; i++) {
      zeros.push(0);
    }
    setCart(zeros);

    setIsCartVisible(!isCartVisible);
    setIsCardsVisible(!isCardsVisible);
    setViewMode("cart"); // Set viewMode to the original state
  };

  return (
    <div>
      {isCartVisible && (
        <div className="cart-section">
          {viewMode === "cart" && (
            <div class="form-wrapper" id="form-wrapper">
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
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>
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
                  <h1>Payment Information</h1>
                  <div id="liveAlertPlaceholder"></div>
                  
                </div>
              </div>

              <form
                class="row g-3"
                id="checkout-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div class="col-md-6">
                  <label for="inputName" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Must be like, "John Doe"</div>
                </div>

                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Must be like, "abc@xyz.efg"
                  </div>
                </div>

                <div class="col-12">
                  <label for="inputCard" class="form-label">
                    Card
                  </label>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="bi-credit-card-fill"></i>
                    </span>
                    <input
                      type="text"
                      id="inputCard"
                      class="form-control"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Must be like, "7777-7777-7777-7777"
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    required
                  />
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                    required
                  />
                </div>
                <div class="col-12"></div>

                <div class="col-12">
                  <button type="submit" class="btn btn-success">
                    {" "}
                    <i class="bi-bag-check"></i> Order
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
              <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>Total: ${cartTotal.toFixed(2)}</p>
              <hr />
              <p>
                A confirmation email has been sent to{" "}
                <strong>{confirmation.email}</strong>.
              </p>
              <button className="btn btn-primary" onClick={() => window.location.reload()}>
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
