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
      {isCrudVisable == true && (
        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group">
            <button
              key="All"
              className="btn btn-primary btn-lg"
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
              className="btn btn-primary btn-lg"
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
              className="btn btn-primary btn-lg"
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
              className="btn btn-primary btn-lg"
              onClick={() => {
                setShowUpdateView(true);
                setCrudBackVisable(true);
                setIsCrudVisable(false);
              }}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Crud;
