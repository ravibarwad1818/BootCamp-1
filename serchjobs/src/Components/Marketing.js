import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/Engg.css";

const Marketing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/marketing")
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
      });
  }, []);
  return (
    <div class="app-bg">
      {items.map((item) => (
        <div class="engg-container" key={item.id}>
          <div>
            <img src={item.icon} />
          </div>
          <div class="ms-4">
            <Link to={"/marketingd/" + item.id}>
              <div class="fs-3">{item.title}</div>
            </Link>
            <div class="fs-5">{item.location}</div>
            <div class="fs-5"> Experience :- {item.experience}</div>
            <div class="fs-5"> Vacancy :- {item.vacancy}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marketing;
