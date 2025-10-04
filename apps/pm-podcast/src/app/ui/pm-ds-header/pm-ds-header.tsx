import React, { ReactElement } from 'react';
import styles from './pm-ds-header.module.scss';
import { Pulse3Icon } from '../../../icons';

export function PmDsHeader({title, showIcon=false, titleClickHandler}: {title: string, showIcon?: boolean, titleClickHandler: ()=>void}): ReactElement {
  const onTitleClick = ()=>{
    titleClickHandler();
  }

  return (
    <div className={styles['header']}>
      <span className={styles['header__title']} onClick={onTitleClick}>{title}</span>
      {showIcon && <i className={styles['header__icon']}><Pulse3Icon /></i>}
    </div>
  );
}

export default PmDsHeader;
