import { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size, forEach } from "lodash";
import { getFavoriteApi } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import BasicLayout from "../layouts/BasicLayout";
import ListGames from "../components/ListGames";
import Seo from "../components/Seo";

export default function Wishlist() {
  const [games, setGames] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getFavoriteApi(auth.idUser, logout);
      if (size(response) > 0) {
        const gameList = [];
        forEach(response, (data) => {
          gameList.push(data.game);
        });
        setGames(gameList);
      } else {
        setGames([]);
      }
    })();
  }, []);

  return (
    <BasicLayout className="wishlist">
      <Seo title="Favoritos 🧡" />
      <div className="wishlist__block">
        <div className="title">Juegos favoritos 🧡</div>
        <div className="data">
          {!games && <Loader active>Cargando juegos</Loader>}
          {games && size(games) === 0 && (
            <div className="data__not-found">
              <h3>¿No tienes todavía ningun favorito? 🤯</h3>
            </div>
          )}
          {size(games) > 0 && <ListGames games={games} />}
        </div>
      </div>
    </BasicLayout>
  );
}
