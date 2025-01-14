import { useLocation } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import Explore from '../pages/explore/Explore';
import Profile from '../pages/profile/Profile';
import HeaderPhotoModal from 'features/modals/components/HeaderPhotoModal';
import Notifications from '../pages/notifications/Notifications';
import Messages from 'pages/messages/Messages';
import Bookmarks from 'pages/bookmarks/Bookmarks';
import Lists from 'pages/lists/Lists';
import Jobs from 'pages/jobs/Jobs';
import Communities from 'pages/communities/Communities';
import Premium from 'pages/premium/Premium';
import PostStatus from 'components/posts/postStatus/PostStatus';
import PostModal from 'features/modals/components/PostModal';
import PhotoModal from 'features/modals/components/PhotoModal';
import EditProfileModal from 'features/modals/components/EditProfileModal';

export const MyRoutes = () => {
  const location = useLocation();
  const state = location.state;

  const routes = [
    {
      path: '/',
      element: <Layout />,
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
        { path: ':username', element: <Profile /> },
        { path: ':username/status/:postId', element: <PostStatus /> },
      ],
    },
  ];

  const modalRoutes = [
    {
      path: '/:username/header_photo',
      element: <HeaderPhotoModal />,
    },
    {
      path: 'compose/post',
      element: <PostModal />,
    },
    {
      path: '/:username/photo',
      element: <PhotoModal />,
    },
    {
      path: '/settings/profile',
      element: <EditProfileModal />,
    },
  ];

  return { routes, modalRoutes, state };
};
