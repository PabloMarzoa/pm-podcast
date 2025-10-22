import { IPodcast } from '../../models/podcast/podcast.model';
import { api } from '../api';
const {VITE_ITUNES_API_DOMAIN, VITE_PODCAST_LOAD_API_CONTEXT} = import.meta.env;

export const podcastsLoadQuery = async (): Promise<IPodcast[]>=> {

  console.log('test API GET Request to:', `${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_LOAD_API_CONTEXT}`);
  const response = await api.get(`${VITE_ITUNES_API_DOMAIN}${VITE_PODCAST_LOAD_API_CONTEXT}/limit=100/genre=1310/json`, true);

  if (!response.ok) {
    throw new Error('Error fetching podcasts-grid from Itunes');
  }

  const { contents } = await response.json();
  const { entry } = JSON.parse(contents.replaceAll("im:", "")).feed;
  return entry;
}
