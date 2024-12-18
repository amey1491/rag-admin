import React from "react";
import "./Connectors.css";

const Connectors = () => {
  return (
    <div className="connectors-wrapper container">
      <form action="" className="forms-wrapper">
        <div className="form-fields">
          <div className="form-group">
            <label>Datasources Name<sup className="validation">*</sup></label>
            <input type="text" className="form-control" placeholder="My Data" />
          </div>
          <div className="form-group">
            <label>User Name<sup className="validation">*</sup></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label>Password<sup className="validation">*</sup></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <label>Host<sup className="validation">*</sup></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Host"
            />
          </div>
          <div className="form-group">
            <label>Port<sup className="validation">*</sup></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Port"
            />
          </div>
          <div className="form-group roleslist">
          <label>Roles<sup className="validation">*</sup></label>
          <ul className="d-flex">
            <li className="customecheckbox">
              <input type="checkbox" id="finance"/>
              <label for="finance">Finance</label>
            </li>
            <li className="customecheckbox">
              <input type="checkbox" id="sales"/>
              <label for="sales">Sales</label>
            </li>
            <li className="customecheckbox">
              <input type="checkbox" id="hr"/>
              <label for="hr">Human Resources</label>
            </li>
            <li className="customecheckbox">
              <input type="checkbox" id="transport"/>
              <label for="transport">Transport</label>
            </li>
          </ul>
          </div>
        </div>
        <div className="form-buttons">
            <div className="d-flex justify-content-end">
                <button className="border-btn mx-3">Cancel</button>
                <button className="border-btn mx-3">Test Connection</button>
                <button className="border-btn">Connect Datasources</button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default Connectors;
