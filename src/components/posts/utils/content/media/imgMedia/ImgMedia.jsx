const ImgMedia = ({ postIMG, postCachedIMG }) => {
    const getThumbnailUrl = (url) => {
        const fileId = url.split('=')[1];
        return `https://drive.google.com/thumbnail?id=${fileId}`;
    };

    const imgArray = Array.isArray(postIMG) ? postIMG : [postIMG];
    const mediaArray = postCachedIMG ? postCachedIMG : imgArray;

    return (
        <div className="h-full w-full">
            <div
                className={`${mediaArray.length > 1 ? 'grid grid-cols-2 gap-0.5' : 'block'}`}
            >
                {mediaArray.map((media, index) => {
                    const src = media.startsWith('data:image')
                        ? media // Use base64 data directly
                        : getThumbnailUrl(media); // Use Google Drive thumbnail

                    return (
                        <div
                            key={index}
                            className={`${mediaArray.length > 1 ? 'relative w-full overflow-hidden pt-[70%]' : ''}`}
                        >
                            <img
                                src={src}
                                alt={`Media ${index + 1}`}
                                className={`${mediaArray.length > 1 ? 'absolute top-0 left-0 h-full w-full' : 'h-full w-full object-cover'}`}
                                loading="lazy"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImgMedia;
