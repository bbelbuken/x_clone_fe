import FormHeader from '../../createaccountmodal/formarea/formheader/FormHeader';
import Button from 'components/buttons/Button';
import { Link } from 'react-router-dom';
import DetectedUsernameInput from './detectedusernameinput/DetectedUsernameInput';
import DetectedEmailInput from './detectedemailinput/DetectedEmailInput';

const SignInPassword = ({
    handleClose,
    handleNextSection,
    newStep,
    username,
    email,
    password,
    setPassword,
}) => {
    return (
        <div className="absolute top-[24.6%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[600px] min-w-[600px] flex-col rounded-2xl bg-black">
            <FormHeader handleClose={handleClose} newStep={newStep} />

            <div className="mx-auto mt-[5px] flex h-full w-full max-w-[600px] flex-1 flex-col items-center justify-center px-20 pb-12">
                <div className="my-4 w-full">
                    <h1 className="mb-[6px] min-w-0 text-[31px] leading-9 font-bold whitespace-nowrap text-[#e7e9ea]">
                        Enter your password
                    </h1>
                </div>

                {username && <DetectedUsernameInput username={username} />}
                {email && <DetectedEmailInput email={email} />}

                <div className="mt-[9px] flex h-[36px] w-[300px] items-center justify-start rounded-[20px] bg-transparent">
                    <span className="cursor-pointer text-[13px] text-[#1d9bf0] hover:underline">
                        Forgot password?
                    </span>
                </div>

                <div className="mt-[42px] mb-13 flex h-[36px] w-[300px] items-center justify-start rounded-[20px]">
                    <span className="text-[15px] tracking-[0.010em] text-[#71767b]">
                        Don&apos;t have an account?
                        <Link
                            to="/i/flow/signup"
                            className="text-[#1d9bf0] hover:underline"
                        >
                            {' '}
                            Sign up
                        </Link>
                    </span>
                </div>
                <div className="mt-46 min-w-0 px-20 text-[13px] leading-4 tracking-[0.010em] text-[#71767b]">
                    <Button
                        type="button"
                        className={`${password ? 'bg-[#fff] opacity-100' : 'pointer-events-none bg-[#eff3f4] opacity-50'} my-6 mt-6 min-h-[52px] w-full px-20 transition-opacity duration-300 ease-in-out outline-none`}
                        onClick={password ? handleNextSection : null}
                    >
                        <span className="text-lg text-black">Sign up</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignInPassword;
