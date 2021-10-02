import './App.css';
import './components/inputBox/index.css'
import './components/button/index.css'
import './components/textInput/index.css'
import InputBox from './components/inputBox';
import InputField from './components/textInput';
import Button from './components/button';
import React from 'react';

function App() {
  const [val1,setVal1] = React.useState("")
  const [val2,setVal2] = React.useState("")
  const [val3,setVal3] = React.useState("")
  return (

      <InputBox>
      <InputField type="email" placeholder="Email" value={val3} onChange={e => setVal3(e.target.value)}></InputField>
      <InputField type="password" placeholder="Password" value={val2} onChange={e => setVal2(e.target.value)}></InputField>
      <InputField type="password" placeholder="Confirm Password" value={val1} onChange={e => setVal1(e.target.value)}></InputField>
      <Button >Previous</Button>
      <Button>Next</Button>
      </InputBox>
    
  );
}

export default App;
