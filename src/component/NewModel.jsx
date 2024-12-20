import React from "react";
import "./NewModel.css";

const NewModel = () => {
  return (
    <div className="newmodel-wrapper container">
      <form className="forms-wrapper">
        <div className="form-fields">
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>
                  Model Name<sup className="validation">*</sup>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <label>
                  Anthropic API Key<sup className="validation">*</sup>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Temperature<sup className="validation">*</sup>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  P - value<sup className="validation">*</sup>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <label>
                  System Prompt<sup className="validation">*</sup>
                </label>
                <textarea className="form-control"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="connection-successful-msg">
          <p>Connection Successful!</p>
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

export default NewModel;
