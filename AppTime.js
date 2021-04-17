import React, { Component } from 'react';

function Counter(props) {
 let [count, setCount] = useState(0);
//  setCount = (newValue) => { setState(newValue) }

  let initialCount = props.count; 
  let currentCount = count;

  return (<div className="msgStyle">
     Count: {currentCount} 
     <button className="btnStyle" onClick={()=>setCount(initialCount)}>
            Reset</button>
     <button className="btnStyle" onClick={()=>setCount(currentCount - 1)}>
            -</button>
     <button className="btnStyle" onClick={()=>setCount(currentCount + 1)}>
             +</button>
    </div>
  )
}
// Counter.defaultProps = {initialCount : 0}
export default Counter;