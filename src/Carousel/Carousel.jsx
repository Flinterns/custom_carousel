import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Dots from "./Dots";
import "../index.css"

let interval = null;



export default function Example({ slides: sourceSlides = [] }) {
  const ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    modalVisible: false,
    animationElement :true,
  });

  const slides = [...sourceSlides].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {setState({ ...state, goToSlide: index}); },
    };
  });
   
  const openModal = () => {
    console.log("Open modal called ", state.modalVisible);
   
    setState({
      modalVisible: !state.modalVisible
    });
   
  }

  
  const updateSlide = () => {
    setCurrentSlide(ref.current.state.index + 1);
    console.log("test2");
  };

  const updateNeg = () =>{
    setCurrentSlide(ref.current.state.index - 1);
  };

  useEffect(() => {
    // eslint-disable-next-line
    if(state.animationElement){
    interval = setInterval(updateSlide, 3000);
    
    }
    return () => {
      clearInterval(interval);
    };
    
    
  }, []);

  useEffect(()=> {
    if(state.animationElement){
    setState({ ...state, goToSlide: currentSlide });
    }
    // eslint-disable-next-line
  }, [currentSlide]);

  const handleClick = (v) => {
    clearInterval(interval);
    interval = setInterval(updateSlide, 3000);
    setCurrentSlide(v);
  };

  let styles = state.modalVisible
  ? { position:  "absolute", 
      top:"10%",
      left:"40%",
      zIndex:"3"}
  : { display: "none" };

  const toggle = () => { 
    
    setState({
      animationElement: false
    });
   
    console.log(state.animationElement);
  };
  const toggleStart = () => { 
   
    setState({
      animationElement: true
    });

  
  };

  return (
  <div style={{ width: "80%", height: "300px", position:"absolute",
    top:"10%",
    left:"10%",
    
          
    }}>
      
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
          cursor:"pointer",
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
                 
                  height:"40px",
                  width:"40px",
                  position:"absolute",
                  left:"-3%",
                  top:"45%",
                  pointer:"cursor"

          }}>
            <img src="https://image.flaticon.com/icons/png/512/60/60775.png"
               style={{ width:"30px",
               height:"30px", 
              pointer:"cursor"
             }}
             onClick={updateNeg}
           >
    
          </img>
          </div>
            <div style={{
                
                  height:"40px",
                  width:"40px",
                  margin:"0%",
                  position:"absolute",
                  left:"98%",
                  top:"45%",

          }}>
           
            <img src="https://image.flaticon.com/icons/png/512/60/60758.png"
              onClick={updateSlide}
              style={{ width:"30px",
               height:"30px", 
              margin:"5px",
              pointer:"cursor"
             }}

            >
             </img>
             <img src="https://image.flaticon.com/icons/png/512/61/61039.png"
             onClick={()=> toggle() }
               style ={{
                  cursor:"pointer",
                  height:"30px",
                  width:"30px",
                  margin:"0%",
                  position:"absolute",
                  right:"70%",
                  top:"180%"
               }}>
             </img>
            
             <img src="https://image.flaticon.com/icons/png/512/0/375.png"
             onClick={()=> toggleStart()}
               style ={{
                  cursor:"pointer",
                  height:"30px",
                  width:"30px",
                  margin:"0%",
                  position:"absolute",
                  left:"40%",
                  top:"180%"
                 
               }}>
             </img>
             
             
             </div>
          </div>
         
  </div>

  </div>
  );
  }
