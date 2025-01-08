import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAccounts } from 'hooks/useAccounts';

const HeaderPhotoModal = ({ handleClose }) => {
  const { username } = useParams();
  const accounts = useAccounts();
  const account = accounts.find((account) => account.username === username);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // Close the modal if clicked outside
      }
    };

    // Add event listener
    document.addEventListener('click', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClose]);

  return (
    <div
      className="fixed inset-0 z-50 my-auto flex max-h-[600px] items-center justify-center bg-black bg-opacity-70"
      ref={modalRef}
    >
      <div className="flex">
        <button
          type="button"
          onClick={() => handleClose()}
          className="absolute right-4 top-4 text-white"
        >
          Close
        </button>
        <img
          src={account.header_photo}
          alt="Header Fullscreen"
          className="max-h-full max-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeaderPhotoModal;
