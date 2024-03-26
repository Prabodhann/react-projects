import { useState } from 'react';
import Modal from './Modal';
import './modal.css';

export default function ModalPop() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleModal() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <>
      <h1 className="modal-h1">Modal pop </h1>
      <div className="modal-container">
        <button className="button-30" onClick={handleModal}>
          Show Modal
        </button>
        {showModalPopup && (
          <Modal
            onClose={onClose}
            body={<div> Body passed from the parent element </div>}
          />
        )}
      </div>
    </>
  );
}
