import { useRef, useEffect } from 'react';

const PostModal = ({ handleClose }) => {
  const modalRef = useRef();

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
      className="absolute left-[56px] top-[5%] z-10 mx-auto flex max-h-[90vh] w-full min-w-[600px] max-w-[80vw] flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl bg-black"
      ref={modalRef}
    >
      <div className="sticky top-0 mx-auto flex h-[53px] w-full items-center justify-center px-4">
        <div className="flex min-h-8 min-w-[56px] items-center justify-start">
          <button
            type="button"
            onClick={() => handleClose()}
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
        <div className="flex h-full flex-1 justify-center"></div>
        <div className="inline-flex min-h-8 min-w-14 items-center justify-center gap-3">
          <button className="flex min-h-8 min-w-8 grow cursor-pointer items-center justify-center rounded-full px-4 outline-none transition-colors hover:bg-[#f918801a]">
            <span className="min-w-0 max-w-full whitespace-nowrap break-words text-center text-[14px] font-bold leading-4 text-[#f91880]">
              Drafts
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
