import { AddPhotoSVG } from 'components/icons/AddPhotoSVG';
import { DeletePhotoSVG } from 'components/icons/DeletePhotoSVG';
import { useRef } from 'react';

const AvatarInput = ({ media, setMedia }) => {
    const fileInputRef = useRef();

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileDelete = () => {
        if (media) {
            setMedia(null);
        }
    };

    const preview = media
        ? URL.createObjectURL(media)
        : '/public/default_profile_200x200.png';

    return (
        <div className="relative mt-17.5 flex h-full flex-1 items-center justify-center px-20">
            <div className="absolute mt-46 flex h-[192px] w-[192px] items-center justify-center rounded-full bg-white">
                <div className="absolute h-[188px] w-[188px] rounded-full bg-black"></div>
                <img
                    src={preview}
                    alt="default_profile"
                    className="box-content block h-[188px] w-[188px] rounded-full opacity-70 outline-2 -outline-offset-2 outline-black"
                />
            </div>

            <label htmlFor="avatar-upload" className="hidden">
                Upload Avatar
            </label>

            <div
                className={`${media ? 'left-61.5' : ''} absolute top-17.5 flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c]`}
                onClick={handleClick}
            >
                <AddPhotoSVG className="top-1.7 absolute cursor-pointer text-white" />
            </div>

            {media && (
                <div
                    className="absolute top-17.5 right-61.5 flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-all outline-none hover:bg-[#28323d8c]"
                    onClick={handleFileDelete}
                >
                    <DeletePhotoSVG className="top-1.7 absolute cursor-pointer text-white" />
                </div>
            )}

            <input
                ref={fileInputRef}
                id="avatar-upload"
                type="file"
                accept="image/jpeg, image/png"
                className="hidden"
                onChange={(e) => setMedia(e.target.files[0])}
            />
        </div>
    );
};

export default AvatarInput;
