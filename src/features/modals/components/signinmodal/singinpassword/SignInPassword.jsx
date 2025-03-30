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
        <div className="z-50 mx-auto flex h-screen w-full flex-col bg-black sm:absolute sm:h-auto sm:max-h-[90vh] sm:min-h-[568px] sm:w-[90%] sm:max-w-[20vw] sm:min-w-[600px] sm:rounded-2xl">
            <FormHeader handleClose={handleClose} newStep={newStep} />

            <div className="mx-auto mt-[5px] flex h-full w-full max-w-[600px] flex-1 flex-col items-center justify-center px-5 pb-[17px] sm:px-20">
                <div className="my-4 w-full">
                    <h1 className="mb-[6px] min-w-0 text-[28px] leading-9 font-bold whitespace-nowrap text-[#e7e9ea] sm:text-[31px]">
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
                    <div className="absolute bottom-10 mx-auto min-w-0 flex-1 rounded-sm bg-[#1d9bf0] px-4 py-4 text-[13px] leading-4 tracking-wide transition-all duration-300 ease-in-out sm:-bottom-40 sm:text-[14px]">
                        <span>{error}.</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignInPassword;
