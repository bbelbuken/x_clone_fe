import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Notifications from '../pages/Notifications';
import Messages from 'pages/Messages';
import Layout from '../layout/Layout';
import Bookmarks from 'pages/Bookmarks';
import Lists from 'pages/Lists';
import Jobs from 'pages/Jobs';
import Communities from 'pages/Communities';
import Premium from 'pages/Premium';
import Profile from 'pages/Profile';

export const routes = [
  {
    path: '/',
    component: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'explore', element: <Explore /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'messages', element: <Messages /> },
      { path: 'lists', element: <Lists /> },
      { path: 'bookmarks', element: <Bookmarks /> },
      { path: 'jobs', element: <Jobs /> },
      { path: 'communities', element: <Communities /> },
      { path: 'premium', element: <Premium /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
];

export default routes;
