import React from "react";
import Video from "../Common/Video";
import Image from "../Common/Image";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList, FaPlusSquare } from "react-icons/fa";
import styled from "styled-components";

const Assets = ({ assets, handleOnClick }) => {
  return (
    <Main>
      <OuterContainer>
        <Flex>
          <Title>Assets</Title>
        </Flex>
        <Container>
          {assets.map((asset) => {
            if (asset.type === "video") {
              return (
                <Video
                  key={asset.assetTd}
                  config={asset}
                  handleVideoClick={handleOnClick}
                  height="120px"
                  width="100%"
                  controls
                />
              );
            } else if (asset.type === "image") {
              return (
                <Image
                  key={asset.assetTd}
                  config={asset}
                  height="120px"
                  width="100%"
                />
              );
            } else {
              return null;
            }
          })}
        </Container>
      </OuterContainer>
      <Flex $justifycontent="flex-end">
        <Flex $justifycontent="space-between" $width="50%">
          <FaPlusSquare />
          <InnerFlex>
            <BsFillGrid3X3GapFill />
            <FaList />
          </InnerFlex>
        </Flex>
      </Flex>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
`;

const Title = styled.h2`
  margin: 0;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifycontent || "center"};
  width: ${(props) => props.$width};

  & > svg {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`;

const InnerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > svg {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`;

const Container = styled.main`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 20px;
`;

export default Assets;
