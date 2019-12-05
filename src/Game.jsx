import React from "react";
import { Link } from "react-router-dom";

class Game extends React.Component {
  render() {
    //console.log("props ", this.props.data);
    return (
      <div className="game">
        <h1>List of Games</h1>
        <button onClick={this.props.handleClick}>
          <b>{!this.props.bestGames ? "All Games" : "Best Games"}</b>
        </button>
        <ul>
          {this.props.data
            .filter(data => data.rating >= 4.5 || this.props.bestGames)
            .map(data => (
              <li key={data.id}>
                Name: {data.name} <br />
                Rating: {data.rating} <br />
                Released:{data.released} <br />
                BackgroundImage:{data.background_image}
                <button onClick={() => this.props.deleteGame(data, data.id)}>
                  Delete
                </button>
                {/* <button
                  onClick={() =>
                    this.props.displayScreenshots(data.short_screenshots)
                  }
                >
                  Screenshots
                </button> */}
                <Link
                  //   onClick={() =>
                  //     this.props.displayScreenshots(data.short_screenshots)
                  //   }
                  to={`/screenshots/${data.id}`}
                  screenshots={this.props.screenshots}
                >
                  Screenshots
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Game;
