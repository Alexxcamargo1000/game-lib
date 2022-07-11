import { Logo } from "../../components/Logo";
import { Container, Header, MainGame, Favorites, TableWrapper, Form } from "./styles";
import { Carousel } from "../../components/Carousel";
import { CarouselItem } from "../../components/CarouselItem";
import {Table} from '../../components/Table'
import {Tr} from '../../components/Table/Tr'

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
            <CarouselItem img="https://tm.ibxk.com.br/2015/03/06/06151856480054.jpg?ims=1200x675" />
            <CarouselItem img="https://cdn1.epicgames.com/offer/fn/21BR_KeyArt_EGS_Launcher_Blade_2560x1440_2560x1440-5335449297e75a6cc7c72ad01609b8e1" />
            <CarouselItem img="https://images.kabum.com.br/produtos/fotos/140584/red-dead-redemption-2-rockstar-_1611085792653_g.jpg" />
          </Carousel>
        </Favorites>

        <TableWrapper>
          <h2>Minha lista de jogos</h2>
          <div className="scroll">
            <Table>
              <Tr/>
              <Tr/>
              <Tr/>
              <Tr/>
              <Tr/>
            </Table>
          </div>
        </TableWrapper>
        <Form></Form>
      </main>
    </Container>
  );
}
