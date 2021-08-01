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
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/500/?random" alt="5" />,
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
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showVertical: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      showVertical: !prevState.showVertical,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Choose Carousel Orientation</button>

        {this.state.showVertical ? <ExampleV /> : <Carousel slides={slides}  /> }
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
