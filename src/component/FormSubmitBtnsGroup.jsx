import React from "react";

const FormSubmitBtnsGroup = () => {
  return (
    <div className="form-buttons">
      <div className="d-flex justify-content-end">
        <button className="border-btn mx-3">Cancel</button>
        <button className="border-btn mx-3">Test Connection</button>
        <button className="border-btn">Connect Datasources</button>
      </div>
    </div>
  );
};

export default FormSubmitBtnsGroup;
