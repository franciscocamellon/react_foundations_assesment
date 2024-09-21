import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./styles.module.css";
import { CardHeader, CardMedia, Rating, Typography } from "@mui/material";

const hotels = {
  name: "CasinhaPiri",
  image:
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/417557103.jpg?k=d4cf7959d88130e96cfedcb7137ec51fb805a75a1b15e7017f1d7e6e5aa87c39&o=&hp=1",
  rating: "4",
  city: "Pirinópolis",
  state: "Goiás",
  price: "585",
};

function HotelCard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Link to={"/details"}>
      <Card
        sx={{
          minWidth: isMobile ? 20 : 600,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <CardMedia
          sx={{ maxWidth: 200, borderRadius: 1.5 }}
          component="img"
          height="auto"
          image={props.hotel.image}
        />

        <div className={styles.card_content}>
          <div className={styles.card_header}>
            <CardHeader
              title={props.hotel.name}
              subheader={`${props.hotel.city} - ${props.hotel.state}`}
            />
            <Rating
              name="simple-controlled"
              value={props.hotel.rating}
            ></Rating>
          </div>
          <div className={styles.card_info}>
            <CardContent>
              <Typography
                textAlign={isMobile ? "left" : "right"}
                variant="body2"
                color="text.secondary"
              >
                A partir de
              </Typography>
              <Typography
                textAlign={isMobile ? "left" : "right"}
                fontWeight="bold"
                variant="h5"
              >
                R$ {props.hotel.price}
              </Typography>
              <Typography
                textAlign={isMobile ? "left" : "right"}
                variant="body2"
                color="text.secondary"
              >
                por noite
              </Typography>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default HotelCard;
