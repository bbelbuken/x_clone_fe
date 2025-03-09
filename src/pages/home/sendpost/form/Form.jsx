import { useState, useEffect } from 'react';

const Form = ({ tweet, setTweet, media, mediaType, modalRef }) => {
    const [mediaSize, setMediaSize] = useState({ width: null, height: null });

    useEffect(() => {
        const resetMediaSize = () =>
            setMediaSize({ width: null, height: null });
        let mediaElement;

        if (media && mediaType) {
            if (mediaType === 'image') {
                mediaElement = new Image();
                mediaElement.src = URL.createObjectURL(media[0]); // Use the first file
                mediaElement.onload = () => {
                    setMediaSize({
                        width: mediaElement.naturalWidth + 'px',
                        height: mediaElement.naturalHeight + 'px',
                    });
                };
            } else if (mediaType === 'video') {
                mediaElement = document.createElement('video');
                mediaElement.src = URL.createObjectURL(media[0]); // Use the first file
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
                    placeholder="What is happening?!"
                    value={tweet}
                    onChange={handleInputChange}
                    rows={`${modalRef ? 4 : 1}`}
                    className="max-h-[720px] min-h-6 w-full resize-none overflow-hidden border-none bg-transparent bg-none px-0.5 leading-6 placeholder-[#71767B] outline-none"
                />
            </label>

            {media && mediaType && (
                <div
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: mediaSize.width,
                        maxHeight: mediaSize.height,
                    }}
                    className="transition-colors-feed mt-3 max-h-auto max-w-full overflow-hidden rounded-2xl border border-[#2f3336] bg-cover bg-center bg-no-repeat"
                >
                    {mediaType === 'image' && (
                        <img
                            src={URL.createObjectURL(media[0])}
                            alt="Selected media"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    )}
                    {mediaType === 'video' && (
                        <video
                            controls
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        >
                            <source
                                src={URL.createObjectURL(media[0])}
                                type={`video/${media[0].name.split('.').pop()}`}
                            />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            )}
        </form>
    );
};

export default Form;
