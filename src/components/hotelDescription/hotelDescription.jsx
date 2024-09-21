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

import styles from "./styles.module.css";

function HotelDescription() {
  return (
    <div className={styles.hotel_description}>
      <p>
        Situado no centro do Rio de Janeiro, o Hotel Atlântico Avenida oferece
        vista da movimentada Avenida Rio Branco. Este hotel fica a apenas 5
        minutos do Aeroporto Santos Dumont e dispõe de Wi-Fi gratuito nas áreas
        comuns.
      </p>
      <p>
        Os quartos do Hotel Atlântico Avenida têm cama com cabeceira ornamental
        em madeira maciça e decoração em tons vivos. Todas as unidades incluem
        ar-condicionado, TV a cabo, frigobar e um banheiro privativo.
      </p>
      <p>
        Os quartos do Hotel Atlântico Avenida têm cama com cabeceira ornamental
        em madeira maciça e decoração em tons vivos. Todas as unidades incluem
        ar-condicionado, TV a cabo, frigobar e um banheiro privativo.
      </p>
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
    </div>
  );
}

export default HotelDescription;
