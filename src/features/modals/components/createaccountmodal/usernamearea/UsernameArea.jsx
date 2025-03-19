import { useState, memo } from 'react';
import FormHeader from '../formarea/formheader/FormHeader';
import Button from 'components/buttons/Button';
import UsernameInput from './usernameinput/UsernameInput';
import { useSignUpMutation } from 'features/auth/authApiSlice';

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
            } catch (error) {
                console.error(error);
            }
        };

        if (isLoading) {
            return <div>Loading...</div>;
        }
        if (error) {
            return <div>Error creating account: {error.message}</div>;
        }
        return (
            <div className="absolute top-[24.5%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] flex-col rounded-2xl bg-black">
                <FormHeader />

                <div className="mt-[5px] flex h-full flex-1 flex-col px-20">
                    <div className="my-4">
                        <h1 className="mb-[6px] min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
                            What should we call you?
                        </h1>
                        <span className="text-[15px] tracking-[0.013em] text-[#71767b]">
                            Your @username is unique. You can always change it
                            later.
                        </span>
                    </div>
                </div>

                <form className="flex h-full flex-1 flex-col px-20">
                    <UsernameInput
                        name={name}
                        username={username}
                        setUsername={setUsername}
                        isFirstTime={isFirstTime}
                        setIsFirstTime={setIsFirstTime}
                        setUseSuggested={setUseSuggested}
                    />
                </form>

                <div className="mt-77 min-w-0 px-20 text-[13px] leading-4 tracking-[0.010em] text-[#71767b]">
                    <Button
                        type="button"
                        className={`${useSuggested ? 'bg-white' : isFirstTime ? 'border border-[#71767b] bg-black hover:bg-[#eff3f41a]' : username == '' ? 'pointer-events-none bg-[#71767b]' : username ? 'bg-[#fff] text-black' : 'border border-[#71767b] bg-[#000] text-[#fff] hover:bg-[#eff3f41a]'} my-6 mt-6 min-h-[52px] w-full px-20 transition-all duration-100 ease-in-out outline-none`}
                        onClick={handleSignUp}
                    >
                        <span
                            className={`text-lg ${useSuggested ? 'text-black' : isFirstTime ? 'text-white' : username == '' ? 'text-[#000000]' : username ? 'text-black' : 'text-[#e7e9ea]'}`}
                        >
                            {useSuggested
                                ? 'Next'
                                : isFirstTime
                                  ? 'Skip for now'
                                  : username == ''
                                    ? 'Try Again'
                                    : username
                                      ? 'Next'
                                      : ''}
                        </span>
                    </Button>
                </div>
            </div>
        );
    },
);

UsernameArea.displayName = 'UsernameArea';
export default UsernameArea;
