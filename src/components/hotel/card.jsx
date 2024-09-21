import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./styles.module.css";

function HotelCard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Link to={`/details/${props.hotel.id}`}>
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
          image={props.hotel.principalImage}
        />

        <div className={styles.card_content}>
          <div className={styles.card_header}>
            <CardHeader
              title={props.hotel.name}
              subheader={`${props.hotel.city} - ${props.hotel.state}`}
            />
            <Rating
              name="simple-controlled"
              value={parseInt(props.hotel.rating)}
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
