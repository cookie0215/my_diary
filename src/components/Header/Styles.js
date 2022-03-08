import styled from 'styled-components';

export const HeaderWrap = styled.header`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.h1`
  font-family: ${({ theme }) => theme.font.family.title};
  font-size: ${({ theme }) => theme.font.size.xxxl};
`;
export const LeftWrap = styled.div``;
export const RightWrap = styled.div``;