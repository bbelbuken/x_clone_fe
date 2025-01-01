const VideoMedia = ({ postVideo }) => {
  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="h-full w-full">
      <div className={'block'}>
        <iframe
          title="youtube"
          width="515"
          height="315"
          src={getYoutubeEmbedUrl(postVideo)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoMedia;
