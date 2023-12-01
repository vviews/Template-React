import { Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import { BiMath } from "react-icons/bi";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { colorTokens } from "../../theme";
import { Link, NavLink } from "react-router-dom";
import scoreIcon from "../../assets/images/scoreIcon.png";
import examIcon from "../../assets/images/examIcon.png";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  height: 50px;
  margin: 0 2rem;
  &.active{
    background-color: ${colorTokens.primary[700]};
  }
  &:hover{
    background-color: ${colorTokens.primary[800]};
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  height: 50px;
  margin: 0 2rem;
  &:hover{
    background-color: ${colorTokens.primary[800]};
  }
`;

const NavHeader = (item) => {
  return (
    <StyledNavLink
      to={item.path}
      className="flex  py-2 px-8"
      end
    >
      <div className="flex gap-4 items-center">
        {item.icon}
        <Typography color="white" style={{ fontFamily: "Prompt" }}>
          {item.name}
        </Typography>
      </div>
    </StyledNavLink>
  )
}

const NavItem = (item) => {
  const [isOpen, setIsOpen] = useState(true);
  const showChildrem = () => setIsOpen(!isOpen);
  return (
    <>
      <StyledDiv
        className={`py-2 px-8 cursor-pointer`}
        onClick={item.children && showChildrem}
      >
        <div className="flex gap-4 items-center">
          {item.icon}
          <Typography color="white" style={{ fontFamily: "Prompt" }}>
            {item.name}
          </Typography>
        </div>
        {item.children && isOpen ? (
          <TiArrowSortedUp color="white" size={24} />
        ) : item.children ? (
          <TiArrowSortedDown color="white" size={24} />
        ) : null}
      </StyledDiv>

      {item.children &&
        isOpen &&
        item.children.map((i) => {
          return (
            <StyledNavLink to={i.path} className="justify-center" end>
              <Typography color="white" style={{ fontFamily: "Prompt" }}>
                {i.name}
              </Typography>
            </StyledNavLink>
          );
        })}
        
    </>
  );
};

const Navbar = () => {
  const backgroundColor = colorTokens.primary[600];

  const menuItem = [
    {
      path: "/subject",
      name: "หมวดวิชา",
      icon: <BiMath color="white" size={24} />,
    },
    {
      path: "/exam",
      name: "ข้อสอบ",
      icon: <img src={examIcon} style={{ height: "30px", width: "30px" }} />,
    },
    {
      name: "คะแนน",
      icon: <img src={scoreIcon} style={{ height: "30px", width: "30px" }} />,
      children: [
        {
          path: "/score/grade1",
          name: "ประถมศึกษาชั้นปีที่ 1",
        },
        {
          path: "/score/grade2",
          name: "ประถมศึกษาชั้นปีที่ 2",
        },
        {
          path: "/score/grade3",
          name: "ประถมศึกษาชั้นปีที่ 3",
        },
        {
          path: "/score/grade4",
          name: "ประถมศึกษาชั้นปีที่ 4",
        },
        {
          path: "/score/grade5",
          name: "ประถมศึกษาชั้นปีที่ 5",
        },
        {
          path: "/score/grade6",
          name: "ประถมศึกษาชั้นปีที่ 6",
        },
        {
          path: "/score/EP",
          name: "EP",
        },
      ],
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FiLogOut color="white" size={24} />,
    },
  ];

  return (
    <div
      className="flex flex-col h-full w-[300px]"
      style={{ backgroundColor: backgroundColor }}
    >
      <Typography
        variant="h3"
        align="center"
        style={{
          color: "white",
          fontFamily: "Benchnine",
          padding: "20px 0px",
          textShadow: "1px 1px 2px black",
        }}
      >
        GRADER
      </Typography>
      <nav style={{ padding: "15px 0px" }} className="flex flex-col gap-4">
        {menuItem.map((item) => item.children ? NavItem(item) : NavHeader(item))}
      </nav>
    </div>
  );
};

export default Navbar;
