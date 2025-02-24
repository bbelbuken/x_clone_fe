import Button from 'components/buttons/Button';

const CreateAccount = () => {
  return (
    <div className="mb-2 flex h-[40px] w-[300px] items-center justify-center rounded-[20px] bg-[#e7e9ea]">
      <Button
        size="signup"
        title="Oturum Açma Düğmesi"
        className={
          'flex h-11 w-80 cursor-pointer items-center justify-center border-0 bg-[#1d9bf0] hover:bg-[#1a8cd8]'
        }
      >
        <span className="ml-2 text-sm font-bold text-[#e7e9ea]">
          Create account
        </span>
      </Button>
    </div>
  );
};

export default CreateAccount;
