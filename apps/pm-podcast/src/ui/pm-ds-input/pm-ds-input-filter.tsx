import styles from './pm-ds-input-filter.module.scss';
import { PmDsInputFilterProps } from './pm-ds-input-filter.model';
import { ReactElement } from 'react';

export function PmDsInputFilter({totalResults, placeholder, onSearchChange}: PmDsInputFilterProps): ReactElement {
  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(evt.target.value);
  };
  return (
    <div className={styles['input-filter']} data-testid="pm-ds-input-filter-test-id">
      <span className={styles['input-filter__pill']}>{totalResults}</span>
      <input
        className={styles['input-filter__search-box']}
        placeholder={placeholder}
        type="text"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default PmDsInputFilter;
