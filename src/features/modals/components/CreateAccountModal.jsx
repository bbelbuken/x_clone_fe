import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TwitterSVG } from 'components/icons/TwitterSVG';

const CreateAccountModal = () => {
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    const previousRoute = localStorage.getItem('previousRouteWelcomePage');
    navigate(previousRoute || '/');
  }, [navigate]);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c]"
      onClick={handleClickOutside}
    >
      <div className="absolute top-[24.5%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] rounded-2xl bg-black">
        <div className="sticky top-0 mx-auto flex h-auto w-full flex-col items-start justify-start px-4">
          <div className="flex min-h-8 min-w-[56px] items-center justify-center">
            <button
              type="button"
              onClick={handleClose}
              className="ml-[calc(-8px)] flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full transition-colors outline-none hover:bg-[#eff3f41a]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="#eff3f4"
                width={20}
                height={20}
                className=""
              >
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </svg>
            </button>
            <TwitterSVG className={'ml-60 h-[53px] w-8'} />
          </div>

          <div className="mx-20 flex h-full flex-1 flex-col">
            <div className="my-4">
              <h1 className="min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
                asd
              </h1>
            </div>
          </div>

          <div className="mx-20 flex h-full flex-1 flex-col">
            <div className="my-4">
              <h1 className="min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
                asd
              </h1>
            </div>
          </div>

          <div className="mx-20 flex h-full flex-1 flex-col">
            <div className="my-4">
              <h1 className="min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
                asd
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;
