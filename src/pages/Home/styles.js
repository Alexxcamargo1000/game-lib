import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 16px;
  }

  > main {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "main favorites"
      "main table"
      "main form";

    @media (max-width: 1000px) {
      grid-template-columns: 400px 1fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "main favorites"
        "table table"
        "form form";
    }

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-block: 40px;

  > img {
    width: 96px;
    height: 93px;
    border-radius: 16px;
  }
`;

export const ExpectedGame = styled.div`
  grid-area: main;
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

    @media (max-width: 700px) {
      max-width: 100%;
    }
  }
`;

export const Favorites = styled.div`
  grid-area: favorites;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 700px) {
    margin-top: 40px;
  }
`;

export const TableWrapper = styled.div`
  margin-top: 60px;
  grid-area: table;

  > .scroll {
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

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    margin-top: 44px;
  }

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
      @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
      }
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

export const NotGame = styled.div`
  grid-area: main;

  align-self: center;

  text-align: center;
  h1 {
    line-height: 42px;
    margin-bottom: 24px;
  }

  img {
    width: 300px;
  }
`;
