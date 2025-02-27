import React, { useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAccounts } from 'hooks/useAccounts';

const HeaderPhotoModal = () => {
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
            className="bg-opacity-[0.93] fixed inset-0 z-50 flex items-center justify-center bg-black"
            onClick={handleClickOutside}
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-start">
                    <button
                        type="button"
                        aria-label="Close"
                        title="Close"
                        onClick={handleClose}
                        className="bg-opacity-70 absolute top-3 left-5 ml-[calc(-8px)] flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full bg-black transition-colors outline-none hover:bg-[#1a1a1abf]"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="#eff3f4"
                            width={20}
                            height={20}
                        >
                            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                        </svg>
                    </button>
                </div>

                <img
                    ref={modalRef}
                    src={account.header_photo}
                    alt="Header Fullscreen"
                    className="h-screen max-h-[436px] w-screen object-cover"
                />
            </div>
        </div>
    );
};

export default HeaderPhotoModal;
