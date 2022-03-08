import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: 650px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.yellowLight};
  box-shadow: 0px 0px 20px 0px rgba(100,100,111,.2);
  margin: 0 auto;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;
