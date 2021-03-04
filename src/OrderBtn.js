// import React,{useRef} from 'react';

// function TextInputWithFocusButton() {
    
//     const inputEl = useRef(null);
//     const onButtonClick = () => {
//       // `current` points to the mounted text input element
//       inputEl.current.focus();
//     };
//     return (
//       <>
//         <input ref={inputEl} type="text" />
//         <button onClick={onButtonClick}>Focus the input</button>
//       </>
//     );
//   }
//   export default TextInputWithFocusButton;

import React, { useEffect, useRef } from "react";
const GoodCounter = () => {
  const count = useRef(0);
  let currentCount = count.current;
  useEffect(() => {
    count.current = currentCount;
  });
  currentCount += 1;
  return <div>count:{currentCount}</div>;
};
export default GoodCounter;
