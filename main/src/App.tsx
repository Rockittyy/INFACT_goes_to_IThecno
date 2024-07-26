import React from 'react';
import logo from './common/logo.svg';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// pages
import WelcomePG from './pages/WelcomePG';
import AboutPG from './pages/AboutPG';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*pages*/}
        <Switch>
          <Route path='/'>
            <Route index element={<WelcomePG />} />
            <Route path='/About' element={<AboutPG />} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
