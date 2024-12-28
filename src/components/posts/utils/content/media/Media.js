import ImgMedia from './imgMedia/ImgMedia';
import VideoMedia from './videoMedia/VideoMedia';

const Media = ({ postIMG, postVideo }) => {
  return (
    <>
      {postIMG && <ImgMedia postIMG={postIMG} />}
      {postVideo && <VideoMedia postVideo={postVideo} />}
    </>
  );
};

export default Media;
