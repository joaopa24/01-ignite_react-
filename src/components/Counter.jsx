import { useState } from "react";
//hook

export function App(){
    return <h1>Hello World</h1>
}

export function Counter(){
    const [counter, setCounter] = useState(0)

    function increment(){
       setCounter(counter + 1)
    }

    return (
      <div>
          <h2>{counter}</h2>

          <button type="button" onClick={increment}>Increment +1
          </button>
      </div>
    );
}