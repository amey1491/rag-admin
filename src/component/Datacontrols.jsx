import React from "react";
import "./Datacontrols.css";
import addNewIcon from "../../public/addNewIcon.svg";
import searchIcon from "../../public/searchIcon.svg";
import filterIcon from "../../public/filterIcon.svg";

const Datacontrols = () => {
  function handleClick(){
   console.log("handled clicked worked") ;
  }
  return (
    <div className="data-controls-container d-flex justify-content-between">
      <div>
        <button className="border-btn">
          <img
            src={filterIcon}
            alt="addNew icon"
            className="img-fluid addNewIcon"
          />
          Filters
        </button>
      </div>
      <div className="d-flex justify-content-between">
        <button className="border-btn" onClick={handleClick}>
          <img
            src={addNewIcon}
            alt="addNew icon"
            className="img-fluid addNewIcon"
          />
          Add New
        </button>
        <div className="data-search">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" />
              <button className="data-search-btn">
                <img src={searchIcon} alt="addNew icon" className="img-fluid" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Datacontrols;