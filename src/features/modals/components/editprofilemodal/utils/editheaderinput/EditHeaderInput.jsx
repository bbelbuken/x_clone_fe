import { useRef, useState, useEffect, memo, useCallback } from 'react';
import Croppie from 'croppie';
import Button from 'components/buttons/Button';
import AddAndDeleteIconsEditHeader from '../editavatarinput/addanddeleteiconseditmodal/AddAndDeleteIconsEditHeader';

const EditHeaderInput = ({
    currentAccount,
    headerMedia,
    setHeaderMedia,
    isCroppingHeader,
    setIsCroppingHeader,
}) => {
    const fileInputRef = useRef();
    const croppieRef = useRef(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [croppieInstance, setCroppieInstance] = useState(null);

    const getGoogleDriveDirectImageUrl = (url) => {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const fileId = urlParams.get('id');
        return `https://lh3.googleusercontent.com/d/${fileId}`; // Direct image URL
    };

    const handleFileUpload = () => {
        fileInputRef.current?.click();
    };

    const handleFileDelete = () => {
        if (headerMedia) {
            setHeaderMedia(null);
            setCroppedImage(null);
        }
        if (currentAccount?.cachedHeader) {
            console.log('Deleting cachedHeader...');
            currentAccount.cachedHeader = null;
        }
    };

    const getImageSource = () => {
        if (croppedImage) {
            return croppedImage;
        }
        if (currentAccount?.cachedHeader) {
            return currentAccount.cachedHeader;
        }
        if (headerMedia) {
            return URL.createObjectURL(headerMedia);
        }
        if (currentAccount?.header_photo) {
            return getGoogleDriveDirectImageUrl(currentAccount.header_photo);
        }
        return '/default_header.jpg';
    };

    const headerImageSource = getImageSource();

    useEffect(() => {
        if (headerMedia && isCroppingHeader) {
            // Initialize Croppie only when media is selected and cropping mode is active
            const instance = new Croppie(croppieRef.current, {
                viewport: { width: 600, height: 200, type: 'square' }, // Adjust viewport for header
                boundary: { width: 600, height: 200 }, // Adjust boundary for header
                showZoomer: true,
            });

            instance.bind({
                url: URL.createObjectURL(headerMedia), // Bind the media URL for Croppie
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
    }, [headerMedia, isCroppingHeader]);

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
                    setIsCroppingHeader(false); // Exit cropping mode
                    setHeaderMedia(blob); // Store cropped image as a Blob in the media state
                })
                .catch((err) => {
                    console.error('Error cropping image: ', err);
                });
        }
    }, [croppieInstance, setIsCroppingHeader, setHeaderMedia]);

    return (
        <div
            className={`${isCroppingHeader ? 'z-50' : 'z-10'} relative w-full pb-[33.3344%]`}
            onSubmit={(e) => e.preventDefault()}
        >
            {/* Always show the header image */}
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full transition-colors">
                <img
                    src={headerImageSource}
                    alt="header_photo"
                    className="h-full w-full object-cover"
                    loading="eager"
                />
            </div>

            {/* Show Croppie and Apply button when cropping */}
            {isCroppingHeader && (
                <div
                    className={`${isCroppingHeader ? 'absolute top-0 -left-0 z-50' : 'absolute -top-20 left-[99999px] z-50'}`}
                >
                    <div ref={croppieRef}></div>
                    <Button
                        size="apply"
                        onClick={handleCroppingDone}
                        className="fixed top-66 right-87 w-12 bg-[#1d9bf0] hover:bg-[#1a8cd8]"
                    >
                        Apply
                    </Button>
                </div>
            )}

            {/* Show Add/Delete icons when not cropping */}
            {!isCroppingHeader && (
                <AddAndDeleteIconsEditHeader
                    handleFileUpload={handleFileUpload}
                    handleFileDelete={handleFileDelete}
                    headerImageSource={headerImageSource}
                />
            )}

            {/* Hidden file input for uploading */}
            <label htmlFor="header-upload" className="hidden">
                Upload Header
            </label>
            <input
                ref={fileInputRef}
                id="header-upload"
                type="file"
                accept="image/jpeg, image/png, image/webp"
                className="hidden"
                onChange={(e) => {
                    setHeaderMedia(e.target.files[0]);
                    setIsCroppingHeader(true); // Activate cropping mode when a file is selected
                }}
            />
        </div>
    );
};

export default EditHeaderInput;
