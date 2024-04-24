import { useState } from 'react';

const SearchBar = () => {
  const [message, setMessage] = useState('');
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const alterMessage = () => {
    if (message) {
      alert(`${message}`);
    } else {
      alert('Bạn phải nhập vào');
    }
  };
  return (
    <div>
      <input
        id='searchBar'
        type='text'
        placeholder='Enter the Text'
        value={message}
        onChange={handleMessage}
        required
      />
      <button onClick={alterMessage}>Button</button>
    </div>
  );
};

export default SearchBar;
