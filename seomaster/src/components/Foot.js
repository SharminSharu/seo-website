import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Foot = () => {
    const[email,setEmail]=useState('')
        
    const [foot,setFoot] = useState([]);
  



    useEffect(() => {
      fetch('http://localhost/seo_api/general.php')
        .then((response) => response.json())
        .then((d) => setFoot(d))
  
    }
    )

      
    

  
    const com=()=>{
    axios({
        method: 'post',
        url: 'http://localhost/seo_api/send.php',
        data: {
          email: email,
       
        }
      })
      .then(function (response) {
        // console.log(response);
   
      setEmail('')
    
      });
      }
    return (
       <>
       
 {/* Footer Start  */}
        <div className='container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn' data-wow-delay='0.1s'>
            <div className='container py-5 px-lg-5'>
                <div className='row g-5'>
                {foot.map((fo)=>
                    <div className='col-md-6 col-lg-3' >
                    
                        <h5 className='text-white mb-4' >Get In Touch</h5>

                        <p><i className='fa fa-map-marker-alt me-3'></i>{fo.address}</p>
                        <p><i className='fa fa-phone-alt me-3'></i>{fo.phone}</p>
                        <p><i className='fa fa-envelope me-3'></i>{fo.email}</p>
                      
                        <div className='d-flex pt-2'>
                            <a href='#' className='btn btn-outline-light btn-social'>
                                <i className='fab fa-facebook-f'></i>
                            </a>
                            <a href='#' className='btn btn-outline-light btn-social'>
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a href='#' className='btn btn-outline-light btn-social'>
                                <i className='fab fa-instagram'></i>
                            </a>
                            <a href='#' className='btn btn-outline-light btn-social'>
                                <i className='fab fa-linkedin-in'></i>
                            </a>
                            <a href='#' className='btn btn-outline-light btn-social'>
                                <i className=' fab fa-youtube'></i>
                            </a>
                            

                    
                           

                            
                        </div>
                    </div>  )}
                    <div className='col-md-6 col-lg-3'>
                        <h5 className='text-white mb-4'>Popular Link</h5>
                        
                        <a href='./about' className='btn btn-link '>About Us</a>
                        <a href='./contact' className='btn btn-link '>Contact Us</a>
                        <a href='#' className='btn btn-link '>Privacy Policy</a>
                        <a href='#' className='btn btn-link '>Terms & Condition</a>
                        <a href='#' className='btn btn-link '>Career</a>
                        {/* <NavLink to='./about' className='btn btn-link '>About Us</NavLink>
                        <NavLink to='./contact' className='btn btn-link'>Contact Us</NavLink>
                        <NavLink to='' className='btn btn-link'>Privacy Policy</NavLink>
                        <NavLink to='' className='btn btn-link'>Terms & Condition</NavLink>
                        <NavLink to='' className='btn btn-link'>Career</NavLink> */}
                        

                     
                    </div>
                   
                    <div className='col-md-6 col-lg-3'>
                        <h5 className='text-white mb-4'>Project Gallery</h5>
                        
                        <div className='row g-2'>
                            <div className='col-4'>
                                <img className='img-fluid' src='img/portfolio-1.jpg'  alt='Image'/>
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src='img/portfolio-2.jpg' alt='Image'/>
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src='img/portfolio-3.jpg' alt='Image'/>
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src='img/portfolio-4.jpg' alt='Image'/>
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src='img/portfolio-5.jpg' alt='Image'/>
                            </div>
                            <div className='col-4'>
                                <img className='img-fluid' src='img/portfolio-6.jpg' alt='Image'/>
                            </div>
                        </div>
                    </div>
                
                    <div className='col-md-6 col-lg-3'>
                        <h5 className='text-white mb-4'>Newsletter</h5>
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div className='position-relative w-100 mt-3'>
                            <input className='form-control border-0 rounded-pill w-100 ps-4 pe-5' type='text' placeholder='Your Email' 
                            onChange={(e)=>setEmail(e.target.value)}  value={email} 
                            style={{height: '48px'}}/>
                            <button type='button' className='btn shadow-none position-absolute top-0 end-0 mt-1 me-2' onClick={com} >
                                <i className='fa fa-paper-plane text-primary fs-4'></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container px-lg-5'>
                <div className='copyright'>
                    <div className='row'>
                        <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
                            &copy; <NavLink className='border-bottom' to='#'>SEO MASTER </NavLink>, All Right Reserved. 
							
					
							Designed By 
                            <NavLink to='' className='border-bottom' > SEO MASTER </NavLink>
                          
                        </div>
                        <div className='col-md-6 text-center text-md-end'>
                            <div className='footer-menu'>
                            <a href='#'>Home </a>
                            <a href='#'>Cookies </a>
                            <a href='#'>Help</a>
                            <a href='#'> FQAs</a>
                        
                              
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* Footer End  */}

{/* back to top */}
<a href='#' className='btn btn-lg btn-primary btn-lg-square back-to-top pt-2'>
<i className='fa fa-angle-double-up'></i>
</a>

    
   
       </>
    );
};

export default Foot;