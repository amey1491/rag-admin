import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./DBTableSidebar.css";
import dbIcon from "../../public/dbIcon.svg"

const DBTableSidebar = () => {
  return (
    <div className="dbtable-sidebar">
      <DropdownButton id="dropdown-item-button" title="Loan Applications" className="dropdown-item-btn">
        <Dropdown.Item as="button">
          <img src={dbIcon} className="img-fluid" alt="dbTableIcon" />Applicants</Dropdown.Item>
        <Dropdown.ItemText><img src={dbIcon} className="img-fluid" alt="dbTableIcon" />Loans</Dropdown.ItemText>
        <Dropdown.Item as="button"><img src={dbIcon} className="img-fluid" alt="dbTableIcon" />Status</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default DBTableSidebar;
