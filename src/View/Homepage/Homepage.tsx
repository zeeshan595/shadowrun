import * as React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";
import { Character } from "../../Model/Character";

export interface IHomepageProps {
  getCookie?: (name: string) => string;
}

export interface IHomepageState {
  characters: Character[];
}

class Homepage extends React.Component<IHomepageProps, IHomepageState> {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentWillMount() {
    const characters = this.props.getCookie("characters");
    if (characters === undefined || characters === null) return;
    this.setState({
      ...this.state,
      characters: JSON.parse(characters),
    });
  }

  render() {
    return (
      <div>
        <Link to="/create">
          <button>+ Create Characer</button>
        </Link>
        <div className="characterList">
          {this.state.characters.map((character, index) => {
            return (
              <div className="character" key={index}>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url("${character.personalData.picture}")`,
                  }}
                ></div>
                <span className="name">{character.personalData.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Homepage;
