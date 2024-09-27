import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Highlights from "./search";

import styles from "./styles.module.css";
import OrderListBy from "../order/orderList";

function SearchBar({ hotels, onSortHotels }) {
  const [foundHotel, setFoundHotel] = useState({});
  const [orderOption, setOrderOption] = useState(0);
  const navigate = useNavigate();

  function handleOrderChange() {
    if (orderOption !== 0) {
      const sortedHotels = [...hotels].sort((a, b) => {
        switch (orderOption) {
          case 10:
            return a.price - b.price;
          case 20:
            return b.rating - a.rating;
          case 30:
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
      onSortHotels(sortedHotels);
    }
  }

  function handleFoundHotel(event, value) {
    event.preventDefault();
    setFoundHotel(value);
  }

  useEffect(() => {
    handleOrderChange();
  }, [orderOption]);

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
