import React from "react";
import { GiArrowCursor } from "react-icons/gi";
import { FaRegHandPaper } from "react-icons/fa";
import { FaCrop } from "react-icons/fa6";
import Video from "../Common/Video";

import styled from "styled-components";

const Main = ({ path }) => {
  const navigateToProject = (path) => {};

  return (
    <OuterFlex>
      <InnerFlex>
        <GiArrowCursor />
        <FaRegHandPaper />
        <FaCrop />
        <Select>
          <option>Select</option>
          <option selected>50%</option>
          <option>75%</option>
          <option>100%</option>
        </Select>
      </InnerFlex>
      <Video
        config={{ path }}
        handleVideoClick={navigateToProject}
        width="100%"
        height="100%"
        controls
      />
    </OuterFlex>
  );
};

const OuterFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InnerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  height: 20px;
`;

const Select = styled.select`
  font-weight: 600;
  height: 30px;
`;

export default Main;
