import "./App.css";
import "./style.css";
import logo from "./images/logo.png";

import React, { useState } from "react";
//import { useEffect } from "react";
import { Products } from "./Products";
import { Categories } from "./Categories";
import Cart from "./cart";
import About from "./About";
import Credits from "./Credits";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import db from './db';


export const App = (confimation) => {
  console.log("Step 1: After reading file :");
  const [ProductsCategory, setProductsCategory] = useState(Products); //Json file conataing all the information about the products
  const [query, setQuery] = useState(""); //Used for the search bar
  const [cart, setCart] = useState(Array(ProductsCategory.length).fill(0)); //Creates an array with the number of categories all filled with 0
  const [isCartVisible, setIsCartVisible] = useState(false); //Items that have been added to your cart
  const [isCardsVisible, setIsCardsVisible] = useState(true); //Initial cards that appear on the screen
  const [showCategories, setShowCategories] = useState("true"); //Filter buttons on the side of the screen
  const [showCustomForm, setCustomForm] = useState(false);
  const [showFooter, setShowFooter] = useState(true); //Footer doesn't appear on confirmation
  const [showAbout, setShowAbout] = useState(false); //About page
  const [showCredits, setShowCredits] = useState(false); //Credits page

  const render_products = (ProductsCategory) => {
    return (
      <div
        id="browsePage"
        className="category-section"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {showAbout && (
          <About
            setIsCartVisible={setIsCartVisible}
            setIsCardsVisible={setIsCardsVisible}
            setShowCategories={setShowCategories}
            showAbout={showAbout}
            setShowAbout={setShowAbout}
          />
        )}
        {showCredits && (
          <Credits
            setIsCartVisible={setIsCartVisible}
            setIsCardsVisible={setIsCardsVisible}
            setShowCategories={setShowCategories}
            showCredits={setShowCredits}
            setShowCredits={setShowCredits}
          />
        )}
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
              <button className="checkoutButton">Checkout</button>
            )}
            {showCategories == "back" && (
              <button className="checkoutButton">Back</button>
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
          showFooter={showFooter}
          setShowFooter={setShowFooter}
          showCustomForm = {showCustomForm}
          setCustomForm = {setCustomForm}
        />
        <div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10 products-section">
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
                          if (index === ProductsCategory.length - 1) {
                            setCustomForm(true);
                          }
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
                            if (index === ProductsCategory.length - 1 && newState[ProductsCategory.length - 1] == 0) {
                              setCustomForm(false);
                            }
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

  return (
    <div className="flex min-h-screen flex-row" style={{ height: "56em" }}>
      {console.log(
        "Step 2 : Return App :",
        Products.length,
        ProductsCategory.length
      )}
        {(
          <LeftPanel
            setIsCartVisible={setIsCartVisible}
            setIsCardsVisible={setIsCardsVisible}
            setShowCategories={setShowCategories}
            showCredits={setShowCredits}
            setShowCredits={setShowCredits}
            showCategories={showCategories}
            query = {query}
            setQuery = {setQuery}
            ProductsCategory = {ProductsCategory}
            setProductsCategory = {setProductsCategory}

          />
        )}
      <div className="ml-5 p-10 xl:basis-4/5">
        {console.log(
          "Before render :",
          Products.length,
          ProductsCategory.length
        )}
        {render_products(ProductsCategory)}
      </div>
      {
        <Footer
          setIsCartVisible={setIsCartVisible}
          setIsCardsVisible={setIsCardsVisible}
          setShowCategories={setShowCategories}
          setShowAbout={setShowAbout}
          setShowCredits={setShowCredits}
          showFooter={showFooter}
          setShowFooter={setShowFooter}
          showCategories = {showCategories}

        />
      }
    </div>
  );
}; //end App
