import React from 'react'
import { Project } from './Project'
import { About } from './About'
import { Contact } from './Contact'

export const Home = () => {
  return (  
    <div className="w-full flex flex-col  items-center justify-start">

      
      <div className="w-full bg-white  p-5 text-black py-16 px-4 flex flex-col items-center rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center max-w-4xl">
          Hi, I'm Swetha — an aspiring Web Developer and Data Entry Freelancer.
        </h1>

        <p className="text-center mt-4 max-w-3xl text-blue-950">
          I enjoy creating clean, simple, and user-friendly websites.  
          I'm currently learning React, HTML, CSS, and improving my skills through real projects.
        </p>
      </div>

      
      <div className="w-full bg-white py-12 px-4">
        <About />
      </div>

     
      <div className="w-full bg-gray-100 py-12 px-4">
        <Project />
      </div>

      
      <div className="w-full bg-purple-200 py-12 px-4">
        <Contact />
      </div>

    </div>
  )
}