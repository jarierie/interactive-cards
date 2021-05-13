import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useRef } from "react";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const ref = useRef(null);

  //animation

  const animation1 = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[2], {
      x: 300,
      rotate: 0,
      scale: 1.2,
    })
      .to(
        ref.current.childNodes[1],
        {
          x: 100,
          scale: 0.9,
          rotate: 12,
        },
        0
      )
      .to(ref.current.childNodes[0], { x: 50, scale: 0.9, rotate: 14 }, 0);
  };

  const animationOut1 = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[0], { x: 0, rotate: 12, scale: 1 })
      .to(ref.current.childNodes[1], { x: 0, scale: 1, rotate: 0 }, 0)
      .to(
        ref.current.childNodes[2],
        { zIndex: 0, x: 0, rotate: -12, scale: 1 },
        0
      );
  };

  const animation2 = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[0], {
      x: 13,
      scale: 0.9,
      rotate: 20,
    })
      .to(ref.current.childNodes[1], { zIndex: 999, scale: 1.2, rotate: 3 }, 0)
      .to(ref.current.childNodes[2], { x: -30, scale: 0.9 }, 0);
  };

  const animationOut2 = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[0], { x: 0, rotate: 12 })
      .to(ref.current.childNodes[1], { zIndex: 0, scale: 1, rotate: 0 }, 0)
      .to(ref.current.childNodes[2], { x: 0, scale: 1 }, 0);
  };

  const animation3 = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[0], {
      zIndex: 999,
      scale: 1.2,
      x: -250,
      rotate: 5,
    })
      .to(ref.current.childNodes[1], { x: -50, scale: 0.9 }, 0)
      .to(
        ref.current.childNodes[2],
        {
          x: 100,
          scale: 0.9,
        },
        0
      );
  };

  const animation3out = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[0], { zIndex: 0, x: 0, scale: 1, rotate: 12 })
      .to(ref.current.childNodes[1], { x: 0, scale: 1 }, 0)
      .to(ref.current.childNodes[2], { x: 0, scale: 1 }, 0);
  };

  return (
    <>
      <Container ref={ref}>
        <Card
          onMouseOut={animation3out}
          onMouseOver={animation3}
          color={"yellow"}
          rotate={"12deg"}
        />
        <Card
          onMouseOut={animationOut2}
          onMouseOver={animation2}
          color={"lightblue"}
          rotate={"0"}
        />
        <Card
          onMouseOut={animationOut1}
          onMouseOver={animation1}
          color={"tomato"}
          rotate={"-12deg"}
        />
      </Container>
    </>
  );
};

export default Main;
