import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Header from "../../components/header/header";
import HotelCard from "../../components/hotel/card";
import RegistrationForm from "../../components/forms/registration";
import OrderListBy from "../../components/order/orderList";
import { mockHotels } from "../../data/mockupData";

import styles from "./styles.module.css";

function Favorites() {
  const arrayHotels = JSON.parse(localStorage.getItem("@hotels")) || [];
  const favoriteHotels = arrayHotels.filter((hotel) => hotel.favorite === true);
  console.log(favoriteHotels);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.page_title_container}>
          <div className={styles.page_title}>
            <h1>Seus hotéis favoritos</h1>
          </div>
        </div>

        <div className={styles.container_list}>
          {favoriteHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
