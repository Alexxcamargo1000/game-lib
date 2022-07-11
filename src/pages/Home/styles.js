import styled from "styled-components";
import bgImg from "../../assets/bg.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  background: url(${bgImg});
  padding-inline: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};



  > main {
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: minmax(350px, auto) minmax(450px, auto) minmax(450px, auto);
    grid-template-areas:
      "main favorites"
      "main table"
      "form form";
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

export const MainGame = styled.div`
  grid-area: main;
  width: 300px;

  > img {
    width: 100%;
    height: 256px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadow};
  }

  > div {
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
`;

export const Favorites = styled.div`
  grid-area: favorites;
  padding-left: 105px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableWrapper = styled.div`
  padding-left: 105px;
  margin-top: 60px;
  

  > .scroll {
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
    display: none;
  }
  }
`;




export const Form = styled.div`
  grid-area: form;
`;
