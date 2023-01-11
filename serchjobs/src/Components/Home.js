import React from "react";
import { useState, useEffect } from "react";
import "../Css/Home.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/home")
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
      });
  }, []);
  return (
    <div class="app-bg">
      {items.map((item) => (
        <div class="home-container">
          <div class="fs-1 fw-bold mb-2">{item.title}</div>
          <div class="fs-4 mb-4">{item.line1}</div>
          <div class="fs-4 mb-4">{item.line2}</div>
          <div class="fs-4 mb-4">{item.line3}</div>
          <div class="fs-4 mb-4">{item.line4}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
