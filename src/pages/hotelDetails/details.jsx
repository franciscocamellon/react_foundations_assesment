import {
  ImageList,
  ImageListItem,
  List,
  ListItemIcon,
  ListItemText,
  Rating,
  ListItem,
} from "@mui/material";
import {
  LocationOn,
  Wifi,
  LocalParking,
  AcUnit,
  Coffee,
  LocalLaundryService,
  SmokeFree,
  Elevator,
  Restaurant,
} from "@mui/icons-material";
import Header from "../../components/header/header";

import styles from "./styles.module.css";
import HotelHeader from "../../components/detailHeader/header";
import HotelImageList from "../../components/imageList/hotelImageList";
import HotelDescription from "../../components/hotelDescription/hotelDescription";

function Details() {
  return (
    <>
      <Header></Header>

      <div className={styles.container}>
        <h1>Detalhes</h1>
        <HotelHeader />
        <HotelImageList />
        <HotelDescription />
      </div>
    </>
  );
}

export default Details;
