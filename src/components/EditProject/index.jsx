import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaRotateLeft, FaRotateRight } from "react-icons/fa6";
import { MdOutlineContentCut } from "react-icons/md";
import { FaRegClone, FaRegCopy } from "react-icons/fa";
import { HiZoomOut, HiZoomIn } from "react-icons/hi";
import Assets from "./Assets";
import Main from "./Main";
import Download from "./Download";
import Properties from "./Properties";
import {
  BsSkipBackwardCircle,
  BsSkipForwardCircle,
  BsPlayCircle,
} from "react-icons/bs";
import Slider from "../Common/Slider";
import Editor from "../Editor";
import VideoEditorConfig from "../../videoEditorConfig.json";

import styled from "styled-components";

const EditProject = () => {
  const [value, setValue] = useState(50);
  const params = useParams();
  const { projectId } = params;
  const { assets, path } = VideoEditorConfig.projects.find(
    (project) => project.projectID === projectId
  );

  const handleIncrease = () => {
    setValue((prevValue) => Math.min(prevValue + 5, 100));
  };

  const handleDecrease = () => {
    setValue((prevValue) => Math.max(prevValue - 5, 0));
  };

  const handleOnClick = (data) => {};

  return (
    <VerticleFlex>
      <MainContainer>
        <Wrapper>
          <Assets assets={assets} handleOnClick={handleOnClick} />
        </Wrapper>
        <Wrapper>
          <Main path={path} />
        </Wrapper>
        <Wrapper>
          <Download />
          <BorderTop>
            <Properties />
          </BorderTop>
        </Wrapper>
      </MainContainer>
      <BottomContainer>
        <BorderTop />
        <Flex>
          <BsSkipBackwardCircle style={{ height: "30px", width: "30px" }} />
          <BsPlayCircle style={{ height: "40px", width: "40px" }} />
          <BsSkipForwardCircle style={{ height: "30px", width: "30px" }} />
          <Slider showLabel={false} showValue={false} />
          00:00 / 00:00
        </Flex>
        <BorderTop />
        <Flex>
          <FaRotateLeft />
          <FaRotateRight />
          <MdOutlineContentCut />
          <FaRegClone />
          <FaRegCopy />
          <HiZoomOut onClick={() => handleDecrease()} />
          <Slider showLabel={false} showValue={false} />
          <HiZoomIn onClick={() => handleIncrease()} />
        </Flex>
        <Editor />
      </BottomContainer>
    </VerticleFlex>
  );
};

const VerticleFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.main`
  display: flex;
  height: 75vh;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-block: 5px;
`;

const Wrapper = styled.div`
  padding-block: 20px 5px;
  padding-inline: 20px;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  &:nth-child(1) {
    width: 30%;
  }
  &:nth-child(2) {
    width: 50%;
  }
  &:nth-child(3) {
    width: 20%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
`;

const BorderTop = styled.div`
  margin-block: 0px;
  border-top: 1px solid lightgray;
`;

export default EditProject;