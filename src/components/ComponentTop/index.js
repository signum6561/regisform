import classNames from 'classnames/bind';
import styles from './ComponentTop.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
const ComponentTop = ({ onSendData, ...props }) => {
  const [data, setData] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onSendData(data);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <p>Component_Top</p>
      </div>
      <form className={cx('input-container')} onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Input something here'
          onChange={(e) => setData(e.target.value)}
          required
        />
        <button type='submit'>Send Data</button>
      </form>
    </div>
  );
};

export default ComponentTop;
