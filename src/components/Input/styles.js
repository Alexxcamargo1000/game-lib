import styled from "styled-components";

export const Container = styled.label`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  span {
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.BLACK};
  }
  input {
    background: #f3f3f3;
    padding-left: 16px;
    height: 46px;
    border-radius: 8px;
    border: none;
  }
`;
