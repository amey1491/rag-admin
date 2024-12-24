import React, { useState } from 'react';
import "./Datacontrols.css";
import ModalExample from "./GroupPopup";
import searchIcon from "../../public/searchIcon.svg";
import filterIcon from "../../public/filterIcon.svg";


const Datacontrols = () => {
  function handleClick() {
    console.log("handled clicked worked");
  }
  return (
    <div className="data-controls-container row align-items-center">
      <div className="col-md-8 d-flex align-items-center">
        <button className="border-btn">
          <img
            src={filterIcon}
            alt="addNew icon"
            className="img-fluid addNewIcon"
          />
          Filters
        </button>
        <div className="data-search">
            <form>
              <div className="form-group">
                <button className="data-search-btn">
                  <img
                    src={searchIcon}
                    alt="addNew icon"
                    className="img-fluid"
                  />
                </button>
                <input type="search" className="form-control" />
              </div>
            </form>
          </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex justify-content-end">
          {/* <button className="border-btn" onClick={handleClick}>
            <img
              src={addNewIcon}
              alt="addNew icon"
              className="img-fluid addNewIcon"
            />
            New Group
          </button> */}
          <ModalExample/>
        </div>
      </div>
    </div>
  );
};

export default Datacontrols;
