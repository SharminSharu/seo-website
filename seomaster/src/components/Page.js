import React from 'react'
import Foot from './Foot'
import Nav from './Nav'
import Team from './Team'
import Testimonial from './Testimonial'

export default function Page() {
  return (
   <>
   <Nav/>
   <div className='container-xxl py-5 bg-primary hero-header mb-5'>
                    <div className='container my-5 py-5 px-lg-5'>
                        <div className='row g-5 py-5'>
                            <div className='col-12 text-center'>
                                <h1 className='ext-white animated zoomIn'>Pages</h1>
                                <hr className='bg-white mx-auto mt-0' style={{width: '90px'}}/>
                                <nav aria-label="breadcrumb">
                                    <ol className='breadcrumb justify-content-center'>
                                        <li className='breadcrumb-item'><a className='text-white'href='/'>Home</a></li>
                                        <li className='breadcrumb-item'><a className='text-white'href="#">Pages</a></li>
                                        <li className='breadcrumb-item text-white active' aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
           
       {/* Full Screen Search Start  */}
            <div className='modal fade' id="searchModal" tabindex="-1">
                <div className='modal-dialog modal-fullscreen'>
                    <div className='modal-content' style={{background: 'rgba(29, 29, 39, 0.7)'}}>
                        <div className='modal-header border-0'>
                            <button type="button" className='btn bg-white btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body d-flex align-items-center justify-content-center'>
                            <div class="input-group" style={{maxWidth: '600px'}}>
                                <input type="text" className='form-control bg-transparent border-light p-3' placeholder="Type search keyword"/>
                                <button className='btn btn-light px-4'><i className='bi bi-search'></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        {/* Full Screen Search End  */}
           <br/>
           <br/>
           <br/>
   <Team/>
   <Testimonial/>
   <Foot/>
   </>
  )
}
