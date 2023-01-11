import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Css/EnggDetails.css";

const EnggDetails = () => {
  const [items, setItems] = useState({});
  const [state,setstate] = useState(false);

  const { id } = useParams();

  const toggle=()=>{
    setstate(!state);
  }

  useEffect(() => {
    fetch("http://localhost:3500/engg")
      .then(res => {
        if(res.ok){
          return res.json()
        }else{
          console.log('res');
        }
      })
      .then((data) => {
        const newProduct = data.find((item) => item.id === parseInt(id));
        setItems(newProduct);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div class="app-bg">
      {
        <div class="container">
          <div class="icon mb-4">
            <div>
              <img src={items.icon} />
            </div>
            <div class="ms-4">
              <div class="fs-2 fw-semibold">{items.title}</div>
              <div class="fs-5 mb-3">{items.location}</div>
            </div>
          </div>
          <div class=" fs-5 mb-3">
            <span class="fs-5 fw-semibold">Timing :- </span>
            {items.time}
          </div>
          <div class="fs-5 mb-3">
            <span class="fw-semibold">Package :- </span>
            {items.salary}
          </div>
          <div class="fs-5 mb-3">
            <span class="fw-semibold">Experience :- </span> {items.experience}
          </div>
          <div class="fs-5 mb-3">
            <span class="fw-semibold">Vacancies :- </span> {items.vacancy}
          </div>
          <div class="fs-5 mb-3">
            <span class="fw-semibold">Job-Description :- </span>
            <br />
            {items.description}
          </div>
          <div>
            <button
              onClick={toggle}
              type="button"
              class={"btn btn-primary" + (state ? "btn btn-success" : "")}
            >
              {state ? "Applied" : "Apply"}
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default EnggDetails;
