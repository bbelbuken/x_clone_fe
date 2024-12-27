import { Link } from 'react-router-dom';

const AccountIMG = ({ account }) => {
  return (
    <Link to={`/${account.username}`} className="relative pb-2">
      <div className="mr-2 h-10 w-10 grow-0 basis-10">
        <img
          src={account.avatar}
          alt="user_avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </Link>
  );
};

export default AccountIMG;
