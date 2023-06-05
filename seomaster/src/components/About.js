
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    const [about, setAbout] = useState([]);


    useEffect(() => {
      fetch('http://localhost/seo_api/about.php')
        .then((response) => response.json())
        .then((d) => setAbout(d))
  
    }
    )
    // {about.map((ab,i)=>key={i})}
    return (
        <>
                {/* About Start  */}
        <div className='container-xxl py-5'>
            <div className='container px-lg-5'>
            {about.map((ab,i)=>
                <div className='row g-5' key={i}>
              
                    <div className='col-lg-6 wow fadeInUp' data-wow-delay='0.1s'>
                 
                        <div className='section-title position-relative mb-4 pb-2' >
                      
                            <h6 className='position-relative text-primary ps-4' >About Us</h6>
                            <h2 className='mt-2'>{ab.title}</h2>
                        </div>
                        <p className='mb-4'>{ab.description}</p>
                        <div className='row g-3'>
                            <div className='col-sm-6'>
                                <h6 className='mb-3'><i className='fa fa-check text-primary me-2'></i>{ab.point_1}</h6>
                                <h6 className='mb-0'><i className='fa fa-check text-primary me-2'></i>{ab.point_2}</h6>
                            </div>
                            <div className='col-sm-6'>
                                <h6 className='mb-3'><i className='fa fa-check text-primary me-2'></i>{ab.point_3}</h6>
                                <h6 className='mb-0'><i className='fa fa-check text-primary me-2'></i>{ab.point_4}</h6>
                                {/* <h6 className='mb-0'><i className='fa fa-check text-primary me-2'></i>{ab.point_}</h6> */}
                            </div>
                        </div>
                        <div className='d-flex align-items-center mt-4'>
                            <a href='./About' className='btn btn-primary rounded-pill px-4 me-3'>Read More</a>
                            <a href='#' className='btn btn-outline-primary btn-square me-3'>
                            <i className='fab fa-facebook-f'></i>
                            </a>
                            <a href='#' className='btn btn-outline-primary btn-square me-3'>
                            <i className='fab fa-twitter'></i>
                            </a>
                           
                            <a href='#' className='btn btn-outline-primary btn-square me-3'>
                            <i className='fab fa-instagram'></i>
                            </a>
                           
                            <a href='#' className='btn btn-outline-primary btn-square me-3'>
                            <i className='fab fa-instagram'></i>
                            </a>
                            <a href='#' className='btn btn-outline-primary btn-square me-3'>
                            <i className='fab fa-linkedin-in'></i>
                            </a>
                           
                           
                          
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        {/* <img className='img-fluid wow zoomIn' data-wow-delay='0.5s' src='%PUBLIC_URL%/img/about.jpg'/> */}

                        <img className='img-fluid wow zoomIn' data-wow-delay='0.5s' 
                        src={`img/${ab.photo}`} />
                    </div>
                </div> )}
            </div>
        </div>
        
         {/* About End  */}
        </>
    );
};

export default About;