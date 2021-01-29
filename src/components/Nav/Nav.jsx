import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  Redirect } from "react-router";
import "./nav.scss";
import { GiFallingStar, GiWomanElfFace } from 'react-icons/gi';
import { BiPlanet } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';
import Planets from "../Planets/Planets";
import People from "../../components/People/People";
import FavoritePpl from "../../components/Favorite/FavoritePpl";
import Person from "../Person/Person";


const Nav = () => {

  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/planets"className="nav__link">
              <BiPlanet/>
              Planets
            </Link>
          </li>
          <li>
            <Link to="/people" className="nav__link">
              <GiWomanElfFace/>
              People
            </Link>
          </li>
          <li>
            <Link to="/people/favorite" className="nav__link">
              <BsFillHeartFill/>
              Favorite
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <header>
          <h1>Star WARS <GiFallingStar/></h1>
        </header>
        <Switch>
          <Route exact path="/">
            <Redirect to="/planets" />
          </Route>
          <Route exact path="/planets">
            <Planets />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route path={`/people/:id/`}>
            <Person/>
          </Route>
          <Route exact path="/people/favorite">
            <FavoritePpl/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Nav;
