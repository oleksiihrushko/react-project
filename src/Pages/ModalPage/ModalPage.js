import React, { useState } from "react";
import Modal from "../../components/modal/Modal";

const ModalPage = () => {
  const [isShowModal, changeIsShowModal] = useState(true);

  const showModal = () => changeIsShowModal(true);
  const closeModal = () => changeIsShowModal(false);

  return (
    <>
      <button type="button" onClick={showModal}>
        Выйти
      </button>
      {isShowModal && (
        <Modal closeModal={closeModal} />
      )}
    </>
  );
};

export default ModalPage;
