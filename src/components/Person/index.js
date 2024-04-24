import styles from './Person.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Person = (props) => {
  return (
    <div className={cx('wrapper')}>
      <h2>FullName: {props.fullName}</h2>
      <p>Age: {props.age}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
