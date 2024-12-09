import { Outlet } from 'react-router-dom';
import SidebarLeft from './sidebarLeft/SidebarLeft';
import SidebarRight from './sidebarRight/SidebarRight';

const Layout = () => {
  return (
    <div className="mx-auto flex w-[1265px]">
      <SidebarLeft />
      <main className="flex flex-1 gap-[30px]">
        <div className="max-w-[600px] flex-1 gap-[30px] border-x border-x-[#2f3336]">
          <Outlet />
        </div>
        <SidebarRight />
      </main>
    </div>
  );
};

export default Layout;
