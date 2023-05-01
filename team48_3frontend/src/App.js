import "./App.css";
import "./style.css";
import './tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import Crud from "./crud";
import About from "./About";
import Credits from "./Credits";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import ShowAll from "./showAll";
import Add from "./add";
import Remove from "./remove";
import Update from "./update";

export const App = () => {

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

  const render_products = () => {
    return (
      <>
        {showAbout && (
          <About
            showAbout={showAbout}
            setShowAbout={setShowAbout}
            setIsCrudVisable={setIsCrudVisable}
          />
        )}
        {showCredits && (
          <Credits
            setShowCredits={setShowCredits}
            setIsCrudVisable={setIsCrudVisable}
          />
        )}
       
        {
          <Crud
            isCrudVisable={isCrudVisable}
            setIsCrudVisable={setIsCrudVisable}
            setShowAllView={setShowAllView}
            setShowAddView={setShowAddView}
            setShowRemoveView={setShowRemoveView}
            setShowUpdateView={setShowUpdateView}
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
          showUpdateView = {showUpdateView}
          isCrudBackVisable = {isCrudBackVisable}
          oneProduct = {oneProduct}
          setOneProduct = {setOneProduct}
          viewer2 = {viewer2}
          setViewer2 = {setViewer2}
          />
        }
      </>
    );
  };

  return (
    <div className="flex min-h-screen flex-row" style={{ height: "56em", backgroundColor:"burlywood" }}>
      {
        <LeftPanel/>
      }
      <div className="ml-5 p-10 xl:basis-4/5">
        {render_products()}
      </div>
      {
        <Footer
          setShowAbout={setShowAbout}
          setShowCredits={setShowCredits}
          showFooter={showFooter}
          setShowFooter={setShowFooter}
        />
      }
    </div>
  );
}; //end App
