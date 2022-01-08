import React, {useState} from 'react'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/register/Register'
import Write from "./pages/write/Write"
import Setting from "./pages/settings/Settings"
import Auth from './components/auth/Auth';
import Profile from './components/profile/Profile';
import Themes from './components/themes/Themes';

function App() {

  const user = false
  const [profile, setProfile] = useState(true)
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="write" element={ <Write />} />
        <Route path="setting" element={ <Setting  open={profile} setProfile={setProfile}/>}>
          <Route path="auth" element={ <Auth /> } />
          <Route path="profile" element={ <Profile /> } />
          <Route path="themes" element={ <Themes /> } />
        </Route >
        <Route path="login" element={ <Login />} />
        <Route path="register" element={ <Register />} />
      </Routes>
    </>
  );
}

export default App;

// only the brave, jack reacher: never go back, skyscraper