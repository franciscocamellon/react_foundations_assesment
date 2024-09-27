import { Link, useNavigate } from "react-router-dom";
import { Favorite, DarkMode, LightMode, Home } from "@mui/icons-material";
import SearchBar from "../search/searchBar";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

function Header({ searchBar, data, onSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("@selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("@selectedTheme", "light");
  };

  function getSelectedTheme() {
    const currentTheme = localStorage.getItem("@selectedTheme");
    if (currentTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  function onMenuClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    getSelectedTheme();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Link to={"/"}>
          <h1>Buukling.com</h1>
        </Link>
        <div className={styles.user} onClick={() => onMenuClick()}>
          <div>
            <img
              src="https://avatar.iran.liara.run/public"
              className={styles.user_avatar}
            />
          </div>
          <div>
            <p>Austin Powers</p>
            <p>Agent Level 1</p>
          </div>
        </div>
      </header>
      {isOpen && (
        <ul className={styles.navLinks}>
          <li onClick={() => navigate("/")}>
            <Home />
            <span>Home</span>
          </li>
          <li onClick={() => navigate("/favorites")}>
            <Favorite />
            <span>Favoritos</span>
          </li>
          <li onClick={() => setDarkMode()}>
            <DarkMode />
            <span>Dark Mode</span>
          </li>
          <li onClick={() => setLightMode()}>
            <LightMode />
            <span>Light Mode</span>
          </li>
        </ul>
      )}
      {searchBar && <SearchBar hotels={data} onSortHotels={onSort} />}
    </>
  );
}

export default Header;
