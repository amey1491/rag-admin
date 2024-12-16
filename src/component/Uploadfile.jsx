import React from "react";
import cloudaddIcon from "../../public/cloudaddIcon.svg";
import "./Uploadfile.css";

const Uploadfile = () => {
  return (
    <div className="uploadfile-wrapper">
      <form action="">
        <div className="form-group input-file">
          <input type="file" className="form-control" />
          <div className="d-flex flex-column justify-content-center align-items-center fileupload-box">
            <span>
              <img
                src={cloudaddIcon}
                alt="addNew icon"
                className="img-fluid"
              />
            </span>
            <p>Click to upload or drag and drop</p>
            <span>
            supports text files, csv’s, spreadsheets and more
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Uploadfile;
