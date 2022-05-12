import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from "./components/Login";


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
          <Route exact path='/shop' element={ <App/>}/> 
          <Route exact path="/" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
