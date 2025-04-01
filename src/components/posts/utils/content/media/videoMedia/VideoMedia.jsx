import React from 'react';

const VideoMedia = ({ postVideo }) => {
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
                        <video
                            key={index}
                            controls
                            className={`${
                                vidArray.length > 1
                                    ? 'absolute top-0 left-0 h-full w-full object-cover'
                                    : 'absolute top-0 right-0 h-full w-full object-center'
                            }`}
                            loading="lazy"
                            preload="metadata"
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoMedia;
