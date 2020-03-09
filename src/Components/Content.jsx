import React from "react";
import Styles from "./Styles.css";
import Episode from "./Episode.jsx";
import CharacterMenu from "./CharacterMenu.jsx";
import Character from "./Character.jsx";

const Content = props => {
  const { episodes, changeBoolean, boolean, returnOriginal } = props;
   const characters = props.episode.characters;
   const title = props.episode.title;
   const img = props.episode.image;
   const episode = props.episode;
  return (
    <div className="Content">
      {boolean === 0 ? (
        episodes.map(ep => (
          <Episode
            key={ep.episode_id}
            episode={ep}
            changeBoolean={changeBoolean}
          />
        ))
      ) : (
        
        <CharacterMenu 
            episodes={episodes}
            title={title}
            img={img}
            characters={characters}
            returnOriginal={returnOriginal}
            episode={episode}
            changeBoolean={changeBoolean}
        />
      )

      }
    </div>
  );
};
export default Content;
