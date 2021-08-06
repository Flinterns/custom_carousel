import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

let slides = [
  {
    key: uuidv4(),
    extraRef: './img/img1.jpeg' ,
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/4abbdcd0a4ad2a6b.jpg?q=50" alt="1" />
  },
  {
    key: uuidv4(),
    extraRef: "https://rukminim1.flixcart.com/flap/1200/280/image/aa9606c4e9186450.jpg?q=50",
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/aa9606c4e9186450.jpg?q=50" alt="2" />
  },
  {
    key: uuidv4(),
    extraRef: "https://rukminim1.flixcart.com/flap/1200/280/image/a4f65e0b2afb8b8f.jpg?q=50",
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/a4f65e0b2afb8b8f.jpg?q=50" alt="3" />
  },
  {
    key: uuidv4(),
    extraRef: "https://rukminim1.flixcart.com/flap/1200/280/image/3ef6b71c7dda2ebe.jpg?q=50",
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/3ef6b71c7dda2ebe.jpg?q=50" alt="4" />
  },
  {
    key: uuidv4(),
    extraRef: "https://rukminim1.flixcart.com/flap/1200/280/image/bbbf1d709468c0e4.jpg?q=50",
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/bbbf1d709468c0e4.jpg?q=50" alt="5" />
  },
  {
    key: uuidv4(),
    extraRef:"https://rukminim1.flixcart.com/flap/1200/280/image/a4aa90e138dde3c6.jpg?q=50" ,
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/a4aa90e138dde3c6.jpg?q=50" alt="6" />
  },
  {
    key: uuidv4(),
    extraRef:"https://rukminim1.flixcart.com/flap/1200/280/image/3ef6b71c7dda2ebe.jpg?q=50",
    content: <img src="https://rukminim1.flixcart.com/flap/1200/280/image/3ef6b71c7dda2ebe.jpg?q=50" alt="7" />
  },
  {
    key: uuidv4(),
    extraRef: "https://rukminim1.flixcart.com/flap/1200/280/image/3419f1a004b7504b.jpg?q=50",
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
    modalVisible: false,
  };

  // onChangeInput = e => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };
 
   styles = this.state.modalVisible
  ? { position:  "absolute", 
      top:"10%",
      left:"40%",
      zIndex:"3",
      width: "50%",
    }
  : { display: "none" };
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
      {/* <div
          id="myModal"
          className="modal fade in"
          role="dialog"
          style={this.styles}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  onClick={this.openModal}
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
                  onClick={this.openModal}
                  type="button"
                  className="btn btn-default"
                >
                  Close
                </button>

                <button
                  
                  type="button"
                  className="btn btn-default"
                >
                  Go To Landing Page
                </button>
              </div>
            </div>
          </div>
        </div>
 */}
    </div> 

    );
  }
}
