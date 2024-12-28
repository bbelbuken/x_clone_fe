import { Link } from 'react-router-dom';

const ImgMedia = ({ postIMG }) => {
  return (
    <div className="mt-3 h-full w-full rounded-2xl">
      <Link className={'block'}>
        <img src={postIMG} alt="" />
      </Link>
    </div>
  );
};

export default ImgMedia;
