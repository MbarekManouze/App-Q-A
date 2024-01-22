import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  async () => {
    try{

      const response = await axios.post('http://localhost:5000/auth/Login', {
        email,
        password,
      }, {withCredentials: true})
      .then(({data}) => {
        console.log('hnaaa\n');
        if (data === true)
          window.location.href = "http://localhost:3000/MainContent";
        else{window.location.href = "http://localhost:3000/MainContent";}
      })
      if (response.data.false)
        console.log('okeeeey');
    }
    catch(error){
    }
  };


  return (
      <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full items-center justify-center">
          <div className="md:w-8/12">
            <form className=' flex lg:flex-col sm:flex-row sm:flex-wrap items-center justify-center'>
              <div className="sm:flex-wrap md:space-x-3 lg:space-x-3">
                  <input
                  type="email"
                  label="Email address"
                  size="lg"
                  className="mb-6"
                  onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <input
                  type="password"
                  label="Password"
                  className="mb-6"
                  size="lg"
                  onChange={(e) => setPassword(e.target.value)}
                  ></input>
              </div>
                  <div rippleColor="light" className="w-full">
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="bg-blue-600 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Login
                  </button>
                </div>
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <Link to="/">
                      <p className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                          SignUp
                      </p>
                  </Link>
                </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default Login;
  