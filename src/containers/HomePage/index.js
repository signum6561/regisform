import { useState } from 'react';
import Body from '../../components/Body';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
  const [bodyType, setBodyType] = useState('');
  const changeBody = (e) => {
    setBodyType(e.target.value);
  };

  return (
    <div>
      <Header>Header</Header>
      <button onClick={changeBody} value='horizontal'>
        display way 1
      </button>
      <button onClick={changeBody} value='vertical'>
        display way 2
      </button>
      <button onClick={changeBody} value='vertical'>
        display way 3
      </button>
      <Body bodyType={bodyType} />
      <Footer>Footer</Footer>
    </div>
  );
};

export default HomePage;
