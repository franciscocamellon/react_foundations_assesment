import { Link, useNavigate } from "react-router-dom";
import { Favorite, DarkMode, LightMode, Home } from "@mui/icons-material";
import SearchBar from "../search/searchBar";

import styles from "./styles.module.css";
import { useState } from "react";

function Header({ searchBar }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function onMenuClick() {
    setIsOpen(!isOpen);
  }

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
          <li>
            <DarkMode />
            <span>Dark Mode</span>
          </li>
          <li>
            <LightMode />
            <span>Light Mode</span>
          </li>
        </ul>
      )}
      {searchBar && <SearchBar />}
    </>
  );
}

export default Header;
