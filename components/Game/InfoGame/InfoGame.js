import ReactPlayer from "react-player/lazy";
import CarouselScreenshots from "../CarouselScreenshots";

export default function InfoGame({ game }) {
  return (
    <div className="info-game">
      <ReactPlayer className="info-game__video" url={game.video} controls />
      <CarouselScreenshots title={game.title} screenshots={game.screenshots} />
    </div>
  );
}
