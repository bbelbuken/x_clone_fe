import { memo } from 'react';
import { DeletePhotoSVG } from 'components/icons/DeletePhotoSVG';
import { AddPhotoSVG } from 'components/icons/AddPhotoSVG';

const AddAndDeleteIconsEditAvatar = memo(
    ({ handleFileUpload, handleFileDelete }) => {
        return (
            <>
                <div
                    className="absolute flex cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c] max-md:-bottom-9 max-md:-left-17.5 max-md:min-h-7 max-md:min-w-7 md:top-1 md:-left-44 md:min-h-8 md:min-w-8"
                    onClick={handleFileUpload}
                >
                    <AddPhotoSVG className="md:top-1.7 absolute cursor-pointer text-white max-md:w-4 md:w-5" />
                </div>

                <div
                    className="absolute flex cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c] max-md:-bottom-9 max-md:-left-7 max-md:min-h-7 max-md:min-w-7 md:top-1 md:-left-33 md:min-h-8 md:min-w-8"
                    onClick={handleFileDelete}
                >
                    <DeletePhotoSVG className="md:top-1.7 absolute cursor-pointer text-white max-md:w-4 md:w-5" />
                </div>
            </>
        );
    },
);

AddAndDeleteIconsEditAvatar.displayName = 'AddAndDeleteIconsEditAvatar';
export default AddAndDeleteIconsEditAvatar;
