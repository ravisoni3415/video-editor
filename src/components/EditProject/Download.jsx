import React from "react";
import { BiExport } from "react-icons/bi";

import styled from "styled-components";

const Download = () => {
  return (
    <Flex>
      <BiExport />
      <Button>Export</Button>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: 1px solid;
  background-color: white;
  height: 1.5rem;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  padding-inline: 1rem;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default Download;
