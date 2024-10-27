import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Login from './Components/Login';
import Quiz from './Components/Quiz/Quiz';
import reportWebVitals from './reportWebVitals';
import Main from './Components/ClassLayout/MainLayout/MainLayout';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
      {/* <Login /> */}
      {/* <Quiz /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
