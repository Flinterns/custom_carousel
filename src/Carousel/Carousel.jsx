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
            position: "absolute",
            display: "flex",
            height: "70px",
            top: "30%",
            margin: "10% 5%",
            width: "90%",
            justifyContent: "space-between",
            zIndex: "1000",
          }}
        >
          <button
            onClick={() => {
              setState({ goToSlide: state.goToSlide - 1 });
            }}
          >
            Left Arrow
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            onClick={() => {
              setState({ goToSlide: state.goToSlide + 1 });
            }}
          >
            Right Arrow
          </button>
        </div>
      </div>
    </div>
  );
}
