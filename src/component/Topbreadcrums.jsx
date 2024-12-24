import React from "react";
// import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./Topbreadcrums.css";
import Backarrowicon from "../../public/Backarrowicon.svg";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

// map & render your breadcrumb components however you want.
const Topbreadcrumbs = () => {
  // const breadcrumbs = useBreadcrumbs(routes);
  const breadcrumbs = [
    <Link underline="hover" key="1" href="/" onClick={handleClick}>
      DISCOVER AGENT
    </Link>,
    <Link underline="hover" key="1" href="/" onClick={handleClick}>
      Groups
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Finance
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Add Data Sources
    </Typography>,
  ];

  return (
    <>
    <button className="border-btn">
              <img src={Backarrowicon} alt="back arrow icon" className="backarrowIcon"/>Back
              </button>
    <Stack spacing={2} className="breadcrums-wrapper">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    </>
  );
};

export default Topbreadcrumbs;
