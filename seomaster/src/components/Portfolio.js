import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  const [port, setPort] = useState([]);

  useEffect(() => {
    fetch("http://localhost/seo_api/port.php")
      .then((response) => response.json())
      .then((d) => setPort(d));
  });
  return (
    <>
      {/* Portfolio Start  */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div
            className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Projects
            </h6>
            <h2 className="mt-2">Recently Launched Projects</h2>
          </div>

          <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li className="btn px-3 pe-4 active" data-filter="*">
                  All
                </li>
                <li className="btn px-3 pe-4" data-filter=".first">
                  Design
                </li>
                <li className="btn px-3 pe-4" data-filter=".second">
                  Development
                </li>
              </ul>
            </div>
          </div>

          <div className="row g-4 portfolio-container">
            {port.map((po, i) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
                data-wow-delay="0.1s"
                key={i}
              >
                <div className="position-relative rounded overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src={`img/${po.photo}`}
                    alt=""
                  />
                  <div className="portfolio-overlay">
                    <NavLink
                      className="btn btn-light"
                      to={`img/${po.photo}`}
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-plus fa-2x text-primary"></i>
                    </NavLink>
                    <div className="mt-auto">
                      <small className="text-white">
                        <i className="fa fa-folder me-2"></i>
                        {po.title_1}
                      </small>
                      <a className="h5 d-block text-white mt-1 mb-0" href="">
                        {po.title_2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* {port.map((po,i)=>
                    <div className='col-lg-4 col-md-6 portfolio-item second wow zoomIn' data-wow-delay='0.3s' key={i} >
                        <div className='position-relative rounded overflow-hidden'>
                            <img className='img-fluid w-100' src={`img/${po.photo}`}  alt=''/>
                            <div className='portfolio-overlay'>
                                 <NavLink className='btn btn-light' to={`img/${po.photo}`} data-lightbox='portfolio'><i className='fa fa-plus fa-2x text-primary'></i></NavLink>
                               
                                <div className='mt-auto'>
                                    <small className='text-white'><i className='fa fa-folder me-2'></i>Web Design</small>
                                    <NavLink className='h5 d-block text-white mt-1 mb-0' to=''>Project Name</NavLink>
                                </div>
                            </div>
                        </div>
                    </div> )} */}
            {/* <div className='col-lg-4 col-md-6 portfolio-item first wow zoomIn' data-wow-delay='0.6s'> 
                        <div className='position-relative rounded overflow-hidden'>
                            <img className='img-fluid w-100' src='img/portfolio-3.jpg' alt=''/>
                            <div className='portfolio-overlay'>
                                <a className='btn btn-light' href='img/portfolio-3.jpg' data-lightbox='portfolio'><i className='fa fa-plus fa-2x text-primary'></i></a>
                                <div className='mt-auto'>
                                    <small className='text-white'><i className='fa fa-folder me-2'></i>Web Design</small>
                                    <a className='h5 d-block text-white mt-1 mb-0' href=''>Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 portfolio-item second wow zoomIn' data-wow-delay='0.1s'>
                        <div className='position-relative rounded overflow-hidden'>
                            <img className='img-fluid w-100' src='img/portfolio-4.jpg' alt=''/>
                            <div className='portfolio-overlay'>
                                <a className='btn btn-light' href='img/portfolio-4.jpg' data-lightbox='portfolio'><i className='fa fa-plus fa-2x text-primary'></i></a>
                                <div className='mt-auto'>
                                    <small className='text-white'><i className='fa fa-folder me-2'></i>Web Design</small>
                                    <a className='h5 d-block text-white mt-1 mb-0' href=''>Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 portfolio-item first wow zoomIn' data-wow-delay='0.3s'>
                        <div className='position-relative rounded overflow-hidden'>
                            <img className='img-fluid w-100' src='img/portfolio-5.jpg' alt=''/>
                            <div className='portfolio-overlay'>
                                <a className='btn btn-light' href='img/portfolio-5.jpg' data-lightbox='portfolio'><i className='fa fa-plus fa-2x text-primary'></i></a>
                                <div className='mt-auto'>
                                    <small className='text-white'><i className='fa fa-folder me-2'></i>Web Design</small>
                                    <a className='h5 d-block text-white mt-1 mb-0' href=''>Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 portfolio-item second wow zoomIn' data-wow-delay='0.6s'>
                        <div className='position-relative rounded overflow-hidden'>
                            <img className='img-fluid w-100' src='img/portfolio-6.jpg' alt=''/>
                            <div className='portfolio-overlay'>
                                <a className='btn btn-light' href='img/portfolio-6.jpg' data-lightbox='portfolio'><i className='fa fa-plus fa-2x text-primary'></i></a>
                                <div className='mt-auto'>
                                    <small className='text-white'><i className='fa fa-folder me-2'></i>Web Design</small>
                                    <a className='h5 d-block text-white mt-1 mb-0' href=''>Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>  */}
          </div>
        </div>
      </div>
      {/* Portfolio End */}
    </>
  );
};

export default Portfolio;
