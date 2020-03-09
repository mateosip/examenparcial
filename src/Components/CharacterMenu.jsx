import React from "react";
import Styles from "./Styles.css";
import Character from "./Character";
import Episode from "./Episode.jsx";
import EpisodeSelected from "./EpisodeSelected.jsx";
const CharacterMenu = props => {
  const {
    title,
    characters,
    returnOriginal,
    episodes,
    changeBoolean,
    img,
    episode
  } = props;
  return (
    <div className="CharacterMenu">
      <div className="EpisodeMenu">
        {episodes.map(ep => (
          <Episode
            key={ep.episode_id}
            episode={ep}
            changeBoolean={changeBoolean}
          />
        ))}
      </div>
      <div className="CharacterShow">
        <div className="InfoEpisodio">
          <div className="button" onClick={() => returnOriginal()}>
            ×
          </div>
          <EpisodeSelected episode={episode} />
        </div>
        <div className="mapCharacters">
          {characters.map(char => (
            <Character key={char.name} character={char} />
          ))}
        </div>
      </div>
      {/* <div className="button" onClick={() => returnOriginal()}>
        Return
      </div> */}
    </div>
  );
};
export default CharacterMenu;
