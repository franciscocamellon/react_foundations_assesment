import { Rating } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

import styles from "./styles.module.css";

function HotelHeader({ rating, name, city, state, price }) {
  return (
    <div className={styles.page_title_container}>
      <div className={styles.hotel_title}>
        <Rating name="simple-controlled" value={rating}></Rating>
        <h1>{name}</h1>
        <p>
          <LocationOn color="primary" /> <span>{`${city} - ${state}`}</span>
        </p>
      </div>

      <div className={styles.hotel_price}>
        <p>R$ {price}</p>
      </div>
    </div>
  );
}

export default HotelHeader;
