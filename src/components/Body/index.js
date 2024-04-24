import styles from './Body.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Body = ({ bodyType = 'horizontal', ...props }) => {
  const bodyStyle = cx(bodyType);
  const colStyle = cx('col');
  return (
    <div className={bodyStyle}>
      <div className={colStyle}>Column</div>
      <div className={colStyle}>Column</div>
      <div className={colStyle}>Column</div>
    </div>
  );
};

export default Body;
