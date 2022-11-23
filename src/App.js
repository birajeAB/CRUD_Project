import React from 'react';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Navbar from './Components/Layout/Navbar';
import { Route,Router,Routes} from 'react-router-dom'


const App = () =>{
  return (
    <> 


<Navbar/>
<Routes> 

<Route  exact path="/" element={<Home/>}/>
<Route    path="/about" element={<About/>}/>
<Route    path="/contact" element={<Contact/>}/>
</Routes>


    
 
    </>
  );
}

export default App;
