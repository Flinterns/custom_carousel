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

  useEffect(() => {
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

  const func = () =>{

     toggleStart();

  }
  
  return (

    <div>

<button onClick={()=> toggle()} style={{  display: "block",
           cursor:"pointer",
           width: "140px",
           height: "50px",
           background: "#4E9CAF",
           padding: "5px",
           textAlign: "center",
           borderRadius: "5px",
           color: "white",
           fontSize:"18px",
           fontFamily:"sans-serif",
           float:"right",
           margin :"2%",}} >Pause</button>
             
    
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

<button onClick={()=> func()} style={{  display: "block",
           cursor:"pointer",
           width: "140px",
           height: "50px",
           background: "#4E9CAF",
           padding: "5px",
           textAlign: "center",
           borderRadius: "5px",
           color: "white",
           marginBottom: "5%",
           fontSize:"18px",
           fontFamily:"sans-serif",
           float:"right",
           margin :"2%",}} >Start</button>

      </div>

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
             onClick={updateNeg}
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
              onClick={updateSlide}
              style={{ width:"30px",
               height:"30px", 
              margin:"5px",
             }}
            >
             </img>
            
             
             </div>
          </div>
         
  </div>

  <div
          id="myModal"
          className="modal fade in"
          role="dialog"
          style={styles}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  onClick={openModal}
                  className="close"
                >
                  &times;
                </button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
              <img src="https://picsum.photos/500/300/?random" alt="7" /></div>
              <div className="modal-footer">
                <button
                  onClick={openModal}
                  type="button"
                  className="btn btn-default"
                  
                >
                  Close
                </button>

                <button
                  onClick = "window.open('https://www.flipkart.com/')"
                  type="button"
                  className="btn btn-default"
                >
                  //https://www.flipkart.com/
                  Go To Landing Page
                </button>
              </div>
            </div>
          </div>
        </div>

    
  </div>
  );
  }
