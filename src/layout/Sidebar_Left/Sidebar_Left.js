import Logo from '../../utils/leftsidebarutils/logo/Logo';
import { LeftSideBarUtils } from '../../utils/leftsidebarutils/LeftSideBarUtils';
import { NavLink } from 'react-router-dom';

const SidebarLeft = () => {
  return (
    <header className="min-h-screen w-[275px] px-2">
      <Logo />
      <div>
        {LeftSideBarUtils.map((menu, index) => (
          <NavLink className="flex gap-8">
            <p>{menu.icon.passive}</p>
            <p>{menu.title}</p>
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default SidebarLeft;
