import React from "react";
import Game from "./GameList";
import Screenshots from "./Screenshots";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/screenshots" activeClassName="active">
                Screenshots
              </NavLink>
            </li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/screenshots/:id" component={Screenshots} />

          <Route exact path="/" component={Game}>
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
