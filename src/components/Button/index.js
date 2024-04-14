import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Button = ({ btnType, onClick, children, ...props }) => {
  const classes = cx('wrapper', btnType);
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
