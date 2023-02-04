import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Login from './pages/login';
import Auth from './pages/login/Auth';
import Profile from './pages/login/profile';
import SearchCafe from './pages/searchCafe';
import AddCafe from './pages/addCafe';

//Test
import Test from './pages/test';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchCafe />} />

          <Route path="/login" element={<Login />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/addCafe" element={<AddCafe />} />
          
          {/*Test*/}
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
