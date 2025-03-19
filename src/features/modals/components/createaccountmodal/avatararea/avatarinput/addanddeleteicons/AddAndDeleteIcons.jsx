import { AddPhotoSVG } from 'components/icons/AddPhotoSVG';
import { DeletePhotoSVG } from 'components/icons/DeletePhotoSVG';
import { memo } from 'react';

const AddAndDeleteIcons = memo(
    ({ media, handleFileUpload, handleFileDelete }) => {
        return (
            <>
                <div
                    className={`${media ? 'left-61.5' : ''} absolute top-27 flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c]`}
                    onClick={handleFileUpload}
                >
                    <AddPhotoSVG className="top-1.7 absolute cursor-pointer text-white" />
                </div>
                {media && (
                    <div
                        className="absolute top-27 right-61.5 flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c]"
                        onClick={handleFileDelete}
                    >
                        <DeletePhotoSVG className="top-1.7 absolute cursor-pointer text-white" />
                    </div>
                )}
            </>
        );
    },
);

AddAndDeleteIcons.displayName = 'AddAndDeleteIcons';
export default AddAndDeleteIcons;
