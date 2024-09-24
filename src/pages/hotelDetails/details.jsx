import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Hotel from "../../components/hotel/hotel";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

function Details() {
  const params = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [clickedHotel, setClickedHotel] = useState(null);

  function handleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }

  function loadHotelData() {
    const storedHotels = JSON.parse(localStorage.getItem("@hotels"));
    const hotel = storedHotels?.find((hotel) => hotel.id === params.id);
    setClickedHotel(hotel);
  }

  useEffect(() => {
    loadHotelData();
  }, []);

  useEffect(() => {
    if (!isFormOpen) {
      loadHotelData();
    }
  }, [isFormOpen]);

  return (
    <>
      <Header></Header>

      <div className={styles.container}>
        <h1>Detalhes</h1>
        {clickedHotel ? (
          <Hotel
            key={params.id}
            hotel={clickedHotel}
            formVisibility={isFormOpen}
            onCloseForm={handleOpenForm}
            onEditClick={setIsFormOpen}
          />
        ) : (
          <p>Carregando...</p> // Exibe uma mensagem de carregamento enquanto os dados não estão prontos
        )}
      </div>
    </>
  );
}

export default Details;
