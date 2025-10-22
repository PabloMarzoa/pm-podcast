import { Routes } from 'react-router-dom';
import { renderRoutes } from './router/router.utils';
import routes from './routing/route-config';
import { PodcastStoreProvider } from '../store/podcasts/podcasts.store';
import { PmDsHeader } from '@pm-ds-ui';

export function App() {
    return (
        <div>
            <PmDsHeader title="PM Podcast" titleClickHandler={()=>{ /* empty */ }}/>

            <PodcastStoreProvider>
                <Routes>{renderRoutes(routes)}</Routes>
            </PodcastStoreProvider>
        </div>
    );
}

export default App;
