import { Logo } from "../../components/Logo";
import { Container, Header, MainGame, Favorites, Table, Form } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <img
          src="https://github.com/alexxcamargo1000.png"
          alt="foto do usuário"
        />
      </Header>

      <main>
        <MainGame>
          <h2>Jogo mais esperado</h2>
          <img
            src="https://criticalhits.com.br/wp-content/uploads/2022/06/rumor-god-of-war-ragnarok-chega-em-setembro-de-2022-1640688636722.jpg"
            alt=""
          />
          <div>
            <span>09/11/2022</span>
            <span>NOVO</span>
            <h1>God of war ragnarok</h1>
          </div>
        </MainGame>
        <Favorites>
          <h2>Favoritos</h2>
        </Favorites>

        <Table></Table>
        <Form></Form>
      </main>
    </Container>
  );
}
