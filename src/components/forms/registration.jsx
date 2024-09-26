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
  Alert,
  Snackbar,
} from "@mui/material";

import { brazilianStates, amenities } from "../../data/applicationData";
import { useEffect, useState } from "react";
import FormFeedbackSnackbar from "../feedback/formFeedback";

function RegistrationForm(props) {
  const [formData, setFormData] = useState({
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

  const [chosenAmenities, setChosenAmenities] = useState({
    Wifi: false,
    LocalParking: false,
    AcUnit: false,
    LocalLaundryService: false,
    Coffee: false,
    SmokeFree: false,
    Elevator: false,
    Restaurant: false,
  });

  const [nameError, setNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleHotel(hotelData, chosenAmenities, isEditMode) {
    if (isEditMode) {
      return {
        name: hotelData.name,
        principalImage: hotelData.principalImage,
        firstRoom: hotelData.firstRoom,
        secondRoom: hotelData.secondRoom,
        thirdRoom: hotelData.thirdRoom,
        rating: hotelData.rating,
        city: hotelData.city,
        state: hotelData.state,
        price: hotelData.price,
        description: hotelData.description,
        amenities: chosenAmenities,
      };
    } else {
      return {
        id: uuidv4(),
        name: hotelData.name,
        principalImage: hotelData.principalImage,
        firstRoom: hotelData.firstRoom,
        secondRoom: hotelData.secondRoom,
        thirdRoom: hotelData.thirdRoom,
        rating: hotelData.rating,
        city: hotelData.city,
        state: hotelData.state,
        price: hotelData.price,
        description: hotelData.description,
        amenities: chosenAmenities,
      };
    }
  }

  function handleFormSubmit(hotelData) {
    let isFormDirty = false;
    if (!hotelData.name || !hotelData.name.length) {
      setNameError("Campo obrigatório");
      isFormDirty = true;
    } else {
      setNameError("");
    }
    if (!hotelData.city || !hotelData.city.length) {
      setCityError("Campo obrigatório");
      isFormDirty = true;
    } else {
      setCityError("");
    }
    if (!hotelData.price || !hotelData.price.length) {
      setPriceError("Campo obrigatório");
      isFormDirty = true;
    } else {
      setPriceError("");
    }
    if (!isFormDirty) {
      return true;
    } else {
      return false;
    }
  }

  function resetForm() {
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
  }

  function saveHotel(event) {
    event.preventDefault();

    if (handleFormSubmit(formData)) {
      try {
        const newHotel = handleHotel(formData, chosenAmenities, false);

        const arrayHotels = JSON.parse(localStorage.getItem("@hotels"));
        arrayHotels.push(newHotel);
        localStorage.setItem("@hotels", JSON.stringify(arrayHotels));

        resetForm();
        props.onClose();
        props.onSuccess("success");
      } catch (error) {
        props.onSuccess(error);
      }
    } else {
      setShowToast(true);
    }
  }

  function editHotel(event, id) {
    event.preventDefault();
    const arrayHotels = JSON.parse(localStorage.getItem("@hotels"));
    const filteredHotel = arrayHotels.find((hotel) => hotel.id === id);

    if (handleFormSubmit(formData)) {
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
      props.onSuccess("success");
    } else {
      setShowToast(true);
    }
  }

  function getChosenAmenities(event) {
    const { name, checked } = event.target;

    setChosenAmenities((prevAmenities) => ({
      ...prevAmenities,
      [name]: checked,
    }));
  }

  function handleOnCloseForm() {
    setShowToast(false);
    setNameError("");
    setCityError("");
    setPriceError("");
    props.onClose();
  }

  useEffect(() => {
    if (props.data) {
      setFormData({
        id: props.data.id || "",
        name: props.data.name || "",
        principalImage: props.data.principalImage || "",
        firstRoom: props.data.firstRoom || "",
        secondRoom: props.data.secondRoom || "",
        thirdRoom: props.data.thirdRoom || "",
        rating: props.data.rating || "",
        city: props.data.city || "",
        state: props.data.state || "",
        price: props.data.price || "",
        description: props.data.description || "",
        amenities: props.data.amenities || {},
      });

      setChosenAmenities(
        props.data.amenities || {
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
    }
  }, [props.data]);

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
              required
              error={nameError && nameError.length ? true : false}
              value={formData.name || ""}
              onChange={(event) => {
                setFormData({ ...formData, name: event.target.value });
                if (event.target.value.length > 0) {
                  setNameError("");
                }
              }}
              variant="outlined"
              label="Nome do hotel"
              helperText={nameError}
            />
            <Stack direction="row" spacing={2} margin={2}>
              <TextField
                required
                error={cityError && cityError.length ? true : false}
                value={formData.city || ""}
                variant="outlined"
                label="Cidade"
                onChange={(event) => {
                  setFormData({ ...formData, city: event.target.value });
                  if (event.target.value.length > 0) {
                    setCityError("");
                  }
                }}
                helperText={cityError}
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
                required
                error={priceError && priceError.length ? true : false}
                value={formData.price || ""}
                variant="outlined"
                label="Preço"
                onChange={(event) => {
                  setFormData({ ...formData, price: event.target.value });
                  if (event.target.value.length > 0) {
                    setPriceError("");
                  }
                }}
                helperText={priceError}
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
          <Button onClick={handleOnCloseForm}>Cancelar</Button>

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

        <FormFeedbackSnackbar
          isOpen={showToast}
          onCloseFeedback={() => setShowToast(false)}
          alertSeverity={"error"}
          message={"Preencha os campos obrigatórios!"}
        />
      </Dialog>
    </>
  );
}

export default RegistrationForm;
