import React, { Component } from 'react';
import styled from 'styled-components';

const GroupItem = styled.div`
  background: #FFF8EF;;
  padding: 0.5rem 0.5rem 0.8125rem;
  border-radius: 0.75rem;
  box-shadow: 0px 1.5rem 2.625rem rgba(0, 0, 0, 0.2);
  color: #004e4c;
  p {
    margin: 0;
  }
  .item-img {
    border-radius: 0.625rem;
  }
  .title {
    font-family: Faible Bold;
    font-weight: bold;
    font-size: 1.0625rem;
  }
  .content {
    font-family: Faible Light;
    font-weight: bold;
    font-size: 0.8125rem;
    line-height: 150%;
  }
  
  @media  screen and (max-width: 767px) {
    padding: 0.3125rem 0.3125rem 0.6875rem 0.3125rem;
    background: #FFFAF4;
`;

class ImgItem extends Component {
  render() {
    const { path, title, content } = this.props;
    return (
      <GroupItem>
        <img src={path} className="item-img" alt='GroupItemImg' />
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </GroupItem>
    );
  }
}
export default ImgItem;
