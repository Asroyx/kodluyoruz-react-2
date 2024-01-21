import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Asil");

  const onChangeName = (event) => setName(event.target.value);

  return (
    <div>
      Please enter a name <br />
      <input value={name} onChange={onChangeName} />
    </div>
  );
}

export default InputExample;
