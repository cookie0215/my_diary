import styled from 'styled-components';

const Wrap = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.h1`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.xxxl};
`;
const LeftWrap = styled.div``;
const RightWrap = styled.div``;

const Header = ({ headerText, leftChild, rightChild }) => {
  return (
    <Wrap>
      <LeftWrap>{leftChild}</LeftWrap>
      <Text>{headerText}</Text>
      <RightWrap>{rightChild}</RightWrap>
    </Wrap>
  );
};

export default Header;    