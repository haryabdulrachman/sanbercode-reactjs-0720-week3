import React, { useContext } from "react"
import { DaftarBuahProvider } from "./DaftarBuahContext"
import DaftarBuahList from "./DaftarBuahList"
import DaftarBuahForm from "./DaftarBuahForm"
import "./DaftarBuah.css"
import { ThemeContext } from "./ThemeContext"

const Movie = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <button onClick={changeTheme}> Change Navbar to {theme === "dark" ? "Light Theme" : "Dark Theme"}</button>
      <DaftarBuahProvider>
        <DaftarBuahList />
        <DaftarBuahForm />
      </DaftarBuahProvider>
    </>
  )
}

export default Movie
