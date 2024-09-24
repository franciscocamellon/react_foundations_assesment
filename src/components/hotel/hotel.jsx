import { useState } from "react";

import HotelDescription from "./description";
import HotelHeader from "./header";
import HotelImageList from "./imageList";
import RegistrationForm from "../forms/registration";

import styles from "./styles.module.css";

function Hotel({ hotel }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleOpenForm() {
    setIsFormOpen(!isFormOpen);
    console.log(isFormOpen);
  }

  return (
    <>
      <HotelHeader
        rating={parseInt(hotel.rating)}
        name={hotel.name}
        city={hotel.city}
        state={hotel.state}
        price={hotel.price}
        onEditIconClick={() => setIsFormOpen(true)}
        onDeleteIconClick={() => {}}
      />
      <HotelImageList
        principalImage={hotel.principalImage}
        firstRoom={hotel.firstRoom}
        secondRoom={hotel.secondRoom}
        thirdRoom={hotel.thirdRoom}
      />
      <HotelDescription
        description={hotel.description}
        amenities={hotel.amenities}
      />
      <RegistrationForm
        visibility={isFormOpen}
        onClose={handleOpenForm}
        data={hotel}
      />
    </>
  );
}

export default Hotel;
