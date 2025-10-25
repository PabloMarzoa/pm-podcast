import { Outlet } from 'react-router-dom';
import styles from './Podcasts.layout.module.scss';
import { usePodcastsLoad } from '../../api/podcasts-load/usePodcastsLoad';
import { Loader, NoResults } from '@pm-ds-ui';

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
