import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';

const Client = () => {
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 2000,
        Testimonial: true
      };
      const [client, setClient] = useState([]);


      useEffect(() => {
        fetch('http://localhost/seo_api/client.php')
          .then((response) => response.json())
          .then((d) => setClient(d))
    
      }
      )
    return (
       <>
       <div style={{width:'95%',  marginLeft:'3%'}}>
        <Slider {...settings}>
        {client.map((ci,i)=>
          
        <div style={{minHeight:'1px'}} key={i}>
       <img className='img-fluid 'src={`img/${ci.img}`}/>
      </div>)}
       {/* <div>
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
    );
};

export default Client;