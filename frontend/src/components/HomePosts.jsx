import React, { useEffect, useState } from 'react';
import { IF } from '../url';
import '../styles/font.css';

const HomePosts = ({ post }) => {

  return (
    <div className='w-full flex mt-8 space-x-4 '>

      {/*left */}
      <div className='w-[35%] h-[200px] flex justify-center items-center border border-gray-200 p-4 rounded-lg shadow-lg bg-white transition transform hover:scale-105'>
        <img src={IF + post.photo} alt="" className='h-full w-full object-cover' />
      </div>

      {/*right*/}
      <div className='flex flex-col w-[65%] border border-gray-200 p-4 rounded-lg shadow-lg bg-white transition transform hover:scale-105'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold mb-2'>
            {post.title}
          </h1>
          {/* <i className='fa fa-eye text-blue-500'></i> */}
          {/* <p>{viewCount}</p> */}
        </div>
        <div className='flex items-center justify-between mb-2 text-gray-500 text-sm'>
          <p>@{post.username}</p>
          <p>{new Date(post.updatedAt).toDateString()}</p>
        </div>
        <p className='text-sm md:text-base text-gray-700'>
          {post.desc.slice(0, 200)}<span className='text-blue-500 cursor-pointer hover:underline'>...Read more</span>
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
