import { useNavigate } from 'react-router-dom';

const RepostedBy = ({ account }) => {
  const navigate = useNavigate();
  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/${account.username}`);
  };

  return (
    <div className="mt-[7px] flex grow items-center justify-center gap-2">
      <div className="justify-centers flex basis-10 -translate-y-[1px] items-center justify-end">
        <svg viewBox="0 0 24 24" fill="#71767b" width={16} height={16}>
          <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"></path>
        </svg>
      </div>
      <div className="flex flex-1 items-center justify-start text-[13px] font-bold text-[#71767b]">
        <div onClick={handleImageClick} className="">
          <span className="hover:underline">{account.username} reposted</span>
        </div>
      </div>
    </div>
  );
};

export default RepostedBy;
