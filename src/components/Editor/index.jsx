import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { BsFillUnlockFill } from "react-icons/bs";

import styled from "styled-components";

const Editor = () => {
  const [numberOfMarks, setNumberOfMarks] = useState(100);

  useEffect(() => {
    displayDummyWaveform();
    updateNumberOfMarks();
    window.addEventListener("resize", updateNumberOfMarks);
    return () => window.removeEventListener("resize", updateNumberOfMarks);
  }, []);

  const updateNumberOfMarks = () => {
    const canvas = document.getElementById("waveform");
    const canvasWidth = canvas.offsetWidth;
    const marks = Math.floor(canvasWidth / 10); // 10 pixels between each mark
    setNumberOfMarks(marks);
  };

  const getHeight = (index) => {
    if ((index + 1) % 100 === 0) return 35;
    if ((index + 1) % 50 === 0) return 30;
    if ((index + 1) % 20 === 0) return 80;
    if ((index + 1) % 10 === 0) return 20;
    if ((index + 1) % 5 === 0) return 15;
    return 10;
  };

  const displayDummyWaveform = () => {
    const canvas = document.getElementById("waveform");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth * 0.9;
    canvas.height = 100;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.beginPath();

    const sliceWidth = canvas.width / 1000;
    let x = 0;
    let y = 70;

    ctx.moveTo(x, y);

    for (let i = 1; i <= 1000; i++) {
      const v = Math.random() * 70 - 50;
      y = 70 + v;

      ctx.lineTo(x, y);

      x += sliceWidth;
    }

    ctx.stroke();
  };

  return (
    <OuterFlex>
      <InnerFlex>
        <Wrapper /> {/* To show empty row added empty Wrapper */}
        <Wrapper>
          <p>Track 2</p>
          <InnerFlex>
            <FaEye />
            <BsFillUnlockFill />
          </InnerFlex>
        </Wrapper>
        <Wrapper>
          <p>Track 1</p>
          <InnerFlex>
            <FaEye />
            <BsFillUnlockFill />
          </InnerFlex>
        </Wrapper>
      </InnerFlex>
      <InnerFlex>
        <RulerContainer>
          {[...Array(numberOfMarks)].map((_, index) => (
            <RulerMark
              key={index}
              $height={getHeight(index + 1)}
              $index={index}
            />
          ))}
        </RulerContainer>
        <Wrapper></Wrapper>
        <Canvas id="waveform"></Canvas>
      </InnerFlex>
    </OuterFlex>
  );
};

const OuterFlex = styled.div`
  display: flex;
  height: calc(100% - 60px);

  & > div:first-child {
    width: 20%;
    border-right: 1px solid lightgray;
  }
  & > div:last-child {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  border-top: 1px solid lightgray;
  justify-content: center;
  align-items: center;
  & > p {
    width: 90%;
    text-align: center;
    font-weight: 400;
  }
  & > div {
    width: 10%;
  }
`;

const InnerFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid lightgray;
  background-color: transparent;
`;

const RulerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  position: relative;
  border-top: 1px solid lightgray;
`;

const RulerMark = styled.div`
  width: 1px;
  height: ${(props) => props.$height}px;
  background-color: #000;
  position: absolute;
  top: 0;
  left: ${(props) => props.$index * 10}px;
`;

export default Editor;
