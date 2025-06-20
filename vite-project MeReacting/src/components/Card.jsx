import React from "react";

const Card = ( props ) => {
  return (
      <div className="max-w-[22vw] h-[54vh] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 mt-20">
        <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{props.title}</h2>
          <p className="text-gray-700 mt-4 text-sm">{props.description}</p>
          <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700">
            Connect
          </button> 
        </div>
      </div>
  );
};

export default Card;
