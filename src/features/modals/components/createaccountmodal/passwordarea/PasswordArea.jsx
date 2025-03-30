import FormHeader from '../formarea/formheader/FormHeader';
import PasswordInput from './passwordinput/PasswordInput';
import { memo } from 'react';
import Button from 'components/buttons/Button';
import LegalDisclaimerPassword from './legaldisclaimerpassword/LegalDisclaimerPassword';

const PasswordArea = memo(({ handleNextSection, password, setPassword }) => {
    return (
        <div className="z-50 mx-auto flex min-h-[568px] w-full flex-col rounded-2xl bg-black sm:absolute sm:h-auto sm:max-h-[90vh] sm:max-w-[20vw] sm:min-w-[600px]">
            <FormHeader />

            <div className="mt-[5px] flex flex-col px-4 sm:px-20">
                <div className="my-4">
                    <h1 className="mb-[6px] min-w-0 text-[24px] leading-9 font-bold text-[#e7e9ea] sm:text-[31px]">
                        You&apos;ll need a password
                    </h1>
                    <span className="text-[15px] tracking-[0.013em] text-[#71767b]">
                        Make sure it&apos;s 8 characters or more.
                    </span>
                </div>
            </div>

            <form
                className="flex flex-col px-4 sm:px-20"
                onSubmit={(e) => e.preventDefault()}
            >
                <PasswordInput password={password} setPassword={setPassword} />
            </form>

            <div className="min-w-0 px-4 text-[13px] leading-4 tracking-[0.010em] text-[#71767b] sm:px-20 md:mt-46">
                <LegalDisclaimerPassword />
                <Button
                    type="button"
                    className={`${password.length >= 8 ? 'bg-[#fff] opacity-100' : 'pointer-events-none bg-[#eff3f4] opacity-50'} my-4 min-h-[52px] w-full transition-opacity duration-300 ease-in-out outline-none sm:my-6`}
                    onClick={password ? handleNextSection : null}
                >
                    <span className="text-lg text-black">Sign up</span>
                </Button>
            </div>
        </div>
    );
});

PasswordArea.displayName = 'PasswordArea';
export default PasswordArea;
