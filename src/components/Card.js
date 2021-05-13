import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${(props) => props.color};
  margin: 5px;
  transform: rotate(${(props) => props.rotate});
  border: none;
`;

const Card = ({ color, rotate, onMouseOver, onMouseOut }) => {
  return (
    <>
      <Container
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        color={color}
        rotate={rotate}
      ></Container>
    </>
  );
};

export default Card;
