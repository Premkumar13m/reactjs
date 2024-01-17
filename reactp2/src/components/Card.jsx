// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types, no-unused-vars
function Card({username,btnText="visit me"}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
    <img
      src="https://images.pexels.com/photos/7277023/pexels-photo-7277023.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{username}</h1>
      <p className="mt-2 text-sm text-gray-300 font-semibold">
      Spring is one of the four temperate seasons, succeeding winter and preceding summer.
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold hover:bg-transparent text-blue-700">
        {btnText} →
      </button>
    </div>
  </div>
  
  )
}

export default Card
