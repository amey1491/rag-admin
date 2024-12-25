import React, { useState } from "react";
import Modal from "react-modal";
import addNewIcon from "../../public/addNewIcon.svg";
import "./GroupPopup.css";

Modal.setAppElement("#root"); // Set your app's root element

const GroupPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="border-btn">
        <img
          src={addNewIcon}
          alt="addNew icon"
          className="img-fluid addNewIcon"
        />
        Add Group
      </button>

      <Modal
        className="grouppopup-wrapper"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        // style={{
        //   overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        //   content: { width: "300px", margin: "auto", textAlign: "center" },
        // }}
      >
        <form>
          <div className="form-group">
            <label htmlFor="groupname">
              Group Name<sup className="validation">*</sup>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your group name"
            />
          </div>
        </form>
        <div className="d-flex justify-content-between">
          <button className="border-btn" onClick={() => setModalIsOpen(false)}>Close</button>
          <button className="border-btn">Add Group</button>
        </div>
      </Modal>
    </div>
  );
};

export default GroupPopup;
