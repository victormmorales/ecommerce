import { useState, useEffect } from "react";
import { Tab } from "semantic-ui-react";
import InfoGame from "../InfoGame/InfoGame";

export default function TabsGames({ game }) {
  const panes = [
    {
      menuItem: "Información",
      render: () => (
        <Tab.Pane>
          <InfoGame game={game} />
        </Tab.Pane>
      ),
    },
  ];
  return <Tab className="tabs-game" panes={panes} />;
}
