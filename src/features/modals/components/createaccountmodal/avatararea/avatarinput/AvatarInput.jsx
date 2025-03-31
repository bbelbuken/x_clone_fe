import { useRef, useState, useEffect, memo, useCallback } from 'react';
import AddAndDeleteIcons from './addanddeleteicons/AddAndDeleteIcons';
import Croppie from 'croppie';
import Button from 'components/buttons/Button';

const AvatarInput = memo(({ media, setMedia, isCropping, setIsCropping }) => {
    const fileInputRef = useRef();
    const croppieRef = useRef(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [croppieInstance, setCroppieInstance] = useState(null); // Store Croppie instance

    const handleFileUpload = () => {
        fileInputRef.current?.click();
    };

    const handleFileDelete = () => {
        if (media) {
            setMedia(null);
            setCroppedImage(null); // Clear cropped image as well
        }
    };

    const preview = media
        ? URL.createObjectURL(media) // Create an object URL only when there's a file to display
        : '/default_profile_200x200.png';

    useEffect(() => {
        if (media && isCropping) {
            // Initialize Croppie only when media is selected and cropping mode is active
            const instance = new Croppie(croppieRef.current, {
                viewport: { width: 188, height: 188, type: 'circle' },
                boundary: { width: 400, height: 400 },
                showZoomer: true,
            });

            instance.bind({
                url: URL.createObjectURL(media), // Bind the media URL for Croppie
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
    }, [media, isCropping]);

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
                    setMedia(blob); // Store cropped image as a Blob in the media state
                })
                .catch((err) => {
                    console.error('Error cropping image: ', err);
                });
        }
    }, [croppieInstance, setIsCropping, setMedia]);

    return (
        <div
            className="relative flex h-full flex-1 items-center justify-center px-20 sm:mt-17.5"
            onSubmit={(e) => e.preventDefault()}
        >
            {!isCropping && (
                <div className="absolute flex h-[192px] w-[192px] items-center justify-center rounded-full bg-white sm:mt-66">
                    <div className="absolute h-[188px] w-[188px] rounded-full bg-black"></div>
                    <img
                        src={croppedImage || preview} // Use croppedImage or preview as the source
                        alt="Cropped Avatar"
                        loading="eager"
                        className="box-content block h-[188px] w-[188px] rounded-full object-cover opacity-70 outline-2 -outline-offset-2 outline-black"
                    />
                </div>
            )}

            {isCropping && (
                <div className="relative flex items-center justify-center md:absolute md:-top-17.5 md:right-25">
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
                <AddAndDeleteIcons
                    media={media}
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
                    setMedia(e.target.files[0]);
                    setIsCropping(true); // Activate cropping mode when a file is selected
                }}
            />
        </div>
    );
});

AvatarInput.displayName = 'AvatarInput';

export default AvatarInput;
