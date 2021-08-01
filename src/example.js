import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: true,
      config: config.gentle,
      modalVisible: false,
      popUpImage: ""
    };
   
    this.openModal = this.openModal.bind(this);
   // this.func = this.func.bind(this);
  }

 

  slides = [
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />,
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
    return { ...slide, onClick: () => {this.setState({ goToSlide: index }); this.openModal(slide.content) }};
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

 
  openModal() {
    console.log("Open modal called ", this.state.modalVisible);
    const modalVisible = !this.state.modalVisible;
    this.setState({
      modalVisible
    });
  }

  render() {

    let styles = this.state.modalVisible
    ? { display: "block" }
    : { display: "none" };

    return (
      <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
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
          <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={(e) => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
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
                  onClick={this.openModal}
                  className="close"
                >
                  &times;
                </button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
              <img src="https://picsum.photos/200/300/?random" alt="7" /></div>
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

      </div>

      
    );
  }
}
