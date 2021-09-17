import { useState } from 'react';
import Header from './profile/component/Header.js'
import Profile from './profile/component/Profile.js'
import Skills from './profile/component/Skills.js';
import './App.css';
const prf = {
  fullName:"oussema omrani",
  age:25,
  bio:[
    {id:1,skill:"html",progress:"70%"},
    {id:2,skill:"css",progress:"60%"},
    {id:3,skill:"javascript",progress:"68%"},
    {id:4,skill:"reactjs",progress:"40%"}
  ],
  location:"123 area 2345 tunis",
  profession:"Web Developent",
  about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}
const handelFunction=(name)=>{alert(name)}
function App() {
  return (
    <div className="App">
      <Header profession = {prf.profession}/>
      <Profile data = {prf} handlFn = {handelFunction} />
      <Skills skills={prf.bio} />
    </div>
  );
}

export default App;
