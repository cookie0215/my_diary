import styled from "styled-components";

export const Select = styled.select`
  border: none;
  border-radius: 5px;
  background: transparent;
  padding: 8px 12px;
  margin-left: 8px;
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: bold;
  cursor: pointer;
`;