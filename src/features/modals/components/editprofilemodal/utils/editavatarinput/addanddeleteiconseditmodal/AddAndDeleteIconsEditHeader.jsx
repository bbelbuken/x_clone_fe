import { memo } from 'react';
import { DeletePhotoSVG } from 'components/icons/DeletePhotoSVG';
import { AddPhotoSVG } from 'components/icons/AddPhotoSVG';

const AddAndDeleteIconsEditHeader = memo(
    ({ handleFileUpload, handleFileDelete }) => {
        return (
            <>
                <div
                    className={`absolute top-20 left-64 flex min-h-8 min-w-8 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c]`}
                    onClick={handleFileUpload}
                >
                    <AddPhotoSVG className="top-1.7 absolute w-5 cursor-pointer text-white" />
                </div>

                <div
                    className="absolute top-20 right-66 flex min-h-8 min-w-8 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c]"
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
