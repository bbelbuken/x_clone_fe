import { useState, useEffect } from 'react';

const Form = ({
    tweet,
    setTweet,
    media,
    mediaType,
    modalRef,
    replyClicked,
    isOnStatus,
}) => {
    const [mediaSize, setMediaSize] = useState({ width: null, height: null });

    useEffect(() => {
        const resetMediaSize = () =>
            setMediaSize({ width: null, height: null });

        let mediaElement;

        if (media && media.length > 0) {
            const file = media[0]; // Use the first file for sizing
            if (mediaType === 'image') {
                mediaElement = new Image();
                mediaElement.src = URL.createObjectURL(file);
                mediaElement.onload = () => {
                    setMediaSize({
                        width: mediaElement.naturalWidth + 'px',
                        height: mediaElement.naturalHeight + 'px',
                    });
                };
            } else if (mediaType === 'video') {
                mediaElement = document.createElement('video');
                mediaElement.src = URL.createObjectURL(file);
                mediaElement.onloadedmetadata = () => {
                    setMediaSize({
                        width: mediaElement.videoWidth + 'px',
                        height: mediaElement.videoHeight + 'px',
                    });
                };
            }
        }

        return () => {
            if (mediaElement) {
                mediaElement.onload = null;
                mediaElement.onloadedmetadata = null;
                URL.revokeObjectURL(mediaElement.src); // Cleanup object URL
            }
            resetMediaSize();
        };
    }, [media, mediaType]);

    const handleInputChange = (e) => {
        setTweet(e.target.value);
        autoResize(e.target);
    };

    const autoResize = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    return (
        <form className="relative w-full min-w-0 flex-1 flex-col items-center justify-start bg-none pt-3 text-[20px] font-normal tracking-[0.010em]">
            <label htmlFor="newPost" className="w-full">
                <textarea
                    autoFocus={modalRef ? true : false}
                    type="text"
                    id="newPost"
                    name="newPost"
                    placeholder={
                        !replyClicked && !isOnStatus
                            ? "What's happening?!"
                            : 'Post your reply'
                    }
                    value={tweet}
                    onChange={handleInputChange}
                    rows={`${modalRef ? 2 : 1}`}
                    className="max-h-[720px] min-h-6 w-full resize-none overflow-hidden border-none bg-transparent bg-none px-0.5 leading-6 placeholder-[#71767B] outline-none"
                />
            </label>

            {media && media.length > 0 && (
                <div
                    style={{
                        width: '100%',
                        height: media.length > 2 ? '280px' : 'auto',
                        maxWidth: mediaSize.width,
                        maxHeight: '30vh',
                    }}
                    className="transition-colors-feed mt-3 max-w-full overflow-hidden rounded-2xl border border-[#2f3336] bg-cover bg-center bg-no-repeat"
                >
                    <div
                        className={`${
                            media.length > 1
                                ? 'grid h-full grid-cols-2 gap-0.5'
                                : 'flex items-center justify-center'
                        } ${media.length > 2 ? 'grid-rows-2' : ''}`}
                    >
                        {media.map((file, index) => {
                            const isImage = file.type.startsWith('image');
                            const isVideo = file.type.startsWith('video');

                            return (
                                <div
                                    key={index}
                                    className={`${
                                        media.length > 1
                                            ? 'relative h-full w-full overflow-hidden'
                                            : 'flex h-full max-h-[30vh] w-full items-center justify-center'
                                    }`}
                                >
                                    {isImage ? (
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt="Selected media"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight:
                                                    media.length > 1
                                                        ? '100%'
                                                        : '20vh',
                                                objectFit: 'cover',
                                            }}
                                            className="h-full w-full"
                                        />
                                    ) : isVideo ? (
                                        <video
                                            controls
                                            className="h-full w-full object-cover"
                                        >
                                            <source
                                                src={URL.createObjectURL(file)}
                                                type={file.type}
                                            />
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </form>
    );
};

export default Form;
