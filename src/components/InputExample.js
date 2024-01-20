import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      Please enter a name <br />
      <input value="test" />
    </div>
  );
}

export default InputExample;
