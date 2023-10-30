import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const res = await axios.post(URL + "/api/auth/register", { username, email, password });
            setUsername(res.data.username);
            setEmail(res.data.email);
            setPassword(res.data.password);
            setError(false);
            navigate("/login");
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <div style={{ margin: 0, padding: 0, overflowY: 'hidden' }}>
          <div className='bg-gradient-to-r from-[#FF7A95] to-[#FFB199] w-full flex justify-center items-center min-h-screen'>
            <div className='w-full space-y-4 max-w-[400px] p-8 rounded-lg shadow-md bg-white'>
              <h1 className='text-3xl font-extrabold text-gray-800 text-center'>
                Create an account
              </h1>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className='w-full px-4 py-2 border-2 border-gray-300 outline-0 rounded-lg'
                type='text'
                placeholder='Enter your username'
              />
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
                onClick={handleRegister}
                className='w-full px-4 py-4 text-lg font-semibold text-white bg-[#FF7A95] rounded-lg hover:bg-[#FF524E]'
              >
                Register
              </button>
              {error && <h3 className='text-red-500 text-sm text-center'>Something went wrong</h3>}
              <div className='flex justify-center items-center space-x-3'>
                <p className='text-gray-800'>Already have an account?</p>
                <p className='text-[#FF7A95] hover:text-[#FF524E]'><Link to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Register;
