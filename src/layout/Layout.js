import { Outlet } from 'react-router-dom';
import SideBarLeft from './sidebarLeft/SidebarLeft';
import SideBarRight from './sidebarRight/SideBarRight';
import ModalManager from 'features/modal/ModalManager';

const Layout = () => {
  return (
    <>
      <ModalManager />
      <div className="mx-auto flex w-[1265px]">
        <SideBarLeft />
        <main className="flex flex-1 gap-[30px]">
          <div className="max-w-[600px] flex-1 gap-[30px] border-x border-x-[#2f3336]">
            <Outlet />
          </div>
          <SideBarRight />
        </main>
      </div>
    </>
  );
};

export default Layout;
