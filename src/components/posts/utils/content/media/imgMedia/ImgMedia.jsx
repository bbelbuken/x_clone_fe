const ImgMedia = ({ postIMG, postCachedIMG }) => {
    const getThumbnailUrl = (url) => {
        const fileId = url.split('=')[1];
        return `https://drive.google.com/thumbnail?id=${fileId}`;
    };

    const imgArray = Array.isArray(postIMG) ? postIMG : [postIMG];
    const mediaArray = postCachedIMG ? postCachedIMG : imgArray;

    return (
        <div className="h-full w-full">
            <div className={'block'}>
                {mediaArray.map((media, index) => {
                    const src = media.startsWith('data:image')
                        ? media // Use base64 data directly
                        : getThumbnailUrl(media); // Use Google Drive thumbnail

                    return (
                        <img
                            key={index}
                            src={src}
                            alt={`Media ${index + 1}`}
                            className="h-auto w-full object-cover"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ImgMedia;
