// import { NavLink, Route, Routes } from 'react-router-dom';
import { NavLink} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
// import Head from './Head';

const Nav = () => {
    let navigate=useNavigate();
    useEffect(()=>{
       let token=localStorage.getItem('token')
       console.log(token)
       if(token==null){
          navigate("/");
       }
    },[]);
    const logout=()=>{
       localStorage.removeItem('token');
       navigate("/");
    }
    return (
        <>
        <div style={{width:'100%'}} >
          <div className='container-xxl bg-white p-0'>
         {/* Spinner start  */}
        {/* <div id='spinner'className='show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center'>
            <div className='spinner-grow text-primary'
            style={{width: '3rem', height: '3rem'}} role='status'>
                <span className='sr-only'>Loading...</span>
            </div>
        </div> */}
      {/* Spinner End  */}
      
      <div className='container-xxl position-relative p-0'>
            <nav className='navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0'>
                <NavLink to='/' className='navbar-brand p-0'>
                    <h1 className='m-0'><i className='fa fa-search me-2'></i>SEO<span className='fs-5'>Master</span></h1>
                    {/* <img src='img/logo.png'alt='Logo'> */}
                </NavLink>
                <button className='navbar-toggler'type='button'data-bs-toggle='collapse'data-bs-target='#navbarCollapse'>
                    <span className='fa fa-bars'/>
                </button>
                <div className='collapse navbar-collapse'id='navbarCollapse'>
                    <div className='navbar-nav ms-auto py-0'>
                       
                        <NavLink to='/home' className='nav-item nav-link active'>Home </NavLink> 
                        <NavLink to='/about' className='nav-item nav-link'>About </NavLink> 
                        <NavLink to='/service' className='nav-item nav-link'>Services </NavLink> 
                        <NavLink to='/project' className='nav-item nav-link'>Project </NavLink> 
                  
                        <div className='nav-item dropdown'>
                            <NavLink to='' className='nav-link dropdown-toggle'
                            data-bs-toggle="dropdown">Pages</NavLink>
                            <div className='dropdown-menu m-0'>
                            <NavLink to='/team' className='dropdown-item'>Our Team </NavLink> 
                            <NavLink to='/test' className='dropdown-item'>Testimonial</NavLink> 
                            <NavLink to='/error' className='dropdown-item'>404</NavLink> 
                            {/* <NavLink to='/error' className='dropdown-item'>Logout</NavLink>  */}
                            <a  href="javascript:void(0)" rel="noopener noreferrer"  className='dropdown-item' onClick={logout}> Logout</a>
                               
                            </div> 
                            </div>
                        <NavLink to='/contact' className='nav-item nav-link'>Contact</NavLink>
                    </div>
                    <butaton type='button'className='btn text-secondary ms-3'data-bs-toggle='modal'data-bs-target='#searchModal'><i className='fa fa-search'></i></butaton>
                    <NavLink to='https://htmlcodex.com/startup-company-website-template'
                    className='btn btn-secondary text-light rounded-pill py-2 px-4 ms-3'>Pro Version</NavLink>
                </div>
            </nav>
            </div>
            </div>
            </div>
   {/* <Head/> */}

          
     
            </>
     
    );
};

export default Nav;
