import { useLocation } from 'react-router-dom';
import React from 'react';
import FollowList from 'pages/profile/followlist/FollowList';

const Layout = React.lazy(() => import('../layout/Layout'));
const Home = React.lazy(() => import('../pages/home/Home'));
const Explore = React.lazy(() => import('../pages/explore/Explore'));
const Profile = React.lazy(() => import('../pages/profile/Profile'));
const HeaderPhotoModal = React.lazy(
    () =>
        import('features/modals/components/headerphotomodal/HeaderPhotoModal'),
);
const Notifications = React.lazy(
    () => import('../pages/notifications/Notifications'),
);
const Messages = React.lazy(() => import('pages/messages/Messages'));
const Grok = React.lazy(() => import('pages/grok/Grok'));
const Bookmarks = React.lazy(() => import('pages/bookmarks/Bookmarks'));
const Lists = React.lazy(() => import('pages/lists/Lists'));
const Jobs = React.lazy(() => import('pages/jobs/Jobs'));
const Communities = React.lazy(() => import('pages/communities/Communities'));
const Premium = React.lazy(() => import('pages/premium/Premium'));
const PostStatus = React.lazy(
    () => import('components/posts/postStatus/PostStatus'),
);
const PostModal = React.lazy(
    () => import('features/modals/components/postmodal/PostModal'),
);

const ReplyModal = React.lazy(
    () => import('features/modals/components/replymodal/ReplyModal'),
);

const PhotoModal = React.lazy(
    () => import('features/modals/components/avatarmodal/PhotoModal'),
);
const EditProfileModal = React.lazy(
    () =>
        import('features/modals/components/editprofilemodal/EditProfileModal'),
);
const Welcome = React.lazy(() => import('pages/welcome/Welcome.jsx'));
const CreateAccountModal = React.lazy(
    () =>
        import(
            'features/modals/components/createaccountmodal/CreateAccountModal'
        ),
);

const SignInModal = React.lazy(
    () => import('features/modals/components/signinmodal/SignInModal'),
);

const LogOutModal = React.lazy(
    () => import('features/modals/components/logoutmodal/LogOutModal'),
);

const Organizations = React.lazy(
    () => import('pages/organizations/Organizations'),
);

export const MyRoutes = () => {
    const location = useLocation();
    const state = location.state;

    const routes = [
        { path: '/', element: <Welcome /> },
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: 'home', element: <Home /> },
                { path: 'explore', element: <Explore /> },
                { path: 'notifications', element: <Notifications /> },
                { path: 'messages', element: <Messages /> },
                { path: 'i/grok', element: <Grok /> },
                { path: 'lists', element: <Lists /> },
                { path: 'bookmarks', element: <Bookmarks /> },
                { path: 'communities', element: <Communities /> },
                { path: ':username/status/:postId', element: <PostStatus /> },
                { path: ':username', element: <Profile /> },
                { path: ':username/followlist', element: <FollowList /> },
            ],
        },
        { path: 'i/premium_sign_up', element: <Premium /> },
        { path: 'jobs', element: <Jobs /> },
        { path: 'i/organizations', element: <Organizations /> },
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
            path: 'post/:postId/reply',
            element: <ReplyModal />,
        },
        {
            path: '/:username/photo',
            element: <PhotoModal />,
        },
        {
            path: '/:userId/settings/profile',
            element: <EditProfileModal />,
        },
        {
            path: '/i/flow/signup',
            element: <CreateAccountModal />,
        },
        {
            path: '/i/flow/login',
            element: <SignInModal />,
        },
        {
            path: '/logout',
            element: <LogOutModal />,
        },
    ];

    return { routes, modalRoutes, state };
};
