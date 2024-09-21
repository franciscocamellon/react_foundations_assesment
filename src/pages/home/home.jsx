import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import Header from "../../components/header/header";
import HotelCard from "../../components/hotel/hotel";
import { mockHhotels } from "./hotels";

function Home() {
  const [hotels, setHotels] = useState([]);

  function retrieveHotels() {
    const initialData = localStorage.getItem("@loadedInitialData");

    if (!initialData) {
      localStorage.setItem("@hotels", JSON.stringify(mockHhotels));
      localStorage.setItem("@loadedInitialData", JSON.stringify(true));
    }

    const arrayHotels = JSON.parse(localStorage.getItem("@hotels"));
    setHotels(arrayHotels);
  }

  useEffect(() => {
    retrieveHotels();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.page_title_container}>
          <h1>Hotéis perto de você</h1>
          <h5>
            Encontre ofertas incríveis de hotéis para hoje à noite ou para sua
            próxima viagem
          </h5>
        </div>

        <div className={styles.container_list}>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
