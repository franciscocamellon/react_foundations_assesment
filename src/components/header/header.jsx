import React from "react";

import styles from "./styles.module.css";
import SearchBar from "../search/searchBar";
import { TextField } from "@mui/material";

function Header({ searchBar }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Buukling.com</h1>
      </header>
      {searchBar && <SearchBar />}
    </>
  );
}

export default Header;
