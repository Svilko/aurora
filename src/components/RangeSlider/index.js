import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { themes } from "../../theme";

const RangeSliderContainer = styled.div`
  width: ${({ width }) => width};
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${themes.global.gray04};
  height: 4px;
`;

const Slider = styled.div`
  position: absolute;
  background-color: ${themes.global.primary.base};
  height: 4px;
  left: 24px;
  right: 24px;
`;

const SliderHandle = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid ${themes.global.primary.base};
`;

// eslint-disable-next-line react/prefer-stateless-function
class RangeSlider extends Component {
  static propTypes = {
    width: PropTypes.string
  };
  static defaultProps = {
    width: "100px"
  };

  state = {
    left: 0,
    right: 0
  };

  render() {
    const { width } = this.props;
    const { left, right } = this.state;

    return (
      <RangeSliderContainer width={width}>
        <Slider />
        <SliderHandle style={{ left: `${left}px` }} />
        <SliderHandle style={{ right: `${right}px` }} />
      </RangeSliderContainer>
    );
  }
}

export default RangeSlider;
