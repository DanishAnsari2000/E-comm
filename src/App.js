import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import Navigation from './component/pages/Navigation';
import Home from './component/pages/Home'
import Service from './component/pages/Service'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact><Home /></Route>
        <Route path="/services"><Service /></Route>
      </BrowserRouter>
    </div>
  ) 
}

export default App;