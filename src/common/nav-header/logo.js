// import './App.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import { default as logo } from '../../assets/svg/wiket-logo.svg';

const Container = styled.div`
  @media screen and (max-width: 767px) {
    width: 6.3125rem;
    height:1.875rem;
    img{
      width:100%;
    }
  }
`;

class Logo extends Component {
  render() {
    return (
      <Container>
        <img src={logo} alt='logo'/>
      </Container>
    );
  }
}
export default Logo;
