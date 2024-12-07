import Home from '../pages/home/Home';
import Explore from '../pages/explore/Explore';
import Notifications from '../pages/notifications/Notifications';
import Layout from '../layout/Layout';

export const routes = [
  {
    path: '/',
    component: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
    ],
  },
];

export default routes;
