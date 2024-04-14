import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Input = ({ name, title, inputType, value, onChange, ...props }) => {
  return (
    <div className={cx('wrapper')}>
      <label for={name}>{title}</label>
      <input
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
