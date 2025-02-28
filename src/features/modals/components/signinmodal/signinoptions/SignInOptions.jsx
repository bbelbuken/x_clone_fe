import React from 'react';
import FormHeader from '../../createaccountmodal/formarea/formheader/FormHeader';
import GoogleSignUp from 'features/auth/welcome/googlesignup/GoogleSignUp';
import AppleSignUp from 'features/auth/welcome/applesignup/AppleSignUp';
import Or from 'features/auth/welcome/or/Or';
import UsernameOrEmailInput from './usernameoremailinput/UsernameOrEmailInput';

const SignInOptions = ({
    handleClose,
    handleNextSection,
    step,
    username,
    setUsername,
    email,
    setEmail,
}) => {
    return (
        <div className="absolute top-[24.5%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] flex-col items-center justify-center rounded-2xl bg-black">
            <FormHeader handleClose={handleClose} step={step} />

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
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    handleNextSection={handleNextSection}
                />
            </div>
        </div>
    );
};

export default SignInOptions;
