import React, { useState } from "react";

function Remove({
  showRemoveView,
  isCrudBackVisable,
}) {
  const [productId, setProductId] = useState("");

  const handleRemoveProduct = () => {
    fetch(`http://localhost:4000/remove/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert(`Product ${productId} removed`);
      })
      .catch((error) => {
        error.json().then((errorMessage) => {
          alert(errorMessage.message);
        });
      });
  };
  

  return (
    <>
      {isCrudBackVisable && showRemoveView && (
        <>
        <div className="removeProductSection">
          <div>
            <h3 className="removeProductTitle">Remove a product:</h3>
            <input
            className="removeProductInput"
            type="text"
            placeholder="Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
            <button className="removeProductButton" onClick={handleRemoveProduct}>
            Remove Product
          </button>
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default Remove;
