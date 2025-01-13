import React, { useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAccounts } from 'hooks/useAccounts';

const PhotoModal = () => {
  const { username } = useParams();
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const accounts = useAccounts();
  const account = accounts.find((account) => account.username === username);

  const handleClose = useCallback(() => {
    navigate(`/${username}`);
  }, [navigate, username]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleClickOutside}
    >
      <div className="flex">
        <div className="flex min-h-8 min-w-[56px] items-center justify-start">
          <button
            type="button"
            onClick={handleClose}
            className="ml-[calc(-8px)] flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full outline-none transition-colors hover:bg-[#eff3f41a]"
          >
            <svg viewBox="0 0 24 24" fill="#eff3f4" width={20} height={20}>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </svg>
          </button>
        </div>
        <img
          ref={modalRef}
          src={account.avatar}
          alt="Header Fullscreen"
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
    </div>
  );
};

export default PhotoModal;
