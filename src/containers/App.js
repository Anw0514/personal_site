import React from 'react';
import '../styling/App.css';
import Navbar from '../navigation/Navbar';
import PageSection from './PageSection';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageSection />
    </div>
  );
}

export default App;
