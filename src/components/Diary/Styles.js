import styled from 'styled-components';

// DiaryList
export const DiaryListWrap = styled.div`
  padding: 20px 20px 60px;
`;
export const Sort = styled.div`
  display: flex;
  justify-content: flex-end;
`;


// DiaryItem
export const DiaryItemWrap = styled.div`
  padding: 15px 0;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.yellow};
  display: flex;
  justify-content: space-between;
`;
export const Emotion = styled.div`
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
`;
export const DateCont = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;
export const DiaryDate = styled.div`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: bold;
  margin-bottom: 12px;
`;
export const ContPreview = styled.div`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const EditDelete = styled.div`
  min-width: 70px;
`;