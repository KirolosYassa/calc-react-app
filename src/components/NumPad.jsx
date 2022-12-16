import React, { useState } from "react";

function NumPad(props) {
  const [input, setInput] = useState(0);

  function handleChange(event) {
    const value = event.target;
    console.log(value);
    setInput(value);
  }

  return (
    <th>
      <button
        onChange={handleChange}
        onClick={() => {
          return props.functionality(props.value);
        }}
      >
        {props.value}
      </button>
    </th>
  );
}

export default NumPad;
