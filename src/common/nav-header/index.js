import styled from "styled-components";
import Nav from "./nav";
import Logo from "./logo";
import { maxMobileWidth } from "../../common/style/sizes.js";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.625rem 4.8675rem 0 5.1875rem;
  height: 7rem;
  z-index: 10;
  background-color: #fff8ef;

  @media (max-width: ${maxMobileWidth}rem) {
    padding-right: 1.75rem;
    padding-left: 1.75rem;
  }
`;

export default function Header() {
  useEffect(() => {
    const tl = gsap.timeline();
    var delay = window.innerWidth < 1300 ? 0 : 2.8;
    tl.fromTo(
      ".nav-bar",
      { visibility: "hidden", opacity: 0.5 },
      { visibility: "visible", opacity: 1, delay: delay, duration: 1.5 }
    );
  }, []);
  return (
    <Container className="nav-bar">
      <div>
        <Logo />
      </div>
      <Nav />
    </Container>
  );
}
