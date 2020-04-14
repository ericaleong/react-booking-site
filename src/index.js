import React from 'react';
import ReactDOM from 'react-dom';
// BrowswerRouter to not clog up App.js
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {WorkshopProvider} from './context';

ReactDOM.render(
  <WorkshopProvider>
    {/* Router serves are parent container */}
  <Router>
   <App />
    </Router>
    </WorkshopProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
