import React from "react";
import Styles from "./Styles.css";
import Character from "./Character.jsx";

const EpisodeSelected = props => {
  //si le damos al episode, va a poner el boolean a 1, despueshabrá que llamar desde un boton y ponerlo a 0
  const { characters, title, image, episode_id ,director,release_date,opening_crawl} = props.episode;
  const { changeBoolean } = props;

  return (
    <div className="EpisodeSelected">
      <div className="ImageSelected">
        <img className="img" src={image} />
        <div className="InfoImageSelected">
          <p>Title:{title}</p>
          <p>Episode:{episode_id}</p>
          <p>Director:{director}</p>
          <p>Release:{release_date}</p>
          <p>Begining:{opening_crawl}</p>
        </div>
      </div>
    </div>
  );
};
export default EpisodeSelected;
