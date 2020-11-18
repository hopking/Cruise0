// // import logo from './logo.svg';
 import React from 'react';
import Header from './components/Header/Header'
// // import RegistrationForm from './components/RegistrationForm/RegistrationForm';
 import LoginButton from './components/LoginButton/LoginButton';
 import LogoutButton from './components/LogoutButton/LogoutButton';
 import Profile from "./components/Profile/Profile";


 import './App.css';

 function App() {
   return (
     <div className="App">
       <Header />
       <LoginButton /> 
      <LogoutButton />
      <Profile />
     </div>
   )
 }

 export default App;


