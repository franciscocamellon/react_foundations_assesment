import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Hotel from "../../components/hotel/hotel";

import styles from "./styles.module.css";
import FormFeedbackSnackbar from "../../components/feedback/formFeedback";

function Details() {
  const params = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
  const [clickedHotel, setClickedHotel] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  function handleOnSuccess(result) {
    // if (result === "success") {
    //   setShowSuccessToast(true);
    // }
    console.log(result);
  }

  function handleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }

  function handleDeleteForm() {
    setIsDeleteFormOpen(!isDeleteFormOpen);
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
      <Header />

      <div className={styles.container}>
        <h1>Detalhes</h1>
        {clickedHotel ? (
          <Hotel
            key={params.id}
            hotel={clickedHotel}
            formVisibility={isFormOpen}
            deleteFormVisibility={isDeleteFormOpen}
            onCloseForm={handleOpenForm}
            onCloseDeleteForm={handleDeleteForm}
            onEditClick={setIsFormOpen}
            onDeleteClick={setIsDeleteFormOpen}
            teste={handleOnSuccess}
          />
        ) : (
          <p>Carregando...</p> // fazer um spinner se der tempo
        )}
      </div>

      <FormFeedbackSnackbar
        isOpen={showSuccessToast}
        onCloseFeedback={() => setShowSuccessToast(false)}
        alertSeverity={"success"}
        message={"Hotel salvo com sucesso!"}
      />
    </>
  );
}

export default Details;
