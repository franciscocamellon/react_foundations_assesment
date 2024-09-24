import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Highlights from "./search";

import styles from "./styles.module.css";

function SearchBar() {
  const [foundHotel, setFoundHotel] = useState({});
  const navigate = useNavigate();

  function handleFoundHotel(event, value) {
    event.preventDefault();
    setFoundHotel(value);
  }

  return (
    <>
      <div className={styles.search_container}>
        <Highlights onFoundHotel={handleFoundHotel} />
        <Button
          sx={{
            "&.MuiButton-root": { height: 30, boxShadow: "none" },
          }}
          variant="contained"
          onClick={() => navigate(`/details/${foundHotel.id}`)}
        >
          Pesquisar
        </Button>
      </div>
    </>
  );
}

export default SearchBar;
