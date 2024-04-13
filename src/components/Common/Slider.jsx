import React, { useState } from "react";

import styled from "styled-components";

const Slider = ({ label, showLabel = true, showValue = true }) => {
  const [value, setValue] = useState(50);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Flex>
      {showLabel && <Label>{label}</Label>}
      <InputRange
        type="range"
        min="1"
        max="100"
        value={value}
        className="slider"
        onChange={handleInputChange}
      />
      {showValue && <Value>{value}%</Value>}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
`;

const Label = styled.h4`
  margin: 0;
  width: 80px;
`;

const Value = styled.h4`
  margin: 0;
  border: 1px solid;
  height: 30px;
  display: flex;
  min-width: 60px;
  justify-content: center;
  align-items: center;
`;

const InputRange = styled.input`
  -webkit-appearance: none;
  max-width: 160px;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 23px;
    height: 24px;
    border: 0;
    background: url("/assets/images/contrasticon.png");
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 23px;
    height: 24px;
    border: 0;
    background: url("/assets/images/contrasticon.png");
    cursor: pointer;
  }
`;

export default Slider;
