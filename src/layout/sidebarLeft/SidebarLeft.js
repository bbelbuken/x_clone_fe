import Logo from './utils/logo/Logo';
import { LeftSideBarUtils } from './utils/SideBarLeftUtils';
import { NavLink } from 'react-router-dom';
import MoreButton from 'layout/sidebarLeft/utils/morebutton/MoreButton';
import Button from 'components/buttons/Button';
import AccountButton from './accountbutton/AccountButton';

const SidebarLeft = () => {
  return (
    <header className="flex h-screen w-[275px] px-2 font-arial">
      <div className="flex h-full w-full flex-auto flex-col items-stretch justify-between">
        <div className="flex flex-col">
          <Logo />
          <div className="mb-1 mt-0.5 flex flex-shrink flex-grow flex-col">
            <nav className="flex h-auto flex-shrink flex-grow flex-col">
              {LeftSideBarUtils.map((menu, index) => (
                <NavLink
                  key={index}
                  to={`${menu.path}`}
                  className="flex w-full flex-grow items-start py-[4px]"
                >
                  <div className="transition-colors-custom flex h-auto max-w-full flex-grow rounded-full p-3 hover:bg-[#e7e9ea1a]">
                    <div className="relative h-auto">
                      {menu.icon.passive}
                      {menu.notification && (
                        <div className="absolute -top-1 right-[1px] h-[7px] w-[7px] rounded-full border-0 bg-[#f91880]"></div>
                      )}
                    </div>
                    <div className="ml-5 mr-4 h-auto min-w-0 max-w-full overflow-hidden whitespace-nowrap break-words text-xl font-thin leading-tight tracking-wide text-inherit">
                      <h2 className="break-words text-inherit">{menu.title}</h2>
                    </div>
                  </div>
                </NavLink>
              ))}
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
