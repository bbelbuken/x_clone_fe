import FormHeader from '../formarea/formheader/FormHeader';
import PasswordInput from './passwordinput/PasswordInput';
import { useState, memo } from 'react';
import Button from 'components/buttons/Button';
import LegalDisclaimerPassword from './legaldisclaimerpassword/LegalDisclaimerPassword';

const PasswordArea = memo(({ handleNextSection, password, setPassword }) => {
    return (
        <div className="absolute top-[24.5%] left-[339px] z-50 mx-auto ms-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] flex-col rounded-2xl bg-black">
            <FormHeader />

            <div className="mt-[5px] flex h-full flex-1 flex-col px-20">
                <div className="my-4">
                    <h1 className="mb-[6px] min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
                        You&apos;ll need a password
                    </h1>
                    <span className="text-[15px] tracking-[0.013em] text-[#71767b]">
                        Make sure it&apos;s 8 characters or more.
                    </span>
                </div>
            </div>

            <form
                className="flex h-full flex-1 flex-col px-20"
                onSubmit={(e) => e.preventDefault()}
            >
                <PasswordInput password={password} setPassword={setPassword} />
            </form>

            <div className="mt-46 min-w-0 px-20 text-[13px] leading-4 tracking-[0.010em] text-[#71767b]">
                <LegalDisclaimerPassword />
                <Button
                    type="button"
                    className={`${password.length >= 8 ? 'bg-[#fff] opacity-100' : 'pointer-events-none bg-[#eff3f4] opacity-50'} my-6 mt-6 min-h-[52px] w-full px-20 transition-opacity duration-300 ease-in-out outline-none`}
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
