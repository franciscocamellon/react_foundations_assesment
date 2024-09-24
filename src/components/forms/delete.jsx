import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeleteForm(props) {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }

  function deleteHotel(event, id) {
    event.preventDefault();

    const arrayHotels = JSON.parse(localStorage.getItem("@hotels"));
    const filteredHotel = arrayHotels.filter((hotel) => hotel.id != id);

    if (filteredHotel) {
      localStorage.setItem("@hotels", JSON.stringify(filteredHotel));
    }

    props.onClose();

    navigate("/");
  }

  return (
    <>
      <Dialog open={props.visibility}>
        <DialogTitle>Deletar Hotel</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Este hotel será deletado e esta ação não pode ser desfeita. Deseja
            continuar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancelar</Button>

          <Button
            type="submit"
            onClick={(event) => deleteHotel(event, props.data)}
          >
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteForm;
