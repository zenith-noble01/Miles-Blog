import React from 'react'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/register/Register'
import Write from "./pages/write/Write"
import Setting from "./pages/settings/Settings"

function App() {

  const user = false
  
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="write" element={ <Write />} />
        <Route path="setting" element={ <Setting />} />
        <Route path="login" element={ <Login />} />
        <Route path="register" element={ <Register />} />
      </Routes>
    </>
  );
}

export default App;
