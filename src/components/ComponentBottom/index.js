import classNames from 'classnames/bind';
import styles from './ComponentBottom.module.scss';

const cx = classNames.bind(styles);
const ComponentBottom = ({ value, ...props }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <p>Component_Bottom</p>
      </div>
      <div className={cx('textarea-container')}>
        <textarea value={value} placeholder='Result' />
      </div>
    </div>
  );
};

export default ComponentBottom;
