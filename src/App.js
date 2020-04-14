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
    {/* Goes to an error page is there is no exact matching route */}
    <Route component={Error} />
    </Switch>
    </>
  );
}
// Switch component will only render the first route that matches or includes the path
// Route to render the url path that is matched

export default App;
