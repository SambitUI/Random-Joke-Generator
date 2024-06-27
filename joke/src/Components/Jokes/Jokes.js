import React from "react";
import "./Jokes.scss";
import { useEffect, useState } from "react";

const Jokes = () => {
  const url = "http://api.icndb.com/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});
  async function getJoke() {
    const response = await fetch(url);
    const data = await response.json();
    setJoke(data);
    setIsLoading(false);
  }
  useEffect(() => {
    setTimeout(() => {
      getJoke();
    }, 3000);
  }, []);
  return (
    <section className="jokes-sec">
      <div className="container joke">
        <h2>Random Joke Generator </h2>
        {isLoading ? (
          <h3>Loading ... </h3>
        ) : (
          <p className="--my2">{joke.value.joke}</p>
        )}
        <button onClick={getJoke}>Generate A New Joke </button>
      </div>
    </section>
  );
};

export default Jokes;
