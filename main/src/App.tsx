import React from 'react';
import { BrowserRouter, Routes as Switch, Route, useLocation } from "react-router-dom";

// pages
import WelcomePG from './pages/WelcomePG';
import AboutPG from './pages/AboutPG';
import MainWorldPG from './pages/MainWorldPG';
import DevWorldPG from './pages/DevWorldPG';



function App() {

  return (
    <BrowserRouter>
      {/*pages*/}
      <Switch>
        <Route path='/'>
          <Route index element={<WelcomePG />} />
          <Route path='/About' element={<AboutPG />} />
          <Route path='/Main' element={<MainWorldPG />} />
          <Route path='/Dev' element={<DevWorldPG />} />

        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
