import { useState } from 'react';
import ComponentBottom from '../../components/ComponentBottom';
import ComponentTop from '../../components/ComponentTop';
import styles from './FormPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const FormPage = () => {
  const [data, setData] = useState('');
  return (
    <div className={cx('wrapper')}>
      <ComponentTop onSendData={(val) => setData(val)} />
      <ComponentBottom value={data} />
    </div>
  );
};

export default FormPage;
