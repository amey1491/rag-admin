import React from "react";
import "./Dashboard.css";
import DataTable from "./DataTable";
import Datasources from "./Datasources";
import Breadcrumbs from "./Breadcrums";
import Datacontrols from "./Datacontrols";
import Uploadfile from "./Uploadfile";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="data-sources-header d-flex flex-column">
        <div className="discover-pagination">
          <h3>DATA SOURCES</h3>
          {/* <Breadcrumbs/> */}
        </div>
        <Datacontrols />
      </div>
      <div className="data-table">
        {/* <DataTable /> */}
        {/* <Datasources /> */}
        <Uploadfile/>
      </div>
    </div>
  );
};

export default Dashboard;
