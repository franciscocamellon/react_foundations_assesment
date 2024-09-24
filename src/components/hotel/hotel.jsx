import { useState } from "react";

import HotelDescription from "./description";
import HotelHeader from "./header";
import HotelImageList from "./imageList";
import RegistrationForm from "../forms/registration";

import styles from "./styles.module.css";
import DeleteForm from "../forms/delete";

function Hotel({
  hotel,
  formVisibility,
  deleteFormVisibility,
  onCloseForm,
  onEditClick,
  onDeleteClick,
  onCloseDeleteForm,
}) {
  return (
    <>
      <HotelHeader
        rating={parseInt(hotel.rating)}
        name={hotel.name}
        city={hotel.city}
        state={hotel.state}
        price={hotel.price}
        onEditIconClick={() => onEditClick(true)}
        onDeleteIconClick={() => onDeleteClick(true)}
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
      <DeleteForm
        visibility={deleteFormVisibility}
        onClose={onCloseDeleteForm}
        data={hotel.id}
      />
    </>
  );
}

export default Hotel;
