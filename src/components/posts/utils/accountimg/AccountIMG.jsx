import { useNavigate } from 'react-router-dom';

const AccountIMG = ({ account }) => {
  const navigate = useNavigate();

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/${account.username}`);
  };

  return (
    <div className="relative pb-2">
      <div className="mr-2 h-10 w-10 grow-0 basis-10">
        <img
          src={account.avatar}
          alt="user_avatar"
          width={40}
          height={40}
          className="cursor-pointer rounded-full"
          onClick={handleImageClick} // Handle click on the image only
        />
      </div>
    </div>
  );
};

export default AccountIMG;
