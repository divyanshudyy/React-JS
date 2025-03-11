import { useEffect, useState } from "react";

export default function RandomJoke() {
  const [joke, setJoke] = useState({});

  async function getRandomJoke() {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const result = await response.json();
    setJoke({ setup: result.setup, punchline: result.punchline });
  }

  useEffect(() => {
    async function getFirstJoke() {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const result = await response.json();
      setJoke({ setup: result.setup, punchline: result.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h2>Joke!</h2>
      <p>{joke.setup}</p>
      <h2>{joke.punchline}</h2>
      <button onClick={getRandomJoke}>Get Joke</button>
    </div>
  );
}
