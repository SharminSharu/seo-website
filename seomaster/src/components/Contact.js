import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';


const Contact = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[subject,setSubject]=useState('')
    const[msg,setMsg]=useState('')
    const com=()=>{
        // if (isset($_POST[''])) {


        // }


       axios({
        method: 'post',
        url: 'http://localhost/seo_api/contact.php',
        data: {
        name: name,
        email: email,
        subject:subject,
        msg:msg 
        }
       })
       .then(function (response) {
        // console.log(response);
    
      setName('')
      setEmail('')
      setSubject('')
      setMsg('')
    
      });
    }
    return (
       <>

         {/* Contact Start  */}
        <div className='container-xxl py-5'>
            <div className='container px-lg-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-7'>
                        <div className='section-title position-relative text-center mb-5 pb-2 wow fadeInUp' data-wow-delay='0.1s'>
                            <h6 className='position-relative d-inline text-primary ps-4'>Contact Us</h6>
                            <h2 className='mt-2'>Contact For Any Query</h2>
                        </div>
                         
                        <div class="col-md-6">
                            
                            </div>
                            
                             <div class="col-md-6">
                            </div>

                      
                        <div className='wow fadeInUp' data-wow-delay='0.3s'>
                            <form>
                                <div className='row g-3'>
                                    <div className='col-md-6'>
                                        <div className='form-floating'>
                                            <input type='text' className='form-control' id=''placeholder='Your Name'
                                            onChange={(e)=>setName(e.target.value)}  
                                            value={name}/>
                                            <label for='name'>Your Name</label>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-floating'>
                                            <input type='text' className='form-control' id='' placeholder='Your Email'
                                            onChange={(e)=>setEmail(e.target.value)}  
                                            value={email}/>
                                            <label for='email'>Your Email</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <input type='text' className='form-control' id='' placeholder='Subject'
                                            onChange={(e)=>setSubject(e.target.value)}  
                                            value={subject}/>
                                            <label for='subject'>Subject</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-floating'>
                                            <textarea className='form-control' placeholder='Leave a message here' id='' 
                                            onChange={(e)=>setMsg(e.target.value)}  
                                            value={msg} style={{height: '150px'}}></textarea>
                                            <label for='message'>Message</label>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <button className='btn btn-primary w-100 py-3' type='submit'onClick={com} >Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* Contact End  */}
       </>
    );
};

export default Contact;