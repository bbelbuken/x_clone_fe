import { useRef, useState, useEffect, memo, useCallback } from 'react';
import Croppie from 'croppie';
import Button from 'components/buttons/Button';
import AddAndDeleteIconsEditAvatar from './addanddeleteiconseditmodal/AddAndDeleteIconsEditAvatar';

const EditAvatarInput = memo(
    ({
        avatarMedia,
        setAvatarMedia,
        isCropping,
        setIsCropping,
        currentAccount,
    }) => {
        const fileInputRef = useRef();
        const croppieRef = useRef(null);
        const [croppedImage, setCroppedImage] = useState(null);
        const [croppieInstance, setCroppieInstance] = useState(null);
        const [isDefaultAvatar, setIsDefaultAvatar] = useState(false);

        const handleFileUpload = () => {
            fileInputRef.current?.click();
        };

        const handleFileDelete = () => {
            setAvatarMedia('');
            setCroppedImage(null);
            setIsDefaultAvatar(true);
        };

        const getImageSource = () => {
            if (isDefaultAvatar) {
                return '/default_profile_200x200.png'; // Default image
            }
            if (croppedImage) {
                return croppedImage;
            }
            if (currentAccount?.avatar) {
                return currentAccount.avatar;
            }
            if (avatarMedia) {
                return URL.createObjectURL(avatarMedia);
            }
            return '/default_profile_200x200.png'; // Fallback to default image
        };

        const imageSource = getImageSource();

        useEffect(() => {
            if (avatarMedia && isCropping) {
                // Initialize Croppie only when media is selected and cropping mode is active
                const instance = new Croppie(croppieRef.current, {
                    viewport: { width: 200, height: 200, type: 'circle' },
                    boundary: { width: 400, height: 400 },
                    showZoomer: true,
                });

                instance.bind({
                    url: URL.createObjectURL(avatarMedia), // Bind the media URL for Croppie
                });

                setCroppieInstance(instance); // Store the Croppie instance in state

                // Cleanup Croppie instance when media changes or when component unmounts
                return () => {
                    if (instance) {
                        instance.destroy();
                        setCroppieInstance(null); // Clean up the state to avoid stale references
                    }
                };
            }
        }, [avatarMedia, isCropping]);

        const handleCroppingDone = useCallback(() => {
            if (croppieInstance) {
                croppieInstance
                    .result({ type: 'base64', size: 'viewport' })
                    .then((croppedImg) => {
                        // Convert base64 to Blob
                        const byteString = atob(croppedImg.split(',')[1]);
                        const mimeString = croppedImg
                            .split(',')[0]
                            .split(':')[1]
                            .split(';')[0];
                        const ab = new ArrayBuffer(byteString.length);
                        const ia = new Uint8Array(ab);
                        for (let i = 0; i < byteString.length; i++) {
                            ia[i] = byteString.charCodeAt(i);
                        }
                        const blob = new Blob([ab], { type: mimeString });

                        setCroppedImage(croppedImg); // Set the cropped image as state
                        setIsCropping(false); // Exit cropping mode
                        setAvatarMedia(blob); // Store cropped image as a Blob in the media state
                        setIsDefaultAvatar(false); // Reset default avatar state
                    })
                    .catch((err) => {
                        console.error('Error cropping image: ', err);
                    });
            }
        }, [croppieInstance, setIsCropping, setAvatarMedia]);

        return (
            <div
                className="relative z-20 flex items-center justify-center px-20"
                onSubmit={(e) => e.preventDefault()}
            >
                {!isCropping && (
                    <div className="absolute -top-10 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white max-md:-left-24 md:-left-50 xl:-top-20 xl:-left-95 xl:h-[150px] xl:w-[150px] 2xl:-top-25 2xl:-left-70 2xl:h-[180px] 2xl:w-[180px]">
                        <div className="absolute h-[116px] w-[116px] rounded-full bg-black xl:h-[146px] xl:w-[146px] 2xl:h-[176px] 2xl:w-[176px]"></div>
                        <img
                            src={imageSource}
                            alt="Cropped Avatar"
                            loading="eager"
                            className="box-content block h-[116px] w-[116px] rounded-full object-cover opacity-70 outline-2 -outline-offset-2 outline-black xl:h-[146px] xl:w-[146px] 2xl:h-[176px] 2xl:w-[176px]"
                        />
                    </div>
                )}

                {isCropping && (
                    <div className="relative flex items-center justify-center md:absolute">
                        <div ref={croppieRef}></div>
                        <Button
                            size="apply"
                            onClick={handleCroppingDone}
                            className="absolute bottom-0 z-10 w-12 bg-[#1d9bf0] hover:bg-[#1a8cd8] max-sm:right-40 max-sm:bottom-0"
                        >
                            Apply
                        </Button>
                    </div>
                )}

                {!isCropping && (
                    <AddAndDeleteIconsEditAvatar
                        handleFileUpload={handleFileUpload}
                        handleFileDelete={handleFileDelete}
                    />
                )}

                <label htmlFor="avatar-upload" className="hidden">
                    Upload Avatar
                </label>
                <input
                    ref={fileInputRef}
                    id="avatar-upload"
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    className="hidden"
                    onChange={(e) => {
                        setAvatarMedia(e.target.files[0]);
                        setIsCropping(true); // Activate cropping mode when a file is selected
                        setIsDefaultAvatar(false); // Reset default avatar state
                    }}
                />
            </div>
        );
    },
);

EditAvatarInput.displayName = 'EditAvatarInput';

export default EditAvatarInput;
