import React, { useState } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    setData(response.data);
    console.log(data);
  };

  return (
    <div className="p-10 ">
      <button
        onClick={getData}
        className="bg-blue-400 active:scale-97 rounded-2xl text-white font-semibold text-2xl px-6 py-3 mb-5"
      >
        Get Data
      </button>
      <div className="p-5 bg-pink-400 text-white">
        {data.map((elem, idx) => (
          <div
            key={idx}
            className="bg-white text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3"
          >
            <img  className="h-40"  src={elem.download_url} />
            <h1>{elem.author}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
