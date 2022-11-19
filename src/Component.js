import { useState, useEffect } from 'react';

const Component = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
     console.log(count);
    });
  
    const decrement = () => {
      if(count > 0) {
        setCount(count - 1)
      }
      else {
        setCount(0)
        alert("Number in counter shouldn't go below 0")
      }
    }
    
    return (
      <div className='container'>
      <div className='cmp'>
        <h1>{count}</h1>
        <button onClick={() => {setCount(count+1)}}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        {count > 10 && <button onClick={() => {setCount(0)}}>Go back to 0</button>}
      </div>
      </div>
    );
}

export default Component