import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Newsletter = () => {
    const[email,setEmail]=useState('')
    
    const [letter, setLetter] = useState([]);


    useEffect(() => {
      fetch('http://localhost/seo_api/letter.php')
        .then((response) => response.json())
        .then((d) => setLetter(d))
  
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
      {/* Newsletter Start  */}
        <div className='container-xxl bg-primary newsletter my-5 wow fadeInUp' data-wow-delay='0.1s'>
            <div className='container px-lg-5'>
            {letter.map((le,i)=>
                <div className='row align-items-center' style={{height: '250px;'}}>
                    <div className='col-12 col-md-6' key={i}>
                        <h3 className='text-white'>{le.title}</h3>
                        <small className='text-white'>{le.title_1}</small>

                        <div className='position-relative w-100 mt-3'>
                            <input className='form-control border-0 rounded-pill w-100 ps-4 pe-5' type='text' placeholder='Enter Your Email'
                            onChange={(e)=>setEmail(e.target.value)}  value={email} 
                            style={{height: '48px;'}}/>
                            <button type='button' className='btn shadow-none position-absolute top-0 end-0 mt-1 me-2' onClick={com} >
                                <i className='fa fa-paper-plane text-primary fs-4'></i></button>
                        </div>
                    </div>
                    <div className='col-md-6 text-center mb-n5 d-none d-md-block'>
                        <img className='img-fluid mt-5' style={{height: '250px;'}}
                         src={`img/${le.img}`}/>
                    </div>
                </div>)}
            </div>
        </div>
      {/* Newsletter End  */}
       </>
    );
};

export default Newsletter;