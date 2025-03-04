import ImgMedia from './imgMedia/ImgMedia';
import VideoMedia from './videoMedia/VideoMedia';
import { useEffect, useState } from 'react';

const Media = ({ postIMG, postVideo }) => {
    const [mediaSize, setMediaSize] = useState({ width: null, height: null });

    useEffect(() => {
        const resetMediaSize = () =>
            setMediaSize({ width: null, height: null });

        let mediaElement;

        if (postIMG) {
            mediaElement = new Image();
            mediaElement.src = postIMG;
            mediaElement.onload = () => {
                setMediaSize({
                    width: mediaElement.naturalWidth + 'px',
                    height: mediaElement.naturalHeight + 'px',
                });
            };
        } else if (postVideo) {
            mediaElement = document.createElement('video');
            mediaElement.src = postVideo;
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
        <div
            style={{
                width: '100%',
                height: 'auto',
                maxWidth: mediaSize.width,
                maxHeight: mediaSize.height,
            }}
            className={`${postIMG || postVideo ? 'transition-colors-feed mt-3 overflow-hidden rounded-2xl border border-[#2f3336] bg-cover bg-center bg-no-repeat' : ''}`}
        >
            {postIMG && (
                <ImgMedia
                    postIMG={postIMG}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            )}
            {postVideo && (
                <VideoMedia
                    postVideo={postVideo}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            )}
        </div>
    );
};

export default Media;
