import "./App.css";
import "./style.css";

import React, { useState } from "react";
//import { useEffect } from "react";
import { Products } from "./Products";
import { Categories } from "./Categories";
import Cart from "./cart";
import About from "./About";
import Credits from "./Credits";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Browse from "./browseProducts";


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
              {console.log("IS CART VIASABLE",isCartVisible)}
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
       { <Cart
          isCartVisible={isCartVisible}
          cart={cart}
          ProductsCategory={ProductsCategory}
          setShowCategories={setShowCategories}
          setShowFooter={setShowFooter}
          showCustomForm = {showCustomForm}
        />}
        {console.log("IS CART VISABLE: ", isCartVisible)}
        {(
          <Browse
            ProductsCategory = {ProductsCategory}
            isCardsVisible = {isCardsVisible}
            cart = {cart}
            setCart = {setCart}
            setCustomForm = {setCustomForm}
          />
        )}
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

        />
      }
    </div>
  );
}; //end App
