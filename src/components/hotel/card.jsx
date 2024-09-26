import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./styles.module.css";

function HotelCard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={styles.card_container}>
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
          <Link to={`/details/${props.hotel.id}`}>
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
          </Link>
          <div className={styles.card_info}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flex: 1,
                marginRight: 10,
              }}
            >
              <Favorite
                color={props.hotel.favorite ? "error" : "disabled"}
                onClick={() => props.onFavoriteToggle(props.hotel.id)}
              />
              <Share color="primary" />
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
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
    </div>
  );
}

export default HotelCard;
