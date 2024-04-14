import { useState } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import OptionList from '../../components/OptionList';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [aboutYou, setAboutYou] = useState('');
  const [selectedSkill, setSelectedSkill] = useState([]);

  const genderOptions = ['Male', 'Female', 'Others'];
  const skillOptions = ['Programming', 'Development', 'Design', 'Testing'];

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleAboutYou = (event) => {
    setAboutYou(event.target.value);
  };

  const handleSubmit = () => {
    alert(`
        FullName: ${fullName} 
        Age: ${age}  
        Gender: ${gender} 
        Skill: ${selectedSkill} 
        About you: ${aboutYou}
    `);
  };

  const handleClear = () => {
    setFullName('');
    setAge('');
    setGender('');
    setSelectedSkill([]);
    setAboutYou('');
  };

  const handleSkill = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedSkill([...selectedSkill, value]);
    } else {
      setSelectedSkill(selectedSkill.filter((skill) => skill !== value));
    }
  };

  return (
    <form id='sample-form' onSubmit={handleSubmit}>
      <h1>Sample Form Container</h1>
      <Input
        inputType={'text'}
        title={'Full Name'}
        name={'name'}
        value={fullName}
        placeholder={'Enter your name'}
        onChange={handleFullName}
        required
      />
      <Input
        inputType={'number'}
        name={'age'}
        title={'Age'}
        value={age}
        placeholder={'Enter your age'}
        onChange={handleAge}
        required
      />
      <Select
        name={'gender'}
        title={'Gender'}
        value={gender}
        options={genderOptions}
        placeholder={'Select Gender'}
        onChange={handleGender}
        required
      />
      <OptionList
        name={'skills'}
        title={'Skills'}
        selectedOptions={selectedSkill}
        options={skillOptions}
        onChange={handleSkill}
      />
      <TextArea
        name={'aboutYou'}
        title={'About you.'}
        cols={100}
        rows={10}
        onChange={handleAboutYou}
        placeholder={'Describe your past experience and skills'}
      />
      <Button btnType={'primary'} type='submit' form='sample-form'>
        Submit
      </Button>
      <Button onClick={handleClear} btnType={'secondary'}>
        Clear
      </Button>
    </form>
  );
};

export default Form;
