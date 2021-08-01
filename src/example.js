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
     interval: 1000
    // config:config.stiff
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src="https://rukminim1.flixcart.com/flap/1400/280/image/4abbdcd0a4ad2a6b.jpg?q=50" alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://rukminim1.flixcart.com/flap/1400/280/image/aa9606c4e9186450.jpg?q=50" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://rukminim1.flixcart.com/flap/1400/280/image/a4f65e0b2afb8b8f.jpg?q=50" alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src="" alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />,
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
      <div style={{ width: "100%", height: "500px", margin: "0 auto"}}>
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
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
  
          }}
        >
           <div
             style={{position: "absolute",
                  display: "flex",
              height: "70px",
              top:"30%",
            margin:"10% 5%",
                width: "90%",
          justifyContent: "space-between",
              zIndex: "1000",
              }}
              >
            <button
             
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}
            >
              Left Arrow
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}
            >
              Right Arrow
            </button>
          </div>
         
  </div>
  </div>
  );
  }
}
