import React from "react";

import styled from "styled-components";

const Audio = ({ config, handleAudioClick, ...rest }) => {
  const handleClick = () => {
    const path = `/edit/${config.projectID}`;
    handleAudioClick(path);
  };
  return (
    <Flex>
      <AudioWarpper>
        <audio onClick={handleClick} controls {...rest}>
          <source src={config.path} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </AudioWarpper>
      {config.name}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const AudioWarpper = styled.div`
  border: 1px solid lightgray;
`;
export default Audio;
