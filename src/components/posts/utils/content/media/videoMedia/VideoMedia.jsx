const VideoMedia = ({ postVideo }) => {
    /*     const getYoutubeEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    }; */

    const getVideoUrl = (url) => {
        const fileId = url.split('=')[1]; // Extract file ID from Google Drive URL
        return `https://drive.google.com/file/d/${fileId}/preview`;
    };

    const vidArray = Array.isArray(postVideo) ? postVideo : [postVideo];

    return (
        <div className="h-full w-full">
            <div
                className={`${vidArray.length > 1 ? 'grid grid-cols-2 gap-0.5' : 'block'}`}
            >
                {vidArray.map((media, index) => {
                    const src = media.startsWith('data:image')
                        ? media // Use base64 data directly
                        : getVideoUrl(media); // Use Google Drive thumbnail

                    return (
                        <div
                            key={index}
                            className={`${vidArray.length > 1 ? 'relative w-full overflow-hidden pt-[70%]' : ''}`}
                        >
                            console.log(src);
                            <video
                                controls
                                className={`${vidArray.length > 1 ? 'absolute top-0 left-0 h-full w-full' : 'h-full w-full object-cover'}`}
                                src={src}
                            ></video>
                        </div>
                    );
                })}
                {/*                 <iframe
                    title="youtube"
                    width="515"
                    height="315"
                    src={getYoutubeEmbedUrl(postVideo)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe> */}
            </div>
        </div>
    );
};

export default VideoMedia;
