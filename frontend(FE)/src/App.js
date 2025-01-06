import React, { useState, useEffect } from "react";
import CharacterForm from "./components/CharacterForm";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import "./index.css";

// const apiurl = "http://localhost:3002";
const apiurl = "https://movies-data-app-api.onrender.com";

const App = () => {
  const [characters, setCharacters] = useState([]);

  // Fetch characters on component load
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`${apiurl}/characters`);
      console.log(response);
      setCharacters(response.data);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const addCharacter = async (character) => {
    try {
      const response = await axios.post(`${apiurl}/characters`, character);
      setCharacters((prev) => [...prev, response.data]);
      console.log(response);
    } catch (error) {
      console.error("Error adding character:", error);
    }
  };

  return (
    <div className="app">
      <h1>Marvel Character Manager</h1>
      <CharacterForm addCharacter={addCharacter} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
