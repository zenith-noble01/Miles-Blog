import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router >
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// c64cd91e03264498a724b4efc6fdc503