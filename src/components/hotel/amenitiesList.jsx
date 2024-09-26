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
import { green, grey } from "@mui/material/colors";

function AmenitiesList({ list }) {
  return (
    <>
      <h4>Principais comodidades</h4>
      <List sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        <ListItem>
          <ListItemIcon>
            <Wifi color={list.Wifi ? "success" : "disabled"} />
          </ListItemIcon>
          <ListItemText
            primary="Wifi gratuito"
            sx={{ color: list.Wifi ? green[900] : grey[400] }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalParking color={list.LocalParking ? "success" : "disabled"} />
          </ListItemIcon>
          <ListItemText
            primary="Estacionamento interno"
            sx={{ color: list.LocalParking ? green[900] : grey[400] }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AcUnit color={list.AcUnit ? "success" : "disabled"} />
          </ListItemIcon>
          <ListItemText
            primary="Ar condicionado"
            sx={{ color: list.AcUnit ? green[900] : grey[400] }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalLaundryService
              color={list.LocalLaundryService ? "success" : "disabled"}
            />
          </ListItemIcon>
          <ListItemText
            primary="Lavanderia"
            sx={{ color: list.LocalLaundryService ? green[900] : grey[400] }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Coffee color={list.Coffee ? "success" : "disabled"} />
          </ListItemIcon>
          <ListItemText
            primary="Café da manhã"
            sx={{ color: list.Coffee ? green[900] : grey[400] }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SmokeFree color={list.SmokeFree ? "success" : "disabled"} />
          </ListItemIcon>
          <ListItemText
            primary="Quartos para não fumantes"
            sx={{ color: list.SmokeFree ? green[900] : grey[400] }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Elevator color={list.Elevator ? "success" : "disabled"} />
          </ListItemIcon>
          <ListItemText
            primary="Elevador"
            sx={{ color: list.Elevator ? green[900] : grey[400] }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Restaurant color={list.Restaurant ? "success" : "disabled"} />
          </ListItemIcon>
          <ListItemText
            primary="Restaurante"
            sx={{ color: list.Restaurant ? green[900] : grey[400] }}
          />
        </ListItem>
      </List>
    </>
  );
}

export default AmenitiesList;
