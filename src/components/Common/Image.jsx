import React from "react";

import styled from "styled-components";

const Image = ({ config, ...rest }) => {
  return (
    <Flex>
      <Figure>
        <img src={config.path} alt={config.name} {...rest} />
      </Figure>
      <Title>{config.name}</Title>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`;

const Title = styled.p`
  font-weight: 600;
  margin: 0;
`;

export default Image;
