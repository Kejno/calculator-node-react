import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input';
import Select from './Select';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operand, setOperand] = useState('sum');
  const [answer, setAnswer] = useState('');

  const onSubmitHandler = async (event: React.SyntheticEvent): Promise<any> => {
    try {
      event.preventDefault();
      const { data } = await axios.get(
        `/api?operand=${operand}&num1=${num1}&num2=${num2}`
      );
      setAnswer(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ display: 'flex', padding: '200px' }}>
      <form style={{ margin: 'auto' }} onSubmit={onSubmitHandler}>
        <Input
          value={num1}
          label="Number 1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNum1(e.target.value);
          }}
        />
        <Input
          value={num2}
          label="Number 2"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNum2(e.target.value);
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px 0',
          }}
        >
          <Select
            value={operand}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setOperand(e.target.value)
            }
          />
          <button type="submit">Submit</button>
        </div>
        <div>Ответ: {answer}</div>
      </form>
    </div>
  );
};

export default App;
