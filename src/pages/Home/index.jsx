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
import { Tr } from "../../components/Table/Tr";

import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

export function Home() {
  const URL_GAMES = `http://localhost:3001/datas`;
  const [games, setGames] = useState([{}]);
  const [url_image, setUrl_image] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isFavorite, setIsfFavorite] = useState("");
  const [isMostExpectedGame, setIsMostExpectedGame] = useState("");
  const [launch, setLaunch] = useState("");
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    fetch(URL_GAMES)
      .then((data) => data.json())
      .then((res) => setGames(res));
  }, []);

  const findLastExpectedGame = games.findLast(
    (game) => game.isMostExpectedGame
  );

  function clearForm() {
    setIsMostExpectedGame("");
    setIsfFavorite("");
    setLaunch("");
    setLink("");
    setName("");
    setPlatform("");
    setUrl_image("");
  }

  function handleSubmit(e) {
    console.log(isFavorite);

    if (
      (name,
      url_image,
      link,
      launch,
      platform,
      isFavorite,
      isMostExpectedGame === "")
    ) {
      return;
    }
    const id = games.length + 1;
    const isFavoriteBoolean = eval(isFavorite);
    const isMostExpectedGameBoolean = eval(isMostExpectedGame);
    const newGame = {
      id,
      url_image,
      name,
      link,
      isFavorite: isFavoriteBoolean,
      isMostExpectedGame: isMostExpectedGameBoolean,
      launch,
      platform,
    };

    fetch(URL_GAMES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("game cadastrado");
        setGames([...games, data]);
        clearForm();
      });

    e.preventDefault();
  }

  function remove(id) {
    let filteredGames = games.filter((item) => item.id !== id);
    fetch(`http://localhost:3001/datas/${id}`, {
      method: "DELETE",
    }).then(() => {
        alert("game deletado");
        setGames([...filteredGames]);
      });
  }

  return (
    <Container>
      <Header>
        <Logo />
        <img
          src="https://cdn-icons-png.flaticon.com/512/141/141070.png"
          alt="imagem de um controle"
        />
      </Header>

      <main>
        <ExpectedGame>
          <div className="fixed">
            <h2>Jogo mais esperado</h2>

            {findLastExpectedGame && (
              <>
                <img src={findLastExpectedGame.url_image} alt="" />
                <div className="content">
                  <span>{findLastExpectedGame.launch}</span>
                  <span>NOVO</span>
                  <h1>{findLastExpectedGame.name}</h1>
                </div>
              </>
            )}
          </div>
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
            <Table>
              {games.map((game) => {
                return (
                  <Tr
                    key={`ID_${game.id}`}
                    image={game.url_image}
                    launch={game.launch}
                    name={game.name}
                    platform={game.platform}
                    onClick={(e) => remove(game.id)}
                  />
                );
              })}
            </Table>
          </div>
        </TableWrapper>
        <Form method="post">
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
              value={url_image}
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
                id="launch"
                title="Lançamento"
                type="date"
                value={launch}
              />
            </div>
          </fieldset>

          <fieldset>
            <Input
              onChange={(e) => setLink(e.target.value)}
              id="link"
              title="Link da loja"
              type="text"
              value={link}
            />
            <div>
              <Select
                title="Add Favoritos"
                value={isFavorite}
                onChange={(e) => setIsfFavorite(e.target.value)}
              >
                {!isFavorite && <option disabled value=""></option>}

                <option value="true">Sim</option>
                <option value="false">Não</option>
              </Select>

              <Select
                title="Add  Mais esperado"
                value={isMostExpectedGame}
                onChange={(e) => setIsMostExpectedGame(e.target.value)}
              >
                {!isMostExpectedGame && <option disabled value=""></option>}

                <option value="true">Sim</option>
                <option value="false">Não</option>
              </Select>
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Salvar
            </button>
          </fieldset>
        </Form>
      </main>
    </Container>
  );
}
