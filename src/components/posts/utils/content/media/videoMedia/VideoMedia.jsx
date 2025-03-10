import React from 'react';

const VideoMedia = ({ postVideo }) => {
    const getGoogleDriveEmbedUrl = (url) => {
        const fileId = url.split('=')[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
    };

    const vidArray = Array.isArray(postVideo) ? postVideo : [postVideo];

    return (
        <div className="h-full w-full">
            <div
                className={`${vidArray.length > 1 ? 'grid grid-cols-2 gap-0.5' : 'block'}`}
            >
                {vidArray.map((video, index) => (
                    <div
                        key={index}
                        className={`${vidArray.length > 1 ? 'relative w-full overflow-hidden pt-[70%]' : 'relative pt-[50%]'}`}
                    >
                        <iframe
                            key={index}
                            title="google-drive-video"
                            src={getGoogleDriveEmbedUrl(video)}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={`${vidArray.length > 1 ? 'absolute top-0 left-0 h-full w-full object-cover' : 'absolute top-0 right-0 h-full w-full object-fill'}`}
                            loading="lazy"
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoMedia;

/*     const getYoutubeEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    }; */

/*                 <iframe
                    title="youtube"
                    width="515"
                    height="315"
                    src={getYoutubeEmbedUrl(postVideo)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe */
