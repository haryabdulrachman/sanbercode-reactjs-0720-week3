import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "./Nav.css"
import { ThemeContext } from "./ThemeContext";


const Nav = () => {
  const [theme] = useContext(ThemeContext)

  return (
    <nav style={{ background: theme === "dark" ? "navy" : "salmon" }}>
      <ul>
        <li>
          <Link to="/">Tugas 11</Link>
        </li>
        <li>
          <Link to="/tugas12">Tugas 12</Link>
        </li>
        <li>
          <Link to="/tugas13">Tugas 13</Link>
        </li>
        <li>
          <Link to="/tugas14">Tugas 14</Link>
        </li>
        <li>
          <Link to="/tugas15">Tugas 15</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
