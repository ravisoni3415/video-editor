import React from "react";
import { FaScissors, FaVideo } from "react-icons/fa6";
import RecentVideos from "../RecentProjects";

import styled from "styled-components";

const Home = () => {
  return (
    <>
      <OuterFlex>
        <SearchContainer>
          <SearchIcon>&#128269;</SearchIcon>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>
        <UserIcon>&#128100;</UserIcon>
      </OuterFlex>

      <OuterFlex>
        <InnerFlex>
          <ActionButton>
            <Icon>
              <FaScissors />
            </Icon>
            Create Project
          </ActionButton>
          <ActionButton>
            <Icon>
              <FaVideo />
            </Icon>
            Record Video
          </ActionButton>
        </InnerFlex>
        <a href="">All Video &gt;&gt;</a>
      </OuterFlex>

      <RecentVideos />
    </>
  );
};

const OuterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const InnerFlex = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 80%;
  border: 1px solid lightgray;
  border-radius: 20px;
  height: 40px;
`;

const SearchInput = styled.input`
  width: calc(100% - 40px);
  border: none;
  margin-left: 30px;
  height: 32px;
  margin-block: 4px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const UserIcon = styled.span`
  margin-left: 8px;
  font-size: 30px;
  cursor: pointer;
  border: 1px solid lightgray;
  border-radius: 50%;
`;

const ActionButton = styled.button`
  border: 1px solid;
  background-color: white;
  height: 2.5rem;
  margin-right: 10px;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  padding-inline: 10px;
  font-weight: 600;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.span`
  margin-right: 5px;
`;

export default Home;
