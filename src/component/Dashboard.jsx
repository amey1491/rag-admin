import { React, useState } from "react";
import "./Dashboard.css";
import DataTable from "./DataTable";
import Datasources from "./Datasources";
import Breadcrumbs from "./Breadcrums";
import Datacontrols from "./Datacontrols";
import Uploadfile from "./Uploadfile";
import Connectors from "./Connectors";
import NewModel from "./NewModel";

const Dashboard = () => {
  return (
    <div className="dashboard-container container">
      <div className="dashboard-inner-container">
        <div className="data-sources-header d-flex flex-column">
          <div className="discover-pagination">
            <h3>Discover Agent</h3>
            {/* <Breadcrumbs/> */}
          </div>
          <Datacontrols />
        </div>
        <div className="data-table">
          <DataTable />
          {/* <Datasources /> */}
          {/* <Uploadfile/> */}
          {/* <Connectors /> */}
          {/* <NewModel/> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
