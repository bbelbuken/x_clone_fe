import React from 'react';

const VideoMedia = ({ videoUrl }) => {
    const getGoogleDriveEmbedUrl = (url) => {
        const fileId = url.split('/d/')[1].split('/')[0];
        return `https://drive.google.com/file/d/${fileId}/preview`;
    };

    return (
        <div className="h-full w-full">
            <iframe
                title="google-drive-video"
                width="515"
                height="315"
                src={getGoogleDriveEmbedUrl(
                    'https://drive.google.com/file/d/1erLZ0Nzz_QaTvBOukqzLEnz8laMXFbx8',
                )}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoMedia;
