import { useState } from "react";

function App() {
  const [name, setName] = useState("Asil");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);

  return (
    <div className="App">
      <h1>Hello! {name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge("25")}>Change age</button>

      <hr />

      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
    </div>
  );
}

export default App;
