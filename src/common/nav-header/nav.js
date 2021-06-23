import styled from "styled-components";
import menu_icon from "../../assets/svg/menu-icon.svg";
import { maxMobileWidth } from "../../common/style/sizes.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;

  @media only screen and (max-width: 1100px) {
    align-items: center;
  }
`;
const GetLink = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
const Link = styled.a`
  cursor: pointer;
  font-family: Cera-Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 100%;
  color: #004e4c;
  margin: 0px 1.7rem;
  padding-bottom: 1rem;
  text-decoration: none;
  // &:hover {
  //   padding: 1rem 1.5rem;
  //   background: #faa834;
  //   border-radius: 0.5rem;
  //   color: white;
  //   margin: 0 0.2rem;
  // }
`;
const GetLinkNew = styled.div`
  padding: 16px 0;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: Column;
  position: absolute;
  top: 2.5rem;
  width: 100%;
  background-color: rgba(50, 50, 50);
  left: 0;
  display: none;
`;
const LinkNew = styled.a`
  cursor: pointer;
  font-family: Cera-Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 100%;
  color: white;
  padding: 1.25rem 0;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: gray;
  }
`;
const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #faa834;
  border-radius: 0.5rem;
  flex: none;
  flex-grow: 0;
  margin-right: 0;
  margin-left: 1.7rem;

  @media only screen and (max-width: ${maxMobileWidth}rem) {
    padding: 0.75rem 1rem;
  }
`;
const ButtonText = styled.div`
  font-family: Cera-Pro;
  font-style: normal;
  font-size: 1.065rem;
  line-height: 100%;
  color: #fff8ef;

  @media only screen and (max-width: ${maxMobileWidth}rem) {
    font-family: Faible Bold;
    font-size: 1rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  margin-left: 1.3125rem;
  cursor: pointer;

  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;

export default function Nav() {
  return (
    <Container>
      <GetLink>
        <Link href="#">Benefits</Link>
        <Link href="#">Your profile</Link>
        <Link href="#">Connections</Link>
        <Link href="#">Plans & Pricing</Link>
      </GetLink>
      <Button>
        <ButtonText> Get started</ButtonText>
      </Button>
      <MenuIcon>
        <GetLinkNew className="getlink">
          <LinkNew href="#">Benefits</LinkNew>
          <LinkNew href="#">Your profile</LinkNew>
          <LinkNew href="#">Connections</LinkNew>
          <LinkNew href="#">Plans & Pricing</LinkNew>
        </GetLinkNew>
        <img src={menu_icon} alt="menu icon" />
      </MenuIcon>
    </Container>
  );
}
