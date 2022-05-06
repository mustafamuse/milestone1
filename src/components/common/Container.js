import React from "react";
import { styled } from "@linaria/react";

const ContainerWithStyles = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 1rem;
`;
const Container = ({ children, ...props }) => {
  return <ContainerWithStyles {...props}>{children}</ContainerWithStyles>;
};

export default Container;
