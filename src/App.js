import React, { useState } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import ApplicationLoader from './ApplicationLoader/ApplicationLoader';
import config from './config';

function App() {
  const [selectedApp, setSelected] = useState(config.applications[0]);

  return (
    <div className="App">
      <h1>Sample application to test microfrontends</h1>
      <Menu apps={config.applications} onSelect={setSelected} />
      <ApplicationLoader app={selectedApp} />
    </div>
  );
}

export default App;
