import Logo from './utils/logo/Logo';
import Menu from './utils/menu/Menu';
import MoreButton from 'layout/sidebarLeft/utils/morebutton/MoreButton';
import Button from 'components/buttons/Button';
import AccountButton from './utils/accountbutton/AccountButton';

const SidebarLeft = () => {
  return (
    <header className="flex h-screen w-[275px] px-2 font-arial">
      <div className="flex h-full w-full flex-auto flex-col items-stretch justify-between">
        <div className="flex flex-col">
          <Logo />
          <div className="mb-1 mt-0.5 flex flex-shrink flex-grow flex-col">
            <nav className="flex h-auto flex-shrink flex-grow flex-col">
              <Menu />
              <MoreButton />
              <div className="my-[22px] w-[90%]">
                <Button
                  className={'text-black'}
                  size={'large'}
                  to={'compose/post'}
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
