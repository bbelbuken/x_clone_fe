import { Link } from 'react-router-dom';

const VideoMedia = ({ postVideo }) => {
  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="h-full w-full">
      <Link className={'block'}>
        <iframe
          title="youtube"
          width="515"
          height="315"
          src={getYoutubeEmbedUrl(postVideo)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Link>
    </div>
  );
};

export default VideoMedia;
