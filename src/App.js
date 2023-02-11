import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Login from './pages/login';
import Auth from './pages/login/Auth';
import Profile from './pages/profile';
import SearchCafe from './pages/searchCafe';
import Detail from './pages/detail';
import AddCafe from './pages/addCafe';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchCafe />} />
          <Route path="/searchCafe" element={<SearchCafe />} />
          <Route path="/detail" element={<Detail />} />

          <Route path="/addCafe" element={<AddCafe />} />

          <Route path="/login" element={<Login />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
