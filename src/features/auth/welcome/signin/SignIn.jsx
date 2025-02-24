import Button from 'components/buttons/Button';

const SignIn = () => {
  return (
    <div className="mt-10 flex flex-col">
      <span className="max-w-380px mb-5 flex-auto text-[17px] leading-5 font-bold break-words text-[#e7e9ea]">
        Already have an account?
      </span>
      <div className="flex h-[40px] w-[300px] items-center justify-center rounded-[20px] border border-[#536471] bg-transparent">
        <Button
          size="signup"
          title="sign in button"
          className="flex h-11 w-80 cursor-pointer items-center justify-center border-0 hover:bg-[#1d9bf01a]"
        >
          <span className="ml-2 text-[15px] font-bold tracking-wide text-[#1d9bf0]">
            Sign In
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
