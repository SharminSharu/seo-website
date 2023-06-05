import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Client from "./Client";
import Contact from "./Contact";
import Foot from "./Foot";
import Head from "./Head";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token==null){
      navigate("/");
   }
    console.log(token);
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <a
        className="App_Link"
        href="javascript:void(0)"
        onClick={logout}
        rel="noopener noreferrer"
        
      ></a>
      <Nav />
      <Head />
      <About />
      <br />
      <br />
      <br />
      <Client />
      <br />
      <br />
      <br />
      <Newsletter />

      <Service />
      <Portfolio />
      <Team />
      <Testimonial />
      <Contact />

      <Foot />
    </>
  );
};

export default Home;
