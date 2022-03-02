import styled from 'styled-components';

const Container = styled.div`
  width: 650px;
  height: 100vh;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.yellowLight};
  box-shadow: 0px 0px 20px 0px rgba(100,100,111,.2);
  margin: 0 auto;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const Layout = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
};

export default Layout;