import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Asil");

  return (
    <div>
      Please enter a name <br />
      <input value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  );
}

export default InputExample;
