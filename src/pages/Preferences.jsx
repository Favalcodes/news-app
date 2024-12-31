import React, { useEffect, useState } from 'react';
import { updatePreferences, fetchPreferences } from '../services/api';
import PreferencesForm from '../components/PreferencesCard';

const Preferences = () => {
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    fetchPreferences().then((response) => setPreferences(response.data));
  }, []);

  const handleSave = (data) => {
    updatePreferences(data).then((response) => {
      alert('Preferences updated successfully!');
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Preferences</h1>
      <PreferencesForm onSave={handleSave} />
    </div>
  );
};

export default Preferences;
