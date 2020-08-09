import React from "react";
import { Switch, Route } from "react-router-dom";
import Tugas11 from '../../Tugas11/tugas11';
import Tugas12 from '../../Tugas12/tugas12';
import Tugas13 from '../../Tugas13/tugas13';
import Tugas14 from '../../Tugas14/tugas14';
import Tugas15 from './DaftarBuah';
import Nav from './Nav';
import { ThemeProvider } from './ThemeContext'

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Tugas11 />
          </Route>

          <Route path="/tugas12">
            <Tugas12 start={200} />
          </Route>

          <Route path="/tugas13">
            <Tugas13 />
          </Route>

          <Route path="/tugas14">
            <Tugas14 />
          </Route>

          <Route path="/tugas15">
            <Tugas15 x />
          </Route>

        </Switch>
      </ThemeProvider>
    </>
  );
}
