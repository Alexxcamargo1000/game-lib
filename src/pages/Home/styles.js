import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  padding-inline: 40px;
  padding-bottom: 80px;

  > main {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "main favorites"
      "main table"
      "main form";
  }
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 40px;

  > img {
    width: 96px;
    height: 93px;
    border-radius: 16px;
  }
`;

export const ExpectedGame = styled.div`
  grid-area: main;
  width: 300px;
  position: relative;

  > .fixed {
    position: sticky;
    max-width: 300px;
    top: 10px;

    img {
      width: 100%;
      height: 256px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: ${({ theme }) => theme.shadow};
    }

    .content {
      display: flex;
      flex-direction: column;
      margin-top: 16px;

      span {
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
      }

      span:nth-child(1) {
        color: ${({ theme }) => theme.colors.RED};
        align-self: end;
      }
      span:nth-child(2) {
        color: ${({ theme }) => theme.colors.BLUE};
      }

      h1 {
        font-size: 32px;
        line-height: 38px;
        letter-spacing: 0.04em;
        text-transform: capitalize;
      }
    }
  }
`;

export const Favorites = styled.div`
  grid-area: favorites;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableWrapper = styled.div`
  margin-top: 60px;

  > .scroll {
    max-width: 850px;
    max-height: 428px;
    border-radius: 0 0 16px 16px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`;

export const Form = styled.form`
  grid-area: form;
  margin-top: 88px;
  margin-bottom: 40px;
  border-radius: 16px;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.GRAY_600};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "legend legend"
    "col-a col-b";

  legend {
    grid-area: legend;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.BLUE};
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  fieldset {
    padding-inline: 16px;
    border: none;

    > div {
      display: grid;
      gap: 8px;
      grid-template-columns: 1fr 1fr;
    }
  }

  fieldset:nth-child(2) {
    grid-area: col-a;
  }
  fieldset:nth-child(3) {
    grid-area: col-b;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    width: 100%;
    height: 46px;
    margin-top: 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    background-color: ${({ theme }) => theme.colors.BLUE};
    color: ${({ theme }) => theme.colors.WHITE};
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
