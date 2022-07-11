import { Container } from "./styles";
import { Tr } from "./Tr";

export function Table({children = <Tr />}) {
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
