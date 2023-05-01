import React, { useEffect, useState } from "react";
function ShowAll({
  showAllView,
  isCrudBackVisable,
  product,
  setProduct,
  viewer1,
  setViewer1,
  oneProduct,
  setOneProduct,
  viewer2,
  setViewer2,
}) {
  const [shouldRefetch, setShouldRefetch] = useState(false);

  useEffect(() => {
    if (shouldRefetch) {
      getAllProducts();
      setShouldRefetch(false);
    }
  }, [shouldRefetch]);

  function getAllProducts() {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
        setViewer1(true); // Show the component after data is fetched
      });
  }


  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:4000/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneProduct(dataArr);
          setViewer2(true); // Show the component after data is fetched
        });
    } else {
      console.log("Wrong number of Product id.");
    }
  }
  const showAllItems = product.map((el) => (
    <div key={el._id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <img src={el.image} width={150} className="img-fluid img-thumbnail"/> <br />
      <span className="fw-bold">Title:</span> {el.title} <br />
      <span className="fw-bold">Category:</span> {el.category} <br />
      <span className="fw-bold">Price:</span> ${el.price} <br />
      <span className="fw-bold">Rate:</span> {el.rating.rate} and <span className="fw-bold">Count:</span> {el.rating.count} <br />
    </div>
  ));
  
  const showOneItem = oneProduct.map((el) => (
    <div key={el._id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <img src={el.image} width={150} className="img-fluid img-thumbnail" /> <br />
      <span className="fw-bold">Title:</span> {el.title} <br />
      <span className="fw-bold">Category:</span> {el.category} <br />
      <span className="fw-bold">Price:</span> ${el.price} <br />
      <span className="fw-bold">Rate:</span> {el.rating.rate} and <span className="fw-bold">Count:</span> {el.rating.count} <br />
    </div>
  ));
  return (
    <>
{isCrudBackVisable && showAllView && (
  <div className="viewAllProducts crud container-fluid p-5" style={{ backgroundColor: "burlywood" }}>
    <h1 className="catalogOfProducts mb-5">Catalog of Products</h1>
    <div className="row justify-content-between align-items-center mb-5">
      <h2 className="showAllavailable">Show All Available Products:</h2>
      <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-sm btn-primary" onClick={() => getAllProducts()}>Show All</button>
  <button type="button" className="btn btn-sm btn-danger" onClick={() => setViewer1(false)}>Hide</button>
</div>

    </div>
    <hr />
    {viewer1 && <div className="row products">{showAllItems}</div>}
    <hr />
    <div className="oneProductContainer">
      <h2 className="oneProduct">Show One Product by ID:</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          id="productId"
          className="form-control"
          placeholder="Product ID"
          aria-label="Product ID"
          aria-describedby="button-addon2"
          onChange={(e) => getOneProduct(e.target.value)}
        />
        <button
          className="btn btn-sm btn-primary"
          type="button"
          id="button-addon2"
          onClick={() => getOneProduct(document.getElementById("productId").value)}
        >
          Show
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => setViewer2(false)}>Hide</button>
      </div>
      {viewer2 && <div className="row products">{showOneItem}</div>}
    </div>
    <hr />
  </div>
)}
    </>
  );
}
export default ShowAll;
