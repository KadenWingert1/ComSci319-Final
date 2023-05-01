import "./App.css";
import "./style.css";
import './tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import { Products } from "./Products";
import Crud from "./crud";
import About from "./About";
import Credits from "./Credits";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import ShowAll from "./showAll";
import Add from "./add";
import Remove from "./remove";
import Update from "./update";

export const App = (confimation) => {
  console.log("Step 1: After reading file :");
  const [ProductsCategory, setProductsCategory] = useState(Products); //Json file conataing all the information about the products
  const [query, setQuery] = useState(""); //Used for the search bar
  const [cart, setCart] = useState(Array(ProductsCategory.length).fill(0)); //Creates an array with the number of categories all filled with 0
  const [isCartVisible, setIsCartVisible] = useState(false); //Items that have been added to your cart
  const [isCardsVisible, setIsCardsVisible] = useState(false); //Initial cards that appear on the screen
  const [showCategories, setShowCategories] = useState("false"); //Filter buttons on the side of the screen
  const [showCustomForm, setCustomForm] = useState(false);
  const [showFooter, setShowFooter] = useState(true); //Footer doesn't appear on confirmation
  const [showAbout, setShowAbout] = useState(false); //About page
  const [showCredits, setShowCredits] = useState(false); //Credits page
  const [isCrudVisable, setIsCrudVisable] = useState(true); //crud buttons
  const [showAllView, setShowAllView] = useState(false); //show all button
  const [showAddView, setShowAddView] = useState(false); //Add button
  const [showRemoveView, setShowRemoveView] = useState(false); //remove button
  const [showUpdateView, setShowUpdateView] = useState(false); //update button
  const [isCrudBackVisable, setCrudBackVisable] = useState(false); //crud back button

  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [oneProduct, setOneProduct] = useState([]);
  const [viewer2, setViewer2] = useState(false);

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
            showAbout={showAbout}
            setShowAbout={setShowAbout}
            isCrudVisable={isCrudVisable}
            setIsCrudVisable={setIsCrudVisable}
          />
        )}
        {showCredits && (
          <Credits
            setIsCartVisible={setIsCartVisible}
            setShowCredits={setShowCredits}
            isCrudVisable={isCrudVisable}
            setIsCrudVisable={setIsCrudVisable}
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
        {console.log("IS CART VISABLE: ", isCartVisible)}
        {
          <Crud
            isCrudVisable={isCrudVisable}
            setIsCrudVisable={setIsCrudVisable}
            setShowAllView={setShowAllView}
            showAddView={showAddView}
            setShowAddView={setShowAddView}
            showRemoveView={showRemoveView}
            setShowRemoveView={setShowRemoveView}
            showUpdateView={showUpdateView}
            setShowUpdateView={setShowUpdateView}
            isCrudBackVisable={isCrudBackVisable}
            setCrudBackVisable={setCrudBackVisable}
          />
        }
        {isCrudBackVisable && (
          <>
            <button
              key="crudBackButton"
              className="crudButtons"
              onClick={() => {
                setCrudBackVisable(false);
                setIsCrudVisable(true);
                setShowAllView(false);
                setShowAddView(false);
                setShowRemoveView(false);
                setShowUpdateView(false);
              }}
            >
              Back
            </button>
          </>
        )}
        {
          <ShowAll
            showAllView={showAllView}
            isCrudBackVisable={isCrudBackVisable}
            setCrudBackVisable={setCrudBackVisable}
            product={product}
            setProduct={setProduct}
            viewer1={viewer1}
            setViewer1={setViewer1}
            oneProduct={oneProduct}
            setOneProduct={setOneProduct}
            viewer2={viewer2}
            setViewer2={setViewer2}
          />
        }
        {
          <Add
            showAddView={showAddView}
            isCrudBackVisable={isCrudBackVisable}
          />
        }
        {
          <Remove
            showRemoveView={showRemoveView}
            isCrudBackVisable={isCrudBackVisable}
          />
        }
        {
          <Update
            showAllView={showAllView}
            setShowAllView={setShowAllView}
            showAddView={showAddView}
            setShowAddView={setShowAddView}
            showRemoveView={showRemoveView}
            setShowRemoveView={setShowRemoveView}
            showUpdateView={showUpdateView}
            setShowUpdateView={setShowUpdateView}
            isCrudVisable={isCrudVisable}
            setIsCrudVisable={setIsCrudVisable}
            isCrudBackVisable={isCrudBackVisable}
            setCrudBackVisable={setCrudBackVisable}
            product={product}
            setProduct={setProduct}
            viewer1={viewer1}
            setViewer1={setViewer1}
            oneProduct={oneProduct}
            setOneProduct={setOneProduct}
            viewer2={viewer2}
            setViewer2={setViewer2}
          />
        }
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-row" style={{ height: "56em", backgroundColor:"burlywood" }}>
      {console.log(
        "Step 2 : Return App :",
        Products.length,
        ProductsCategory.length
      )}
      {
        <LeftPanel
          showCategories={showCategories}
          query={query}
          setQuery={setQuery}
          ProductsCategory={ProductsCategory}
          setProductsCategory={setProductsCategory}
        />
      }
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
