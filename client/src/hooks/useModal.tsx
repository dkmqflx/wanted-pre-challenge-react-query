import React, { useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const showModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (!e) {
      setIsOpenModal(false);
    } else if (e.target === e.currentTarget) {
      setIsOpenModal(false);
    }
  };

  return { isOpenModal, showModal, closeModal };
};

export default useModal;
