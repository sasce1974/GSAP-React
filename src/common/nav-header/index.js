import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './nav';
import Logo from './logo';
import { maxMobileWidth } from '../../common/style/sizes.js';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 4.8675rem 0 5.1875rem;

  @media (max-width: ${maxMobileWidth}rem) {
    padding: 0;
  }
`;
class Header extends Component {
  render() {
    return (
      <Container>
        <div>
          <Logo />
        </div>
        <Nav />
      </Container>
    );
  }
}
export default Header;
