import React from 'react';

const FormArea = () => {
  return (
    <form className="mt-[5px] flex h-full flex-1 flex-col px-20">
      <label htmlFor="username" className="border border-[#333639] px-0 py-3">
        <input type="text" id="username" />
      </label>
    </form>
  );
};

export default FormArea;
