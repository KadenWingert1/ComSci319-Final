import React, { useState, useEffect } from "react";

function Add({ showAddView, isCrudBackVisable }) {
  const categoryImages = {
    "Pocket Knives": [
      require("./images/fanghornPocketKnife.png"),
      require("./images/hunterPocketKnife.png"),
      require("./images/wispPocketKnife.png"),
      require("./images/bowiePocketKnife.png"),
      require("./images/omenPocketKnife.png"),
    ],
    Daggers: [require("./images/tolkienDagger.png"), require("./images/kunaiDagger.png")],
    Swords: [require("./images/heleldrSword.png"), require("./images/seaxSword.png"), require("./images/katanaSword.png")],
    Resin: [
      require("./images/mapleLeafResin.png"),
      require("./images/redwoodResin.png"),
      require("./images/oceanResin.png"),
      require("./images/buckeyeResin.png"),
    ],
    Jewelry: [require("./images/mjolnirJewelry.png"), require("./images/pendantJewelry.png") ],
    Custom: [require("./images/custom.png")],
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [addNewProduct, setAddNewProduct] = useState({
    _id: null,
    title: "",
    price: null,
    description: "",
    category: "",
    image: "",
    rating: { rate: null, count: null },
  });

  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "_id") {
      setAddNewProduct({ ...addNewProduct, _id: parseInt(Math.max(0, value)) });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: Math.max(0, value) });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      const temp = value;
      setAddNewProduct({ ...addNewProduct, image: temp });
    } else if (evt.target.name === "rate") {
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: Math.max(0, value) },
      });
    } else if (evt.target.name === "count") {
      const temp = addNewProduct.rating.rate;
      setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: Math.max(0, value) },
      });
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://localhost:4000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          alert(errorMessage.message);
        });
      });
  }

  return (
    <>
      {isCrudBackVisable && showAddView && (
        <div className="form">
          <h3 className="motto">Add a new product :</h3>
          <form>
  <div className="form-group">
    <label>ID</label>
    <input type="number" placeholder="id?" name="_id" value={addNewProduct._id} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Title</label>
    <input type="text" placeholder="title?" name="title" value={addNewProduct.title} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Price</label>
    <input type="number" placeholder="price?" name="price" value={addNewProduct.price} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Description</label>
    <input type="text" placeholder="description?" name="description" value={addNewProduct.description} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Category</label>
    <select name="category" id="category" onChange={handleCategoryChange} className="form-control">
      <option value="">--Select Category--</option>
      <option value="Pocket Knives">Pocket Knives</option>
      <option value="Daggers">Daggers</option>
      <option value="Swords">Swords</option>
      <option value="Resin">Resin</option>
      <option value="Jewelry">Jewelry</option>
      <option value="Custom">Custom</option>
    </select>
  </div>
  <div className="form-group">
    <label>Image</label>
    <select name="image" required onChange={handleChange} className="form-control">
      <option value="">Select an image</option>
      {selectedCategory && categoryImages[selectedCategory].map((image) => (
        <option key={image} value={image}>{image}</option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>Rating</label>
    <input type="number" placeholder="rate?" name="rate" value={addNewProduct.rating.rate} onChange={handleChange} className="form-control" />
  </div>
  <div className="form-group">
    <label>Count</label>
    <input type="number" placeholder="count?" name="count" value={addNewProduct.rating.count} onChange={handleChange} className="form-control" />
  </div>
  <button type="submit" onClick={handleOnSubmit} className="removeProductButton">submit</button>
</form>
        </div>
      )}
    </>
  );
}

export default Add;
