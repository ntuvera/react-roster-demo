import React from "react";
import styled from "styled-components";

const Content = ({ children }) => <Container>{children}</Container>;

const Container = styled.main`
  max-width: 1680px;
  background: rgba(0,0,0,0.5);
  margin: 0 auto;
`

export default Content;
