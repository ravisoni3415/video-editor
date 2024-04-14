import React from "react";

import styled from "styled-components";

const Video = ({ config, handleVideoClick, alignitem, ...rest }) => {
  const handleClick = () => {
    const path = `/edit/${config.projectID}`;
    handleVideoClick(path);
  };
  return (
    <Flex $alignitem={alignitem}>
      <video onClick={handleClick} {...rest}>
        <source src={config.path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Title>{config.name}</Title>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$alignitem || "center"};
  cursor: pointer;
`;

const Title = styled.p`
  font-weight: 400;
  padding-top: 6px;
  margin: 0;
`;

export default Video;
