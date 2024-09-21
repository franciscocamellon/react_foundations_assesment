import HotelDescription from "./description";
import HotelHeader from "./header";
import HotelImageList from "./imageList";
import styles from "./styles.module.css";

function Hotel({ hotel }) {
  return (
    <>
      <HotelHeader
        rating={parseInt(hotel.rating)}
        name={hotel.name}
        city={hotel.city}
        state={hotel.state}
        price={hotel.price}
      />
      <HotelImageList
        principalImage={hotel.principalImage}
        firstRoom={hotel.firstRoom}
        secondRoom={hotel.secondRoom}
        thirdRoom={hotel.thirdRoom}
      />
      <HotelDescription description={hotel.description} />
    </>
  );
}

export default Hotel;
