import React from 'react';
import FormHeader from '../../createaccountmodal/formarea/formheader/FormHeader';
import GoogleSignUp from 'features/auth/welcome/googlesignup/GoogleSignUp';
import AppleSignUp from 'features/auth/welcome/applesignup/AppleSignUp';
import Or from 'features/auth/welcome/or/Or';
import UsernameOrEmailInput from './usernameoremailinput/UsernameOrEmailInput';
import Button from 'components/buttons/Button';
import { Link } from 'react-router-dom';

const SignInOptions = ({
    username,
    email,
    handleClose,
    handleNextSection2,
    newStep,
    setUsername,
    setEmail,
    login,
    isLoading,
    error,
}) => {
    return (
        <div className="absolute top-[24.6%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] flex-col items-center justify-center rounded-2xl bg-black">
            <FormHeader handleClose={handleClose} newStep={newStep} />

            <div className="mt-[5px] flex h-full max-w-[364px] min-w-[364px] flex-1 flex-col items-center justify-center px-8 pb-12">
                <div className="my-4 w-full">
                    <h1 className="mb-[6px] min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
                        Sign in to X
                    </h1>
                </div>

                <div className="mt-[10px] mb-1 flex h-full flex-1 flex-col gap-[17px] px-20">
                    <GoogleSignUp />
                    <AppleSignUp />
                </div>
                <Or />

                <UsernameOrEmailInput
                    username={username}
                    email={email}
                    setUsername={setUsername}
                    setEmail={setEmail}
                    handleNextSection2={handleNextSection2}
                    login={login}
                    isLoading={isLoading}
                    error={error}
                />
                <div className="mt-[9px] flex h-[36px] w-[300px] items-center justify-center rounded-[20px] border border-[#536471] bg-transparent">
                    <Button
                        size="forgot-password"
                        title="forgot password?"
                        className="flex w-80 cursor-pointer items-center justify-center border-0 hover:bg-[#71767b46]"
                    >
                        <span className="ml-2 text-[15px] font-bold text-[#e7e9ea]">
                            Forgot password?
                        </span>
                    </Button>
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

export default SignInOptions;
