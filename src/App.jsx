import { useState } from "react";
import starWarsData from "./starWarsData";
import Card from "./Card";

function App() {
  const [chars, setChars] = useState(starWarsData);
  const [charNames, setCharNames] = useState([]);
  const [score, setScore] = useState(0);

  const getNames = (e) => {
    setCharNames((prev) => prev.concat(e.id));
  };

  const checkNameExists = (e) => {
    if (charNames.includes(e)) {
      setScore(0);
      setCharNames([]);
    } else {
      setScore((prev) => prev + 1);
    }
  };

  const randomize = () => {
    const shallowCopy = [...chars];
    const shuffledChars = [];

    while (shallowCopy.length > 0) {
      let num = Math.floor(Math.random() * shallowCopy.length);
      shuffledChars.push(shallowCopy[num]);
      shallowCopy.splice(num, 1);
    }

    setChars(shuffledChars);
  };

  const cardElements = chars.map((char) => (
    <Card
      handleClick={randomize}
      getNames={getNames}
      checkNameExists={checkNameExists}
      char={char}
      key={char.id}
    />
  ));

  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-center text-4xl">Memory Card Game</h1>
      <p className="text-xl">Score: {score}</p>
      <div className="my-10 grid grid-cols-6 gap-10">{cardElements}</div>
    </div>
  );
}

export default App;
