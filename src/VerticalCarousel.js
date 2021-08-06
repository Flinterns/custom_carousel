import React, { useEffect, useRef, useState, Component } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";
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
  position: absolute;
  display: flex;
  height: 70px;
  margin: 10% 5%;
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
      animationElement : !this.state.animationElement
    })
  };
  openModal =()=> {
    this.setState({
      modalVisible: !this.state.modalVisible,
      animationElement : !this.state.animationElement
    });

    console.log(this.state.modalVisible)
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
  
  render() {
    const { animationConfig, offsetRadius, showNavigation } = this.props;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <NavigationButtons>
          <NavBtn onClick={() => this.moveSlide(1)}>&#8593;</NavBtn>
          <NavBtn onClick={() => this.moveSlide(-1)}>&#8595;</NavBtn>
        </NavigationButtons>
      );
    }
   
    

    return (
      
      <React.Fragment>
         <div styles ={{
           opacity: this.state.modalVisible?"0.5":"1"
         }}>
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
    </div>
  
        <div id="myModal"
          role="dialog"
          style ={{
          position: "absolute", 
          top:"10%",
          left:"37%",
          borderRadius: "5px",
          zIndex:"3",
        padding: "10px",
        background: "#fff",
        borderradius: "5px",
        width: "30%",
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
              <img src="https://picsum.photos/500/300/?random" alt="7" 
                style={{  maxWidth:"100%",
                maxHieght:"100%",
                }}
                  /></div>
              <div className="modal-footer">
                

               <a
                data-effect="mfp-zoom-in"
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
                    transition:"popup"
                  }}
                >
            Go To Landing Page
                </a>
              </div>
            </div>
          </div>
        </div>
 
        <button style={{cursor:"pointer" }}onClick={()=> this.toggle() } >Pause</button>
        {navigationButtons}
      </React.Fragment>
    );
  }
}

export default VerticalCarousel;
