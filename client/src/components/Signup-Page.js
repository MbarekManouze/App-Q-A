import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/auth/SignUp', {
        email,
        password,
      }, {withCredentials: true},).then(()=>{
        window.location.href = "http://localhost:3000/Login";
      })
      .catch(() => {
        seterror("something went wrong");
      })
    } catch (error) {
    }
  };

    return (
          <section className="h-screen">
            <div className="h-full">
                <p className='text-red text-center mt-20'>{error}</p>
              <div className="g-6 flex h-full items-center justify-center">
                <div className="md:w-8/12">
                  <form className=' flex lg:flex-col sm:flex-row sm:flex-wrap items-center justify-center'>
                    <div  className="sm:flex-wrap md:space-x-3 lg:space-x-3">
                      
                      <input
                        type="email"
                        label="Email address"
                        placeholder="Email"
                        size="lg"
                        className="mb-6"
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>

                      <input
                        type="password"   
                        label="Password"
                        placeholder="Password"
                        className="mb-6"
                        size="lg"
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
      
                    <div rippleColor="light" className="w-full">
                        <button
                          type="button"
                          className="bg-green-400 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          onClick={handleSignup}
                          >
                          SIGN UP
                        </button>

                      <Link to="/Login">
                        <p
                          className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >
                          Have an account?
                        </p>
                      </Link>

                    </div>      
                  </form>
                </div>
              </div>
            </div>
          </section>
    );
}
  
  export default Signup;
  