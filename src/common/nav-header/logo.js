import styled from "styled-components";
import { default as logo } from "../../assets/svg/wiket-logo.svg";

const Container = styled.div`
  @media screen and (max-width: 767px) {
    width: 6.3125rem;
    height: 1.875rem;
    img {
      width: 100%;
    }
  }
`;

export default function Logo() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
}
