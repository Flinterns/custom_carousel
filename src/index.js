import React from "react";
import ReactDOM from "react-dom";
import Example from "./example";
import Carousel from "./Carousel/Carousel";
import Dots from "./Carousel/Dots";
import uuidv4 from "uuid";
import ExampleV from "./examplev";

const slides = [
  {
    key: uuidv4(),
    content: (
      <img
        src="https://rukminim1.flixcart.com/flap/1100/400/image/4abbdcd0a4ad2a6b.jpg?q=50"
        alt="1"
      />
    ),
    priority: 5,
  },
  {
    key: uuidv4(),
    content: (
      <img
        src="https://rukminim1.flixcart.com/flap/1100/400/image/aa9606c4e9186450.jpg?q=50"
        alt="2"
      />
    ),
    priority: 8,
  },
  {
    key: uuidv4(),
    content: (
      <img
        src="https://rukminim1.flixcart.com/flap/1100/400/image/a4f65e0b2afb8b8f.jpg?q=50"
        alt="3"
      />
    ),
    priority: 3,
  },
  {
    key: uuidv4(),
    content: (
      <img
        src="https://rukminim1.flixcart.com/flap/1100/400/image/3ef6b71c7dda2ebe.jpg?q=50"
        alt="4"
      />
    ),
    priority: 4,
  },
  {
    key: uuidv4(),
    content: (
      <img
        src="https://rukminim1.flixcart.com/flap/1100/400/image/bbbf1d709468c0e4.jpg?q=50"
        alt="5"
      />
    ),
    priority: 2,
  },
  {
    key: uuidv4(),
    content: (
      <img
        src="https://rukminim1.flixcart.com/flap/1100/400/image/a4aa90e138dde3c6.jpg?q=50"
        alt="6"
      />
    ),
    priority: 6,
  },
  {
    key: uuidv4(),
    content: (
      <img
        src="https://rukminim1.flixcart.com/flap/1100/400/image/3ef6b71c7dda2ebe.jpg?q=50"
        alt="7"
      />
    ),
    priority: 7,
  },
  {
    key: uuidv4(),
    content: (
      <img
        src="https://rukminim1.flixcart.com/flap/1100/400/image/3419f1a004b7504b.jpg?q=50"
        alt="8"
      />
    ),
    priority: 1,
  },
];

console.log(slides);

slides.sort(function(a, b) {
  return a.priority - b.priority;
});

console.log(slides);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showVertical: false,
                   text :"Vertical" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      showVertical: !prevState.showVertical,
      text : this.state.showVertical?"Vertical":"Horizontal",
    }));
  }
  render() {
    return (
     
        <div>
        <img src="http://cdn.onlinewebfonts.com/svg/img_17344.png"
          style={{
           cursor:"pointer",
           width: "25px",
           height: "25px",
           padding: "5px",
           textAlign: "center",
           borderRadius: "5px",
           color: "white",
           fontSize:"18px",
           fontFamily:"sans-serif",
           margin :"1% auto",
           display:"center",
           position:"absolute",
           left:"8%",
           top:"19%",
           zIndex :"3",
      
          }}  onClick={this.handleClick}></img>
         
        {this.state.showVertical ? <ExampleV /> : <Carousel slides={slides} />}
        </div>
      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
