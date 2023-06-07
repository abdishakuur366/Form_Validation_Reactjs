import './App.css';
import Form from './Form';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';



// import Shakra from './Shakra';
import {Routes,Router, BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      {/* <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
        </Routes>
     <nav>
      <ul>
      <li className='list' ><Link to='/Home' className='links' style={{textDecoration:'none'}}>Home</Link></li>
      <li className='list'><Link to='/About' className='links' style={{textDecoration:'none'}}>About</Link></li>
      <li className='list'><Link to='/Contact' className='links' style={{textDecoration:'none'}}>Contact</Link></li>
      </ul>
     </nav> */}

      <Form/>
      {/* <nav>
        <Link to="/shakra">Shakra</Link>
      </nav> */}

       
        
        
      
    </div>
  );
}

export default App;
