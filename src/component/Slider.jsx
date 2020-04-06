import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

class Slider extends Component {
  state = {
    url1: this.props.url1,
    alt1: this.props.alt1,
    tinggi: this.props.tinggi,
    url2: this.props.url2,
    alt2: this.props.alt2,
    url3: this.props.url3,
  };

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src={this.state.url1}
            alt={this.state.alt1}
            height={this.state.tinggi}
          />
        </Carousel.Item>
        ,
        <Carousel.Item>
          <img
            src={this.state.url2}
            alt={this.state.alt2}
            height={this.state.tinggi}
          />
        </Carousel.Item>
        ,
        <Carousel.Item>
          <img
            src={this.state.url3}
            alt={this.state.alt3}
            height={this.state.tinggi}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
