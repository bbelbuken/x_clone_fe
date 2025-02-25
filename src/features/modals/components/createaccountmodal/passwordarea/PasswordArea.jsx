import { set } from 'date-fns';
import FormHeader from '../formarea/formheader/FormHeader';
import PasswordInput from './passwordinput/PasswordInput';
import { useState } from 'react';

const PasswordArea = ({ handleClose }) => {
  const [password, setPassword] = useState();
  return (
    <div className="absolute top-[24.5%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] flex-col rounded-2xl bg-black">
      <FormHeader handleClose={handleClose} />

      <div className="mt-[5px] flex h-full flex-1 flex-col px-20">
        <div className="my-4">
          <h1 className="mb-[6px] min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
            You'll need a password
          </h1>
          <span className="text-[15px] tracking-[0.013em] text-[#71767b]">
            Make sure it's 8 characters or more.
          </span>
        </div>
      </div>

      <form className="flex h-full flex-1 flex-col px-20">
        <PasswordInput password={password} setPassword={setPassword} />
      </form>
    </div>
  );
};

export default PasswordArea;
