import React, { useEffect, useState } from 'react';
import { IF } from '../url';
import '../styles/font.css';

const HomePosts = ({ post }) => {
  const [maxChars, setMaxChars] = useState(400);

  useEffect(() => {
    // Listen for window resize events to adjust character limit
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMaxChars(200);
      } else {
        setMaxChars(400);
      }
    };

    // Initial character limit based on screen width
    handleResize();

    // Add a listener for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full flex mt-8 space-x-4'>
      {/* Shared Container with Hover Effect */}
      <div className='w-full flex flex-col md:flex-row hover:bg-gray-100 transition transform hover:scale-105'>
        {/* Left (Image) */}
        <div className='w-full md:w-[35%] h-[250px] p-4 rounded-lg shadow-lg bg-white'>
          <img src={IF + post.photo} alt="" className='h-full w-full object-cover' />
        </div>

        {/* Right (Post Details) */}
        <div className='w-full md:w-[65%] h-[250px] p-4 rounded-lg shadow-lg bg-white'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold mb-2'>{post.title}</h1>
          </div>
          <div className='flex items-center justify-between mb-2 text-gray-500 text-sm'>
            <p>@{post.username}</p>
            <p>{new Date(post.updatedAt).toDateString()}</p>
          </div>
          <p className='text-sm md:text-base text-gray-700'>
            {post.desc.slice(0, maxChars)}
            {post.desc.length > maxChars && (
              <span className='text-blue-500 cursor-pointer hover:underline'>...Read more</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePosts;
