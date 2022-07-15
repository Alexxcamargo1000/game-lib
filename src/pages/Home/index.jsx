import { useEffect, useState } from "react";
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

import { datas } from "../../../datas.json";

export function Home() {
  const [url_image, setUrl_image] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isFavorite, setIsfFavorite] = useState("");
  const [isMostExpectedGame, setIsMostExpectedGame] = useState("");
  const [isList, setIsList] = useState("");
  const [launch, setLaunch] = useState("");
  const [platform, setPlatform] = useState("");

  const [info, setInfo] = useState([]);

  const findLastExpectedGame = datas.findLast(
    (item) => item.isMostExpectedGame
  );
  const options = [{ value: "sim" }, { value: "não" }];

  useEffect(() => {
    console.log(info);
    setInfo([...info]);
  }, []);

  function handleSaveDatas(e) {
    e.preventDefault();
    const data = {
      url_image: url_image,
      name: name,
      link: link,
      isFavorite: isFavorite,
      isMostExpectedGame: isMostExpectedGame,
      isList: isList,
      launch: launch,
      platform: platform,
    };
    setInfo([...info, data]);
    console.log(info);
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

          <img src={findLastExpectedGame.url_image} alt="" />
          <div>
            <span>{findLastExpectedGame.launch}</span>
            <span>NOVO</span>
            <h1>{findLastExpectedGame.name}</h1>
          </div>
        </ExpectedGame>
        <Favorites>
          <h2>Favoritos</h2>
          <Carousel>
            {datas.map((item) => {
              if (item.isFavorite) {
                return (
                  <CarouselItem
                    img={item.url_image}
                    link={item.link}
                    key={item.name}
                  />
                );
              }
            })}
          </Carousel>
        </Favorites>
        <TableWrapper>
          <h2>Minha lista de jogos</h2>
          <div className="scroll">
            <Table data={datas} />
          </div>
        </TableWrapper>
        <Form>
          <legend>Adicionar um jogo</legend>
          <fieldset>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              title="Nome"
              type="text"
            />
            <Input
              onChange={(e) => setUrl_image(e.target.value)}
              id="url_img"
              title="URL da imagem"
              type="text"
            />
            <div>
              <Select
                id="platform"
                title="Plataforma"
                onChange={(e) => setPlatform(e.target.value)}
                value={platform}
              />
              <Input
                onChange={(e) => setLaunch(e.target.value)}
                id="date"
                title="Lançamento"
                type="date"
              />
            </div>
          </fieldset>

          <fieldset>
            <Input
              onChange={(e) => setLink(e.target.value)}
              id="link"
              title="Link da loja"
              type="text"
            />
            <div>
              <Select
                onChange={(e) => setIsMostExpectedGame(e.target.value)}
                value={isMostExpectedGame}
                id="expectedGame"
                title="Add mais esperado"
                options={options}
              />
              <Select
                onChange={(e) => setIsfFavorite(e.target.value)}
                value={isFavorite}
                id="favorites"
                title="Add nos Favoritos"
                options={options}
              />
              <Select
                onChange={(e) => setIsList(e.target.value)}
                value={isList}
                id="list"
                title="Add na Lista"
                options={options}
              />
            </div>
          </fieldset>
          <button type="submit" onClick={handleSaveDatas}>
            Salvar
          </button>
        </Form>
      </main>
    </Container>
  );
}
