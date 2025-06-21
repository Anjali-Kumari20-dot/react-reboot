import { React, useState } from "react";
import Form from "./components/Registeration_form";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Users from "./components/Users";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const cardsData = [
  {
    title: "React Props Magic",
    description: "Reusable components powered by props? Yes, please!",
    image:
      "https://images.unsplash.com/photo-1749307918200-5e37c3b2fbc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjd8fHxlbnwwfHx8fHw%3D",
  },

  {
    title: "React Potions",
    description:
      "Props, hooks, and reusable components bubbling with potential.",
    image:
      "https://plus.unsplash.com/premium_photo-1749666992906-f059c7d88139?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTN8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Coding in Style",
    description: "Tailwind makes styling faster than ever ✨",
    image:
      "https://plus.unsplash.com/premium_photo-1677526496557-a830e2abbd37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjV8fHxlbnwwfHx8fHw%3D",
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-pink-200">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Form />
      <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center gap-6 p-10">
        {cardsData.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          );
        })}
      </div>
      {/* <Users /> */}
    </>
  );
};

export default App;
