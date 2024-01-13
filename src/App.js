import { useState } from "react";

function App() {
  const [name, setName] = useState("Asil");
  const [age, setAge] = useState(29);

  return (
    <div className="App">
      <h1>Hello! {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Click</button>
    </div>
  );
}

export default App;
