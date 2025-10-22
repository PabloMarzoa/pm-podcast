import {ReactNode} from 'react';
import {IPmDsTableConfig} from './pm-ds-table.model';
import styles from './pm-ds-table.module.scss';
import { pmDsUtilsFieldFormatter } from '../../app/utils';

export function PmDsTable<T>({headers, headersTemplateStyle, data, onRowClickHandler}: IPmDsTableConfig<T>) {
  const handleRowClick = (selectedItem: T)=>{
    if(onRowClickHandler){
      onRowClickHandler(selectedItem);
    }
  }
  return (
    <div className={styles['pm-ds-table']}>
      <div
        className={styles['pm-ds-table__header']}
        style={{gridTemplateColumns: `${headersTemplateStyle}`}}>
        {headers.map(({key, label, customStyles}) => (
          <div key={key} className={styles['pm-ds-table__header__cell']} style={customStyles}>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className={styles['pm-ds-table__body']}>
        {data.map((item, rowIdx) => (
          <div
            key={rowIdx}
            className={[
              styles['pm-ds-table__body__row'],
              `${rowIdx % 2 === 0 ? styles['pm-ds-table__body__row-even-idx'] : styles['']}`
            ]
              .filter(Boolean)
              .join(' ')}
            style={{gridTemplateColumns: `${headersTemplateStyle}`}}
            onClick={() => {handleRowClick(item)}}
          >
            {headers.map((header, columnIdx) => {
              const {key, format, customStyles} = header;
              const value = item[key as keyof T] as string | number;
              const finalValue = format ? pmDsUtilsFieldFormatter(value, format) : value;

              return (
                <div
                  key={key}
                  className={[
                    styles[`pm-ds-table__body__cell`],
                    `${columnIdx === 0 ? styles['pm-ds-table__body__first-column-idx'] : styles['']}`
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={customStyles}
                >
                  <span>{finalValue as ReactNode}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PmDsTable;
