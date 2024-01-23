import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const onChangeInput = (e) => {
    console.log(e.target.name);
  };

  return (
    <div>
      Please enter a name <br />
      <input value={name} onChange={onChangeInput} />
      <br />
      <br />
      {name}
      Please enter a surname <br />
      <input value={name} onChange={onChangeInput} />
      <br />
      {name} {surname}
    </div>
  );
}

export default InputExample;
