import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import {useState} from 'react';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App(){
  const [mode,changeMode]=useState('light');
  const changeBwMode=()=>{
    if(mode === 'light'){
    changeMode('dark');
    document.body.style.backgroundColor = 'black';
  }else{ 
    changeMode('light');
    document.body.style.backgroundColor = 'white';
  }
  }
return(
<BrowserRouter>
<Navbar bwmode={mode} toggleMode={changeBwMode}/>
<Routes>
<Route path='/' element={<Textarea bwmode={mode}/>}> </Route>
  <Route path='/aboutus' element={<About bwmode={mode}/>}></Route>
  <Route path='/tutils' element={<Textarea bwmode={mode}/>}> </Route>
</Routes>

</BrowserRouter>
  );
}

export default App