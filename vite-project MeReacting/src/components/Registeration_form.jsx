import React, { useState } from "react";

const Registeration_form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted: ", formData);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="bg-pink-200 flex items-center justify-center h-screen p-20">
      <form
        className="max-w-lg h-55 flex flex-col items-center justify-center mx-auto bg-pink-400  p-10 rounded-3xl shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-centre">Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-grey-300 p-2 rounded-2xl h-15"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-grey-300 p-2 rounded-2xl h-15"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-grey-300 p-2 rounded-2xl h-15"
        />

        <button
          type="submit"
          className="w-1/2 px-4 py-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Registeration_form;
