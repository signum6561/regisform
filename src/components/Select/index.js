import styles from './Select.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Select = ({
  name,
  placeholder,
  title,
  value,
  onChange,
  options,
  ...props
}) => {
  return (
    <div className={cx('wrapper')}>
      <label for={name}> {title} </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        className='form-control'
      >
        <option value='' disabled>
          {placeholder}
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
