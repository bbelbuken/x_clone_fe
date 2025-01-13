import VerifiedSVG from 'components/svgs/VerifiedSVG';

const AccountInfo = ({ account }) => {
  const verified = account.verified;

  return (
    <div className="mb-3 mt-1 flex flex-col items-start justify-center">
      <div className="flex flex-col items-start justify-center">
        <span className="-mt-0.5 flex items-center justify-center break-words text-xl font-bold tracking-[0.030em]">
          {account.fullname}
          {verified && <VerifiedSVG height={20} width={20} />}
        </span>

        <span className="mb-0.5 flex items-center justify-center text-[15px] leading-[18px] tracking-[0.040em] text-[#71767b]">
          <div className="mt-[1px] text-[12px]">@</div>
          <div className="ml-[1px]">{account.username}</div>
        </span>
      </div>
    </div>
  );
};

export default AccountInfo;
