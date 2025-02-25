import NameInput from './nameinput.jsx/NameInput';
import EmailInput from './emailinput/EmailInput';
import DateInput from './dateinput/DateInput';
import Button from 'components/buttons/Button';
import { useState } from 'react';

const Inputs = ({ handleNextSection }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [clicked, setClicked] = useState(false);
  const FormValues = name && email && day && month && year;

  const handleClickPhone = () => {
    setClicked(true);
  };

  return (
    <form className="flex h-full flex-1 flex-col px-20">
      <NameInput name={name} setName={setName} />
      <EmailInput email={email} setEmail={setEmail} />
      <button
        type="button"
        className={`mt-1 cursor-pointer text-right text-[15px] leading-5 ${clicked ? 'pointer-events-none' : 'hover:underline'}`}
        onClick={handleClickPhone}
      >
        <span
          className={`${clicked ? 'text-[#71767b] italic no-underline' : 'text-[#1d9bf0] not-italic'}`}
        >
          {clicked ? 'Coming Soon' : 'Use phone instead'}
        </span>
      </button>
      <DateInput
        month={month}
        setMonth={setMonth}
        day={day}
        setDay={setDay}
        year={year}
        setYear={setYear}
      />
      <Button
        type="button"
        className={`${FormValues ? 'bg-[#fff]' : 'pointer-events-none bg-[#eff3f4] opacity-50'} my-6 mt-21 min-h-[52px] w-full px-20 outline-none`}
        onClick={FormValues ? handleNextSection : null}
      >
        <span className="text-lg text-black">Next</span>
      </Button>
    </form>
  );
};

export default Inputs;
