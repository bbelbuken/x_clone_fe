import NameInput from './nameinput.jsx/NameInput';
import EmailInput from './emailinput/EmailInput';
import DateInput from './dateinput/DateInput';
import Button from 'components/buttons/Button';
import { useState } from 'react';

const FormArea = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true); // Change the state when clicked
  };

  return (
    <form className="flex h-full flex-1 flex-col px-20">
      <NameInput />
      <EmailInput />
      <button
        type="button"
        className={`mt-1 cursor-pointer text-right text-[15px] leading-5 ${clicked ? 'pointer-events-none' : 'hover:underline'}`}
        onClick={handleClick}
      >
        <span
          className={`${clicked ? 'text-[#71767b] italic no-underline' : 'text-[#1d9bf0] not-italic'}`}
        >
          {clicked ? '-Coming Soon-' : 'Use phone instead'}
        </span>
      </button>
      <DateInput />
      <Button
        type="button"
        className={
          'my-6 mt-21 min-h-[52px] w-full bg-[#eff3f4] px-20 opacity-50 outline-none'
        }
      >
        <span className="text-lg text-black">Next</span>
      </Button>
    </form>
  );
};

export default FormArea;
