import React from "react";
import axios from "axios";
import Game from "./Game";
import Screenshots from "./Screenshots";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      bestGames: true,
      screenshots: [],
      dataId: ""
    };
  }

  componentDidMount() {
    axios.get("https://wild-games.herokuapp.com/api/v1").then(response => {
      this.setState({ data: response.data });
    });
  }

  deleteGame = (data, dataId) => {
    //prevState is a function inside setState
    this.setState(prevState => ({
      data: prevState.data.filter(dataId => dataId !== data)
    }));
    this.setState({ dataId: dataId });
    //console.log("deleted ", data, dataId);
  };

  handleClick = () => {
    this.setState({ bestGames: !this.state.bestGames });
  };

  displayScreenshots = screenshots => {
    this.setState({ screenshots: screenshots });
    console.log(screenshots);
  };

  //   interface = () => {
  //     if (this.state.data) {
  //       return (
  //         <Game
  // data={this.state.data}
  // deleteGame={this.deleteGame}
  // displayScreenshots={this.displayScreenshots}
  // bestGames={this.state.bestGames}
  // handleClick={this.handleClick}
  //         />
  //       );
  //     }
  //     if (this.state.bestGames === true) {
  //       console.log(this.state.data, this.state.screenshots);
  //       return (
  //         <Screenshots
  //           data={this.state.data}
  //           screenshots={this.state.screenshots}
  //           dataId={this.state.dataId}
  //         />
  //       );
  //     }
  //     return <GameList />;
  //   };

  render() {
    //console.log("data ", this.state.data);
    return (
      <div className="gameList">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/">
                <Game
                  data={this.state.data}
                  deleteGame={this.deleteGame}
                  displayScreenshots={this.displayScreenshots}
                  bestGames={this.state.bestGames}
                  handleClick={this.handleClick}
                  screenshots={this.state.screenshots}
                />
              </Route>
              <Route
                path="/screenshots/:id"
                render={props =>
                  this.state.data.length > 0 ? (
                    <Screenshots {...props} data={this.state.data} />
                  ) : (
                    <div>Loading</div>
                  )
                }
              />
            </Switch>
          </div>
        </Router>
        {/* {this.interface()} */}
      </div>
    );
  }
}

export default GameList;
