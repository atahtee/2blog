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
   <>
   <div className='bg-gray-600 flex items-center justify-between px-6 md:px-[200px] py-4'>
                <h1 className='text-lg md:text-xl font-extrabold'><Link to="/">Blogwise</Link></h1>
                <h3><Link to="/login">Login</Link></h3>
            </div>

            <div className='bg-gray-600 h-screen flex flex-col'>
  <h1 className='text-4xl font-extrabold text-gray-100 mt-4 mb-4 text-center'>
    <Link to="/" className='text-white'>Creativity meets passion</Link>
  </h1>
  <div className='flex flex-col items-center justify-center h-full'>
    <div className='w-full space-y-4 max-w-[400px]'>
      <h1 className='text-2xl font-bold text-left text-gray-100'>
        Login 
      </h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className='w-full px-4 py-2 border-2 border-black outline-0'
        type='text'
        placeholder='Enter your email'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className='w-full px-4 py-2 border-2 border-black outline-0'
        type='password'
        placeholder='Enter your password'
      />
      <button
        className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-[#A8A2B6] hover:text-black'
        onClick={handleLogin}
      >
        Log in
      </button>
      {error && <h3 className='text-red-500 text-sm'>Something went wrong</h3>}
      <div className='flex justify-center items-center space-x-3'>
        <p>Don't have an account?</p>
        <p className='text-gray-100 hover:bg-[#A8A2B6] hover:text-black '>
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  </div>
</div>
   </>


   
    

  
  );
}
