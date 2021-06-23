import styled from "styled-components";
import header_img from "../../../../assets/svg/img.svg";
import line_img from "../../../../assets/svg/line.svg";
import ImgSubGroup from "./imgsubgroup";
import GroupHighLight from "./grouphighlight";
import {
  maxMobileWidth,
  minDesktopWidth,
} from "../../../../common/style/sizes.js";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11.3rem 0 3.5rem;

  @media (max-width: ${minDesktopWidth}rem) {
    flex-direction: column-reverse;
    padding: 6.65rem 0 0px;
  }
  @media screen and (max-width: ${maxMobileWidth}rem) {
  }
`;
const GroupImg = styled.div`
  min-width: 41.125rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${minDesktopWidth}rem) {
    justify-content: center;
    margin: auto;
  }
  @media screen and (max-width: ${maxMobileWidth}rem) {
    min-width: 100%;
  }
`;
const ImgGroup = styled.div`
  position: relative;
  flex-shrink: 0;
  padding: 0 3.375rem;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    padding: 0px;
    display: flex;
    flex-direction: column-reverse;
    .main-img {
      width: 20rem;
    }
  }
`;
const ImgLine = styled.div`
  display: none;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    display: block;
    padding: 2.625rem 1.6875rem 0 5.0625rem;
  }
`;
const PGroup = styled.div`
  padding-top: 1rem;
  p {
    margin: 0;
    font-family: Faible Light;
    font-weight: bold;
    font-size: 1.0625rem;
    line-height: 150%;
    color: #004e4c;
  }
  .title {
    font-family: Faible Bold;
    font-size: 1.25rem;
    line-height: 150%;
  }

  @media screen and (max-width: ${maxMobileWidth}rem) {
    padding: 0 0 1rem;
  }
`;

export default function Header() {
  useEffect(() => {
    const tl = gsap.timeline();
    var delay = window.innerWidth < 1300 ? 0.5 : 0;
    tl.fromTo(
      ".group-img",
      { opacity: 0.5, y: 100, visibility: "hidden" },
      { opacity: 1, y: 0, duration: 1, delay: delay, visibility: "visible" }
    );
  }, []);
  return (
    <Container>
      <GroupImg className="group-img">
        <ImgGroup>
          <ImgLine>
            <img src={line_img} alt="line img" />
          </ImgLine>
          <img className="main-img" src={header_img} alt="main img" />
          <ImgSubGroup />
          <PGroup>
            <p className="title">Hanging Garden</p>
            <p className="content">Florist in Bangkok</p>
          </PGroup>
        </ImgGroup>
      </GroupImg>
      <GroupHighLight />
    </Container>
  );
}
