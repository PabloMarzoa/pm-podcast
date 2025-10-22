import { Outlet } from 'react-router-dom';
import React from 'react';
import styles from './Podcasts.layout.module.scss';
import { usePodcastsLoad } from '../../api/podcasts-load/usePodcastsLoad';
import { Loader } from '../../../ui/loader/Loader';
import { NoResults } from '../../../ui/no-results/NoResults';

export const PodcastsLayout = ()=>{
  const {data, isFetching} = usePodcastsLoad();
  return isFetching ? (
    <Loader />
  ) : data ? (
    <div className={styles['podcasts-layout']}>
      <Outlet />
    </div>
  ) : <NoResults />;
}
