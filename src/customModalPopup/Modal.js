import React, { useState } from "react";
import ModalPopup from "./ModalPopup";
export default function Modal() {
  const [showModal, setshowModal] = useState(false);
  function handleModalState() {
    setshowModal(!showModal);
  }
  function onClose() {
    setshowModal(false);
  }
  return (
    <>
      <button onClick={handleModalState}>
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>
      {showModal && <ModalPopup onClose={onClose} />}
    </>
  );
}
