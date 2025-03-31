import { useState, memo } from 'react';
import FormHeader from '../formarea/formheader/FormHeader';
import Button from 'components/buttons/Button';
import AvatarInput from './avatarinput/AvatarInput';

const AvatarArea = memo(({ handleNextSection, media, setMedia }) => {
    const [isCropping, setIsCropping] = useState(false); // To toggle cropping mode
    return (
        <div className="relative z-50 mx-auto flex min-h-[568px] w-full flex-col rounded-2xl bg-black sm:absolute sm:h-auto sm:max-h-[90vh] sm:max-w-[20vw] sm:min-w-[600px]">
            <FormHeader />

            <div className="mt-[5px] flex flex-col px-3 sm:h-full sm:flex-1 sm:px-20">
                <div className="my-4">
                    <h1 className="mb-[6px] min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
                        Pick a profile picture
                    </h1>
                    <span className="text-[15px] tracking-[0.013em] text-[#71767b]">
                        Have a favorite selfie? Upload it now.
                    </span>
                </div>
            </div>

            <AvatarInput
                media={media}
                setMedia={setMedia}
                isCropping={isCropping}
                setIsCropping={setIsCropping}
            />

            <div className="min-w-0 px-20 text-[13px] leading-4 tracking-[0.010em] text-[#71767b] sm:mt-81">
                <Button
                    type="button"
                    className={`${isCropping ? 'pointer-events-none opacity-0' : media ? 'bg-[#fff] text-black' : 'border border-[#71767b] bg-[#000] text-[#fff] hover:bg-[#eff3f41a]'} my-6 mt-6 min-h-[52px] w-full px-20 transition-all duration-100 ease-in-out outline-none`}
                    onClick={handleNextSection}
                >
                    <span
                        className={`text-lg text-nowrap ${media ? 'text-black' : 'text-[#fff]'}`}
                    >
                        {media ? 'Next' : 'Skip for now'}
                    </span>
                </Button>
            </div>
        </div>
    );
});

AvatarArea.displayName = 'AvatarArea';
export default AvatarArea;
