import React, { Component } from 'react';
import './App.css';
import Data from "../assets/data";
import Content from "../Components/Content.jsx";
import cloneDeep from 'clone-deep';


class App extends Component {
  state={
      episodes:Data,
      boolean:0,
      episode:"",
  }

  changeBoolean=(episode_id) =>{
    let newState = cloneDeep(this.state);
    const episode = newState.episodes.find(ep=>ep.episode_id===episode_id)
    newState.boolean=1;
    newState.episode=episode;
    this.setState(newState);
  }
  returnOriginal=()=>{
    let newState = cloneDeep(this.state);
    newState.episode="";
    newState.boolean=0;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Content
            episodes={this.state.episodes}
            boolean={this.state.boolean}//Este va a decir si se muestra o episodios o personajes
            changeBoolean={this.changeBoolean}
            episode={this.state.episode}
            returnOriginal={this.returnOriginal}
          />
        </div>
      </div>
    );
  }
}

export default App;
