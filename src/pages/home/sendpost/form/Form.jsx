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
                    placeholder={`${!replyClicked && !isOnStatus ? 'What is happening?!' : 'Post your reply'}`}
                    value={tweet}
                    onChange={handleInputChange}
                    rows={`${modalRef ? 4 : 1}`}
                    className="max-h-[720px] min-h-6 w-full resize-none overflow-hidden border-none bg-transparent bg-none px-0.5 leading-6 placeholder-[#71767B] outline-none"
                />
            </label>

            {media && media.length > 0 && (
                <div
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: mediaSize.width,
                        maxHeight: mediaSize.height,
                    }}
                    className="transition-colors-feed mt-3 max-h-auto max-w-full overflow-hidden rounded-2xl border border-[#2f3336] bg-cover bg-center bg-no-repeat"
                >
                    <div
                        className={`${media.length > 1 ? 'grid grid-cols-2 gap-0.5' : 'block'}`}
                    >
                        {media.map((file, index) => {
                            const isImage = file.type.startsWith('image');
                            const isVideo = file.type.startsWith('video');

                            return (
                                <div
                                    key={index}
                                    className={`${media.length > 1 ? 'relative w-full overflow-hidden pt-[70%]' : ''}`}
                                >
                                    {isImage ? (
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt="Selected media"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'cover',
                                            }}
                                            className={`${media.length > 1 ? 'absolute top-0 left-0 h-full w-full' : 'h-full w-full object-cover'}`}
                                        />
                                    ) : isVideo ? (
                                        <video
                                            controls
                                            className={`${media.length > 1 ? 'absolute top-0 left-0 h-full w-full object-cover' : 'h-full w-full object-cover'}`}
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
