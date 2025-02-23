import { useState, useEffect } from 'react';

const VideoMedia = ({ postVideo }) => {
  const [mediaType, setMediaType] = useState('');

  useEffect(() => {
    if (postVideo) {
      if (typeof postVideo === 'string' && postVideo.startsWith('blob:')) {
        // It's a blob URL
        setMediaType('video');
      } else if (
        typeof postVideo === 'string' &&
        postVideo.includes('youtube.com')
      ) {
        // It's a YouTube link
        setMediaType('youtube');
      } else {
        setMediaType('');
      }
    }
  }, [postVideo]);

  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="h-full w-full">
      {mediaType === 'video' && (
        <video controls className="h-full w-full" src={postVideo}></video>
      )}
      {mediaType === 'youtube' && (
        <iframe
          title="youtube"
          width="515"
          height="315"
          src={getYoutubeEmbedUrl(postVideo)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoMedia;
