import { TTimeFormats } from 'libs/utils/src';

export type TColumnFormats =
  | TTimeFormats
  | 'localeDateString'
  | 'toDateString'
  | 'localeTimeString';

export interface IPmDsHeader {
  label: string;
  key: string;
  customStyles?: Record<string, string>;
  format?: TColumnFormats;
}

export interface IPmDsTableConfig<T>{
  headersTemplateStyle: string;
  headers: IPmDsHeader[];
  data: T[];
  onRowClickHandler?: (item:T)=>void;
}
