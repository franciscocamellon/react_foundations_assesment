import AmenitiesList from "./amenitiesList";
import styles from "./styles.module.css";

function HotelDescription({ description }) {
  return (
    <div className={styles.hotel_description}>
      <p>{description}</p>
      <AmenitiesList />
    </div>
  );
}

export default HotelDescription;
