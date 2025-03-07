import React from 'react';

const Messages = () => {
    const getGoogleDriveDirectImageUrl = (url) => {
        const fileId = url.split('/d/')[1].split('/')[0]; // Extract file ID
        return `https://lh3.googleusercontent.com/d/${fileId}`; // Direct image URL
    };

    const url =
        'https://drive.google.com/file/d/1S3C1x_iPDPHway1USWdg0Gnk4hA5ny1n/view?usp=drive_link';

    return (
        <div className="h-full w-full">
            <img
                src={getGoogleDriveDirectImageUrl(url)}
                alt="Google Drive Image"
                className="absolute top-0 mt-20 h-120 w-full"
                loading="lazy"
            />
        </div>
    );
};

export default Messages;
