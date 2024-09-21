import { List, ListItemIcon, ListItemText, ListItem } from "@mui/material";
import {
  Wifi,
  LocalParking,
  AcUnit,
  Coffee,
  LocalLaundryService,
  SmokeFree,
  Elevator,
  Restaurant,
} from "@mui/icons-material";

function AmenitiesList() {
  return (
    <>
      <h4>Principais comodidades</h4>
      <List sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <ListItem>
          <ListItemIcon>
            <Wifi />
          </ListItemIcon>
          <ListItemText primary="Wifi gratuito" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalParking />
          </ListItemIcon>
          <ListItemText primary="Estacionamento interno" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AcUnit />
          </ListItemIcon>
          <ListItemText primary="Ar condicionado" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalLaundryService />
          </ListItemIcon>
          <ListItemText primary="Lavanderia" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Coffee />
          </ListItemIcon>
          <ListItemText primary="Café da manhã" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SmokeFree />
          </ListItemIcon>
          <ListItemText primary="Quartos para não fumantes" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Elevator />
          </ListItemIcon>
          <ListItemText primary="Elevador" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Restaurant />
          </ListItemIcon>
          <ListItemText primary="Restaurante" />
        </ListItem>
      </List>
    </>
  );
}

export default AmenitiesList;
