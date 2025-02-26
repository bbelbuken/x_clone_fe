import { AddPhotoSVG } from 'components/icons/AddPhotoSVG';
import { useRef } from 'react';

const AvatarInput = ({ media, setMedia }) => {
    const fileInputRef = useRef();

    const handleClick = (e) => {
        fileInputRef.current?.click();
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMedia(file);
        }
        console.log(file);
        console.log(URL.createObjectURL(file));
    };

    const preview = media
        ? URL.createObjectURL(media)
        : '/public/default_profile_200x200.png';

    return (
        <div className="relative mt-17 flex h-full flex-1 items-center justify-center px-20">
            <div className="absolute mt-46 flex h-[188px] w-[188px] items-center justify-center rounded-full bg-white">
                <div className="absolute h-[184px] w-[184px] rounded-full bg-black"></div>
                <img
                    src={preview}
                    alt="default_profile"
                    className="box-content block h-[184px] w-[184px] rounded-full opacity-70 outline-2 -outline-offset-2 outline-black"
                />
            </div>

            <label htmlFor="avatar-upload" className="hidden">
                Upload Avatar
            </label>
            <div
                className="absolute top-17.5 flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-[#0f14198c] transition-colors outline-none hover:bg-[#28323d8c]"
                onClick={handleClick}
            >
                <AddPhotoSVG className="top-1.7 absolute cursor-pointer text-white" />
            </div>
            <input
                ref={fileInputRef}
                id="avatar-upload"
                type="file"
                accept="image/jpeg, image/png"
                className="hidden"
                onChange={handleFileUpload}
            />
        </div>
    );
};

export default AvatarInput;
