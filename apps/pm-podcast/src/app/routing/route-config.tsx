import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { PodcastsGridPage } from '../pages/podcasts-grid/PodcastsGrid.page';
import { PodcastsLayout } from '../layouts/podcasts/Podcasts.layout';
import { RouteWrapper } from '../router/RouteWrapper';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RouteWrapper element={<PodcastsLayout />} />,
    children: [
      {
        path: '',
        element: <PodcastsGridPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

export default routes;
