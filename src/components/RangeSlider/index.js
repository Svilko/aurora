import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { themes } from "../../theme";

const RangeSliderContainer = styled.div`
  width: ${({ width }) => width};
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${themes.global.gray04};

  input[type="range"] {
    position: absolute;

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

  

  &::-webkit-slider-thumb {
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    appearance: none;
    pointer-events: all;
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

    &:focus {
    outline: none;
  }
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
