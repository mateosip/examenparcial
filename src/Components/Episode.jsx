import React from "react";
import Styles from "./Styles.css";
import Character from "./Character.jsx";

const Episode = props => {
  //si le damos al episode, va a poner el boolean a 1, despueshabrá que llamar desde un boton y ponerlo a 0
  const { characters, title, image, episode_id } = props.episode;
  const { changeBoolean } = props;

  return (
    <div
      className="Episode"
      onClick={() => changeBoolean(props.episode.episode_id)}
    >
      <div className="Image">
        <img className="foto" src={image} />
        <div className="InfoImage">
          <h5>{title}</h5>
          <p>Episode:{episode_id}</p        >
        </div>
      </div>
    </div>
  );
};
export default Episode;
