import { Outlet, useLocation } from 'react-router-dom';
import SideBarLeft from './sidebarLeft/SidebarLeft';
import SideBarRight from './sidebarRight/SideBarRight';
import ModalManager from 'features/modals/ModalManager';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <ModalManager />

      <div className="mx-auto flex w-[1265px]">
        <div className="sticky top-0 z-10 self-start">
          <SideBarLeft />
        </div>
        <main className="mx-auto flex flex-1 gap-[30px]">
          <div className="relative flex max-w-[600px] flex-1 gap-[30px] border-x border-x-[#2f3336]">
            <Outlet />
          </div>
          <div className="sticky top-0 self-start">
            <SideBarRight />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
