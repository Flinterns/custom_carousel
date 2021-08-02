import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

let slides = [
  {
    key: uuidv4(),

    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/4abbdcd0a4ad2a6b.jpg?q=50" alt="1" />
  },
  {
    key: uuidv4(),
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/aa9606c4e9186450.jpg?q=50" alt="2" />
  },
  {
    key: uuidv4(),
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/a4f65e0b2afb8b8f.jpg?q=50" alt="3" />
  },
  {
    key: uuidv4(),
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/3ef6b71c7dda2ebe.jpg?q=50" alt="4" />
  },
  {
    key: uuidv4(),
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/bbbf1d709468c0e4.jpg?q=50" alt="5" />
  },
  {
    key: uuidv4(),
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/a4aa90e138dde3c6.jpg?q=50" alt="6" />
  },
  {
    key: uuidv4(),
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/3ef6b71c7dda2ebe.jpg?q=50" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/3419f1a004b7504b.jpg?q=50" alt="8" />
  }

];

export default class ExampleV extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle,
    animationConfig: { tension: 120, friction: 14 },
  };

  // onChangeInput = e => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",

          margin: "0",
          background: "white"

        }}
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
