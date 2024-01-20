import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import InputBox from './components/InputBox';

function App() {
  const [passPrice, setPassPrice] = useState(0);
  const [dayPrice, setDayPrice] = useState(0);
  const [count, setCount] = useState(0);

  let breakEvenDays = Math.ceil(passPrice / dayPrice);
  
  function getBreakEvenMessage() {
    if (breakEvenDays === Infinity) {
      return 'You will never break even!';
    }
    else if (dayPrice === 0) {
      return 'Please enter a valid day price'
    }
    else if (count >= breakEvenDays) {
      return `You got your money's worth ${Math.ceil(count - breakEvenDays)} days ago!`;
    } else {
      return `You need to go ${breakEvenDays - count} more days to break even`;
    }
  }

  return (
    <div className='container mt-4'>
      <h2>Membership cost savings calculator</h2>
      <p>
        <InputBox
          text="Pass Price"
          placeholder="e.g. $500"
          value={passPrice}
          onChange={e => setPassPrice(e.target.value)}
        />
        <InputBox
          text="Single day price"
          placeholder="e.g. $25"
          value={dayPrice}
          onChange={e => setDayPrice(e.target.value)}
        />
        <Counter count={count} setCount={setCount} />
        <div className='row mt-4'>
          {getBreakEvenMessage()} 
        </div>
      </p>
      <div className='made-with-love'>
        Made with ❤️ by @liudogg | <a href="https://www.linkedin.com/in/dannyliu421/">LinkedIn</a>
      </div>

      
    </div>
  );
}

export default App;
