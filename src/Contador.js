import React, { useState } from "react";

function Contador() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Diminuir
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Aumentar
      </button>
    </div>
  );
}

export default Contador;
