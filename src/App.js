import React, { useState } from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCompteAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      <CompteForm onCompteAdded={handleCompteAdded} />
      <CompteList refreshKey={refreshKey} />
    </div>
  );
}

export default App;
