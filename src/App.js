import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Adjust the path according to your folder structure
import SplashScreen from './pages/SplashScreen';
import LoadingScreen from './pages/LoadingScreen';
import ReadyScreen from './pages/ReadyScreen';
import TileSelection from './pages/TileSelection';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/ready" element={<ReadyScreen />} />
        <Route path="/select" element={<TileSelection />} /> {/* 👈 This is the important part */}
        
      </Routes>
    </Router>
  );
};
export default App;
