import { Logo } from "../../components/Logo";
import { Container, Header, MainGame, Favorites, Table, Form } from "./styles";
import { Carousel } from '../../components/Carousel';
import { CarouselItem } from '../../components/CarouselItem';

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
          <Carousel>
            <CarouselItem />
            <CarouselItem img="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_auto/ncom/en_US/games/switch/f/fall-guys-switch/hero" />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Carousel>
        </Favorites>

        <Table></Table>
        <Form></Form>
      </main>
    </Container>
  );
}
