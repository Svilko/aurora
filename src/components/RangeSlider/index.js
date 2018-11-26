import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { themes } from "../../theme";

const RangeSliderContainer = styled.div`
  width: ${({ width }) => width};
  position: relative;
  display: flex;
  height: 24px;

  input[type="range"] {
    position: absolute;
    top: 0;

    &:nth-child(2) {
      background: none;
    }
  }
`;

const Slider = styled.div`
  position: absolute;
  background-color: ${themes.global.primary.base};
  height: 4px;
  left: 24px;
  right: 24px;
  top: 10px;
`;

const SliderHandle = styled.input.attrs({
  type: "range"
})`
  box-sizing: border-box;
  appearance: none;
  background: linear-gradient(${themes.global.gray04}, ${
  themes.global.gray04
}) no-repeat center;
  background-size: 100% 4px;
  width: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
  overflow: hidden;
  border: 0;
  outline: none;
  height: 24px;

  

  &::-webkit-slider-thumb {
    height: 24px;
    width: 24px;
    border-radius: 24px;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    appearance: none;
    pointer-events: auto !important;
    border: 1px solid ${themes.global.gray03};

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      top: 13px;
      left: 100%;
      width: 2000px;
      height: 4px;
    }
  }



  &::-moz-range-thumb {
    height: 24px;
    width: 24px;
    border-radius: 24px;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    appearance: none;
    pointer-events: auto !important;
    border: 1px solid ${themes.global.gray03};

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      top: 13px;
      left: 100%;
      width: 2000px;
      height: 4px;
    }
  }


  &::-moz-range-track {
    background: transparent;
  }
  
  &::-ms-track {
    background: transparent;
  }
  
  &::-ms-fill-lower,
  &::-ms-fill-upper {
    background: transparent;
  }
  
  &::-ms-thumb {
    height: 24px;
    width: 24px;
    border-radius: 24px;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    appearance: none;
    pointer-events: auto !important;
    border: 1px solid ${themes.global.gray03};
    
    &::before {
      content: ' ';
      display: block;
      position: absolute;
      top: 13px;
      left: 100%;
      width: 2000px;
      height: 4px;
    }
  }
  
  &::-webkit-slider-thumb:focus{
    outline: none;
  }
  
  &::-moz-range-thumb:focus {
    outline: none;
  }

  &::-ms-thumb:focus {
    outline: none;
  }

  /* width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid ${themes.global.gray03}; */
`;

// eslint-disable-next-line react/prefer-stateless-function
class RangeSlider extends Component {
  static propTypes = {
    width: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    minDefaultValue: PropTypes.number,
    maxDefaultValue: PropTypes.number
  };
  static defaultProps = {
    width: "100px",
    min: 0,
    max: 100,
    step: 1,
    minDefaultValue: null,
    maxDefaultValue: null
  };

  constructor(props) {
    super(props);
    this.leftHandle = React.createRef();
    this.rightHandle = React.createRef();
    this.state = {
      leftValue: props.minDefaultValue || props.min,
      rightValue: props.maxDefaultValue || props.max
    };
  }

  handleChange = handle => {
    const leftValue = parseInt(this.leftHandle.current.value, 10);
    const rightValue = parseInt(this.rightHandle.current.value, 10);

    if (handle === "left" && leftValue < rightValue) {
      this.setState({
        leftValue
      });
    } else if (handle === "right" && rightValue > leftValue) {
      this.setState({
        rightValue
      });
    }

    console.log(this.state);
  };

  render() {
    const { width, min, max, step } = this.props;

    return (
      <RangeSliderContainer width={width}>
        <SliderHandle
          ref={this.leftHandle}
          min={min}
          max={max}
          step={step}
          value={this.state.leftValue}
          onChange={() => {
            this.handleChange("left");
          }}
        />
        <SliderHandle
          ref={this.rightHandle}
          min={min}
          max={max}
          step={step}
          value={this.state.rightValue}
          onChange={() => {
            this.handleChange("right");
          }}
        />
        <Slider />
      </RangeSliderContainer>
    );
  }
}

export default RangeSlider;
