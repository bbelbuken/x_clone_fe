import { TwitterSVG } from 'components/icons/TwitterSVG';

const FormHeader = ({ handleClose, step }) => {
    return (
        <div className="sticky top-0 mx-auto flex h-auto w-full flex-col items-start justify-center px-4">
            <div className="flex min-h-8 min-w-[56px] items-center justify-center">
                {step == 1 && (
                    <button
                        type="button"
                        onClick={handleClose}
                        className="ml-[calc(-8px)] flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full transition-colors outline-none hover:bg-[#eff3f41a]"
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

                <TwitterSVG
                    className={`${step == 1 ? 'ml-60' : 'ml-67'} h-[53px] w-8`}
                />
            </div>
        </div>
    );
};

export default FormHeader;
