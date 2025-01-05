import { useNavigate } from 'react-router-dom';

const GoBack = ({ account, postCount }) => {
  const navigate = useNavigate();

  const handleGetLocation = () => {
    const previousRoute = localStorage.getItem('previousRouteProfile');

    if (previousRoute) {
      navigate(previousRoute);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="sticky top-0 h-[53px] w-full cursor-pointer bg-black/65 px-4 backdrop-blur-md">
      <div className="flex h-full items-center justify-start">
        <div className="flex min-h-8 min-w-14 items-stretch justify-start">
          <button
            className="transition-colors-feed ml-[calc(-8px)] flex min-h-9 min-w-9 items-center justify-center rounded-full hover:bg-[#eff3f41a]"
            onClick={handleGetLocation}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </svg>
          </button>
        </div>

        <div className="mb-[1px] flex h-full flex-col items-start justify-center">
          <h2 className="min-w-0 max-w-full overflow-hidden whitespace-nowrap break-words py-0.5 text-xl font-bold leading-7 text-[#e7e9ea]">
            {account.fullname}
          </h2>
          <div className="max-w-full whitespace-nowrap break-words text-[13px] font-normal leading-4 text-[#71767b]">
            {`${postCount[account.id]} posts`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoBack;
