import React from 'react'

const About = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="h-[40vh]  md:w-2/3 px-6 py-6 flex items-center justify-center text-center bg-white border rounded-2xl">
        <h1 className="text-4xl font-bold text-pink-600">
          Welcome to my <span className="underline">About Page</span>
        </h1>
      </div>
    </div>
  )
}

export default About