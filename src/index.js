import React from "react";
import ReactDOM from "react-dom";
import Example from "./example";
import ExampleV from "./examplev";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showVertical: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showVertical: !prevState.showVertical
    }));
  //  this.setState =({ showCart: !showVertical}) 
    console.log("button clicked")

  }
  render() { 
    return (
      <div> 
      <button onClick={this.handleClick}> Choose Carousel Orientation
       
        </button>

        {this.state.showVertical ? <ExampleV/>: <Example/> }

        </div>
        );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
