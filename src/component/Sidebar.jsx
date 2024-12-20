import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <DropdownButton id="dropdown-item-button" title="Discover Agent">
        <Dropdown.Item as="button">Groups</Dropdown.Item>
        <Dropdown.ItemText>Data Sources</Dropdown.ItemText>
        <Dropdown.Item as="button">Menu Item 3</Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="dropdown-item-button" title="Menu Item 2">
        <Dropdown.ItemText>Models</Dropdown.ItemText>
        <Dropdown.Item as="button">Menu Item 2</Dropdown.Item>
        <Dropdown.Item as="button">Menu Item 3</Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="dropdown-item-button" title="Menu Item 3">
        <Dropdown.ItemText>Menu Item 1</Dropdown.ItemText>
        <Dropdown.Item as="button">Menu Item 2</Dropdown.Item>
        <Dropdown.Item as="button">Menu Item 3</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Sidebar;
