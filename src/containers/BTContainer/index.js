import Person from '../../components/Person';
import styles from './PersonList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const PersonList = () => {
  return (
    <div className={cx('wrapper')}>
      <Person fullName={'Nguyen Van A'} age={21}>
        Slogan
      </Person>
      <Person fullName={'Phan Ngoc Thoai'} age={21}>
        Slogan
      </Person>
      <Person fullName={'Nguyen Nhat Hao'} age={21} />
    </div>
  );
};

export default PersonList;
