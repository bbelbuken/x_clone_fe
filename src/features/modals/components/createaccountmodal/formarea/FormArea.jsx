import NameInput from './nameinput.jsx/NameInput';
import EmailInput from './emailinput/EmailInput';
import DateInput from './dateinput/DateInput';

const FormArea = () => {
  return (
    <form className="flex h-full flex-1 flex-col px-20">
      <NameInput />
      <EmailInput />
      <button
        type="button"
        className="mt-1 cursor-pointer text-right text-[15px] leading-5 text-[#1d9bf0] hover:underline"
      >
        <span>Use phone instead</span>
      </button>
      <DateInput />
    </form>
  );
};

export default FormArea;
