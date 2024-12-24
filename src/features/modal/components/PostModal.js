import React from 'react';

const PostModal = ({ handleClose }) => {
  return (
    <div className="top-[5%] z-10 mx-auto flex max-h-[90vh] w-full min-w-[600px] flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl bg-black backdrop-blur-md">
      <div className="height=[53px] sticky top-0 mx-auto flex w-full items-center justify-center px-4">
        PostModal
        <button
          type="button"
          className="h-16 w-16 bg-red-700"
          onClick={() => handleClose()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PostModal;
