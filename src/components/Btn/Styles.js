import styled from 'styled-components';

export const Button = styled.button`
padding: 12px 20px;
border: none;
background: transparent;
white-space: nowrap;
font-family: ${({ theme }) => theme.font.family.title};
font-size: ${({ theme }) => theme.font.size.lg};
cursor: pointer;

&.btn_create {
  width: 100%;
  max-width: 650px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: ${({ theme }) => theme.colors.yellow};
  position: fixed;
  bottom: 0;
}

&.btn_icon {
  padding: 6px;

  > svg {
    width: 20px;
    height: 20px;
  }
}
`;