import FormHeader from '../../createaccountmodal/formarea/formheader/FormHeader';
import { Link } from 'react-router-dom';
import DetectedUsernameInput from './detectedusernameinput/DetectedUsernameInput';
import DetectedEmailInput from './detectedemailinput/DetectedEmailInput';
import SignInPasswordInput from './signinpasswordinput/SignInPasswordInput';

const SignInPassword = ({
    handleClose,
    handleNextSection2,
    newStep,
    username,
    email,
    setEmail,
    password,
    setPassword,
    login,
    isLoading,
    error,
    setUsername,
}) => {
    return (
        <div className="absolute top-[24.6%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[600px] min-w-[600px] flex-col rounded-2xl bg-black">
            <FormHeader handleClose={handleClose} newStep={newStep} />

            <div className="mx-auto mt-[5px] flex h-full w-full max-w-[600px] flex-1 flex-col items-center justify-center px-20 pb-[17px]">
                <div className="my-4 w-full">
                    <h1 className="mb-[6px] min-w-0 text-[31px] leading-9 font-bold whitespace-nowrap text-[#e7e9ea]">
                        Enter your password
                    </h1>
                </div>

                {username && <DetectedUsernameInput username={username} />}
                {email && <DetectedEmailInput email={email} />}

                <SignInPasswordInput
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleNextSection2={handleNextSection2}
                    login={login}
                    isLoading={isLoading}
                    error={error}
                    newStep={newStep}
                />

                <div className="mt-[15px] flex h-[36px] w-full items-center justify-start rounded-[20px]">
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

                {error && (
                    <div className="absolute -bottom-40 min-w-0 flex-1 rounded-sm bg-[#1d9bf0] px-4 py-4 text-[14px] leading-4 tracking-wide transition-all duration-300 ease-in-out">
                        <span>{error}.</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignInPassword;
