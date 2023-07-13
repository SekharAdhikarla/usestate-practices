import {useState} from 'react'
import './index.css'

const CounterFnSetState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container center">
      <p className="para">Count value is: {count}</p>
      <button className="btn" onClick={() => setCount(0)}>Reset</button>
      <button  className="btn"
        onClick={() => setCount(prevCount => prevCount + 1)}>
        Plus (+)
      </button>
      <button  className="btn"
        onClick={() => setCount(prevCount => prevCount - 1)}>
       Minus (-)
      </button>
    </div>
  );
}
export default CounterFnSetState 
