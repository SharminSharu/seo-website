import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function Testimonial() {
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 2000,
        Testimonial: true
      };
      const [test, setTest] = useState([]);


      useEffect(() => {
        fetch('http://localhost/seo_api/testimonial.php')
          .then((response) => response.json())
          .then((d) => setTest(d))
    
      }
      )
  return (
    <>  
    <div style={{width:'95%',  marginLeft:'3%'}}>
      <Slider {...settings}>
          
          {test.map((te,i)=>
          <div className='container-xxs py-5'>
        
   
  

      <div> 
      {/* Testimonial Start  */}

      <div className='container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp' data-wow-delay='0.1s' key={i} >
    
    
              <div className='container py-5 px-lg-5'>
              
                  <div className='slick-carousel testimonial-carousel'>
                      <div className='testimonial-item bg-transparent border rounded text-white p-4'>
                          <i className='fa fa-quote-left fa-2x mb-3'></i>
                          <p dangerouslySetInnerHTML={{__html: te.description}}></p>
                          {/* <p>{ te.description}</p> */}
                          <div className='d-flex align-items-center'>
                              <img className='img-fluid flex-shrink-0 rounded-circle'
                              src={`img/${te.photo}`} style={{width: '50px', height: '50px'}}/>
                              <div className='ps-3'>
                                  <h6 className='text-white mb-1'>{te.name}</h6>
                                  <small>{te.profession}</small>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

       </div>
       </div>
      // </div>
    
  )}
 
      {/* <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
      </Slider>
      </div>
    </>
  )
}
