import { Rating } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

import styles from "./styles.module.css";

function HotelHeader() {
  return (
    <div className={styles.page_title_container}>
      <div className={styles.hotel_title}>
        <Rating></Rating>
        <h1>Hotel Atlântico Avenida</h1>
        <p>
          <LocationOn color="primary" /> <span>Rio de Janeiro - RJ</span>
        </p>
      </div>

      <div className={styles.hotel_price}>
        <p>R$ 450</p>
      </div>
    </div>
  );
}

export default HotelHeader;
