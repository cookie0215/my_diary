import { HeaderWrap, LeftWrap, Text, RightWrap } from './Styles';

const Header = ({ headerText, leftChild, rightChild }) => {
  return (
    <HeaderWrap>
      <LeftWrap>{leftChild}</LeftWrap>
      <Text>{headerText}</Text>
      <RightWrap>{rightChild}</RightWrap>
    </HeaderWrap>
  );
};

export default Header;    