import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Mounting from "./Components/Mounting.jsx";
import Updating from "./Components/Updating.jsx";

import Unmounting from "./Components/Unmounting.jsx";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div>
        <h1>Component Life Cycle</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="a" to="/Mounting">
              Mounting
            </Link>
            <Link className="b" to="/updating">
              Updating
            </Link>

            <Link className="d" to="/Unmounting">
              Unmounting
            </Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Switch>
        <Route exact path="/Mounting" component={Mounting} />
        <Route exact path="/updating" component={Updating} />
        <Route exact path="/Unmounting" component={Unmounting} />
      </Switch>
    </div>
  );
}
