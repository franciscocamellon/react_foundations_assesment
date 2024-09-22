import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import Header from "../../components/header/header";
import HotelCard from "../../components/hotel/card";
import { mockHotels } from "../../data/mockupData";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RegistrationForm from "../../components/forms/registration";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function retrieveHotels() {
    const initialData = localStorage.getItem("@loadedInitialData");

    if (!initialData) {
      localStorage.setItem("@hotels", JSON.stringify(mockHotels));
      localStorage.setItem("@loadedInitialData", JSON.stringify(true));
    }

    const arrayHotels = JSON.parse(localStorage.getItem("@hotels"));
    setHotels(arrayHotels);
  }

  function handleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }

  useEffect(() => {
    retrieveHotels();
  }, [handleOpenForm]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.page_title_container}>
          <h1>Hotéis perto de você</h1>
          <h5>
            Encontre ofertas incríveis de hotéis para hoje à noite ou para sua
            próxima viagem
          </h5>
        </div>

        <div className={styles.container_list}>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
        <Fab
          sx={{
            margin: 0,
            top: "auto",
            right: 20,
            bottom: 20,
            left: "auto",
            position: "fixed",
            backgroundColor: "#003b95",
          }}
          color="primary"
          onClick={() => setIsFormOpen(true)}
        >
          <AddIcon />
        </Fab>

        <RegistrationForm visibility={isFormOpen} onClose={handleOpenForm} />
      </div>
    </>
  );
}

export default Home;
