import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpTopArea from './signuptoparea/SignUpTopArea';
import FormArea from './formarea/FormArea';

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
      <div className="absolute top-[24.5%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] flex-col rounded-2xl bg-black">
        <SignUpTopArea handleClose={handleClose} />

        <div className="mt-[5px] flex h-full flex-1 flex-col px-20">
          <div className="my-4">
            <h1 className="min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
              Create your account
            </h1>
          </div>
        </div>

        <FormArea />
      </div>
    </div>
  );
};

export default CreateAccountModal;
