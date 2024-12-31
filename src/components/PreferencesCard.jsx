import React, { useState } from 'react';

const PreferencesForm = ({ onSave }) => {
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ sources, categories, authors });
  };

  return (
    <form className="p-4 bg-white shadow-md rounded" onSubmit={handleSubmit}>
      <label className="block mb-2">
        Sources:
        <input
          type="text"
          className="block w-full border-gray-300 rounded mt-1"
          value={sources}
          onChange={(e) => setSources(e.target.value.split(','))}
        />
      </label>
      <label className="block mb-2">
        Categories:
        <input
          type="text"
          className="block w-full border-gray-300 rounded mt-1"
          value={categories}
          onChange={(e) => setCategories(e.target.value.split(','))}
        />
      </label>
      <label className="block mb-2">
        Authors:
        <input
          type="text"
          className="block w-full border-gray-300 rounded mt-1"
          value={authors}
          onChange={(e) => setAuthors(e.target.value.split(','))}
        />
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Save Preferences
      </button>
    </form>
  );
};

export default PreferencesForm;
