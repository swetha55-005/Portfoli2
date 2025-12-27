import React from 'react'
import Image1 from'./../../images/girl1.jpg';

export const Header = () => {
  return (
    <div className='flex-col flex w-80 h-screen bg-white p-6 shadow-lg ' >
      <div>
        <img src={Image1} alt='image'
        className='w-40 h-40 object-cover rounded-3xl shadow-md'
        
          ></img>
      </div>
        <div>
    <h1  className='text-2xl font-bold mt-6 '>PORTFOLIO</h1>
      <p className='text-gray-500 text-sm'> By Swetha</p>
    </div>
        <div className='flex flex-col font-medium w-full gap-5 mt-10'> 
        <a href='/' >Home</a>
        <a href='/About'>About</a>
        <a href='/Projects'>Projects</a>
        <a href='/Contact'>Contact</a>
        </div>
        </div>
   
  )
}
