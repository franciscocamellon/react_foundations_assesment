import { useState } from "react";

import HotelDescription from "./description";
import HotelHeader from "./header";
import HotelImageList from "./imageList";
import RegistrationForm from "../forms/registration";

import styles from "./styles.module.css";

function Hotel({ hotel, formVisibility, onCloseForm, onEditClick }) {
  return (
    <>
      <HotelHeader
        rating={parseInt(hotel.rating)}
        name={hotel.name}
        city={hotel.city}
        state={hotel.state}
        price={hotel.price}
        onEditIconClick={() => onEditClick(true)}
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
        visibility={formVisibility}
        onClose={onCloseForm}
        data={hotel}
      />
    </>
  );
}

export default Hotel;
