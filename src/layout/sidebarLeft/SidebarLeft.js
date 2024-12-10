import Logo from './utils/logo/Logo';
import { LeftSideBarUtils } from './utils/SideBarLeftUtils';
import { NavLink } from 'react-router-dom';
import MoreButton from 'layout/sidebarLeft/utils/morebutton/MoreButton';
import PostButton from './utils/postbutton/PostButton';

const SidebarLeft = () => {
  return (
    <header className="flex min-h-screen w-[275px] px-2 font-arial">
      <div className="h-full w-full items-stretch">
        <Logo />
        <div className="mb-1 mt-0.5">
          <nav className="items-end">
            {LeftSideBarUtils.map((menu, index) => (
              <NavLink
                key={index}
                to={`${menu.path}`}
                className="flex w-full items-start py-[4px]"
              >
                <div className="transition-colors-custom flex max-w-full rounded-full p-3 hover:bg-[#e7e9ea1a]">
                  <div className="relative">
                    {menu.icon.passive}
                    <div className="absolute -top-1 right-[1px] h-[7px] w-[7px] rounded-full border-0 bg-[#f91880]"></div>
                  </div>

                  <div className="ml-5 mr-4 min-w-0 max-w-full overflow-hidden whitespace-nowrap break-words text-xl font-thin leading-tight tracking-wide text-inherit">
                    <h2 className="break-words text-inherit">{menu.title}</h2>
                  </div>
                </div>
              </NavLink>
            ))}

            <MoreButton className="flex w-full items-start py-[4px]" />
            <PostButton />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SidebarLeft;
<div className="flex h-2 w-2 rounded-full bg-[#3b90f3]"></div>;
