import React from "react";

function Crud({
  isCrudVisable,
  setIsCrudVisable,
  setShowAllView,
  setShowAddView,
  setShowRemoveView,
  setShowUpdateView,
  setCrudBackVisable,
}) {
  return (
    <div>
      {isCrudVisable && (
        <div
          className="btn-group btn-group-lg d-flex"
          style = {{display: "flex", flexDirection:"column"}}
          role="group"
        >
          <button
            key="All"
            className="btn btn-primary btn-lg btn-block"
            style = {{borderBottomLeftRadius:"0px", borderTopLeftRadius:"0px", marginLeft:"-1px"}}
            onClick={() => {
              setShowAllView(true);
              setCrudBackVisable(true);
              setIsCrudVisable(false);
            }}
          >
            View All
          </button>

          <button
            key="Add"
            className="btn btn-primary btn-lg btn-block"
            onClick={() => {
              setShowAddView(true);
              setCrudBackVisable(true);
              setIsCrudVisable(false);
            }}
          >
            Add
          </button>

          <button
            key="Remove"
            className="btn btn-primary btn-lg btn-block"
            onClick={() => {
              setShowRemoveView(true);
              setCrudBackVisable(true);
              setIsCrudVisable(false);
            }}
          >
            Remove
          </button>

          <button
            key="Update"
            className="btn btn-primary btn-lg btn-block"
            style = {{borderTopRightRadius:"0px", borderBottomRightRadius:"0px" }}
            onClick={() => {
              setShowUpdateView(true);
              setCrudBackVisable(true);
              setIsCrudVisable(false);
            }}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default Crud;
