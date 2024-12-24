import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Header.css";
import turintonLogo from "../../public/turintonIcon.svg";

const Header = () =>{
    return (
<div className="header-container">
<div className="admin-profile">
    <img src={turintonLogo} alt="logo" />
    <p className="mb-0">Insight AI</p>
</div>
</div>
    );
};

export default Header;