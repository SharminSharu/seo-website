import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   let navigate = useNavigate();
   const login = () => {
     axios.post(
        //  "http://localhost/codeigniter_2/Api/login",
         "http://localhost/reactjs/seo_codigniter/Api/login_add",
        {
          email: email,
         password: password,
        },
        {
          header: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(function (response) {
        let data = response.data;
        if (data.status == true) {
          localStorage.setItem('token', data.token);
          navigate('/home');
        } else {
          console.log('error');
        }
        console.log(data)
      });
  };
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token != null) {
      navigate('/home');
    }
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>
          <u> Login</u>
        </h3>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" onClick={login} />
     
      </header>
    </div>
  );
}
