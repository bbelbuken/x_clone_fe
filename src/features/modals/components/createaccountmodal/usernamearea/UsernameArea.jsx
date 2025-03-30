import { useState, memo } from 'react';
import FormHeader from '../formarea/formheader/FormHeader';
import Button from 'components/buttons/Button';
import UsernameInput from './usernameinput/UsernameInput';
import { useSignUpMutation } from 'features/auth/authApiSlice';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from 'components/loading/LoadingSpinner';

const UsernameArea = memo(
    ({
        name,
        username,
        setUsername,
        setName,
        setPassword,
        setEmail,
        setMedia,
        setMonth,
        setDay,
        setYear,
        setStep,
        payload,
    }) => {
        const navigate = useNavigate();
        const [isFirstTime, setIsFirstTime] = useState(true);
        const [useSuggested, setUseSuggested] = useState(false);
        const [signup, { isLoading, error }] = useSignUpMutation();

        const handleSignUp = async (e) => {
            e.preventDefault();
            try {
                const response = await signup(payload).unwrap();
                console.log(response);
                setName('');
                setUsername('');
                setPassword('');
                setEmail('');
                setMonth('');
                setDay('');
                setYear('');
                setMedia('');
                setStep(1);
                navigate('/home');
            } catch (error) {
                console.error(error);
            }
        };

        if (error) {
            return <div>Error creating account: {error.message}</div>;
        }
        return (
            <div className="z-50 mx-auto flex min-h-[568px] w-full flex-col rounded-2xl bg-black sm:absolute sm:h-auto sm:max-h-[90vh] sm:max-w-[20vw] sm:min-w-[600px]">
                {isLoading && <LoadingSpinner />}
                <FormHeader />

                <div className="mt-[5px] flex flex-col px-4 sm:px-20">
                    <div className="my-4">
                        <h1 className="mb-[6px] min-w-0 text-[24px] leading-9 font-bold text-[#e7e9ea] sm:text-[31px]">
                            What should we call you?
                        </h1>
                        <span className="text-[15px] tracking-[0.013em] text-[#71767b]">
                            Your @username is unique. You can always change it
                            later.
                        </span>
                    </div>
                </div>

                <form
                    className="flex flex-col px-4 sm:px-20"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <UsernameInput
                        name={name}
                        username={username}
                        setUsername={setUsername}
                        isFirstTime={isFirstTime}
                        setIsFirstTime={setIsFirstTime}
                        setUseSuggested={setUseSuggested}
                    />
                </form>

                <div className="mt-4 min-w-0 px-4 text-[13px] leading-4 tracking-[0.010em] text-[#71767b] sm:mt-77 sm:px-20">
                    <Button
                        type="button"
                        disabled={!username && !isFirstTime}
                        className={`${useSuggested ? 'bg-white' : isFirstTime ? 'border border-[#71767b] bg-black hover:bg-[#eff3f41a]' : !username ? 'pointer-events-none bg-[#71767b]' : 'bg-[#fff] text-black'} my-6 mt-6 min-h-[52px] w-full px-20 transition-all duration-100 ease-in-out outline-none`}
                        onClick={handleSignUp}
                    >
                        <span
                            className={`text-lg ${useSuggested ? 'text-black' : isFirstTime ? 'text-white' : !username ? 'text-[#000000]' : 'text-black'}`}
                        >
                            {useSuggested
                                ? 'Next'
                                : isFirstTime
                                  ? 'Skip for now'
                                  : !username
                                    ? 'Try Again'
                                    : 'Next'}
                        </span>
                    </Button>
                </div>
            </div>
        );
    },
);

UsernameArea.displayName = 'UsernameArea';
export default UsernameArea;
