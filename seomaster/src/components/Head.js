// import React from 'react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Head = () => {
    const [head, setHead] = useState([]);


    useEffect(() => {
      fetch('http://localhost/seo_api/head.php')
        .then((response) => response.json())
        .then((d) => setHead(d))
  
    }
    )
    return (
        <>
        <div className='container-xxl py-5 bg-primary hero-header mb-5'>
         <div className='container my-5 py-5 px-lg-5'>
         {head.map((h,i)=>
             <div className='row g-5 py-5'>
                
              
               <div className='col-lg-6 text-center text-lg-start' key={i}>
                     <h1 className='text-white mb-4 animated zoomIn'>{h.title}</h1>
                     <p className='text-white pb-3 animated zoomIn'>{h.description}</p>
                     <NavLink to='/home'  className='btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft' >Free Quote</NavLink>
                     <NavLink to='/contact'  className='btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight' >Contact Us</NavLink>
                   
                 </div>
                 <div className='col-lg-6 text-center text-lg-start'>
                     {/* <img className='img-fluid' src='%PUBLIC_URL%/img/hero.png' alt=''/> */}
                     {/* <img className='img-fluid' src='%PUBLIC_URL%/img/'{h.img} alt=''/> */}
                     <img className='img-fluid' src={`img/${h.img}`} alt=''/>
                 </div>
         </div>)}
             </div>
     </div>
          {/* Full Screen Search Start */}
          < div className='modal fade' id='searchModal' tabindex='-1'>
            <div className='modal-dialog modal-fullscreen'>
                <div className='modal-content' style={{background: 'rgba(29, 29, 39, 0.7)'}}>
                    <div className='modal-header border-0'>
                        <button type='button' className='btn bg-white btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body d-flex align-items-center justify-content-center'>
                    <div className='input-group' style={{maxWidth: '600px'}}> 
                        {/* <div className='input-group' style={{max-width: '600px'}}> */}
                            <input type='text' className='form-control bg-transparent border-light p-3' placeholder='Type search keyword'/>
                            <button className='btn btn-light px-4'>
                                <i className='bi bi-search'></i> </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
            
       
      {/* Full Screen Search End  */}

</>
    );
};

export default Head;