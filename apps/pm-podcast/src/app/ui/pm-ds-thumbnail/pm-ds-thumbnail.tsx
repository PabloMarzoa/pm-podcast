import styles from './pm-ds-thumbnail.module.scss';
import { IPmDsThumbnailProps } from './pm-ds-thumbnail.model';
import { ReactElement } from 'react';

export const PmDsThumbnail = ({imgUrl, title, subTitle, onThumbnailClick}: IPmDsThumbnailProps): ReactElement => {
  const handleOnClick = () => {
    onThumbnailClick();
  };
  return (
    <div className={styles['pm-ds-thumbnail']} onClick={handleOnClick}>
      <img className={styles['pm-ds-thumbnail__img']} src={imgUrl} alt="" />
      <span className={styles['pm-ds-thumbnail__title']}>{title}</span>
      <span className={styles['pm-ds-thumbnail__sub-title']}>{subTitle}</span>
    </div>
  );
}

export default PmDsThumbnail;
