const ImgMedia = ({ postIMG }) => {
  return (
    <div className="h-full w-full">
      <div className={'block'}>
        <img src={postIMG} alt="" />
      </div>
    </div>
  );
};

export default ImgMedia;
