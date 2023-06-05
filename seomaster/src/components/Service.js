// import React from 'react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Service = () => {

    const [service, setService] = useState([]);


    useEffect(() => {
      fetch('http://localhost/seo_api/service.php')
        .then((response) => response.json())
        .then((d) => setService(d))
  
    }
    )
    return (
        <>
        {/* Service Start  */}
     <div className='container-xxl py-5'>
 
         <div className='container px-lg-5'>
     
             <div className='section-title position-relative text-center mb-5 pb-2 wow fadeInUp' data-wow-delay='0.1s'>
                 <h6 className='position-relative d-inline text-primary ps-4'>Our Services</h6>
                 <h2 className='mt-2'>What Solutions We Provide</h2>
             </div>
     
             <div className='row g-4' >
             {service.map((ser,i)=>
                 <div className='col-lg-4 col-md-6 wow zoomIn' data-wow-delay='0.1s' key={i}>
                     <div className='service-item d-flex flex-column justify-content-center text-center rounded'>
                         <div className='service-icon flex-shrink-0'>
                             <i className={ser.logo}></i>
                         </div>
                         <h5 className='mb-3'>{ser.title}</h5>
                         <p dangerouslySetInnerHTML={{__html: ser.description}}></p>
                         {/* <p>{ser.description}</p> */}
                         <NavLink to='' className='btn px-3 mt-auto mx-auto'>Read More</NavLink>
                        
                     </div>
                 </div>)}
           
             </div>
         </div>
     </div>
     {/* Service End  */}

     </>
    );
};

export default Service;