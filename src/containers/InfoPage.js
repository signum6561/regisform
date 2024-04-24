import { useState } from 'react';
import FormComponent from '../components/FormComponent';
import ResultComponent from '../components/ResultComponent';

const InfoPage = () => {
  const [data, setData] = useState('');
  return (
    <div>
      <FormComponent onSendData={(val) => setData(val)} />
      <ResultComponent value={data} />
    </div>
  );
};

export default InfoPage;
