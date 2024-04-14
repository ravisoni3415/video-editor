import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import styled from "styled-components";

const NavBar = () => {
  return (
    <NavContainer>
      <Logo href="/">LOGO</Logo>
      <NavLink to="/new-video">
        New Video
        <Icon>
          <FaPlus />
        </Icon>
      </NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/template">Template</NavLink>
      <NavLink to="/all-videos">All Videos</NavLink>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: #333;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #333;
  user-select: none;
`;

const Icon = styled.span`
  margin-left: 5px;
  line-height: 0;
`;

export default NavBar;
