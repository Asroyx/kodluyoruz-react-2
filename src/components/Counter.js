import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>0</h1>
      <button>Decrase</button>
      <button>Incrase</button>
    </div>
  );
}

export default Counter;
