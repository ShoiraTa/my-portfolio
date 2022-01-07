import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

// import App from './App';
import store from './redux/store';
import Banner from './components/Banner';
import Myprofile from './components/Myprofile';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/myprofile" element={<Myprofile />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
