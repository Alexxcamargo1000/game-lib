import { Container } from "./styles";
import { Tr } from "./Tr";

export function Table({ data }) {
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
        {data.map((game) => {
          return (
            <Tr
              key={`ID_${game.id}`}
              image={game.url_image}
              launch={game.launch}
              name={game.name}
              platform={game.platform}
              id={game.id}
            />
          );
        })}
      </tbody>
    </Container>
  );
}
