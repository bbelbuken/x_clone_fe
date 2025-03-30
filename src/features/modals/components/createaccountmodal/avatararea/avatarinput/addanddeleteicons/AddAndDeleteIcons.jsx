import { AddPhotoSVG } from 'components/icons/AddPhotoSVG';
import { DeletePhotoSVG } from 'components/icons/DeletePhotoSVG';
import { memo } from 'react';

const AddAndDeleteIcons = memo(
    ({ media, handleFileUpload, handleFileDelete }) => {
        return (
            <>
                <div
                    className={`absolute flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c] ${
                        media
                            ? 'left-1/2 -translate-x-16 sm:top-27 sm:left-61.5 sm:translate-x-0'
                            : 'left-1/2 -translate-x-1/2 sm:top-27 sm:left-69.5 sm:translate-x-0'
                    }`}
                    onClick={handleFileUpload}
                >
                    <AddPhotoSVG className="sm:top-1.7 cursor-pointer text-white sm:absolute" />
                </div>
                {media && (
                    <div
                        className="absolute left-1/2 flex min-h-11 min-w-11 translate-x-5 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c] sm:top-27 sm:right-61.5 sm:left-auto sm:translate-x-0"
                        onClick={handleFileDelete}
                    >
                        <DeletePhotoSVG className="sm:top-1.7 cursor-pointer text-white sm:absolute" />
                    </div>
                )}
            </>
        );
    },
);

AddAndDeleteIcons.displayName = 'AddAndDeleteIcons';
export default AddAndDeleteIcons;
