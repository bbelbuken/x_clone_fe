import Logo from './utils/logo/Logo';
import Menu from './utils/menu/Menu';
import MoreButton from 'layout/sidebarLeft/utils/morebutton/MoreButton';
import Button from 'components/buttons/Button';
import AccountButton from './utils/accountbutton/AccountButton';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarLeft = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openPostModal = (e) => {
    e.preventDefault();
    const previousRoute = location.pathname;
    localStorage.setItem('previousRoute', previousRoute);
    navigate('compose/post', { state: { background: location } });
  };

  const handleSaveLocation = () => {
    const previousRouteProfile = location.pathname;
    localStorage.setItem('previousRouteProfile', previousRouteProfile);
  };

  return (
    <header className="font-arial flex h-screen w-[275px] px-2">
      <div className="flex h-full w-full flex-auto flex-col items-stretch justify-between">
        <div className="flex flex-col">
          <Logo />
          <div className="mt-0.5 mb-1 flex flex-shrink flex-grow flex-col">
            <nav className="flex h-auto flex-shrink flex-grow flex-col">
              <Menu handleSaveLocation={handleSaveLocation} />
              <MoreButton />
              <div className="my-[22px] w-[90%]">
                <Button
                  className={'cursor-pointer bg-[#eff3f4] text-black'}
                  size={'large'}
                  onClick={openPostModal}
                >
                  Post
                </Button>
              </div>
            </nav>
          </div>
        </div>

        <AccountButton />
      </div>
    </header>
  );
};

export default SidebarLeft;
