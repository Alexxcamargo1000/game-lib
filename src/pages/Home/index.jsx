import { useState } from "react";
import {
  Container,
  Header,
  ExpectedGame,
  Favorites,
  TableWrapper,
  Form,
} from "./styles";
import { Logo } from "../../components/Logo";
import { Carousel } from "../../components/Carousel";
import { CarouselItem } from "../../components/CarouselItem";
import { Table } from "../../components/Table";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

import {data} from "../../../data.json"

export function Home() {
  const [info, setInfo] = useState([{
    url_image: "",
    name: "",
    link: "#",
    isFavorite: false,
    isMostExpectedGame: false,
    isList: false,
    launch: "",
    platform: ""
  }])
  const findLastExpectedGame = data.findLast(item => item.isMostExpectedGame);
  const options = [{ value: "sim" }, { value: "não" }];

  function handleSaveData() {
    
  }

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
        <ExpectedGame>
          <h2>Jogo mais esperado</h2>

          <img
            src={findLastExpectedGame.url_image}
            alt=""
          />
          <div>
            <span>{findLastExpectedGame.launch}</span>
            <span>NOVO</span>
            <h1>{findLastExpectedGame.name}</h1>
          </div>
        </ExpectedGame>
        <Favorites>
          <h2>Favoritos</h2>
          <Carousel>
            
            {data.map(item => {
              if(item.isFavorite) {
                return <CarouselItem img={item.url_image} link={item.link} key={item.name}/>
              }
            })}
          </Carousel>
        </Favorites>

        <TableWrapper>
          <h2>Minha lista de jogos</h2>
          <div className="scroll">
            <Table data={data} />
          </div>
        </TableWrapper>
        <Form>
          <legend>Adicionar um jogo</legend>
          <fieldset>
            <Input id="name" title="Nome" type="text" />
            <Input id="url_img" title="URL da imagem" type="text" />
            <div>
              <Select id="platform" title="Plataforma" />
              <Input id="date" title="Lançamento" type="date" />
            </div>
          </fieldset>

          <fieldset>
            <Input id="link" title="Link da loja" type="text" />
            <div>
              <Select
                id="expectedGame"
                title="Adicionar no mais esperado"
                options={options}
              />
              <Select
                id="favorites"
                title="Adicionar nos Favoritos"
                options={options}
              />
            </div>

            <button>Salvar</button>
          </fieldset>
        </Form>
      </main>
    </Container>
  );
}
