import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, Link, NavLink,
} from 'react-router-dom';
import App from './App';
import store from './app/store';
import logo from './img/planet.png';
import Missions from './components/Missions';
import Myprofile from './components/Myprofile';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <nav>
          <div className="left">
            <img className="img-logo" alt="logo" src={logo} />
            <Link className="logo" to="/"> Space Traveler&apos;s Hub</Link>
          </div>
          <div className="right">
            <NavLink className="nav-link" to="/">Rockets</NavLink>
            <NavLink className="nav-link" to="/missions">Missions</NavLink>
            <NavLink className="nav-link" to="/myprofile">My Profile</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
