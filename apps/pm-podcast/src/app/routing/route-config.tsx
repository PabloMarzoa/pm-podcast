import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { PodcastsGridPage } from '../pages/podcasts-grid/PodcastsGrid.page';
import { PodcastsLayout } from '../layouts/podcasts/Podcasts.layout';
import { RouteWrapper } from '../router/RouteWrapper';
import PodcastDetailsPage from '../pages/podcast-details/PodcastDetails.page';
import EpisodesListPage from '../pages/episodes-list/EpisodesList.page';
import EpisodePlayerPage from '../pages/episode-player/EpisodePlayer.page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RouteWrapper element={<PodcastsLayout />} />,
    children: [
      {
        path: '',
        element: <PodcastsGridPage />
      },
      {
        path: 'podcast/:podcastId',
        element: <PodcastDetailsPage />,
        children: [
          {
            path: '',
            element: <EpisodesListPage />
          },
          {
            path: 'episode/:episodeId',
            element: <EpisodePlayerPage />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

export default routes;
