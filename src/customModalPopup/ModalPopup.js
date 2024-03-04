import React, { useState } from "react";
import "./style.css";
export default function ModalPopup({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "ModalPopup"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span
            onClick={onClose}
            style={{
              cursor: "pointer",
              fontSize: "40px",
              float: "right",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            &times;
          </span>
          {header ? header : <h2> Header </h2>}
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              {" "}
              <p>This is Modal body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}
