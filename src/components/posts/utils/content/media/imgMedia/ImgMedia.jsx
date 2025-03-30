const ImgMedia = ({ postIMG, postCachedIMG }) => {
    const getThumbnailUrl = (url) => {
        if (typeof url === 'string' && url.includes('/d/')) {
            const fileId = url.split('/d/')[1].split('/')[0];
            return `https://lh3.googleusercontent.com/d/${fileId}`;
        }
        return url;
    };

    const imgArray = Array.isArray(postIMG) ? postIMG : [postIMG];
    const mediaArray = postCachedIMG ? postCachedIMG : imgArray;

    return (
        <div className="h-full max-h-[300px] w-full sm:max-h-[400px] md:max-h-[450px] lg:max-h-[510px]">
            <div
                className={`${mediaArray.length > 1 ? 'grid grid-cols-2 gap-0.5' : 'block'}`}
            >
                {mediaArray.map((media, index) => {
                    const src =
                        typeof media === 'string' &&
                        media.startsWith('data:image')
                            ? media
                            : getThumbnailUrl(media);

                    return (
                        <div
                            key={index}
                            className={`${
                                mediaArray.length > 1
                                    ? 'relative w-full overflow-hidden pt-[70%]'
                                    : 'max-h-[300px] overflow-hidden sm:max-h-[400px] md:max-h-[450px] lg:max-h-[510px]'
                            }`}
                        >
                            <img
                                src={src}
                                alt={`Media ${index + 1}`}
                                className={`${
                                    mediaArray.length > 1
                                        ? 'absolute top-0 left-0 h-full w-full object-cover'
                                        : 'h-full max-h-[300px] w-full object-cover sm:max-h-[400px] md:max-h-[450px] lg:max-h-[510px]'
                                }`}
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
