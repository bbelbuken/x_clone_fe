import { Link } from 'react-router-dom';

const ImgMedia = ({ postIMG }) => {
  return (
    <div className="h-full w-full">
      <Link className={'block'}>
        <img src={postIMG} alt="" />
      </Link>
    </div>
  );
};

export default ImgMedia;
