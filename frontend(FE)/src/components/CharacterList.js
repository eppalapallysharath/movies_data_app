import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      <h2>Character List</h2>
      {characters.length === 0 ? (
        <p>No characters available.</p>
      ) : (
        <ul>
          {characters.map((char) => (
            <li key={char.id}>
              <strong>{char.name}</strong>
              <p>{char.description || 'No description provided.'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterList;
