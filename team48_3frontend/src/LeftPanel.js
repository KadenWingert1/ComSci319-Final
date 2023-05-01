import React from "react";
import logo from "./images/logo.png";

function LeftPanel() {
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
              Nordland Bladeworks
            </h1>
            <p className="text-gray-700 text-white">
              by - <b>Kaden Wingert & Bryce Maloy</b>
            </p>
          </div>
        </div>
      }
    </>
  );
}

export default LeftPanel;
