import styled from "styled-components";

export const EditorWrap = styled.div`
  padding: 20px 20px 30px;
`;
export const Section = styled.section`
  margin-bottom: 40px;
`;
export const Title = styled.h4`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: bold;
  padding-left: 8px;
  margin-bottom: 10px;
  position: relative;

  &::before {
    content: "";
    width: 4px;
    height: 18px;
    background: ${({ theme }) => theme.colors.yellow};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;
export const InputWrap = styled.div``;
export const Input = styled.input`
  border: none;
  background: transparent;
  padding: 8px 12px;
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: bold;
`;
export const EmotionWrap = styled.ul`
  display: flex;
  margin-top: 20px;
`;
export const TextWrap = styled.div`
  margin-top: 20px;
`;
export const TextArea = styled.textarea`
  font-family: ${({ theme }) => theme.font.family.write};
  font-size: ${({ theme }) => theme.font.size.xl};
  width: 100%;
  border: none;
  padding: 10px 14px;
  box-sizing: border-box;
  min-height: 200px;
  resize: vertical;
  outline: none;
  border-radius: 10px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`;
export const ControlBox = styled.div`
  display: flex;
`;


// EmotionItem 컴포넌트
export const EmotionItemWrap = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;

  & ~ & {
    margin-left: 6px;
  }

  &.emotionItem_off {
    border: 4px solid ${({ theme }) => theme.colors.white};
  }
  &.emotionItem_on {
    flex: 1.4;
    border: 4px solid ${({ theme }) => theme.colors.yellow};
    font-weight: bold;
  }
`;

export const EmotionImg = styled.img`
  cursor: pointer;
`;
export const EmotionText = styled.span`
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.base};
`;