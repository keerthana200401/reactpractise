
import './App.css'
import {useEffect,useState} from 'react'
import {Routes,Route,Link,Outlet} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Tech from './components/Tech'
import Html from './components/Html'
import Java from './components/Java'
function App() {

 
  
return(
<div className='text-center text-info'>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My React app</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to="home">Home</Link>
        <Link className="nav-link" to="contact">Contact</Link>
        <Link className="nav-link" to="tech">Tech</Link>
      </div>
    </div>
  </div>
</nav>

 <Routes>
 <Route path="" element={ <Home/> }/>
 <Route path="/home" element={ <Home/> }/>
   <Route path="/contact" element={ <Contact/> } />

   <Route path="/tech" element={<Tech/>}></Route>
 </Routes>
  <Outlet></Outlet>
  </div>)

}
export default App;
