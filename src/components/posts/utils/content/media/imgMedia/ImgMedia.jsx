const ImgMedia = ({ postIMG }) => {
    const imgArray = Array.isArray(postIMG) ? postIMG : [postIMG];

    return (
        <div className="h-full max-h-[300px] w-full sm:max-h-[400px] md:max-h-[450px] lg:max-h-[510px]">
            <div
                className={`${imgArray.length > 1 ? 'grid grid-cols-2 gap-0.5' : 'block'}`}
            >
                {imgArray.map((media, index) => {
                    return (
                        <div
                            key={index}
                            className={`${
                                imgArray.length > 1
                                    ? 'relative w-full overflow-hidden pt-[70%]'
                                    : 'max-h-[300px] overflow-hidden sm:max-h-[400px] md:max-h-[450px] lg:max-h-[510px]'
                            }`}
                        >
                            <img
                                src={media}
                                alt={`Media ${index + 1}`}
                                className={`${
                                    imgArray.length > 1
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
