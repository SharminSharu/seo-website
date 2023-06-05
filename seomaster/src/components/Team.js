import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Team = () => {

    
    const [team,setTeam] = useState([]);


    useEffect(() => {
      fetch('http://localhost/seo_api/team.php')
        .then((response) => response.json())
        .then((d) => setTeam(d))
  
    }
    )
    return (
        <>
       {/* Team Start */}
        <div className='container-xxl py-5'>
            <div className='container px-lg-5'>
                <div className='section-title position-relative text-center mb-5 pb-2 wow fadeInUp' data-wow-delay='0.1s'>
                    <h6 className='position-relative d-inline text-primary ps-4'>Our Team</h6>
                    <h2 className='mt-2'>Meet Our Team Members</h2>
                </div>
                <div className='row g-4'>
                {team.map((tem,i)=>
                    <div className='col-lg-4 col-md-6 wow fadeInUp' data-wow-delay='0.1s' 
                    key={i}>
                        <div className='team-item'>
                            <div className='d-flex'>
                                <div className='flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5' style={{width: '75px'}}>
                                    <NavLink to='' className='btn btn-square text-primary bg-white my-1'>
                                    <i className='fab fa-facebook-f'></i>
                                    </NavLink>
                                    
                                    <NavLink to='' className='btn btn-square text-primary bg-white my-1'>
                                    <i className='fab fa-twitter'></i>
                                    </NavLink>
                                    <NavLink to='' className='btn btn-square text-primary bg-white my-1'>
                                    <i className='fab fa-instagram'></i>
                                    </NavLink>
                                    <NavLink to='' className='btn btn-square text-primary bg-white my-1'>
                                    <i className='fab fa-linkedin-in'></i>
                                    </NavLink>

                                   
                            
                                </div>
                                <img className='img-fluid rounded w-100' 
                                src={`img/${tem.photo}`} alt=''/>
                            </div>
                            <div className='px-4 py-3'>
                                <h5 className='fw-bold m-0'>{tem.name}</h5>
                                <small>{tem.designation}</small>
                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </div>
          {/* Team End */}
        </>
    );
};

export default Team;