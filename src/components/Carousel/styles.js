import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  margin-bottom: 16px;

  > a img {
    max-width: 250px;
    height: 256px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const Buttons = styled.div`
  padding-inline: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    border: none;
    background: none;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
