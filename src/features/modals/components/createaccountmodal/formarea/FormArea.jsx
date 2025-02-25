import NameInput from './nameinput.jsx/NameInput';
import EmailInput from './emailInput/EmailInput';

const FormArea = () => {
  return (
    <form className="flex h-full flex-1 flex-col px-20">
      <NameInput />
      <EmailInput />
    </form>
  );
};

export default FormArea;
