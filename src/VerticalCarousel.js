import React, { useEffect, useRef, useState, Component } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";
import Dots from "./Carousel/Dots";
import "./index.css";
let interval=null;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

const NavigationButtons = styled.div`
 
  display: flex;
  height: 50px;
  margin: 8% 5%;
  width: 90%;
  justify-content: space-between;
  z-index: 1000;
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}


class VerticalCarousel extends React.Component {
  

  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false,
    animationElement : true,
    modalVisible:false,
    currRef: "",

    text :"Pause",

    currRefLink: ""

  };
 
  componentDidMount = () => {
    document.addEventListener("keydown", (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        this.moveSlide(-1);
      }
      if (event.keyCode === 40) {
        this.moveSlide(1);
      }
      
    

    });
    const updateSlide = () => {
      this.moveSlide(1);
    };
  
   
      interval = setInterval(()=> {
        if(this.state.animationElement)
   {
        this.setState({
           index: this.modBySlidesLength(this.state.index + 1),
            goToSlide: null,
          });
         
      }}, 3000);
    
  };

  componentWillUnmount=()=>{
    clearInterval(this.interval);
  }
  

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        extraRef: PropTypes.any,
        extraRefLink: PropTypes.any,
        content: PropTypes.object,
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object,
  };


  static defaultProps = {
    offsetRadius: 0,
    // animationConfig: { tension: 120, friction: 14 }
  };
 

  modBySlidesLength = (index) => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = (direction) => {
    this.setState({
      index: this.modBySlidesLength(this.state.index + direction),
      goToSlide: null,
    });
  };
  toggle = () => { 
    this.setState({
      animationElement : !this.state.animationElement,
      text: this.state.animationElement?"Play":"Pause",
    })
  };

  clampOffsetRadius(offsetRadius) {
    const { slides } = this.props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides() {
    const { slides } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[this.modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  getSlides(){
    const { slides } = this.props;
    return slides;
  }

  openModal =()=> {
    const { slides } = this.props;
    this.setState({
      modalVisible: !this.state.modalVisible,
      animationElement : !this.state.animationElement,
      currRef : slides[this.state.index].extraRef,
      currRefLink : slides[this.state.index].extraRefLink
    });

    console.log(this.state.modalVisible)
  };
  
  
  render() {
    const { animationConfig, offsetRadius, showNavigation } = this.props;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <NavigationButtons>
          <NavBtn style={{ position:"absolute",
             top:"35%",
             left:"90%",
      }} onClick={() => this.moveSlide(1)}>&#8593;</NavBtn>
          <NavBtn style={{ position:"absolute",
             top:"35%",
      }}
            onClick={() => this.moveSlide(-1)}>&#8595;</NavBtn>
        </NavigationButtons>
      );
    }
   
    

    return (

      <div>
      
      <React.Fragment>
        <div style={{
          float:"right",
          display:"inline",
        }}>
         <button style={{
           display: "block",
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
           margin :"2%",
        
      
          
         }}
         
         onClick={()=> this.toggle() }>{this.state.text}</button>
        </div>
        <Wrapper  onClick ={this.openModal}     
>
          {this.getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              content={slide.content}
              moveSlide={this.moveSlide}
              offsetRadius={this.clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
              onClick ={this.openModal}
        
            />
            
           
          ))}

          
         
        </Wrapper>

        <div className="dots">
          
          {this.getSlides().length &&
            this.getSlides().map((s, i) => {
              return (
                <div
                  key={i}
                  onClick={() => this.setState({index: i})}
                  className={`dot ${i === this.state.index ? "dot-active" : ""}`}
                />
              );
            })}
        </div>

        
  
  
        <div id="myModal"
          role="dialog"
          style ={{
          position: "absolute", 
          top:"4%",
          left:"22%",
          borderRadius: "5px",
          zIndex:"3",
        padding: "10px",
        background: "#fff",
        borderradius: "5px",
        width: "55%",
        transition: "all 5s ease-in-out",
      display: this.state.modalVisible? 'block' : 'none'
        

    }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  onClick={this.openModal}
                  style={{
                       background:"white",
                       fontSize:"40px",
                       border:"white",
                       color:"grey"
    
                  }}
                >
                  &times;
                </button>

              </div > 
              <div className="modal-body">
            <img src= {require('./img/img1.jpeg')} alt="7" 
                style={{  maxWidth:"100%",
                maxHieght:"100%",
                }}
                  /></div>
              <div className="modal-footer">
                

               <a
                data-effect="mfp-zoom-in"
                onClick = {()=> window.open(this.state.currRefLink, "_blank")}
                  style={{
                    display: "block",
                    width: "140px",
                    height: "25px",
                    background: "#4E9CAF",
                    padding: "5px",
                    textAlign: "center",
                    borderRadius: "5px",
                    color: "white",
                    lineHeight: "25px",
                    fontSize:"15px",
                    fontFamily:"sans-serif",
                    float:"right",
                    transition:"popup",
                    cursor:"pointer"
                  }}
                >
            Go To Landing Page
                </a>
              </div>
            </div>
          </div>
        </div>
 
       
        {navigationButtons}

      
      </React.Fragment>
      </div>
    );
  }
}

export default VerticalCarousel;
