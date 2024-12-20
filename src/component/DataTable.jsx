import React from "react";
import "./DataTable.css";
import deleteIcon from "../../public/deleteIcon.svg";
import editIcon from "../../public/editIcon.svg";
import DBTableSidebar from "./DBTableSidebar";

const DataTable = () => {
  return (
    <div className="data-table-inner d-flex vh-100">
      <div>
        <DBTableSidebar />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col" className="text-center">
              Type
            </th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              Last Synced
            </th>
            <th colSpan="2" className="text-center" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Customer Details</td>
            <td className="text-center">Database</td>
            <td className="text-center">
              <span className="statusbar connected">Connected</span>
              {/* <span className="statusbar disconnected">Disconnected</span> */}
              {/* <span className="statusbar inprogress">In Progress</span> */}
            </td>
            <td className="text-center">05-12-2023, 14:45</td>
            <td className="text-center">
              <button className="p-0">
                <img
                  src={editIcon}
                  alt="editIcon"
                  className="img-fluid table-action-btns"
                />
              </button>
            </td>
            <td className="text-center">
              <button className="p-0">
                <img
                  src={deleteIcon}
                  alt="editIcon"
                  className="img-fluid table-action-btns"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
