import styled from "styled-components";

export const Container = styled.table`
  grid-area: table;
  width: 100%;
  border-collapse: collapse;

  img {
    width: 56px;
    height: 56px;
    border-radius: 10px;
    object-fit: cover;
  }

  > thead {
    background-color: ${({ theme }) => theme.colors.BLUE};
    color: ${({ theme }) => theme.colors.WHITE};
    height: 59px;
    text-align: left;

    th {
      padding-left: 16px;
    }

    th:first-child {
      border-radius: 16px 0 0 0;
    }
    th:last-child {
      border-radius: 0 16px 0 0;
    }

    th:not(:first-child) {
      text-align: center;
    }
  }

  > tbody {
    overflow-y: auto;

    max-height:300px;

    tr:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.GRAY_500};

   
    }
    tr:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.GRAY_600};
      
      td {
        border-block: 1px solid #B9B7B7;
      }
    }

    tr:last-child  {
      td {
        border-bottom: none;
      }

      > td:nth-child(4) {
        border-radius: 0 0 16px 0;
      }
      > td:nth-child(1) {
        border-radius: 0 0 0 16px;
      }
    }
    
    td {
      color: ${({ theme }) => theme.colors.GRAY};
      padding: 16px;
      text-align: center;
      text-transform: uppercase;
      div {
        display: flex;
        align-items: center;
        gap: 16px;

        strong {
          font-size: 14px;
        }
      } 

      span {
        font-size: 14px;
        font-weight: bold;
      }

      button {
        text-transform: uppercase;
        border: none;
        background-color:transparent;
        color: ${({ theme }) => theme.colors.RED};
        font-weight: 700;
        cursor: pointer;

      }
    }
    
  }
`;
