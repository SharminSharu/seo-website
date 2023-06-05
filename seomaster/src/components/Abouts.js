import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Foot from "./Foot";
import About from "./About";

const Abouts = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/seo_api/about.php")
      .then((response) => response.json())
      .then((d) => setAbouts(d));
  });

  return (
    <>
      <Nav />
      
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="ext-white animated zoomIn">About Us</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: "90px" }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Pages
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Search Start  */}
      <div className="modal fade" id="searchModal" tabindex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(29, 29, 39, 0.7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div class="input-group" style={{ maxWidth: "600px" }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-light p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-light px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Search End  */}
      <br />
      <br />
      <br />

      {/* About Start  */}
      {/* About Start  */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          {abouts.map((ab, i) => (
            <div className="row g-5" key={i}>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="section-title position-relative mb-4 pb-2">
                  <h6 className="position-relative text-primary ps-4">
                    About Us
                  </h6>
                  <h2 className="mt-2">{ab.title}</h2>
                </div>
                <p className="mb-4">{ab.description}</p>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <h6 className="mb-3">
                      <i className="fa fa-check text-primary me-2"></i>
                      {ab.point_1}
                    </h6>
                    <h6 className="mb-0">
                      <i className="fa fa-check text-primary me-2"></i>
                      {ab.point_2}
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-3">
                      <i className="fa fa-check text-primary me-2"></i>
                      {ab.point_3}
                    </h6>
                    <h6 className="mb-0">
                      <i className="fa fa-check text-primary me-2"></i>
                      {ab.point_4}
                    </h6>
                    {/* <h6 className='mb-0'><i className='fa fa-check text-primary me-2'></i>{ab.point_}</h6> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <img className='img-fluid wow zoomIn' data-wow-delay='0.5s' src='%PUBLIC_URL%/img/about.jpg'/> */}

                <img
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.5s"
                //   style={{
                //     outline: '3px solid #5151F7',
                //     transition: 'outline 1s linear 0s',
                //     outline: '10px solid #9049E0'
                //   }}
                  src={`img/${ab.photo}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About End  */}

      <div>
        <div className="row g-3" style={{ width: "95%", marginLeft: "3%" }}>
          <div className="col-sm-6">
            <h6 className="mb-3">
              <i className="fa fa-check text-primary me-2"></i>{" "}
              <u>Award Winning:</u>{" "}
            </h6>
            <p>
              The main service an SEO agency will provide is improving your
              websites visibility on the search engine results pages (SERPs).
              More search visibility means more organic traffic will be driven
              to your website, sending more leads or customers to your business.
              Services supplied by different agencies vary, but your agency
              should be able to deliver the following core SEO services for your
              business.{" "}
            </p>
            <h6 className="mb-0">
              <i className="fa fa-check text-primary me-2"></i>{" "}
              <u>24/7 Support</u>
            </h6>
            <p>
              What this means is that your business is listed showing your NAP
              (Name, Address, Phone Number) in a way that it matches what is on
              your website and your local business listing on Google My
              Business. This provides Google and the other search engines with
              proof that your business is genuine and you provide services in
              the niche-specific market you say you do. It makes it easier for
              them to evaluate your business when the information shared is
              congruent and matches their own information. This is the time
              where duplicate content is essential.
            </p>
          </div>

          <div className="col-sm-6">
            <h6 className="mb-3">
              <i className="fa fa-check text-primary me-2"></i>
              <u>Professional Staff</u>
            </h6>
            <p>
              The main service an SEO agency will provide is improving your
              websites visibility on the search engine results pages (SERPs).
              More search visibility means more organic traffic will be driven
              to your website, sending more leads or customers to your business.
              Services supplied by different agencies vary, but your agency
              should be able to deliver the following core SEO services for your
              business.
            </p>
            <h6 className="mb-0">
              <i className="fa fa-check text-primary me-2"></i>
              <u>Fair Prices</u>
            </h6>
            <p>
              What this means is that your business is listed showing your NAP
              (Name, Address, Phone Number) in a way that it matches what is on
              your website and your local business listing on Google My
              Business. This provides Google and the other search engines with
              proof that your business is genuine and you provide services in
              the niche-specific market you say you do. It makes it easier for
              them to evaluate your business when the information shared is
              congruent and matches their own information. This is the time
              where duplicate content is essential.
            </p>
          </div>
        </div>
      </div>

      <Foot />

      {/* About End  */}
    </>
  );
};

export default Abouts;
