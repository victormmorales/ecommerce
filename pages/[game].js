import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import BasicLayout from "../layouts/BasicLayout";
import { getGameByUrlApi } from "../api/game";
import HeaderGame from "../components/Game/HeaderGame";
import TabsGame from "../components/Game/TabsGame";

export default function Game() {
  const [game, setGame] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getGameByUrlApi(query.game);
      setGame(response);
    })();
  }, [query]);

  if (!game) return <Loader active>Cargando juego</Loader>;

  return (
    <BasicLayout className="game">
      <HeaderGame game={game} />
      <TabsGame game={game} />
    </BasicLayout>
  );
}
