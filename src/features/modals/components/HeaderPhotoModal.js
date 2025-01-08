import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAccounts } from 'hooks/useAccounts';

const HeaderPhotoModal = ({ handleClose }) => {
  const { username } = useParams();
  const modalRef = useRef(null);
  const accounts = useAccounts();
  const account = accounts.find((account) => account.username === username);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // Close the modal if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClose]);

  return (
    <div className="fixed inset-0 z-50 my-auto flex max-h-[600px] items-center justify-center bg-black bg-opacity-70">
      <div className="flex">
        <div className="flex min-h-8 min-w-[56px] items-center justify-start">
          <button
            type="button"
            onClick={handleClose}
            className="ml-[calc(-8px)] flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full outline-none transition-colors hover:bg-[#eff3f41a]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="#eff3f4"
              width={20}
              height={20}
              className=""
            >
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </svg>
          </button>
        </div>
        <img
          ref={modalRef}
          src={account.header_photo}
          alt="Header Fullscreen"
          className="max-h-full max-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeaderPhotoModal;
