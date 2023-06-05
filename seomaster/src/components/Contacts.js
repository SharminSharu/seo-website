import React from "react";
import { useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import Home from "./Home";
import Foot from "./Foot";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const com = () => {
    // if (isset($_POST[''])) {

    // }

    axios({
      method: "post",
      url: "http://localhost/seo_api/contact.php",
      data: {
        name: name,
        email: email,
        subject: subject,
        msg: msg,
      },
    }).then(function (response) {
      // console.log(response);

      setName("");
      setEmail("");
      setSubject("");
      setMsg("");
    });
  };
  return (
    <>
      <Nav />
      <div className="container-xxl py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="ext-white animated zoomIn">Contact Us</h1>
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
      {/* Contact Start  */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h6 className="position-relative d-inline text-primary ps-4">
                  Contact Us
                </h6>
                <h2 className="mt-2">Contact For Any Query</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Subject"
                          onChange={(e) => setSubject(e.target.value)}
                          value={subject}
                        />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id=""
                          onChange={(e) => setMsg(e.target.value)}
                          value={msg}
                          style={{ height: "150px" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        onClick={com}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End  */}
      <Foot />
    </>
  );
};

export default Contacts;
