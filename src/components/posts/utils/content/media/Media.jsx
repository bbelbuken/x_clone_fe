import ImgMedia from './imgMedia/ImgMedia';
import VideoMedia from './videoMedia/VideoMedia';
import { useEffect, useState } from 'react';

const Media = ({ postIMG, postVideo }) => {
    const [mediaSize, setMediaSize] = useState({ width: null, height: null });

    useEffect(() => {
        const resetMediaSize = () =>
            setMediaSize({ width: null, height: null });

        let mediaElement;

        // Normalize postIMG to an array
        const imgArray = Array.isArray(postIMG) ? postIMG : [postIMG];
        const vidArray = Array.isArray(postVideo) ? postVideo : [postVideo];

        if (imgArray.length > 0 && !imgArray === '') {
            mediaElement = new Image();
            mediaElement.src = imgArray[0]; // Use the first image for sizing
            mediaElement.onload = () => {
                setMediaSize({
                    width: mediaElement.naturalWidth + 'px',
                    height: mediaElement.naturalHeight + 'px',
                });
            };
        } else if (vidArray.length > 0 && !vidArray === '') {
            mediaElement = document.createElement('video');
            mediaElement.src = vidArray[0];
            mediaElement.onloadedmetadata = () => {
                setMediaSize({
                    width: mediaElement.videoWidth + 'px',
                    height: mediaElement.videoHeight + 'px',
                });
            };
        }

        return () => {
            if (mediaElement) {
                mediaElement.onload = null;
                mediaElement.onloadedmetadata = null;
            }
            resetMediaSize();
        };
    }, [postIMG, postVideo]);

    return (
        <div className="w-full">
            {postIMG.length !== 0 && postIMG.length !== 0 && (
                <div
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: mediaSize.width,
                        maxHeight: mediaSize.height,
                    }}
                    className={`${postIMG.length !== 0 || postVideo.length !== 0 ? 'transition-colors-feed mt-3 overflow-hidden rounded-2xl border border-[#2f3336] bg-cover bg-center bg-no-repeat' : 'hidden'}`}
                >
                    <div className="w-full overflow-hidden">
                        {postIMG.length !== 0 && (
                            <ImgMedia
                                postIMG={postIMG}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }}
                            />
                        )}

                        {postVideo.length !== 0 && (
                            <VideoMedia
                                postVideo={postVideo}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }}
                            />
                        )}
                    </div>
                </div>
            )}

            {postIMG.length === 0 && (
                <div
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: mediaSize.width,
                        maxHeight: mediaSize.height,
                    }}
                    className={`${postIMG.length !== 0 || postVideo.length !== 0 ? 'transition-colors-feed mt-3 overflow-hidden rounded-2xl border border-[#2f3336] bg-cover bg-center bg-no-repeat' : 'hidden'}`}
                >
                    <div className="w-full overflow-hidden">
                        {postVideo && postIMG.length === 0 && (
                            <VideoMedia
                                postVideo={postVideo}
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;
