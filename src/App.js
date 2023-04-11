import "./App.css";
import "./style.css";
import logo from "./images/logo.png";

import React, { useState } from "react";
//import { useEffect } from "react";
import { Products } from "./Products";
import { Categories } from "./Categories";
import Cart from "./cart";
import About from "./About";

export const App = (confimation) => {
  console.log("Step 1: After reading file :");
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(Array(ProductsCategory.length).fill(0)); //Creates an array with the number of categories all filled with 0
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(true);
  const [showCategories, setShowCategories] = useState("true");
  const [showAbout, setShowAbout] = useState(false);
  

  const render_products = (ProductsCategory) => {
    return (
      <div
        id="browsePage"
        className="category-section"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
                <About
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
          cart={cart}
          setCart={setCart}
          isCardsVisible={isCardsVisible}
          setIsCardsVisible={setIsCardsVisible}
          ProductsCategory={ProductsCategory}
          setProductsCategory={setProductsCategory}
          showCategories={showCategories}
          setShowCategories={setShowCategories}
          showAbout = {showAbout}
          setShowAbout = {setShowAbout}
        />
        {console.log("Step 3 : in render_products ")}
        <div className="container">
          {showCategories == "true" && (
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
              Products ({ProductsCategory.length})
            </h2>
          )}
          <div
            onClick={() => {
              setIsCartVisible(!isCartVisible);
              setIsCardsVisible(!isCardsVisible);
              if (showCategories == "back" || showCategories == "true") {
                //When you click the back arrow, it takes you back to a "fresh" screen showing all the products
                setProductsCategory(Products);
              }
              isCardsVisible
                ? setShowCategories("back")
                : setShowCategories("true"); //Hides the buttons with the product category when you aren't on the browse page
            }}
          >
            {showCategories == "true" && (
              <img
                alt="Checkout"
                src={require("./images/checkout.png")}
                className="checkout"
              />
            )}
            {showCategories == "back" && (
              <img
                alt="Back"
                src={require("./images/back.png")}
                className="back"
              />
            )}
            {showCategories == "confirmation" && ""}
          </div>
        </div>
        <Cart
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
          cart={cart}
          setCart={setCart}
          isCardsVisible={isCardsVisible}
          setIsCardsVisible={setIsCardsVisible}
          ProductsCategory={ProductsCategory}
          setProductsCategory={setProductsCategory}
          showCategories={showCategories}
          setShowCategories={setShowCategories}
        />
        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10 products-section"
        >
          {/* Loop Products */}
          {isCardsVisible &&
            ProductsCategory.map((product, index) => (
              <div key={index} className="group relative shadow-lg">
                <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                  <img
                    style={{ height: "100%" }}
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
                    <div className="addsubContainer">
                      <button
                        className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2 addsub"
                        onClick={() => {
                          const newState = [...cart];
                          newState[product.id - 1] += 1;
                          setCart(newState);
                          console.log("ADD BUTTON:" + cart);
                        }}
                      >
                        Add
                      </button>
                      <button
                        className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2 addsub"
                        onClick={() => {
                          const newState = [...cart];
                          if (newState[product.id - 1] > 0) {
                            newState[product.id - 1] -= 1;
                            setCart(newState);
                            console.log("SUB BUTTON:" + cart);
                          }
                        }}
                      >
                        Remove
                      </button>
                    </div>
                    <p>Cart: {cart[product.id - 1]}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    const filtered = Products.filter((product) => {
      return product.category === tag;
    });
    console.log("filtered products:", filtered);
    setProductsCategory(filtered);
    console.log("Step 5 : ", ProductsCategory.length);
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    const filtered = Products.filter((product) => {
      if (e.target.value === "") return true;
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProductsCategory(filtered);
  };

  //Causes the footer to appear when you scoll up, and disappear otherwise
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let footer = document.querySelector(".footer");
    if (footer) {
      if (prevScrollPos > currentScrollPos) {
        // User is scrolling up, show hidden footer
        footer.classList.remove("hidden");
      } else {
        // User is scrolling down, hide footer
        footer.classList.add("hidden");
      }
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <div className="flex min-h-screen flex-row" style={{ height: "56em" }}>
      {console.log(
        "Step 2 : Return App :",
        Products.length,
        ProductsCategory.length
      )}
      <div
        className="h-screen bg-slate-800 p-3 xl:basis-1/5"
        style={{ height: "100%" }}
      >
        <img className="w-full" src={logo} alt="Nordland Forge" />
        <div className="px-6 py-4">
          <h1 className="text-3xl mb-2 font-bold text-white">
            {" "}
            Browse Products
          </h1>
          <p className="text-gray-700 text-white">
            by - <b>Kaden Wingert & Bryce Maloy</b>
          </p>
          <div className="py-10">
            {showCategories == "true" && (
              <input
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                style={{ backgroundColor: "white" }}
              />
            )}
          </div>

          <div className="py-10">
            {showCategories == "true" && (
              <p
                className="text-white"
                style={{
                  color: "rgb(220, 221, 255)",
                  fontWeight: "700",
                }}
              >
                Filter By Category:{" "}
              </p>
            )}
            {showCategories == "true" &&
              Categories.map((tag) => (
                <button
                  key={tag}
                  className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                  style={{
                    color: "black",
                    backgroundColor: "burlywood",
                    fontSize: "20px",
                  }}
                  onClick={() => {
                    handleClick(tag);
                  }}
                >
                  {tag}
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="ml-5 p-10 xl:basis-4/5">
        {console.log(
          "Before render :",
          Products.length,
          ProductsCategory.length
        )}
        {render_products(ProductsCategory)}
      </div>

      <footer className="footer">
        <div className="foot">
          <div className="flex-container">
            <div className="home link">
              <a href="#top">Back to top</a>
            </div>
            <div className="about link">
              <a href="about.html" onClick={(event) => {
                event.preventDefault(); 
                setShowAbout(true);
                setIsCardsVisible(false);
                setShowCategories(false);
                }}>About Us</a>
            </div>
            <div className="credits link">
              <a href="credits.html">Credits</a>
            </div>
            <div className="email link">
              <a href="mailto:carvergfit@gmail.com">
                <img
                  src={require("./images/emailBlackAndWhite.png")}
                  alt="Email"
                  width="40em"
                />
              </a>
            </div>
            <div className="insta link">
              <a href="https://www.instagram.com/nordland_forge/">
                <img
                  src={require("./images/instagram.jfif")}
                  alt="Instagram Logo"
                  width="40em"
                />
              </a>
            </div>
            <div className="tiktok link">
              <a href="https://www.tiktok.com/@nordlandforge?_t=8a7j7ED2n4o&_r=1">
                <img
                  src={require("./images/tiktok.png")}
                  alt="TikTok"
                  width="40em"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; //end App
