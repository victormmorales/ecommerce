import { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import { size } from "lodash";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";
import { getGamesPlatformApi } from "../../api/game";
import ListGames from "../../components/ListGames";

const limitPerPage = 20;

export default function Platform() {
  const { query } = useRouter();
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      if (query.platform) {
        const response = await getGamesPlatformApi(
          query.platform,
          limitPerPage,
          0
        );
        setGames(response);
      }
    })();
  }, [query]);

  return (
    <BasicLayout className="platform">
      {!games && <Loader active>Cargando juegos</Loader>}
      {games && size(games) === 0 && <div>No hay juegos</div>}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  );
}
