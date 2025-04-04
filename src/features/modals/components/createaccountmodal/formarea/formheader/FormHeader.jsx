import { TwitterSVG } from 'components/icons/TwitterSVG';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

const FormHeader = memo(({ handleClose, step, newStep }) => {
    const location = useLocation();
    const signUpLocation = location.pathname === '/i/flow/signup';
    const loginLocation = location.pathname === '/i/flow/login';
    return (
        <div className="sticky top-0 mx-auto flex h-auto w-full flex-col items-center justify-center px-4">
            <div className="relative flex min-h-8 w-full items-center justify-center">
                {signUpLocation && step == 1 && (
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute left-0 flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full transition-colors outline-none hover:bg-[#eff3f41a]"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="#eff3f4"
                            width={20}
                            height={20}
                            className=""
                        >
                            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                        </svg>
                    </button>
                )}

                {loginLocation && newStep <= 2 && (
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute left-0 flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full transition-colors outline-none hover:bg-[#eff3f41a]"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="#eff3f4"
                            width={20}
                            height={20}
                            className=""
                        >
                            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                        </svg>
                    </button>
                )}

                <TwitterSVG className="h-[53px] w-8" />
            </div>
        </div>
    );
});

FormHeader.displayName = 'DisplayName';
export default FormHeader;
