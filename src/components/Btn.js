import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background: transparent;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.lg};
  cursor: pointer;

  &.btn_create {
    width: 100%;
    background: ${({ theme }) => theme.colors.yellow};
  }

  &.btn_icon {
    padding: 6px;

    > svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const Btn = ({ text, onClick, type }) => {
  return (
    <Button className={['btn', `btn_${type}`].join(" ")} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Btn;