import React from "react";
import cloudaddIcon from "../../public/cloudaddIcon.svg";
import retryIcon from "../../public/retryIcon.svg";
import deleteIcon from "../../public/deleteIcon2.svg";
import "./Uploadfile.css";

const Uploadfile = () => {
  return (
    <div className="uploadfile-wrapper">
      <div className="datasourcename">
        <form>
          <div className="form-group">
            <label>
              Datasource Name:
            </label>
            <input type="text"  className="form-control" placeholder="My Data"/>
          </div>
        </form>
      </div>
      <form>
        <div className="form-group input-file">
          <input type="file" className="form-control" />
          <div className="d-flex flex-column justify-content-center align-items-center fileupload-box">
            <span>
              <img src={cloudaddIcon} alt="addNew icon" className="img-fluid" />
            </span>
            <p>Click to upload or drag and drop</p>
            <span>supports text files, csv’s, spreadsheets and more</span>
          </div>
        </div>
      </form>
      <div className="uploadfile-table-container">
        <table className="table">
          <thead>
            <tr>
              <th>File Name</th>
              <th className="text-center">Type</th>
              <th className="text-center">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                  id="fileupload"
                  className="fileuploadcheckbox"
                />
                <label for="fileupload">Customer Feedback</label>
              </td>
              <td className="text-center">.CSV</td>
              <td className="text-center">
                <span className="statusbar inprogress">In Progress</span>
                <span className="statusbar uploaded">Uploaded</span>
                <span className="statusbar failed">Failed</span>
                </td>
              <td className="text-center">
                <button className="action-btns">
                  <img src={retryIcon} alt="retryIcon" />
                </button>
                <button className="action-btns">
                  <img src={deleteIcon} alt="retryIcon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Uploadfile;
