import React, { useState } from 'react';

const CharacterForm = ({ addCharacter }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Name is required!');
      return;
    }
    addCharacter({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form className="character-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Character Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description (Optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Character</button>
    </form>
  );
};

export default CharacterForm;
