import styled from "styled-components";
import sub_img1 from "../../../../assets/svg/sub_img1.svg";
import sub_img2 from "../../../../assets/svg/sub_img2.svg";
import sub_img3 from "../../../../assets/svg/sub_img3.svg";
import sub_bubble1 from "../../../../assets/svg/sub_bubble1.svg";
import sub_bubble2 from "../../../../assets/svg/sub_bubble2.svg";
import ImgItem from "./imgitem";
import { maxMobileWidth } from "../../../../common/style/sizes.js";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 2.5rem;
  left: 0;

  @media screen and (max-width: ${maxMobileWidth}rem) {
    top: 26.25rem;
    .sub-bubble {
      display: none;
    }
  }
`;
const GroupSubImg1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${maxMobileWidth}rem) {
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
    justify-content: flex-end;
    flex-direction: row;
    margin-top: -1.625rem;
    margin-bottom: -5.9375rem;
  }
`;

export default function ImgSubGroup() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const t1 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".sub-img1",
      },
    });
    const t2 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".sub-img2",
      },
    });
    const t3 = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".sub-img3",
      },
    });
    const t4 = gsap.timeline();
    t1.fromTo(
      ".sub-img1",
      { visibility: "hidden", opacity: 0, y: 100 },
      { visibility: "visible", opacity: 1, y: 0, duration: 0.5 }
    );
    t1.fromTo(
      ".sub-img1",
      { y: 0 },
      { y: -10, duration: 3, yoyo: true, repeat: -1 }
    );
    t2.fromTo(
      ".sub-img2",
      { visibility: "hidden", opacity: 0, y: 50 },
      { visibility: "visible", opacity: 1, y: 0, delay: 0.8, duration: 0.5 }
    );
    t2.fromTo(
      ".sub-img2",
      { y: 0 },
      { y: -10, duration: 2, yoyo: true, repeat: -1 }
    );
    t3.fromTo(
      ".sub-img3",
      { visibility: "hidden", opacity: 0, y: 20 },
      { visibility: "visible", opacity: 1, y: 0, delay: 1.2, duration: 0.5 }
    );
    t3.fromTo(
      ".sub-img3",
      { y: 0 },
      { y: -5, duration: 1.5, yoyo: true, repeat: -1 }
    );
    t4.fromTo(
      ".sub-bubble",
      { visibility: "hidden", opacity: 0 },
      { visibility: "visible", opacity: 1, delay: 2.5, duration: 1.5 }
    );
    t4.fromTo(
      ".sub-bubble",
      { y: 0 },
      { y: 5, duration: 1.5, yoyo: true, repeat: -1 }
    );
  }, []);
  return (
    <Container>
      <GroupSubImg1>
        <img src={sub_bubble1} className="sub-bubble" alt="sub bubble1" />
        <div className="sub-img1">
          <ImgItem
            path={sub_img1}
            title="Project"
            content="Pottery in Bangkok"
          />
        </div>
      </GroupSubImg1>
      <GroupSubImgMid>
        <img src={sub_bubble2} className="sub-bubble" alt="sub bubble2" />
        <div className="sub-img2">
          <ImgItem
            path={sub_img2}
            title="Project"
            content="Pottery in Bangkok"
          />
        </div>
      </GroupSubImgMid>
      <GroupSubImg2>
        <span />
        <div className="sub-img3">
          <ImgItem
            path={sub_img3}
            title="Project"
            content="Pottery in Bangkok"
          />
        </div>
      </GroupSubImg2>
    </Container>
  );
}
