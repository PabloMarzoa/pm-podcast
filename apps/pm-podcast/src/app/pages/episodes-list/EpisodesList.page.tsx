import { useGetEpisodesListSelector } from '@store';
import { useNavigate } from 'react-router-dom';
import { IEpisode } from '../../models/podcast/podcast.model';
import { DATE_FORMATS, TIME_FORMATS } from '../../utils';
import { PmDsTable, IPmDsTableConfig, BoxTitle } from '@pm-ds-ui';

export const tableConfig: IPmDsTableConfig<IEpisode> = {
  headersTemplateStyle: '1fr 80px 100px',
  headers: [
    {
      key: 'trackName',
      label: 'Title',
      customStyles: {
        display: 'flex',
        alignItems: 'center'
      },
    },
    {
      key: 'releaseDate',
      label: 'Date',
      format: DATE_FORMATS.DATE_LOCALE_STRING,
      customStyles: {
        display: 'flex',
        alignItems: 'center'
      },
    },
    {
      key: 'trackTimeMillis',
      label: 'Duration',
      customStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      format: TIME_FORMATS.HH_MM_SS
    }
  ],
  data: []
}

export const EpisodesListPage = ()=>{
  const navigate = useNavigate();
  const episodesList = useGetEpisodesListSelector();
  tableConfig.data = episodesList?.episodes ?? [];

  const handleRowClick = ({ trackId }: IEpisode) =>{
    console.log('Navigate to episode with id:', trackId);
    navigate(`episode/${trackId}`);
  }

  return (
    <>
      <BoxTitle title={`Episodes: ${episodesList?.resultCount}`}></BoxTitle>
      <PmDsTable<IEpisode> {...tableConfig} onRowClickHandler={(episode)=>{handleRowClick(episode)}}></PmDsTable>
    </>
  )
}

export default EpisodesListPage;
