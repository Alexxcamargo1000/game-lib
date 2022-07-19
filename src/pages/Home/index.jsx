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
  const [games, setGames] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isFavorite, setIsfFavorite] = useState("");
  const [isMostExpectedGame, setIsMostExpectedGame] = useState("");
  const [isList, setIsList] = useState("");
  const [launch, setLaunch] = useState("");
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/datas`)
      .then((data) => data.json())
      .then((res) => setGames(res));
  }, []);

  const findLastExpectedGame = games.findLast(
    (game) => game.isMostExpectedGame
  );

  function handleSaveDatas() {
    const dataObject = {
      url_image,
      name,
      link,
      isFavorite,
      isMostExpectedGame,
      isList,
      launch,
      platform,
    };

    setGames(...games, dataObject);
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

          {findLastExpectedGame && (
            <>
              <img src={findLastExpectedGame.url_image} alt="" />
              <div>
                <span>{findLastExpectedGame.launch}</span>
                <span>NOVO</span>
                <h1>{findLastExpectedGame.name}</h1>
              </div>
            </>
          )}
        </ExpectedGame>
        <Favorites>
          <h2>Favoritos</h2>
          <Carousel>
            {games.map((game) => {
              if (game.isFavorite) {
                return (
                  <CarouselItem
                    img={game.url_image}
                    link={game.link}
                    key={game.id}
                  />
                );
              }
            })}
          </Carousel>
        </Favorites>
        <TableWrapper>
          <h2>Minha lista de jogos</h2>
          <div className="scroll">
            <Table data={games} />
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
              value={name}
            />
            <Input
              onChange={(e) => setUrl_image(e.target.value)}
              id="url_img"
              title="URL da imagem"
              type="text"
            />
            <div>
              <Select
                title="Plataforma"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                {!platform && <option disabled value=""></option>}

                <option value="XBOX">XBOX</option>
                <option value="PS5">PS5</option>
                <option value="PC">PC</option>
                <option value="TODAS">TODAS</option>
              </Select>
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
                title="Add na Lista"
                value={isList}
                onChange={(e) => setIsList(e.target.value)}
              >
                {!isList && <option disabled value=""></option>}

                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Select>
              <Select
                title="Add Favoritos"
                value={isFavorite}
                onChange={(e) => setIsfFavorite(e.target.value)}
              >
                {!isFavorite && <option disabled value=""></option>}

                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Select>
            </div>
            <div>
              <Select
                title="Add Mais esperado"
                value={isMostExpectedGame}
                onChange={(e) => setIsMostExpectedGame(e.target.value)}
              >
                {!isMostExpectedGame && <option disabled value=""></option>}

                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Select>
              <button type="button" onClick={handleSaveDatas}>
                Salvar
              </button>
            </div>
          </fieldset>
        </Form>
      </main>
    </Container>
  );
}
