import React from "react";
import Slider from "../Common/Slider";
import { FaRotateRight } from "react-icons/fa6";

import styled from "styled-components";

const Properties = () => {
  return (
    <>
      <Flex>
        <h2>Properties</h2>
      </Flex>
      <Container>
        <Wrapper>
          <Slider label="Scale" />
          <Slider label="Opacity" />
          <OuterFlex justifycontent="flex-end">
            <Label>Rotation</Label>
            <InnerFlex alignitems="flex-start" width="100%" maxwidth="234px">
              <InnerWrapper>
                <FaRotateRight />Z
              </InnerWrapper>
              <InnerFlex>
                <Value>0.0</Value>
              </InnerFlex>
            </InnerFlex>
          </OuterFlex>
          <InnerFlex>
            <InnerWrapper>
              <FaRotateRight />Y
            </InnerWrapper>
            <Value>0.0</Value>
          </InnerFlex>
          <InnerFlex>
            <InnerWrapper>
              <FaRotateRight />X
            </InnerWrapper>
            <Value>0.0</Value>
          </InnerFlex>

          <BorderTop />
          <OuterFlex justifycontent="flex-end">
            <Label>Position</Label>
            <InnerFlex alignitems="flex-start" width="100%" maxwidth="234px">
              <InnerWrapper>
                <FaRotateRight />X
              </InnerWrapper>
              <InnerFlex>
                <Value>0.0</Value>
              </InnerFlex>
            </InnerFlex>
          </OuterFlex>
          <InnerFlex>
            <InnerWrapper>
              <FaRotateRight />Y
            </InnerWrapper>
            <Value>0.0</Value>
          </InnerFlex>
          <InnerFlex>
            <InnerWrapper>
              <FaRotateRight />Z
            </InnerWrapper>
            <Value>0.0</Value>
          </InnerFlex>
        </Wrapper>
      </Container>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuterFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "flex-end"};
  gap: 10px;
`;

const InnerFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "flex-end"};
  align-items: ${(props) => props.alignitems || "stretch"};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxwidth};
  gap: 10px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InnerWrapper = styled.h4`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 160px;
  width: 100%;
  justify-content: flex-end;
  flex: 1;
`;

const BorderTop = styled.div`
  margin-block: 10px;
  border-top: 1px solid lightgray;
`;

export default Properties;
