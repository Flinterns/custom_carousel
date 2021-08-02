import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.func = this.func.bind(this);
  }

  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    autoplay: true,
    interval: 1000,
    // config:config.stiff
  };

  slides = [
    {
      key: uuidv4(),

      content: (
        <img
          src="https://rukminim1.flixcart.com/flap/1400/280/image/4abbdcd0a4ad2a6b.jpg?q=50"
          alt="1"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://rukminim1.flixcart.com/flap/1400/280/image/aa9606c4e9186450.jpg?q=50"
          alt="2"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://rukminim1.flixcart.com/flap/1400/280/image/a4f65e0b2afb8b8f.jpg?q=50"
          alt="3"
        />
      ),

    },
    {
      key: uuidv4(),
      content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/3ef6b71c7dda2ebe.jpg?q=50" alt="4" />,
    },
    {
      key: uuidv4(),

      content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/bbbf1d709468c0e4.jpg?q=50" alt="5" />,

    },
    {
      key: uuidv4(),
      content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/a4aa90e138dde3c6.jpg?q=50" alt="6" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/3ef6b71c7dda2ebe.jpg?q=50" alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/3419f1a004b7504b.jpg?q=50" alt="8" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  func() {
    console.log("on click");
  }

  render() {
    return (
      <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          // showNavigation={this.state.showNavigation}
          autoplay={this.state.autoplay}
          interval={this.state.interval}
          //onClick={this.func()}
          showArrows={false}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >

           <div
             style={{
              display: "flex",
              height: "70px",
              top:"30%",
              margin:"10% 5%",
              width: "90%",
              justifyContent: "space-between",
              zIndex: "1000",
              }}
              >
          


          <div style={{
                  background:"white",
                  height:"50px",
                  width:"50px",
                  position:"absolute",
                  left:"4%",
                  top:"45%",

          }}>
            <img src="https://img.icons8.com/material-outlined/24/000000/long-arrow-left.png"
               style={{ width:"40px",
               height:"40px", 
              margin:"5px",
             }}
             onClick={() => {
               this.setState({ goToSlide: this.state.goToSlide - 1 });
             }}
           >
    
          </img>
          </div>
            <div style={{
                  background:"white",
                  height:"50px",
                  width:"50px",
                  margin:"0%",
                  position:"absolute",
                  left:"91%",
                  top:"45%",

          }}>
           
            <img src="https://img.icons8.com/material-sharp/24/000000/long-arrow-right.png"
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}
              style={{ width:"40px",
               height:"40px", 
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
}