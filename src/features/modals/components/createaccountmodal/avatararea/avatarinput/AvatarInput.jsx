import { useRef } from 'react';
import AddAndDeleteIcons from './addanddeleteicons/AddAndDeleteIcons';

const AvatarInput = ({ media, setMedia }) => {
    const fileInputRef = useRef();

    const handleFileUpload = () => {
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

            <AddAndDeleteIcons
                media={media}
                handleFileUpload={handleFileUpload}
                handleFileDelete={handleFileDelete}
            />

            <label htmlFor="avatar-upload" className="hidden">
                Upload Avatar
            </label>
            <input
                ref={fileInputRef}
                id="avatar-upload"
                type="file"
                accept="image/jpeg, image/png image/webp"
                className="hidden"
                onChange={(e) => setMedia(e.target.files[0])}
            />
        </div>
    );
};

export default AvatarInput;
