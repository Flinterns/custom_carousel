import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Dots from "./Dots";

let interval = null;

export default function Example({ slides: sourceSlides = [] }) {
  const ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  const slides = [...sourceSlides].map((slide, index) => {
    return {
      ...slide,
      onClick: () => setState({ ...state, goToSlide: index }),
    };
  });

  const updateSlide = () => {
    setCurrentSlide(ref.current.state.index + 1);
  };

  useEffect(() => {
    // eslint-disable-next-line
    interval = setInterval(updateSlide, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setState({ ...state, goToSlide: currentSlide });

    // eslint-disable-next-line
  }, [currentSlide]);

  const handleClick = (v) => {
    clearInterval(interval);
    interval = setInterval(updateSlide, 5000);
    setCurrentSlide(v);
  };

  return (
    <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
      <Carousel
        ref={ref}
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />

      <Dots
        slides={slides}
        currentSlide={currentSlide >= slides.length ? 0 : currentSlide}
        goToSlide={handleClick}
      />

      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            
            display: "flex",
            height: "70px",
            top: "30%",
            margin: "10% 5%",
            width: "90%",
            justifyContent: "space-between",
            zIndex: "1000",
          }}
        >
          <div style={{
                  background:"white",
                  height:"40px",
                  width:"40px",
                  position:"absolute",
                  left:"4%",
                  top:"45%",

          }}>
            <img src="https://img.icons8.com/material-outlined/24/000000/long-arrow-left.png"
               style={{ width:"30px",
               height:"30px", 
              margin:"5px",
             }}
             onClick={() => {
               setState({ goToSlide: state.goToSlide - 1 });
             }}
           >
    
          </img>
          </div>
            <div style={{
                  background:"white",
                  height:"40px",
                  width:"40px",
                  margin:"0%",
                  position:"absolute",
                  left:"91%",
                  top:"45%",

          }}>
           
            <img src="https://img.icons8.com/material-sharp/24/000000/long-arrow-right.png"
              onClick={() => {
                setState({ goToSlide: state.goToSlide + 1 });
              }}
              style={{ width:"30px",
               height:"30px", 
              margin:"5px",
             }}
            >
             </img>
             </div>
          </div>
         
  </div>
  </div>
  );
  }
