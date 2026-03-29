import React, { useEffect, useState } from "react";

function JokeAPI() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const getJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist");
      const data = await res.json();

      // نوعين نكت: single أو twopart
      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} — ${data.delivery}`);
      }
    } catch (error) {
      console.error(error);
      setJoke("Failed to load joke ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "25px",
        textAlign: "center",
        borderRadius: "12px",
        background: "#f4f4f4",
      }}
    >
      <h2>😂 Programming Joke</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <p style={{ fontSize: "1.2rem" }}>{joke}</p>
      )}

      <button
        onClick={getJoke}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        New Joke 🔁
      </button>
    </div>
  );
}

export default JokeAPI;
