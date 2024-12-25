import { React, useState } from "react";
import "./Dashboard.css";
import DataTable from "./DataTable";
import Datasources from "./Datasources";
import Topbreadcrumbs from "./Topbreadcrums";
import Datacontrols from "./Datacontrols";
import Uploadfile from "./Uploadfile";
import Connectors from "./Connectors";
import NewModel from "./NewModel";
import ModalExample from "./GroupPopup";
import Backarrowicon from "../../public/Backarrowicon.svg";
import CreatedGroup from "./CreatedGroup";
import DataAdvancedProperties from "./DataAdvancedProperties";
import FormSubmitBtnsGroup from "./FormSubmitBtnsGroup";

const Dashboard = () => {
  return (
    <div className="dashboard-container container">
      <div className="dashboard-inner-container">
        <div className="data-sources-header d-flex flex-column">
          <div className="discover-pagination">
            {/* <button className="border-btn">
              <img src={Backarrowicon} alt="back arrow icon" className="backarrowIcon"/>Back
              </button> */}
            {/* <h3>Discover Agent</h3> */}
            <Topbreadcrumbs />
          </div>
          {/* <Datacontrols /> */}
          <CreatedGroup />
        </div>
        <div className="data-table">
          {/* <DataTable /> */}
          {/* <Datasources /> */}
          {/* <Uploadfile/> */}
          <div>
            <Connectors />
            <DataAdvancedProperties />
            <FormSubmitBtnsGroup/>
          </div>
          {/* <NewModel/> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
