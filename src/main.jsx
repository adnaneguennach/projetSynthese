import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Members from './Components/Members.jsx';
import Sidebar from './Components/Sidebar.jsx';
import { legacy_createStore } from 'redux'
import reducer from './reducer.jsx'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const store = legacy_createStore(reducer)

createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <BrowserRouter>
      <div className="font-roboto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>

);