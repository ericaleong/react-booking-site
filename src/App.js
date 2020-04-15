import React from 'react';
import './App.css';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import SingleWorkshop from './pages/SingleWorkshop';
import Connect from './pages/Connect';
import Error from './pages/Error';
// Switch component will only render the first route that matches or includes the path
// Route to render the url path that is matched
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* navbar above switch to keep it at top of page */}
    <Navbar />
    <Switch>
      {/* Route exact will exactly match to render those pages */}
    <Route exact path="/" component={Home}/>
    <Route exact path="/workshops/" component={Workshops}/>
    <Route exact path="/workshops/:slug" component={SingleWorkshop}/>
    <Route exact path="/connect" component={Connect}/>
    {/* Goes to an error page is there is no exact matching route */}
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
