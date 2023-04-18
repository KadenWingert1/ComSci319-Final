import React from "react";

function Browse({
    ProductsCategory,
    isCardsVisible,
    cart,
    setCart,
    setCustomForm

}) {
    return(
  <div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10 products-section">
    {/* Loop Products */}
    {console.log("IS CARDS VISABLE: ", isCardsVisible)}
    { isCardsVisible &&
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
                      if (
                        index === ProductsCategory.length - 1 &&
                        newState[ProductsCategory.length - 1] == 0
                      ) {
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
    )
}
export default Browse;
