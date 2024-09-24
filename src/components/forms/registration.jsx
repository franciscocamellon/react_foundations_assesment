import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";

import { brazilianStates, amenities } from "../../data/applicationData";
import { useEffect, useState } from "react";

function RegistrationForm(props) {
  const [formData, setFormData] = useState(
    props.data
      ? props.data
      : {
          id: "",
          name: "",
          principalImage: "",
          firstRoom: "",
          secondRoom: "",
          thirdRoom: "",
          rating: "",
          city: "",
          state: "",
          price: "",
          description: "",
          amenities: "",
        }
  );

  const [chosenAmenities, setChosenAmenities] = useState(
    props.data
      ? props.data.amenities
      : {
          Wifi: false,
          LocalParking: false,
          AcUnit: false,
          LocalLaundryService: false,
          Coffee: false,
          SmokeFree: false,
          Elevator: false,
          Restaurant: false,
        }
  );

  function saveHotel(event) {
    event.preventDefault();

    const newHotel = {
      id: uuidv4(),
      name: formData.name,
      principalImage: formData.principalImage,
      firstRoom: formData.firstRoom,
      secondRoom: formData.secondRoom,
      thirdRoom: formData.thirdRoom,
      rating: formData.rating,
      city: formData.city,
      state: formData.state,
      price: formData.price,
      description: formData.description,
      amenities: chosenAmenities,
    };

    const arrayHotels = JSON.parse(localStorage.getItem("@hotels"));
    arrayHotels.push(newHotel);
    localStorage.setItem("@hotels", JSON.stringify(arrayHotels));

    setFormData({
      id: "",
      name: "",
      principalImage: "",
      firstRoom: "",
      secondRoom: "",
      thirdRoom: "",
      rating: "",
      city: "",
      state: "",
      price: "",
      description: "",
      amenities: "",
    });
    props.onClose();
  }

  function editHotel(event, id) {
    event.preventDefault();

    const arrayHotels = JSON.parse(localStorage.getItem("@hotels"));
    const filteredHotel = arrayHotels.find((hotel) => hotel.id === id);

    if (filteredHotel) {
      filteredHotel.name = formData.name;
      filteredHotel.city = formData.city;
      filteredHotel.state = formData.state;
      filteredHotel.price = formData.price;
      filteredHotel.rating = formData.rating;
      filteredHotel.principalImage = formData.principalImage;
      filteredHotel.firstRoom = formData.firstRoom;
      filteredHotel.secondRoom = formData.secondRoom;
      filteredHotel.thirdRoom = formData.thirdRoom;
      filteredHotel.amenities = chosenAmenities;
      filteredHotel.description = formData.description;
    }

    localStorage.setItem("@hotels", JSON.stringify(arrayHotels));

    props.onClose();
  }

  function getChosenAmenities(event) {
    const { name, checked } = event.target;

    setChosenAmenities((prevAmenities) => ({
      ...prevAmenities,
      [name]: checked,
    }));
  }

  return (
    <>
      <Dialog open={props.visibility}>
        {props.data ? (
          <DialogTitle> Edição de Hotel</DialogTitle>
        ) : (
          <DialogTitle> Cadastro de Hotel</DialogTitle>
        )}

        <DialogContent>
          <Stack direction="column" spacing={2} margin={2}>
            <TextField
              value={formData.name || ""}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              variant="outlined"
              label="Nome do hotel"
            />
            <Stack direction="row" spacing={2} margin={2}>
              <TextField
                value={formData.city || ""}
                variant="outlined"
                label="Cidade"
                onChange={(event) =>
                  setFormData({ ...formData, city: event.target.value })
                }
              />

              <FormControl sx={{ mt: 2, minWidth: 200 }}>
                <InputLabel id="br-states">Estado</InputLabel>
                <Select
                  value={formData.state || ""}
                  labelId="br-states"
                  label="Estado"
                  onChange={(event) =>
                    setFormData({ ...formData, state: event.target.value })
                  }
                >
                  {brazilianStates.map((brState) => (
                    <MenuItem key={brState.id} value={brState.abbreviation}>
                      {brState.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>

            <Stack
              sx={{ display: "flex", alignItems: "center" }}
              direction="row"
              spacing={2}
              margin={2}
            >
              <TextField
                value={formData.price || ""}
                variant="outlined"
                label="Preço"
                onChange={(event) =>
                  setFormData({ ...formData, price: event.target.value })
                }
              />
              <Stack>
                <Typography component="legend">Rating</Typography>
                <Rating
                  value={parseInt(formData.rating) || 0}
                  title="Rating"
                  onChange={(event) =>
                    setFormData({ ...formData, rating: event.target.value })
                  }
                ></Rating>
              </Stack>
            </Stack>
            <Stack
              sx={{ display: "flex", alignItems: "center" }}
              direction="row"
              spacing={2}
              margin={2}
            >
              <TextField
                value={formData.principalImage || ""}
                variant="outlined"
                label="Foto principal"
                sx={{ width: "calc(50% - 16px)" }}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    principalImage: event.target.value,
                  })
                }
              />
              <TextField
                value={formData.firstRoom || ""}
                variant="outlined"
                label="Foto quarto simples"
                sx={{ width: "calc(50% - 16px)" }}
                onChange={(event) =>
                  setFormData({ ...formData, firstRoom: event.target.value })
                }
              />
            </Stack>
            <Stack
              sx={{ display: "flex", alignItems: "center" }}
              direction="row"
              spacing={2}
              margin={2}
            >
              <TextField
                value={formData.secondRoom || ""}
                variant="outlined"
                label="Suíte standard"
                sx={{ width: "calc(50% - 16px)" }}
                onChange={(event) =>
                  setFormData({ ...formData, secondRoom: event.target.value })
                }
              />
              <TextField
                value={formData.thirdRoom || ""}
                variant="outlined"
                label="Suíte casal"
                sx={{ width: "calc(50% - 16px)" }}
                onChange={(event) =>
                  setFormData({ ...formData, thirdRoom: event.target.value })
                }
              />
            </Stack>

            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Escolha as comodidades</FormLabel>

              <FormHelperText>
                Escolha todas as que estiverem disponíveis no hotel
              </FormHelperText>
              <FormGroup>
                {amenities.map((amenity) => (
                  <FormControlLabel
                    key={amenity.cod}
                    control={
                      <Checkbox
                        name={amenity.cod}
                        checked={chosenAmenities[amenity.cod] || false}
                        onChange={(event) => getChosenAmenities(event)}
                      />
                    }
                    label={amenity.label}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <TextField
              value={formData.description || ""}
              label="Descrição"
              multiline
              rows={4}
              placeholder="Descreva as características do hotel"
              onChange={(event) =>
                setFormData({ ...formData, description: event.target.value })
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancelar</Button>

          {props.data ? (
            <Button
              type="submit"
              onClick={(event) => editHotel(event, props.data.id)}
            >
              Editar
            </Button>
          ) : (
            <Button type="submit" onClick={(event) => saveHotel(event)}>
              Salvar
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RegistrationForm;
