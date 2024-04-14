import styles from './OptionList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const OptionList = ({
  name,
  title,
  onChange,
  selectedOptions,
  options,
  ...props
}) => {
  return (
    <div>
      <label for={name} className={cx('title')}>
        {title}
      </label>
      <div className={cx('options')}>
        {options.map((option) => {
          return (
            <label key={option} className={cx('checkbox')}>
              <input
                id={name}
                name={name}
                onChange={onChange}
                value={option}
                checked={selectedOptions.includes(option)}
                type='checkbox'
                {...props}
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default OptionList;
