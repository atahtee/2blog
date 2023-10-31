import React from 'react';
import { IF } from '../url';
import '../styles/font.css';

const HomePosts = ({ post }) => {
  return (
    <div className='w-full flex mt-8 space-x-4 '>
      {/* Shared Container with Hover Effect */}
      <div className='w-full flex flex-col md:flex-row hover:bg-gray-100 transition transform hover:scale-105'>
        {/* Left (Image) */}
        <div className='w-full md:w-[35%] h-[250px] p-4 rounded-lg shadow-lg bg-white'>
          <img src={IF + post.photo} alt="" className='h-full w-full object-cover' />
        </div>

        {/* Right (Post Details) */}
        <div className='w-full md:w-[65%] h-[250px] p-4 rounded-lg shadow-lg bg-white'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold mb-2'>
              {post.title}
            </h1>
          </div>
          <div className='flex items-center justify-between mb-2 text-gray-500 text-sm'>
            <p>@{post.username}</p>
            <p>{new Date(post.updatedAt).toDateString()}</p>
          </div>
          <p className='text-sm md:text-base text-gray-700'>
            {post.desc.slice(0, 400)}<span className='text-blue-500 cursor-pointer hover:underline'>...Read more</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePosts;
