import React from "react";
import logo from "./images/logo.png";
import { Products } from "./Products";

function LeftPanel({
  showCategories,
  query,
  setQuery,
  ProductsCategory,
  setProductsCategory,
}) {
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

  return (
    <>
      {
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
              <button
                key="All"
                className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                style={{
                  color: "black",
                  backgroundColor: "burlywood",
                  fontSize: "20px",
                }}
                onClick={() => {
                  setProductsCategory(Products);
                }}
              >
                View All
              </button>
}

            </div>
          </div>
        </div>
      }
    </>
  );
}

export default LeftPanel;
