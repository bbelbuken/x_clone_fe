import { memo } from 'react';
import { DeletePhotoSVG } from 'components/icons/DeletePhotoSVG';
import { AddPhotoSVG } from 'components/icons/AddPhotoSVG';

const AddAndDeleteIconsEditHeader = memo(
    ({ handleFileUpload, handleFileDelete }) => {
        return (
            <>
                <div
                    className={`absolute top-20 left-64 flex min-h-8 min-w-8 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c] max-md:top-18 max-md:left-45 max-md:min-h-9 max-md:min-w-9 md:top-20 md:left-64 md:min-h-8 md:min-w-8 xl:top-45 xl:left-110 xl:min-h-9 xl:min-w-9`}
                    onClick={handleFileUpload}
                >
                    <AddPhotoSVG className="top-1.7 absolute w-5 cursor-pointer text-white" />
                </div>

                <div
                    className="absolute top-20 right-66 flex min-h-8 min-w-8 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c] max-md:top-18 max-md:right-25 max-md:min-h-9 max-md:min-w-9 md:top-20 md:right-66 md:min-h-8 md:min-w-8 xl:top-45 xl:right-110 xl:min-h-9 xl:min-w-9"
                    onClick={handleFileDelete}
                >
                    <DeletePhotoSVG className="top-1.7 absolute cursor-pointer text-white" />
                </div>
            </>
        );
    },
);

AddAndDeleteIconsEditHeader.displayName = 'AddAndDeleteIconsEditHeader';
export default AddAndDeleteIconsEditHeader;
