import { useQuery, useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

const App = () => {
  const saveToDb = useMutation(api.users.saveDataToDb);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const assignName = (event) => {
    setName(event.target.value);
  };

  const assignAge = (event) => {
    setAge(event.target.value);
  };

  const send = () => {
    saveToDb({ name, age: parseInt(age) });
  };

  return (
    <div>
      <div>Name: {name}</div>
      <div>age: {age}</div>
      <TextField onChange={assignName} label="Name" variant="standard" />

      <br />
      <TextField
        onChange={assignAge}
        id="standard-basic"
        label="Age"
        variant="standard"
      />

      <br />

      <Button variant="contained" onClick={send}>
        {' '}
        Send{' '}
      </Button>
    </div>
  );
};

export default App;
