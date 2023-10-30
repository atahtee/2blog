import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL } from '../url';
import { UserContext } from '../context/UserContext';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true });
      // console.log(res.data);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <div className='min-h-screen bg-gray-600 flex flex-col'>
      <div className='bg-gradient-to-r from-[#FF7A95] to-[#FFB199] p-4 md:p-6 flex items-center justify-between'>
        <h1 className='text-lg md:text-xl font-extrabold'>
          <Link to="/">Blogwise</Link>
        </h1>
        <h3>
          <Link to="/register">Register</Link>
        </h3>
      </div>

      <div className='flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-[#FF7A95] to-[#FFB199]'>
        <h1 className='text-4xl font-extrabold text-gray-100 mb-4 text-center'>
          <Link to="/" className='text-white'>2blog</Link>
        </h1>

        <div className='w-full space-y-4 max-w-[400px] p-8 rounded-lg shadow-md bg-white'>
          <h1 className='text-3xl font-extrabold text-gray-800 text-center'>
            Login
          </h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-2 border-2 border-gray-300 outline-0 rounded-lg'
            type='text'
            placeholder='Enter your email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-4 py-2 border-2 border-gray-300 outline-0 rounded-lg'
            type='password'
            placeholder='Enter your password'
          />
          <button
            className='w-full px-4 py-4 text-lg font-semibold text-white bg-[#FF7A95] rounded-lg hover:bg-[#FF524E]'
            onClick={handleLogin}
          >
            Log in
          </button>
          {error && <h3 className='text-red-500 text-sm text-center'>Something went wrong</h3>}
          <div className='flex justify-center items-center space-x-3'>
            <p className='text-gray-800'>Don't have an account?</p>
            <p className='text-[#FF7A95] hover:text-[#FF524E]'>
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}