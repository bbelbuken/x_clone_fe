import Logo from './utils/logo/Logo';
import { LeftSideBarUtils } from './utils/LeftSideBarUtils';
import { NavLink } from 'react-router-dom';
import MoreButton from 'layout/sidebarLeft/utils/morebutton/MoreButton';

const SidebarLeft = () => {
  return (
    <header className="flex min-h-screen w-[275px] px-2">
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
                <div className="transition-colors-custom flex max-w-full rounded-full p-3 hover:bg-[#8b82754d]">
                  <div>{menu.icon.passive}</div>

                  <div className="ml-5 mr-4 min-w-0 max-w-full overflow-hidden whitespace-nowrap break-words text-xl font-thin leading-tight tracking-wide text-inherit">
                    <span className="break-words text-inherit">
                      {menu.title}
                    </span>
                  </div>
                </div>
              </NavLink>
            ))}

            <MoreButton className="flex w-full items-start py-[4px]" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SidebarLeft;
<div className="flex h-2 w-2 rounded-full bg-[#3b90f3]"></div>;
