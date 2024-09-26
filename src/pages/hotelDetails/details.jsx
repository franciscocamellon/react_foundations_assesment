import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Hotel from "../../components/hotel/hotel";

import styles from "./styles.module.css";
import FormFeedbackSnackbar from "../../components/feedback/formFeedback";
import HotelHeader from "../../components/hotel/header";
import HotelImageList from "../../components/hotel/imageList";
import HotelDescription from "../../components/hotel/description";
import RegistrationForm from "../../components/forms/registration";
import DeleteForm from "../../components/forms/delete";

function Details() {
  const params = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
  const [clickedHotel, setClickedHotel] = useState({
    id: "",
    name: "",
    principalImage: "",
    firstRoom: "",
    secondRoom: "",
    thirdRoom: "",
    rating: "",
    city: "",
    state: "",
    price: "",
    description: "",
    amenities: "",
  });
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

  function handleOnSuccess(result) {
    if (result === "success") {
      setShowSuccessToast(true);
    }
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
          <>
            <HotelHeader
              rating={parseInt(clickedHotel.rating)}
              name={clickedHotel.name}
              city={clickedHotel.city}
              state={clickedHotel.state}
              price={clickedHotel.price}
              onEditIconClick={() => setIsFormOpen(true)}
              onDeleteIconClick={() => setIsDeleteFormOpen(true)}
            />
            <HotelImageList
              principalImage={clickedHotel.principalImage}
              firstRoom={clickedHotel.firstRoom}
              secondRoom={clickedHotel.secondRoom}
              thirdRoom={clickedHotel.thirdRoom}
            />
            <HotelDescription
              description={clickedHotel.description}
              amenities={clickedHotel.amenities}
            />
          </>
        ) : (
          <p>Carregando...</p> // fazer um spinner se der tempo
        )}
      </div>

      <RegistrationForm
        visibility={isFormOpen}
        onClose={handleOpenForm}
        data={clickedHotel}
        onSuccess={handleOnSuccess}
      />

      <DeleteForm
        visibility={isDeleteFormOpen}
        onClose={handleDeleteForm}
        data={clickedHotel.id}
      />

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
