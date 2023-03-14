import { useState } from "react";
import starWarsData from "./starWarsData";
import Card from "./Card";

function App() {
  const [chars, setChars] = useState(starWarsData);

  const cardElements = chars.map((char) => <Card char={char} />);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Memory Card Game</h1>
      <div className="grid grid-cols-6 gap-10 my-10">{cardElements}</div>
    </div>
  );
}

export default App;
