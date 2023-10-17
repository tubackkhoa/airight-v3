import { createBrowserRouter, Navigate } from 'react-router-dom';

import PublicLayout from 'pages/layout/Public';

import { ROUTE_URL } from 'constant';
import Home from 'pages/home';

export const menuList = [
  {
    text: 'Create with AI',
    link: '/ai-model',
    key: 'ai-model',
  },
  {
    text: 'Gallery & Marketplace',
    link: '/marketplace',
    key: 'marketplace',
  },
  {
    text: 'Feed',
    link: '/feed',
    key: 'feed',
  },
  {
    text: 'Farming',
    link: '/farming',
    key: 'farming',
  },
];

const routes = [
  {
    path: ROUTE_URL.HOME,
    element: <PublicLayout />,
    children: [
      { path: '', element: <Home /> },
      // {
      //   path: '',
      //   element: <PrivateLayout />,
      //   children: [
      //     {
      //       path: ROUTE_URL.DASHBOARD,
      //       element: <DashboardPage />,
      //       // loader: DashboardLoader,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTE_URL.HOME} />,
  },
];

export const router = createBrowserRouter(routes, { basename: location.pathname.split('/')[1] });
