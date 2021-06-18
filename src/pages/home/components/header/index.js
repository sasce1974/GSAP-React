import React, { Component } from 'react';
import styled from 'styled-components';
import header_img from '../../../../assets/svg/img.svg';
import line_img from '../../../../assets/svg/line.svg';
import bg_img from '../../../../assets/svg/header-line-desktop.svg';
import sub_img1 from '../../../../assets/svg/sub_img1.svg';
import sub_img2 from '../../../../assets/svg/sub_img2.svg';
import sub_img3 from '../../../../assets/svg/sub_img3.svg';
import sub_bubble1 from '../../../../assets/svg/sub_bubble1.svg';
import sub_bubble2 from '../../../../assets/svg/sub_bubble2.svg';
import ImgItem from './imgitem';
import {
  maxMobileWidth,
  minDesktopWidth,
} from '../../../../common/style/sizes.js';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 6.4375rem 0 3.5rem;

  @media (max-width: ${minDesktopWidth}rem) {
    flex-direction: column-reverse;
    padding: 3.75rem 0 0px;
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
const ImgSubGroup = styled.div`
  position: absolute;
  width: 100%;
  top: 2.5rem;
  left: 0;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    top: 26.25rem;
    .sub-bubble {
      visibility: hidden;
    }
  }
`;
const GroupSubImg1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    flex-direction: row-reverse;
    margin-left: 1.4375rem;
  }
`;
const GroupSubImg2 = styled(GroupSubImg1)`
  margin-right: -3.375rem;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    flex-direction: row-reverse;
    margin-left: 0;
    margin-right: 0;
  }
`;
const GroupSubImgMid = styled(GroupSubImg1)`
  margin-top: -1.875rem;
  margin-bottom: -1.875rem;
  flex-direction: row-reverse;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    flex-direction: row;
    margin-top: -1.625rem;
    margin-bottom: -5.9375rem;
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
const Group45 = styled.div`
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

class Header extends Component {
  render() {
    return (
      <Container>
        <GroupImg>
          <ImgGroup>
            <ImgLine>
              <img src={line_img} alt="line img" />
            </ImgLine>
            <img className="main-img" src={header_img} alt="main img" />
            <ImgSubGroup>
              <GroupSubImg1>
                <img
                  src={sub_bubble1}
                  className="sub-bubble"
                  alt="sub bubble1"
                />
                <ImgItem
                  path={sub_img1}
                  title="Project"
                  content="Pottery in Bangkok"
                />
              </GroupSubImg1>
              <GroupSubImgMid>
                <img
                  src={sub_bubble2}
                  className="sub-bubble"
                  alt="sub bubble2"
                />
                <ImgItem
                  path={sub_img2}
                  title="Project"
                  content="Pottery in Bangkok"
                />
              </GroupSubImgMid>
              <GroupSubImg2>
                <span />
                <ImgItem
                  path={sub_img3}
                  title="Project"
                  content="Pottery in Bangkok"
                />
              </GroupSubImg2>
            </ImgSubGroup>
            <PGroup>
              <p className="title">Hanging Garden</p>
              <p className="content">Florist in Bangkok</p>
            </PGroup>
          </ImgGroup>
        </GroupImg>
        <Group45>
          <GroupTitle>
            <GroupHead>Explore new opportunities.</GroupHead>
            <GroupSub>
              <span style={{ color: "#FDA622" }}>Grow </span>your business.
            </GroupSub>
          </GroupTitle>
          <Group200>
            <img src={bg_img} alt="bg img" />
            <Group77>
              <span style={{ fontFamily: "Faible Bold" }}>
                Wiket is the first business to business network
              </span>{" "}
              which lets you connect to mind like people.
            </Group77>
          </Group200>
        </Group45>
      </Container>
    );
  }
}
export default Header;
