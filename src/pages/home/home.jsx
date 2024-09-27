import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Header from "../../components/header/header";
import HotelCard from "../../components/hotel/card";
import RegistrationForm from "../../components/forms/registration";
import OrderListBy from "../../components/order/orderList";
import { mockHotels } from "../../data/mockupData";

import styles from "./styles.module.css";
import FormFeedbackSnackbar from "../../components/feedback/formFeedback";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [orderOption, setOrderOption] = useState(0);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

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
      setHotels(sortedHotels);
    }
  }

  function handleFavorite(id) {
    const arrayHotels = JSON.parse(localStorage.getItem("@hotels")) || [];
    const hotelIndex = arrayHotels.findIndex((hotel) => hotel.id === id);

    if (hotelIndex !== -1) {
      arrayHotels[hotelIndex].favorite = !arrayHotels[hotelIndex].favorite;
      localStorage.setItem("@hotels", JSON.stringify(arrayHotels));
      setHotels([...arrayHotels]);
    }
  }

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

  function handleOnSuccess(result) {
    if (result === "success") {
      setShowSuccessToast(true);
      retrieveHotels();
    }
    console.log(result);
  }

  useEffect(() => {
    handleOrderChange();
  }, [orderOption]);

  useEffect(() => {
    retrieveHotels();
  }, []);

  return (
    <>
      <Header searchBar />
      <div className={styles.container}>
        <div className={styles.page_title_container}>
          <div className={styles.page_title}>
            <h1>Hotéis perto de você</h1>
            <h5>
              Encontre ofertas incríveis de hotéis para hoje à noite ou para sua
              próxima viagem
            </h5>
          </div>
          <div className={styles.order_by}>
            <OrderListBy onChangeOption={setOrderOption} />
          </div>
        </div>

        <div className={styles.container_list}>
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onFavoriteToggle={handleFavorite}
            />
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

        <RegistrationForm
          visibility={isFormOpen}
          onClose={handleOpenForm}
          onSuccess={handleOnSuccess}
        />
        <FormFeedbackSnackbar
          isOpen={showSuccessToast}
          onCloseFeedback={() => setShowSuccessToast(false)}
          alertSeverity={"success"}
          message={"Hotel salvo com sucesso!"}
        />
      </div>
    </>
  );
}

export default Home;
