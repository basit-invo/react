import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('One time Render');
  }, []);
  // React select(dropdown), React table, pass props to the component
  useEffect(() => {
    console.log('Render when onclick event trigger');
  }, [count]);

  useEffect(() => {
    console.log('render everytime');
  });

  return (
    <div className="App">
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
}

export default Counter;
