import styled from "styled-components";
import bg_img from "../../../../assets/svg/header-line-desktop.svg";
import {
  maxMobileWidth,
  minDesktopWidth,
} from "../../../../common/style/sizes.js";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;

  @media (max-width: ${minDesktopWidth}rem) {
    text-align: center;
  }
  @media screen and (max-width: ${maxMobileWidth}rem) {
    text-align: left;
  }
`;
const GroupTitle = styled.div`
  padding-left: 7.5rem;
  margin-bottom: 9.1875rem;

  @media (max-width: ${minDesktopWidth}rem) {
    padding-left: 0;
    margin-bottom: 0;
  }
  @media screen and (max-width: ${maxMobileWidth}rem) {
  }
`;
const GroupHead = styled.div`
  font-family: Spoof Trial Light;
  font-style: normal;
  font-weight: normal;
  font-size: 1.875rem;
  line-height: 140%;
  color: #004e4c;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    font-size: 1.375rem;
    line-height: 125%;
  }
`;
const GroupSub = styled(GroupHead)`
  font-family: Spoof Trial Bold;
  font-weight: bold;
  font-size: 6.125rem;
  line-height: 100%;
  letter-spacing: -0.02em;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    font-size: 3.375rem;
    line-height: 100%;
  }
`;
const Group200 = styled.div`
  font-family: Faible Light;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 150%;
  color: #004e4c;
  display: flex;

  @media (max-width: ${minDesktopWidth}rem) {
    img {
      display: none;
    }
  }
  @media screen and (max-width: ${maxMobileWidth}rem) {
    font-size: 1.0625rem;
    line-height: 150%;
  }
`;
const Group77 = styled.div`
  padding: 4.8125rem 5rem 0 1.25rem;
  margin-bottom: 9.1875rem;

  @media (max-width: ${minDesktopWidth}rem) {
    margin: auto;
    margin-bottom: 9.1875rem;
  }
  @media screen and (max-width: ${maxMobileWidth}rem) {
    padding: 1.5rem 0 0;
    margin-bottom: 3.875rem;
    text-align: left;
  }
`;

export default function GroupHighLight() {
  useEffect(() => {
    var delay = window.innerWidth < 1300 ? 0 : 2;
    const tl = gsap.timeline();
    tl.fromTo(
      ".group-title",
      { visibility: "hidden", opacity: 0.5, scale: 0.9 },
      {
        visibility: "visible",
        opacity: 1,
        delay: delay,
        duration: 0.5,
        scale: 1,
      }
    );
    tl.fromTo(".group-200", { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);
  return (
    <Container>
      <GroupTitle className="group-title">
        <GroupHead>Explore new opportunities.</GroupHead>
        <GroupSub>
          <span style={{ color: "#FDA622" }}>Grow </span>your business.
        </GroupSub>
      </GroupTitle>
      <Group200 className="group-200">
        <img src={bg_img} alt="bg img" />
        <Group77>
          <span style={{ fontFamily: "Faible Bold" }}>
            Wiket is the first business to business network
          </span>{" "}
          which lets you connect to mind like people.
        </Group77>
      </Group200>
    </Container>
  );
}
