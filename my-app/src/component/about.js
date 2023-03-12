import { useState } from 'react';
import Home from './home';
import '../App.css';

function About() {
  const [data, setData] = useState('');
  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  }
  return (
    <div className="App">
      <Home value={data}/>
      <div>
        <button primary onClick={() => parentToChild()}>Click Parent</button>
      </div>
    </div>
  );
}

export default About;
