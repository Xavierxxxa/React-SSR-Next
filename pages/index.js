import React, { Component } from "react";
import "isomorphic-fetch";


export default class Home extends Component {
  static getInitialProps = async () => {
    const response = await fetch(
      "https://api.github.com/orgs/rocketseat/repos"
    );

    return { repositories: await response.json() };
  };

  render() {
    return (
      <div style={panelStyle}>
        <h1>Exemplo de utilização do Next-SSR</h1>
        <hr/>
        <h4>Consumo de Rest-API -Lista de repositórios da RocketSeat: </h4>
        {this.props.repositories.map(repo => (
          <ul>
            <li><p key={repo.id}>{repo.name}</p></li>
          </ul>
        ))}
      </div>
    );
  }
}

const panelStyle = {
  height: "100%",
  width: "100%",
  flex: 1,
  padding: '10px',
  background: "lightgray"
};