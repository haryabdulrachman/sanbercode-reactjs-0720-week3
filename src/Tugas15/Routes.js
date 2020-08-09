import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import UserInfo from '../Tugas11/tugas11';
import Timer from '../Tugas12/tugas12';
import Lists from '../Tugas13/tugas13';
import HooksLists from '../Tugas14/tugas14';
import Movie from './Movie/Movie';

const Routes = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/lists">Lists dengan class</Link>
          </li>
          <li>
            <Link to="/hook-lists">Lists dengan Hooks</Link>
          </li>
          <li>
            <Link to="/movie">Movie dengan context</Link>
          </li>

        </ul>
      </nav>
      <Switch>
        <Route path="/timer" component={Timer} />
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/hook-lists">
          <HooksLists />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/">
          <UserInfo />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
