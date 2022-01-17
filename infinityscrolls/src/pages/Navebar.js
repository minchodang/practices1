import React from "react";
import styled from "styled-components";




function Navbar(){
  return(
    <NavbarWrapper>
      <LeftWrapper>
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/logo_white.png" alt="logo"/>
      </LeftWrapper>
      <centerWrapper>
        b
      </centerWrapper>
      <rightWrapper>
        c
      </rightWrapper>
    </NavbarWrapper>
  )
}



const NavbarWrapper = styled.div`
  border: none;
  display: flex;
  justify-content: space-between;
  background-color: black;
`;
const LeftWrapper = styled.div`
  img {
width: 20%;
  }
  
`;


export default Navbar;