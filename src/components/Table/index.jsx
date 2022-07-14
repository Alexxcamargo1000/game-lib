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
        {data.map((item) => {
          if(item.isList){
            return (
              <Tr
                image={item.url_image}
                launch={item.launch}
                name={item.name}
                platform={item.platform}
                key={item.name}
              />
            );
          }
        })}
      </tbody>
    </Container>
  );
}
