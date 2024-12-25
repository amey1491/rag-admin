import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Select from "react-select";
import deleteIcon from "../../public/deleteWhiteIcon.svg";
import Datacontrols from "./Datacontrols";

const CreatedGroup = () => {
  const options = [
    { value: "infrastructure", label: "Infrastructure" },
    { value: "finance", label: "Finance" },
    { value: "engineering", label: "Engineering" },
    { value: "legal", label: "Legal" },
  ];
  return (
    <div className="createdGroups-wrapper">
      <Tabs>
        <TabList>
          <Tab>Settings</Tab>
          <Tab>Datasources</Tab>
        </TabList>

        <TabPanel>
          <form>
            <div className="row groupsettings-wrapper">
              <div className="form-group col-sm-6">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Group Name"
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="groups">Groups</label>
                <Select
                  defaultValue={[options[0], options[1]]}
                  isMulti
                  name="colors"
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select multiselectdropdown"
                />
              </div>
              <button className="border-btn w-auto">
                <img
                  src={deleteIcon}
                  alt="deleteIcon"
                  className="img-fluid mx-3"
                />
                Delete Group
              </button>
            </div>
          </form>
        </TabPanel>
        <TabPanel>
          <div className="group-datasources-wrapper">
            <Datacontrols />
            <div className="group-datasources-table table-responsive mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Last Synced</th>
                    <th>Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CreatedGroup;
