import { Container } from "./styles";
import { useEffect } from "react";

export function Table({ children }) {

  return (
    <Container>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Plataforma</th>
          <th>Lançamento</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Container>
  );
}
