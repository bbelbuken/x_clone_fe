import { useRef, useState, useEffect, useCallback } from 'react';
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
    const [isDefaultHeader, setIsDefaultHeader] = useState(false);
    const [isXLScreen, setIsXLScreen] = useState(false);

    const handleFileUpload = () => {
        fileInputRef.current?.click();
    };

    const handleFileDelete = () => {
        setHeaderMedia('');
        setCroppedImage(null);
        setIsDefaultHeader(true);
    };

    const getImageSource = () => {
        if (isDefaultHeader) {
            return '/default_header.jpg'; // Default image
        }
        if (croppedImage) {
            return croppedImage;
        }
        if (currentAccount?.header_photo) {
            return currentAccount.header_photo;
        }
        if (headerMedia) {
            return URL.createObjectURL(headerMedia);
        }
        return '/default_header.jpg';
    };

    const headerImageSource = getImageSource();

    useEffect(() => {
        const handleResize = () => {
            setIsXLScreen(window.innerWidth >= 1280); // xl breakpoint is typically 1280px
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (headerMedia && isCroppingHeader) {
            const viewportSize = isXLScreen
                ? { width: 1200, height: 400 }
                : { width: 600, height: 200 };

            const boundarySize = isXLScreen
                ? { width: 1200, height: 400 }
                : { width: 600, height: 200 };

            const instance = new Croppie(croppieRef.current, {
                viewport: { ...viewportSize, type: 'square' },
                boundary: boundarySize,
                showZoomer: true,
            });

            instance.bind({
                url: URL.createObjectURL(headerMedia),
            });

            setCroppieInstance(instance);

            return () => {
                if (instance) {
                    instance.destroy();
                    setCroppieInstance(null);
                }
            };
        }
    }, [headerMedia, isCroppingHeader, isXLScreen]);

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
                        size="apply-header"
                        onClick={handleCroppingDone}
                        className="w-12 bg-[#1d9bf0] hover:bg-[#1a8cd8] md:fixed md:top-66 md:right-88.5 2xl:top-17 2xl:right-148"
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
