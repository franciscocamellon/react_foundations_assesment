import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Hotel from "../../components/hotel/hotel";

import styles from "./styles.module.css";

function Details() {
  const params = useParams();

  const storedHotels = JSON.parse(localStorage.getItem("@hotels"));

  const clickedHotel = storedHotels.find((hotel) => hotel.id === params.id);

  return (
    <>
      <Header></Header>

      <div className={styles.container}>
        <h1>Detalhes</h1>
        <Hotel key={params.id} hotel={clickedHotel} />
      </div>
    </>
  );
}

export default Details;
