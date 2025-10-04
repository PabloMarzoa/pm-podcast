import styles from './pm-ds-card.module.scss';
import { IPMDSCardProps } from './pm-ds-card.model';

export function PmDsCard({title, subTitle, imageUrl, description, onClickHandler}: IPMDSCardProps) {

  return (
    <div className={styles['card']}>
      <img className={styles['card__image']} src={imageUrl} alt="" onClick={onClickHandler}/>
      <div className={styles['card__body']} onClick={onClickHandler}>
        <span className={styles['card__body__title']}>{title}</span>
        <span className={styles['card__body__sub-title']}>By {subTitle}</span>
      </div>
      <div className={styles['card__footer']}>
        <span className={styles['card__footer__label']}>Description:</span>
        <span
          className={styles['card__footer__description']} dangerouslySetInnerHTML={{ __html: description }}></span>
    </div>
</div>
)
  ;
}

export default PmDsCard;
