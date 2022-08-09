import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './routes/Home';
import Registry from './routes/Registry';
import './App.css';

function App() {
  return(
    <div className='App'>
      <Router>

          <Route path='/' exact >
            <Home />
          </Route>
          <Route path='/registry' >
            <Registry />
          </Route>

      </Router>
    </div>
  );
}

export default App;