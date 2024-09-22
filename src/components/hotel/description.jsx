import AmenitiesList from "./amenitiesList";
import styles from "./styles.module.css";

function HotelDescription({ description, amenities }) {
  return (
    <div className={styles.hotel_description}>
      <p>{description}</p>
      <AmenitiesList list={amenities} />
    </div>
  );
}

export default HotelDescription;
