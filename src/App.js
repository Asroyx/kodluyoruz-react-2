import { useState } from "react";

function App() {
  const [name, setName] = useState("Asil");

  return (
    <div className="App">
      <h1>Hello! {name}</h1>
    </div>
  );
}

export default App;
