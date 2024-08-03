import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>
      {jokes.map((jokes, index) => (
        <div key={jokes.id}>
          <h3>{jokes.title}</h3>
          <p>{jokes.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
