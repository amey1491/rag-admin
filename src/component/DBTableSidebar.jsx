import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./DBTableSidebar.css";

const DBTableSidebar = () => {
  return (
    <div className="dbtable-sidebar">
      <DropdownButton id="dropdown-item-button" title="Loan Applications">
        <Dropdown.Item as="button">Applicants</Dropdown.Item>
        <Dropdown.ItemText>Loans</Dropdown.ItemText>
        <Dropdown.Item as="button">Status</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default DBTableSidebar;
