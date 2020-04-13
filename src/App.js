import React from 'react';
import './App.css';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import SingleWorkshop from './pages/SingleWorkshop';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/workshops/" component={Workshops}/>
    <Route exact path="/workshops/:slug" component={SingleWorkshop}/>
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
