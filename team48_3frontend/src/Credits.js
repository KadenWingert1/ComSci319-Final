import React from "react";

function Credits({
  setIsCartVisible,
  setShowCredits,
  isCrudVisable,
  setIsCrudVisable
}) {

  setIsCrudVisable(false);
  return (
    <div>
      {(
        <main role="main">
          <div className="creditsContainer">
            <div className="creditsContent">
              <h1 className="creators">Creators</h1>
              <h2 className="creators2">
                This website was created as Assignment 3 using react for the front end, and mongodb for the backend. It consists of a catalog of clothes from a fakestore. This website was developed as a project for Computer
                Science 319 by:
              </h2>
              <br />
              <h3 className="creators3">
                Kaden Wingert (
                <a href="mailto:kadenwin@iastate.edu">kadenwin@iastate.edu</a>){" "}
                <br />
                <br />
                Bryce Maloy (
                <a href="mailto:bsmaloy@iastate.edu">
                  bsmaloy@iastate.edu
                </a>{" "})
                4/17/2023
                <br/>
                <br/>
                Professor: Dr. Abraham N. Aldaco Gastelum (
                <a href="aaldaco@IASTATE.EDU">
                aaldaco@IASTATE.EDU
                </a>)
              </h3>
            </div>
            <button
              className="creditsBack"
              onClick={(event) => {
                setShowCredits(false);
                setIsCartVisible(false);
                setIsCrudVisable(true);
              }}
            >
              Back
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default Credits;
