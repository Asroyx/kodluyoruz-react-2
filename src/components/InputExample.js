import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Asil");

  return (
    <div>
      Please enter a name <br />
      <input value={name} />
    </div>
  );
}

export default InputExample;
