import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route, Routes } from 'react-router-dom';

// import About from './components/About';
// import Service from './components/Service';
import Team from './components/Team';
import Testimonial  from './components/Testimonial';
import Contacts from './components/Contacts';
import Abouts from './components/Abouts';
import Services from './components/Services';
// import Portfolio from './components/Portfolio';
import Port from './components/Port';
import Page from './components/Page';
import Error from './components/Error';
import Login from './components/Login';








// import Contact from './components/Contact';

// import "../../node_modules/slick-carousel/slick/";
// import "../node_modules/slick-carousel/slick/slick"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";



function App() {
  return (
  

<>


<Routes>
   <Route path='/' element={<Login/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/about' element={<Abouts/>}/>
   <Route path='/service' element={<Services/>}/>
   <Route path='/team' element={<Page/>}/>
   <Route path='/test' element={<Page/>}/>
   {/* <Route path='/contact' element={<Contact/>}/> */}
   <Route path='/contact' element={<Contacts/>}/>
   <Route path='/project' element={<Port/>}/>
   <Route path='*' element={<Error/>}/>
   {/* <Route path='/project' element={<Testimonial/>}/> */}



</Routes>
</>
  );
}

export default App;
