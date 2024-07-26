import React from 'react';
import logo from './common/logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import WelcomePG from './pages/WelcomePG';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/'>
            <Route index element={<WelcomePG />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
