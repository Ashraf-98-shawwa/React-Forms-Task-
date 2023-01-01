import React, { Component } from "react";
import GodOfWars from "../../Images/wars.png";
import superman from "../../Images/superman.png";
import spiderman from "../../Images/spiderman.png";
import "./style.css";
import Game from "../Game";
import Title from "../Title";

export default class Games extends Component {
  render() {
    return (
      <div className="Games">
        <Title name="NEW GAMES"/>
        <div className="images">
          <Game
            img={GodOfWars}
            body="Join in the new DLC with Kratos to learn more about him and his
              future."
          />
          <Game
            img={superman}
            body="Be part of the Suicide Squad and kill the Justice League!
              "
            author="-Amanda Waller"
          />
          <Game
            img={spiderman}
            body=" Miles Morales discovers powers from his mentor, Peter Parker.
              Master his unique, bio-electric venom blast attacks."
          />
        </div>
      </div>
    );
  }
}
