import FormHeader from '../../createaccountmodal/formarea/formheader/FormHeader';
import Button from 'components/buttons/Button';
import { Link } from 'react-router-dom';

const SignInPassword = ({
    handleClose,
    handleNextSection,
    newStep,
    username,
    email,
}) => {
    return (
        <div className="absolute top-[24.6%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] flex-col items-center justify-center rounded-2xl bg-black">
            <FormHeader handleClose={handleClose} newStep={newStep} />

            <div className="mt-[5px] flex h-full max-w-[364px] min-w-[364px] flex-1 flex-col items-center justify-center px-8 pb-12">
                <div className="my-4 w-full">
                    <h1 className="mb-[6px] min-w-0 text-[31px] leading-9 font-bold whitespace-nowrap text-[#e7e9ea]">
                        Enter your password
                    </h1>
                </div>

                <div className="mt-[10px] mb-1 flex h-full flex-1 flex-col gap-[17px] px-20"></div>

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
            </div>
        </div>
    );
};

export default SignInPassword;
