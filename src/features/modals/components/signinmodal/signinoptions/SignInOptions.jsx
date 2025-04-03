import React from 'react';
import FormHeader from '../../createaccountmodal/formarea/formheader/FormHeader';
import GoogleSignUp from 'pages/welcome/googlesignup/GoogleSignUp';
import AppleSignUp from 'pages/welcome/applesignup/AppleSignUp';
import Or from 'pages/welcome/or/Or';
import UsernameOrEmailInput from './usernameoremailinput/UsernameOrEmailInput';
import Button from 'components/buttons/Button';
import { Link } from 'react-router-dom';

const SignInOptions = ({
    handleClose,
    handleNextSection2,
    newStep,
    setUsername,
    setEmail,
    login,
    error,
}) => {
    return (
        <div className="z-40 mx-auto flex h-screen w-full flex-col bg-black sm:absolute sm:h-auto sm:max-h-[90vh] sm:min-h-[568px] sm:w-[90%] sm:max-w-[20vw] sm:min-w-[600px] sm:rounded-2xl">
            <FormHeader handleClose={handleClose} newStep={newStep} />

            <div className="mx-auto mt-[5px] flex h-full w-[90%] max-w-[364px] min-w-[300px] flex-1 flex-col items-center justify-center px-4 pb-8 sm:w-full sm:px-8 sm:pb-12">
                <div className="my-2 w-full sm:my-4">
                    <h1 className="mb-[6px] min-w-0 text-[24px] leading-9 font-bold text-[#e7e9ea] sm:text-[31px]">
                        Sign in to X
                    </h1>
                </div>

                <div className="mt-[10px] mb-1 flex w-full flex-col gap-[17px]">
                    <GoogleSignUp />
                    <AppleSignUp />
                </div>
                <Or />

                <div className="w-full">
                    <UsernameOrEmailInput
                        newStep={newStep}
                        setUsername={setUsername}
                        setEmail={setEmail}
                        handleNextSection2={handleNextSection2}
                        login={login}
                        error={error}
                    />
                </div>
                <div className="mt-[9px] flex h-[36px] w-full items-center justify-center rounded-[20px] border border-[#536471] bg-transparent">
                    <Button
                        size="forgot-password"
                        title="forgot password?"
                        className="flex w-full cursor-pointer items-center justify-center border-0 hover:bg-[#71767b46]"
                    >
                        <span className="ml-2 text-[15px] font-bold text-[#e7e9ea]">
                            Forgot password?
                        </span>
                    </Button>
                </div>

                <div className="mt-[42px] mb-13 flex h-[36px] w-full items-center justify-start rounded-[20px]">
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

export default SignInOptions;
