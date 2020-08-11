import * as React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";

export interface IHomepageProps {}

export interface IHomepageState {}

class Homepage extends React.Component<IHomepageProps, IHomepageState> {
  render() {
    return (
      <div>
        <Link to="/create">
          <button>+ Create Characer</button>
        </Link>
        <div className="characterList">
          <div className="character">
            <div className="image"></div>
            <span className="name">Drowman</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
