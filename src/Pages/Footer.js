import React from "react";
import styled from "styled-components/macro";
function Footer() {
  return <Container>This is Footer</Container>;
}

export default Footer;

const Container = styled.div`
  background-color: black;
  height: 200px;
  display: flex;
  color: white;
  align-items: center;
  border-top: 1px solid white;
  justify-content: center;
  font-size: 26px;
`;
