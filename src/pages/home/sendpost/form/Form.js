import { set } from 'date-fns';
import { useState, useEffect } from 'react';

const Form = ({ tweet, setTweet, media, modalRef }) => {
  const [mediaSize, setMediaSize] = useState({ width: null, height: null });
  const [mediaType, setMediaType] = useState(null);

  useEffect(() => {
    const resetMediaSize = () => setMediaSize({ width: null, height: null });
    let mediaElement;
    console.log(media);

    if (media) {
      const mediaExtension = media.name?.split('.').pop()?.toLowerCase();

      //IMG
      if (['jpeg', 'jpg', 'png', 'webp'].includes(mediaExtension)) {
        setMediaType('image');
        mediaElement = new Image();
        mediaElement.src = URL.createObjectURL(media);
        mediaElement.onload = () => {
          setMediaSize({
            width: mediaElement.naturalWidth + 'px',
            height: mediaElement.naturalHeight + 'px',
          });
        };
      }
      //VIDEO
      else if (['mp4', 'mov'].includes(mediaExtension)) {
        setMediaType('video');
        mediaElement = document.createElement('video');
        mediaElement.src = URL.createObjectURL(media);
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
  }, [media]);

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

      {media && (
        <div
          style={{ width: mediaSize.width, height: mediaSize.height }}
          className="transition-colors-feed mt-3 overflow-hidden rounded-2xl border border-[#2f3336] bg-cover bg-center bg-no-repeat"
        >
          {mediaType === 'image' && (
            <img
              src={URL.createObjectURL(media)}
              alt="Selected media"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          {mediaType === 'video' && (
            <video controls style={{ width: '100%', height: '100%' }}>
              <source
                src={URL.createObjectURL(media)}
                type={`video/${media.name.split('.').pop()}`}
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
