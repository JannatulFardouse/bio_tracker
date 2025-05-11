import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import data from './data/healthData.json';
import DataTable from './components/DataTable';
import HealthChart from './components/HealthChart';

function App() {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    setHealthData(data); // Mock fetch
  }, []);

  return (
    <div>
      <h1>BioTracker - Health Dashboard</h1>
      <HealthChart data={healthData} />
      <DataTable data={healthData} />
    </div>
  );
}

export default App;

