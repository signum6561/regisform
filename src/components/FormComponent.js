import { useState } from 'react';

const FormComponent = ({ onSendData, ...props }) => {
  const [data, setData] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onSendData(data);
  };
  return (
    <form onSubmit={onSubmit}>
      <span>Name</span>
      <input type='text' onChange={(e) => setData(e.target.value)} required />
    </form>
  );
};

export default FormComponent;
